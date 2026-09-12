import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '../../..');
const SRC = path.join(REPO, 'Infographics_prompts');
const OUT = __dirname;
const PASS = process.argv[2];
if (!PASS) {
  console.error('Usage: node _generate.mjs <passphrase>');
  process.exit(1);
}

const SKIP_FILES = new Set([
  'MA_PMI_Learning_Infographic_Prompts_old.md',
  'mayank-ea-governance-youtube-SKIL-oldL.md'
]);

const META = {
  'API_Infographic_Prompts.md': { tag: 'API', kind: 'infographic', blurb: 'Twenty copy-paste API infographic prompts across Azure, AWS, and GCP.' },
  'Cloud_Agnostic_Infographic_Prompts.md': { tag: 'Cloud', kind: 'infographic', blurb: 'AWS vs Azure vs GCP comparison prompts for core cloud building blocks.' },
  'Data_Migration_Infographic_Prompts.md': { tag: 'Migration', kind: 'infographic', blurb: 'Scope, test lifecycle, and staffing patterns for cloud data migrations.' },
  'EA_Field_Notes_Infographic_Prompts.md': { tag: 'EA', kind: 'infographic', blurb: 'Field-notes series: certification, capability map, and lived delivery stories.' },
  'FinOps_Infographic_Prompts.md': { slug: 'finops-infographic-prompts', tag: 'FinOps', kind: 'infographic', blurb: 'FinOps prompts for AWS, Azure, and GCP plus service-level best practices.' },
  'JD_Runbook_and_Checklist.md': { tag: 'Career', kind: 'runbook', blurb: 'Intake-to-application runbook for job descriptions.' },
  'MA_PMI_Learning_Infographic_Prompts.md': { tag: 'M&A', kind: 'infographic', blurb: 'M&A / PMI / IT governance prompts — TSA, retain-replace, COBIT, ITIL, AI tiers.' },
  'MA_PMI_Learning_Infographic_Prompts_Batch2.md': { tag: 'M&A', kind: 'infographic', blurb: 'Batch 2: TOGAF ADM, TOM, scoring, SLA/RPO/RTO, AI FinOps, Shadow AI.' },
  'PM_Governance_Infographic_Prompts.md': { tag: 'PM', kind: 'infographic', blurb: 'Project lifecycle, endorsement, timesheets, procurement, and RACI prompts.' },
  'Video_Content_Generation_Prompts.md': { tag: 'Video', kind: 'video', blurb: 'Seven-file video generation prompts for the five-playlist EA / AI / M&A channel.' },
  'Video_Prompt_Head_of_AI.md': { tag: 'Video', kind: 'video', blurb: 'Head of AI video prompt that opens the org-roles playlist.' },
  'YouTube_Channel_Playlist_Plan_EA_AI_MA_Governance.md': { slug: 'youtube-channel-playlist-plan', tag: 'YouTube', kind: 'plan', blurb: 'Five-playlist channel plan for EA, M&A, governance, and field notes.' },
  'mcp-infographic-series.md': { tag: 'MCP', kind: 'infographic', blurb: 'Host → Client → Server series for LinkedIn and YouTube Shorts.' },
  'mcp-primitives-deep-dive-series.md': { tag: 'MCP', kind: 'infographic', blurb: 'Deep-dive primitives series: tools, resources, prompts, and analogies.' },
  'mcp-primitives-infographic-series.md': { tag: 'MCP', kind: 'infographic', blurb: 'Twelve-part MCP primitives map, roots, sampling, and cheat sheet.' },
  'self-learning-infographic-prompts.md': { tag: 'Frameworks', kind: 'infographic', blurb: 'TOGAF, COBIT, and ITIL carousel / Shorts prompt pack.' },
  '01-Video-Notes.md': { tag: 'Video', kind: 'notes', blurb: 'Shooting notes for the Enterprise Architect intro video.' },
  '03-Medium-Blog-Post.md': { tag: 'Writing', kind: 'notes', blurb: 'Medium post: what an Enterprise Architect actually does.' },
  '04-LinkedIn-Post.md': { slug: '04-linkedin-post', tag: 'LinkedIn', kind: 'notes', blurb: 'LinkedIn launch post for the EA intro video.' },
  '06-Notebook-Narration-Script.md': { tag: 'Video', kind: 'notes', blurb: 'Cell-by-cell narration for the companion notebook.' },
  '07-Full-Transcript.md': { tag: 'Video', kind: 'notes', blurb: 'Full slide transcript for the EA intro video.' },
  'mayank-ea-governance-youtube-SKILL.md': { tag: 'Skill', kind: 'skill', blurb: 'Standing rules for generating EA / governance YouTube content.' }
};

const SKIP_HEADINGS = new Set([
  'usage tips',
  'how to use this file',
  'how to use this file going forward',
  'shared series template',
  'global design system — use for every infographic',
  'global visual style — apply to all infographics',
  'series-wide technical accuracy rules',
  'recommended publishing sequence',
  'recommended youtube shorts sequence',
  '🎬 recommended youtube shorts sequence',
  'linkedin publishing order',
  '📋 linkedin publishing order',
  'consistency rule for the entire series',
  'suggested batch production order',
  'suggested posting order',
  'suggested launch order',
  'branding note',
  'next step',
  'sequencing note',
  'posting notes',
  'deliberately not included',
  'two prompts i did not write',
  'series summary',
  'channel context (don\'t ask mayank to re-explain this)',
  'when mayank references a video',
  'standing rules for every video in this series (apply without being asked)',
  'handling new videos not yet in the plan',
  'what not to do',
  'prompt',
  'posting order suggestion',
  'togaf series (4 parts)',
  'cobit series (4 parts)',
  'itil series (4 parts)',
  'bonus: youtube shorts voiceover script prompt',
  'part 1 — the runbook',
  'part 2 — the checklist'
]);

function kebab(name) {
  return name.replace(/\.md$/i, '').replace(/_/g, '-').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

function slugify(text) {
  return String(text)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80) || 'item';
}

function escapeHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function inlineFormat(text) {
  let s = escapeHtml(text);
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  return s;
}

function isTrackable(level, title, kind) {
  const t = title.toLowerCase().trim();
  if (SKIP_HEADINGS.has(t)) return false;
  if (t.startsWith('playlist ') && level === 2 && kind === 'video') return false;
  if (level === 2) {
    if (/^\d+([\.\)]|\s)/.test(t)) return true;
    if (/^infographic\s+\d+/.test(t)) return true;
    if (/^prompt\s+\d+/.test(t)) return true;
    if (t.startsWith('playlist ') && kind === 'plan') return true;
  }
  if (level === 3) {
    if (/^prompt\s+\d+/.test(t)) return true;
    if (/^slide\s+\d+/.test(t)) return true;
    if (/^\d+\.\d+/.test(t)) return true;
    if (/^\d+[a-c][\.\)]/i.test(t)) return true;
  }
  return false;
}

function shareBar(id) {
  return (
    `<div class="share-bar" data-item-id="${escapeHtml(id)}">` +
      '<span class="share-label">Shared?</span>' +
      '<label class="share-check li"><input type="checkbox" data-channel="linkedin"> LinkedIn</label>' +
      '<label class="share-check yt"><input type="checkbox" data-channel="youtube"> YouTube Short</label>' +
    '</div>'
  );
}

function mdToHtml(md, fileSlug, kind, itemsOut) {
  const usedAnchors = new Set();
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const html = [];
  let i = 0;
  let inList = null;

  function closeList() {
    if (inList) {
      html.push(inList === 'ol' ? '</ol>' : '</ul>');
      inList = null;
    }
  }

  function uniqueAnchor(base) {
    let a = base;
    let n = 2;
    while (usedAnchors.has(a)) {
      a = base + '-' + n;
      n += 1;
    }
    usedAnchors.add(a);
    return a;
  }

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('```')) {
      closeList();
      const fence = [];
      i += 1;
      while (i < lines.length && !lines[i].startsWith('```')) {
        fence.push(lines[i]);
        i += 1;
      }
      i += 1;
      html.push(
        '<div class="prompt-block"><div class="prompt-toolbar"><button type="button" class="copy-btn">Copy prompt</button></div>' +
        '<pre><code>' + escapeHtml(fence.join('\n')) + '</code></pre></div>'
      );
      continue;
    }

    if (/^---+\s*$/.test(line)) {
      closeList();
      html.push('<hr>');
      i += 1;
      continue;
    }

    const heading = /^(#{1,4})\s+(.+)$/.exec(line);
    if (heading) {
      closeList();
      const level = heading[1].length;
      const title = heading[2].trim();
      const anchor = uniqueAnchor(slugify(title));
      const track = isTrackable(level, title, kind);
      html.push(`<h${level} id="${anchor}">${inlineFormat(title)}</h${level}>`);
      if (track) {
        const id = fileSlug + '::' + anchor;
        itemsOut.push({ id, title, anchor });
        html.push(shareBar(id));
      }
      i += 1;
      continue;
    }

    if (/^>\s?/.test(line)) {
      closeList();
      const quote = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        quote.push(lines[i].replace(/^>\s?/, ''));
        i += 1;
      }
      html.push('<blockquote>' + inlineFormat(quote.join(' ')) + '</blockquote>');
      continue;
    }

    const ul = /^[-*]\s+(.+)$/.exec(line);
    if (ul) {
      if (inList !== 'ul') {
        closeList();
        html.push('<ul>');
        inList = 'ul';
      }
      html.push('<li>' + inlineFormat(ul[1]) + '</li>');
      i += 1;
      continue;
    }

    const ol = /^\d+\.\s+(.+)$/.exec(line);
    if (ol) {
      if (inList !== 'ol') {
        closeList();
        html.push('<ol>');
        inList = 'ol';
      }
      html.push('<li>' + inlineFormat(ol[1]) + '</li>');
      i += 1;
      continue;
    }

    if (!line.trim()) {
      closeList();
      i += 1;
      continue;
    }

    closeList();
    const para = [line];
    i += 1;
    while (i < lines.length && lines[i].trim() && !/^(#{1,4}\s|```|---+\s*$|[-*]\s|\d+\.\s|>)/.test(lines[i])) {
      para.push(lines[i]);
      i += 1;
    }
    html.push('<p>' + inlineFormat(para.join(' ')) + '</p>');
  }
  closeList();
  return html.join('\n');
}

function encrypt(text) {
  const key = crypto.createHash('sha256').update(PASS).digest();
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  const enc = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, enc, tag]).toString('base64');
}

function pageTemplate({ slug, title, description, payload }) {
  return `<!DOCTYPE html>
<html lang="en" data-page="infographic-studio">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <script src="../../../assets/theme-switcher.js"></script>
  <title>${escapeHtml(title)} — Mayank Chugh</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&amp;family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&amp;display=swap" rel="stylesheet">
  <link rel="stylesheet" href="studio.css">
  <link rel="stylesheet" href="../../../assets/theme-switcher.css">
</head>
<body>
  <div id="access-gate">
    <div class="gate-card">
      <div class="gate-kicker">Private studio</div>
      <h1>Unlock this page</h1>
      <p>This generated prompt page is locked. Use the same studio passphrase as the catalog.</p>
      <form id="gate-form">
        <input type="password" id="gate-pass" autocomplete="current-password" placeholder="Passphrase" aria-label="Passphrase">
        <button type="submit">Unlock</button>
      </form>
      <div class="gate-error" id="gate-error" aria-live="polite"></div>
    </div>
  </div>
  <div id="protected-content" hidden>
    <header class="studio-top">
      <div class="studio-top-inner">
        <a class="studio-brand" href="index.html">MC<span>.</span> Studio</a>
        <nav class="studio-nav">
          <a href="index.html">All prompts</a>
          <a href="../index.html">Learning Hub</a>
        </nav>
      </div>
    </header>
    <main class="wrap wrap-article">
      <p class="page-kicker">${escapeHtml(slug)}</p>
      <article class="md-body" id="article-body"></article>
    </main>
  </div>
  <script>window.STUDIO_PAYLOAD = ${JSON.stringify(payload)};</script>
  <script src="studio.js"></script>
  <script>InfographicStudio.initArticle();</script>
</body>
</html>
`;
}

function firstHeading(md) {
  const m = /^#\s+(.+)$/m.exec(md);
  return m ? m[1].trim() : 'Untitled';
}

const files = fs.readdirSync(SRC).filter((f) => f.endsWith('.md') && !SKIP_FILES.has(f)).sort();
const collections = [];
const items = [];

for (const file of files) {
  const md = fs.readFileSync(path.join(SRC, file), 'utf8');
  const meta = META[file] || { tag: 'Notes', kind: 'notes', blurb: firstHeading(md) };
  const slug = meta.slug || kebab(file);
  const title = firstHeading(md);
  const extracted = [];
  const body = mdToHtml(md, slug, meta.kind, extracted);
  if (!extracted.length) {
    const anchor = slugify(title);
    const id = slug + '::' + anchor;
    extracted.push({ id, title, anchor });
  }
  const htmlBody = (
    body.includes('data-item-id="' + extracted[0].id + '"')
      ? body
      : shareBar(extracted[0].id) + body
  );

  const href = slug + '.html';
  fs.writeFileSync(path.join(OUT, href), pageTemplate({
    slug,
    title,
    description: meta.blurb,
    payload: encrypt(htmlBody)
  }), 'utf8');

  collections.push({
    id: slug,
    title,
    tag: meta.tag,
    kind: meta.kind,
    href,
    source: file,
    blurb: meta.blurb,
    itemCount: extracted.length
  });
  for (const item of extracted) {
    items.push({
      id: item.id,
      title: item.title,
      anchor: item.anchor,
      collectionId: slug,
      collectionTitle: title,
      tag: meta.tag,
      href
    });
  }
  console.log(file + ' → ' + href + ' (' + extracted.length + ' items)');
}

const catalog = { collections, items, generatedAt: new Date().toISOString() };
fs.writeFileSync(
  path.join(OUT, 'catalog.enc.js'),
  'window.STUDIO_CATALOG_ENC = ' + JSON.stringify(encrypt(JSON.stringify(catalog))) + ';\n',
  'utf8'
);
console.log('Wrote catalog.enc.js with ' + items.length + ' items across ' + collections.length + ' collections');
