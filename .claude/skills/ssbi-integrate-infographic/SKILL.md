---
name: ssbi-integrate-infographic
description: >-
  Copies a user-provided PNG into assets/learning and wires it into an SSBI
  drill DETAIL_HELP entry (figure + optional related-link chip). Use when the
  user says "Also integrate this page", attaches a ChatGPT/workspace PNG, asks
  for learning infographics on a drill question, or asks to add an infographic
  to Detailed help / Open PNG.
compatibility: Requires Node.js for DETAIL_HELP upsert. Repo mayankchugh-learning.github.io.
---

# Integrate SSBI Infographic PNG

Wire a pasted/attached PNG into the Sales SSBI Interview Drill.

## Default targets

| Item | Path |
|------|------|
| Drill HTML | `pages/learning/Sales_SSBI_Interview_Drill.html` |
| Assets | `assets/learning/<kebab-name>.png` |
| Img src in HTML | `../../assets/learning/<kebab-name>.png` |

## Workflow

```
Infographic progress:
- [ ] 1. Identify target DETAIL_HELP id (categoryId-index)
- [ ] 2. Copy PNG to assets/learning with kebab-case name
- [ ] 3. Prepend detail-figure to that entry's html
- [ ] 4. Optional: related-link chip in page header
- [ ] 5. Verify file size + SCRIPT OK + Open PNG appears
```

### 1. Resolve the question

If the user just said “Also integrate this page” after a detail-help turn, use the **same id** as that turn. Otherwise run:

```powershell
node "${CLAUDE_SKILL_DIR}/../ssbi-detail-help/scripts/list-questions.cjs" pages/learning/Sales_SSBI_Interview_Drill.html --filter "…"
```

Or invoke `/ssbi-detail-help` first. If there is no DETAIL_HELP entry yet, create it before embedding the figure.

### 2. Copy the real PNG (not a Cursor thumbnail)

Chat and Cursor may expose a **workspaceStorage** path or an assets mirror with a mangled name. Prefer the **real** file (often under `AppData\Roaming\Cursor\User\workspaceStorage\...\images\` with spaces in the ChatGPT filename).

```powershell
Copy-Item -Force "<source.png>" "assets/learning/<kebab-name>.png"
```

Naming: descriptive kebab-case (`direct-lake-limitations.png`, `realtime-intelligence-fabric.png`). Do not leave `ChatGPT Image….png` in assets.

If a hi-res replacement arrives later, overwrite the same canonical filename so HTML paths stay stable. If replacing, you may rename the previous file to `<name>-old.png` locally, but do not keep `-old` / `-duplicate` files as the live `src`.

### 3. Prepend figure HTML

Add at the **top** of that entry’s `html` (before the first `<h3>`):

```html
<figure class="detail-figure">
  <img src="../../assets/learning/<kebab-name>.png" alt="…" width="1400" height="900" loading="lazy">
  <figcaption>…</figcaption>
</figure>
```

Rules:

- No backticks in the body
- Escape `&` as `&amp;`
- Prefer upsert via `/ssbi-detail-help` scripts (read existing html, prepend figure, write payload)

The card’s **Open PNG** link is derived automatically from the first `.png` in `DETAIL_HELP[id].html`.

### 4. Optional related-link chip

Near other related links on the drill page, add:

```html
<a href="../../assets/learning/<kebab-name>.png" target="_blank" rel="noopener">Short label</a>
```

### 5. Verify

- File exists and is a real image (typically ~1–2 MB for hi-res, not a tiny stub)
- `new Function(script)` / SCRIPT OK after HTML edit
- Hard-refresh → **Detailed help** shows figure; **Open PNG** opens the asset

## Do not

- Commit `ChatGPT Image*.png` or `*-old*` / `*-duplicate*` leftovers
- Point `src` at Cursor `workspaceStorage` paths
- Invent a new question id when the conversation already targeted one
- Commit unless the user asks
