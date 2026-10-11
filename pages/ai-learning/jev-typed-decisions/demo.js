/* Demo mode: narration cues, pacing, "what to notice" callouts, plus the pixel-art icon used on the homepage.
 * Everything here is a no-op unless demo mode is on, so the normal UI and its timings are untouched. */
const $ = (s) => document.querySelector(s);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const demo = { on: false, paceMs: 1100 };
let t0 = 0;
let log = [];

/* ─────────── narrator dock ─────────── */
export function initNarrator({ onTour }) {
  try {
    demo.on = localStorage.getItem("jev-demo") === "1";
    demo.paceMs = Number(localStorage.getItem("jev-pace")) || 1100;
  } catch { /* storage blocked */ }
  const pace = $("#n-pace");
  pace.value = [...pace.options].some((o) => +o.value === demo.paceMs) ? String(demo.paceMs) : "1100";
  pace.addEventListener("change", () => {
    demo.paceMs = +pace.value;
    try { localStorage.setItem("jev-pace", String(demo.paceMs)); } catch { /* ignore */ }
  });
  $("#n-tour").addEventListener("click", onTour);
  $("#n-off").addEventListener("click", () => setDemo(false));
  apply();
}

export function setDemo(on) {
  demo.on = on;
  try { localStorage.setItem("jev-demo", on ? "1" : "0"); } catch { /* ignore */ }
  apply();
}
function apply() {
  document.body.classList.toggle("demo", demo.on);
  $("#narrator").hidden = !demo.on;
  const t = $("#demo-toggle");
  if (t) t.checked = demo.on;
}

/** Starts a fresh narration timeline (call at the beginning of each run). */
export function resetRun() {
  t0 = performance.now();
  log = [];
  if (demo.on) renderLog();
}

const strip = (html) => html.replace(/<[^>]+>/g, "");

/** Shows a caption. `html` is built by the app from constants and numbers only. */
export function cue(html, { step, total, spot, label = "Step" } = {}) {
  if (!demo.on) return;
  if (!t0) t0 = performance.now();
  $("#n-text").innerHTML = html;
  $("#n-step").textContent = step ? `${label} ${step}${total ? ` of ${total}` : ""}` : "";
  log.push({ t: performance.now() - t0, text: strip(html) });
  if (log.length > 3) log.shift();
  renderLog();
  if (spot) spotlight(spot);
}
function renderLog() {
  $("#n-log").innerHTML = log.slice(0, -1).map((l) => `<div>+${(l.t / 1000).toFixed(1)}s · ${l.text.slice(0, 96)}</div>`).join("");
}

/** Pauses so an audience can read the caption. Only ever delays the animation, never the measured API timings. */
export async function beat(mult = 1) {
  if (demo.on) await sleep(demo.paceMs * mult);
}

/** Draws a ring around the card containing `selector` for a moment, to say "look here". */
export function spotlight(selector) {
  const node = $(selector);
  const card = node?.closest(".card") ?? node;
  if (!card) return;
  card.classList.add("spot");
  setTimeout(() => card.classList.remove("spot"), 2200);
  // Keep the thing being explained visible above the narrator dock.
  const r = card.getBoundingClientRect();
  if (r.top < 70 || r.bottom > window.innerHeight - 230) card.scrollIntoView({ block: r.height > window.innerHeight - 300 ? "start" : "center", behavior: "smooth" });
}

/** Adds a "what to notice" card above a result (demo mode only). Points are app-built HTML. */
export function callout(host, points, title = "What to notice") {
  if (!demo.on || !host) return;
  host.insertAdjacentHTML("afterbegin", `<div class="card callout"><h2>${title}</h2><ul>${points.map((p) => `<li>${p}</li>`).join("")}</ul></div>`);
}

/** Static "how to run this demo" cards, shown only in demo mode. spec: { tab: { title, body, steps[] } } */
export function mountExplainers(spec) {
  for (const [tab, e] of Object.entries(spec)) {
    const view = $("#view-" + tab);
    if (!view || view.querySelector(".explain")) continue;
    const html = `<div class="card explain demo-only"><h2>Demo guide · ${e.title}</h2><p class="lede">${e.body}</p><ol>${e.steps.map((s) => `<li>${s}</li>`).join("")}</ol></div>`;
    const anchor = view.querySelector("#hero");
    anchor ? anchor.insertAdjacentHTML("afterend", html) : view.insertAdjacentHTML("afterbegin", html);
  }
}

/* ─────────── pixel art ─────────── */
/** A dissolving field of pixels for the hero banner: denser and brighter toward the right edge. Seeded, so it never jitters. */
export function pixelField(host) {
  const W = 44, H = 14;
  let seed = 7;
  const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 2 ** 32);
  const colors = ["var(--accent)", "var(--accent)", "var(--k2)", "var(--k5)"];
  let rects = "";
  for (let x = 0; x < W; x++) {
    const density = Math.pow(x / W, 1.6);
    for (let y = 0; y < H; y++) {
      if (rnd() > density * 0.75) continue;
      const op = (0.18 + rnd() * 0.6) * (0.4 + density * 0.6);
      rects += `<rect x="${x}" y="${y}" width="0.86" height="0.86" style="fill:${colors[Math.floor(rnd() * colors.length)]}" fill-opacity="${op.toFixed(2)}"/>`;
    }
  }
  host.innerHTML = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMaxYMid slice" shape-rendering="crispEdges">${rects}</svg>`;
}
