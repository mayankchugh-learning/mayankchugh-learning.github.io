# MCP Primitives — Infographic Prompt Series

A complete **MCP Primitives** infographic series using the **Supermarket analogy** consistently, with each concept connected back to the real MCP architecture. Each infographic works independently on **LinkedIn** and is composition-safe for **YouTube Shorts (1080×1920)**.

---

## Global Visual Style — Apply to All Infographics

Create a premium technical educational infographic in portrait format, **1080×1350 px**, optimized for LinkedIn and composition-safe for **1080×1920 YouTube Shorts**.

**Visual style:**

- Dark navy / near-black technology background
- Premium modern AI architecture aesthetic
- Gold/amber for major headings and key concepts
- White for primary explanatory text
- Blue/teal for MCP architecture connections
- Orange for actions/tools
- Green/teal for information/resources
- Purple/blue for prompts
- Clean vector illustrations
- Subtle glow effects
- Thin architectural connector lines
- Rounded glassmorphism-style cards
- Strong visual hierarchy
- Minimal text; never overcrowd the canvas
- Use icons and diagrams instead of long paragraphs
- Large readable typography suitable for mobile viewing
- Generous spacing and margins
- No unnecessary decorative elements
- No incorrect MCP terminology
- Keep the design consistent across the entire series

Every infographic should visually communicate:

> **MCP = standardized way for AI applications to connect with external capabilities and context.**

**Supermarket analogy mapping (used consistently throughout):**

| Analogy | MCP Concept |
|---|---|
| Supermarket | Host |
| Dedicated employee | MCP Client |
| Supplier / external service provider | MCP Server |
| Products / information | Resources |
| Services / actions | Tools |
| Reusable request template | Prompt |

---

## Infographic 01 — MCP Primitives: The Big Picture

**TITLE:** MCP PRIMITIVES
**SUBTITLE:** What can an MCP Server expose to an AI application?

### Prompt

```text
Create a central architecture diagram:

USER
↓
HOST
AI Application
↓
MCP CLIENT
Communication Layer
↓
MCP SERVER

From the MCP Server, branch into three large cards:

TOOLS
DO
Executable actions and capabilities

RESOURCES
KNOW
Data and contextual information

PROMPTS
GUIDE
Reusable prompt templates

Below the architecture, add a small distinction:

Server-side primitives
→ Tools
→ Resources
→ Prompts

Then add:

Client-side capabilities
→ Roots
→ Sampling

Use a visual supermarket analogy at the bottom:

Supplier = Server
Services = Tools
Information = Resources
Request templates = Prompts

Make the architecture the dominant visual element.
```

---

## Infographic 02 — MCP Tools

**TITLE:** MCP TOOLS
**SUBTITLE:** "What can the Server DO?"

### Prompt

```text
Create a large orange-highlighted TOOL = DO concept.

Use the supermarket analogy:

SUPERMARKET
→ Dedicated Employee
→ SUPPLIER

The supplier provides executable services.

Show examples:

check_stock()
Check inventory

get_price()
Retrieve current price

place_order()
Create an order

cancel_order()
Cancel an order

Create a visual distinction:

RESOURCE
"Show me the product information."

TOOL
"Perform an action for me."

Highlight:

Tools = ACTIONS

Add a small technical note:

MCP Server exposes the tool.
The Host/Client mediates the tool call.

Bottom memory rule:

TOOLS → DO
```

---

## Infographic 03 — MCP Resources

**TITLE:** MCP RESOURCES
**SUBTITLE:** "What information does the Server HAVE?"

### Prompt

```text
Create a large green/teal-highlighted:

RESOURCE = KNOW

Use supermarket analogy.

Show a supplier with information/data shelves:

📦 Product Catalog
💰 Price List
📊 Inventory
📋 Product Specifications

Represent resources as accessible information:

products://catalog
products://inventory
products://12345/specification

Create a comparison:

RESOURCE
Read / access information

TOOL
Perform an operation

Example:

User asks:
"What is the price of this laptop?"
→ Resource provides information.

User asks:
"Add this laptop to my cart."
→ Tool performs an action.

Bottom memory rule:

RESOURCES → KNOW

Add subtle visual database/document icons.
```

---

## Infographic 04 — MCP Prompts

**TITLE:** MCP PROMPTS
**SUBTITLE:** "How can the interaction be GUIDED?"

### Prompt

```text
Create a large purple/blue:

PROMPT = GUIDE

Explain visually:

A Prompt is a:
Reusable Prompt Template

Use the supermarket analogy.

Customer asks for help choosing a laptop.

Instead of creating the same instruction repeatedly, use:

product_comparison

Template concept:

Compare {products} based on:
- Price
- Performance
- Battery
- Use case

Another example:

product_recommendation
"Recommend products based on the customer's requirements."

Important technical distinction:

Prompt ≠ Tool

Prompt:
Structures / guides the interaction

Tool:
Executes an operation

Bottom memory rule:

PROMPTS → GUIDE

Use a prompt-card visual flowing toward the AI application.
```

---

## Infographic 05 — Tools vs Resources vs Prompts

**TITLE:** MCP PRIMITIVES — KNOW THE DIFFERENCE

### Prompt

```text
Create three large vertical cards.

🟧 TOOLS
DO
Executable capability
Example: place_order()
Question: "What can you DO?"

🟩 RESOURCES
KNOW
Information / context
Example: products://catalog
Question: "What information do you HAVE?"

🟪 PROMPTS
GUIDE
Reusable prompt template
Example: product_comparison
Question: "How can the interaction be GUIDED?"

At the center, create a simple mnemonic:

DO → TOOLS
KNOW → RESOURCES
GUIDE → PROMPTS

At the bottom:

MCP Server exposes all three as different kinds of capabilities/context.

Use the supermarket analogy underneath:

Services → Tools
Information → Resources
Request templates → Prompts
```

---

## Infographic 06 — Supermarket Analogy for MCP Primitives

**TITLE:** MCP EXPLAINED WITH A SUPERMARKET
**SUBTITLE:** One analogy to understand the entire architecture

### Prompt

```text
Create a premium illustrated supermarket scene.

Left:
👤 CUSTOMER = User

Center:
🏪 SUPERMARKET = Host

Inside the supermarket, show dedicated employees:

👨‍💼 EMPLOYEE A = MCP Client
👩‍💼 EMPLOYEE B = MCP Client
👨‍💼 EMPLOYEE C = MCP Client

Outside the supermarket:

🏭 SUPPLIERS = MCP Servers

Draw connections:

Supermarket / Host
→ Employee / Client
→ Supplier / Server

Then show what the supplier provides:

📦 Products / Information = Resources
⚙️ Services / Actions = Tools
📝 Reusable Request Templates = Prompts

Create three example flows:

"Show me available laptops." → Resource
"Check laptop stock." → Tool
"Compare these three laptops." → Prompt

Bottom statement:

Host coordinates.
Client communicates.
Server provides capabilities and context.
```

---

## Infographic 07 — MCP Client-Side Capabilities

**TITLE:** MCP CLIENT CAPABILITIES
**SUBTITLE:** Not everything in MCP is a Server Primitive

### Prompt

```text
Create a split-screen architecture.

LEFT: SERVER-SIDE PRIMITIVES
🟧 Tools — DO
🟩 Resources — KNOW
🟪 Prompts — GUIDE

RIGHT: CLIENT-SIDE CAPABILITIES
🔵 Roots — WHERE
🟣 Sampling — ASK AI

Explain Roots using supermarket/warehouse analogy:

Roots = relevant boundaries / locations

Example: /workspace/project

The Host/Client can provide filesystem roots that indicate relevant locations or boundaries.

Explain Sampling:

Sampling = Server requests LLM generation through the Client/Host

Visual flow:

Server
↓
Client / Host
↓
Host LLM
↓
Generated response
↓
Client / Server interaction

Important note:

The Server does not directly control the Host's LLM.

Bottom:

Server primitives ≠ Client capabilities
```

---

## Infographic 08 — Roots

**TITLE:** MCP ROOTS
**SUBTITLE:** "WHERE should the Server work?"

### Prompt

```text
Create a filesystem / workspace visualization.

Show:

💻 HOST
→ 📁 /workspace
→ 📁 /project
→ 📄 data.csv
→ 📄 README.md

Highlight:

ROOT

A root represents a filesystem location/boundary provided by the Client/Host.

Supermarket analogy:

Imagine telling a supplier:
"Here is the warehouse area relevant to this request."

The supplier doesn't need to explore the entire supermarket.

Visual:

HOST / CLIENT
↓
ROOT
↓
Relevant Location

Add examples:

file:///workspace/project
file:///workspace/data

Bottom memory rule:

ROOTS → WHERE

Important technical note:

Roots communicate relevant filesystem boundaries; they should not be presented as a universal security mechanism.
```

---

## Infographic 09 — MCP Sampling

**TITLE:** MCP SAMPLING
**SUBTITLE:** "What if the Server needs AI reasoning?"

### Prompt

```text
Create a clean flow diagram:

MCP SERVER
↓
REQUEST SAMPLING
↓
MCP CLIENT / HOST
↓
HOST LLM
↓
GENERATE / REASON
↓
RESULT
↓
MCP SERVER

Highlight:

SAMPLING
ASK AI

Use a supermarket analogy:

A supplier receives a complicated customer requirement and asks the supermarket's intelligent assistant:
"Can the AI help reason about this?"

The supplier doesn't directly own the supermarket's AI model.

Instead:

Server → Client/Host → Host LLM

Add an important distinction:

Sampling ≠ Server directly controlling the LLM

Bottom memory rule:

SAMPLING → THINK / GENERATE
```

---

## Infographic 10 — Complete MCP Primitives Map

**TITLE:** MCP — COMPLETE PRIMITIVES MENTAL MODEL

### Prompt

```text
Create a polished tree diagram.

Center: MCP

Branch 1: SERVER-SIDE PRIMITIVES
→ TOOLS — DO
→ RESOURCES — KNOW
→ PROMPTS — GUIDE

Branch 2: CLIENT-SIDE CAPABILITIES
→ ROOTS — WHERE
→ SAMPLING — ASK AI

Below the tree, create the supermarket translation table:

| MCP       | Supermarket                 |
|-----------|------------------------------|
| Host      | Supermarket                 |
| Client    | Dedicated Employee          |
| Server    | Supplier                    |
| Tools     | Services                    |
| Resources | Product/Data Information    |
| Prompts   | Reusable Request Templates  |
| Roots     | Relevant Warehouse/Location |
| Sampling  | Asking the AI Assistant     |

End with a large memory formula:

DO → TOOLS
KNOW → RESOURCES
GUIDE → PROMPTS
WHERE → ROOTS
ASK AI → SAMPLING
```

---

## Infographic 11 — One Real-World Request Through MCP

**TITLE:** FOLLOW ONE REQUEST THROUGH MCP
**SUBTITLE:** From User Question → MCP Server Capability

### Prompt

```text
Create a cinematic flow:

👤 USER
"Find me the best laptop under $1,500."

↓

🏪 HOST
Understands the request and coordinates the interaction.

↓

👨‍💼 MCP CLIENT
Communicates with the appropriate MCP Server.

↓

🏭 MCP SERVER
Provides:

📚 Resource → Product catalog
⚙️ Tool → Search products
📝 Prompt → Product comparison template

↓

🤖 AI
Combines available context and capabilities.

↓

👤 USER
"Here are the best options…"

Highlight that different primitives serve different purposes:

Resource → information
Tool → action
Prompt → reusable guidance

Bottom:

MCP primitives are different building blocks — not interchangeable terms.
```

---

## Infographic 12 — MCP Primitives: Final Cheat Sheet

**TITLE:** MCP PRIMITIVES — CHEAT SHEET

### Prompt

```text
Create a highly visual final reference card.

SERVER
🟧 TOOLS — DO — Execute actions
🟩 RESOURCES — KNOW — Provide information/context
🟪 PROMPTS — GUIDE — Reusable prompt templates

CLIENT
🔵 ROOTS — WHERE — Relevant filesystem boundaries/locations
🟣 SAMPLING — ASK AI — Request LLM generation through Host/Client

ARCHITECTURE
USER
↓
HOST
↓
CLIENT
↓
SERVER
↓
TOOLS / RESOURCES / PROMPTS

Add a final supermarket mnemonic:

🏪 SUPERMARKET = HOST
👨‍💼 EMPLOYEE = CLIENT
🏭 SUPPLIER = SERVER
⚙️ SERVICES = TOOLS
📦 INFORMATION = RESOURCES
📝 REQUEST TEMPLATE = PROMPT
📍 LOCATION = ROOT
🤖 ASK AI = SAMPLING

Final large statement:

MCP becomes easier when you separate
WHO connects from WHAT is provided.
```

---

## Consistency Rule for the Entire Series

Use the same visual language, icons, terminology, typography, colors, spacing, and architecture notation across every infographic so that all 12 graphics look like one professional **"MCP Primitives"** LinkedIn + YouTube Shorts educational series.

**Avoid:**

- Session numbers
- Batch names
- Class dates
- Course branding
- "Day 1 / Day 2"
- Excessive text
- Misleading arrows
- Calling Roots or Sampling "server primitives"
- Saying the Host is technically incapable of direct communication
- Saying the Server directly controls the Host's LLM

**Maintain the technically accurate mental model:**

> **HOST** → manages **CLIENT** → communicates with **SERVER**
> **SERVER** → exposes **TOOLS / RESOURCES / PROMPTS**
> **CLIENT** → supports **ROOTS / SAMPLING**

**Final recurring mnemonic:**

- **TOOLS = DO**
- **RESOURCES = KNOW**
- **PROMPTS = GUIDE**
- **ROOTS = WHERE**
- **SAMPLING = ASK AI**

---

This gives a **12-post visual learning sequence**: first establish the primitives, then explain each one individually, then reinforce them through the supermarket analogy, and finally finish with the complete MCP cheat sheet.
