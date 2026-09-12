# Cloud-Agnostic Infographic Prompts — AWS vs Azure vs GCP
LinkedIn carousel series | Format: Why? / What? / How? + simple analogy

## How to use this file
- All prompts target vertical **4:5** (1080x1350), 3-band layout: WHY (top) / WHAT (middle) / HOW (bottom).
- Brand-color convention so each provider is instantly recognizable at a glance:
  - **AWS** → orange (#FF9900) accents
  - **Azure** → blue (#0078D4) accents
  - **GCP** → multicolor blue/red/yellow/green accents (or GCP blue #4285F4 if you want a calmer palette)
- Keep background neutral (white/light gray) across the whole series so the provider colors do the differentiating.
- Each topic below states its analogy once — reuse it verbatim across that topic's 5-6 prompts so the series stays coherent when posted as consecutive carousels.

---

## 1. Database (Relational)
**Analogy:** an organized library with a catalog system — structured shelves, strict rules, easy to look things up by the same criteria every time.

1. Flat design infographic, vertical 4:5, 3-column comparison layout for "Managed Relational Databases": AWS RDS/Aurora (orange accents), Azure SQL Database (blue accents), GCP Cloud SQL/AlloyDB (multicolor accents). WHY band: library-catalog analogy illustration, caption "Like a library — structured shelves, consistent rules for finding things". WHAT band: three service icons side by side with names. HOW band: one-line takeaway per provider on when to pick it. Bold section headers, clean icon style, neutral background.

2. Flat design infographic, vertical 4:5, 3-column comparison "High Availability & Multi-Zone Setup": AWS Multi-AZ RDS vs Azure SQL Zone-Redundant vs GCP Cloud SQL High Availability. WHY band: library-catalog analogy extended — "backup librarian on standby in another building". WHAT band: diagram of primary + standby instance per provider with failover arrow. HOW band: short caption "Automatic failover, near-zero downtime" per column.

3. Flat design infographic, vertical 4:5, 3-column comparison "Read Replicas & Scaling": AWS RDS Read Replicas vs Azure SQL Read Replicas vs GCP Cloud SQL Read Replicas. WHY band: analogy of "extra copies of the library catalog for people who only need to browse, not edit". WHAT band: primary DB icon branching into 2-3 replica icons per column. HOW band: caption on read-scaling use case (reporting, analytics offload).

4. Flat design infographic, vertical 4:5, 3-column comparison "Backup & Point-in-Time Recovery": AWS RDS automated backups vs Azure SQL PITR vs GCP Cloud SQL backups. WHY band: analogy "like a library's daily inventory snapshot you can rewind to". WHAT band: timeline icon with restore-point markers per provider. HOW band: retention window caption per column.

5. Flat design infographic, vertical 4:5, 3-column comparison "Pricing Tiers & Serverless Options": AWS Aurora Serverless vs Azure SQL Serverless vs GCP AlloyDB/Cloud SQL. WHY band: analogy "paying the librarian only when someone's actually browsing, vs a fixed staff salary". WHAT band: three pricing-model icons (provisioned vs serverless toggle). HOW band: caption "Good fit for spiky, unpredictable workloads".

6. Flat design infographic, vertical 4:5, 3-column comparison "Choosing the Right Database Engine": AWS RDS engine options (Postgres/MySQL/Aurora) vs Azure SQL family vs GCP Cloud SQL/AlloyDB engine options. WHY band: analogy "different catalog systems for different collections — fiction vs reference vs archives". WHAT band: engine logos grid per provider. HOW band: one-line decision guide caption.

---

## 2. NoSQL
**Analogy:** sticky notes on a wall vs a rigid filing cabinet — flexible, fast to add, no fixed schema.

1. Flat design infographic, vertical 4:5, 3-column comparison "What is NoSQL — Key-Value Stores": AWS DynamoDB vs Azure Cosmos DB (Table API) vs GCP Firestore/Bigtable. WHY band: sticky-note-wall analogy illustration. WHAT band: three service icons with "key → value" simple diagram. HOW band: caption on use case (session state, shopping cart).

2. Flat design infographic, vertical 4:5, 3-column comparison "Document Databases": AWS DynamoDB (Document mode) vs Azure Cosmos DB (Core/SQL API) vs GCP Firestore. WHY band: sticky-note analogy — "each note can have different fields, no two need to match". WHAT band: JSON-document icon per provider. HOW band: caption "flexible schema, great for evolving apps".

3. Flat design infographic, vertical 4:5, 3-column comparison "Global Distribution & Multi-Region Writes": AWS DynamoDB Global Tables vs Azure Cosmos DB multi-region vs GCP Firestore multi-region. WHY band: analogy "copies of the sticky-note wall in every office worldwide, synced automatically". WHAT band: world map icon with 3 region nodes per provider. HOW band: caption on latency/consistency tradeoff.

4. Flat design infographic, vertical 4:5, 3-column comparison "Scaling Model — Partitions & Throughput": AWS DynamoDB partition keys/capacity units vs Azure Cosmos DB RU/s vs GCP Firestore auto-scaling. WHY band: analogy "adding more wall space automatically as more notes come in". WHAT band: scaling arrow icon with throughput units labeled per provider. HOW band: caption on capacity planning approach (provisioned vs on-demand).

5. Flat design infographic, vertical 4:5, 3-column comparison "Consistency Models": AWS DynamoDB eventual/strong consistency vs Azure Cosmos DB 5 consistency levels vs GCP Firestore strong consistency. WHY band: analogy "does everyone see the sticky note the instant it's added, or a few seconds later?". WHAT band: simple slider icon from "eventual" to "strong" per provider. HOW band: caption on when each matters.

6. Flat design infographic, vertical 4:5, 3-column comparison "Best-Fit Use Cases": AWS DynamoDB vs Azure Cosmos DB vs GCP Firestore/Bigtable for IoT, gaming leaderboards, product catalogs. WHY band: sticky-note-wall analogy closing recap. WHAT band: three use-case icon sets per provider. HOW band: one-line "pick this when…" caption per column.

---

## 3. Networking
**Analogy:** a city's road and highway system — main roads, private lanes, checkpoints, and connections to other cities.

1. Flat design infographic, vertical 4:5, 3-column comparison "Virtual Network Basics": AWS VPC vs Azure VNet vs GCP VPC. WHY band: road-system analogy illustration — a walled city with its own road grid. WHAT band: simple network-boundary icon per provider with "isolated private network" caption. HOW band: caption on default behavior (region-scoped vs global for GCP).

2. Flat design infographic, vertical 4:5, 3-column comparison "Subnets & Segmentation": AWS public/private subnets vs Azure subnets vs GCP subnets. WHY band: analogy "dividing the city into residential and industrial zones". WHAT band: network diagram with 2-3 subnet blocks per provider. HOW band: caption on public vs private routing.

3. Flat design infographic, vertical 4:5, 3-column comparison "Load Balancing": AWS ELB/ALB/NLB vs Azure Load Balancer/App Gateway vs GCP Cloud Load Balancing. WHY band: analogy "traffic police directing cars to the least busy road". WHAT band: load balancer icon distributing to 3 backend instance icons per provider. HOW band: caption on L4 vs L7 balancing.

4. Flat design infographic, vertical 4:5, 3-column comparison "Private Connectivity": AWS PrivateLink vs Azure Private Endpoint vs GCP Private Service Connect. WHY band: analogy "a private tunnel between two buildings, off the public road entirely". WHAT band: dotted private-tunnel icon connecting two service boxes per provider. HOW band: caption "keeps traffic off the public internet".

5. Flat design infographic, vertical 4:5, 3-column comparison "DNS & Traffic Management": AWS Route 53 vs Azure DNS/Traffic Manager vs GCP Cloud DNS. WHY band: analogy "the city's street-sign and address system". WHAT band: DNS lookup icon flow per provider. HOW band: caption on routing policies (latency, geo, failover).

6. Flat design infographic, vertical 4:5, 3-column comparison "Hybrid & On-Prem Connectivity": AWS Direct Connect vs Azure ExpressRoute vs GCP Cloud Interconnect. WHY band: analogy "a dedicated private highway from your office straight into the city, bypassing public roads". WHAT band: on-prem building icon connected via dedicated line to cloud icon per provider. HOW band: caption on why enterprises use it (bandwidth, reliability, security).

---

## 4. Serverless (Compute)
**Analogy:** running a food truck vs owning and maintaining a restaurant building.

1. Flat design infographic, vertical 4:5, 3-column comparison "Functions-as-a-Service Basics": AWS Lambda vs Azure Functions vs GCP Cloud Functions. WHY band: food-truck analogy — "show up, cook, serve, leave — no building to maintain". WHAT band: function icon triggered by an event icon per provider. HOW band: caption "pay only per execution".

2. Flat design infographic, vertical 4:5, 3-column comparison "Event Triggers": AWS Lambda triggers (S3, SQS, API Gateway) vs Azure Functions triggers (Blob, Queue, HTTP) vs GCP Cloud Functions triggers (Storage, Pub/Sub, HTTP). WHY band: analogy "the food truck opens only when a customer bell rings". WHAT band: trigger-source icons feeding into function icon per provider. HOW band: caption on common trigger types.

3. Flat design infographic, vertical 4:5, 3-column comparison "Cold Starts & Auto-Scaling": AWS Lambda concurrency vs Azure Functions scale controller vs GCP Cloud Functions instances. WHY band: analogy "how fast can the food truck get the grill hot when a rush of customers arrives?". WHAT band: scaling curve icon from 0 to N instances per provider. HOW band: caption on mitigation options (provisioned concurrency, min instances).

4. Flat design infographic, vertical 4:5, 3-column comparison "Serverless Containers": AWS Fargate vs Azure Container Apps vs GCP Cloud Run. WHY band: analogy "renting a fully equipped food truck instead of building your own kitchen from scratch". WHAT band: container icon running without a visible server icon, per provider. HOW band: caption "run containers without managing servers".

5. Flat design infographic, vertical 4:5, 3-column comparison "Serverless Orchestration & Workflows": AWS Step Functions vs Azure Logic Apps vs GCP Workflows. WHY band: analogy "the food truck's daily prep checklist — step 1, step 2, step 3". WHAT band: flowchart icon with 3-4 connected steps per provider. HOW band: caption on visual workflow orchestration use case.

6. Flat design infographic, vertical 4:5, 3-column comparison "Serverless Pricing Model": AWS Lambda pricing (requests + duration) vs Azure Functions Consumption plan vs GCP Cloud Functions pricing. WHY band: analogy "pay per plate served, not for keeping the kitchen open all day". WHAT band: simple pricing formula icon (requests x duration) per provider. HOW band: caption on free-tier allowances.

---

## 5. API (Management / Gateway)
**Analogy:** a hotel concierge desk — one front door that routes every guest request to the right department.

1. Flat design infographic, vertical 4:5, 3-column comparison "API Gateway Basics": AWS API Gateway vs Azure API Management vs GCP Apigee/API Gateway. WHY band: concierge-desk analogy illustration. WHAT band: gateway icon routing to 3 backend service icons per provider. HOW band: caption "single front door for all your APIs".

2. Flat design infographic, vertical 4:5, 3-column comparison "Authentication & Authorization": AWS API Gateway + Cognito vs Azure APIM + Azure AD/Entra ID vs GCP Apigee + Identity Platform. WHY band: analogy "concierge checking your room key before letting you through". WHAT band: lock/key icon at the gateway per provider. HOW band: caption on OAuth2/JWT validation.

3. Flat design infographic, vertical 4:5, 3-column comparison "Rate Limiting & Throttling": AWS API Gateway usage plans vs Azure APIM rate-limit policies vs GCP Apigee quotas. WHY band: analogy "concierge limiting how many requests one guest can make per hour". WHAT band: speedometer/throttle icon per provider. HOW band: caption "protects backend from overload".

4. Flat design infographic, vertical 4:5, 3-column comparison "Developer Portal & API Catalog": AWS API Gateway + Developer Portal vs Azure APIM Developer Portal vs GCP Apigee Developer Portal. WHY band: analogy "the hotel's guest directory — see what services are available and how to request them". WHAT band: catalog/menu icon per provider. HOW band: caption on self-service API discovery.

5. Flat design infographic, vertical 4:5, 3-column comparison "Versioning & Lifecycle Management": AWS API Gateway stages vs Azure APIM versions/revisions vs GCP Apigee API proxies. WHY band: analogy "concierge handling both the old and new hotel menu during a transition". WHAT band: v1/v2 branching icon per provider. HOW band: caption on backward compatibility.

6. Flat design infographic, vertical 4:5, 3-column comparison "API Monitoring & Analytics": AWS API Gateway + CloudWatch vs Azure APIM Analytics vs GCP Apigee Analytics. WHY band: analogy "concierge logging every guest request to spot patterns". WHAT band: dashboard/graph icon per provider. HOW band: caption on usage insights and error tracking.

---

## 6. AI / ML Platforms
**Analogy:** hiring a personal chef (fully managed) vs a well-stocked kitchen with recipe books (build-your-own) vs full-service catering (pre-built AI).

1. Flat design infographic, vertical 4:5, 3-column comparison "Managed ML Platforms": AWS SageMaker vs Azure Machine Learning vs GCP Vertex AI. WHY band: chef analogy illustration — three levels of "someone else does the cooking". WHAT band: platform icon with training/deploy pipeline per provider. HOW band: caption "one platform to train, tune, and deploy models".

2. Flat design infographic, vertical 4:5, 3-column comparison "AutoML": AWS SageMaker Autopilot vs Azure Automated ML vs GCP Vertex AI AutoML. WHY band: analogy "chef auto-suggesting the recipe based on your ingredients". WHAT band: data-in, model-out simple pipeline icon per provider. HOW band: caption "no ML expertise required to get a working model".

3. Flat design infographic, vertical 4:5, 3-column comparison "Model Deployment & Hosting": AWS SageMaker Endpoints vs Azure ML Endpoints vs GCP Vertex AI Endpoints. WHY band: analogy "plating the finished dish and serving it to customers on demand". WHAT band: model icon behind an endpoint/API icon per provider. HOW band: caption on real-time vs batch inference.

4. Flat design infographic, vertical 4:5, 3-column comparison "MLOps Pipelines": AWS SageMaker Pipelines vs Azure ML Pipelines vs GCP Vertex AI Pipelines. WHY band: analogy "the kitchen's standard prep-to-plate workflow, repeatable every time". WHAT band: pipeline stages icon (data → train → validate → deploy) per provider. HOW band: caption on reproducibility and CI/CD for ML.

5. Flat design infographic, vertical 4:5, 3-column comparison "Pre-Trained Models & Model Gardens": AWS Bedrock model catalog vs Azure AI Foundry model catalog vs GCP Vertex AI Model Garden. WHY band: analogy "catering menu of ready-made dishes you can order instead of cooking from scratch". WHAT band: model-catalog grid icon per provider. HOW band: caption on foundation model access (Claude, GPT, Gemini, Llama).

6. Flat design infographic, vertical 4:5, 3-column comparison "Notebook & Dev Environments": AWS SageMaker Studio vs Azure ML Studio vs GCP Vertex AI Workbench. WHY band: analogy "the chef's test kitchen for experimenting before service". WHAT band: notebook/IDE icon per provider. HOW band: caption on collaborative experimentation.

---

## 7. Cloud-Side AI Features — By Provider (separate sets)

### 7A. AWS AI Services
**Analogy:** a toolbox of specialized power tools — one purpose-built tool for each job (vision, language, speech).

1. Flat design infographic, vertical 4:5, single-provider (AWS orange branding) deep-dive "AWS Vision & Text Extraction": Rekognition (image/video analysis) + Textract (document text extraction). WHY band: toolbox analogy — "the right specialized tool for reading, not guessing". WHAT band: icons for image-in → labels-out, document-in → structured-text-out. HOW band: caption on common use cases (content moderation, ID scanning).

2. Flat design infographic, vertical 4:5, single-provider (AWS orange branding) "AWS Language Understanding": Amazon Comprehend (NLP, sentiment, entities). WHY band: toolbox analogy — "a tool that reads between the lines of text". WHAT band: text-in → sentiment/entities-out icon flow. HOW band: caption on use cases (customer feedback analysis, entity extraction).

3. Flat design infographic, vertical 4:5, single-provider (AWS orange branding) "AWS Voice & Speech": Amazon Polly (text-to-speech) + Amazon Transcribe (speech-to-text). WHY band: toolbox analogy — "tools that translate between voice and text, both directions". WHAT band: microphone icon and speaker icon with bidirectional arrows. HOW band: caption on use cases (call center transcription, voice assistants).

4. Flat design infographic, vertical 4:5, single-provider (AWS orange branding) "Amazon Bedrock — Generative AI": foundation model access (Claude, Titan, Llama) via one API. WHY band: toolbox analogy — "one universal socket that fits many different power tools (models)". WHAT band: single API icon branching to multiple model-logo icons. HOW band: caption "swap models without rewriting your app".

5. Flat design infographic, vertical 4:5, single-provider (AWS orange branding) "AWS Personalization & Forecasting": Amazon Personalize + Amazon Forecast. WHY band: toolbox analogy — "a tool that predicts what the customer needs next". WHAT band: user-behavior-data-in → recommendation-out icon flow. HOW band: caption on use cases (product recommendations, demand forecasting).

6. Flat design infographic, vertical 4:5, single-provider (AWS orange branding) "AWS Document & Contact Center AI": Amazon Textract + Amazon Connect + Comprehend combo. WHY band: toolbox analogy closing recap — "specialized tools, combined for a full workflow". WHAT band: document + call-center + NLP icons connected in a pipeline. HOW band: caption on end-to-end use case (automated claims processing).

### 7B. Azure AI Services
**Analogy:** a Swiss army knife — many cognitive skills bundled into one connected toolset.

1. Flat design infographic, vertical 4:5, single-provider (Azure blue branding) "Azure AI Vision & Document Intelligence": Computer Vision + Document Intelligence (Form Recognizer). WHY band: Swiss-army-knife analogy — "one tool, multiple folded-out blades for different vision tasks". WHAT band: image/document-in → structured-data-out icon flow. HOW band: caption on use cases (invoice processing, image tagging).

2. Flat design infographic, vertical 4:5, single-provider (Azure blue branding) "Azure AI Language": Language service (sentiment, key phrase extraction, entity recognition, summarization). WHY band: Swiss-army-knife analogy — "the text-analysis blade of the knife". WHAT band: text-in → multiple output types (sentiment, summary, entities) icon flow. HOW band: caption on use cases (support ticket triage).

3. Flat design infographic, vertical 4:5, single-provider (Azure blue branding) "Azure AI Speech": Speech-to-Text, Text-to-Speech, Speech Translation. WHY band: Swiss-army-knife analogy — "the voice blade, folding out into three related tools". WHAT band: microphone/speaker/translate icons connected. HOW band: caption on use cases (real-time meeting transcription/translation).

4. Flat design infographic, vertical 4:5, single-provider (Azure blue branding) "Azure OpenAI Service": GPT/embeddings models hosted natively on Azure with enterprise security. WHY band: Swiss-army-knife analogy — "the flagship blade, built for enterprise-grade cooking". WHAT band: enterprise-shield icon wrapping a model-API icon. HOW band: caption "same models, enterprise compliance and networking".

5. Flat design infographic, vertical 4:5, single-provider (Azure blue branding) "Azure AI Foundry": unified studio for building, evaluating, and deploying AI apps/agents. WHY band: Swiss-army-knife analogy — "the handle that holds every blade together in one place". WHAT band: hub icon connecting to multiple AI service icons. HOW band: caption on unified dev experience.

6. Flat design infographic, vertical 4:5, single-provider (Azure blue branding) "Azure AI Search & Custom Vision": Cognitive Search (RAG-ready) + Custom Vision (train your own image classifier). WHY band: Swiss-army-knife analogy closing recap. WHAT band: search-index icon + custom-model-training icon. HOW band: caption on use cases (enterprise knowledge search, custom defect detection).

### 7C. GCP AI Services
**Analogy:** a research lab dashboard — direct access to Google's own AI research, productized into simple APIs.

1. Flat design infographic, vertical 4:5, single-provider (GCP multicolor branding) "GCP Vision & Document AI": Vision AI + Document AI. WHY band: research-lab analogy — "the same underlying tech Google uses for Photos and Search, given to you as an API". WHAT band: image/document-in → labels/structured-data-out icon flow. HOW band: caption on use cases (retail visual search, invoice parsing).

2. Flat design infographic, vertical 4:5, single-provider (GCP multicolor branding) "GCP Natural Language AI": entity/sentiment/syntax analysis API. WHY band: research-lab analogy — "the language-understanding engine behind Google Search, exposed as an API". WHAT band: text-in → structured-analysis-out icon flow. HOW band: caption on use cases (content classification, sentiment tracking).

3. Flat design infographic, vertical 4:5, single-provider (GCP multicolor branding) "GCP Speech-to-Text & Text-to-Speech": powered by the same models behind Google Assistant. WHY band: research-lab analogy — "the voice engine from your phone's assistant, available to your app". WHAT band: microphone/speaker icons with waveform. HOW band: caption on use cases (multilingual transcription, voice UI).

4. Flat design infographic, vertical 4:5, single-provider (GCP multicolor branding) "Vertex AI Generative — Gemini Models": Gemini family access via Vertex AI. WHY band: research-lab analogy — "direct pipeline to Google DeepMind's latest models". WHAT band: single API icon connecting to Gemini model-tier icons (Flash/Pro). HOW band: caption on multimodal capability (text, image, video, audio in one model).

5. Flat design infographic, vertical 4:5, single-provider (GCP multicolor branding) "GCP Translation AI": Cloud Translation API + AutoML Translation. WHY band: research-lab analogy — "the same translation engine behind Google Translate, at API scale". WHAT band: text-in-language-A → text-out-language-B icon flow. HOW band: caption on use cases (global content localization).

6. Flat design infographic, vertical 4:5, single-provider (GCP multicolor branding) "GCP AI Platform Recap — Search + Recommendations": Vertex AI Search + Recommendations AI. WHY band: research-lab analogy closing recap — "Google's own product-search and recommendation tech, productized". WHAT band: search-bar icon + recommendation-carousel icon. HOW band: caption on use cases (e-commerce search relevance, personalized recs).

---

## 8. Storage
**Analogy:** a self-storage warehouse — you rent exactly the space and access speed you need, nothing more.

1. Flat design infographic, vertical 4:5, 3-column comparison "Object Storage Basics": AWS S3 vs Azure Blob Storage vs GCP Cloud Storage. WHY band: warehouse analogy illustration. WHAT band: bucket/container icon with files going in per provider. HOW band: caption "store any amount of unstructured data, pay per GB".

2. Flat design infographic, vertical 4:5, 3-column comparison "Storage Tiers & Lifecycle Policies": AWS S3 Standard/IA/Glacier vs Azure Hot/Cool/Archive vs GCP Standard/Nearline/Coldline/Archive. WHY band: analogy "cheap long-term storage unit vs a locker you visit daily". WHAT band: tier ladder icon (hot to cold) per provider. HOW band: caption on automatic tiering rules.

3. Flat design infographic, vertical 4:5, 3-column comparison "File Storage (Shared File Systems)": AWS EFS/FSx vs Azure Files vs GCP Filestore. WHY band: analogy "a shared filing room multiple people can access at once". WHAT band: shared-folder icon connected to multiple compute-instance icons per provider. HOW band: caption on use cases (shared app config, lift-and-shift file servers).

4. Flat design infographic, vertical 4:5, 3-column comparison "Block Storage": AWS EBS vs Azure Managed Disks vs GCP Persistent Disk. WHY band: analogy "the hard drive bolted directly to your storage unit's shelving". WHAT band: disk icon attached to a VM icon per provider. HOW band: caption on use case (VM boot/data volumes).

5. Flat design infographic, vertical 4:5, 3-column comparison "Data Transfer & Migration": AWS DataSync/Snowball vs Azure Data Box/Storage Migration Service vs GCP Transfer Appliance/Storage Transfer Service. WHY band: analogy "moving truck for bulk-relocating your warehouse contents". WHAT band: on-prem-to-cloud arrow icon with a "truck" or "pipe" icon per provider. HOW band: caption on network vs physical transfer options.

6. Flat design infographic, vertical 4:5, 3-column comparison "Storage Security & Encryption": AWS S3 encryption/Object Lock vs Azure Blob encryption/immutability vs GCP Cloud Storage encryption/retention policies. WHY band: analogy "the padlock and access log on your storage unit door". WHAT band: lock icon over the storage bucket per provider. HOW band: caption on encryption-at-rest and compliance (WORM/immutability).

---

## 9. IAM & Security
**Analogy:** an office building's keycard access system — who gets in, which floors, and for how long.

1. Flat design infographic, vertical 4:5, 3-column comparison "Identity Basics": AWS IAM vs Azure AD (Entra ID) vs GCP Cloud IAM. WHY band: keycard analogy illustration. WHAT band: identity/user icon issued a "keycard" icon per provider. HOW band: caption "every action starts with an authenticated identity".

2. Flat design infographic, vertical 4:5, 3-column comparison "Role-Based Access Control": AWS IAM Roles/Policies vs Azure RBAC vs GCP IAM Roles. WHY band: analogy "keycard programmed for specific floors only, not the whole building". WHAT band: role icon with scoped permission checkmarks per provider. HOW band: caption on least-privilege principle.

3. Flat design infographic, vertical 4:5, 3-column comparison "Federated Identity & SSO": AWS IAM Identity Center vs Azure AD SSO vs GCP Workforce Identity Federation. WHY band: analogy "one badge that works across multiple buildings owned by the same company". WHAT band: single-sign-on icon connecting to multiple app icons per provider. HOW band: caption on reducing password sprawl.

4. Flat design infographic, vertical 4:5, 3-column comparison "Secrets Management": AWS Secrets Manager vs Azure Key Vault vs GCP Secret Manager. WHY band: analogy "the building's safe for storing master keys, not lying around on a desk". WHAT band: vault/safe icon with a rotating-key icon per provider. HOW band: caption on automatic secret rotation.

5. Flat design infographic, vertical 4:5, 3-column comparison "Policy & Compliance Guardrails": AWS Organizations/SCPs vs Azure Policy vs GCP Organization Policy. WHY band: analogy "building-wide rules that apply no matter which floor you're on". WHAT band: shield/checklist icon over an organization-tree icon per provider. HOW band: caption on enforcing guardrails at scale.

6. Flat design infographic, vertical 4:5, 3-column comparison "MFA & Conditional Access": AWS IAM MFA vs Azure AD Conditional Access vs GCP Context-Aware Access. WHY band: analogy "keycard plus a fingerprint scan before the door unlocks". WHAT band: keycard + fingerprint icon per provider. HOW band: caption on risk-based access decisions.

---

## 10. Containers & Orchestration
**Analogy:** cargo containers on a shipping port — standardized boxes that any crane or ship can handle, plus the port authority (orchestrator) coordinating everything.

1. Flat design infographic, vertical 4:5, 3-column comparison "Managed Kubernetes": AWS EKS vs Azure AKS vs GCP GKE. WHY band: shipping-port analogy illustration — port authority managing container placement automatically. WHAT band: Kubernetes-cluster icon with container-box icons per provider. HOW band: caption "control plane managed for you".

2. Flat design infographic, vertical 4:5, 3-column comparison "Container Registries": AWS ECR vs Azure Container Registry vs GCP Artifact Registry. WHY band: analogy "the port's warehouse where standardized containers are stored before shipping". WHAT band: registry/warehouse icon with container-box icons stacked per provider. HOW band: caption on image scanning and versioning.

3. Flat design infographic, vertical 4:5, 3-column comparison "Node Pools & Autoscaling": AWS EKS managed node groups vs AKS node pools vs GKE node pools/Autopilot. WHY band: analogy "the port adding more cranes automatically during a busy shipping season". WHAT band: scaling node icons (2 → 5 → 10) per provider. HOW band: caption on cluster autoscaler behavior.

4. Flat design infographic, vertical 4:5, 3-column comparison "Service Mesh": AWS App Mesh vs Azure Service Mesh (Istio add-on) vs GCP Anthos Service Mesh. WHY band: analogy "the traffic-control tower coordinating which ship docks at which berth". WHAT band: mesh-network icon connecting multiple service icons per provider. HOW band: caption on traffic management, retries, observability between services.

5. Flat design infographic, vertical 4:5, 3-column comparison "CI/CD for Containers": AWS CodePipeline+ECR vs Azure DevOps+ACR vs GCP Cloud Build+Artifact Registry. WHY band: analogy "the automated conveyor belt from factory to dock to ship". WHAT band: pipeline-stages icon (build → push → deploy) per provider. HOW band: caption on automated container deployment.

6. Flat design infographic, vertical 4:5, 3-column comparison "Cost & Scaling Model": AWS EKS/Fargate pricing vs AKS free control plane + node cost vs GKE Autopilot pay-per-pod. WHY band: analogy "port fees — pay per berth used vs a flat harbor membership". WHAT band: pricing-comparison icon per provider. HOW band: caption on cost tradeoffs (control plane fees, per-pod billing).

---

## 11. Messaging & Event Streaming
**Analogy:** a postal sorting facility — mail (messages) comes in, gets sorted, and routed to the right destination, reliably and in order when needed.

1. Flat design infographic, vertical 4:5, 3-column comparison "Pub/Sub Messaging": AWS SNS+SQS vs Azure Service Bus+Event Grid vs GCP Pub/Sub. WHY band: postal-sorting analogy illustration. WHAT band: publisher icon → topic icon → multiple subscriber icons per provider. HOW band: caption "decouple producers from consumers".

2. Flat design infographic, vertical 4:5, 3-column comparison "Event Streaming at Scale": AWS Kinesis/MSK vs Azure Event Hubs vs GCP Pub/Sub+Dataflow. WHY band: analogy "a conveyor belt of mail moving continuously, not just single letters". WHAT band: continuous stream icon with multiple consumer icons reading in parallel per provider. HOW band: caption on high-throughput real-time data (clickstreams, IoT telemetry).

3. Flat design infographic, vertical 4:5, 3-column comparison "Queue vs Topic Patterns": AWS SQS (queue) vs SNS (topic) / Azure Queue vs Topic / GCP Pub/Sub topic+subscription model. WHY band: analogy "a single mailbox (queue) vs a mailing list broadcast to everyone (topic)". WHAT band: one-to-one vs one-to-many icon diagram per provider. HOW band: caption on choosing point-to-point vs fan-out.

4. Flat design infographic, vertical 4:5, 3-column comparison "Dead-Letter Queues & Retry Logic": AWS SQS DLQ vs Azure Service Bus DLQ vs GCP Pub/Sub dead-letter topics. WHY band: analogy "the undeliverable-mail bin at the sorting facility". WHAT band: failed-message icon routed to a separate "DLQ" bin icon per provider. HOW band: caption on handling poison messages.

5. Flat design infographic, vertical 4:5, 3-column comparison "Event-Driven Architecture": AWS EventBridge vs Azure Event Grid vs GCP Eventarc. WHY band: analogy "the sorting facility automatically triggering a delivery truck the moment mail arrives". WHAT band: event-source icon triggering multiple downstream service icons per provider. HOW band: caption on loosely-coupled, reactive systems.

6. Flat design infographic, vertical 4:5, 3-column comparison "Throughput & Scaling": AWS Kinesis shards vs Azure Event Hubs throughput units vs GCP Pub/Sub auto-scaling. WHY band: analogy "adding more sorting lanes as mail volume grows". WHAT band: scaling lane icons (1 → 3 → 6) per provider. HOW band: caption on capacity planning approach.

---

## 12. Monitoring & Observability
**Analogy:** a car's dashboard — speedometer, fuel gauge, warning lights, all telling you the health of the system at a glance.

1. Flat design infographic, vertical 4:5, 3-column comparison "Metrics & Dashboards": AWS CloudWatch vs Azure Monitor vs GCP Cloud Monitoring. WHY band: dashboard analogy illustration. WHAT band: gauge/dial icons per provider showing sample metrics. HOW band: caption "real-time visibility into system health".

2. Flat design infographic, vertical 4:5, 3-column comparison "Centralized Logging": AWS CloudWatch Logs vs Azure Log Analytics vs GCP Cloud Logging. WHY band: analogy "the car's black-box event recorder". WHAT band: log-stream icon flowing into a central log-store icon per provider. HOW band: caption on log querying and retention.

3. Flat design infographic, vertical 4:5, 3-column comparison "Distributed Tracing": AWS X-Ray vs Azure Application Insights (distributed tracing) vs GCP Cloud Trace. WHY band: analogy "tracking a single delivery's route across every relay station it passed through". WHAT band: trace-path icon crossing multiple service-box icons per provider. HOW band: caption on debugging microservices latency.

4. Flat design infographic, vertical 4:5, 3-column comparison "Alerting": AWS CloudWatch Alarms vs Azure Monitor Alerts vs GCP Cloud Monitoring Alerting. WHY band: analogy "the dashboard warning light that turns on before you break down on the highway". WHAT band: warning-light icon triggering a notification-bell icon per provider. HOW band: caption on threshold-based and anomaly alerts.

5. Flat design infographic, vertical 4:5, 3-column comparison "Cost of Observability": AWS CloudWatch pricing (metrics/logs ingestion) vs Azure Monitor pricing (data ingestion/retention) vs GCP Cloud Monitoring/Logging pricing. WHY band: analogy "premium dashboard sensors cost more than the basic gauge cluster". WHAT band: pricing-tier icon per provider. HOW band: caption on managing log/metric volume to control cost.

6. Flat design infographic, vertical 4:5, 3-column comparison "Application Performance Monitoring (APM)": AWS X-Ray+CloudWatch ServiceLens vs Azure Application Insights vs GCP Cloud Trace+Profiler. WHY band: analogy "the full diagnostic computer a mechanic plugs in, beyond just the dashboard". WHAT band: end-to-end app-map icon with performance metrics per provider. HOW band: caption on identifying bottlenecks across the whole application.

---

## 13. Cost Management
**Analogy:** a budgeting app connected to your bank account — see what you're spending, get alerts before you overspend, and find ways to save.

1. Flat design infographic, vertical 4:5, 3-column comparison "Cost Visibility Dashboards": AWS Cost Explorer vs Azure Cost Management vs GCP Cloud Billing Reports. WHY band: budgeting-app analogy illustration. WHAT band: spending-graph icon per provider. HOW band: caption "see where every dollar is going, broken down by service".

2. Flat design infographic, vertical 4:5, 3-column comparison "Budgets & Alerts": AWS Budgets vs Azure Budgets vs GCP Budgets & Alerts. WHY band: analogy "the app texting you when you're close to your monthly limit". WHAT band: budget-threshold icon with a notification-bell per provider. HOW band: caption on proactive overspend prevention.

3. Flat design infographic, vertical 4:5, 3-column comparison "Reserved & Committed Pricing": AWS Reserved Instances/Savings Plans vs Azure Reserved Instances/Savings Plans vs GCP Committed Use Discounts. WHY band: analogy "committing to a gym membership for a discount vs paying per visit". WHAT band: commitment-discount icon (percentage off) per provider. HOW band: caption on predictable-workload savings.

4. Flat design infographic, vertical 4:5, 3-column comparison "Cost Optimization Tools": AWS Trusted Advisor/Compute Optimizer vs Azure Advisor vs GCP Recommender. WHY band: analogy "the budgeting app suggesting a cheaper subscription plan for the same service". WHAT band: recommendation/lightbulb icon per provider. HOW band: caption on rightsizing and idle-resource detection.

5. Flat design infographic, vertical 4:5, 3-column comparison "Tagging & Cost Allocation": AWS Cost Allocation Tags vs Azure Tags+Cost Management vs GCP Labels+Billing Export. WHY band: analogy "labeling each expense category in the budgeting app — groceries vs entertainment". WHAT band: tag/label icon attached to resource icons per provider. HOW band: caption on chargeback to teams/projects.

6. Flat design infographic, vertical 4:5, 3-column comparison "Free Tier & Getting Started Credits": AWS Free Tier vs Azure Free Account ($200 credit) vs GCP Free Tier ($300 credit). WHY band: analogy "the trial period before your budgeting app starts charging a subscription fee". WHAT band: gift/credit icon per provider. HOW band: caption on what's genuinely free vs limited-time.

---

## 14. FinOps
**Analogy:** a household budget review meeting — finance, engineering, and the business sitting down regularly to make sure spending actually matches the value delivered.

1. Flat design infographic, vertical 4:5, single concept explainer (neutral multi-cloud branding, no single provider color dominant) "What is FinOps?": WHY band: household-budget-meeting analogy illustration — three people (Finance, Engineering, Business) around a table with a spending chart. WHAT band: definition icon "a cultural practice bringing financial accountability to variable cloud spend". HOW band: caption "not a tool — a practice combining people, process, and technology".

2. Flat design infographic, vertical 4:5, concept explainer "Cost Allocation — Showback vs Chargeback": WHY band: analogy "splitting a shared restaurant bill fairly among diners based on what each person ordered". WHAT band: showback icon (report only) vs chargeback icon (actual billing) side by side. HOW band: caption on tagging/labeling as the foundation for accurate splits.

3. Flat design infographic, vertical 4:5, concept explainer "The FinOps Lifecycle — Inform, Optimize, Operate": WHY band: analogy "the monthly cycle of checking your bank statement, cutting a subscription, then reviewing again next month". WHAT band: 3-stage circular loop icon labeled Inform → Optimize → Operate. HOW band: caption "a continuous loop, not a one-time cost-cutting project".

4. Flat design infographic, vertical 4:5, concept explainer "Cost Anomaly Detection": WHY band: analogy "your credit card app flagging an unusual charge before you even notice it". WHAT band: spending-graph icon with a spike highlighted and an alert icon. HOW band: caption on catching runaway costs (forgotten resources, misconfigured autoscaling) early.

5. Flat design infographic, vertical 4:5, concept explainer "Unit Economics — Cost per Customer/Transaction": WHY band: analogy "a restaurant calculating cost-per-meal to price the menu correctly, not just tracking total kitchen spend". WHAT band: formula icon "Total Cloud Spend ÷ Business Metric (users, transactions, orders)". HOW band: caption "connects cloud spend directly to business value".

6. Flat design infographic, vertical 4:5, 3-column comparison "Native FinOps Tooling": AWS Cost Explorer + Cost Anomaly Detection vs Azure Cost Management + Advisor vs GCP Cloud Billing + Recommender, plus a note on third-party FinOps platforms (CloudHealth, Cloudability, Vantage). WHY band: household-budget analogy closing recap. WHAT band: three native-tool icons plus a "third-party platform" icon. HOW band: caption on when native tools are enough vs when to add a dedicated FinOps platform.

---

## 15. Docker
**Analogy:** a standardized shipping container — pack your app and everything it needs once, and it runs identically on any ship, truck, or port that speaks the container standard.

1. Flat design infographic, vertical 4:5, concept explainer "What is a Container?": WHY band: shipping-container analogy illustration — one sealed box that fits any cargo ship regardless of what's inside. WHAT band: app + dependencies packed into a single container icon, contrasted with a "works on my machine" broken icon. HOW band: caption "runs identically everywhere — laptop, test server, production".

2. Flat design infographic, vertical 4:5, concept explainer "Dockerfile & Images": WHY band: analogy "the recipe card (Dockerfile) that produces a sealed, ready-to-ship meal kit (image)". WHAT band: Dockerfile text-icon → build arrow → image-box icon. HOW band: caption "build once, run as many containers as you need from the same image".

3. Flat design infographic, vertical 4:5, concept explainer "Docker Compose — Multi-Container Apps": WHY band: analogy "a food court where multiple stalls (containers) work together to serve one meal — app, database, cache". WHAT band: docker-compose.yml icon orchestrating 3 connected container icons. HOW band: caption "define and run multi-container apps with one command".

4. Flat design infographic, vertical 4:5, concept explainer "Container Registries": WHY band: analogy "a warehouse of pre-packed shipping containers, ready to pull off the shelf instead of packing from scratch". WHAT band: registry/warehouse icon (Docker Hub, ECR, ACR, Artifact Registry logos) with push/pull arrows. HOW band: caption "store, version, and share container images".

5. Flat design infographic, vertical 4:5, concept explainer "Container Networking & Volumes": WHY band: analogy "containers connected by cables to talk to each other, plus a removable storage locker (volume) that survives even if the container is replaced". WHAT band: two container icons linked by a network line, one attached to a separate storage-locker icon. HOW band: caption "persistent data survives container restarts".

6. Flat design infographic, vertical 4:5, concept explainer "Docker vs Virtual Machines": WHY band: analogy "many shipping containers sharing one cargo ship's engine (OS) vs each container having its own separate ship". WHAT band: side-by-side diagram — containers sharing one OS layer vs VMs each with a full OS layer. HOW band: caption "containers are lighter and start faster; VMs offer stronger isolation".

---

## 16. Kubernetes (Core Concepts)
**Analogy:** an orchestra conductor — coordinating many individual musicians (containers) so they start, stop, and scale together as one coherent performance.

1. Flat design infographic, vertical 4:5, concept explainer "What is Kubernetes / Why Orchestration?": WHY band: conductor analogy illustration — one conductor coordinating many musicians (containers) across the stage. WHAT band: cluster icon managing multiple container icons automatically. HOW band: caption "keeps your containers running, healthy, and scaled — automatically".

2. Flat design infographic, vertical 4:5, concept explainer "Pods, Deployments & ReplicaSets": WHY band: analogy "the conductor always ensuring the right number of violinists are on stage, replacing one instantly if they step away". WHAT band: pod icon (smallest deployable unit) grouped under a deployment icon maintaining a set replica count. HOW band: caption "self-healing — Kubernetes replaces failed pods automatically".

3. Flat design infographic, vertical 4:5, concept explainer "Services & Ingress (Networking)": WHY band: analogy "the concert hall's sound system routing music to the right section of the audience, no matter which musician is playing". WHAT band: Service icon load-balancing traffic to multiple pod icons, Ingress icon routing external traffic in. HOW band: caption "stable network identity even as pods come and go".

4. Flat design infographic, vertical 4:5, concept explainer "ConfigMaps & Secrets": WHY band: analogy "the conductor's sheet music (config, freely shared) vs the venue's locked safe with security codes (secrets, tightly guarded)". WHAT band: ConfigMap icon (open document) next to Secret icon (locked vault), both feeding into a pod icon. HOW band: caption "separate configuration and sensitive data from your application code".

5. Flat design infographic, vertical 4:5, concept explainer "Horizontal Pod Autoscaling": WHY band: analogy "adding more musicians to the string section automatically as the concert hall fills up". WHAT band: scaling pod-count icon (3 → 6 → 12) tied to a CPU/traffic-load gauge. HOW band: caption "scales pod count automatically based on real-time demand".

6. Flat design infographic, vertical 4:5, concept explainer "Helm Charts — Packaging Kubernetes Apps": WHY band: analogy "a pre-arranged musical score bundle you can hand to any orchestra and get the same performance instantly". WHAT band: Helm-chart-box icon deploying a full multi-resource application in one action. HOW band: caption "package, version, and reuse complex Kubernetes deployments".

---

## 17. Ansible
**Analogy:** a recipe you can hand to any kitchen and get the exact same dish every time — no matter who's cooking or which stove they're using.

1. Flat design infographic, vertical 4:5, concept explainer "What is Configuration Management / Ansible?": WHY band: recipe analogy illustration — one recipe card handed to multiple different kitchens, same dish comes out each time. WHAT band: YAML playbook icon applied to multiple server icons simultaneously. HOW band: caption "automate server setup consistently, at any scale".

2. Flat design infographic, vertical 4:5, concept explainer "Playbooks & Tasks": WHY band: analogy "the step-by-step recipe card — chop, season, cook, plate, in order". WHAT band: playbook icon expanding into a numbered task-list icon. HOW band: caption "declare the desired end state, step by step".

3. Flat design infographic, vertical 4:5, concept explainer "Agentless Architecture (Inventory + SSH)": WHY band: analogy "walking into any kitchen with just the recipe — no special equipment needs to be pre-installed". WHAT band: control-node icon connecting directly to multiple target-server icons via a simple line (no agent icon on targets). HOW band: caption "no software to install on managed servers — just SSH".

4. Flat design infographic, vertical 4:5, concept explainer "Idempotency": WHY band: analogy "following the recipe twice never doubles the salt — the result is identical either way". WHAT band: "run 1" and "run 2" icons both pointing to the exact same end-state icon. HOW band: caption "safe to re-run — Ansible only changes what's actually different".

5. Flat design infographic, vertical 4:5, concept explainer "Roles & Reusability": WHY band: analogy "pre-packaged recipe modules — a sauce base, a garnish — that you mix and match into different dishes". WHAT band: role-folder icons (web server, database, monitoring) combining into one playbook icon. HOW band: caption "package repeatable setup logic once, reuse everywhere".

6. Flat design infographic, vertical 4:5, 3-column comparison "Ansible for Cloud Provisioning": AWS modules vs Azure modules vs GCP modules within Ansible. WHY band: analogy "the same recipe adapted slightly to work on a gas stove, electric stove, or induction cooktop". WHAT band: single playbook icon branching to AWS/Azure/GCP resource icons. HOW band: caption "one automation language, provision across any cloud".

---

## 18. Azure AKS — Deep Dive
**Analogy:** a fully serviced apartment building — Azure maintains the building's core systems (control plane) while you just manage what's inside your own unit (workloads).

1. Flat design infographic, vertical 4:5, single-provider (Azure blue branding) "AKS Architecture — Managed Control Plane": WHY band: serviced-apartment analogy — Azure handles the building's plumbing and electrical (control plane), free of charge. WHAT band: AKS control-plane icon (Azure-managed, no cost) connected to a worker-node icon (customer-managed). HOW band: caption "you only pay for and manage the worker nodes".

2. Flat design infographic, vertical 4:5, single-provider (Azure blue branding) "AKS Networking — Azure CNI vs Kubenet": WHY band: analogy "apartments with their own direct street address (Azure CNI) vs apartments reached through a shared building lobby (Kubenet)". WHAT band: two networking-model icons side by side. HOW band: caption on choosing based on IP address planning and scale needs.

3. Flat design infographic, vertical 4:5, single-provider (Azure blue branding) "AKS Node Pools & Scaling": WHY band: analogy "adding more apartment units automatically as demand grows, including temporary short-term units (virtual nodes/spot)". WHAT band: node-pool icons scaling up, with a "spot" discount badge. HOW band: caption on cluster autoscaler and mixed node pool strategies.

4. Flat design infographic, vertical 4:5, single-provider (Azure blue branding) "AKS Security — Azure AD & Workload Identity": WHY band: analogy "building-wide keycard system extended to control which apartment can access which service". WHAT band: Azure AD icon integrated with a pod-identity icon. HOW band: caption "pods authenticate to Azure services without stored credentials".

5. Flat design infographic, vertical 4:5, single-provider (Azure blue branding) "AKS Cost Management": WHY band: analogy "no building management fee — you only pay for your own apartment's utilities". WHAT band: "$0 control plane" badge next to node-cost icon and spot-node discount icon. HOW band: caption on cost levers (spot node pools, cluster autoscaler, right-sizing).

6. Flat design infographic, vertical 4:5, single-provider (Azure blue branding) "AKS + CI/CD (Azure DevOps / GitHub Actions)": WHY band: analogy "the building's automated delivery system dropping off packages directly at your apartment door". WHAT band: pipeline icon deploying directly into an AKS cluster icon. HOW band: caption on GitOps and automated deployment workflows.

---

## 19. AWS EKS — Deep Dive
**Analogy:** renting warehouse space in a managed industrial park — AWS maintains the park's shared infrastructure (control plane), you run your own warehouse operations (workloads) inside it.

1. Flat design infographic, vertical 4:5, single-provider (AWS orange branding) "EKS Architecture — Managed Control Plane": WHY band: industrial-park analogy — AWS maintains the park's roads and utilities (control plane) for a flat fee. WHAT band: EKS control-plane icon (AWS-managed, fixed hourly fee) connected to worker-node icon (customer-managed). HOW band: caption "you manage worker nodes; AWS manages and patches the control plane".

2. Flat design infographic, vertical 4:5, single-provider (AWS orange branding) "EKS Networking — VPC CNI & Security Groups for Pods": WHY band: analogy "each warehouse unit getting its own real street address inside the industrial park, with its own security gate". WHAT band: pod icon assigned a real VPC IP, wrapped in a security-group icon. HOW band: caption "pods get native VPC networking, not an overlay".

3. Flat design infographic, vertical 4:5, single-provider (AWS orange branding) "EKS Node Groups & Fargate": WHY band: analogy "choosing between leasing your own warehouse space (managed node groups) or renting fully serviced storage by the pallet (Fargate — serverless)". WHAT band: node-group icon next to a Fargate serverless icon. HOW band: caption "run pods on EC2 nodes you manage, or serverless with no nodes at all".

4. Flat design infographic, vertical 4:5, single-provider (AWS orange branding) "EKS Security — IAM Roles for Service Accounts (IRSA)": WHY band: analogy "each warehouse unit issued its own access badge instead of sharing one master key for the whole park". WHAT band: IAM-role icon attached directly to a pod/service-account icon. HOW band: caption "fine-grained AWS permissions per pod, no shared credentials".

5. Flat design infographic, vertical 4:5, single-provider (AWS orange branding) "EKS Cost Management": WHY band: analogy "a flat monthly park-management fee (control plane) plus pay only for the warehouse space you actually use (nodes/Fargate)". WHAT band: fixed control-plane fee icon next to variable node-cost and spot-discount icons. HOW band: caption on cost levers (Spot Instances, Fargate, Karpenter autoscaling).

6. Flat design infographic, vertical 4:5, single-provider (AWS orange branding) "EKS + CI/CD (CodePipeline / GitHub Actions)": WHY band: analogy "the park's automated freight system delivering goods straight to your warehouse dock". WHAT band: pipeline icon deploying directly into an EKS cluster icon. HOW band: caption on automated build-and-deploy workflows into EKS.

---

## Series Summary
- **19 topics**, **~132 total prompts** (comparison infographics + provider-specific deep dives for AI Features, AKS, and EKS)
- Suggested posting cadence: 2-3 per week keeps this series running ~9+ months of consistent LinkedIn content
- Recommended order: Docker → Kubernetes (Core Concepts) → Database → NoSQL → Storage → Networking → IAM & Security → Serverless → Containers → Azure AKS → AWS EKS → Ansible → API → Messaging → Monitoring → Cost Management → FinOps → AI/ML Platforms → Cloud AI Features (AWS/Azure/GCP as a 3-part closing arc)
- Rationale for order: Docker/K8s fundamentals first (so AKS/EKS deep dives make sense once posted), FinOps placed right after Cost Management as the natural "practice" follow-up, AI/Cloud AI Features closing out the series as the highest-interest topic to end strong
