---
name: ssbi-detail-help
description: >-
  Adds Detailed help popups to pages/learning/Sales_SSBI_Interview_Drill.html
  (DETAIL_HELP keyed by categoryId-index). Use when the user pastes an interview
  Q&A plus detail/popup content, asks for detailed help on a drill question,
  wants an analogy/visual/interactive explanation of an incident, or mentions
  incident Q1/Q2-style popups, DETAIL_HELP, or SSBI detail modal.
compatibility: Requires Node.js. Intended for mayankchugh-learning.github.io.
---

# SSBI Detail Help Popups

Automate adding **Detailed help** modals to the Sales SSBI Interview Drill.

**Target file:** `pages/learning/Sales_SSBI_Interview_Drill.html`  
**Mechanism:** entries in `DETAIL_HELP` keyed by `"{categoryId}-{questionIndex}"` (0-based). Cards show **Detailed help** when the key exists. If the HTML contains an `<img …src="….png">`, an **Open PNG** link appears automatically next to the button — do not rewire `renderCards` unless broken.

If the user also attached a PNG or said “Also integrate this page”, continue with `/ssbi-integrate-infographic` after the upsert.

## When this skill runs

User provides:

- Question number / category (e.g. Real Incident Stories Q2)
- Optional short answer (already in CATEGORIES)
- Detail popup outline (symptoms, before/after, takeaways, ASCII tables, analogies)

→ Resolve ID → build HTML using existing CSS classes → upsert into `DETAIL_HELP`.

Default teaching voice: **simple analogy language, visual, interactive** (before/after boxes, side-by-side panels, takeaway). Do not dump the full interview answer into the popup.

## Workflow

```
Detail help progress:
- [ ] 1. Resolve question id (categoryId-index)
- [ ] 2. Confirm question text matches CATEGORIES
- [ ] 3. Build DETAIL_HELP html from user outline
- [ ] 4. Upsert entry (script preferred)
- [ ] 5. Verify script parses + key exists
```

### 1. Resolve question id

```powershell
node "${CLAUDE_SKILL_DIR}/scripts/list-questions.cjs" pages/learning/Sales_SSBI_Interview_Drill.html
```

Optional filter:

```powershell
node "${CLAUDE_SKILL_DIR}/scripts/list-questions.cjs" pages/learning/Sales_SSBI_Interview_Drill.html --filter "Direct Lake"
```

Match by:

1. Explicit id (`incident-1`)
2. Category name + Q number (Q1 → index 0)
3. Substring match on question text

Known categories: `model`, `incident`, `platform`, `training`, `stakeholder`, `scenario`, `behavioral`, `fabric-deep`, `json-bronze`, `snowflake`, `star-schema`, `debug-de`, `pyspark`, `parquet`, `purview`, `kql-tsql`.

If the question is not in CATEGORIES yet, stop and use `/add-ssbi-drill-question` first.

### 2. Build HTML body

Use **only** existing classes (see [reference-html-patterns.md](reference-html-patterns.md)):

| Class | Use |
|-------|-----|
| `h3` | Section titles |
| `p`, `p.muted`, `ul`/`li` | Prose |
| `detail-figure` + `img` | Infographic at top of modal |
| `diag-grid` + `diag-box` + `.label` | Side-by-side panels |
| `flow-box broken` / `flow-box fixed` | Before (bad) / after (good) |
| `flow-title bad` / `flow-title good` | Box titles |
| `pre` inside boxes | ASCII tables / diagrams |
| `math-box` | Formulas |
| `tree-box` + `pre` | Decision trees |
| `takeaway` | Key takeaway callout |

Rules:

- Escape `&` as `&amp;` in HTML text.
- **No backticks** in the HTML body (breaks the template literal).
- Prefer ASCII in `<pre>` unless the user supplies a PNG.
- Title: short diagnostic headline, not the full interview question.
- Do not invent facts beyond the user's outline + existing answer.

### 3. Upsert with the script (preferred)

Write a temp JSON payload, then:

```powershell
node "${CLAUDE_SKILL_DIR}/scripts/add-detail-help.cjs" --html pages/learning/Sales_SSBI_Interview_Drill.html --payload path/to/payload.json
```

Payload:

```json
{
  "id": "incident-1",
  "title": "Misleading Total row — never sum a rate measure (YoY%)",
  "html": "<h3>...</h3>..."
}
```

Or: `--id`, `--title`, `--html-file`.

**Windows PowerShell:** chain with `;` not `&&`. Delete the temp payload after a successful upsert.

### 4. Manual edit fallback

Insert/replace inside `const DETAIL_HELP = { ... }`. Keep commas between entries. After bulk inserts, verify with:

```powershell
node -e "const fs=require('fs'); const h=fs.readFileSync('pages/learning/Sales_SSBI_Interview_Drill.html','utf8'); const i=h.indexOf('<script>'); const j=h.indexOf('</script>'); new Function(h.slice(i+8,j)); console.log('SCRIPT OK');"
```

### 5. Verify

- Grep for the new `"id"` under `DETAIL_HELP`
- Confirm list-questions shows `[has detail]`
- Tell user: hard-refresh → category → **Detailed help** (and **Open PNG** if image present)

## User input formats

**A. Structured paste:**

```
Q2
Have you ever seen...
▸
Yes, and it happened...

Details popup:
{ What Went Wrong? ... }
```

**B. Explicit id:** `Add detail help for incident-1` + outline.

**C. Batch:** process each id separately, one upsert each.

## Do not

- Duplicate the full interview answer inside the popup
- Change CATEGORIES unless asked (use `/add-ssbi-drill-question`)
- Add new CSS unless existing patterns cannot express the content
- Commit unless the user asks
