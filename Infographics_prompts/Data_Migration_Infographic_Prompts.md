# Cloud Data Migration — Infographic Prompt Library
Generated from a real vendor-side data migration proposal, genericized for public teaching content (LinkedIn + YouTube Shorts).

**How to use this file:**
- Each module = one piece of knowledge worth teaching on its own.
- Each module has a **LinkedIn prompt** (1:1 square, 1080×1080 — works as a single post or carousel cover) and a **Shorts prompt** (9:16 vertical, 1080×1920 — works as a video cover / opening frame).
- Paste the prompt text directly into your image generator (Midjourney, DALL·E, Ideogram, etc.). Swap the style descriptors if you have a fixed brand kit.
- A **Hook** and **Caption starter** are included for the post copy itself.
- All client names, vendor names, and system names from the source deck have been removed or genericized — this is teaching content, not a client deliverable.

**Important — a straight note on the branding/headshot requirement:**
Every prompt below includes an instruction to reserve a circular top-right placeholder plus a branding text block. Being direct about a real limitation: a text-to-image prompt cannot reproduce your actual uploaded photo exactly — pure text generators (Midjourney, DALL·E, Ideogram) will *invent* a face from the description, not use your real one, no matter how the prompt is worded. To get your real, unaltered headshot into the final graphic, use one of these two workflows:

1. **Two-step (works with any generator):** Run the prompt as-is to generate the background/infographic with an empty circular placeholder top-right. Then drop your actual headshot into that circle in Canva, Figma, or Photoshop, and add the text block manually (or use the reusable overlay prompt below if your tool supports image input).
2. **One-step (image-editing tools only — GPT-4o/Nano Banana image edit, Gemini image edit):** These accept your uploaded photo *as input* and edit around it without regenerating the face. Use the **Master Overlay Prompt** below with your headshot attached, run once per generated infographic background.

**Master Overlay Prompt (for image-editing tools that accept your uploaded photo):**
> Using the attached photo exactly as provided — do not alter the face, features, expression, or likeness in any way — place it into a small circular frame in the top-right corner of this infographic, with a clean, premium thin white border and a subtle drop shadow. Beside the circle, add a compact branding text block: bold "Mayank Chugh" on the first line, "Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration" on the second line, and "mayankchugh-learning.github.io" on the third line, in small clean sans-serif text that doesn't compete with the main headline. Leave the rest of the infographic unchanged.

---

## 1. Draw the Scope Line at "Migrate the Data," Not "Rebuild the App"
**Teaching point:** The #1 scope-creep trap in a content/data migration is letting "migrate the data" quietly expand into "modernize the whole application." A written in-scope / out-of-scope table is the single best defense.

**Hook:** "The scope-creep trap that kills data migration budgets."

**LinkedIn prompt:**
> Flat vector infographic, 1080x1080, clean corporate style, white background, split down the middle: left column green header "IN SCOPE" with 4 short bullet icons (migrate data, reconcile, pilot test, validate), right column red header "OUT OF SCOPE" with 4 short bullet icons (rebuild app, new workflows, integrations, front-end dev). Bold sans-serif headline at top: "Where Does Your Migration Actually End?" Minimal shadows, generous white space, professional B2B LinkedIn aesthetic, no photos except placeholder described below, no client logos. Reserve a small circular frame in the top-right corner with a clean, premium thin border as a headshot placeholder — leave that circle visually empty (no generated face there; the real photo will be composited in afterward, unchanged). Beside the circle, add a compact branding text block: bold 'Mayank Chugh' on the first line, 'Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration' on the second line, and 'mayankchugh-learning.github.io' on the third line, in small clean sans-serif text that doesn't compete with the main headline.

**Shorts prompt:**
> Vertical 1080x1920 mobile-first infographic, bold oversized sans-serif title at top "SCOPE CREEP STARTS HERE," top half green "IN SCOPE" with 4 icon+word rows, bottom half red "OUT OF SCOPE" with 4 icon+word rows, thick outlines, high contrast for small-screen readability, dark background with bright green/red accent blocks, YouTube Shorts cover style. Reserve a small circular frame in the top-right corner with a clean, premium thin border as a headshot placeholder — leave that circle visually empty (no generated face there; the real photo will be composited in afterward, unchanged). Beside the circle, add a compact branding text block: bold 'Mayank Chugh' on the first line, 'Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration' on the second line, and 'mayankchugh-learning.github.io' on the third line, in small clean sans-serif text that doesn't compete with the main headline.

**Caption starter:** "Every migration proposal needs one table before anything else: what's actually in scope, and what only sounds like it should be..."

---

## 2. The Four-Stage Data Movement Pattern (Extract → Transfer → Transform → Load)
**Teaching point:** Naming your ETL stages explicitly — and treating each as its own testable checkpoint — is what turns "we migrated the data" into something you can actually prove happened correctly.

**Hook:** "4 checkpoints that turn 'we migrated the data' into proof it worked."

**LinkedIn prompt:**
> Flat infographic 1080x1080, horizontal 4-stage pipeline diagram, boxes connected by arrows labeled "Extract," "Transfer," "Transform," "Load," small checkpoint/checkmark icon between each box, clean corporate teal/gold palette, white background, bold header "Every Data Migration Has 4 Checkpoints." Reserve a small circular frame in the top-right corner with a clean, premium thin border as a headshot placeholder — leave that circle visually empty (no generated face there; the real photo will be composited in afterward, unchanged). Beside the circle, add a compact branding text block: bold 'Mayank Chugh' on the first line, 'Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration' on the second line, and 'mayankchugh-learning.github.io' on the third line, in small clean sans-serif text that doesn't compete with the main headline.

**Shorts prompt:**
> Vertical 1080x1920, 4 stacked chevron arrows top to bottom, teal-to-gold gradient, bold numbers 1-2-3-4, labels "Extract / Transfer / Transform / Load," title at top "THE 4 STAGES OF A DATA MIGRATION," dark background, large legible type. Reserve a small circular frame in the top-right corner with a clean, premium thin border as a headshot placeholder — leave that circle visually empty (no generated face there; the real photo will be composited in afterward, unchanged). Beside the circle, add a compact branding text block: bold 'Mayank Chugh' on the first line, 'Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration' on the second line, and 'mayankchugh-learning.github.io' on the third line, in small clean sans-serif text that doesn't compete with the main headline.

**Caption starter:** "'We migrated the data' isn't a status update — it's a claim. Here's the 4-checkpoint pattern that lets you actually back it up..."

---

## 3. Content Migrations Need Three Storage Tiers, Not One
**Teaching point:** Content-management migrations typically carry three different data shapes — raw files, structured index/metadata, and application state — that don't belong in the same store.

**Hook:** "Why 'just dump it in one database' breaks content migrations."

**LinkedIn prompt:**
> Flat infographic 1080x1080, 3-column comparison, each column a labeled storage icon: "Object Storage — raw files," "Relational DB — structured index/metadata," "File System — application state," clean corporate style, teal/grey/gold color-coded columns, white background, bold header "One Migration, Three Storage Tiers." Reserve a small circular frame in the top-right corner with a clean, premium thin border as a headshot placeholder — leave that circle visually empty (no generated face there; the real photo will be composited in afterward, unchanged). Beside the circle, add a compact branding text block: bold 'Mayank Chugh' on the first line, 'Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration' on the second line, and 'mayankchugh-learning.github.io' on the third line, in small clean sans-serif text that doesn't compete with the main headline.

**Shorts prompt:**
> Vertical 1080x1920, 3 stacked storage-tier cards each with icon + short label + data-shape example, bold title "YOUR DATA ISN'T ONE SHAPE" at top, dark background, teal/grey/gold accent colors, large legible text. Reserve a small circular frame in the top-right corner with a clean, premium thin border as a headshot placeholder — leave that circle visually empty (no generated face there; the real photo will be composited in afterward, unchanged). Beside the circle, add a compact branding text block: bold 'Mayank Chugh' on the first line, 'Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration' on the second line, and 'mayankchugh-learning.github.io' on the third line, in small clean sans-serif text that doesn't compete with the main headline.

**Caption starter:** "Files. Metadata. Application state. Three different data shapes — and three different homes they need to land in..."

---

## 4. Data Migration Testing Needs Three Separate Checks
**Teaching point:** "The data loaded successfully" is not a test result — it's an absence of failure. A real migration test plan checks completeness, correctness, and validation/reconciliation separately.

**Hook:** "'It loaded fine' is not a test result. Here's what actually is."

**LinkedIn prompt:**
> Flat infographic 1080x1080, 3-petal radial diagram around a center circle labeled "Migration Data QA," each petal labeled "Completeness — did everything arrive," "Correctness — is it accurate," "Validation — does it reconcile," clean corporate teal/gold palette, white background, bold header "3 Checks, Not 1." Reserve a small circular frame in the top-right corner with a clean, premium thin border as a headshot placeholder — leave that circle visually empty (no generated face there; the real photo will be composited in afterward, unchanged). Beside the circle, add a compact branding text block: bold 'Mayank Chugh' on the first line, 'Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration' on the second line, and 'mayankchugh-learning.github.io' on the third line, in small clean sans-serif text that doesn't compete with the main headline.

**Shorts prompt:**
> Vertical 1080x1920, 3 stacked check-cards each with a checkmark icon and one-word label (COMPLETENESS / CORRECTNESS / VALIDATION) plus a short description line, bold title "DATA MIGRATION QA = 3 CHECKS" at top, dark background, teal glow accents. Reserve a small circular frame in the top-right corner with a clean, premium thin border as a headshot placeholder — leave that circle visually empty (no generated face there; the real photo will be composited in afterward, unchanged). Beside the circle, add a compact branding text block: bold 'Mayank Chugh' on the first line, 'Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration' on the second line, and 'mayankchugh-learning.github.io' on the third line, in small clean sans-serif text that doesn't compete with the main headline.

**Caption starter:** "Did everything arrive? Is it accurate? Does it reconcile against source? If your migration test plan only answers one of these, it's not done..."

---

## 5. The Full Test Lifecycle for Migrations (Plan → Prepare → Execute → Close)
**Teaching point:** A reusable checklist for any migration project regardless of tech stack — test strategy and tooling first, then scenario design and environment validation, then ingestion testing and defect retesting, then signed-off closure artifacts.

**Hook:** "The 4-phase test lifecycle every migration project should follow."

**LinkedIn prompt:**
> Flat infographic 1080x1080, horizontal 4-stage arrow flow, labeled "Initiate & Plan," "Prepare," "Execute (Build & Test)," "Close," each with a small icon (compass, checklist, gear, signature), clean corporate diagram style, teal-to-gold progression, bold title "The Migration Test Lifecycle," white background. Reserve a small circular frame in the top-right corner with a clean, premium thin border as a headshot placeholder — leave that circle visually empty (no generated face there; the real photo will be composited in afterward, unchanged). Beside the circle, add a compact branding text block: bold 'Mayank Chugh' on the first line, 'Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration' on the second line, and 'mayankchugh-learning.github.io' on the third line, in small clean sans-serif text that doesn't compete with the main headline.

**Shorts prompt:**
> Vertical 1080x1920, 4 stacked stage-cards top to bottom with icon + label + 3-word description, teal-to-gold gradient progression, bold title "TEST LIFECYCLE FOR ANY MIGRATION" at top, dark background, large legible cards. Reserve a small circular frame in the top-right corner with a clean, premium thin border as a headshot placeholder — leave that circle visually empty (no generated face there; the real photo will be composited in afterward, unchanged). Beside the circle, add a compact branding text block: bold 'Mayank Chugh' on the first line, 'Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration' on the second line, and 'mayankchugh-learning.github.io' on the third line, in small clean sans-serif text that doesn't compete with the main headline.

**Caption starter:** "Same 4-phase test lifecycle, every migration project I've worked on — regardless of what's actually being moved..."

---

## 6. The Assumptions Section Is Where You Protect Your Delivery Date
**Teaching point:** Every dependency left unwritten becomes the vendor's risk by default. The more precisely you name "the client provides X by week 1," the more defensible your timeline is when X slips.

**Hook:** "The most underrated slide in any project proposal."

**LinkedIn prompt:**
> Flat infographic 1080x1080, large document/shield icon center labeled "Assumptions & Dependencies," 4 surrounding bubbles with short labels: "Who provides access," "Who owns licensing," "Who supplies sample data," "How many iterations assumed," clean radial layout, corporate teal/amber palette, bold header "Protect Your Timeline Before It Starts." Reserve a small circular frame in the top-right corner with a clean, premium thin border as a headshot placeholder — leave that circle visually empty (no generated face there; the real photo will be composited in afterward, unchanged). Beside the circle, add a compact branding text block: bold 'Mayank Chugh' on the first line, 'Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration' on the second line, and 'mayankchugh-learning.github.io' on the third line, in small clean sans-serif text that doesn't compete with the main headline.

**Shorts prompt:**
> Vertical 1080x1920, large shield/document icon at top glowing amber, 4 stacked bubble-labels beneath, bold title "THE SLIDE THAT PROTECTS YOUR DEADLINE" at top, dark background, amber accent glow, large legible text. Reserve a small circular frame in the top-right corner with a clean, premium thin border as a headshot placeholder — leave that circle visually empty (no generated face there; the real photo will be composited in afterward, unchanged). Beside the circle, add a compact branding text block: bold 'Mayank Chugh' on the first line, 'Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration' on the second line, and 'mayankchugh-learning.github.io' on the third line, in small clean sans-serif text that doesn't compete with the main headline.

**Caption starter:** "An unwritten dependency is a risk you just agreed to own. Here's why the 'Assumptions & Dependencies' slide matters more than the architecture diagram..."

---

## 7. Migration Windows Are a Negotiated Constraint, Not an Assumption
**Teaching point:** For any migration above a certain data volume, the throughput math should drive a stated window requirement in the proposal — not get discovered mid-project when the transfer is too slow.

**Hook:** "Do the throughput math before you promise the migration date."

**LinkedIn prompt:**
> Flat infographic 1080x1080, large clock/calendar icon center with a data-volume bar chart beside it, labeled "Data Volume" on one side and "Required Migration Window" on the other, connecting arrow between them labeled "= throughput math," clean corporate teal/red palette, white background, bold header "Size Your Migration Window Before You Promise a Date." Reserve a small circular frame in the top-right corner with a clean, premium thin border as a headshot placeholder — leave that circle visually empty (no generated face there; the real photo will be composited in afterward, unchanged). Beside the circle, add a compact branding text block: bold 'Mayank Chugh' on the first line, 'Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration' on the second line, and 'mayankchugh-learning.github.io' on the third line, in small clean sans-serif text that doesn't compete with the main headline.

**Shorts prompt:**
> Vertical 1080x1920, top half large data-volume bar chart icon, bottom half large clock icon labeled "Required Window," red connecting arrow between them, bold title "DO THIS MATH BEFORE YOU PROMISE A DATE" at top, dark background, high contrast. Reserve a small circular frame in the top-right corner with a clean, premium thin border as a headshot placeholder — leave that circle visually empty (no generated face there; the real photo will be composited in afterward, unchanged). Beside the circle, add a compact branding text block: bold 'Mayank Chugh' on the first line, 'Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration' on the second line, and 'mayankchugh-learning.github.io' on the third line, in small clean sans-serif text that doesn't compete with the main headline.

**Caption starter:** "Terabytes of data don't move in a standard 8-hour window. Here's why the migration window itself needs to be a negotiated line item, not an afterthought..."

---

## 8. The Two Deliverables Migration Proposals Quietly Skip
**Teaching point:** Rollback strategy and Infrastructure-as-Code are the two deliverables most often dropped from migration proposals — and the two you most need when a cutover goes wrong.

**Hook:** "The 2 deliverables missing from most migration proposals."

**LinkedIn prompt:**
> Flat infographic 1080x1080, checklist graphic with most items checked in grey/teal, but 2 items highlighted in bold red with an alert icon: "Rollback Strategy" and "Infrastructure-as-Code," clean corporate style, white background, bold header "Don't Skip These 2." Reserve a small circular frame in the top-right corner with a clean, premium thin border as a headshot placeholder — leave that circle visually empty (no generated face there; the real photo will be composited in afterward, unchanged). Beside the circle, add a compact branding text block: bold 'Mayank Chugh' on the first line, 'Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration' on the second line, and 'mayankchugh-learning.github.io' on the third line, in small clean sans-serif text that doesn't compete with the main headline.

**Shorts prompt:**
> Vertical 1080x1920, large checklist filling frame, most items greyed/checked, 2 items glowing red and pulsing-style highlighted "ROLLBACK STRATEGY" and "INFRASTRUCTURE-AS-CODE," bold title "MOST SKIPPED MIGRATION DELIVERABLES" at top, dark background. Reserve a small circular frame in the top-right corner with a clean, premium thin border as a headshot placeholder — leave that circle visually empty (no generated face there; the real photo will be composited in afterward, unchanged). Beside the circle, add a compact branding text block: bold 'Mayank Chugh' on the first line, 'Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration' on the second line, and 'mayankchugh-learning.github.io' on the third line, in small clean sans-serif text that doesn't compete with the main headline.

**Caption starter:** "Design doc? Check. Test plan? Check. Rollback strategy? ...Often missing. Here's why that's the one you'll regret skipping..."

---

## 9. Team Sizing Pattern for a Medium-Complexity Migration
**Teaching point:** A credible migration estimate has a visible tail after cutover — UAT support and warranty support — not just a go-live date as the finish line.

**Hook:** "Your migration estimate isn't done until it has a tail."

**LinkedIn prompt:**
> Flat infographic 1080x1080, horizontal timeline bar ending in a flag labeled "Go-Live," but timeline continues past the flag in a lighter shade with 2 more segments labeled "+2 Weeks UAT Support" and "+2 Weeks Warranty Support," clean corporate style, teal main bar fading to light grey tail, white background, bold header "Go-Live Isn't the Finish Line." Reserve a small circular frame in the top-right corner with a clean, premium thin border as a headshot placeholder — leave that circle visually empty (no generated face there; the real photo will be composited in afterward, unchanged). Beside the circle, add a compact branding text block: bold 'Mayank Chugh' on the first line, 'Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration' on the second line, and 'mayankchugh-learning.github.io' on the third line, in small clean sans-serif text that doesn't compete with the main headline.

**Shorts prompt:**
> Vertical 1080x1920, vertical timeline bar descending, flag icon labeled "GO-LIVE" partway down, bar continuing lighter below labeled "+2 WEEKS UAT" and "+2 WEEKS WARRANTY," bold title "YOUR PROJECT ISN'T DONE AT GO-LIVE" at top, dark background, teal-to-grey gradient. Reserve a small circular frame in the top-right corner with a clean, premium thin border as a headshot placeholder — leave that circle visually empty (no generated face there; the real photo will be composited in afterward, unchanged). Beside the circle, add a compact branding text block: bold 'Mayank Chugh' on the first line, 'Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration' on the second line, and 'mayankchugh-learning.github.io' on the third line, in small clean sans-serif text that doesn't compete with the main headline.

**Caption starter:** "If your migration estimate ends at go-live, it's incomplete. Here's the support tail every credible proposal should include..."

---

## 10. The Reusable Staffing Curve for Migration Projects
**Teaching point:** Architecture front-loaded, testing/DevOps back-loaded, PM constant throughout — this ramp shape is a reusable staffing template for migration-style projects generally, not just one project's numbers.

**Hook:** "The staffing curve every migration project follows (whether you planned it or not)."

**LinkedIn prompt:**
> Flat infographic 1080x1080, area/line chart showing 4 overlapping curves across a horizontal timeline: "Architect" curve high at the start and rising again at the very end, "PM" curve flat and constant throughout, "DevOps/Test" curve rising in the middle and tapering at the end, clean corporate line-chart style, teal/gold/grey lines, white background, bold header "The Migration Staffing Curve." Reserve a small circular frame in the top-right corner with a clean, premium thin border as a headshot placeholder — leave that circle visually empty (no generated face there; the real photo will be composited in afterward, unchanged). Beside the circle, add a compact branding text block: bold 'Mayank Chugh' on the first line, 'Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration' on the second line, and 'mayankchugh-learning.github.io' on the third line, in small clean sans-serif text that doesn't compete with the main headline.

**Shorts prompt:**
> Vertical 1080x1920, simplified vertical staircase-style curve chart top to bottom showing 3 labeled bands: "Architecture-heavy (start)," "PM constant (throughout)," "Testing/DevOps-heavy (end)," bold title "HOW MIGRATION TEAMS ACTUALLY RAMP" at top, dark background, teal/gold accent bands. Reserve a small circular frame in the top-right corner with a clean, premium thin border as a headshot placeholder — leave that circle visually empty (no generated face there; the real photo will be composited in afterward, unchanged). Beside the circle, add a compact branding text block: bold 'Mayank Chugh' on the first line, 'Enterprise Architect · TOGAF 9.2 · IT Governance · M&A Integration' on the second line, and 'mayankchugh-learning.github.io' on the third line, in small clean sans-serif text that doesn't compete with the main headline.

**Caption starter:** "Front-load the architecture. Back-load the testing. Keep the PM constant. Here's the staffing curve I use for every migration-shaped project..."

---

## Suggested batch production order
1. Modules 1–3 (scope + architecture pattern) — foundational, post first.
2. Modules 4–5 (testing discipline) — high-credibility content for a technical audience.
3. Modules 6–8 (risk & deliverables) — practical/tactical, good save-rate content.
4. Modules 9–10 (staffing) — useful for PM/delivery-lead audience, good closer for the series.

*Every prompt above is self-contained — no client name, vendor name, or system name from the source deck appears anywhere in this file.*
