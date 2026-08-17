---
name: add-ssbi-drill-question
description: >-
  Adds a new interview Q&A (or a new category) to CATEGORIES in
  pages/learning/Sales_SSBI_Interview_Drill.html and refreshes displayed
  question counts on the drill and Learning Hub card. Use when the user wants
  a new drill question, a new category, or to append practiced answers to the
  Sales SSBI Interview Drill. Do not use for Detailed help popups (use
  ssbi-detail-help) or for infographic PNGs (use ssbi-integrate-infographic).
compatibility: Requires Node.js. Intended for mayankchugh-learning.github.io.
---

# Add SSBI Drill Question

Append a Q&A to `const CATEGORIES` in the Sales SSBI Interview Drill. **Always append** to a category. Inserting in the middle would shift `DETAIL_HELP` keys (`categoryId-index`).

**Target:** `pages/learning/Sales_SSBI_Interview_Drill.html`  
**Hub card counts:** `pages/learning/index.html` (Interview & Career section)

## Workflow

```
Add question progress:
- [ ] 1. Resolve category id (or create a new category)
- [ ] 2. Confirm the question is not already present
- [ ] 3. Upsert via script (payload JSON)
- [ ] 4. Refresh displayed counts (script does this)
- [ ] 5. Verify list-questions shows the new id
```

### 1. Resolve category

```powershell
node "${CLAUDE_SKILL_DIR}/../ssbi-detail-help/scripts/list-questions.cjs" pages/learning/Sales_SSBI_Interview_Drill.html --filter "category-name-or-id"
```

Known ids: `model`, `incident`, `platform`, `training`, `stakeholder`, `scenario`, `behavioral`, `fabric-deep`, `json-bronze`, `snowflake`, `star-schema`, `debug-de`, `pyspark`, `parquet`, `purview`, `kql-tsql`.

If none fit, add a **new category at the end** via the payload `newCategory` object (kebab-case `id`, display `name`, 6-char hex `color` without `#`).

### 2. Write payload and run

```json
{
  "category": "fabric-deep",
  "q": "What are Fabric shortcuts?",
  "a": "Shortcuts are virtual references inside OneLake..."
}
```

New category + first question:

```json
{
  "newCategory": {
    "id": "governance",
    "name": "Governance & Compliance",
    "color": "6366F1"
  },
  "q": "...",
  "a": "..."
}
```

```powershell
node "${CLAUDE_SKILL_DIR}/scripts/add-question.cjs" --html pages/learning/Sales_SSBI_Interview_Drill.html --hub pages/learning/index.html --payload path/to/payload.json
```

The script appends the question, then updates:

- Drill meta description, subtitle, footer (`N questions · M categories`)
- Hub card body (“N practiced answers”)
- Hub SVG badge (`N Qs`)

### 3. Answer quality

Write in Mayank’s first-person interview voice (lived Fabric/SSBI examples, not generic textbook). If the user supplied the answer, use it verbatim aside from light grammar fixes. Do not invent production incidents.

### 4. After adding

- New id is `{categoryId}-{newIndex}` (0-based). Tell the user that id.
- If they also pasted a details outline, continue with `/ssbi-detail-help`.
- If they attached a PNG, continue with `/ssbi-integrate-infographic`.
- Delete the temp payload file.

## Do not

- Insert in the middle of a category (breaks DETAIL_HELP index keys)
- Rewire `renderCards` / progress JS (`totalQuestions` is computed from CATEGORIES)
- Commit unless asked
