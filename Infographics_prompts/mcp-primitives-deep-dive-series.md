# MCP Primitives — Deep-Dive Infographic Series

A **14-part deep-dive visual series** for LinkedIn + YouTube Shorts, exploring MCP Primitives (Tools, Resources, Prompts) individually, through three consistent analogies (Supermarket, Company/CEO, Restaurant), and finishing with a complete cheat sheet.

**Series structure:**

1. MCP Primitives — Big Picture
2. Tools = DO — Deep Dive
3. Tools — Supermarket Analogy
4. Resources = KNOW — Deep Dive
5. Resources — Supermarket Analogy
6. Prompts = GUIDE — Deep Dive
7. Prompts — Supermarket Analogy
8. Tools vs Resources vs Prompts
9. Company / CEO Analogy
10. Restaurant Analogy
11. All Three Analogies Side by Side
12. One User Request Using All Three
13. Tool + Resource + Prompt Collaboration
14. Complete MCP Primitives Cheat Sheet

Each infographic is designed for **1080×1350 LinkedIn** and is composition-safe for **1080×1920 YouTube Shorts**.

---

## Global Design System — Use for Every Infographic

Create a premium, technically accurate educational infographic for LinkedIn and YouTube Shorts.

**Primary canvas:**

- 1080 × 1350 px portrait
- Composition-safe for 1080 × 1920 px YouTube Shorts
- Keep all critical text inside the central safe area
- No important content near extreme top/bottom edges

**Visual identity:**

- Dark navy / near-black background
- Premium AI / cloud architecture aesthetic
- Gold/amber for major headings
- White for primary text
- Blue/teal for architecture and communication flows
- Orange for TOOLS
- Green/teal for RESOURCES
- Purple/violet for PROMPTS
- Thin glowing connector lines
- Rounded cards with subtle glassmorphism
- Clean vector illustrations
- Professional technical-diagram aesthetic
- Subtle depth and glow, but no excessive decoration

**Typography:**

- Large bold title
- Strong section hierarchy
- Short readable sentences
- Use keywords in large type
- Avoid paragraphs
- Never make text tiny
- Use diagrams, icons and arrows to replace unnecessary prose

**Core technical model that must remain consistent:**

> **HOST → CLIENT → SERVER**

**Server-side primitives:**

- **TOOLS = DO**
- **RESOURCES = KNOW**
- **PROMPTS = GUIDE**

Do NOT incorrectly describe Roots or Sampling as server-side primitives in these graphics.

**Use these three analogies consistently:**

- Supermarket
- Company / CEO
- Restaurant

Do not claim that a Host is technically incapable of communicating directly with external systems. Explain that the MCP Client is the component responsible for MCP protocol communication/session management in the standard architecture.

---

## 01 — MCP Primitives: The Big Picture

**TITLE:** MCP PRIMITIVES
**SUBTITLE:** Three different ways an MCP Server helps an AI application

### Prompt

```text
Create a large central architecture:

USER
↓
HOST
AI Application
↓
MCP CLIENT
MCP Communication
↓
MCP SERVER

From the MCP Server create three visually distinct branches:

🟧 TOOLS
DO
Executable capabilities
Examples: Search, Create, Update, Delete, Send, Book

🟩 RESOURCES
KNOW
Information & context
Examples: Documents, Product catalogs, Files, Database information, Specifications

🟪 PROMPTS
GUIDE
Reusable prompt templates
Examples: Compare, Recommend, Analyze, Summarize, Review

At the bottom place the core mnemonic:

DO → TOOLS
KNOW → RESOURCES
GUIDE → PROMPTS

Add a small statement:

"Different primitives. Different responsibilities."
```

---

## 02 — Tools = DO — Deep Dive

**TITLE:** MCP TOOLS
**SUBTITLE:** TOOLS = DO

### Prompt

```text
Make the word DO extremely prominent.

Create an architecture flow:

USER REQUEST
↓
HOST
↓
MCP CLIENT
↓
MCP SERVER
↓
TOOL
↓
EXTERNAL SYSTEM
↓
RESULT

Show examples of executable capabilities:

search_products()
get_price()
check_stock()
create_order()
update_customer()
send_email()

Create a card:

WHAT IS A TOOL?
"An executable capability exposed by an MCP Server."

Create another:

THINK:
"What can the system DO?"

Show action-oriented icons:

🔍 Search
➕ Create
✏️ Update
🗑️ Delete
📨 Send
📅 Book

Then create a crucial distinction:

TOOL ≠ INFORMATION

Resource: "Here is the information."
Tool: "Perform this operation."

Bottom:

TOOLS = DO
Actions / Operations / Capabilities

Add subtle technical note:

"The Server exposes the Tool; the Host/Client mediates the interaction."
```

---

## 03 — Tools — Supermarket Analogy

**TITLE:** MCP TOOLS — SUPERMARKET ANALOGY
**SUBTITLE:** Tools are the services a supplier can perform

### Prompt

```text
Create a supermarket ecosystem.

🏪 SUPERMARKET = Host
👨‍💼 DEDICATED EMPLOYEE = MCP Client
🏭 SUPPLIER = MCP Server

Inside the supplier section show:

SERVICES
⚙️ Check Stock
⚙️ Get Price
⚙️ Reserve Product
⚙️ Place Order
⚙️ Cancel Order

Label these:

TOOLS

Then show a customer request:

"Reserve 2 laptops."

Flow:

Customer
→ Supermarket
→ Employee
→ Supplier
→ reserve_product()
→ Confirmation

Create a contrast:

Catalog = Resource
Reserve Product = Tool

Bottom:

TOOL = "PLEASE DO THIS"

Make this the main visual takeaway.
```

---

## 04 — Resources = KNOW — Deep Dive

**TITLE:** MCP RESOURCES
**SUBTITLE:** RESOURCES = KNOW

### Prompt

```text
Create a large visual library/database concept.

Central concept:

INFORMATION
↓
Resource

Show examples:

📄 Documents
📚 Knowledge bases
📊 Data
📦 Product catalogs
📋 Specifications
📁 Files
🗂️ Configuration

Show URI-style examples:

products://catalog
products://inventory
products://12345/specification

Create a prominent question:

"WHAT INFORMATION IS AVAILABLE?"

Then show:

RESOURCE → provides accessible information/context

Contrast:

RESOURCE
"Tell me what you know."

versus

TOOL
"Do something."

Show a product example:

Resource:
Laptop A
Price: $1,299
RAM: 32 GB
Storage: 1 TB

No action occurs.

Bottom:

RESOURCES = KNOW
Information / Context / Data
```

---

## 05 — Resources — Supermarket Analogy

**TITLE:** MCP RESOURCES — SUPERMARKET ANALOGY
**SUBTITLE:** Resources are the information available from the supplier

### Prompt

```text
Create a supplier warehouse.

🏭 SUPPLIER = MCP Server

Inside the supplier, visually show:

📦 Product Catalog
💰 Price List
📊 Inventory
📋 Product Specifications
📍 Store Information

Label the entire information section:

RESOURCES

Then show a customer asking:

"What laptops are available?"

Flow:

Customer
→ Supermarket
→ Employee / Client
→ Supplier / Server
→ Resource
→ Information returned

Then another request:

"Reserve Laptop A."

Highlight:

"That becomes an action → TOOL"

Create a large comparison:

RESOURCE → Information
TOOL → Action

Bottom:

RESOURCE = "HERE IS WHAT I KNOW"
```

---

## 06 — Prompts = GUIDE — Deep Dive

**TITLE:** MCP PROMPTS
**SUBTITLE:** PROMPTS = GUIDE

### Prompt

```text
Make GUIDE the dominant visual keyword.

Create a reusable template card:

PRODUCT COMPARISON

Compare the selected products based on:
• Price
• Performance
• Battery
• Storage
• Intended use

Then recommend the best option.

Label:

Reusable Prompt Template

Show another example:

PRODUCT RECOMMENDATION

Inputs:
Budget + Use Case + Preferences
↓
Structured recommendation

Create a prominent distinction:

PROMPT
Guides / structures an interaction

TOOL
Executes an operation

RESOURCE
Provides information

Visualize them as:

PROMPT
   ↓
GUIDE THE INTERACTION
   ↓
AI REASONING
   ↓
RESOURCE / TOOL

Bottom:

PROMPTS = GUIDE
Reusable interaction templates

Important technical wording:

"A Prompt is not simply another Tool."
```

---

## 07 — Prompts — Supermarket Analogy

**TITLE:** MCP PROMPTS — SUPERMARKET ANALOGY
**SUBTITLE:** A reusable way to ask for a specific kind of help

### Prompt

```text
Show:

🏪 Supermarket
→ Employee
→ Supplier

Customer says:

"Help me choose the best laptop."

Instead of an unstructured request, show a reusable card:

PRODUCT RECOMMENDATION

Consider:
• Budget
• Performance
• Battery
• Portability
• Use case

Label:

PROMPT

Then show:

Prompt → structures the interaction
Resource → provides product information
Tool → performs actions

Bottom:

PROMPT = "HERE'S HOW TO GUIDE THE REQUEST"
```

---

## 08 — Tools vs Resources vs Prompts

**TITLE:** MCP PRIMITIVES — KNOW THE DIFFERENCE

### Prompt

```text
Create three large side-by-side / stacked cards.

🟧 TOOLS
DO
Executable capability
Question: What can you DO?
Example: create_order()
Analogy: Supplier Service

🟩 RESOURCES
KNOW
Information / Context
Question: What do you KNOW?
Example: products://catalog
Analogy: Catalog / Inventory

🟪 PROMPTS
GUIDE
Reusable Prompt Template
Question: How can we GUIDE the interaction?
Example: product_comparison
Analogy: Standard Request Template

At the bottom create a powerful memory diagram:

         MCP SERVER
             │
    ┌────────┼────────┐
    ▼        ▼        ▼
   DO      KNOW     GUIDE
    │        │        │
 TOOLS   RESOURCES  PROMPTS

Final statement:

DO ≠ KNOW ≠ GUIDE
"They solve different problems."
```

---

## 09 — Company / CEO Analogy

**TITLE:** MCP PRIMITIVES — COMPANY ANALOGY
**SUBTITLE:** Think like a CEO coordinating specialized departments

### Prompt

```text
Create a modern corporate environment.

👔 CEO / COMPANY = Host
👨‍💼 SPECIALIZED REPRESENTATIVE = MCP Client
🏢 EXTERNAL SERVICE = MCP Server

Then map the primitives.

TOOLS = DO
External service can:
Create ticket
Update record
Send notification

RESOURCES = KNOW
External service provides:
Reports
Customer data
Documents
Metrics

PROMPTS = GUIDE
Reusable workflows:
Incident analysis
Customer review
Report generation
Data analysis

Create the flow:

CEO
→ Representative
→ External Service

Then:

Service
→ Tools / Resources / Prompts

Important clarification:

"The CEO could technically communicate with systems directly."

But in this architecture:

"The specialized representative handles the MCP-specific communication."

Bottom:

SEPARATION OF RESPONSIBILITIES
```

---

## 10 — Restaurant Analogy

**TITLE:** MCP PRIMITIVES — RESTAURANT ANALOGY
**SUBTITLE:** A simple way to visualize DO, KNOW and GUIDE

### Prompt

```text
Create a premium restaurant illustration.

👤 CUSTOMER = User
🍽️ RESTAURANT / AI APPLICATION = Host
🧑‍🍳 WAITER / COMMUNICATION ROLE = MCP Client
🏭 KITCHEN / SERVICE PROVIDER = MCP Server

Now map the primitives.

TOOLS = DO
Kitchen can:
🍳 Prepare meal
🧾 Create order
❌ Cancel order

RESOURCES = KNOW
Kitchen can provide:
📋 Menu
💰 Prices
🥗 Ingredients
📊 Availability

PROMPTS = GUIDE
Reusable ordering patterns:
Breakfast recommendation
Dietary recommendation
Meal comparison
Chef recommendation

Create three visual arrows:

DO → Tools
KNOW → Resources
GUIDE → Prompts

Bottom:

DIFFERENT ROLES — DIFFERENT RESPONSIBILITIES
```

---

## 11 — All Three Analogies Side by Side

**TITLE:** MCP PRIMITIVES — THREE ANALOGIES

### Prompt

```text
Create a three-column visual comparison.

🛒 SUPERMARKET
Host → Supermarket
Client → Employee
Server → Supplier
Tools → Supplier Services
Resources → Catalog / Inventory
Prompts → Request Templates

🏢 COMPANY
Host → CEO / Company
Client → Specialized Representative
Server → External Service
Tools → Operations
Resources → Business Data
Prompts → Reusable Workflows

🍽️ RESTAURANT
Host → Restaurant
Client → Waiter / Communication Role
Server → Kitchen / Service Provider
Tools → Kitchen Operations
Resources → Menu / Information
Prompts → Ordering Templates

At the bottom:

SAME MCP CONCEPT
Different analogy. Same architecture.

Then emphasize:

TOOLS = DO
RESOURCES = KNOW
PROMPTS = GUIDE
```

---

## 12 — One User Request Using All Three

**TITLE:** ONE REQUEST. THREE MCP PRIMITIVES.
**SUBTITLE:** See how Tools, Resources and Prompts work together

### Prompt

```text
User request:

"Find the best laptop under $1,500 for software development."

Create a cinematic pipeline.

STEP 1 — PROMPT
product_recommendation
Provides the structure for the recommendation.

↓

STEP 2 — RESOURCES
products://catalog
products://specifications
Provides product information.

↓

STEP 3 — TOOLS
search_products()
get_current_price()
check_stock()
Performs required operations.

↓

STEP 4 — AI REASONING
Guidance + Information + Capabilities

↓

STEP 5 — RESULT
Recommended Laptop

Use color coding:

Purple = Prompt
Green = Resource
Orange = Tool
Blue = AI reasoning

Bottom:

PROMPT → GUIDE
RESOURCE → KNOW
TOOL → DO
```

---

## 13 — Tool + Resource + Prompt Collaboration

**TITLE:** THEY WORK TOGETHER
**SUBTITLE:** MCP primitives are complementary

### Prompt

```text
Create a central AI reasoning engine.

Around it:

🟪 PROMPT
Provides structure

↓

🟩 RESOURCE
Provides context

↓

🟧 TOOL
Performs required actions

↓

🤖 AI
Reasons over the available information and capabilities

Show a realistic example:

Prompt: "Compare laptops for software development."
Resource: Laptop specifications
Tool: Get current prices
AI: Analyze and recommend

Important message:

PROMPTS GUIDE
RESOURCES INFORM
TOOLS ACT

This should be one of the strongest visual summaries in the series.
```

---

## 14 — Complete MCP Primitives Cheat Sheet

**TITLE:** MCP PRIMITIVES — COMPLETE CHEAT SHEET

### Prompt

```text
Create a polished final reference infographic.

Center: MCP

↓

SERVER-SIDE PRIMITIVES

🟧 TOOLS
DO
Executable capabilities

🟩 RESOURCES
KNOW
Information / context

🟪 PROMPTS
GUIDE
Reusable prompt templates

Then create a second section:

ARCHITECTURE

USER
↓
HOST
↓
MCP CLIENT
↓
MCP SERVER

Then a third section:

THREE ANALOGIES

Supermarket
- Employee → Client
- Supplier → Server

Company
- Representative → Client
- External Service → Server

Restaurant
- Communication role → Client
- Kitchen / Service Provider → Server

At the bottom create the ultimate mnemonic:

DO → TOOLS
KNOW → RESOURCES
GUIDE → PROMPTS

Final statement:

"MCP becomes easier when you separate
WHAT CAN BE DONE, WHAT INFORMATION IS AVAILABLE,
and HOW AN INTERACTION CAN BE STRUCTURED."
```

---

## Series-Wide Technical Accuracy Rules

Maintain these rules across every graphic:

1. Tools are executable capabilities exposed by an MCP Server.
2. Resources represent information/context that can be made available to the AI application.
3. Prompts are reusable prompt templates exposed through MCP.
4. Never describe a Resource as an action.
5. Never describe a Tool merely as a piece of information.
6. Never describe a Prompt as an executable function.
7. Keep the standard architecture visually consistent: **USER → HOST → CLIENT → SERVER**
8. The Host manages/contains MCP Client components.
9. An MCP Client is the component responsible for MCP communication/session management with a Server.
10. Do not imply that a Host is physically incapable of communicating with external systems.
11. A Server may serve multiple Client connections.
12. Do not confuse:
    - Host with Client
    - Client with User
    - Server with Tool
    - Resource with Tool
    - Prompt with Tool
13. Keep these three memory rules visually dominant:
    - **TOOLS = DO** — Execute
    - **RESOURCES = KNOW** — Provide information
    - **PROMPTS = GUIDE** — Structure interaction
14. Keep the terminology evergreen. Do not include:
    - Session numbers
    - Batch names
    - Dates
    - Week numbers
    - Course names
    - "Day 1"
    - Temporary curriculum references
15. The entire collection should look like one cohesive professional MCP educational series.

---

## Recommended Publishing Sequence

For maximum learning progression, publish them in this order:

| Order | Infographic |
|---|---|
| 01 | Big Picture |
| 02 | Tools |
| 03 | Tools + Supermarket |
| 04 | Resources |
| 05 | Resources + Supermarket |
| 06 | Prompts |
| 07 | Prompts + Supermarket |
| 08 | Comparison |
| 09 | Company analogy |
| 10 | Restaurant analogy |
| 11 | All analogies |
| 12 | Real request |
| 13 | How they collaborate |
| 14 | Cheat Sheet |

This gives a coherent **14-part MCP Primitives learning series**, rather than disconnected infographics.
