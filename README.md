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
│   ├── desh-hindi-typing/  # Hindi typing editor project
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

### Projects (`pages/desh-hindi-typing/`)

| Page | Description |
|------|-------------|
| [desh-hindi-typing/](pages/desh-hindi-typing/index.html) | Desh Hindi Typing — Hinglish → Hindi editor with voice typing and drafts |

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
| [PythonBasics-v1.html](pages/ai-learning/PythonBasics-v1.html) | Pydantic & agents interactive guide |
| [pydantic_app/](pages/pydantic_app/index.html) | Mastering Pydantic — models, validation, settings, structured outputs |
| [python_agents_app/](pages/python_agents_app/index.html) | Agents with just Python — no-framework agent guide |
| [resilient_marzipan_app/](pages/resilient_marzipan_app/index.html) | AI terms glossary — plain-language explanations |
| [SelfAttentionExplainerOffline.html](pages/ai-learning/SelfAttentionExplainerOffline.html) | Self-attention explainer |
| [AI-Enginee-Job-Portals.html](pages/ai-learning/AI-Enginee-Job-Portals.html) | AI engineer job portals directory |
| [rag-architecture.html](pages/ai-learning/rag-architecture.html) | RAG architecture — offline indexing and online query pipelines |
| [vector-store-vs-database.html](pages/ai-learning/vector-store-vs-database.html) | Vector store vs vector database — scale and decision guide |
| [langchain-document-components.html](pages/ai-learning/langchain-document-components.html) | LangChain document model for RAG ingestion |
| [CRAG.html](pages/ai-learning/CRAG.html) | Corrective RAG interactive decision guide |
| [agentic-rag-langgraph-guide.html](pages/ai-learning/agentic-rag-langgraph-guide.html) | Agentic RAG with LangGraph — decide, retrieve, grade, rewrite, generate |
| [ai-ml-systems-part2.html](pages/ai-learning/ai-ml-systems-part2.html) | AI/ML systems — RAG, agents, evaluation, and interview scenarios (Part 2) |

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
