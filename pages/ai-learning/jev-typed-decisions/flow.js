/* Small toolkit: animated SVG pipeline, race lanes, donut chart, number tween. No dependencies. */
const NS = "http://www.w3.org/2000/svg";
const el = (tag, attrs = {}, parent) => {
  const n = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
  parent?.appendChild(n);
  return n;
};
// Colours are CSS variables so the diagrams follow the light/dark theme.
const COLORS = { jev: "var(--accent)", io: "var(--muted)", llm: "var(--muted)", good: "var(--pos)", code: "var(--k1)", light: "var(--k2)", standard: "var(--k1)", frontier: "var(--k5)", haiku: "var(--k2)", sonnet: "var(--k1)", opus: "var(--k5)", kimiK26: "var(--k2)", kimiK3: "var(--k5)" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * spec: { w, h, nodes: [{id, x, y, label, sub, color, w?, h?}], edges: [{from, to, dashed?, label?}] }
 * Nodes are centred on (x, y). Edges run from the right side of `from` to the left side of `to`.
 */
export class Flow {
  constructor(host, spec) {
    this.nodes = {}; this.edges = {};
    host.innerHTML = "";
    const svg = el("svg", { viewBox: `0 0 ${spec.w} ${spec.h}`, class: "flow" }, host);
    this.svg = svg;
    const edgeLayer = el("g", {}, svg), nodeLayer = el("g", {}, svg);
    this.packets = el("g", {}, svg);
    for (const n of spec.nodes) {
      const w = n.w ?? 150, h = n.h ?? 54;
      const g = el("g", { class: "node", style: `--nc:${COLORS[n.color] ?? n.color ?? COLORS.io}` }, nodeLayer);
      el("rect", { x: n.x - w / 2, y: n.y - h / 2, width: w, height: h, rx: 13 }, g);
      el("text", { class: "l", x: n.x, y: n.y - (n.sub ? 4 : -5) }, g).textContent = n.label;
      const s = el("text", { class: "s", x: n.x, y: n.y + 15 }, g);
      s.textContent = n.sub ?? "";
      this.nodes[n.id] = { ...n, w, h, g, s, sub0: n.sub ?? "" };
    }
    for (const e of spec.edges) {
      const a = this.nodes[e.from], b = this.nodes[e.to];
      const x1 = a.x + a.w / 2, y1 = a.y, x2 = b.x - b.w / 2, y2 = b.y, mx = (x1 + x2) / 2;
      const p = el("path", { d: `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`, class: "edge" + (e.dashed ? " dashed" : "") }, edgeLayer);
      if (e.label) el("text", { class: "elabel", x: mx, y: (y1 + y2) / 2 - 8 }, edgeLayer).textContent = e.label;
      this.edges[`${e.from}>${e.to}`] = { path: p, ...e };
    }
  }
  stopTimers() { for (const iv of this.ivs ?? []) clearInterval(iv); this.ivs?.clear(); }
  reset() {
    this.stopTimers();
    for (const n of Object.values(this.nodes)) { n.g.setAttribute("class", "node"); n.s.textContent = n.sub0; }
    for (const e of Object.values(this.edges)) e.path.setAttribute("class", "edge" + (e.dashed ? " dashed" : ""));
    this.packets.innerHTML = "";
  }
  state(id, cls, sub) {
    const n = this.nodes[id];
    n.g.setAttribute("class", "node " + (cls ?? ""));
    if (sub != null) n.s.textContent = sub;
  }
  dim(id) { this.nodes[id].g.classList.add("dim"); }
  edge(from, to, cls, color) {
    const e = this.edges[`${from}>${to}`];
    e.path.setAttribute("class", "edge " + (cls ?? "") + (e.dashed ? " dashed" : ""));
    if (color) e.path.style.setProperty("--ec", COLORS[color] ?? color);
  }
  /** Ticks a live "123 ms" counter on a node; returns stop(finalText). */
  timer(id, prefix = "") {
    const t0 = performance.now();
    this.state(id, "active", prefix + "0 ms");
    const iv = setInterval(() => (this.nodes[id].s.textContent = `${prefix}${Math.round(performance.now() - t0)} ms`), 40);
    (this.ivs ??= new Set()).add(iv);
    return (final) => { clearInterval(iv); this.ivs.delete(iv); this.state(id, "done", final ?? `${Math.round(performance.now() - t0)} ms`); };
  }
  /** Moves a glowing packet along an edge. */
  async send(from, to, { ms = 550, color = "jev", n = 1 } = {}) {
    const e = this.edges[`${from}>${to}`];
    this.edge(from, to, "on", color);
    const len = e.path.getTotalLength(), c = COLORS[color] ?? color;
    await Promise.all(Array.from({ length: n }, async (_, k) => {
      await sleep(k * 90);
      const dot = el("circle", { r: 5, class: "packet", style: `fill:${c}` }, this.packets);
      const t0 = performance.now();
      await new Promise((res) => {
        const step = (now) => {
          const p = Math.min(1, (now - t0) / ms), pt = e.path.getPointAtLength(p * len);
          dot.setAttribute("cx", pt.x); dot.setAttribute("cy", pt.y);
          p < 1 ? requestAnimationFrame(step) : res();
        };
        requestAnimationFrame(step);
      });
      dot.remove();
    }));
  }
}

/** Race lanes: live-ticking timers per contestant. lanes: [{id, label, color}] */
export class Race {
  constructor(host, lanes, expectedMs = 3000) {
    this.lanes = {}; this.expected = expectedMs; host.innerHTML = ""; host.classList.add("race");
    for (const l of lanes) {
      const row = document.createElement("div");
      row.className = "lane"; row.style.setProperty("--lc", COLORS[l.color] ?? l.color);
      row.innerHTML = `<div class="name"><i></i>${l.label}</div><div class="trk"><div class="bar-fill"></div></div><div class="t">–</div>`;
      host.appendChild(row);
      this.lanes[l.id] = { fill: row.querySelector(".bar-fill"), t: row.querySelector(".t") };
    }
  }
  reset() { for (const l of Object.values(this.lanes)) { clearInterval(l.iv); l.fill.style.width = "0"; l.fill.classList.remove("done"); l.t.textContent = "–"; } }
  /** Ticks a timer; the bar creeps toward `expected` ms, or is driven by set() when `manual`. */
  start(id, expected = this.expected, manual = false) {
    const l = this.lanes[id], t0 = performance.now();
    clearInterval(l.iv); l.fill.classList.remove("done");
    l.iv = setInterval(() => {
      const ms = performance.now() - t0;
      l.t.textContent = fmtMs(ms);
      if (!manual) l.fill.style.width = Math.min(96, (ms / expected) * 100 * 0.9) + "%";
    }, 40);
  }
  set(id, frac) { this.lanes[id].fill.style.width = Math.min(100, frac * 100) + "%"; }
  finish(id, ms, text) {
    const l = this.lanes[id]; clearInterval(l.iv);
    l.fill.style.width = "100%"; l.fill.classList.add("done"); l.t.textContent = text ?? fmtMs(ms);
  }
  stopAll() { for (const l of Object.values(this.lanes)) clearInterval(l.iv); }
  skip(id, text = "n/a") { const l = this.lanes[id]; clearInterval(l.iv); l.t.textContent = text; }
}

export const fmtMs = (n) => (n == null ? "–" : n >= 1000 ? (n / 1000).toFixed(2) + " s" : Math.round(n) + " ms");
export const fmtUsd = (n) => (n === 0 ? "$0" : Math.abs(n) < 0.01 ? "$" + n.toFixed(5) : Math.abs(n) < 100 ? "$" + n.toFixed(n < 1 ? 4 : 2) : "$" + Math.round(n).toLocaleString());
export const fmtPct = (n) => Math.round(n * 100) + "%";

/** Tweens a number into an element's text. */
export function tween(node, to, fmt = (v) => Math.round(v), ms = 600) {
  const from = node._v ?? 0, t0 = performance.now();
  node._v = to;
  const step = (now) => {
    const p = Math.min(1, (now - t0) / ms), e = 1 - Math.pow(1 - p, 3);
    node.textContent = fmt(from + (to - from) * e);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/** Donut chart: slices [{label, value, color}] rendered with stroke-dasharray arcs. */
export function donut(host, slices, centre) {
  const total = slices.reduce((a, s) => a + s.value, 0) || 1, R = 52, C = 2 * Math.PI * R;
  let off = 0, arcs = "";
  for (const s of slices) {
    const len = (s.value / total) * C;
    arcs += `<circle r="${R}" cx="70" cy="70" fill="none" style="stroke:${s.color}" stroke-width="18" stroke-dasharray="${len} ${C - len}" stroke-dashoffset="${-off}" transform="rotate(-90 70 70)"/>`;
    off += len;
  }
  host.innerHTML = `<svg viewBox="0 0 140 140" width="170" height="170"><circle r="${R}" cx="70" cy="70" fill="none" style="stroke:var(--panel2)" stroke-width="18"/>${arcs}
    <text x="70" y="68" text-anchor="middle" style="fill:var(--ink)" font-size="22" font-weight="650">${centre ?? total}</text><text x="70" y="85" text-anchor="middle" style="fill:var(--muted)" font-size="10">emails</text></svg>`;
}

export { COLORS, sleep };
