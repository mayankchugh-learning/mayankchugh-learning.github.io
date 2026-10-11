# Interview Preparation Guide: Outsized Senior Consultant (v3)

**Senior Consultant – Technology & Architecture Facilitation (Outsized, 3-month contract, Hong Kong)**

Candidate: Mayank Chugh  ·  Version 3 (tailored to the Outsized JD, fact-checked against your CV)  ·  Prepared 10 Oct 2026

> **Read this first: what changed and what you must confirm**
>
> **The original guide made claims your CV does not support.** An interviewer who has your CV will test them. Section 9 lists each one with a fix. The biggest: Deloitte, PRINCE2, "95%+ on-time delivery", MuleSoft / SQS / SNS / Direct Connect / Transit Gateway, and "established and led Design Authority forums".
>
> **This version only claims what the CV shows.** Where a story needs detail I do not have, it is marked **[FILL]**. Add the real number or fact, or drop the point.
>
> **JD checked (Outsized listing 4779).** It does **not** mention M&A or PMI. It is architecture facilitation and governance on a regulated, consumer-facing platform. I removed the M&A module and replaced it with JD-specific modules (Section 6). If your contact described this as an M&A role, confirm with Aina; the listing says otherwise.
>
> **Open blocker from your pipeline: your day rate.** Decide your floor and target before the first call (see Section 8).

## 1. What this role is really testing

From the JD: 3 months, immediate start, Hong Kong, predominantly on-site (hybrid for the 3 months), a global consulting firm's large technology transformation programme. The listing is inconsistent on experience: the tags say Mid (6-10) and Senior (11-15) but the body says about 4-8 years. Rate is not listed. Prepare one story for each need below.

| **JD need** | **What they will probe** | **Your proof (from CV)** |
|---|---|---|
| **Architecture approvals (essential)** | Prepare submissions, track them through forums, close conditions and actions | HSBC "Quantum": formal approval from HSBC Software Architecture Approval Board |
| **Facilitation on a live programme (essential)** | Workshops between architects, engineers and business; capture decisions; drive items to closure | HSBC Robo Advisory: stakeholder workshops, full SDD, delivered through UAT; praised by HSBC Platform Architect |
| **Integration, cloud, CI/CD (essential)** | APIs, event-driven, middleware; hosting and environment implications for effort and cost | HSBC cloud API layer; Java/Oracle to AWS RDS; WebLogic to JBoss; Ant to Maven (50% faster builds) |
| **Sizing, vendors, book of work** | Effort across vendor delivery, customisation and in-house build; assess vendor technical responses | 55+ RFQ/RFP proposals (Coforge); pre-sales cloud bids (Capgemini); ROI business cases (TCS) |
| **Security, compliance, IT risk** | Support risk assessments during design; regulated consumer platforms | HSBC (regulated bank) delivery; CHANEL SLA/RPO/RTO design. Thin on CV: prepare Module 6A |
| **Executive communication, PowerPoint and Excel (essential)** | Structure material for non-technical senior audiences | SDD authorship; ROI business cases. Excel and PowerPoint are not on your CV: see Module 6D |

## 2. Your pitches

### 30-second pitch

"I'm a TOGAF 9.2-certified enterprise and cloud architect with 20 years of enterprise delivery, mostly in Hong Kong, across aviation and banking. At HSBC I designed the API and cloud architecture for two programmes and took one through the Software Architecture Approval Board. At Cathay Pacific I spent 13 years across cargo systems, modernisation and cloud. This role is about getting architecture decisions agreed and approved across many parties. I'm a Hong Kong permanent resident, available now, so I can start facilitating from week one."

### 2-minute pitch

"My career sits where architecture, integration delivery and stakeholder alignment meet.

At Coforge I worked 13 years on the Cathay Pacific account, plus British Airways, M&S and Lehman Brothers. I owned full-lifecycle delivery on multi-million-dollar accounts and wrote more than 55 technical RFQ/RFP responses. That taught me to turn vague business asks into designs that can be sized and defended.

At Capgemini I worked on HSBC and CHANEL. For HSBC I designed the API and cloud layer for a robo-advisory app and for the Global Money "Quantum" integration layer, and Quantum went through HSBC's Software Architecture Approval Board. I also acted as migration SME for an Oracle workload moving to AWS. For CHANEL I covered integration strategy and SLA/RPO/RTO design on Azure.

At TCS I delivered a computer-vision system that cut manual processing time by 60%, and wrote the business cases and ROI analysis that executives used to decide on AI investment.

For this contract I would bring the same approach to your programme: pre-reviewed submissions, a clear decision log, and fast resolution of trade-offs between architects and vendors. I know the Hong Kong enterprise environment, and I can start immediately."

> **Delivery notes**
>
> Time it. The 2-minute version should run 110–125 seconds. Do not memorise it word for word; memorise the five beats: Cathay, HSBC, CHANEL, TCS, "what I do for you".
>
> Say "20 years" or "20+" consistently. Pick one Cathay figure (the CV says 13 years) and use it everywhere, including LinkedIn.

## 3. Requirement-to-evidence map

Rate yourself honestly before the interview. Lead with strong areas and handle moderate ones with a bridge statement.

| **JD requirement** | **Evidence on your CV** | **Strength** | **Prep action** |
|---|---|---|---|
| Design authority / EA governance forums (essential) | HSBC Software Architecture Approval Board approval (Quantum); SDD authored in Confluence | Strong | Write STAR 1 |
| Integration architecture: APIs, event-driven, middleware (essential) | RESTful API design; HSBC cloud API layer; Qlik Replicate migration. Event-driven and middleware not named on CV | Moderate | Claim only what you built (Q4) |
| Cloud, environments, CI/CD (essential) | AZ-400, AZ-104, AWS SA, Terraform cert; AWS migration; Ant to Maven; RPO/RTO design (CHANEL) | Strong | Prepare Q5 and STAR 3, 5 |
| Facilitating architects, engineers, business (essential) | HSBC Platform Architect recognition; workshops | Strong | Write STAR 2 |
| Documentation for senior non-technical audiences; PowerPoint and Excel (essential) | SDD, ROI business cases. Tools not named on CV | Moderate | Module 6D; add to CV |
| Effort sizing; TCO modelling (nice to have) | 55+ proposals; ROI analysis at TCS | Moderate | Module 6B |
| Vendor selection and technical due diligence (nice to have) | Pre-sales bids; HSBC-AXA workshops proposing vendor solutions. Evaluating vendors not on CV | Moderate | Module 6E |
| Security, privacy, IT risk (responsibility) | No explicit CV line; regulated-bank delivery | Gap | Module 6A |
| Payments, wallets, ledgers (nice to have) | HSBC Global Money "Quantum" integration layer; Wealth & Advisory app | Moderate | Module 6C; do not claim ledger work |
| Hong Kong delivery (nice to have) | 13+ years Cathay; HSBC, CHANEL | Strong | Lead with it |
| Cantonese or Mandarin (nice to have) | None | Gap | Q-G1 |
| Chairing a board | Not on CV: you submitted to one | Gap | Q-G5 |

## 4. Five STAR stories (CV-verified)

Each story below contains only facts from your CV. **[FILL]** marks detail only you know. A story with no numbers and no named decision sounds rehearsed, so add them.

### STAR 1 – HSBC "Quantum": winning formal architecture approval

**Use for:** Governance, Design Authority, "how do you get a design approved?"

| **Situation** | HSBC's Global Money initiative needed an end-to-end cloud API integration layer, called "Quantum", and it needed formal approval before build. |
|---|---|
| **Task** | Architect the integration layer and secure sign-off from HSBC's Software Architecture Approval Board. |
| **Action** | Designed the cloud API integration architecture. **[FILL: how you pre-reviewed with the Platform Architect; which views you submitted (security, resilience, data); which objections or conditions the board raised and how you closed them]** |
| **Result** | Formal architecture approval granted by the Software Architecture Approval Board. **[FILL: time taken, number of conditions, anything the approval unblocked]** |

### STAR 2 – HSBC Robo Digital Advisory: facilitation to UAT

**Use for:** Stakeholder alignment, workshops, documentation quality

| **Situation** | HSBC was building a Robo Digital Advisory mobile app (iOS/Android) in the Wealth & Advisory domain, a domain new to you. |
|---|---|
| **Task** | Define the API and cloud solution architecture and get requirements agreed across stakeholders. |
| **Action** | Ran stakeholder workshops to gather requirements. Authored the full SDD in Confluence: architecture, flowcharts, sequence diagrams. **[FILL: who attended, one disagreement you settled]** |
| **Result** | Delivered through UAT. HSBC's Platform Architect recognised your ownership, proactive stakeholder engagement and fast domain mastery. **[FILL: quote or detail]** |

### STAR 3 – Cathay Pacific / Coforge: legacy modernisation and bids

**Use for:** Hosting, DevOps, sizing, vendor/book-of-work questions

| **Situation** | Cathay Cargo Terminal platforms ran on Ant builds and WebLogic and needed modernisation and better cloud reliability. **[FILL: the business driver]** |
|---|---|
| **Task** | Modernise the platform and improve reliability without disrupting live cargo operations. |
| **Action** | Moved builds from Ant to Maven, upgraded JDK, migrated WebLogic to JBoss, improved AWS reliability. **[FILL: cut-over approach, rollback plan, how you handled operations stakeholders]** |
| **Result** | Builds 50% faster; AWS cloud reliability improved 30%. Separately, over 2004–2021 you wrote 55+ RFQ/RFP technical proposals. **[FILL: win rate or largest bid size, if known]** |

### STAR 4 – TCS: business case that drove an AI investment decision

**Use for:** Executive framing, trade-offs, ROI, "how do you talk to sponsors?"

| **Situation** | Cathay Pacific was assessing AI use cases for cargo and HKIA operations: cargo dimension capture, CCTV object detection and an autonomous electric tractor POC. |
|---|---|
| **Task** | Deliver working AI and give executives a business case they could decide on. |
| **Action** | Delivered a computer-vision system; designed the tractor-guidance POC; produced business cases and ROI analysis. **[FILL: the cost / benefit figures and the options you compared]** |
| **Result** | 60% reduction in manual processing time. Business cases used for AI investment decisions. **[FILL: which decision was made]** |

### STAR 5 – HSBC: Java/Oracle lift-and-shift to AWS

**Use for:** Cloud migration, DR, replatforming, mentoring

| **Situation** | A monolithic Java/Oracle application at HSBC needed to move to AWS. |
|---|---|
| **Task** | Act as migration SME: plan the lift-and-shift and replatform the database. |
| **Action** | Replatformed the database onto Amazon RDS for Oracle and mentored the team through daily stand-ups. **[FILL: cut-over window, DR/RPO decisions, biggest risk you caught]** |
| **Result** | Application migrated. **[FILL: downtime, cost or performance outcome]** |

## 5. Likely technical and behavioural questions

### A. Governance and Design Authority

#### Q1. How do you prepare for and facilitate an architecture governance forum?

- **Pre-read discipline:** circulate the architecture vision, HLD and API contracts early; hold a pre-review with the board's lead architect so nothing surprises the room.
- **Standard review lens:** business fit, security, resilience, scalability, lifecycle cost (TOGAF-aligned).
- **Decision and action log:** record every condition with an owner and a date. Track conditional approvals to closure without blocking delivery.
- **Proof:** "On HSBC Quantum I took the design through the Software Architecture Approval Board and got formal approval." Then give your STAR 1 detail.

**Avoid:** Saying you "established" or "chaired" forums. The CV shows you submitted to one. Say that, then explain the facilitation approach you would bring.

#### Q2. What makes a board say yes, and what makes it say no?

- Yes: clear problem statement, options considered with trade-offs, alignment to enterprise standards, named risks with mitigations.
- No: surprises, missing security or operational views, an unclear owner, or a design that quietly depends on another team's undelivered work.
- Add one rejection or condition you faced and what you changed **[FILL]**.
### B. Stakeholder conflict and trade-offs

#### Q3. Architects and business sponsors disagree on the target design. What do you do?

- Separate the disagreement into facts (cost, effort, risk, timeline) and preferences. Put facts in a one-page option comparison.
- Score options on agreed criteria: time to market, technical debt, compliance risk, lock-in, run cost. Let the sponsor weight the criteria; let the architects score the options.
- Escalate only with a recommendation and the cost of delay.
- Proof: STAR 4 (ROI business cases for AI investment decisions) and STAR 2 (workshops).

**Avoid:** Claiming a specific build-versus-buy win unless you can name it. Use the framework, and cite STAR 4 for evidence.

### C. Integration, cloud, DevOps

#### Q4. How do you define integration boundaries between systems?

- Name the system of record for each data entity; define contracts (payload schema, versioning, rate limits, error and retry behaviour); decide sync versus async per interaction; define fallback behaviour when a dependency fails.
- Proof from CV: HSBC cloud API integration layer; RESTful API design across airline, cargo and retail platforms; Qlik Replicate migration (D365 on-prem to Azure DB).
- **Before the interview:** decide which of SQS/SNS, MuleSoft, Service Bus, Direct Connect, Transit Gateway you have genuinely built. Cite only those, with the project name.

**Avoid:** Listing technologies that are not on your CV. If you cannot answer a follow-up on "how did you configure it?", it hurts more than leaving it out.

#### Q5. How do you evaluate a hosting, environment and CI/CD strategy for a new platform?

- Start from non-functional requirements: availability target, RPO/RTO, data residency, security zoning, cost ceiling.
- Then environments (dev, test, UAT, prod parity), pipeline gates (build, test, security scan, approval), and infrastructure as code for repeatability.
- Proof: AZ-400 and Terraform Associate certifications; Ant to Maven build modernisation; CHANEL SLA/RPO/RTO DevOps design on Azure.

**Avoid:** Quoting "95%+ on-time delivery". It is not on your CV. Use "50% faster builds" and "30% reliability improvement", which are.

### D. Vendors, sizing and book of work

#### Q6. How do you shape a book of work and judge vendor proposals?

- Break the roadmap into epics by architectural dependency first, business urgency second, capacity third.
- For vendor responses: check conformance to enterprise standards, delivery feasibility, assumptions, exit and lock-in, and whether the SLA is measurable.
- Honest framing: "I wrote 55+ technical responses, so I know what a strong one looks like and where weak ones hide risk."

**Avoid:** Saying you "evaluated" 55+ vendor responses. The CV says you authored them.

### E. Behavioural

#### Q7. Tell me about a time a delivery went off track.

- Pick a real one **[FILL]**. Structure: what signalled the problem, what you changed, what you would do earlier next time. A short, honest answer beats a polished one.
#### Q8. Why a 3-month contract, and why now?

- Truthful, positive: you want hands-on architecture and governance work, you can start immediately, and a defined scope suits you.
- Do not mention the Coforge relocation issue unless asked. If asked: the role required relocating to India, which you were unable to do. Keep it to one sentence.
## 6. JD-specific modules

These cover the JD items where your CV is thinner. Each is a way of thinking you can discuss credibly, with the CV proof stated honestly.

### 6A. Security, compliance and IT risk during design

- **Approach:** classify the data first (personal, financial, confidential). Map it to controls: identity and access, encryption in transit and at rest, logging and audit, network zoning. Record each residual risk in the risk register with an owner. Get the security architect to review before the board does.
- **Hong Kong angle:** personal data handling under the Personal Data (Privacy) Ordinance; for banking clients, HKMA expectations on outsourcing and cloud. Say you would confirm the client's applicable regulations rather than assume them.
- **Proof:** delivery inside HSBC (regulated bank) and the architecture board approval; CHANEL SLA/RPO/RTO design. If CHANEL SAML/SSO was genuinely hands-on, use it here **[verify]**.
### 6B. Effort sizing and TCO across delivery models

The JD wants sizing across vendor delivery, customisation and in-house build. Use this frame:

| **Driver** | **Vendor delivery** | **Customisation** | **In-house build** |
|---|---|---|---|
| Upfront cost | Licence/fees; fixed or T&M | Licence plus change effort | Team cost; ramp-up |
| Run cost | Support and upgrade fees | Upgrade regression risk | Maintenance team |
| Time to market | Fastest if fit is good | Medium | Slowest |
| Key risk | Lock-in; roadmap control | Upgrade debt | Capability and key-person risk |

- State assumptions openly, give a range not a point, and name what would move it.
- **Proof:** 55+ technical proposals and TCS ROI business cases. Do not claim a formal TCO model unless you built one **[FILL]**.
### 6C. Payments and wallet platforms

- **Concepts to be fluent in:** ledger as system of record; idempotent payment requests; reconciliation; settlement timing; fraud, KYC and AML checks at the edges; audit trails.
- **Proof:** you architected the cloud API integration layer for HSBC's Global Money initiative and the API layer for a Wealth & Advisory app. Say that, and be explicit that you did not build a ledger **[verify]**.
### 6D. Communicating to senior non-technical audiences; Excel and PowerPoint

- **One-page decision brief:** the decision needed, options (max 3), recommendation, cost and risk of each, what you need from the reader, by when.
- **Gap to close:** the JD lists strong PowerPoint and Excel as essential and neither is on your CV. Add them to Core Skills. Bring one sample (a board submission summary or an option-comparison sheet), with client details removed.
- Be ready for "show me how you would size this in Excel": inputs, assumptions tab, low/base/high scenarios.
### 6E. Vendor selection and technical due diligence

- Checklist: fit to requirements, architecture conformance, security and data residency, integration approach, delivery plan and team, references, commercial terms and exit.
- Score with agreed weights set before vendors are seen. Record the rationale for the decision log.
- **Proof:** you wrote 55+ bids and proposed vendor solutions in HSBC-AXA workshops, so you know how vendors present. Do not say you ran vendor evaluations unless you did **[verify]**.

> **If the interviewer raises M&A anyway**
>
> The JD does not mention it. If it comes up, use the CV wording only: "I contributed to HSBC-AXA merger workshops, proposing vendor solutions."
>
> Do not mention the Allianz / HSBC Singapore deal. It is a separate, unverified lead through a different contact.

## 7. Hard questions and honest answers

#### G1. "You have no Cantonese or Mandarin." (The JD lists them as nice to have, not essential.)

- Acknowledge it plainly, once. Then: your Hong Kong delivery has been in English with HSBC, CHANEL and Cathay Pacific, and architecture artefacts (diagrams, API contracts, decision logs) work across languages.
- Offer a practical mitigation: written pre-reads and recorded decisions so nothing depends on a verbal exchange. Ask whether any forum runs in Cantonese so you can plan for it.
#### G2. "The JD body says about 4-8 years. You have 20. Are you overqualified?" (The listing also tags Senior, 11-15 years, so you can say the brief itself spans both.)

- Answer the real worry: cost, flight risk, and willingness to do hands-on work.
- "For a three-month contract, experience means no ramp-up. I want hands-on facilitation: writing submissions, running workshops, working with domain architects. I'm not looking to delegate."
- Do not argue about the rate here. Move to scope.
#### G3. "Your CV says AI Engineer and Forward Deployed Engineer. This is an architecture role."

- The CV headline works against you for this role. Fix it (see Section 9). In the room: "AI is my recent focus; architecture and governance is 20 years of my career, and the HSBC and Cathay work on my CV is that."
#### G4. "You've been out of a full-time role since January. What have you been doing?"

- Brief and concrete: AI projects and certifications (Claude Code in Action, Microsoft Fabric + Azure OpenAI), public work (26 Hugging Face apps, 105 GitHub repos, 75+ videos), and active search for the right architecture role.
- Do not over-explain. Return to what you offer this client.
#### G5. "Have you chaired a Design Authority?"

- "I've been on the submitting side at HSBC's Software Architecture Approval Board, so I know what boards need and what wastes their time. As facilitator I would run the pre-reads, the agenda and the decision log. I'd be glad to learn how your forum is chaired."
## 8. Questions to ask, and the rate conversation

### Questions for the interviewer

- Which architecture decisions or approvals must land in the first 30–60 days?
- How is the Design Authority structured today, and where is sign-off slowest?
- Which vendors and legacy-system owners are involved in the two workstreams, and how aligned are they on integration patterns?
- Who are the sponsors I would report to, and who has final say when architects disagree?
- What is the current state of the target architecture: drafted, agreed or still open?
- What does a successful end to this three-month contract look like for the client?
- The JD mentions payments and wallet platforms as a plus. Is this a payments or consumer-account programme, and which regulators apply?
- The role is predominantly on-site. What is the expected pattern, and where is the team based?
- What is the next step, and when will you decide?
### Day-rate conversation

- **Decide before the call:** your minimum day rate, your target day rate, and what you will trade (start date, duration, remote days). I have deliberately not put a number here; it is your decision.
- Outsized sits between you and the client, so ask for the budgeted range first: "What range has the client approved for this role?"
- Contract rates are not comparable to your permanent salary target: contract has no leave, benefits or gap between engagements. Price for that.
- Never say "I'm flexible". Say your target, then your conditions.
## 9. Claim audit: original guide versus your CV

Every row below is something the original guide said that the CV does not support, or supports only partly. Remove it, soften it, or add real evidence to your CV before the interview.

| **Original claim** | **CV evidence** | **Action** | **Fix** |
|---|---|---|---|
| Led work at "Deloitte"; "modeled for Deloitte/CHANEL" | Deloitte is not on the CV | Remove | Delete unless you can name a real engagement |
| "PRINCE2" certification | CV lists CSM and DevOps Foundation, not PRINCE2 | Remove | Add to CV only if held |
| "95%+ on-time delivery" | No such metric on CV | Remove | Use 50% faster builds, 30% reliability |
| "Established and led formal Design Authority forums" | CV: architecture approved by HSBC board | Reword | Say "submitted to and navigated" and "would facilitate" |
| "Authored and evaluated 55+ RFP responses" | CV: 55+ proposals written | Reword | Drop "evaluated" unless true |
| MuleSoft, AWS SQS/SNS, Direct Connect, Transit Gateway, WAF | None named on CV | Verify | Claim only what you built; add to CV if so |
| Docker fallback at Cathay Terminal | Docker listed as a skill only | Verify | Add project detail or drop |
| CHANEL SAML/SSO integration | Not on CV. You have described it previously as hands-on | Verify | If genuine, add to the CHANEL entry |
| "Recent" postgraduate AI/ML training | PG Diploma AI & ML is 2021 | Reword | Say "since 2021" |
| Sized "multi-year books of work"; custom-vs-buy mediation | Not on CV | Verify | Use only with a named example |
| "M&A integration" experience | CV: contributed to HSBC–AXA merger workshops | Reword | Use the CV wording |

### CV changes that would help this application

- Change the headline from "AI Engineer | Enterprise Architect | LLM Integration" to lead with **Enterprise Architect | Architecture Governance | TOGAF 9.2**. Put AI second.
- Rewrite the summary opening: the current one begins "Forward Deployed Engineer", which does not match this role.
- Add the governance proof near the top: "Architecture approved by HSBC Software Architecture Approval Board".
- Align the Cathay figure (13 years on the CV) with LinkedIn and anything else you have published.
## 10. Final checklist

- [ ] Fill every **[FILL]** in Section 4, or drop the point.
- [ ] Practise the 2-minute pitch aloud twice; record it once.
- [ ] Decide day-rate floor and target.
- [ ] Remove or verify every row marked Remove or Verify in Section 9.
- [ ] Prepare one whiteboard sketch: an API integration with gateway, identity, async messaging and DR.
- [ ] Re-read the JD: echo "close out conditions and actions", "integration boundaries", and "book of work".
- [ ] Add Excel and PowerPoint to the CV; prepare one sample sizing sheet or board summary.
