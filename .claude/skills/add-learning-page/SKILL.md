---
name: add-learning-page
description: >-
  Creates a new static learning HTML page and adds a card on the Learning Hub
  (pages/learning/index.html) in the correct topic section. Use when the user
  asks for a new tutorial, explainer, interview prep page, architecture guide,
  or Learning Hub card. Do not use for SSBI DETAIL_HELP popups or infographic
  wiring (ssbi-detail-help / ssbi-integrate-infographic).
---

# Add a Learning Page

Static GitHub Pages site — no bundler. New pages are HTML files plus a hub card.

## Where the file goes

| Kind | Directory | Hub topic (section id) |
|------|-----------|------------------------|
| LLM / transformers / fine-tuning / Python | `pages/ai-learning/` | `#llm-foundations` |
| RAG, retrieval, vector stores | `pages/ai-learning/` | `#rag-retrieval` |
| Agents, LangChain, LangGraph | `pages/ai-learning/` | `#agents-frameworks` |
| Distributed / event / async / containers | `pages/` (repo already has several at this level) | `#system-architecture` |
| CCT / D365 / SSAS migration | `pages/migration/` | `#enterprise-migration` |
| Interview drills, SSBI, AIS | `pages/learning/` | `#interview-career` |
| Claude Code / tooling | `pages/ai-learning/` | `#tooling-claude` |

Filename: kebab-case, `.html`. Do not put new pages in `pages/archive/`.

## Workflow

```
New page progress:
- [ ] 1. Choose directory + hub section
- [ ] 2. Create HTML from page-shell.html (theme switcher + data-page)
- [ ] 3. Add hub card in the right topic/subtopic
- [ ] 4. Optional kebab-case SVG/PNG thumb in assets/learning
- [ ] 5. Preview from repo root (python -m http.server 8000)
```

### 1. Page shell

Copy [page-shell.html](page-shell.html). Required:

- `<html lang="en" data-page="kebab-name">`
- Theme script in `<head>`: `/assets/theme-switcher.js` (or `../../assets/...` from `pages/learning/`)
- `theme-switcher.css` before `</head>`
- Title + meta description
- Syne + DM Sans (hub/portfolio) **or** match a sibling page’s fonts if this is a drill/explainer with its own visual language
- A way back to the hub or `index.html`

Do not copy archive / `*Copy*` pages as the template.

### 2. Hub card

Insert one `<article class="learning-card">` into the matching `<section id="...">` in `pages/learning/index.html`. Prefer an existing `.subtopic` over creating a new one.

Card template: [card-template.html](card-template.html).

Rules:

- `href` is relative to `pages/learning/index.html` (`../ai-learning/foo.html`, `Sales_SSBI_….html`, `../migration/….html`)
- Thumb: SVG inline (preferred, no extra asset) or `<img src="../../assets/learning/<kebab>.svg">`
- Unique SVG gradient `id`s (they share one document)
- Tag + title + one-sentence description + CTA
- Escape `&` as `&amp;` in card text

Do not add a second card on `index.html` (portfolio home) unless the user asks.

### 3. Visual language

- Learning Hub / portfolio pages: navy `#0f1e36`, accent gold `#e8a020`, Syne headings, DM Sans body.
- SSBI drill is a separate dark teal/gold system — do not mix it into unrelated tutorials.
- Keep the page usable without JS where possible; progressive enhancement is fine.

### 4. Verify

- Serve from repo root, open the hub, click the card, confirm theme toggle works.
- Commit only if asked.

## Do not

- Edit `pages/archive/` or `index-old.html`
- Leave `ChatGPT Image*.png` as the thumb
- Add a build step, npm, or framework
