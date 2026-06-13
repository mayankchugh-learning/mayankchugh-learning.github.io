# Mayank Chugh — Portfolio & Learning Site

Personal portfolio and interactive learning site for [Mayank Chugh](https://github.com/mayankchugh-learning): Enterprise Architect, AI Engineer, and GenAI practitioner.

**Live site:** [mayankchugh-learning.github.io](https://mayankchugh-learning.github.io)

## Overview

Static HTML site hosted on GitHub Pages. The main portfolio lives at `index.html`; all other pages are grouped by category under `pages/`.

| Area | Description |
|------|-------------|
| **Portfolio** | Professional profile, experience, projects, and certifications |
| **Migration guides** | Enterprise architecture and data-platform migration playbooks |
| **AI learning** | Interactive tutorials and explainers (LLMs, transformers, Python) |
| **Articles** | Long-form writing |
| **Archive** | Superseded index copies and draft duplicates |

## Project structure

```
.
├── index.html              # Main portfolio (site entry point)
├── pages/
│   ├── portfolio/          # Consulting and professional pages
│   ├── migration/          # Migration guides, proposals, interview prep
│   ├── ai-learning/        # Tutorials and interactive AI content
│   ├── articles/           # Blog and opinion pieces
│   └── archive/            # Old copies and drafts (not linked from index)
├── assets/
│   ├── learning/           # Thumbnail SVGs for learning cards
│   ├── theme-switcher.js   # Shared theme toggle and home navigation
│   └── theme-switcher.css
├── particles/              # Background animation (legacy index-old)
├── style.css               # Legacy stylesheet (archive pages)
└── script.js
```

## Pages by category

### Portfolio (`pages/portfolio/`)

| Page | Description |
|------|-------------|
| [consulting.html](pages/portfolio/consulting.html) | AI consulting and career coaching |

### Migration (`pages/migration/`)

| Page | Description |
|------|-------------|
| [cct_weblogic_jboss_aws_migration_guide.html](pages/migration/cct_weblogic_jboss_aws_migration_guide.html) | WebLogic → JBoss, Oracle → PostgreSQL, on-prem → AWS |
| [cct_migration_guide_v2.html](pages/migration/cct_migration_guide_v2.html) | Expanded CCT migration guide (v2) |
| [d365_migration_guide.html](pages/migration/d365_migration_guide.html) | Dynamics 365 data engineering migration |
| [ssas_migration_proposal.html](pages/migration/ssas_migration_proposal.html) | SSAS multidimensional → Microsoft Fabric proposal |
| [ssas_migration_costing.html](pages/migration/ssas_migration_costing.html) | SSAS migration costing and resourcing |
| [interview_prep_erp_bi.html](pages/migration/interview_prep_erp_bi.html) | ERP, supply chain, and BI modernisation interview prep |

### AI learning (`pages/ai-learning/`)

| Page | Description |
|------|-------------|
| [ai_pioneers_page.html](pages/ai-learning/ai_pioneers_page.html) | AI Pioneers — 8-week GenAI & RAG engineering cohort |
| [claude_code_tutorial.html](pages/ai-learning/claude_code_tutorial.html) | Claude Code beginner's guide |
| [fineTuning.html](pages/ai-learning/fineTuning.html) | Fine-tuning large language models |
| [LLM-Explorer-Standalone.html](pages/ai-learning/LLM-Explorer-Standalone.html) | Interactive LLM explorer |
| [positional_encoding.html](pages/ai-learning/positional_encoding.html) | Positional encoding — in-depth explainer |
| [positional-encoding-standalone.html](pages/ai-learning/positional-encoding-standalone.html) | Positional encoding — standalone demo |
| [PythonBasicsOffline.html](pages/ai-learning/PythonBasicsOffline.html) | Python basics — week 1 interactive guide |
| [SelfAttentionExplainerOffline.html](pages/ai-learning/SelfAttentionExplainerOffline.html) | Self-attention explainer |
| [AI-Enginee-Job-Portals.html](pages/ai-learning/AI-Enginee-Job-Portals.html) | AI engineer job portals directory |

### Articles (`pages/articles/`)

| Page | Description |
|------|-------------|
| [i-stopped-teaching-coding-i-started-teaching-vibe-coding-instead.html](pages/articles/i-stopped-teaching-coding-i-started-teaching-vibe-coding-instead.html) | On teaching vibe coding instead of traditional coding |

## Local development

No build step or dependencies. Serve the repo root with any static file server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Open [http://localhost:8000](http://localhost:8000). Pages under `pages/` use root-absolute asset paths (`/assets/...`, `/index.html`), so serve from the repository root rather than opening HTML files directly in the browser.

## Deployment

Pushes to the default branch deploy automatically via [GitHub Pages](https://pages.github.com/). Only `index.html` must remain at the repo root for the site URL to resolve correctly.

## License

[MIT](LICENSE) — Copyright (c) 2024 Mayank Chugh
