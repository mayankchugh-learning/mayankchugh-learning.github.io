---
name: mayank-ea-governance-youtube
description: >
  Mayank Chugh's Enterprise Architecture / IT Governance / M&A / Enterprise AI
  YouTube channel — a separate, standalone channel (working name "The Control
  Tower," pending final confirmation) distinct from his existing AI/RAG channel
  (@itaienthusiast). Trigger IMMEDIATELY whenever Mayank references a video by
  playlist/number (e.g. "let's do 2.3", "script video 4.1"), says things like
  "next video for the EA channel", "generate the PPT for [topic]", "continue the
  playlist", or asks to add/reorder/create a new video in this content series.
  This skill removes the need to re-explain the channel structure, playlist
  plan, branding rules, or honesty guardrails each time — it already has them.
---

# EA / IT Governance / M&A / Enterprise AI YouTube Channel

## Channel context (don't ask Mayank to re-explain this)

**Standalone channel**, separate from @itaienthusiast (his existing AI/Cloud/
hands-on channel) — not a pillar or playlist within it. Working name: "The
Control Tower" (chosen for the aviation/control-tower analogy already used
throughout the content; confirm with Mayank if this has been finalized before
citing it as settled). Five playlists, 27 videos total, sequenced beginner →
advanced within each playlist. Full plan lives in
`YouTube_Channel_Playlist_Plan_EA_AI_MA_Governance.md` and the per-video
generation prompts live in `Video_Content_Generation_Prompts.md` — check past
chats / project files for these if not already in context.

Because this is a separate channel, not a shared-channel pillar, any script
language that assumes a viewer can casually browse from one to the other
(e.g. "check the AI playlist on this channel") should instead read as
cross-channel cross-promotion (e.g. "I cover this in more depth on my other
channel, @itaienthusiast" with a description-box link) — most relevant to
videos 4.1 and 4.5, which were written as bridge content between the two
audiences.

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
to re-paste it. Cross-check the brief against the corrected honesty guardrails
below before generating, since several original prompts (2.3, 2.6 especially)
were written before real M&A-adjacent experience was confirmed and need the
updated framing applied, not the original prompt text verbatim.

## Standing rules for every video in this series (apply without being asked)

**Branding — two distinct assets, don't conflate them:**
- **Channel identity** (logo/banner, used once for the channel itself, not per-video): `Channel_Logo_ProfilePicture_800x800.png` and `Channel_Banner_2560x1440.png` — real photo, navy/gold, control-tower motif. These are channel-level assets, not something to re-embed in every video's content.
- **Per-video/per-post personal credibility badge**: `Mayank_Chugh_Branding_Badge_ITGovernance.png` (Enterprise Architect · TOGAF 9.2 · IT Governance · M&A) for Playlists 1, 2, 3, 5, and `Mayank_Chugh_Branding_Badge.png` (AI Engineer · Azure · GenAI · RAG) for Playlist 4 — these go on individual LinkedIn posts, thumbnails, or slide decks tied to a specific video/topic.
- If a video genuinely bridges both (e.g. 4.1, 4.5), default to the AI badge since it lives in Playlist 4, but note the crossover explicitly in the video description and mention @itaienthusiast by name.

**Visual reuse:** Videos 2.1–2.5, 3.1, and 3.2 each map to an existing LinkedIn
infographic prompt (from the M&A/PMI infographic prompts file). Reuse that
visual as on-screen support material — don't rebuild slides from scratch for
concepts that already have a designed visual.

**Honesty guardrails — carry through automatically, don't wait to be reminded. UPDATED — read carefully, this changed from the original plan:**
- Never claim enterprise-production-scale AI/RAG deployment; Mayank's AI work is
  self-directed/portfolio-scale (HireIQ, Document Audit RAG, Your Best Friend AI).
  Frame it as such on camera, not just in writing.
- Never claim LangGraph, AutoGen, or other orchestration frameworks Mayank hasn't
  used — his real stack is CrewAI.
- **M&A/PMI experience — CORRECTED, no longer "no real experience":** Mayank has
  real vendor-side M&A/merger-adjacent experience: (1) Asia Airfreight Terminal
  (AAT) account, Feb 2014–Oct 2018, vendor-side PM and Solution Architect — owned
  a 1-month, 24/7 final cutover/merge, resolving major post-merger client-
  operations issues within SLA and ahead of schedule; (2) HSBC-AXA merger
  workshops, Capgemini, 2022-2023 — vendor-side stakeholder workshops with AXA,
  proposing solutions into the merger context; (3) ongoing IT governance since
  2014 across AAT and Cathay Pacific Cargo Terminal — integrating new IT
  solutions whenever a new airline customer joins terminal operations, and
  decommissioning systems when one exits — sustained retain/replace/decommission
  governance, not a one-time event. What's genuinely still new to him is the
  formal consulting-firm PMI methodology and TSA/Day-1-close vocabulary
  specifically, not the underlying work. **Video 2.6's premise needs updating
  accordingly** — the original prompt framed it as "I haven't done this before";
  the accurate version is "I've done the real work under different labels, here's
  what's genuinely new vocabulary versus what transfers directly," with the AAT
  and ongoing-governance stories as the concrete anchors. Video 2.3 (Retain/
  Replace/Decommission) can now also cite the ongoing AAT/Cathay governance work
  as a stronger, more direct real-world example than the CHANEL migration alone.
- No ITIL certification, no insurance/asset-management domain depth — these
  remain genuinely studied-but-not-lived; keep that honesty as originally
  planned in videos 3.2, 3.5, and 5.1.
- The Qlik Replicate D365→Azure SQL migration is a CHANEL example, not HSBC —
  if a video references it, get this right.
- Client names, when mentioned in career-narrative videos, should be introduced
  as "an account I worked while at [employer]" rather than implying direct
  employment by the client.
- "100+" for YouTube tutorial count if the video references channel stats.
- **Corrected career dates** for any video touching career chronology (5.1, 5.2
  especially): British Airways account is Nov 2012–Jan 2014 (not Oct 2012);
  Marks & Spencer account is May–Oct 2004 (not through Dec 2005, a ~5-month
  engagement not 19 months); Invisible Hand (Japan), a Coforge client, ran
  Oct 2004–Dec 2005, web-marketing-related, filling what was previously an
  unaccounted gap; the first AAT stint (development team, not PM/SA) ran
  Dec 2005–May 2008, before the later 2014–2018 PM/Solution Architect stint.

**Tone calibration by playlist:**
- Playlist 1: mentoring, practical, assumes no prior knowledge.
- Playlist 2: explainer/analogy-driven for 2.1–2.5; first-person and reflective
  for 2.6 — now a "here's real experience I initially undersold, and here's
  what's genuinely still new to me" story, not a "here's a gap I have" story.
- Playlist 3: "humble-expert" — teach literacy, be explicit about the boundary of that literacy, especially for 3.5.
- Playlist 4: bridge-audience-aware — should welcome viewers from either channel, and explicitly name @itaienthusiast as the other channel since they're no longer the same channel.
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
  explicitly asks for a revision — treat those as stable references, except
  where this file's corrections above override specific stale content (2.3,
  2.6, 5.1, 5.2 as noted).
- Don't fabricate video content beyond what's in the relevant prompt's talking
  points; if a video needs a specific personal story (5.2) or real viewer
  questions (5.5) that aren't yet provided, ask for that specific missing input
  rather than inventing one.
- Don't refer to this as a "pillar" or "playlist" on @itaienthusiast — it's a
  separate channel. Cross-promotion between the two is fine and expected;
  implying shared-channel navigation is not accurate.
