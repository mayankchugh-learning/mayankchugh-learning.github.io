# JSON → Fabric Bronze: Ingestion Reference

**Core rule:** land JSON at Bronze as close to raw as possible — nested structure intact, no flattening. Flatten in Silver. Fabric's auto-flatten features (Copy Data Table sink, Eventstream default landing) only flatten one level deep; anything nested past that gets silently stringified, not actually parsed.

---

## Source 1: REST API

### Method A — Copy Data activity (Data Factory pipeline)
Use the REST connector as source.

- **Sink = Files (Binary/JSON copy):** safest choice for nested JSON. The response body lands as-is in `Files/bronze/api_name/`, one file per call (or per page). Nothing gets flattened, nothing gets lost.
- **Sink = Lakehouse Table:** Copy Data will auto-map top-level JSON keys to columns, but nested objects/arrays become a single stringified column. Fine for flat responses, a trap for nested ones — you'd need a downstream notebook step to actually parse those columns.
- **Pagination:** set pagination rules under the REST source (`AbsoluteUrl`, `Header`, or `QueryParameters` based, depending on the API) if the endpoint pages results — otherwise you silently only capture page 1.

Practical default: Copy Data → Files sink (raw JSON), then a PySpark notebook does the actual parsing into Silver. Keep Copy Data doing what it's good at (orchestration/movement), not schema interpretation.

### Method B — PySpark notebook
```python
import requests
import json

resp = requests.get("https://api.example.com/orders", headers={"Authorization": f"Bearer {token}"})
resp.raise_for_status()
data = resp.json()

# Land raw first — write the untouched response to Bronze before any parsing
raw_path = "Files/bronze/api_orders/orders_raw.json"
with open(f"/lakehouse/default/{raw_path}", "w") as f:
    json.dump(data, f)

# Then read it back as a Spark DataFrame, nested structure preserved
df = spark.read.option("multiline", "true").json(f"Files/bronze/api_orders/orders_raw.json")
df.printSchema()
```
This is the most robust option when the API needs auth headers, pagination loops, or retry logic — things Copy Data's REST connector handles more rigidly.

### Method C — Dataflow Gen2
Use the **Web** connector → `Json.Document(Web.Contents(url))`. Power Query will auto-expand nested records/lists through its UI (the little expand-arrows icon on a column), which is convenient for exploration but produces M code that's brittle against schema drift — a new nested field appearing upstream won't auto-appear in your expanded columns. Good for a one-off exploratory pull; I wouldn't build a production Bronze layer on it for a source that changes shape.

---

## Source 2: ADLS Gen2 / Blob Storage

### Method A — Copy Data activity
ADLS Gen2 connector, source = folder/wildcard path (e.g. `raw/*.json`), sink = **Lakehouse Files** (binary copy). This is close to a pure file-copy operation — fastest and least error-prone of the three methods for this source, since there's no transformation happening, just data movement into `Files/bronze/`.

### Method B — PySpark notebook
```python
# multiLine=True is required if each file is a single JSON array/object
# spanning multiple lines — without it, Spark treats each line as a
# separate record and corrupts nested multi-line JSON
df = spark.read.option("multiline", "true").json("Files/bronze/blob_source/*.json")
df.printSchema()

# For production robustness, define the schema explicitly rather than
# letting Spark infer it — inference forces a full scan of the data
# just to determine types, and silently drifts if upstream adds a field
from pyspark.sql.types import StructType, StructField, StringType, ArrayType

schema = StructType([
    StructField("customer_id", StringType()),
    StructField("orders", ArrayType(StructType([
        StructField("order_id", StringType()),
        StructField("amount", StringType())
    ])))
])
df = spark.read.option("multiline", "true").schema(schema).json("Files/bronze/blob_source/*.json")
```

### Method C — Dataflow Gen2
Azure Data Lake Storage connector, same expand-column caveat as the API method above. Reasonable for smaller, stable, one-off datasets; not what I'd reach for on a recurring nested-JSON feed.

---

## Source 3: Streaming (Eventstream)

Eventstream doesn't fit the Copy Data / notebook / Dataflow trio the same way — it's a continuous ingestion mechanism, not a batch pull. JSON events (from Event Hubs, IoT Hub, or a custom endpoint) flow through Eventstream and land via one of its output destinations:

- **Lakehouse table destination:** Eventstream auto-derives a schema from the JSON event and writes rows directly. Same one-level-flatten limitation applies — nested arrays/objects in the event payload land as a stringified column, not expanded fields.
- **Eventhouse (KQL database) destination:** better fit if events are genuinely nested/semi-structured and high-volume — KQL's `dynamic` type natively handles nested JSON without forcing a flatten at ingestion, and you parse it at query time instead.

If you want a real Bronze *table* out of streaming nested JSON (not just a KQL landing zone), a common pattern: Eventstream → Eventhouse (preserves nesting, handles the volume) → a scheduled notebook or pipeline periodically reads from Eventhouse and writes a parsed/flattened batch into the Lakehouse Silver layer. Trying to flatten in real time inside Eventstream itself is where people get stuck.

---

## Flattening nested JSON (Silver layer, not Bronze)

This is where the actual nested-to-tabular work happens, regardless of which source/method landed the data.

```python
from pyspark.sql.functions import explode, col

# Given Bronze schema: customer_id, orders: array<struct<order_id, amount, items: array<struct<sku, qty>>>>

# Level 1: explode the orders array — one row per order
df_orders = df_bronze.withColumn("order", explode("orders")).select(
    col("customer_id"),
    col("order.order_id").alias("order_id"),
    col("order.amount").alias("order_amount"),
    col("order.items").alias("items")   # still nested — explode again if needed
)

# Level 2: explode items if you need line-item grain
df_items = df_orders.withColumn("item", explode("items")).select(
    "customer_id", "order_id", "order_amount",
    col("item.sku").alias("sku"),
    col("item.qty").alias("qty")
)
```

**Watch-outs specific to nested JSON at scale:**
- Inconsistent schema across records (some events missing a nested field) — handle with an explicit schema (nullable) rather than inference, or you get job failures on the record that doesn't match what the first N records implied.
- Deeply nested (3+ levels) needs a recursive flatten helper rather than manual chained `explode()` calls — worth writing once and reusing.
- `explode()` on a null or empty array drops that row entirely by default — use `explode_outer()` if you need to keep the parent row even when the nested array is empty.
