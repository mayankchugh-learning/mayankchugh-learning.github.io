---
name: integrate-standalone-page
description: >-
  Integrates a finished, self-contained HTML page that was generated elsewhere
  (Claude artifact export, "Meridian AI Study Workbook.html"-style file with
  spaces in the name, its own <style>/<script>, own theme button) into this
  repo: kebab-case rename, proper <head>, site theme switcher, back link,
  Learning Hub card, thumb. Use when the user says "integrate this page",
  "add this page to my projects/hub", or drops an untracked .html in
  pages/ai-learning/. Not for writing a page from scratch (add-learning-page)
  or SSBI drill content (ssbi-detail-help / ssbi-integrate-infographic).
---

# Integrate a Standalone HTML Page

Static GitHub Pages site, no build step. A generated page usually arrives
"almost right": it works alone but breaks repo conventions. Fix only those
conventions; do not redesign the page.

## Known example: Meridian AI Study Workbook

`pages/ai-learning/Meridian AI Study Workbook.html` (~100 KB, untracked).
A study workbook on a procurement-assistant app (RAG over PDFs + three-agent
purchase audit), read from its code. Five tabs: Technical (10 topics, live
demos), Functional, Non-functional, Improvements, Self-check quiz.
Single file, no local assets. Only external deps are Google Fonts
(Bricolage Grotesque, IBM Plex Sans/Mono).

| Item | Value |
|------|-------|
| Target file | `pages/ai-learning/meridian-ai-study-workbook.html` |
| `data-page` | `meridian-ai-study-workbook` |
| Hub section | `#rag-retrieval` (subtopic **System design**; use `#agents-frameworks` only if the user wants the audit-agent angle first) |
| Tag / title | `Workbook` / `Meridian AI Study Workbook` |
| Description | Read a RAG + multi-agent procurement app from its code: architecture, retrieval, agents, middleware, NFRs, improvements, with demos and a quiz. |

## Workflow

```
- [ ] 1. Inspect the file (head, title, theme code, scripts, external URLs)
- [ ] 2. git mv / rename to kebab-case (untracked: plain mv)
- [ ] 3. Normalise the document skeleton
- [ ] 4. Reconcile theming with assets/theme-switcher.js
- [ ] 5. Add a way back (hub link)
- [ ] 6. Add the Learning Hub card (+ unique-id SVG thumb)
- [ ] 7. Preview from repo root and check
```

### 1. Inspect

Read the whole file before editing (never publish unseen content). Note:
`<title>` location, `<html>` attrs, inline `<script>` count, `localStorage`
keys, any `fetch`/absolute URLs (`localhost`, API keys, `aistudio`), and
whether it duplicates its own theme control.

### 2. Rename

Spaces and capitals to kebab-case `.html`. Keep it in the same folder unless
the Kind table in `/add-learning-page` says otherwise. Grep the repo for the
old name afterwards: `Grep "Meridian AI Study Workbook"`.

### 3. Normalise the skeleton

Exported pages often have a wrapper like
`<!doctype html><html><head><meta charset=utf8>…<style>reset</style></head><body>`
followed by `<title>`, `<link>`, and `<style>` **inside `<body>`**. Rebuild as:

```html
<!DOCTYPE html>
<html lang="en" data-page="PAGE_SLUG">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="/assets/theme-switcher.js"></script>
  <title>PAGE_TITLE — Mayank Chugh</title>
  <meta name="description" content="PAGE_DESCRIPTION">
  <!-- preconnect + fonts <link> moved here -->
  <!-- the page's own <style> blocks moved here, unchanged -->
  <link rel="stylesheet" href="/assets/theme-switcher.css">
</head>
<body>
  …existing body markup (header, main, script)…
</body>
</html>
```

Keep the original reset block's useful rules (`img{max-width:100%}`,
`[hidden]` rule, safe-area padding) by merging them into the page style.
Do not touch the page's palette, fonts or layout.

### 4. Reconcile theming (the usual breakage)

`assets/theme-switcher.js` sets `html[data-theme]` to `dark` or `light`
(default dark), stores it under its own key, and mounts a floating
`#site-chrome` dock (Home + Dark/Light toggle). A page with its own toggle
fights it: Meridian's boot code runs `applyTheme()` which **removes**
`data-theme` for its "system" mode, overriding the site choice.

Fix, preferring the site control:

1. Delete the page's theme button (`#themeBtn`) and its JS: the `themes`
   array, `applyTheme`, the click handler and the `applyTheme()` call.
2. Keep the page's CSS as is. Meridian already defines tokens for
   `:root[data-theme="dark"]` and `:root:not([data-theme="light"])` under
   `prefers-color-scheme`, so the site's `light`/`dark` values just work.
3. Leave the page's own `localStorage` keys (`mer.mode`, studied topics,
   quiz) alone; they are namespaced and harmless. Wrap nothing new.

If the page has no dark tokens, say so and ask rather than inventing a palette.

### 5. Back link

The site dock already supplies Home (`/index.html`). Also add a small link to
the hub in the page header, matching the page's existing button style:
`<a class="btn" href="/pages/learning/index.html#rag-retrieval">Learning Hub</a>`.
Use root-absolute paths (project convention allows it, served from repo root).

### 6. Hub card

Follow `/add-learning-page` step 2 and its `card-template.html`:

- Insert one `<article class="learning-card">` into the section/subtopic from
  the table; `href` is relative to `pages/learning/index.html`
  (`../ai-learning/meridian-ai-study-workbook.html`).
- Prefer an inline SVG thumb (400x225 viewBox) with **unique gradient ids**
  (`meridian-bg`, `meridian-bar`), in the hub's dark navy + gold language.
  See the RAG Playground card for the pattern.
- `&` as `&amp;` in card text. No card on root `index.html` unless asked.
- If a section intro text lists its contents, update it only if it enumerates
  pages (the last hub commits did this for Tooling & Claude).

### 7. Verify

```powershell
python -m http.server 8000
```

Open `http://localhost:8000/pages/ai-learning/<slug>.html` and check:
fonts load, all five tabs switch, demos run, quiz scores, site Dark/Light
toggle changes the page and survives reload, no console errors, the hub card
renders and links correctly, narrow width (~375px) has no horizontal scroll.
Use the Chrome tools only if the user wants a visual check.

## Do not

- Commit or push unless asked (CLAUDE.md).
- Edit `pages/archive/`, `index-old.html`, `*Copy*.html`.
- Strip or rewrite the page's content/claims (Meridian's VERIFIED / INFERRED /
  NOT VERIFIED / DEMO tags are deliberate; keep them).
- Add npm, a bundler or a framework.
- Leave a filename with spaces, or the original untracked copy beside the new one.
- Embed secrets: the page only links to `https://aistudio.google.com/apikey`
  and mentions `http://localhost:8080`; keep it that way.
