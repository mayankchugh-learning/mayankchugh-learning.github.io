#!/usr/bin/env node
/**
 * Upsert a DETAIL_HELP entry in Sales_SSBI_Interview_Drill.html
 *
 * Usage:
 *   node add-detail-help.cjs --html path/to/Sales_SSBI_Interview_Drill.html --payload payload.json
 *   node add-detail-help.cjs --html ... --id incident-1 --title "..." --html-file body.html
 *
 * payload.json: { "id": "incident-1", "title": "...", "html": "<h3>...</h3>" }
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
  node add-detail-help.cjs --html <drill.html> --payload <payload.json>
  node add-detail-help.cjs --html <drill.html> --id <cat-idx> --title <title> --html-file <body.html>`);
  process.exit(1);
}

const htmlPath = arg('--html');
if (!htmlPath) usage('Missing --html');

let id = arg('--id');
let title = arg('--title');
let bodyHtml = null;

const payloadPath = arg('--payload');
if (payloadPath) {
  const p = JSON.parse(fs.readFileSync(payloadPath, 'utf8'));
  id = p.id;
  title = p.title;
  bodyHtml = p.html;
}

const htmlFile = arg('--html-file');
if (htmlFile) bodyHtml = fs.readFileSync(htmlFile, 'utf8');

if (!id || !title || bodyHtml == null) usage('Need id, title, and html (via --payload or flags)');

if (!/^[a-z0-9-]+-\d+$/i.test(id)) {
  usage(`Invalid id "${id}" — expected categoryId-index like incident-1`);
}

let file = fs.readFileSync(htmlPath, 'utf8');
const marker = 'const DETAIL_HELP = {';
const start = file.indexOf(marker);
if (start < 0) {
  console.error('DETAIL_HELP object not found in', htmlPath);
  process.exit(1);
}

const after = file.slice(start);
const endMatch = after.match(/\n\};\n\nfunction openDetail/);
if (!endMatch) {
  console.error('Could not locate end of DETAIL_HELP (expected }; before function openDetail)');
  process.exit(1);
}
const objStart = start + marker.length;
const objEnd = start + endMatch.index;
const inner = file.slice(objStart, objEnd);

const normalizedHtml = String(bodyHtml).replace(/\r\n/g, '\n').trim();
if (normalizedHtml.includes('`')) {
  console.error('HTML body must not contain backticks (breaks template literal). Escape or rephrase.');
  process.exit(1);
}

const entry =
  `  "${id}": {\n` +
  `    title: ${JSON.stringify(title)},\n` +
  `    html: \`\n${normalizedHtml}\n\`\n` +
  `  }`;

const keyRe = new RegExp(
  `\\s*"${id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}":\\s*\\{[\\s\\S]*?\\n  \\}(,)?`
);

let newInner;
if (keyRe.test(inner)) {
  newInner = inner.replace(keyRe, '\n' + entry + '$1');
  console.log('Updated existing entry', id);
} else {
  const trimmed = inner.replace(/\s*$/, '');
  let prefix = trimmed;
  if (prefix.trim().length && !prefix.trimEnd().endsWith(',')) {
    prefix = prefix.replace(/\}\s*$/, '},\n');
  } else if (prefix.trim().length && !prefix.endsWith('\n')) {
    prefix += '\n';
  }
  newInner = prefix + entry + '\n';
  console.log('Inserted new entry', id);
}

file = file.slice(0, objStart) + newInner + file.slice(objEnd);
fs.writeFileSync(htmlPath, file);
console.log('Wrote', path.resolve(htmlPath));
