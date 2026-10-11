# Infographic Prompt Pack: 12 Architecture Concepts (insurance edition)

For LinkedIn posts and YouTube Shorts. One prompt per concept from the interview guide. Analogies use insurance and everyday life.

## How to use

1. Copy the **MASTER STYLE** block below and paste it **before** each concept prompt.
2. Add one **FORMAT** line:
   - LinkedIn post: `FORMAT: portrait 4:5, 1080x1350 px.`
   - YouTube Short: `FORMAT: vertical 9:16, 1080x1920 px. Keep all key text inside the middle 70% of the height (platform buttons cover the top and bottom).`
3. Image generators misspell long text. Every prompt below keeps on-image text short and gives the exact strings. Generate, then fix any typo in Canva or Figma.
4. Add your badge image (Enterprise Architect · TOGAF 9.2 · IT Governance) yourself in the reserved bottom strip. Do not ask the generator to draw it.
5. Each concept also has a **Short voiceover** (about 35 seconds) and a **LinkedIn caption**.

## MASTER STYLE (paste before every prompt)

```
Educational infographic in a clean flat-vector style. Deep navy background (#0B1F3A) with a very subtle shield-and-policy-document line motif in the background at low opacity. Accent colour gold (#D4A24C), secondary colour teal (#2EC4B6), text white or light grey. Rounded cards, thin gold dividers, consistent icons of one style. One bold title at the top (max 8 words), a one-line subtitle, then a simple visual in the middle, then a single takeaway line. Large, highly legible sans-serif type that reads on a phone. Plenty of white space. Leave the bottom 8% empty for a branding strip. No logos, no real company names, no photographs of people, no watermarks. Spell all text exactly as given.
```

---

## 1. Architecture Review Board (Design Authority)

**Hook:** "Why can't a project just go live? Because someone has to underwrite the risk."

**Analogy:** An insurer's underwriting desk. An application comes in, the underwriter checks it against the rules and the risk appetite, then decides: accept, accept with conditions, or decline. Projects are applications. The review board is the underwriter.

```
Title: "Who Underwrites Your Project?"
Subtitle: "Architecture governance, explained with insurance"
Visual: left-to-right flow of 4 cards connected by arrows, each with an icon:
1. "Submit the application" (form icon): Submission pack
2. "Underwriter reviews" (magnifier over shield icon): Fit, security, resilience, cost
3. "Decision" (three-way signpost icon): Approved / Approved with conditions / Declined
4. "Close conditions" (checklist icon): Owner + date on every item
Beneath the flow, a small two-column strip: "Application = project submission" and "Underwriter = review board".
Takeaway line: "Good underwriting says yes safely and quickly. It does not stall every case."
```

**Short voiceover:** "When you apply for insurance, an underwriter checks the application against the rules and decides: accept, accept with conditions, or decline. Architecture governance works the same way. Your project submits an application. The review board checks fit, security, resilience and cost. Then it decides. Good underwriting says yes safely and quickly. It doesn't stall every case."

**LinkedIn caption:** "Architecture review boards aren't gatekeepers. Think of them as underwriters: their job is to accept risk knowingly, with conditions where needed. Three things get a submission through first time: a clear problem, options with trade-offs, and named risks with owners. #EnterpriseArchitecture #TOGAF #ITGovernance"

---

## 2. Trade-Off Matrix (settling a design disagreement)

**Hook:** "Two experts, two opinions. How do you decide without a fight?"

**Analogy:** Choosing a family car. Price, running cost, space and safety all matter, but each family weights them differently. Agree the weights first, then score the cars.

```
Title: "Settle Design Debates With a Matrix"
Subtitle: "Agree the criteria before you compare the options"
Visual: a clean table. Columns: "Option A", "Option B", "Option C". Rows: "Time to market", "Technical debt", "Compliance risk", "Lock-in", "Run cost". Left of each row a small weight badge (e.g. 30%, 20%, 25%, 10%, 15%). Cells show 1-5 dot ratings. A gold highlight on the winning column and a "Total" row at the bottom.
Side note card with a car icon: "Choosing a family car: price, space, safety. Weights first, scores second."
Takeaway line: "Sponsors set the weights. Architects score the options."
```

**Short voiceover:** "Two senior people disagree on a design. Don't argue. Build a matrix. List your criteria: speed, technical debt, risk, lock-in, cost. Let the sponsor set the weights. Let the architects score the options. It's like picking a family car: everyone agrees what matters first, then compares. The matrix doesn't remove opinions. It makes them visible and fair."

**LinkedIn caption:** "When architects and sponsors disagree, depersonalise it. Weights set by the business, scores set by the technologists, decision on one page. #SolutionArchitecture #DecisionMaking #EnterpriseArchitecture"

---

## 3. Integration Boundaries

**Hook:** "Who owns the truth when two systems share data?"

**Analogy:** A land registry. Many people talk about who owns a flat, but only the registry is the official record. Other systems can read it and ask for changes, but they don't keep their own competing version.

```
Title: "Draw the Line Between Systems"
Subtitle: "Four decisions for every integration boundary"
Visual: two system boxes (System A, System B) with a gold dashed line between them labelled "Boundary". Four numbered callouts around it:
1. "System of record" (registry icon): who owns the data
2. "Contract" (document icon): schema, version, rate limit
3. "Sync or async" (phone vs envelope icon)
4. "If it fails" (shield icon): retry, fallback, alert
Small side card: "Land registry = system of record".
Takeaway line: "One owner per fact. One contract per boundary."
```

**Short voiceover:** "Every time two systems connect, make four decisions. One: who owns the data? That's your system of record, like a land registry. Two: what's the contract? The shape of the data, the version, the rate limit. Three: synchronous or asynchronous? Four: what happens when it fails? Retry, fallback, alert. One owner per fact, one contract per boundary."

**LinkedIn caption:** "Most integration failures are boundary failures: two systems both think they own the customer address. Name the system of record first. #IntegrationArchitecture #APIs #EnterpriseArchitecture"

---

## 4. Sync vs Async Integration

**Hook:** "A phone call or a letter? Your integration has the same choice."

**Analogy:** A phone call needs both people on the line at the same moment. A letter or message can wait in a mailbox until the other person is ready.

```
Title: "Phone Call or Letter?"
Subtitle: "Synchronous vs asynchronous integration"
Visual: split screen. Left half "Synchronous (API call)": phone icon, two systems connected by a straight line, caption "Caller waits for the answer". Right half "Asynchronous (events / queue)": envelope and mailbox icon, caption "Sender carries on; receiver picks it up later".
Below each half, a short pros/cons pair: Left "Simple, immediate / Fails if the other side is down". Right "Resilient, scales / Harder to trace, eventual consistency".
Takeaway line: "Need the answer now? Call. Can it wait? Send a message."
```

**Short voiceover:** "Synchronous integration is a phone call. Both sides must be on the line, and you wait for the answer. Asynchronous is a letter. You send it and carry on, and the other side reads it when ready. Calls are simple and immediate, but fail if the other side is down. Letters are resilient and scale well, but are harder to trace. Need it now? Call. Can it wait? Send a message."

**LinkedIn caption:** "Choosing between REST calls and events isn't a technology preference. It's a question of how long the caller can wait. #EventDrivenArchitecture #APIs #SoftwareArchitecture"

---

## 5. Environments and CI/CD

**Hook:** "Why does your software pass through four environments before customers see it?"

**Analogy:** A restaurant kitchen. A new dish is tried in the test kitchen, tasted by staff, approved by the head chef, then served. Quality checks sit at every step so a bad dish never reaches the table.

```
Title: "From Test Kitchen to Customer's Table"
Subtitle: "Environments and CI/CD pipeline gates"
Visual: horizontal pipeline of 4 stages with chef-style icons: "Dev" (test kitchen), "Test" (staff tasting), "UAT" (head chef approval), "Prod" (served to customers). Between stages, gold gate icons labelled "Build + unit tests", "Security scan", "Business sign-off". Under the pipeline, one line: "Same recipe, every time = infrastructure as code".
Takeaway line: "Automate the gates. Keep the environments alike."
```

**Short voiceover:** "Think of a restaurant. A new dish starts in the test kitchen, gets tasted by staff, approved by the head chef, and only then served. Software does the same: dev, test, UAT, production. Gates between stages check the build, run security scans, and need business sign-off. Infrastructure as code means every environment is cooked from the same recipe. Automate the gates, keep the environments alike."

**LinkedIn caption:** "If production behaves differently from UAT, the pipeline isn't protecting you. Environment parity plus automated gates catch problems before customers do. #DevOps #CICD #CloudArchitecture"

---

## 6. RPO and RTO

**Hook:** "Disaster strikes. How much can you lose, and how long can you be down?"

**Analogy:** Document autosave. If it saves every 5 minutes, the most you lose is 5 minutes of work (RPO). How long it takes to reopen your laptop and get back to the file is your recovery time (RTO).

```
Title: "RPO vs RTO in 10 Seconds"
Subtitle: "Two numbers every disaster-recovery plan needs"
Visual: a horizontal timeline with a red lightning icon in the centre labelled "Incident". Left of it a bracket labelled "RPO: how much data can we lose?" with a floppy-disk/autosave icon. Right of it a bracket labelled "RTO: how long until we are back?" with a stopwatch icon.
Bottom card with a laptop icon: "Autosave every 5 min = RPO 5 min. Reopening the file takes 20 min = RTO 20 min."
Takeaway line: "Tighter numbers cost more. Match them to the business."
```

**Short voiceover:** "Two numbers define disaster recovery. RPO: how much data can you afford to lose? RTO: how long can you afford to be down? Think of autosave. If your document saves every five minutes, you lose at most five minutes of work. That's the RPO. If reopening takes twenty minutes, that's your RTO. The tighter the numbers, the higher the cost, so set them with the business."

**LinkedIn caption:** "Ask the business two questions: how much data can you lose, and how long can you be down? The answers drive architecture and cost. #DisasterRecovery #CloudArchitecture #Resilience"

---

## 7. Effort Sizing and TCO: Vendor, Customise or Build

**Hook:** "Buy, renovate or build? The cheapest option on day one is rarely cheapest in year three."

**Analogy:** Housing. Buy a ready flat (vendor product), buy and renovate it (customise), or build your own house (in-house). Each has a different upfront cost, running cost, speed and risk.

```
Title: "Buy, Renovate or Build?"
Subtitle: "Comparing total cost of ownership"
Visual: three columns with house icons: "Buy a flat = Vendor product", "Renovate = Customise", "Build = In-house". Rows beneath: "Upfront cost", "Run cost", "Time to market", "Key risk" with short words (e.g. Vendor: "Lock-in"; Customise: "Upgrade debt"; Build: "Key-person risk"). Small range bars showing a low-to-high estimate for each, not single numbers.
Takeaway line: "Give a range, state assumptions, name what moves it."
```

**Short voiceover:** "Buy, renovate or build? A ready-made flat is your vendor product: fast, but you live with their rules. Renovating is customisation: flexible, but every upgrade gets harder. Building your own house is in-house development: perfect fit, slowest, and you own every repair. Compare total cost over several years, not just day one, and always give a range with your assumptions."

**LinkedIn caption:** "TCO isn't a number, it's a range with assumptions. The cheapest build on day one can be the most expensive in year three. #TCO #SolutionArchitecture #VendorManagement"

---

## 8. Vendor Selection and Technical Due Diligence

**Hook:** "Three quotes on the table. How do you pick without bias?"

**Analogy:** Choosing a contractor for a home renovation. Decide what matters (quality, schedule, price, references) and how much each counts before you open the quotes.

```
Title: "Pick a Vendor Without Bias"
Subtitle: "Weighted scoring, set before you see the quotes"
Visual: a checklist card on the left with 6 items and icons: "Requirements fit", "Architecture conformance", "Security + data residency", "Delivery plan + team", "References", "Commercials + exit". On the right a scorecard with 3 vendor columns and weight badges. A gold padlock icon between them labelled "Weights locked first".
Side card with a hard-hat icon: "Hiring a renovation contractor".
Takeaway line: "Lock the weights. Then open the envelopes."
```

**Short voiceover:** "You've got three vendor proposals. How do you choose fairly? Do what you'd do for a home renovation: decide what matters before you see the quotes. Requirements fit, architecture conformance, security, delivery team, references, and the exit plan. Give each a weight, lock the weights, then score. Record the reasons in the decision log. Lock the weights first, then open the envelopes."

**LinkedIn caption:** "Fair vendor selection starts before the proposals arrive. Agree criteria and weights first, score independently, and record the rationale. #VendorSelection #DueDiligence #EnterpriseArchitecture"

---

## 9. Security and Compliance by Design

**Hook:** "Security isn't a final-week checklist. It starts at the whiteboard."

**Analogy:** A building. Valuables go in the safe, not the lobby. Badge readers at the door, locked rooms inside, cameras recording, and a risk register for what you accept.

```
Title: "Secure It Before You Build It"
Subtitle: "Security and compliance during design"
Visual: a stepped flow of 4 cards with building-security icons: "1. Classify data" (label icon: public / internal / confidential / personal), "2. Map controls" (badge reader, locked door, camera: identity, encryption, logging, network zones), "3. Record residual risk" (clipboard: owner + decision), "4. Review early" (magnifier: security architect before the board).
Small footer chip: "Regulated platforms: check local privacy law and regulator rules (for example, Hong Kong's PDPO)".
Takeaway line: "Classify first. Controls follow the data."
```

**Short voiceover:** "Think of a building. Valuables go in the safe, not the lobby. In design, do the same. First classify your data: public, internal, confidential, personal. Then map controls: who gets in, what's encrypted, what's logged, how networks are separated. Record any leftover risk with an owner. And get the security architect to review before the board does. Classify first, controls follow."

**LinkedIn caption:** "Security reviews that start at design cost hours. Security reviews that start at go-live cost weeks. Classify data, map controls, record residual risk. #SecurityByDesign #Compliance #CloudArchitecture"

---

## 10. Payments and Wallet Fundamentals

**Hook:** "You tap your card twice by accident. Why are you charged once?"

**Analogy:** A bank passbook. The ledger is the official record of every credit and debit. A lift button pressed twice still calls one lift (idempotency). At month end you match your receipts to the statement (reconciliation).

```
Title: "4 Ideas Behind Every Payment System"
Subtitle: "Ledger, idempotency, reconciliation, settlement"
Visual: a 2x2 grid of cards with everyday icons:
1. "Ledger" (passbook icon): the official record of every credit and debit
2. "Idempotency" (lift button icon): same request twice = one result
3. "Reconciliation" (receipts vs statement icon): match records between systems
4. "Settlement" (cheque icon): money moves later than the tap
Centre badge: "Audit trail on everything".
Takeaway line: "Money systems must be repeatable, traceable and reconcilable."
```

**Short voiceover:** "Four ideas sit behind every payment system. The ledger is like a bank passbook: the official record of every credit and debit. Idempotency means pressing the lift button twice still calls one lift, so a double tap charges you once. Reconciliation is matching your receipts to the statement. And settlement means the money actually moves later than the tap. Repeatable, traceable, reconcilable."

**LinkedIn caption:** "If you design for payments, learn these four ideas first: ledger, idempotency, reconciliation, settlement. Everything else builds on them. #Payments #Fintech #SolutionArchitecture"

---

## 11. The One-Page Decision Brief

**Hook:** "Your CEO has 90 seconds. What goes on the page?"

**Analogy:** An underwriter's referral note. When a case goes to a senior underwriter, the note is one page: the case, the options, the recommendation, and what is needed from them. No full file attached.

```
Title: "The One-Page Decision Brief"
Subtitle: "How to brief senior leaders in 90 seconds"
Visual: a single page mock-up with 6 labelled blocks stacked vertically: "1. Decision needed", "2. Options (max 3)", "3. Recommendation", "4. Cost + risk of each", "5. What I need from you", "6. By when". A small folder icon in the corner with the note: "Underwriter's referral note: one page, one ask".
Takeaway line: "Lead with the decision, not the diagram."
```

**Short voiceover:** "When an underwriter refers a case upward, the note is one page: the case, the options, the recommendation, and what they need from the senior. Your decision brief works the same way. Start with the decision needed. Give three options at most. Make a recommendation. Show cost and risk for each. Say what you need, and by when. Lead with the decision, not the diagram."

**LinkedIn caption:** "Architects lose senior audiences by starting with the architecture. Start with the decision. One page, six blocks. #ExecutiveCommunication #EnterpriseArchitecture #Consulting"

---

## 12. Book of Work: Sequence by Dependency

**Hook:** "Why can't the team just start with the most urgent thing?"

**Analogy:** Building a house. Foundations before walls, walls before roof, even if the roof feels more urgent when it rains.

```
Title: "Build the Foundation First"
Subtitle: "Sequencing a technology book of work"
Visual: a house under construction drawn in layers (foundation, walls, roof) with a stacked list on the right of 3 sorting rules numbered 1-3: "1. Dependencies", "2. Business urgency", "3. Team capacity". Small arrows from foundation items to wall items to roof items showing dependency.
Takeaway line: "Dependencies decide the order. Urgency decides the squeeze."
```

**Short voiceover:** "You can't build the roof first, even if it's raining. A technology book of work is the same. Sort by dependencies first: what must exist before something else can start. Then business urgency. Then team capacity. Urgency tells you where to squeeze. Dependencies tell you what order is even possible. Foundation first."

**LinkedIn caption:** "A roadmap sorted by urgency alone collapses. Sort by dependency, then urgency, then capacity. #Roadmap #ProgramDelivery #EnterpriseArchitecture"

---

## Suggested posting order

1. Architecture Review Board (#1): sets the theme
2. RPO and RTO (#6): most shareable
3. Buy, Renovate or Build (#7)
4. Phone Call or Letter (#4)
5. One-Page Decision Brief (#11)
6. The rest, one or two per week

## Honesty notes

- These are teaching posts. Present them as concepts, not as claims of what you personally delivered.
- If you add a "from my experience" line, use only what is on your CV (for example, taking HSBC "Quantum" through the Software Architecture Approval Board).
- Do not mention client names unless you have permission.
