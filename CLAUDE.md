# mayankchugh-learning.github.io

Static HTML portfolio and learning site for Mayank Chugh. Hosted on GitHub Pages. No build step.

**Live:** https://mayankchugh-learning.github.io

## Claude Code skills (this repo)

Project skills live in `.claude/skills/`. Invoke with `/skill-name` or by matching the request.

| Skill | Use when |
|-------|----------|
| `/ssbi-detail-help` | Paste interview Q&A + “add detail help” / analogy popup for the Sales SSBI drill |
| `/ssbi-integrate-infographic` | “Also integrate this page” + a PNG into a DETAIL_HELP entry |
| `/add-ssbi-drill-question` | Add a new Q&A (or category) to `CATEGORIES` in the drill |
| `/add-learning-page` | New learning HTML page + Learning Hub card |

Personal skills in `~/.claude/skills/` **override** project skills of the same name. Keep personal copies of the SSBI skills in sync with this folder, or remove the personal copies so the project versions load.

Always-on facts stay here. Multi-step workflows stay in skills (loaded only when used).

## Layout

```
index.html                 # Portfolio home — keep at repo root
pages/learning/            # Interview drills, architecture notes, learning hub
pages/ai-learning/         # Interactive AI tutorials
pages/migration/           # Enterprise migration playbooks
pages/portfolio/           # Consulting
pages/articles/            # Long-form writing
pages/archive/             # Superseded copies — do not edit or link
assets/learning/           # Hub thumbs (SVG) and SSBI infographics (PNG)
assets/theme-switcher.js   # Shared theme + home chrome
```

Learning Hub: `pages/learning/index.html` (topic sections, sticky jump nav).

## Local preview

Serve from the **repository root** (pages use `/assets/...` and `/index.html`):

```powershell
python -m http.server 8000
```

Open http://localhost:8000. Do not open nested HTML files as `file://`.

## Conventions

- Include theme switcher on new public pages: script in `<head>`, `theme-switcher.css` before `</head>`, `data-page` on `<html>`. Nested pages may use root-absolute `/assets/...` or relative `../../assets/...`.
- Learning Hub topics: `#llm-foundations`, `#rag-retrieval`, `#agents-frameworks`, `#system-architecture`, `#enterprise-migration`, `#interview-career`, `#tooling-claude`.
- Infographic filenames: kebab-case (`direct-lake-limitations.png`). Never commit `ChatGPT Image*.png` or leave `*-old*` / `*-duplicate*` as the live `src`.
- Do not edit `pages/archive/`, `index-old.html`, or `*Copy*.html` unless asked.
- Commit only when the user asks. Do not push unless asked.
- Windows PowerShell: chain commands with `;`, not `&&`.

## Recurring paste template (SSBI drill)

Mayank often pastes:

```
add detail help for
{ Qn ... ▸ answer }

add as below
{ analogy / visual outline }

Also integrate this page
```

That is `/ssbi-detail-help` then `/ssbi-integrate-infographic`. Write popups in simple analogy language, visually, with existing CSS classes — do not invent new CSS.
