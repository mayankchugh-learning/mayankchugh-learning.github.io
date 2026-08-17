#!/usr/bin/env node
/**
 * Append a Q&A to CATEGORIES in Sales_SSBI_Interview_Drill.html and refresh counts.
 *
 * Usage:
 *   node add-question.cjs --html path/to/Sales_SSBI_Interview_Drill.html --payload payload.json
 *   node add-question.cjs --html ... --hub pages/learning/index.html --payload payload.json
 *
 * payload.json:
 *   { "category": "fabric-deep", "q": "...", "a": "..." }
 *   { "newCategory": { "id": "foo", "name": "Foo", "color": "065A82" }, "q": "...", "a": "..." }
 */
const fs = require('fs');
const path = require('path');

function arg(name) {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : null;
}

function usage(msg) {
  if (msg) console.error(msg);
  console.error(`Usage:
  node add-question.cjs --html <drill.html> [--hub <learning/index.html>] --payload <payload.json>`);
  process.exit(1);
}

const htmlPath = arg('--html');
const hubPath = arg('--hub');
const payloadPath = arg('--payload');
if (!htmlPath || !payloadPath) usage('Need --html and --payload');

const payload = JSON.parse(fs.readFileSync(payloadPath, 'utf8'));
const q = (payload.q || '').trim();
const a = (payload.a || '').trim();
if (!q || !a) usage('payload needs q and a');

let html = fs.readFileSync(htmlPath, 'utf8');
const m = html.match(/const CATEGORIES = (\[[\s\S]*?\]);/);
if (!m) {
  console.error('CATEGORIES not found');
  process.exit(1);
}

const CATEGORIES = JSON.parse(m[1]);
let categoryId = payload.category;

if (payload.newCategory) {
  const nc = payload.newCategory;
  if (!nc.id || !nc.name || !nc.color) usage('newCategory needs id, name, color');
  if (!/^[a-z0-9-]+$/.test(nc.id)) usage('newCategory.id must be kebab-case');
  if (CATEGORIES.some((c) => c.id === nc.id)) usage(`category ${nc.id} already exists`);
  CATEGORIES.push({
    id: nc.id,
    name: nc.name,
    color: String(nc.color).replace(/^#/, ''),
    questions: [],
  });
  categoryId = nc.id;
}

if (!categoryId) usage('Need category or newCategory');

const cat = CATEGORIES.find((c) => c.id === categoryId);
if (!cat) usage(`Unknown category "${categoryId}"`);

const dup = cat.questions.find((item) => item.q === q);
if (dup) {
  console.error('Question already exists in', categoryId);
  process.exit(1);
}

cat.questions.push({ q, a });
const newId = categoryId + '-' + (cat.questions.length - 1);
const total = CATEGORIES.reduce((sum, c) => sum + c.questions.length, 0);
const catCount = CATEGORIES.length;

html = html.replace(/const CATEGORIES = \[[\s\S]*?\];/, 'const CATEGORIES = ' + JSON.stringify(CATEGORIES) + ';');

html = html.replace(
  /\d+ interview questions across/,
  total + ' interview questions across'
);
html = html.replace(
  /\d+ practiced answers —/,
  total + ' practiced answers —'
);
html = html.replace(
  /0 \/ \d+ reviewed/,
  '0 / ' + total + ' reviewed'
);
html = html.replace(
  /\d+ questions · \d+ categories/,
  total + ' questions · ' + catCount + ' categories'
);

fs.writeFileSync(htmlPath, html);
console.log('Appended', newId);
console.log('Totals:', catCount, 'categories,', total, 'questions');
console.log('Wrote', path.resolve(htmlPath));

if (hubPath && fs.existsSync(hubPath)) {
  let hub = fs.readFileSync(hubPath, 'utf8');
  hub = hub.replace(
    />\d+ Qs</,
    '>' + total + ' Qs<'
  );
  hub = hub.replace(
    /\d+ practiced answers —/,
    total + ' practiced answers —'
  );
  fs.writeFileSync(hubPath, hub);
  console.log('Updated hub counts in', path.resolve(hubPath));
}
