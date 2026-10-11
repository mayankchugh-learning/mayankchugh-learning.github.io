# Infographic Prompt Pack, Part 2: JD Gap Concepts and M&A Concepts

Part 1 covered 12 concepts (governance, trade-offs, boundaries, sync/async, CI/CD, RPO/RTO, TCO, vendor scoring, security by design, payments, decision brief, book of work). Part 2 adds:

- **Set A (10 concepts):** things the Outsized JD expects that Part 1 did not cover.
- **Set B (8 concepts):** core M&A and post-merger integration concepts. The JD does **not** mention M&A, so treat Set B as extra learning and as a safety net if the topic comes up.

## How to use

1. Paste the **MASTER STYLE** block below before each prompt.
2. Add one **FORMAT** line:
   - LinkedIn: `FORMAT: portrait 4:5, 1080x1350 px.`
   - YouTube Short: `FORMAT: vertical 9:16, 1080x1920 px. Keep all key text inside the middle 70% of the height.`
3. Generators misspell long text. Fix typos in Canva or Figma.
4. Add your badge yourself in the reserved bottom strip.

## MASTER STYLE (same as Part 1)

```
Educational infographic in a clean flat-vector style. Deep navy background (#0B1F3A) with a very subtle runway-and-control-tower line motif in the background at low opacity. Accent colour gold (#D4A24C), secondary colour teal (#2EC4B6), text white or light grey. Rounded cards, thin gold dividers, consistent icons of one style. One bold title at the top (max 8 words), a one-line subtitle, then a simple visual in the middle, then a single takeaway line. Large, highly legible sans-serif type that reads on a phone. Plenty of white space. Leave the bottom 8% empty for a branding strip. No logos, no real company names, no photographs of people, no watermarks. Spell all text exactly as given.
```

---

# SET A: Concepts the JD expects

## A1. TOGAF ADM (Architecture Development Method)

**Why learn it:** The JD wants governance "aligned to TOGAF" and you hold TOGAF 9.2. Expect to be asked what the ADM is.

**Analogy:** Planning a new city district. Agree the vision, survey what is there, design each layer, plan the build order, then govern construction and handle change.

```
Title: "TOGAF ADM: The Architecture Cycle"
Subtitle: "Nine phases around one requirements hub"
Visual: a circular loop of 9 labelled nodes in clockwise order: "Preliminary", "A Vision", "B Business", "C Information Systems", "D Technology", "E Opportunities + Solutions", "F Migration Planning", "G Implementation Governance", "H Change Management". In the centre a gold circle labelled "Requirements Management". A small side card with a city-skyline icon: "Like planning a new city district".
Takeaway line: "Plan it, design it, govern it, then adapt it."
```

**Short voiceover:** "TOGAF's method is a loop. Preliminary: set up the rules. A: agree the vision. B, C, D: design business, information systems and technology. E and F: find solutions and plan the migration. G: govern the build. H: manage change, then loop again. In the middle sits requirements management, because requirements change all the way round. It's like planning a city district: vision first, then layers, then governed construction."

**LinkedIn caption:** "The ADM isn't a waterfall. It's a loop with requirements at the centre. Know the phases by name and what each one produces. #TOGAF #EnterpriseArchitecture"

---

## A2. The Decision and Action Log

**Why learn it:** The JD says "capturing decisions and driving open items to closure" and "close out conditions and actions".

**Analogy:** An air traffic controller's flight strip. Every aircraft has a strip with what was cleared, who owns it and when. Nothing is "remembered"; everything is on the strip.

```
Title: "If It Isn't Logged, It Wasn't Decided"
Subtitle: "The decision and action log"
Visual: a clean log table mock-up with columns "ID", "Decision / Action", "Owner", "Due", "Status". Three sample rows with traffic-light status dots (green, amber, red). A small flight-strip icon in the corner with the note "Like an ATC flight strip".
Below the table, three short rules in cards: "One owner per item", "A date on everything", "Review at the start of every meeting".
Takeaway line: "Decisions need an owner and a date, or they drift."
```

**Short voiceover:** "Air traffic controllers use flight strips. Every aircraft has what was cleared, who owns it, and when. Do the same in architecture governance. Keep one log: decision or action, owner, due date, status. One owner per item. A date on everything. Review it at the start of every meeting. If it isn't logged, it wasn't decided."

**LinkedIn caption:** "Most governance failures are follow-up failures. A simple log with owners and dates beats a perfect slide deck. #Governance #ProgramDelivery"

---

## A3. Hub-and-Spoke Middleware vs Point-to-Point

**Why learn it:** The JD lists middleware and integration architecture.

**Analogy:** Airline networks. Direct flights between every pair of cities become unmanageable. A hub airport lets each city connect once.

```
Title: "Why Hubs Beat Spaghetti"
Subtitle: "Point-to-point vs hub-and-spoke integration"
Visual: split screen. Left: 10 dots with lines between every pair (messy mesh) labelled "Point-to-point: 45 connections". Right: 10 dots each connected to one central hub circle labelled "Hub / middleware: 10 connections". A small airplane icon on each side.
Footer card: "Trade-off: the hub is a shared dependency. Design it for resilience."
Takeaway line: "Fewer connections, one place to manage them."
```

**Short voiceover:** "Ten systems connected directly need forty-five connections. Route them through a hub and you need ten. Airlines figured this out long ago. Middleware is your hub: one place for transformation, security and monitoring. The trade-off is that the hub becomes a shared dependency, so design it to be resilient."

**LinkedIn caption:** "n systems point-to-point means n(n-1)/2 connections. Ten systems: 45. Through a hub: 10. That's the case for middleware, and also the risk. #IntegrationArchitecture #Middleware"

---

## A4. Publish/Subscribe and the Event Broker

**Why learn it:** The JD lists event-driven integration.

**Analogy:** A radio station. The station broadcasts once; anyone who tunes in hears it. The station doesn't know who is listening.

```
Title: "Broadcast Once, Many Listen"
Subtitle: "Publish/subscribe with an event broker"
Visual: left a "Producer" box with a radio-tower icon sending one arrow into a central "Event broker / topic" block. From the broker, three arrows to three "Subscriber" boxes (e.g. "Billing", "Notifications", "Analytics"). Labels on the arrows: "Event: OrderPlaced".
Side card: "Radio station: one broadcast, many listeners".
Takeaway line: "Producers don't need to know who is listening."
```

**Short voiceover:** "A radio station broadcasts once and anyone can tune in. Event-driven systems work the same way. A producer publishes an event, like 'order placed', to a broker. Billing, notifications and analytics each subscribe on their own. The producer doesn't know or care who's listening, so you can add new listeners without changing it. The cost: harder tracing and eventual consistency."

**LinkedIn caption:** "Publish/subscribe decouples teams. Add a new consumer without touching the producer. Just plan for tracing and ordering from day one. #EventDriven #SoftwareArchitecture"

---

## A5. API Gateway

**Why learn it:** The JD lists APIs and integration boundaries.

**Analogy:** A hotel reception desk. Every guest goes through it: identity checked, directed to the right room, and a record kept.

```
Title: "The API Gateway: Your Front Desk"
Subtitle: "One entry point, many back-end services"
Visual: on the left, three client icons (mobile app, web, partner). Centre: a large gold "API Gateway" block with 4 small icons inside labelled "Authenticate", "Rate limit", "Route", "Monitor". On the right, three service boxes. A hotel reception-bell icon on the gateway.
Takeaway line: "Security, limits and logs in one place."
```

**Short voiceover:** "A hotel has a front desk. Every guest passes through it: checked in, directed, recorded. An API gateway does this for your services. It authenticates callers, applies rate limits, routes requests, and records traffic. Put those rules in one place instead of in every service."

**LinkedIn caption:** "An API gateway is where you enforce authentication, throttling and logging consistently. It's not a replacement for good API design. #APIs #CloudArchitecture"

---

## A6. Change Data Capture (CDC)

**Why learn it:** Data replication and migration come up in integration work. Qlik Replicate is a CDC tool.

**Analogy:** A newspaper that only prints what changed since yesterday, instead of reprinting the whole archive.

```
Title: "Copy Only What Changed"
Subtitle: "Change Data Capture (CDC) in 4 steps"
Visual: a left-to-right flow: "Source database" (cylinder) -> "Transaction log" (scroll icon) -> "CDC reader" (magnifier) -> "Target database" (cylinder). Under the arrows, three small chips: "Insert", "Update", "Delete". A newspaper icon with the note "Only the changes, not the whole archive".
Footer: "Used for migration, replication and real-time analytics".
Takeaway line: "Move the changes, keep both sides in sync."
```

**Short voiceover:** "Copying a whole database every time is slow. Change data capture copies only what changed. It reads the source database's transaction log, picks up inserts, updates and deletes, and applies them to the target. Think of a newspaper that only prints today's changes. It's used for migrations, replication and near real-time analytics."

**LinkedIn caption:** "CDC lets you migrate with minimal downtime: bulk load once, then stream the changes until cutover. #DataMigration #CDC #DataEngineering"

---

## A7. Cloud Shared Responsibility

**Why learn it:** The JD wants security, compliance and cloud architecture awareness.

**Analogy:** Renting a flat. The landlord secures the building and the front door. You lock your own door and look after your belongings.

```
Title: "Who Secures What in the Cloud?"
Subtitle: "The shared responsibility model"
Visual: a horizontal stack with two colour bands. Top band (teal) "You: data, identity and access, configuration, applications". Bottom band (gold) "Cloud provider: physical data centres, hardware, core networking, virtualisation". A building icon on the right with a front door and a key.
Small note: "The split moves depending on IaaS, PaaS or SaaS".
Takeaway line: "The provider secures the cloud. You secure what you put in it."
```

**Short voiceover:** "Renting a flat? The landlord secures the building. You lock your own door. Cloud security works the same way. The provider secures data centres, hardware and core networking. You secure your data, identity, configuration and applications. The split shifts depending on whether you use IaaS, PaaS or SaaS. The provider secures the cloud. You secure what's in it."

**LinkedIn caption:** "Most cloud breaches come from customer misconfiguration, not provider failure. Know your side of the line. #CloudSecurity #SharedResponsibility"

---

## A8. Hong Kong Data Privacy: The Six Data Protection Principles (PDPO)

**Why learn it:** The JD prefers familiarity with privacy and regulatory requirements for regulated consumer platforms, and the work is in Hong Kong. Always check current guidance from the Privacy Commissioner's Office before relying on this.

**Analogy:** Borrowing someone's house keys. Take only what you need, say why, look after them, use them only for that purpose, return them, and let the owner check what you hold.

```
Title: "HK Privacy: 6 Principles"
Subtitle: "Personal Data (Privacy) Ordinance, in plain English"
Visual: a 2x3 grid of numbered cards with simple icons:
1. "Collection": collect only what's needed, say why
2. "Accuracy + retention": keep it correct, don't keep it forever
3. "Use": only for the purpose stated
4. "Security": protect it
5. "Openness": be clear about your policies
6. "Access + correction": people can see and fix their data
Corner icon: a key with the note "Like borrowing house keys".
Footer chip: "Check current official guidance".
Takeaway line: "Need it, say why, protect it, and let people check it."
```

**Short voiceover:** "Hong Kong's privacy law rests on six principles. One: collect only what you need and say why. Two: keep it accurate and don't hold it forever. Three: use it only for the stated purpose. Four: protect it. Five: be open about your policies. Six: let people access and correct their data. Think of borrowing someone's house keys, and always check the current official guidance."

**LinkedIn caption:** "Architects don't need to be lawyers, but you should know the six principles behind Hong Kong's privacy ordinance. They shape data flows, retention and access design. #PDPO #DataPrivacy #HongKong"

---

## A9. Three-Point Estimation (for sizing)

**Why learn it:** The JD wants effort sizing and strong Excel.

**Analogy:** Estimating your commute. Best case 20 minutes, usual 30, worst case 60. You wouldn't promise 20.

```
Title: "Estimate With Three Numbers"
Subtitle: "Three-point (PERT) estimation"
Visual: a simple horizontal range bar with three markers: "Optimistic (O)", "Most likely (M)", "Pessimistic (P)". A formula card: "Expected = (O + 4M + P) / 6". A worked example card: "O=10, M=15, P=32 days -> Expected = 17 days". A small commute icon (train) with "Best 20, usual 30, worst 60 min".
Takeaway line: "Give a range and the assumptions behind it."
```

**Short voiceover:** "Never give one number. Give three: best case, most likely, worst case. A common formula weights the most likely case: best plus four times likely plus worst, divided by six. Ten, fifteen and thirty-two days gives seventeen. Like your commute: best twenty minutes, usual thirty, worst sixty. You wouldn't promise twenty. Share the range and the assumptions."

**LinkedIn caption:** "A single-point estimate is a guess dressed as a fact. Three points plus assumptions give stakeholders something they can plan around. In Excel it's a four-column sheet. #Estimation #ProgramManagement #Excel"

---

## A10. The 6 Rs of Cloud Migration

**Why learn it:** Cloud and hosting decisions are in the JD, and the same logic powers M&A rationalisation.

**Analogy:** Moving house. Carry the sofa as is, replace the wiring, redesign the kitchen, buy new furniture, throw away what you don't need, or leave something behind.

```
Title: "The 6 Rs of Cloud Migration"
Subtitle: "Choose a path for each application"
Visual: a 2x3 grid of cards with moving-house icons:
1. "Rehost": lift and shift as is
2. "Replatform": small changes, e.g. managed database
3. "Refactor": redesign for cloud
4. "Repurchase": switch to SaaS
5. "Retire": switch it off
6. "Retain": leave it where it is for now
Takeaway line: "Every application gets one of six decisions."
```

**Short voiceover:** "Moving house, you have six choices for each item. Rehost: carry it over as is. Replatform: make small improvements, like using a managed database. Refactor: redesign for the cloud. Repurchase: buy a SaaS replacement. Retire: switch it off. Retain: leave it for now. Every application in a migration gets one of six decisions."

**LinkedIn caption:** "Don't lift-and-shift everything. Decide per application: rehost, replatform, refactor, repurchase, retire or retain. #CloudMigration #AWS #Azure"

---

# SET B: M&A and post-merger integration concepts

**Reminder:** The Outsized JD does not mention M&A. Learn these as extra depth. On camera or in interview, claim only what you have actually done.

## B1. The Three Phases of an M&A Deal

**Analogy:** Buying and moving into a house. View and survey it, sign and prepare the move, then move in and renovate.

```
Title: "The 3 Phases of an M&A Deal"
Subtitle: "Where technology fits in each"
Visual: three large chevrons left to right with house icons:
1. "Pre-deal": strategy, target screening, due diligence (house survey)
2. "Sign to close": integration planning, Day-1 readiness (signing and packing)
3. "Post-close": integration, synergies, target state (moving in and renovating)
Under each chevron one line on the technology role: "Assess risk + cost", "Plan Day 1", "Execute integration".
Takeaway line: "Technology work starts before the deal closes."
```

**Short voiceover:** "An M&A deal has three phases. Pre-deal: strategy, screening and due diligence, like surveying a house. Sign to close: you plan the integration and get Day 1 ready, like packing. Post-close: you actually integrate and realise the value, like moving in and renovating. Technology work starts well before the deal closes."

**LinkedIn caption:** "Technology isn't an afterthought in M&A. Due diligence findings shape the price, and Day-1 planning starts before signing. #MandA #PostMergerIntegration #ITIntegration"

---

## B2. Technology Due Diligence

**Analogy:** A house survey before you buy: structure, wiring, damp, legal title.

```
Title: "Technology Due Diligence"
Subtitle: "What an architect checks before a deal"
Visual: a house cross-section with 7 magnifier callouts: "Applications + interfaces", "Infrastructure + cloud", "Data + privacy", "Cyber security posture", "Contracts + licences (change-of-control clauses)", "Technical debt", "Key people + skills".
Small side card: "Survey before you buy".
Takeaway line: "Find the surprises before the price is agreed."
```

**Short voiceover:** "Before you buy a house, you survey it. Before a deal, you do technology due diligence. Check the applications and interfaces, infrastructure, data and privacy, security posture, contracts and licences, technical debt and key people. One often-missed item: licences with change-of-control clauses that may need renegotiation after the deal. Find the surprises before the price is agreed."

**LinkedIn caption:** "Licence change-of-control clauses and undocumented interfaces are classic due-diligence surprises. Ask early. #DueDiligence #MandA #EnterpriseArchitecture"

---

## B3. Day 1, Day 2 and Target State

**Analogy:** Moving into a new home. Day 1: keys work, lights on, water running. Day 2: unpack and fix what's awkward. Target state: the renovated dream home.

```
Title: "Day 1, Day 2, Target State"
Subtitle: "Three horizons of integration"
Visual: a three-step staircase rising left to right.
Step 1 "Day 1": "Business runs safely and legally. Minimum connectivity: identity, email, network, critical-system access" with a key icon.
Step 2 "Day 2": "Stabilise and bridge. Fix workarounds, start consolidation" with a toolbox icon.
Step 3 "Target state": "One optimised landscape" with a finished-house icon.
Takeaway line: "Day 1 is about safe, not perfect."
```

**Short voiceover:** "Moving into a new home has three stages. Day 1: the keys work, the lights are on, the water runs. In a merger, that means the business operates safely and legally, with the minimum connectivity: identity, email, network and critical systems. Day 2: stabilise and fix the workarounds. Target state: the finished design. Day 1 is about safe, not perfect."

**LinkedIn caption:** "The most common integration mistake is trying to deliver the target state on Day 1. Protect Day 1 with a short must-work list. #PostMergerIntegration #Day1Readiness"

---

## B4. TSA: Transitional Service Agreement

**Analogy:** Your old landlord lets you keep using the old flat's utilities for six months, at an agreed price, while you set up your new place. There is a move-out date.

```
Title: "TSA: The Bridge Contract"
Subtitle: "Transitional Service Agreement"
Visual: a bridge between two buildings labelled "Seller" and "Buyer / new entity". On the bridge, icons for services: "IT systems", "Payroll", "Support". A calendar icon at the end of the bridge labelled "Exit date". Three small cards: "Defined services", "Agreed price", "Exit plan".
Takeaway line: "A TSA is a bridge, not a home. Plan the exit from day one."
```

**Short voiceover:** "A TSA is a bridge contract. When a business is separated from its seller, the seller keeps providing services, like IT systems, payroll or support, for a defined period at an agreed price, while the buyer builds its own capability. Three things matter: defined services, agreed price, and an exit plan. A TSA is a bridge, not a home. Plan the exit from day one."

**LinkedIn caption:** "TSAs get expensive when exit dates slip. Track each TSA service against a migration plan with an owner. #TSA #Carveout #PostMergerIntegration"

---

## B5. Retain, Replace, Decommission

**Analogy:** Two households merging into one home. Keep the better fridge, replace the one that doesn't fit, and dispose of the duplicate.

```
Title: "Retain, Replace, Decommission"
Subtitle: "What happens to overlapping systems?"
Visual: two columns of application icons labelled "Company A" and "Company B" with overlapping capabilities connected by lines. To the right, three outcome cards: "Retain: keep as is", "Replace / migrate: move to the chosen platform", "Decommission: switch off and archive data". A merging-households icon.
A small criteria strip: "Cost, risk, fit, time, business value".
Takeaway line: "Every system gets one of three outcomes."
```

**Short voiceover:** "When two companies merge, they have overlapping systems, like two households merging into one home. Each system gets one of three outcomes. Retain: keep it as is. Replace or migrate: move it to the chosen platform. Decommission: switch it off and archive the data. Decide using cost, risk, fit, time and business value."

**LinkedIn caption:** "Rationalisation isn't 'pick the bigger company's system'. Score each overlap on agreed criteria and record the rationale. #ApplicationRationalisation #MandA"

---

## B6. Dependency Mapping

**Analogy:** A knitted jumper. Pull one thread and a whole section unravels. You need to know which threads connect to which before you pull.

```
Title: "Know What You'd Break"
Subtitle: "Dependency mapping before any change"
Visual: a network diagram of application nodes connected by lines of four colours with a legend: "Interfaces", "Shared databases", "Shared identity", "Batch schedules". One node is highlighted in gold with a ripple effect showing which nodes it would impact. A knitted-jumper thread icon in the corner.
Takeaway line: "Map the threads before you pull one."
```

**Short voiceover:** "Pull one thread on a knitted jumper and a section unravels. Systems are the same. Before you retire or move anything, map the dependencies: interfaces, shared databases, shared identity, batch schedules and licences. Then you can see what a change would break. Map the threads before you pull one."

**LinkedIn caption:** "Hidden dependencies cause more integration incidents than bad design. An interface inventory is the cheapest insurance you can buy. #Dependencies #IntegrationRisk #EnterpriseArchitecture"

---

## B7. Cutover, Go/No-Go and Rollback

**Analogy:** Switching an airport to a new runway system overnight. Rehearse, check the go/no-go list, and agree beforehand when you'd switch back.

```
Title: "Cutover Without Drama"
Subtitle: "Rehearse, decide, switch, support"
Visual: a horizontal timeline with 5 markers: "Dress rehearsal", "Go / No-Go checklist", "Cutover window", "Rollback trigger?", "Hypercare". The rollback marker is highlighted in gold with a small U-turn arrow. A runway icon behind the timeline.
Takeaway line: "Agree the rollback criteria before you start."
```

**Short voiceover:** "A cutover is like switching an airport to a new runway system overnight. First, a dress rehearsal. Then a go or no-go checklist. Then the cutover window itself. Before you start, agree the rollback triggers: what would make you switch back? After the switch, hypercare, with extra support. Agree the rollback criteria before you begin."

**LinkedIn caption:** "The best cutovers are boring because the drama was rehearsed away. Dress rehearsal, go/no-go, rollback criteria, hypercare. #Cutover #Migration #ProgramDelivery"

---

## B8. Synergies vs Cost to Achieve

**Analogy:** Two shops merging into one. You save a rent, but you pay for the fit-out and the move first.

```
Title: "Synergies Aren't Free"
Subtitle: "IT cost synergies vs one-off cost to achieve"
Visual: a simple chart. Bars below the axis for "One-off cost to achieve" in months 1-12 (red-gold tones) and bars above the axis for "Run-cost savings" starting later and growing (teal), with a line showing cumulative net crossing zero at a point labelled "Break-even". A small two-shops icon.
Takeaway line: "Savings arrive later than costs. Plan for the gap."
```

**Short voiceover:** "Merge two shops and you save one rent, but you pay for the fit-out and the move first. IT synergies work the same way. Savings from retiring duplicate systems and contracts arrive later than the one-off integration costs. Chart both, find the break-even point, and plan for the gap."

**LinkedIn caption:** "Synergy targets that ignore cost-to-achieve and timing set integration teams up to fail. Always chart both. #Synergies #MandA #ITStrategy"

---

## Suggested learning order

1. B3 (Day 1, Day 2, Target State) and B5 (Retain, Replace, Decommission): the vocabulary people expect.
2. A1 (TOGAF ADM) and A2 (decision log): core to this JD.
3. A3 to A6: integration concepts.
4. A7 and A8: security and privacy.
5. A9 and A10: sizing and migration.
6. B1, B2, B4, B6, B7, B8: the rest of M&A.

## Honesty notes

- The Outsized JD does not require M&A. Do not present yourself as an M&A lead.
- Your CV says you contributed to HSBC-AXA merger workshops. That is the safe claim.
- Your EA channel notes describe vendor-side cutover work on the AAT account (2014-2018) and ongoing system onboarding and decommissioning at the terminal. That work is not on the CV version you sent me. If it is accurate and you want to use it, add it to the CV first, then use it as your example for B5 and B7.
- Verify the PDPO principles against the Privacy Commissioner's current guidance before posting A8.
