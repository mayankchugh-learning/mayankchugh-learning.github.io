# Learning Infographic Prompts — M&A / PMI / IT Governance
Personalized with aviation-cargo and enterprise-architecture analogies drawn from Mayank Chugh's 13 years at Cathay Pacific Cargo Terminal and 20 years of enterprise cloud/architecture delivery. Each prompt is self-contained — paste one at a time into your infographic generation tool.

---

## 1. The Three M&A Phases (Due Diligence → Day 1 → Post-Merger Integration)

```
Create a dark navy-themed technical infographic titled "M&A IT INTEGRATION — THREE GATES, ONE ANALOGY: MERGING TWO CARGO TERMINALS" using numbered blue module cards, green-check/red-cross lists, and a horizontal timeline flow. Author byline: Mayank Chugh, Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration, https://mayankchugh-learning.github.io/.

Frame the three M&A IT phases as merging two airline cargo terminals into one operation:

MODULE 1 — DUE DILIGENCE = "The Pre-Merger Cargo Audit"
Before two airlines combine cargo operations, you audit both terminals: what warehouse management systems do they run, are any licenses non-compliant, is there hidden technical debt (a system nobody documented), and are there compliance risks (customs data handling, hazardous cargo tracking). AI-era addition: audit whether either airline's AI/ML models were trained on data they didn't have rights to use.

MODULE 2 — DAY 1 READINESS = "Opening One Combined Ramp on Day One"
The two terminals must operate as one from the moment the merger closes — shared staff badges/access (like combined security clearances), one unified security perimeter, one set of operational directories. This isn't the final state — it's the minimum needed to physically run flights together on day one. AI-era addition: push a single combined "acceptable use policy" to all staff immediately, like a unified safety briefing.

MODULE 3 — POST-MERGER INTEGRATION = "Consolidating Two Warehouse Systems Into One"
Over months, decide which of the two terminals' systems survive: which warehouse management system becomes the standard, which gets decommissioned, which cargo-tracking tool is kept temporarily under a service agreement with the other side. This is Application Rationalization — like deciding which of two cargo-scanning systems becomes the airline-wide standard.

Closing panel: "Due Diligence finds the liabilities. Day 1 keeps the planes flying. Post-Merger Integration decides what survives long-term."

Hashtags: #EnterpriseArchitecture #MandA #ITGovernance #TOGAF #CloudMigration #PostMergerIntegration
```

---

## 2. TSA (Transition Service Agreement)

```
Create a dark navy-themed infographic titled "TSA EXPLAINED: BORROWING THE OTHER AIRLINE'S GROUND HANDLING" with a light-bulb key-idea callout, a simple before/during/after diagram, and green-check/red-cross comparison boxes. Author byline: Mayank Chugh, Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration, https://mayankchugh-learning.github.io/.

KEY IDEA: A Transition Service Agreement (TSA) is a temporary, paid arrangement where the acquired company keeps using the seller's IT systems and services for a fixed period after the deal closes — because you can't build your own replacement system overnight.

ANALOGY: It's exactly like a newly-merged airline temporarily paying to keep using its former partner's ground-handling and cargo-scanning equipment at an airport while it installs its own — you don't own it, you're renting continuity, on a countdown clock.

DIAGRAM (3 stages, left to right):
STAGE 1 — DEAL CLOSES: New airline has no cargo systems of its own yet. Runs entirely on the seller's borrowed equipment (TSA in effect).
STAGE 2 — DURING TSA (typically 6-24 months): New airline builds/migrates its own warehouse management, cargo tracking, and billing systems in parallel, still paying for the borrowed setup as a safety net.
STAGE 3 — TSA EXIT: New airline's own systems go live; borrowed equipment is handed back; TSA contract ends. This is a real deadline with financial penalties if missed.

AT A GLANCE table:
| Concept | Meaning | Cargo Terminal Example |
|---|---|---|
| TSA | Temporary reliance on seller's systems | Renting the old airline's cargo scanners |
| TSA Exit | Deadline to be fully independent | Your own scanners installed and certified |
| TSA Cost | Usually charged monthly, often above market rate | Like an airport gate lease at premium rate |
| TSA Risk | Missing the exit deadline = extra cost + business risk | Flights delayed if your own systems aren't ready |

Footer: "A TSA isn't a solution — it's a clock. The real work is building your own systems before it runs out."

Hashtags: #MandA #TSA #EnterpriseArchitecture #ITGovernance #TOGAF #PostMergerIntegration
```

---

## 3. Retain / Replace / Decommission Framework

```
Create a dark navy-themed infographic titled "RETAIN, REPLACE, DECOMMISSION: SORTING TWO CARGO WAREHOUSES INTO ONE" using a 3-column decision framework with icon badges, a decision-tree diagram, and a criteria checklist. Author byline: Mayank Chugh, Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration, https://mayankchugh-learning.github.io/.

SETUP: After two airlines' cargo operations merge, every system (warehouse management, tracking, billing, customs) from BOTH sides needs a verdict: Retain, Replace, or Decommission.

COLUMN 1 — RETAIN (green icon)
Keep as-is, at least for now. Criteria: system is business-critical, low technical debt, licensing is clean, replacing it isn't worth the risk yet.
Cargo analogy: Keep the newer, more reliable of the two airlines' cargo-scanning systems — it already works, don't touch it during a fragile transition.

COLUMN 2 — REPLACE (amber icon)
Neither system survives — build or buy a new unified one. Criteria: both systems are outdated, or the merged scale needs new capability neither side had alone.
Cargo analogy: Neither airline's old paper-based customs process scales to the combined cargo volume — replace both with one new digital customs system.

COLUMN 3 — DECOMMISSION (red icon)
Shut it down, migrate its data/function elsewhere, retire it entirely. Criteria: duplicate of a system already being retained, end-of-life, or redundant post-merger.
Cargo analogy: One airline's older, standalone billing system gets shut down once its function is absorbed into the retained system — like closing a duplicate cargo counter once one combined counter can handle both airlines' volume.

DECISION TREE (below the three columns):
Is the system business-critical? → No → DECOMMISSION.
→ Yes → Is it duplicated by the other side's system? → Yes → Pick the better one, DECOMMISSION the other.
→ No duplicate → Is it fit for the combined scale? → Yes → RETAIN. → No → REPLACE.

Footer: "This is Application Rationalization — the same judgment call as choosing which of two migration targets survives, just applied across an entire merged IT estate."

Hashtags: #ApplicationRationalization #MandA #EnterpriseArchitecture #ITGovernance #TOGAF
```

---

## 4. Day-1 vs. Day-2 vs. Long-Term Target State

```
Create a dark navy-themed infographic titled "DAY-1, DAY-2, TARGET STATE: THREE DIFFERENT FINISH LINES" using a three-stage horizontal roadmap, a "readiness bar" visual per stage, and a light-bulb key distinction callout. Author byline: Mayank Chugh, Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration, https://mayankchugh-learning.github.io/.

KEY DISTINCTION callout: "Day-1 readiness is not the finished airline. It's the minimum bar to legally and operationally open the gates."

STAGE 1 — DAY 1 (bare minimum to close the deal)
What's needed: combined staff access badges work, one unified security perimeter, basic operational continuity, nothing catastrophic breaks.
Cargo analogy: On merger day, staff from both airlines can badge into the same warehouse, planes can still be loaded, nothing stops — even if the systems underneath are still two separate, duct-taped-together setups.

STAGE 2 — DAY 2 (stabilization, weeks to months post-close)
What's needed: initial pain points fixed, TSA-dependent processes stabilized, quick wins delivered, teams start operating as one instead of two shifts running parallel processes.
Cargo analogy: The combined ground crew stops using two different cargo-labeling systems side by side and adopts one interim standard, even though the "real" unified system isn't built yet.

STAGE 3 — LONG-TERM TARGET STATE (the actual destination architecture, 9-18+ months)
What's needed: TSAs fully exited, Retain/Replace/Decommission decisions executed, one true unified architecture, no more borrowed systems.
Cargo analogy: The merged airline runs entirely on its own newly-built, unified cargo and warehouse management platform — no more renting the old partner's equipment, no more parallel processes.

Footer: "Confusing these three stages is the most common PMI mistake — chasing 'Target State' quality on a 'Day-1' timeline is how deals fail."

Hashtags: #PostMergerIntegration #MandA #EnterpriseArchitecture #TargetOperatingModel #TOGAF
```

---

## 5. Dependency & Sequencing Mapping Across Markets

```
Create a dark navy-themed infographic titled "DEPENDENCY MAPPING: WHY YOU CAN'T MIGRATE EVERYTHING AT ONCE" using a network/dependency diagram, a sequencing timeline with numbered waves, and a risk-flag callout box. Author byline: Mayank Chugh, Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration, https://mayankchugh-learning.github.io/.

KEY IDEA: In a multi-market merger, you can't migrate every system in every country at once — some systems depend on others being ready first, and getting the sequence wrong breaks operations.

CARGO ANALOGY (main diagram): Migrating Cathay Pacific's Hong Kong cargo terminal systems required knowing the sequence — you couldn't cut over the warehouse management system before the customs interface was ready, and you couldn't switch billing before both were stable, because each one depended on data from the system before it. The same logic applies market-by-market in an M&A integration: Hong Kong's systems might depend on a shared regional customs gateway that Singapore also depends on, so both markets' cutover dates are linked whether you like it or not.

DIAGRAM — DEPENDENCY WAVES (numbered 1 to 4, left to right, with arrows showing blocking relationships):
WAVE 1: Foundational/shared systems (directories, network, security) — everything else depends on these being ready first.
WAVE 2: Market-specific core systems with no cross-market dependencies (can migrate market-by-market, in parallel).
WAVE 3: Systems that depend on a shared regional platform (must wait until that platform is stable across all markets using it).
WAVE 4: Reporting/analytics layers that depend on all upstream systems already being migrated and stable.

RISK FLAG callout: "Migrating Wave 3 before the shared platform is ready doesn't just risk one market — it risks every market that depends on it. This is why sequencing, not just individual system readiness, determines the real timeline."

Footer: "13 years of coordinating dependencies across HK and offshore teams on one airline's systems is the same discipline as sequencing across markets in a merger — just with more countries on the map."

Hashtags: #DependencyMapping #MandA #EnterpriseArchitecture #TOGAF #PostMergerIntegration
```

---

## 6. COBIT 2019 — Governance vs. Management

```
Create a dark navy-themed infographic titled "COBIT 2019 IN ONE PICTURE: THE CONTROL TOWER VS. THE RAMP" using a two-column split (Governance vs. Management), a TOGAF-integration callout box, and a simple hierarchy diagram. Author byline: Mayank Chugh, Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration, https://mayankchugh-learning.github.io/.

KEY IDEA: COBIT 2019 splits IT decision-making into two distinct layers that must not be confused: Governance (set direction, owned by executives) and Management (execute the plan, owned by delivery teams).

COLUMN 1 — GOVERNANCE (Evaluate, Direct, Monitor) — "The Control Tower"
Owned by: Board/executive stakeholders.
Job: Evaluate options and set direction, Direct the organization toward chosen priorities, Monitor whether outcomes match intent.
Cargo analogy: Air traffic control doesn't load cargo — it decides which flights get priority, sets the rules of the airspace, and watches whether operations are running safely and on schedule. It directs; it doesn't execute.

COLUMN 2 — MANAGEMENT (Plan, Build, Run, Monitor) — "The Ramp Operations"
Owned by: Product/delivery/engineering teams.
Job: Plan the work, Build the systems, Run day-to-day operations, Monitor operational performance.
Cargo analogy: The ramp crew doesn't set airline strategy — they plan today's cargo load, build the manifest, run the physical loading operation, and monitor whether it's on time. They execute within the direction the control tower has set.

TOGAF INTEGRATION callout: "TOGAF's Phase G (Implementation Governance) and Phase H (Architecture Change Management) are where an Enterprise Architect's work plugs directly into COBIT's Governance layer — architecture decisions get evaluated and directed at the Governance level, then executed through Management."

Footer: "Confusing these two layers is a classic governance failure — like the control tower trying to personally load cargo, or the ramp crew trying to set airspace policy."

Hashtags: #COBIT2019 #ITGovernance #TOGAF #EnterpriseArchitecture #MandA
```

---

## 7. ITIL Basics — Incident, Change, and Problem Management

```
Create a dark navy-themed infographic titled "ITIL IN PLAIN TERMS: WHEN SOMETHING BREAKS AT THE CARGO TERMINAL" using three module cards (Incident / Problem / Change Management), a flow diagram showing how they connect, and a quick-reference comparison table. Author byline: Mayank Chugh, Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration, https://mayankchugh-learning.github.io/.

MODULE 1 — INCIDENT MANAGEMENT — "Put the fire out now"
Goal: restore service as fast as possible, even with a temporary fix.
Cargo analogy: The cargo-tracking system goes down mid-shift. Incident management is the emergency response — restart the server, switch to a manual backup process, get flights loading again. You don't need to know WHY it broke yet, just how to get it working.

MODULE 2 — PROBLEM MANAGEMENT — "Find out why it keeps happening"
Goal: find and eliminate the root cause behind recurring incidents.
Cargo analogy: That same tracking system has crashed three times this month. Problem management asks why — is it a memory leak, a bad update, an underlying architecture flaw — and fixes the actual cause, not just the symptom.

MODULE 3 — CHANGE MANAGEMENT — "Control what gets modified, and how"
Goal: any change to a live system goes through assessment, approval, and scheduling — so fixes don't cause new incidents.
Cargo analogy: Once problem management identifies the fix, change management ensures it's tested, approved, and deployed in a controlled window — not pushed live during peak cargo season without anyone signing off.

FLOW DIAGRAM: Incident occurs → Incident Management restores service fast (workaround) → If recurring, escalates to Problem Management → Root cause identified → Fix goes through Change Management → Deployed safely → Cycle closes.

QUICK REFERENCE table:
| Process | Question It Answers | Timescale |
|---|---|---|
| Incident | How do we get it working again, right now? | Minutes to hours |
| Problem | Why does this keep happening? | Days to weeks |
| Change | How do we safely deploy the fix? | Scheduled, controlled |

Footer: "SLAs, RPOs, and RTOs — already familiar territory from enterprise architecture work — are the metrics that all three of these processes are ultimately governed by."

Hashtags: #ITIL #ITGovernance #IncidentManagement #EnterpriseArchitecture #TOGAF
```

---

## 8. AI Governance Tiers (Public / Private / Custom RAG)

```
Create a dark navy-themed infographic titled "THREE TIERS OF ENTERPRISE AI: FROM PUBLIC TOOLS TO YOUR OWN VAULT" using three tiered module cards (widening in security/customization left to right), a data-flow diagram per tier, and a cost/control tradeoff scale. Author byline: Mayank Chugh, AI Engineer · Azure · GenAI · RAG, https://mayankchugh-learning.github.io/.

TIER 1 — PUBLIC AI — "The Open Tarmac"
What it is: general public tools (ChatGPT web, public Claude, etc.) with no enterprise wrapper.
Rule: strict data-loss-prevention policy — proprietary code or client information must never be pasted in.
Cargo analogy: Like a public airport lounge — useful, open to everyone, but you'd never leave a client's cargo manifest sitting on a public table there.

TIER 2 — PRIVATE ENTERPRISE AI — "The Airline's Own Gate"
What it is: standard corporate-wrapped AI (e.g., AWS Bedrock, Azure OpenAI) in an isolated cloud environment — inputs never train the public model.
Rule: this is where most day-to-day enterprise AI usage should sit — controlled access, but not yet deeply customized to your own data.
Cargo analogy: A private airline gate — controlled access, your own staff and processes, but still using standard shared airport infrastructure underneath.

TIER 3 — CUSTOM / RAG SYSTEMS — "Your Own Warehouse, Your Own Rules"
What it is: highly customized architecture with domain-specific vector databases mirroring the same permission levels as your enterprise relational databases.
Rule: highest control, highest customization — used for genuinely sensitive or high-value proprietary knowledge retrieval.
Cargo analogy: Your own dedicated cargo warehouse with your own security clearances mirrored exactly onto who can access which shelf — nothing shared, fully custom.

GOVERNANCE OVERLAY (bottom panel):
AI FinOps: One Enterprise API Gateway rate-limits and cost-attributes AI usage per department — like a single fuel account that tracks exactly which department's flights burned which fuel.
Shadow AI Mitigation: An open AI Service Catalog + 48-hour review process gives teams a fast, sanctioned path — so nobody's tempted to sneak in an unauthorized tool, the way an unsanctioned baggage cart bypassing security would be a problem.

Footer: "This framework maps directly onto self-directed RAG/agentic work — Tier 2/3 concepts (isolated environments, permissioned vector retrieval) are the same principles at enterprise governance scale."

Hashtags: #AIGovernance #EnterpriseAI #RAG #GenerativeAI #AIFinOps #Azure #AWS
```

---

*All prompts use the same navy/gold visual language as your existing LinkedIn infographic series (Evolution of Data Architecture, Agentic AI Middleware) for consistent branding across your posts.*
