# Infographic Prompt Pack, Part 2 (insurance edition): JD Gap Concepts and Insurance M&A Concepts

Part 1 covered 12 concepts (governance, trade-offs, boundaries, sync/async, CI/CD, RPO/RTO, TCO, vendor scoring, security by design, payments, decision brief, book of work). Part 2 adds:

- **Set A (10 concepts):** things the Outsized JD expects that Part 1 did not cover.
- **Set B (8 concepts):** core M&A and post-merger integration concepts, all set in a **merger of two insurers** (policy administration, claims, actuarial, reinsurance, regulatory reporting). The JD does **not** mention M&A, so treat Set B as extra learning and as a safety net if the topic comes up.

## How to use

1. Paste the **MASTER STYLE** block below before each prompt.
2. Add one **FORMAT** line:
   - LinkedIn: `FORMAT: portrait 4:5, 1080x1350 px.`
   - YouTube Short: `FORMAT: vertical 9:16, 1080x1920 px. Keep all key text inside the middle 70% of the height.`
3. Generators misspell long text. Fix typos in Canva or Figma.
4. Add your badge yourself in the reserved bottom strip.

## MASTER STYLE (same as Part 1)

```
Educational infographic in a clean flat-vector style. Deep navy background (#0B1F3A) with a very subtle shield-and-policy-document line motif in the background at low opacity. Accent colour gold (#D4A24C), secondary colour teal (#2EC4B6), text white or light grey. Rounded cards, thin gold dividers, consistent icons of one style. One bold title at the top (max 8 words), a one-line subtitle, then a simple visual in the middle, then a single takeaway line. Large, highly legible sans-serif type that reads on a phone. Plenty of white space. Leave the bottom 8% empty for a branding strip. No logos, no real company names, no photographs of people, no watermarks. Spell all text exactly as given.
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

**Analogy:** A claim file diary. Every claim file records the next action, who owns it and the due date. Nothing relies on memory; everything is in the file.

```
Title: "If It Isn't Logged, It Wasn't Decided"
Subtitle: "The decision and action log"
Visual: a clean log table mock-up with columns "ID", "Decision / Action", "Owner", "Due", "Status". Three sample rows with traffic-light status dots (green, amber, red). A small claim-file folder icon in the corner with the note "Like a claim file diary".
Below the table, three short rules in cards: "One owner per item", "A date on everything", "Review at the start of every meeting".
Takeaway line: "Decisions need an owner and a date, or they drift."
```

**Short voiceover:** "Every insurance claim file has a diary: the next action, who owns it, and when it's due. Do the same in architecture governance. Keep one log: decision or action, owner, due date, status. One owner per item. A date on everything. Review it at the start of every meeting. If it isn't logged, it wasn't decided."

**LinkedIn caption:** "Most governance failures are follow-up failures. A simple log with owners and dates beats a perfect slide deck. #Governance #ProgramDelivery"

---

## A3. Hub-and-Spoke Middleware vs Point-to-Point

**Why learn it:** The JD lists middleware and integration architecture.

**Analogy:** An insurance broker. Ten customers each phoning ten insurers means a hundred separate relationships. One broker in the middle means each customer and each insurer connects once: twenty.

```
Title: "Why Hubs Beat Spaghetti"
Subtitle: "Point-to-point vs hub-and-spoke integration"
Visual: split screen. Left: a row of 10 small "customer" dots on top and 10 "insurer" dots at the bottom with a line from every customer to every insurer (dense criss-cross), labelled "Direct: 100 connections". Right: the same 10 customers and 10 insurers, each connected only to a central hub circle labelled "Broker / middleware", labelled "Via hub: 20 connections". A small shield icon on the hub.
Footer card: "Trade-off: the hub is a shared dependency. Design it for resilience."
Takeaway line: "Fewer connections, one place to manage them."
```

**Short voiceover:** "Ten customers shopping directly from ten insurers need a hundred relationships. Put a broker in the middle and you need twenty. Middleware is your broker: one place for transformation, security and monitoring. The trade-off is that the hub becomes a shared dependency, so design it to be resilient."

**LinkedIn caption:** "n customers x m insurers direct means n x m connections. Ten by ten: 100. Through a hub: 20. That's the case for middleware, and also the risk. #IntegrationArchitecture #Middleware"

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

# SET B: M&A concepts, set in a merger of two insurers

**Scenario used throughout:** "Insurer A" acquires "Insurer B". Both run policy administration, claims, underwriting and pricing, actuarial and reserving, reinsurance, billing, customer data, broker/agent portals, and regulatory reporting.

**Reminder:** The Outsized JD does not mention M&A. Learn these as extra depth. On camera or in an interview, claim only what you have actually done. Insurance is a studied domain for you, not a lived one (see the honesty notes at the end).

## B1. The Three Phases of an Insurance M&A Deal

**Analogy:** Underwriting a big risk. First assess it, then agree terms and prepare, then carry the risk day to day.

```
Title: "The 3 Phases of an Insurer Merger"
Subtitle: "Where technology fits in each"
Visual: three large chevrons left to right with insurance icons:
1. "Pre-deal": strategy, target screening, due diligence on the book of policies and systems
2. "Sign to close": integration planning, Day-1 readiness, regulator engagement
3. "Post-close": integration, synergies, target state
Under each chevron one line on the technology role: "Assess risk + cost", "Plan Day 1", "Execute integration".
Takeaway line: "Technology work starts before the deal closes."
```

**Short voiceover:** "An insurer merger has three phases. Pre-deal: screening and due diligence, like underwriting the target. Sign to close: you plan the integration, prepare Day 1 and engage regulators. Post-close: you integrate systems and realise the savings. Technology work starts well before the deal closes."

**LinkedIn caption:** "Technology isn't an afterthought in insurance M&A. Due diligence findings shape the price, and Day-1 planning starts before signing. #MandA #Insurance #PostMergerIntegration"

---

## B2. Technology Due Diligence on an Insurer

**Analogy:** Underwriting the target company. An underwriter assesses an applicant's risk before accepting it. Technology due diligence assesses the target's systems before the buyer accepts them.

```
Title: "Underwrite the Target's Technology"
Subtitle: "Technology due diligence for an insurer"
Visual: a shield in the centre with 7 magnifier callouts around it: "Policy admin + claims systems", "Data quality of policy records", "Actuarial models + spreadsheets", "Reinsurance + vendor contracts", "Cyber + customer data privacy", "Licences (change-of-control clauses)", "Technical debt + key people".
Small side card: "Underwriting the target".
Takeaway line: "Find the surprises before the price is agreed."
```

**Short voiceover:** "An underwriter assesses risk before accepting a policy. In a merger, you underwrite the target's technology. Check the policy admin and claims systems, the quality of the policy data, actuarial models and spreadsheets, reinsurance and vendor contracts, cyber and privacy, licences with change-of-control clauses, and technical debt. Find the surprises before the price is agreed."

**LinkedIn caption:** "Old policy admin platforms and spreadsheet-based actuarial models are classic due-diligence surprises. Ask early. #DueDiligence #Insurance #EnterpriseArchitecture"

---

## B3. Day 1, Day 2 and Target State

**Analogy:** The insurer's promise. On Day 1 a policyholder must still be able to buy, renew, pay and claim, no matter which logo is on the letter.

```
Title: "Day 1, Day 2, Target State"
Subtitle: "Three horizons of an insurer integration"
Visual: a three-step staircase rising left to right.
Step 1 "Day 1": "Customers can still buy, renew, pay and claim. Staff can log in. Regulatory reporting continues" with a shield-and-tick icon.
Step 2 "Day 2": "Stabilise and bridge. Fix workarounds, start consolidation" with a toolbox icon.
Step 3 "Target state": "One optimised landscape" with a unified-platform icon.
Takeaway line: "Day 1 is about safe, not perfect."
```

**Short voiceover:** "Insurance is a promise. On Day 1 of a merger, policyholders must still be able to buy, renew, pay and claim. Staff must log in, and regulatory reporting must continue. That's Day 1: safe, not perfect. Day 2 stabilises and fixes the workarounds. The target state is the finished design. Protect Day 1 with a short must-work list."

**LinkedIn caption:** "The most common integration mistake is trying to deliver the target state on Day 1. In insurance, protect the customer promise first: buy, renew, pay, claim. #PostMergerIntegration #Insurance #Day1Readiness"

---

## B4. TSA: Transitional Service Agreement

**Analogy:** A third-party administrator (TPA). A TPA handles claims on your behalf until your own team and system are ready. You pay for the service, and there is an end date.

```
Title: "TSA: The Bridge Contract"
Subtitle: "Transitional Service Agreement"
Visual: a bridge between two buildings labelled "Seller insurer" and "Buyer / new entity". On the bridge, icons for services: "Policy admin", "Claims handling", "IT support". A calendar icon at the end of the bridge labelled "Exit date". Three small cards: "Defined services", "Agreed price", "Exit plan".
Side card: "Like a TPA handling claims until you are ready".
Takeaway line: "A TSA is a bridge, not a home. Plan the exit from day one."
```

**Short voiceover:** "A TSA is a bridge contract. When a block of business is separated from its seller, the seller keeps running things like policy administration and claims handling for a defined period at an agreed price, while the buyer builds its own capability. It's like using a third-party administrator until your own team is ready. Defined services, agreed price, exit plan. Plan the exit from day one."

**LinkedIn caption:** "TSAs get expensive when exit dates slip. Track each TSA service against a migration plan with an owner. #TSA #Carveout #Insurance"

---

## B5. Retain, Replace, Decommission

**Analogy:** Merging two filing rooms of policy files. Keep the cabinet that works, move the files from the one that doesn't, and clear out the duplicate.

```
Title: "Retain, Replace, Decommission"
Subtitle: "What happens to overlapping insurer systems?"
Visual: two columns of system icons labelled "Insurer A" and "Insurer B", each with: "Policy admin", "Claims", "Pricing", "Billing", "Reporting". Lines connect overlapping pairs. To the right, three outcome cards: "Retain: keep as is", "Replace / migrate: move to the chosen platform", "Decommission: switch off, archive records". A small criteria strip: "Cost, risk, fit, time, regulatory needs".
Takeaway line: "Every system gets one of three outcomes."
```

**Short voiceover:** "When two insurers merge, they have overlapping systems: two policy admin platforms, two claims systems, two billing systems. Each one gets one of three outcomes. Retain it. Replace it and migrate to the chosen platform. Or decommission it, switching it off and archiving the records you must keep. Decide on cost, risk, fit, time and regulatory needs."

**LinkedIn caption:** "Rationalisation isn't 'pick the bigger company's system'. Score each overlap on agreed criteria, and remember insurers must keep policy and claims records for years. #ApplicationRationalisation #Insurance #MandA"

---

## B6. Dependency Mapping

**Analogy:** Follow one claim. A single claim touches the policy record, the claims system, payments, reserving, reinsurance recovery and regulatory reporting. Change one system and the claim breaks somewhere downstream.

```
Title: "Follow One Claim"
Subtitle: "Dependency mapping before any change"
Visual: a left-to-right chain of boxes showing one claim travelling through systems: "Policy record" -> "Claims system" -> "Payments" -> "Reserving / actuarial" -> "Reinsurance recovery" -> "Regulatory reporting". Beneath, a legend of dependency types: "Interfaces", "Shared databases", "Shared identity", "Batch schedules". One box highlighted in gold with a ripple showing what it would impact.
Takeaway line: "Map the chain before you change a link."
```

**Short voiceover:** "Follow a single claim. It touches the policy record, the claims system, payments, reserving, reinsurance recovery and regulatory reporting. Change one system and something downstream breaks. Before you retire or move anything, map the dependencies: interfaces, shared databases, shared identity, batch schedules and licences. Map the chain before you change a link."

**LinkedIn caption:** "Hidden dependencies cause more integration incidents than bad design. In insurance, trace one claim end to end and you will find most of them. #Dependencies #IntegrationRisk #Insurance"

---

## B7. Policy Migration Cutover, Reconciliation and Rollback

**Analogy:** Moving every policy file to a new system over a quiet weekend, then counting them. The number of policies and the premium totals must match before and after.

```
Title: "Migrate Policies Without Losing One"
Subtitle: "Rehearse, reconcile, decide, switch"
Visual: a horizontal timeline with 5 markers: "Dress rehearsal", "Go / No-Go checklist", "Cutover window", "Reconcile: policy counts + premium totals", "Rollback trigger?". The reconcile marker and the rollback marker are highlighted in gold, the rollback with a small U-turn arrow. Small icons of policy documents moving from an "Old system" box to a "New system" box.
Takeaway line: "If the counts don't match, don't go live."
```

**Short voiceover:** "Migrating policies is like moving every file to a new cabinet over a quiet weekend, then counting them. First a dress rehearsal. Then a go or no-go checklist. Then the cutover itself. Then reconciliation: policy counts and premium totals must match before and after. Agree the rollback triggers in advance. If the counts don't match, don't go live."

**LinkedIn caption:** "In policy migrations, reconciliation is the real exit gate: in-force policy counts, premium totals and open-claim reserves must match. Agree rollback criteria before the weekend, not during it. #Cutover #Migration #Insurance"

---

## B8. Synergies vs Cost to Achieve

**Analogy:** Two branch offices merging into one. You save a rent, but you pay for the fit-out and the move first.

```
Title: "Synergies Aren't Free"
Subtitle: "IT cost synergies vs one-off cost to achieve"
Visual: a simple chart. Bars below the axis for "One-off cost to achieve" in months 1-12 (gold tones) and bars above the axis for "Run-cost savings" (duplicate platforms, data centres, licences) starting later and growing (teal), with a line showing cumulative net crossing zero at a point labelled "Break-even". A small two-offices-into-one icon.
Takeaway line: "Savings arrive later than costs. Plan for the gap."
```

**Short voiceover:** "Merge two branch offices and you save one rent, but you pay for the fit-out and the move first. Insurer IT synergies work the same way. Savings from retiring duplicate platforms, data centres and licences arrive later than the one-off integration costs. Chart both, find the break-even point, and plan for the gap."

**LinkedIn caption:** "Synergy targets that ignore cost-to-achieve and timing set integration teams up to fail. Always chart both. #Synergies #MandA #Insurance"

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
- **Insurance is a studied domain for you, not a lived one.** Your CV shows HSBC-AXA merger workshops (vendor-side, contributing vendor-solution proposals) and an Insurance Charges Predictor ML app. That is the extent of it. Present these posts as teaching ("here is how it works"), not as "what I delivered at an insurer".
- If you want a "from my experience" line, the safe options are the HSBC-AXA workshops wording from your CV, or the cutover work on your terminal account if you add it to your CV first. Do not use the insurance scenario as if it were your own project.
- Verify the PDPO principles (A8) against the Privacy Commissioner's current guidance before posting.
- Insurance record-retention and regulatory-reporting rules differ by jurisdiction. Where a post mentions them, keep the wording general or check the regulator's current rules.
