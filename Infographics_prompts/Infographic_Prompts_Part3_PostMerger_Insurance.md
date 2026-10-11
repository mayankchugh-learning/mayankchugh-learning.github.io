# Infographic Prompt Pack, Part 3: Post-Merger Integration (insurance edition)

Parts 1 and 2 covered architecture concepts and the early M&A concepts (phases, due diligence, Day 1/Day 2, TSA, retain/replace/decommission, dependency mapping, cutover, synergies). Part 3 covers what happens **after close**: running the integration, consolidating data and people, and proving it worked.

**Scenario used throughout:** "Insurer A" has acquired "Insurer B". Both run policy administration, claims, billing, customer data, actuarial and reinsurance, and regulatory reporting.

**Reminder:** The Outsized JD does not mention M&A. This is extra learning. Insurance is a studied domain for you, not a lived one, so present these as teaching posts.

## How to use

1. Paste the **MASTER STYLE** block below before each prompt.
2. Add one **FORMAT** line:
   - LinkedIn: `FORMAT: portrait 4:5, 1080x1350 px.`
   - YouTube Short: `FORMAT: vertical 9:16, 1080x1920 px. Keep all key text inside the middle 70% of the height.`
3. Generators misspell long text. Fix typos in Canva or Figma.
4. Add your badge yourself in the reserved bottom strip.

## MASTER STYLE (same as Parts 1 and 2)

```
Educational infographic in a clean flat-vector style. Deep navy background (#0B1F3A) with a very subtle shield-and-policy-document line motif in the background at low opacity. Accent colour gold (#D4A24C), secondary colour teal (#2EC4B6), text white or light grey. Rounded cards, thin gold dividers, consistent icons of one style. One bold title at the top (max 8 words), a one-line subtitle, then a simple visual in the middle, then a single takeaway line. Large, highly legible sans-serif type that reads on a phone. Plenty of white space. Leave the bottom 8% empty for a branding strip. No logos, no real company names, no photographs of people, no watermarks. Spell all text exactly as given.
```

---

## C1. The Integration Management Office (IMO)

**Analogy:** A hospital's command centre during a major incident. One team sees every workstream, tracks status, escalates blockers and keeps everyone on one plan.

```
Title: "The Integration Command Centre"
Subtitle: "What an Integration Management Office does"
Visual: a hub-and-spoke diagram. In the centre a gold circle labelled "IMO". Around it six workstream nodes: "Technology", "Operations + claims", "Finance + actuarial", "Legal + regulatory", "People + culture", "Customer + brand". Three small cards beneath: "One plan", "Weekly cadence", "Escalation path". A steering-committee icon at the top.
Takeaway line: "One plan, one cadence, one place to escalate."
```

**Short voiceover:** "A merger runs on many workstreams: technology, operations, finance, legal, people and customers. Without coordination, they collide. That's why you set up an Integration Management Office. It holds one plan, runs a weekly cadence, tracks dependencies between workstreams, and gives blockers a clear escalation path. One plan, one cadence, one place to escalate."

**LinkedIn caption:** "Integrations rarely fail on technology alone. They fail on coordination. An IMO with one plan and a clear escalation path is the cheapest risk control you can buy. #PostMergerIntegration #IMO #Insurance"

---

## C2. The Day-100 Plan

**Analogy:** A new manager's first 100 days. Settle in, fix what's urgent, and set the direction.

```
Title: "The First 100 Days"
Subtitle: "A typical post-merger integration rhythm"
Visual: a horizontal timeline in three segments: "Days 1-30: Stabilise" (shield-and-tick icon: customers served, staff paid, reporting running), "Days 31-60: Plan" (blueprint icon: target operating model, system decisions, migration waves), "Days 61-100: Start delivering" (rocket-free arrow icon: quick wins, first migrations, early savings). A milestone flag at Day 100: "Review + reset the roadmap".
Takeaway line: "Stabilise first. Plan second. Deliver third."
```

**Short voiceover:** "Think of a new manager's first hundred days. In the first thirty, stabilise: customers are served, staff are paid, regulatory reporting runs. In days thirty-one to sixty, plan: decide the target operating model, which systems stay, and the migration waves. In days sixty-one to a hundred, start delivering quick wins. At day one hundred, review and reset the roadmap. Stabilise, plan, deliver."

**LinkedIn caption:** "Day-100 plans are a rhythm, not a rule. The point is order: protect the business, decide the direction, then deliver. #Day100 #PostMergerIntegration #Insurance"

---

## C3. Single Customer View

**Analogy:** One household, two insurers. A family has a motor policy with Insurer A and a home policy with Insurer B. After the merger, they should be one customer, not two strangers.

```
Title: "One Customer, Not Two"
Subtitle: "Building a single customer view after a merger"
Visual: left, two customer records side by side labelled "Insurer A record" (name, address, motor policy) and "Insurer B record" (similar name spelling, same address, home policy). Centre, a funnel with 3 labelled stages: "Match", "Merge", "Check consent". Right, one gold "Golden record" card showing both policies under one customer. A small padlock icon with the note "Respect data privacy and consent".
Takeaway line: "Match carefully. Merge only what you may merge."
```

**Short voiceover:** "A family has a motor policy with one insurer and a home policy with the other. After a merger, they should be one customer, not two strangers. A single customer view does three things. Match the records, even when names and addresses are spelled differently. Merge them into one golden record. And check consent: privacy rules limit how customer data can be combined and used. Match carefully, and merge only what you may merge."

**LinkedIn caption:** "A bad match merges two different people; a missed match leaves one person as two customers. Both are data-quality failures with real customer impact. Check privacy and consent before combining data. #CustomerData #DataQuality #Insurance"

---

## C4. Migration Waves at Renewal

**Analogy:** Moving house in stages rather than overnight. Insurers can move policies when they come up for renewal, so the customer sees one natural change.

```
Title: "Migrate in Waves"
Subtitle: "Big bang vs phased policy migration"
Visual: split screen. Left "Big bang": one large block arrow moving "All policies" at once, with a warning triangle and the note "Simple plan, high risk". Right "Phased waves": a calendar strip with 4 small arrows labelled "Wave 1: pilot book", "Wave 2: simple products", "Wave 3: complex products", "Wave 4: remaining", with a renewal-date icon and the note "Move at renewal where possible".
Takeaway line: "Smaller waves catch problems while they're still small."
```

**Short voiceover:** "You can migrate every policy in one big bang, or in waves. Big bang is a simple plan with high risk: if something's wrong, everyone is affected. Waves start with a small pilot book, then simple products, then complex ones. Where possible, move policies at renewal, so the customer sees one natural change. Smaller waves catch problems while they're still small."

**LinkedIn caption:** "For policy migrations, waves aligned to renewal dates reduce customer impact and give you real feedback before the heavy lifting. #Migration #Insurance #PostMergerIntegration"

---

## C5. Data Mapping: Speaking the Same Language

**Analogy:** Two filing rooms with different labels. One calls it "sum insured", the other "coverage limit". Before you move the files, you need a dictionary.

```
Title: "Map the Data Before You Move It"
Subtitle: "Data mapping between two insurers' systems"
Visual: a two-column mapping table. Left column "Insurer A field", right column "Insurer B field", with arrows. Sample rows: "Sum insured" <-> "Coverage limit"; "Policy status: Active" <-> "Status code 01"; "Inception date" <-> "Start date". A small red flag next to one row labelled "Different meaning!". Below, four steps as chips: "Map", "Cleanse", "Load", "Reconcile".
Takeaway line: "Same word, different meaning: define it first."
```

**Short voiceover:** "Two insurers, two filing rooms, two sets of labels. One says 'sum insured', the other says 'coverage limit'. One says 'active', the other uses status code zero one. Before you migrate, build a data dictionary. Map each field, cleanse the data, load it, then reconcile. And watch for the same word with different meanings. Define it first."

**LinkedIn caption:** "Most data migration defects are mapping defects: fields that look the same but mean something different. A reviewed data dictionary prevents expensive rework. #DataMigration #DataMapping #Insurance"

---

## C6. Identity and Access Consolidation

**Analogy:** A staff badge swap. After the merger, employees need one badge that opens the right doors, and leavers' badges must stop working.

```
Title: "One Badge, Right Doors"
Subtitle: "Identity and access after a merger"
Visual: left, two directories labelled "Directory A" and "Directory B". A sequence in the centre of three steps: "Day 1: trust between directories (users can reach what they need)", "Day 2: single sign-on", "Target: one directory, roles reviewed". Right, a badge icon with a green tick, and a second badge with a red cross labelled "Leavers removed". A footer chip: "Joiners, movers, leavers".
Takeaway line: "Connect on Day 1. Clean up after."
```

**Short voiceover:** "After a merger, staff need access to systems on both sides. Think of a badge swap. On Day 1, connect the two directories so people can reach what they need. Then single sign-on. Then, over time, one directory with reviewed roles. And always handle joiners, movers and leavers, so old badges stop working. Connect on Day 1, clean up after."

**LinkedIn caption:** "Identity is usually the first Day-1 dependency and the last thing fully cleaned up. Plan both. Access reviews are where the real risk hides. #IdentityManagement #SSO #PostMergerIntegration"

---

## C7. Key-Person and Knowledge Risk

**Analogy:** The only person who knows how the old policy system works. If they leave, nobody can fix it.

```
Title: "Who Knows How It Works?"
Subtitle: "Key-person risk in an integration"
Visual: a system box labelled "Legacy policy system" with a single person icon highlighted in gold connected to it, and a dotted "?" connection to everyone else. Right side, four mitigation cards: "Identify key people early", "Retention arrangements", "Document + record walkthroughs", "Pair a successor". 
Takeaway line: "Find your single points of knowledge before they leave."
```

**Short voiceover:** "Every legacy system has someone who knows how it really works. After a merger, those are the people most likely to leave. Identify them early. Agree retention arrangements. Record walkthroughs and document the quirks. Pair each one with a successor. Find your single points of knowledge before they walk out the door."

**LinkedIn caption:** "In integrations, the scarcest asset is often knowledge, not software. List your key people before announcing the system roadmap. #KeyPersonRisk #ChangeManagement #PostMergerIntegration"

---

## C8. Hypercare and Benefits Tracking

**Analogy:** A recovery ward after surgery. The operation worked, but the patient is monitored closely until stable.

```
Title: "After Go-Live: Hypercare"
Subtitle: "Stabilise, measure, then hand over"
Visual: a dashboard-style panel with 4 small gauges labelled "Claims turnaround", "Call volumes", "Complaints", "Defects open", each with a green/amber/red indicator. Above it a banner "Hypercare: extra support for a defined period". Below, a three-step strip: "Triage defects daily", "Track KPIs against baseline", "Exit when stable". A heart-monitor icon in the corner.
Takeaway line: "Go-live is the start of proving it worked."
```

**Short voiceover:** "Go-live isn't the finish line. It's like a recovery ward after surgery: the operation worked, but you monitor closely until stable. That's hypercare: extra support for a defined period. Triage defects daily. Track business measures against the baseline: claims turnaround, call volumes, complaints, open defects. Exit hypercare only when the numbers are stable. Go-live is the start of proving it worked."

**LinkedIn caption:** "Set the baseline before the migration, not after. Without 'before' numbers, you can't prove the integration helped or hurt. #Hypercare #Benefits #Insurance"

---

## C9. Safe Decommissioning and Archiving

**Analogy:** Closing a filing room. Move what you must keep, check nothing is left behind, lock the door and keep a record that you did.

```
Title: "Switch It Off Safely"
Subtitle: "Decommissioning a legacy insurer system"
Visual: a vertical checklist with 6 steps and icons: "1. Confirm no live users or interfaces", "2. Migrate or archive required records", "3. Verify archive is readable", "4. Remove access + licences", "5. Switch off + securely wipe", "6. Record sign-off". A small padlock-on-door icon (closing a filing room).
Footer chip: "Check record-retention rules for your jurisdiction".
Takeaway line: "Prove it's safe to turn off. Then turn it off."
```

**Short voiceover:** "Closing a filing room? You move what you must keep, check nothing is left behind, lock the door, and keep a record that you did. Decommissioning a legacy system is the same. Confirm no live users or interfaces. Archive the records you must keep and test that you can read them. Remove access and licences. Switch off and wipe securely. Record the sign-off. Prove it's safe to turn off, then turn it off."

**LinkedIn caption:** "The savings from an integration only arrive when old systems are actually switched off. A decommission checklist turns that from a hope into a plan. Check retention rules first. #Decommissioning #Archiving #PostMergerIntegration"

---

## C10. The RAID Log

**Analogy:** An insurer's risk register, for the integration programme itself. What could go wrong, what are we assuming, what has already gone wrong, and what are we waiting on.

```
Title: "RAID: Run the Programme Honestly"
Subtitle: "Risks, Assumptions, Issues, Dependencies"
Visual: a 2x2 grid with four coloured cards:
"R: Risks": might happen, needs mitigation
"A: Assumptions": believed true, needs checking
"I: Issues": already happening, needs action
"D: Dependencies": waiting on others, needs dates
Each card shows two fields: "Owner" and "Due date". A small register-book icon in the centre.
Takeaway line: "Every item gets an owner and a date."
```

**Short voiceover:** "Insurers live by risk registers. An integration programme needs one too, called a RAID log. R for risks: might happen. A for assumptions: believed true, so check them. I for issues: already happening, so act. D for dependencies: waiting on someone else, so chase with dates. Every item gets an owner and a date."

**LinkedIn caption:** "Most integration surprises were sitting in someone's head as an unchecked assumption. Write assumptions down and test them early. #RAID #ProgramManagement #PostMergerIntegration"

---

## Suggested order for the post-merger series

1. C1 (command centre) and C2 (first 100 days): the frame for everything else.
2. C4 (migration waves) and C5 (data mapping): the heart of technology integration.
3. C3 (single customer view) and C6 (identity): the two areas customers and staff notice.
4. C8 (hypercare), C9 (decommissioning): proving the work and banking the savings.
5. C7 (key-person risk) and C10 (RAID): the human and governance sides.

## Honesty notes

- The Outsized JD does not require M&A. Do not present yourself as an M&A lead.
- **Insurance is a studied domain for you, not a lived one.** Your CV shows HSBC-AXA merger workshops (vendor-side) and an Insurance Charges Predictor ML app. Present these as teaching ("here is how it works"), not as "what I delivered at an insurer".
- Where a post mentions regulators, record retention or privacy consent, keep the wording general. Rules differ by jurisdiction and change; check the regulator's current guidance before stating specifics.
- The sample numbers and sample field names in the prompts are illustrative. Do not present them as real data.
