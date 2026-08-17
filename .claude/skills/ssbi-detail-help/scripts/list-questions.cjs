#!/usr/bin/env node
/**
 * List CATEGORIES questions with ids (categoryId-index) for the SSBI drill.
 * Usage: node list-questions.cjs path/to/Sales_SSBI_Interview_Drill.html [--filter text]
 */
const fs = require('fs');

const htmlPath = process.argv[2];
const filterIdx = process.argv.indexOf('--filter');
const filter = filterIdx >= 0 ? process.argv[filterIdx + 1] : null;

if (!htmlPath) {
  console.error('Usage: node list-questions.cjs <Sales_SSBI_Interview_Drill.html> [--filter text]');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
const m = html.match(/const CATEGORIES = (\[[\s\S]*?\]);/);
if (!m) {
  console.error('CATEGORIES not found');
  process.exit(1);
}
const CATEGORIES = JSON.parse(m[1]);

const helpIds = new Set();
const hm = html.match(/const DETAIL_HELP = \{([\s\S]*?)\n\};\n\nfunction openDetail/);
if (hm) {
  for (const k of hm[1].matchAll(/"([^"]+)":\s*\{/g)) helpIds.add(k[1]);
}

const q = (filter || '').toLowerCase();
let total = 0;
for (const cat of CATEGORIES) {
  cat.questions.forEach((item, idx) => {
    total += 1;
    const id = cat.id + '-' + idx;
    if (q && !item.q.toLowerCase().includes(q) && !cat.name.toLowerCase().includes(q) && !id.includes(q)) {
      return;
    }
    const flag = helpIds.has(id) ? '[has detail]' : '[         ]';
    console.log(`${flag} ${id}\tQ${idx + 1}\t${cat.name}\t${item.q.slice(0, 90)}`);
  });
}
console.error(`${CATEGORIES.length} categories, ${total} questions, ${helpIds.size} with detail help`);
