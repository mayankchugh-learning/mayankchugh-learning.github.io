---
name: mayank-ea-governance-youtube
description: >
  Mayank Chugh's Enterprise Architecture / IT Governance / M&A / Enterprise AI
  YouTube content pillar — a second pillar alongside his existing AI/RAG channel
  (@itaienthusiast). Trigger IMMEDIATELY whenever Mayank references a video by
  playlist/number (e.g. "let's do 2.3", "script video 4.1"), says things like
  "next video for the EA channel", "generate the PPT for [topic]", "continue the
  playlist", or asks to add/reorder/create a new video in this content series.
  This skill removes the need to re-explain the channel structure, playlist
  plan, branding rules, or honesty guardrails each time — it already has them.
---

# EA / IT Governance / M&A / Enterprise AI YouTube Channel

## Channel context (don't ask Mayank to re-explain this)

Second content pillar on @itaienthusiast, alongside his existing AI/RAG/LLM
content. Five playlists, 27 videos total, sequenced beginner → advanced within
each playlist. Full plan lives in `YouTube_Channel_Playlist_Plan_EA_AI_MA_Governance.md`
and the per-video generation prompts live in `Video_Content_Generation_Prompts.md`
— check past chats / project files for these if not already in context.

**Playlists:**
1. Enterprise Architecture Fundamentals (6 videos) — TOGAF, TOM, SA vs EA, diagram literacy, RFQ/RFP
2. M&A & Post-Merger IT Integration (6 videos) — three M&A phases, TSA, Retain/Replace/Decommission, Day-1/Day-2/Target State, dependency mapping, personal honesty episode
3. IT Governance for Architects (5 videos) — COBIT, ITIL, TOGAF-COBIT bridge, SLA/RPO/RTO, security/compliance literacy
4. Enterprise AI Governance (5 videos) — AI tiers, AI FinOps, Shadow AI, AI Acceptable Use Policy, RAG at enterprise scale
5. Real Career & Field Notes (5 videos) — cross-industry transfer, personal retrospective, interview prep, JD-reading, recurring Q&A

## When Mayank references a video

He may say "video 2.3", "the retain/replace one", "next in the M&A playlist",
or just "next video" (meaning the next unproduced one in launch order). Resolve
to the specific video using the playlist plan; if genuinely ambiguous, ask which
one rather than guessing.

Once resolved, generate all seven content files per the existing
`mayank-youtube-content` pipeline (PPTX with speaker-note scripts, Notes MD,
DOCX improvements guide, Medium blog post, LinkedIn post, Jupyter notebook,
cell-by-cell narration script) using that video's specific prompt from
`Video_Content_Generation_Prompts.md` as the content brief — don't ask Mayank
to re-paste it.

## Standing rules for every video in this series (apply without being asked)

**Branding:**
- Playlists 1, 2, 3, 5 → `Mayank_Chugh_Branding_Badge_ITGovernance.png` (Enterprise Architect · TOGAF 9.2 · IT Governance · M&A)
- Playlist 4 → `Mayank_Chugh_Branding_Badge.png` (AI Engineer · Azure · GenAI · RAG)
- If a video genuinely bridges both (e.g. 4.1, 4.5), default to the AI badge since it lives in Playlist 4, but note the crossover explicitly in the video description.

**Visual reuse:** Videos 2.1–2.5, 3.1, and 3.2 each map to an existing LinkedIn
infographic prompt (from the M&A/PMI infographic prompts file). Reuse that
visual as on-screen support material — don't rebuild slides from scratch for
concepts that already have a designed visual.

**Honesty guardrails — carry through automatically, don't wait to be reminded:**
- Never claim enterprise-production-scale AI/RAG deployment; Mayank's AI work is
  self-directed/portfolio-scale (HireIQ, Document Audit RAG, Your Best Friend AI).
  Frame it as such on camera, not just in writing.
- Never claim LangGraph, AutoGen, or other orchestration frameworks Mayank hasn't
  used — his real stack is CrewAI.
- Never claim formal M&A/PMI engagement experience, ITIL certification, or
  insurance/asset-management domain depth — these are explicitly named as
  studied-but-not-lived in videos 2.6, 3.2, 3.5, and 5.1. Keep that honesty
  consistent in any other video that touches these topics.
- The Qlik Replicate D365→Azure SQL migration is a CHANEL example, not HSBC —
  if a video references it, get this right.
- Client names, when mentioned in career-narrative videos, should be introduced
  as "an account I worked while at [employer]" rather than implying direct
  employment by the client.
- "100+" for YouTube tutorial count if the video references channel stats.

**Tone calibration by playlist:**
- Playlist 1: mentoring, practical, assumes no prior knowledge.
- Playlist 2: explainer/analogy-driven for 2.1–2.5; first-person and vulnerable for 2.6.
- Playlist 3: "humble-expert" — teach literacy, be explicit about the boundary of that literacy, especially for 3.5.
- Playlist 4: bridge-audience-aware — should welcome viewers from either the AI or EA side of the channel.
- Playlist 5: reflective/mentoring for 5.1–5.3, practical tool-teaching for 5.4, conversational for 5.5.

## Handling new videos not yet in the plan

If Mayank wants to add a video not in the original 27, ask which playlist it
belongs to (or suggest one based on topic), then build a prompt for it in the
same style as the existing ones — talking points, target length, audience,
branding, tone — before generating content, so the new video stays consistent
with the rest of the series rather than drifting in format.

## What NOT to do

- Don't ask Mayank to restate the channel's purpose, playlist structure, or
  honesty rules — that's what this skill file is for.
- Don't regenerate the full playlist plan or infographic prompts unless he
  explicitly asks for a revision — treat those as stable references.
- Don't fabricate video content beyond what's in the relevant prompt's talking
  points; if a video needs a specific personal story (5.2) or real viewer
  questions (5.5) that aren't yet provided, ask for that specific missing input
  rather than inventing one.
