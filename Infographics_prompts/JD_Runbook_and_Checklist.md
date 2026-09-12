# JD Intake-to-Application Runbook & Checklist

The step-by-step process for handling any job description Mayank shares — from first paste through to tracker update. This documents what's already been happening implicitly across every JD checked this session, made explicit and repeatable.

---

## PART 1 — THE RUNBOOK

### Step 1: Receive & Log the JD
- Capture the JD text, source (LinkedIn post, recruiter email, WhatsApp forward, screenshot), company name, role title, and how it arrived (cold outreach, warm referral, direct application, platform match).
- Note the channel it came through — this determines the response format later (email vs. WhatsApp vs. platform reply).

### Step 2: Check for Duplicates & Known Dead Ends
- Search memory/past chats before treating anything as new. Specifically check against:
  - Cognizant Integration/Technology Architect (MACH/MASA pattern) — interviewed mid-June 2026, rejected, do not resubmit.
  - Infosys HK narrow reqs (ServiceNow/EUC/VDI, tri-lingual ML architect, Oracle utilities, junior PMO).
  - Any prior "closed — no response" or "rejected" entries in the Career OS tracker.
- If it's a duplicate or known dead end, stop here. Draft a short, honest message to whoever sent it (recruiter goodwill matters more than silence) and skip to Step 13.

### Step 3: Screen for Hard Blockers
Check in this exact order — any one of these ends the assessment immediately, no scoring needed:
1. Mandatory Cantonese and/or Mandarin (distinguish "required" from "a plus" — only the former blocks)
2. Required relocation outside Hong Kong
3. Pure presales (not roles with *some* presales alongside delivery/architecture)
4. US-only work authorization requirement
- If blocked: state the blocker plainly, do not build a fit table, move to Step 13 for the response.

### Step 4: Build the Fit Assessment
- Requirement-by-requirement table: ✅ / ⚠️ partial / ❌, grounded only in verified facts (see Integrity Rules below — no inventing evidence).
- Calculate a percentage fit estimate.
- Flag any specific named tool/framework the JD wants that Mayank has no evidence of using (e.g., LangGraph, MACH/MASA, Kubernetes, Snowflake) — these are honesty risks in a CV, not gaps to write around.

### Step 5: Decide — Proceed or Hold
- **≥60% and no hard blockers** → proceed to Step 6.
- **50–59%** → borderline judgment call. Present the assessment, name the specific gap driving the score, and let Mayank decide given runway pressure — don't auto-build, don't auto-hold.
- **<50%** → hold. Explain why, don't build materials unless Mayank explicitly overrides.

### Step 6: Build the Tailored CV
- Role headers show only the employer (Coforge, TCS, Capgemini, Deloitte) — never `Client: X` in the header line.
- Client context goes only inside bullet text ("engaged on the [client] account...").
- Qlik Replicate D365→Azure SQL = CHANEL, never HSBC.
- 12 formal certifications = "certified in." Udemy completions = "completed training in" — never blurred.
- No fabricated Cathay Pacific RAG metrics, no LangGraph/AutoGen claims (real stack is CrewAI), no enterprise-production-scale claims for self-directed portfolio work.
- Build via docx skill → LibreOffice PDF conversion → pdftoppm visual render → review before presenting.

### Step 7: Build the Cover Letter (if the role/channel calls for one)
- Lead with relevant real experience, not a generic template.
- Name honest gaps directly and plainly — don't bury them, don't over-apologize for them.
- Match tone to channel: formal for cold applications, warmer/more direct for warm referrals.

### Step 8: Draft the Outreach/Response
- Match the format to the channel it arrived through: `email` for recruiter emails, `textMessage`/`other` for WhatsApp, platform-native for job-board applications.
- For warm-lead recruiters (Ravi, Charles, Micky, Dave Lau, etc.): keep it relationship-warm even when declining.
- Include practical logistics questions if the role is contract-based: notice period, start availability, daily/monthly rate — flag rate as something only Mayank sets, never invent a number.

### Step 9: Visual QC Before Presenting
- Every generated docx gets converted to PDF and rendered to image for a visual check — catch layout breaks, tab-stop overflows, awkward page breaks — before it reaches Mayank.

### Step 10: Present Files
- Use `present_files` for every deliverable. Never leave a built file unpresented.

### Step 11: Get Explicit Confirmation Before Any Send
- CVs, cover letters, and draft messages are drafts until Mayank says send. Never submit an application or send an email autonomously.

### Step 12: Build Interview Prep (once a screening call or interview is confirmed)
- Tailor specifically to the JD's actual language and the company's context — not a generic EA interview doc.
- Include: positioning statement, JD-specific technical Q&A, honest-gaps section, questions to ask them.

### Step 13: Update the Career OS Tracker
- Log the JD, fit %, decision (proceed/hold/blocked), CV/cover letter status, and next action into `Career_OS_v6_4.xlsx` (`01_Job_Pipeline` and `02_Recruiter_CRM` sheets).
- Run the recalc script after saving.

### Step 14: Set a Follow-Up Trigger
- Note when to follow up if no response (typically 1–2 weeks for warm leads, longer for cold applications) — don't let warm leads go silent without a nudge.

### Step 15: Close the Loop
- If the outcome becomes known (rejected, no response after follow-up, interview scheduled, offer), update the tracker and, if it's a recurring/resurfacing req pattern (like the Cognizant MACH/MASA case), add a standing memory note so it's correctly recognized if it resurfaces later.

---

## PART 2 — PER-JD TASK CHECKLIST

Copy this block for each new JD and tick through it.

```
JD: _______________________  Company: _______________________  Source: _______________________

☐ 1. JD logged (company, role, source, date received)
☐ 2. Checked against known dead-ends/duplicates in memory
☐ 3. Hard blockers screened (language / relocation / presales / work auth)
     → Blocked? ☐ Yes (stop, go to step 10)   ☐ No (continue)
☐ 4. Fit table built — requirement by requirement
☐ 5. Fit % calculated: _____%
☐ 6. Decision: ☐ Proceed (≥60%)   ☐ Borderline — Mayank's call (50-59%)   ☐ Hold (<50%)
☐ 7. CV built (client-naming correct, CHANEL/HSBC correct, cert language correct)
☐ 8. CV visually QC'd (PDF render checked)
☐ 9. Cover letter built (if applicable) — honest gaps included
☐ 10. Response/outreach message drafted (correct channel format)
☐ 11. Files presented to Mayank
☐ 12. Mayank reviewed and approved
☐ 13. Confirmed sent
☐ 14. Interview prep built (once screening/interview confirmed)
☐ 15. Contract logistics confirmed if applicable: notice period ___ | availability ___ | rate ___
☐ 16. Career OS tracker updated
☐ 17. Follow-up date set: ___________
☐ 18. Outcome logged once known: ☐ Interview  ☐ Rejected  ☐ No response  ☐ Offer
☐ 19. Memory updated if this becomes a standing pattern (dead-end, recurring req, etc.)
```

---

## Integrity Rules Reference (applies at every step, not just CV-building)

1. Never cite fabricated Cathay Pacific RAG metrics (65%/70% improvement claims, "zero hallucination incidents").
2. Agentic AI stack is CrewAI — never claim LangGraph, AutoGen, or other named frameworks not actually used.
3. Qlik Replicate D365→Azure SQL migration = CHANEL, not HSBC.
4. Client names appear only in bullet text, never in the role header alongside the employer.
5. 12 formal certifications = "certified in." Udemy completions = "completed training in."
6. Self-directed AI portfolio work is framed as such — never as enterprise production deployment.
7. "100+" for YouTube tutorial count.
8. Named tools/frameworks in a JD that Mayank has no evidence of using get flagged as honest gaps, not written around.

---

## Notes on Judgment Calls

- **50–59% fit roles** (Reap, Tribus were both in this range) are genuine judgment calls given financial runway pressure — present the specific gap clearly and let Mayank decide, rather than defaulting to hold.
- **Warm referrals** (Ravi/Pinpoint, Charles/Mavence, Micky, Dave Lau) get relationship-preserving responses even when declining — no bridges burned, ever.
- **Contract/day-rate roles** always need notice period, availability, and rate confirmed — rate is the one field that should never be auto-filled or guessed.
