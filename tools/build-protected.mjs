// Usage (PowerShell): $env:ED_PASSWORD='your long passphrase'; node tools/build-protected.mjs
// Encrypts private/<dir>/*.html into the matching public folder (see DIRS)
import { webcrypto as c } from 'node:crypto';
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';

const pw = process.env.ED_PASSWORD;
if (!pw || pw.length < 12) { console.error('Set ED_PASSWORD (min 12 chars).'); process.exit(1); }
const ITER = 600000;
const b64 = (u) => Buffer.from(u).toString('base64');

async function enc(text) {
  const salt = c.getRandomValues(new Uint8Array(16)), iv = c.getRandomValues(new Uint8Array(12));
  const base = await c.subtle.importKey('raw', new TextEncoder().encode(pw), 'PBKDF2', false, ['deriveKey']);
  const key = await c.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: ITER, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt']);
  const ct = await c.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(text));
  return { salt: b64(salt), iv: b64(iv), iter: ITER, ct: b64(new Uint8Array(ct)) };
}

const wrapper = (p) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow"><title>Protected</title>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#151513;color:#ecebe6;font:16px system-ui,sans-serif}main{padding:16px}</style>
</head><body><main><h1 style="font-size:1.2rem">Protected content</h1><div id="gate"></div></main>
<script src="/assets/gate.js"></script>
<script>EDGate.page(${JSON.stringify(p)});</script></body></html>
`;

const DIRS = [
  ['private/reports', 'pages/portfolio'],
  ['private/migration', 'pages/migration'],
  ['private/ai-learning', 'pages/ai-learning'],
  ['private/ai-learning/learn', 'pages/ai-learning/learn'],
  ['private/pages', 'pages'],
];
for (const [src, dst] of DIRS) {
  mkdirSync(dst, { recursive: true });
  for (const f of readdirSync(src).filter((x) => x.endsWith('.html'))) {
    writeFileSync(`${dst}/${f}`, wrapper(await enc(readFileSync(`${src}/${f}`, 'utf8'))));
    console.log('encrypted', `${dst}/${f}`);
  }
}