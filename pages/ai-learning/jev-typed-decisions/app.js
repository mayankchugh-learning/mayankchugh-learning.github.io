import { Flow, Race, donut, fmtMs, fmtPct, fmtUsd } from "./flow.js";
import { beat, callout, cue, demo, initNarrator, mountExplainers, pixelField, resetRun, setDemo } from "./demo.js";
import { handle } from "./engine.js";

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const kpi = (cls, label, value, tiny = "") => `<div class="kpi ${cls}"><small>${label}</small><div class="big">${value}</div><div class="tiny">${tiny}</div></div>`;
const simTag = (s) => (s ? ' <span class="badge sim" title="This provider is unavailable, so this value is a placeholder">simulated</span>' : "");
const CAT_COLORS = { brand_deal: "var(--k3)", invoice: "var(--k1)", newsletter: "var(--k2)", cold_pitch: "var(--k6)", customer: "var(--k5)", scam: "var(--k4)", other: "var(--k7)" };
const KIND_COLORS = { breaking: "var(--k1)", golden_nugget: "var(--k3)", hot_take: "var(--k6)", promo: "var(--k5)", ai_slop: "var(--k4)", noise: "var(--k7)" };
const TIER_COLOR = { light: "var(--k2)", standard: "var(--k1)", frontier: "var(--k5)" };
const TIERS = ["light", "standard", "frontier"];

let STATUS, SAMPLES, MODELS, PROVIDER = "claude";
const P = () => STATUS.providers[PROVIDER];
const label = (k) => MODELS[k]?.label ?? k;
const prices = (k) => `$${MODELS[k].inPerM} / $${MODELS[k].outPerM}`;
const small = () => P().small, big = () => P().big;
const live = () => P().state === "live";

/* ─────────── plumbing ─────────── */
async function api(path, body) {
  const url = new URL(path, "http://classroom.local");
  return handle(url.pathname, url.searchParams, body ? { provider: PROVIDER, ...body } : undefined);
}
async function busy(btns, out, fn) {
  [].concat(btns).forEach((b) => (b.disabled = true));
  try { await fn(); } catch (e) { (out ?? document.querySelector(".view:not([hidden])")).insertAdjacentHTML("afterbegin", `<div class="card err">${esc(e.message)}</div>`); console.error(e); }
  finally { [].concat(btns).forEach((b) => (b.disabled = false)); refreshStatus(); }
}
async function pool(items, n, fn) {
  const out = new Array(items.length); let i = 0;
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, async () => { while (i < items.length) { const k = i++; out[k] = await fn(items[k], k); } }));
  return out;
}
function chips(sel, items, target) {
  $(sel).innerHTML = items.map((s, i) => `<button class="chip" data-i="${i}">${esc(s.label)}</button>`).join("");
  $(sel).addEventListener("click", (e) => { const b = e.target.closest(".chip"); if (b) $(target).value = items[b.dataset.i].text; });
}
const bars = (probs, colorOf) => Object.entries(probs).map(([k, v]) => `<div class="bar"><span>${esc(k)}</span><div class="track"><div class="fill" data-w="${v * 100}" style="background:${colorOf(k)}"></div></div><b>${fmtPct(v)}</b></div>`).join("");
const grow = (root) => requestAnimationFrame(() => requestAnimationFrame(() => root.querySelectorAll(".fill[data-w]").forEach((f) => (f.style.width = f.dataset.w + "%"))));

/* ─────────── header: provider switch, status, budget ─────────── */
const STATE_TEXT = { live: "live", simulated: "classroom", unavailable: "unavailable", budget: "budget reached" };
function renderControls() {
  const p = P();
  $("#controls").innerHTML = `
    <label class="switch" title="Adds narration, pacing and a guided tour for presenting"><input type="checkbox" id="demo-toggle" ${demo.on ? "checked" : ""}>Demo mode</label>
    <span class="seg" role="group" aria-label="LLM provider">${Object.entries(STATUS.providers).map(([k, v]) => `<button data-provider="${k}" aria-pressed="${k === PROVIDER}">${esc(v.label)}</button>`).join("")}</span>
    <span class="pill" id="pill-provider" title="${esc(p.note)}"><i class="dot sim"></i>${esc(p.label)} <b>${STATE_TEXT[p.state]}</b></span>
    <span class="pill" id="pill-jev" title="${esc(STATUS.jevNote)}"><i class="dot sim"></i>Jev <b>${STATE_TEXT[STATUS.jev]}</b></span>`;
  if ($("#hero-note")) $("#hero-note").textContent = "Classroom copy by Mayank Chugh. Jev decisions use the offline heuristic and are badged simulated. LLM race lanes stay off, so a missing model is never shown as a win. Prices are September 2026 list prices.";
}
async function refreshStatus() {
  try { STATUS = await api("/api/status"); renderControls(); } catch { /* server restarting */ }
}
document.addEventListener("click", (e) => {
  const hit = (sel) => e.target.closest(sel);
  const sw = hit("[data-provider]");
  if (sw) return setProvider(sw.dataset.provider);
  if (hit("#hero-tour")) startTour();
  if (hit("#hero-shot")) document.body.classList.toggle("shot");
});
document.addEventListener("change", (e) => { if (e.target.id === "demo-toggle") { setDemo(e.target.checked); if (demo.on) tabCue(currentTab); } });

function setProvider(k) {
  PROVIDER = k;
  try { localStorage.setItem("jev-provider", k); } catch { /* private mode */ }
  renderControls(); rebuildProviderUi();
}
function rebuildProviderUi() {
  document.querySelectorAll(".js-small").forEach((n) => (n.textContent = label(small())));
  document.querySelectorAll(".js-big").forEach((n) => (n.textContent = label(big())));
  if (started.has("router")) buildRouter();
  if (started.has("triage")) buildTriage();
  if (started.has("inbox")) buildInbox();
  if (started.has("titles")) buildTitles();
  if (started.has("cost")) drawCost();
}

/* ─────────── tabs ─────────── */
const TABS = [
  ["overview", "How Jev works"], ["router", "LLM router"], ["triage", "Ticket triage"], ["inbox", "Inbox at scale"],
  ["feed", "Slop filter"], ["titles", "Title scorer"], ["cost", "Cost at scale"],
];
const inits = { overview: initOverview, router: initRouter, triage: initTriage, inbox: initInbox, feed: initFeed, titles: initTitles, cost: initCost };
const started = new Set();
let currentTab = "overview";
function showTab(id) {
  currentTab = id;
  document.querySelectorAll(".tab").forEach((t) => t.setAttribute("aria-selected", t.dataset.tab === id));
  for (const [k] of TABS) $("#view-" + k).hidden = k !== id;
  if (!started.has(id)) { started.add(id); inits[id](); }
  history.replaceState(null, "", "#" + id);
  if (!touring) tabCue(id);
}
(async function boot() {
  if (new URLSearchParams(location.search).has("shot")) document.body.classList.add("shot");
  [STATUS, SAMPLES] = await Promise.all([api("/api/status"), api("/api/samples")]);
  MODELS = STATUS.models;
  let saved = null; try { saved = localStorage.getItem("jev-provider"); } catch { /* ignore */ }
  PROVIDER = STATUS.providers[saved] ? saved : Object.keys(STATUS.providers).find((k) => STATUS.providers[k].state === "live") ?? "claude";
  pixelField($("#hero-art"));
  initNarrator({ onTour: () => (touring ? stopTour() : startTour()) });
  mountExplainers(EXPLAIN);
  renderControls();
  document.querySelectorAll(".js-small").forEach((n) => (n.textContent = label(small())));
  document.querySelectorAll(".js-big").forEach((n) => (n.textContent = label(big())));
  setInterval(refreshStatus, 5000);
  $("#tabs").innerHTML = TABS.map(([id, name]) => `<button class="tab" data-tab="${id}">${name}</button>`).join("");
  $("#tabs").addEventListener("click", (e) => { const b = e.target.closest(".tab"); if (b) showTab(b.dataset.tab); });
  showTab(TABS.some(([id]) => id === location.hash.slice(1)) ? location.hash.slice(1) : "overview");
})();

/* ═══════════════════ Overview ═══════════════════ */
function initOverview() {
  const TEXT = "Based on the line items and the vendor history passed in the context, this invoice appears to be legitimate. The amounts match prior purchase orders and the vendor has 14 clean payments on record, although the unusual net-90 terms may warrant a quick manual review before approval.";
  const VERDICT = `{\n  "verdict": {\n    "choice": "clean",\n    "probabilities": {\n      "clean": 0.88,\n      "review": 0.10,\n      "fraud": 0.02\n    },\n    "confidence": 0.88\n  }\n}`;
  $("#o-run").addEventListener("click", () => busy($("#o-run"), null, async () => {
    resetRun();
    cue("The same question goes to both. The <b>LLM</b> starts writing a sentence, one token at a time. <b>Jev</b> reads it once.", { step: 1, total: 3, spot: "#o-llm-out" });
    await beat();
    $("#o-llm-out").className = "caret"; $("#o-llm-out").textContent = ""; $("#o-jev-out").textContent = "…";
    const t0 = performance.now(), LLM_MS = 8500, JEV_MS = 400;
    let jevDone = false;
    await new Promise((res) => {
      const iv = setInterval(() => {
        const ms = performance.now() - t0;
        if (!jevDone) $("#o-jev-t").textContent = (Math.min(ms, JEV_MS) / 1000).toFixed(2) + " s";
        if (!jevDone && ms >= JEV_MS) { jevDone = true; $("#o-jev-out").textContent = VERDICT; cue("<b>0.4 s:</b> Jev is already done. It returned a <b>typed verdict with probabilities</b>, so code can branch on it directly.", { step: 2, total: 3, spot: "#o-jev-out" }); }
        $("#o-llm-t").textContent = (Math.min(ms, LLM_MS) / 1000).toFixed(1) + " s";
        $("#o-llm-out").textContent = TEXT.slice(0, Math.floor((Math.min(ms, LLM_MS) / LLM_MS) * TEXT.length));
        if (ms >= LLM_MS) { $("#o-llm-out").className = ""; clearInterval(iv); cue("<b>8.5 s:</b> the LLM finishes a paragraph that a program still has to parse. Jev's answer arrived about <b>20× earlier</b>.", { step: 3, total: 3 }); res(); }
      }, 40);
    });
  }));
  const TYPES = {
    choice: { h: "Choice: pick one", p: "Route or categorise. Up to 255 options, each with a probability.", j: { department: { type: "choice", choice: "technical", confidence: 0.91, probabilities: { billing: 0.08, technical: 0.91, account: 0.01 } } } },
    score: { h: "Score: place on a scale", p: "You define the rubric (2 to 10 levels). Scores can fall between levels.", j: { severity: { type: "score", score: 2.86, confidence: 0.88, probabilities: { 0: 0, 1: 0.02, 2: 0.1, 3: 0.88 } } } },
    noul: { h: "Noul: yes/no probability", p: "How likely is this true? Ideal for thresholds in plain if-statements.", j: { requestsRefund: { type: "noul", noul: 0.97 } } },
  };
  $("#o-types").innerHTML = Object.entries(TYPES).map(([k, t]) => `<div class="type" data-k="${k}"><h3>${t.h}</h3><p>${t.p}</p></div>`).join("");
  const pick = (k) => { document.querySelectorAll(".type").forEach((x) => x.classList.toggle("sel", x.dataset.k === k)); $("#o-json").textContent = JSON.stringify(TYPES[k].j, null, 2); };
  $("#o-types").addEventListener("click", (e) => { const t = e.target.closest(".type"); if (t) pick(t.dataset.k); });
  pick("choice");
}

/* ═══════════════════ 1 · Router ═══════════════════ */
const R = {};
function initRouter() {
  chips("#r-samples", SAMPLES.routerPrompts, "#r-prompt");
  buildRouter();
  $("#r-go").addEventListener("click", () => busy($("#r-go"), $("#r-out"), async () => {
    $("#r-out").innerHTML = ""; $("#r-bench-out").innerHTML = "";
    const r = await routeOnce($("#r-prompt").value, $("#r-baseline").checked, true);
    $("#r-out").innerHTML = renderRoute(r); grow($("#r-out"));
    callout($("#r-out"), routeNotes(r));
  }));
  $("#r-bench").addEventListener("click", () => busy($("#r-bench"), $("#r-bench-out"), () => routeBench()));
}
function buildRouter() {
  const t = P().tiers, pos = { light: 45, standard: 125, frontier: 205 };
  R.flow = new Flow($("#r-flow"), {
    w: 920, h: 250,
    nodes: [
      { id: "prompt", x: 85, y: 125, label: "Prompt", color: "io", w: 120 },
      { id: "jev", x: 300, y: 125, label: "Jev", sub: "picks a tier", color: "jev" },
      ...TIERS.map((k) => ({ id: k, x: 570, y: pos[k], label: label(t[k]), sub: `${k} · ${prices(t[k])}`, color: k, w: 190 })),
      { id: "answer", x: 835, y: 125, label: "Answer", color: "good", w: 110 },
    ],
    edges: [{ from: "prompt", to: "jev" }, ...TIERS.flatMap((k) => [{ from: "jev", to: k }, { from: k, to: "answer" }])],
  });
  R.race = new Race($("#r-race"), [{ id: "routed", label: "Jev-routed", color: "jev" }, { id: "base", label: `Always ${label(big())}`, color: "llm" }], 7000);
}

async function routeOnce(...args) {
  try { return await routeOnceInner(...args); } catch (e) { R.race?.stopAll(); R.flow?.stopTimers(); throw e; }
}
async function routeOnceInner(prompt, baseline, anim) {
  const f = anim ? R.flow : null, race = anim ? R.race : null;
  if (!prompt.trim()) throw new Error("Type or pick a prompt first");
  f?.reset(); race?.reset();
  if (anim) { resetRun(); cue(`Your prompt (${prompt.length} characters) goes to <b>Jev first</b>, not to a big model. Jev is the router.`, { step: 1, total: 5, spot: "#r-flow" }); await beat(); }
  f?.state("prompt", "done", `${prompt.length} chars`);
  race?.start("routed", 6000);
  let baseP = null;
  if (baseline) {
    race?.start("base", 6000);
    baseP = api("/api/route/answer", { prompt, tier: "frontier" }).then((r) => { race?.finish("base", 0, fmtMs(r.latencyMs)); return r; });
  } else race?.skip("base", "not run");
  const stopJev = f?.timer("jev"), sent = f?.send("prompt", "jev", { ms: 350 });
  const decision = await api("/api/route/decide", { prompt });
  await sent; stopJev?.(fmtMs(decision.latencyMs));
  if (anim) {
    cue(`Jev answered <b>3 typed questions in one pass</b> (${fmtMs(decision.latencyMs)}): this needs the <b>${decision.jevTier}</b> tier, ${fmtPct(decision.confidence)} sure, complexity ${decision.complexity.toFixed(1)} out of 3.`, { step: 2, total: 5 });
    await beat();
    if (decision.escalated) { cue(`Confidence guard: Jev is under 60% sure, so the code <b>escalates one tier</b> to ${decision.tier}. A wrong downgrade costs more than a wasted upgrade.`); await beat(); }
  }
  const t = decision.tier;
  if (f) for (const o of TIERS) if (o !== t) { f.dim(o); f.edge("jev", o, "dim"); }
  await f?.send("jev", t, { color: t, ms: 300 });
  if (anim) cue(`Only <b>${label(decision.model)}</b> is called. The other tiers cost <b>$0</b> for this request.`, { step: 3, total: 5 });
  const stop = f?.timer(t);
  const answer = await api("/api/route/answer", { prompt, tier: t });
  stop?.(fmtMs(answer.latencyMs));
  race?.finish("routed", 0, fmtMs(decision.latencyMs + answer.latencyMs)); // measured API time, not animation time
  if (anim) { cue(`${label(answer.model)} answered in ${fmtMs(answer.latencyMs)} for ${fmtUsd(answer.costUsd)}. Jev's own decision cost just <b>${fmtUsd(decision.costUsd)}</b>.`, { step: 4, total: 5, spot: "#r-race" }); await beat(); }
  await f?.send(t, "answer", { color: t, ms: 300 });
  f?.state("answer", "done", fmtUsd(decision.costUsd + answer.costUsd));
  const base = baseP ? await baseP : null;
  const top = MODELS[big()];
  const baseCost = base ? base.costUsd : (answer.inputTokens * top.inPerM + answer.outputTokens * top.outPerM) / 1e6;
  const total = decision.costUsd + answer.costUsd;
  if (anim) cue(`Routed total <b>${fmtUsd(total)}</b> versus <b>${fmtUsd(baseCost)}</b> if every request went to ${label(big())}${baseCost > total ? `: <b>${Math.round(((baseCost - total) / baseCost) * 100)}% saved</b>` : ""}.`, { step: 5, total: 5, spot: "#r-out" });
  return { decision, answer, base, baseCost, total, saved: baseCost - total };
}

const routeNotes = (r) => {
  const d = r.decision, top = label(big()), pct = r.baseCost ? Math.max(0, Math.round((r.saved / r.baseCost) * 100)) : 0;
  return [
    `Routing itself cost <b>${fmtUsd(d.costUsd)}</b> and took <b>${fmtMs(d.latencyMs)}</b>. That is the entire price of the decision.`,
    d.tier === "frontier"
      ? `This is a hard prompt, so Jev sent it to the top tier. Routing never makes hard prompts worse; it stops easy ones from overpaying.`
      : `This prompt only needed <b>${label(d.model)}</b>, so it skipped the expensive tier: <b>${pct}% cheaper</b> than always using ${top}.`,
    `Jev returns <b>calibrated probabilities</b>, so your own code sets the threshold (here: escalate below 60% confidence).`,
  ];
};

function renderRoute(r) {
  const d = r.decision, a = r.answer, pctSaved = r.baseCost ? (r.saved / r.baseCost) * 100 : 0, topName = label(big());
  const isTop = d.tier === "frontier";
  return `
  <div class="kpis" style="margin-bottom:16px">
    ${kpi("", "Jev decided in", fmtMs(d.latencyMs), `${d.inputTokens} tokens · ${fmtUsd(d.costUsd)}${d.simulated ? " · simulated" : ""}`)}
    ${kpi("jev", "Routed cost (Jev + answer)", fmtUsd(r.total), `${label(a.model)} answered in ${fmtMs(a.latencyMs)}`)}
    ${kpi("", `Always ${topName} ${r.base ? (r.base.simulated ? "(simulated)" : "(measured)") : "(est.)"}`, fmtUsd(r.baseCost), r.base ? `${fmtMs(r.base.latencyMs)} end to end` : "same tokens at its list price")}
    ${isTop ? kpi("", "Saved", "0%", "Hard prompt: the top tier is the right call. Jev adds only its decision cost")
      : kpi("gold", "Saved", `${Math.max(0, pctSaved).toFixed(0)}%`, `${fmtUsd(Math.max(0, r.saved))} on this request`)}
  </div>
  <div class="grid">
    <div class="card"><h2>Jev's decision${simTag(d.simulated)}</h2>
      ${bars(d.probabilities, (k) => TIER_COLOR[k])}
      <div class="stat"><span>Routed to</span><span><span class="badge ${d.tier}">${d.tier}</span> <span class="badge ${d.model}">${esc(label(d.model))}</span></span></div>
      <div class="stat"><span>${d.escalated ? "Confidence guard" : "Confidence"}</span><b class="${d.escalated ? "bad" : ""}">${d.escalated ? `${fmtPct(d.confidence)} &lt; 60%: escalated ${d.jevTier} → ${d.tier}` : fmtPct(d.confidence)}</b></div>
      <div class="stat"><span>Complexity</span><b>${d.complexity.toFixed(1)} / 3</b></div>
      <div class="stat"><span>Needs deep reasoning</span><b>${fmtPct(d.needsReasoning)}</b></div>
    </div>
    <div class="card"><h2><span class="badge ${a.model}">${esc(label(a.model))}</span> answer${simTag(a.simulated)}</h2>
      <div class="stat"><span>Latency</span><b>${fmtMs(a.latencyMs)}</b></div>
      <div class="stat"><span>Tokens in / out</span><b>${a.inputTokens} / ${a.outputTokens}</b></div>
      <div class="stat"><span>Cost</span><b>${fmtUsd(a.costUsd)}</b></div>
      <div class="answer">${esc(a.text)}</div></div>
  </div>`;
}

async function routeBench() {
  const items = SAMPLES.routerPrompts, baseline = $("#r-baseline").checked, out = $("#r-bench-out"), topName = label(big());
  $("#r-out").innerHTML = ""; let done = 0;
  out.innerHTML = `<div class="card spinner">Routing ${items.length} prompts… <span id="r-prog">0</span>/${items.length}</div>`;
  const results = await pool(items, 3, async (s) => { const r = await routeOnce(s.text, baseline, false); $("#r-prog").textContent = ++done; return r; });
  const sum = (f) => results.reduce((a, r) => a + f(r), 0), mix = {};
  results.forEach((r) => (mix[r.answer.model] = (mix[r.answer.model] ?? 0) + 1));
  const cost = sum((r) => r.total), base = sum((r) => r.baseCost), anySim = results.some((r) => r.decision.simulated || r.answer.simulated);
  out.innerHTML = `<div class="card"><h2>Benchmark · ${items.length} prompts${simTag(anySim)}</h2>
    <div class="kpis">
      ${kpi("jev", "Routed total", fmtUsd(cost), `avg ${fmtUsd(cost / items.length)} per prompt`)}
      ${kpi("", `Always ${topName} ${baseline ? "(measured)" : "(est.)"}`, fmtUsd(base), `avg ${fmtUsd(base / items.length)} per prompt`)}
      ${kpi("gold", "Saved", `${(((base - cost) / base) * 100).toFixed(0)}%`, `${fmtUsd(base - cost)} across the set`)}
      ${kpi("", "Avg Jev decision", fmtMs(sum((r) => r.decision.latencyMs) / items.length), `Jev spend ${fmtUsd(sum((r) => r.decision.costUsd))} total`)}
      <div class="kpi"><small>Model mix</small><div style="margin-top:9px;display:flex;gap:6px;flex-wrap:wrap">${Object.entries(mix).map(([k, v]) => `<span class="badge ${k}">${esc(label(k))} ${v}</span>`).join("")}</div></div>
    </div>
    <table style="margin-top:14px"><thead><tr><th>Prompt</th><th>Routed to</th><th class="num">Confidence</th><th class="num">Jev</th><th class="num">Routed cost</th><th class="num">${esc(topName)} cost</th></tr></thead><tbody>
    ${results.map((r, i) => `<tr><td>${esc(items[i].label)}</td><td><span class="badge ${r.answer.model}">${esc(label(r.answer.model))}</span> <span class="muted">${r.decision.tier}</span></td><td class="num">${fmtPct(r.decision.confidence)}</td><td class="num">${fmtMs(r.decision.latencyMs)}</td><td class="num">${fmtUsd(r.total)}</td><td class="num">${fmtUsd(r.baseCost)}</td></tr>`).join("")}
    </tbody></table>
    <p class="note">${topName} figures are ${baseline ? "simulated always-top-model timings at list price, with placeholder text" : "the routed answer's tokens priced at the top model's list price"}. Quality is not scored here.</p></div>`;
}

/* ═══════════════════ 2 · Ticket triage ═══════════════════ */
const T = {};
function initTriage() {
  chips("#t-samples", SAMPLES.tickets, "#t-ticket");
  buildTriage();
  $("#t-go").addEventListener("click", () => busy($("#t-go"), $("#t-out"), async () => {
    $("#t-out").innerHTML = ""; $("#t-bench-out").innerHTML = "";
    const r = await triageOnce($("#t-ticket").value, $("#t-compare").checked && live(), $("#t-draft").checked, true);
    $("#t-out").innerHTML = renderTriage(r);
    callout($("#t-out"), triageNotes(r));
  }));
  $("#t-bench").addEventListener("click", () => busy($("#t-bench"), $("#t-bench-out"), () => triageBench()));
}
function buildTriage() {
  const p = P();
  T.flow = new Flow($("#t-flow"), {
    w: 920, h: 270,
    nodes: [
      { id: "ticket", x: 80, y: 105, label: "Ticket", color: "io", w: 110 },
      { id: "jev", x: 270, y: 75, label: "Jev", sub: "6 questions, 1 call", color: "jev", w: 160 },
      { id: "llm", x: 270, y: 200, label: `${label(p.small)} classifier`, sub: "baseline", color: "llm", w: 190 },
      { id: "rules", x: 490, y: 75, label: "Your code", sub: "if / else on scores", color: "code", w: 150 },
      { id: "discard", x: 750, y: 30, label: "Discard", sub: "spam", color: "io", w: 150 },
      { id: "human", x: 750, y: 105, label: "Human queue", sub: `${label(p.mid)} drafts`, color: "frontier", w: 170 },
      { id: "auto", x: 750, y: 180, label: "Auto-reply", sub: `${label(p.small)} drafts`, color: "light", w: 170 },
    ],
    edges: [{ from: "ticket", to: "jev" }, { from: "ticket", to: "llm", dashed: true }, { from: "jev", to: "rules" }, { from: "rules", to: "discard" }, { from: "rules", to: "human" }, { from: "rules", to: "auto" }],
  });
  T.race = new Race($("#t-race"), [{ id: "jev", label: "Jev", color: "jev" }, { id: "llm", label: label(p.small), color: "llm" }], 2200);
}

async function triageOnce(...args) {
  try { return await triageOnceInner(...args); } catch (e) { T.race?.stopAll(); T.flow?.stopTimers(); throw e; }
}
async function triageOnceInner(ticket, compare, draft, anim) {
  if (!ticket.trim()) throw new Error("Type or pick a ticket first");
  const f = anim ? T.flow : null, race = anim ? T.race : null;
  f?.reset(); race?.reset();
  if (anim) {
    resetRun();
    cue(`One <b>Jev</b> call asks <b>six typed questions</b> about the ticket: department, urgency, frustration, refund, churn and spam.${compare ? ` The same ticket also goes to ${label(small())} as a classifier, so you can compare.` : ""}`, { step: 1, total: 5, spot: "#t-flow" });
    await beat();
  }
  f?.state("ticket", "done", `${ticket.length} chars`);
  race?.start("jev", 1800);
  compare ? race?.start("llm", 2600) : race?.skip("llm", "off");
  const stopJ = f?.timer("jev"), stopL = compare ? f?.timer("llm") : null;
  f?.send("ticket", "jev", { ms: 350 }); if (compare) f?.send("ticket", "llm", { ms: 350 });
  const jevP = api("/api/triage/jev", { ticket }).then((r) => { race?.finish("jev", 0, fmtMs(r.jev.latencyMs)); stopJ?.(fmtMs(r.jev.latencyMs)); return r; });
  const llmP = compare ? api("/api/triage/llm", { ticket }).then((r) => { race?.finish("llm", 0, r ? fmtMs(r.latencyMs) : "n/a"); stopL?.(r ? fmtMs(r.latencyMs) : "n/a"); return r; }) : Promise.resolve(null);
  const jevR = await jevP, { action, reasons } = jevR;
  if (anim) {
    const x = jevR.jev.triage;
    cue(`Jev answered all six in ${fmtMs(jevR.jev.latencyMs)}: <b>${x.department}</b>, urgency ${x.urgency.toFixed(1)}/3, churn risk ${fmtPct(x.churnRisk)}, spam ${fmtPct(x.spam)}.`, { step: 2, total: 5, spot: "#t-race" });
    await beat();
  }
  await f?.send("jev", "rules", { ms: 350 });
  f?.state("rules", "done", action);
  if (anim) { cue(`Now <b>plain code, no AI</b>, decides: <b>${action}</b> because ${esc(reasons.join(", "))}.`, { step: 3, total: 5 }); await beat(); }
  const target = { discard: "discard", escalate: "human", "auto-reply": "auto" }[action], tone = action === "escalate" ? "frontier" : action === "auto-reply" ? "light" : "io";
  if (f) for (const o of ["discard", "human", "auto"]) if (o !== target) { f.dim(o); f.edge("rules", o, "dim"); }
  await f?.send("rules", target, { color: tone, ms: 400 });
  if (anim) cue(action === "discard" ? "Spam never reaches an LLM: <b>$0</b> spent." : action === "escalate" ? `Risky tickets get the <b>bigger model</b> (${label(P().mid)}) to draft a careful reply.` : `Easy tickets get the <b>small, cheap model</b> (${label(small())}) for a quick reply.`, { step: 4, total: 5 });
  let reply = null;
  if (draft && action !== "discard") {
    const stop = f?.timer(target);
    reply = await api("/api/triage/reply", { ticket, department: jevR.jev.triage.department, action });
    stop?.(fmtMs(reply.latencyMs));
  } else f?.state(target, "done");
  const llm = await llmP;
  if (anim) cue(llm ? `Same classification by ${label(small())}: <b>${fmtMs(llm.latencyMs)}</b> vs Jev's <b>${fmtMs(jevR.jev.latencyMs)}</b> (${(llm.latencyMs / jevR.jev.latencyMs).toFixed(1)}× slower) and ${(llm.costUsd / jevR.jev.costUsd).toFixed(0)}× the cost.` : `Done. Jev did the whole triage decision in ${fmtMs(jevR.jev.latencyMs)}.`, { step: 5, total: 5, spot: "#t-out" });
  return { jev: jevR.jev, llm, action, reasons, reply };
}

const triageNotes = (r) => [
  `Jev returned <b>six answers in one call</b> (${fmtMs(r.jev.latencyMs)}, ${fmtUsd(r.jev.costUsd)}). An LLM would need a prompt, a schema and a parser for the same thing.`,
  `The routing rules are <b>ordinary if-statements</b> on Jev's probabilities. You can read, test and change them without touching a model.`,
  r.llm ? `As a classifier, ${esc(label(small()))} was <b>${(r.llm.latencyMs / r.jev.latencyMs).toFixed(1)}× slower</b> and cost <b>${(r.llm.costUsd / r.jev.costUsd).toFixed(0)}×</b> more for the same job.` : `The small-model race stays off in this classroom copy. A missing model is not shown as a result.`,
];

const field = (name, v, fmt) => `<div class="stat"><span>${name}</span><b>${fmt(v)}</b></div>`;
function triageCol(title, t, tone) {
  if (!t) return `<div class="card"><h2>${title}</h2><p class="muted">Baseline not run: switched off, or ${esc(P().label)} is unavailable right now.</p></div>`;
  const x = t.triage;
  return `<div class="card"><h2>${title}${simTag(t.simulated)}</h2>
    <div class="kpis" style="grid-template-columns:1fr 1fr">${kpi(tone === "jev" ? "jev" : "", "Latency", fmtMs(t.latencyMs))}${kpi(tone === "jev" ? "jev" : "", "Cost", fmtUsd(t.costUsd), `${t.inputTokens} tokens in`)}</div>
    <div style="margin-top:10px">
    ${field("Department", x.department, (v) => `<span class="badge ${tone}">${esc(v)}</span>`)}
    ${field("Urgency", x.urgency, (v) => v.toFixed(1) + " / 3")}${field("Frustration", x.frustration, (v) => v.toFixed(1) + " / 3")}
    ${field("Refund requested", x.refundRequested, fmtPct)}${field("Churn risk", x.churnRisk, fmtPct)}${field("Spam", x.spam, fmtPct)}</div></div>`;
}
function renderTriage(r) {
  const same = r.llm && r.jev.triage.department === r.llm.triage.department;
  return `
  ${r.llm ? `<div class="kpis" style="margin-bottom:16px">
    ${kpi("gold", "Jev speed-up", (r.llm.latencyMs / r.jev.latencyMs).toFixed(1) + "×", `${fmtMs(r.jev.latencyMs)} vs ${fmtMs(r.llm.latencyMs)}`)}
    ${kpi("gold", "Jev cost advantage", (r.llm.costUsd / r.jev.costUsd).toFixed(0) + "×", `${fmtUsd(r.jev.costUsd)} vs ${fmtUsd(r.llm.costUsd)}`)}
    ${kpi(same ? "" : "bad", "Same department?", same ? "Yes" : "No", same ? "both agree" : "they disagree: read the ticket")}</div>` : ""}
  <div class="grid">${triageCol("Jev · one call, six answers", r.jev, "jev")}${triageCol(`${esc(label(small()))} as classifier`, r.llm, "llm")}</div>
  <div class="card" style="margin-top:16px"><h2>What the code does with it</h2>
    <div class="stat"><span>Action</span><span><span class="badge ${r.action}">${esc(r.action)}</span> <span class="muted">${esc(r.reasons.join(", "))}</span></span></div>
    ${r.reply ? `<div class="stat"><span>Reply drafted by</span><span><span class="badge ${r.reply.model}">${esc(label(r.reply.model))}</span> ${fmtMs(r.reply.latencyMs)} · ${fmtUsd(r.reply.costUsd)}${simTag(r.reply.simulated)}</span></div><div class="answer">${esc(r.reply.text)}</div>` : ""}
    <p class="note">Only tickets that need words reach an LLM, and the risky ones get the bigger model. Spam never does.</p></div>`;
}

async function triageBench() {
  const items = SAMPLES.tickets, compare = $("#t-compare").checked && live(), draft = $("#t-draft").checked, out = $("#t-bench-out");
  $("#t-out").innerHTML = ""; let done = 0;
  out.innerHTML = `<div class="card spinner">Triaging ${items.length} tickets… <span id="t-prog">0</span>/${items.length}</div>`;
  const results = await pool(items, 3, async (s) => { const r = await triageOnce(s.text, compare, draft, false); $("#t-prog").textContent = ++done; return r; });
  const sum = (f) => results.reduce((a, r) => a + f(r), 0), wl = results.filter((r) => r.llm);
  const agree = wl.filter((r) => r.jev.triage.department === r.llm.triage.department).length, n = items.length;
  const count = (a) => results.filter((r) => r.action === a).length, sl = esc(label(small()));
  out.innerHTML = `<div class="card"><h2>Batch · ${n} tickets${simTag(results.some((r) => r.jev.simulated))}</h2><div class="kpis">
    ${kpi("jev", "Avg Jev triage", fmtMs(sum((r) => r.jev.latencyMs) / n), `${fmtUsd(sum((r) => r.jev.costUsd))} total`)}
    ${wl.length ? kpi("", `Avg ${sl} triage`, fmtMs(sum((r) => r.llm?.latencyMs ?? 0) / wl.length), `${fmtUsd(sum((r) => r.llm?.costUsd ?? 0))} total`) + kpi("gold", "Dept agreement", `${agree}/${wl.length}`, `Jev vs ${sl}`) : ""}
    ${kpi("", "Escalated / auto / discarded", `${count("escalate")} / ${count("auto-reply")} / ${count("discard")}`, "decided by plain code")}</div>
    <table style="margin-top:14px"><thead><tr><th>Ticket</th><th>Department</th><th class="num">Urgency</th><th class="num">Churn</th><th>Action</th><th class="num">Jev</th><th class="num">${sl}</th></tr></thead><tbody>
    ${results.map((r, i) => `<tr><td>${esc(items[i].label)}</td><td>${esc(r.jev.triage.department)}</td><td class="num">${r.jev.triage.urgency.toFixed(1)}</td><td class="num">${fmtPct(r.jev.triage.churnRisk)}</td><td><span class="badge ${r.action}">${esc(r.action)}</span></td><td class="num">${fmtMs(r.jev.latencyMs)}</td><td class="num">${r.llm ? fmtMs(r.llm.latencyMs) : "–"}</td></tr>`).join("")}</tbody></table></div>`;
}

/* ═══════════════════ 3 · Inbox at scale ═══════════════════ */
const I = {};
const JEV_CONC = 12, LLM_CONC = 4, RACE_CAP = 50;
function initInbox() {
  buildInbox();
  drawInbox({ done: 0, cat: {}, urg: [0, 0, 0, 0], top: [] });
  $("#i-go").addEventListener("click", () => busy($("#i-go"), $("#i-kpis"), runInbox));
}
function buildInbox() {
  I.flow = new Flow($("#i-flow"), {
    w: 920, h: 210,
    nodes: [
      { id: "emails", x: 90, y: 90, label: "Inbox", sub: "", color: "io", w: 130 },
      { id: "jev", x: 380, y: 60, label: "Jev", sub: `×${JEV_CONC} parallel`, color: "jev", w: 170 },
      { id: "llm", x: 380, y: 155, label: label(small()), sub: `×${LLM_CONC} parallel`, color: "llm", w: 170 },
      { id: "dash", x: 760, y: 90, label: "Dashboard", sub: "categories · urgency · scams", color: "good", w: 230 },
    ],
    edges: [{ from: "emails", to: "jev" }, { from: "emails", to: "llm", dashed: true }, { from: "jev", to: "dash" }, { from: "llm", to: "dash", dashed: true }],
  });
  I.race = new Race($("#i-lanes"), [{ id: "jev", label: "Jev", color: "jev" }, { id: "llm", label: label(small()), color: "llm" }]);
}

function drawInbox(s, extra = {}) {
  const slices = Object.entries(s.cat).map(([k, v]) => ({ label: k, value: v, color: CAT_COLORS[k] }));
  donut($("#i-donut"), slices.length ? slices : [{ value: 0.0001, color: "var(--line)" }], s.done);
  $("#i-legend").innerHTML = Object.entries(CAT_COLORS).map(([k, c]) => `<div><i style="background:${c}"></i>${k.replace("_", " ")}<b>${s.cat[k] ?? 0}</b></div>`).join("");
  const mx = Math.max(1, ...s.urg), names = ["Ignore", "Low", "High", "Critical"], cols = ["var(--k7)", "var(--k1)", "var(--k6)", "var(--k4)"];
  $("#i-hist").innerHTML = s.urg.map((v, i) => `<div><div class="col" style="--c:${cols[i]};height:${(v / mx) * 100}px">${v}</div>${names[i]}</div>`).join("");
  $("#i-top").innerHTML = s.top.length ? s.top.map((t) => `<div class="stat"><span><span class="badge tone-${t.category}">${t.category.replace("_", " ")}</span> ${esc(t.subject)}</span><b>${t.urgency.toFixed(1)}</b></div>`).join("") : "Nothing yet.";
  if (extra.kpis) $("#i-kpis").innerHTML = extra.kpis;
}

async function runInbox() {
  const raceLlm = $("#i-race").checked && live(), n = raceLlm ? Math.min(+$("#i-n").value, RACE_CAP) : +$("#i-n").value;
  const emails = await api("/api/inbox/sample?n=" + n);
  $("#i-note").innerHTML = "";
  resetRun();
  cue(`Every email is one Jev call with <b>5 judgements</b>. ${JEV_CONC} calls run <b>in parallel</b>${raceLlm ? ` while ${label(small())} does the same job in the lane below` : ""}. Watch the counters.`, { step: 1, total: 5, spot: "#i-flow" });
  await beat();
  const s = { done: 0, cat: {}, urg: [0, 0, 0, 0], top: [], jevCost: 0, jevTok: 0, errors: 0, llmDone: 0, llmOk: 0, llmCost: 0, scam: 0, deals: 0 };
  I.flow.reset(); I.race.reset();
  I.flow.state("emails", "done", `${n} emails`);
  I.flow.state("jev", "active"); if (raceLlm) I.flow.state("llm", "active"); else I.flow.dim("llm");
  const t0 = performance.now(); let jevEnd = null, llmEnd = null, queued = false, mark = 0;
  I.race.start("jev", 1, true); raceLlm ? I.race.start("llm", 1, true) : I.race.skip("llm", "off");
  const sl = label(small());
  const paint = () => {
    queued = false;
    const now = performance.now(), jt = (jevEnd ?? now) - t0, avgJev = s.done ? s.jevCost / s.done : 0;
    if (mark < 3 && s.done / n >= [0.25, 0.5, 0.75][mark]) {
      cue([
        `<b>${s.done} of ${n}</b> classified after ${fmtMs(jt)}, about <b>${(s.done / Math.max(0.05, jt / 1000)).toFixed(1)} emails a second</b>, and Jev has cost only ${fmtUsd(s.jevCost)} so far.`,
        `Halfway: <b>${s.cat.scam ?? 0} scams</b> flagged and ${s.deals} brand deals found. Each email got a category, urgency, scam and reply score.`,
        `Almost there. ${raceLlm ? `${label(small())} has finished ${s.llmDone} of ${n}; Jev is far ahead.` : `Jev is still running ${JEV_CONC} calls at a time.`}`,
      ][mark], { step: 2 + mark, total: 5, spot: "#i-kpis" });
      mark++;
    }
    const avgLlm = s.llmOk ? s.llmCost / s.llmOk : avgJev ? ((s.jevTok / s.done) * MODELS[small()].inPerM + 90 * MODELS[small()].outPerM) / 1e6 : 0;
    drawInbox(s, {
      kpis: [
        kpi("", "Classified", `${s.done} / ${n}`, s.errors ? `${s.errors} errors` : "5 judgements each"),
        kpi("jev", "Jev throughput", `${(s.done / Math.max(0.05, jt / 1000)).toFixed(1)}/s`, `${fmtMs(jt)} elapsed`),
        kpi("", "Jev spend", fmtUsd(s.jevCost), `${fmtUsd(avgJev * 1000)} per 1,000 emails`),
        raceLlm && s.llmOk ? kpi("", `${sl} spend`, fmtUsd(s.llmCost), `${s.llmOk} ok of ${s.llmDone} · ${fmtMs((llmEnd ?? now) - t0)}`) : kpi("", `${sl} (est.)`, fmtUsd(avgLlm * s.done), "same tokens + 90 out"),
        kpi("gold", `Jev vs ${sl} cost`, avgJev ? (avgLlm / avgJev).toFixed(0) + "×" : "–", `per 1M emails: ${fmtUsd(avgJev * 1e6)} vs ${fmtUsd(avgLlm * 1e6)}`),
        kpi("", "Scams flagged", s.scam, `${s.deals} brand deals found`),
      ].join(""),
    });
    I.race.set("jev", s.done / n); if (raceLlm) I.race.set("llm", s.llmDone / n);
  };
  const schedule = () => { if (!queued) { queued = true; requestAnimationFrame(paint); } };
  const jevRun = pool(emails, JEV_CONC, async (e) => {
    try {
      const r = await api("/api/inbox/jev", { email: e.text }), v = r.value;
      s.done++; s.jevCost += r.costUsd; s.jevTok += r.inputTokens;
      s.cat[v.category] = (s.cat[v.category] ?? 0) + 1;
      s.urg[Math.min(3, Math.round(v.urgency))]++;
      if (v.scam > 0.6) s.scam++; if (v.category === "brand_deal") s.deals++;
      if (v.urgency >= 1.8 && v.scam < 0.5) { s.top.push({ category: v.category, urgency: v.urgency, subject: e.text.split("\n").map((l, i) => (i ? l : l.replace("Subject: ", ""))).join(" · ").slice(0, 70), key: e.text }); s.top = [...new Map(s.top.map((t) => [t.key, t])).values()].sort((a, b) => b.urgency - a.urgency).slice(0, 5); }
      if (s.done % 6 === 1) I.flow.send("emails", "jev", { ms: 300 });
    } catch { s.errors++; s.done++; }
    schedule();
  }).then(() => { jevEnd = performance.now(); I.race.finish("jev", jevEnd - t0); I.flow.state("jev", "done", `${fmtMs(jevEnd - t0)}`); I.flow.send("jev", "dash", { ms: 400, n: 3 }); });
  const llmRun = raceLlm ? pool(emails, LLM_CONC, async (e) => {
    try { const r = await api("/api/inbox/llm", { email: e.text }); if (r) { s.llmOk++; s.llmCost += r.costUsd; } } catch { /* rate limits are expected at scale */ }
    s.llmDone++; if (s.llmDone % 4 === 1) I.flow.send("emails", "llm", { ms: 300 });
    schedule();
  }).then(() => {
    llmEnd = performance.now();
    if (s.llmOk === 0) { I.race.skip("llm", "unavailable"); I.flow.state("llm", "dim", "unavailable"); return; } // never present failed calls as a result
    I.race.finish("llm", llmEnd - t0); I.flow.state("llm", "done", fmtMs(llmEnd - t0));
  }) : Promise.resolve();
  await Promise.all([jevRun, llmRun]); paint();
  const avgJevFinal = s.done ? s.jevCost / s.done : 0;
  cue(`Done: <b>${n} emails in ${fmtMs(jevEnd - t0)}</b> for <b>${fmtUsd(s.jevCost)}</b>. At this price, one million emails would cost about <b>${fmtUsd(avgJevFinal * 1e6)}</b>.${raceLlm && s.llmOk ? ` ${label(small())} needed ${fmtMs(llmEnd - t0)} and ${fmtUsd(s.llmCost)}.` : ""}`, { step: 5, total: 5, spot: "#i-kpis" });
  callout($("#i-note"), [
    `Nothing here generated text. Every email got <b>typed answers</b> (category, urgency, scam, reply), so a dashboard could be drawn straight from them.`,
    `Speed comes from <b>parallel calls</b>: ${JEV_CONC} at a time. More parallelism means an even faster finish, since Jev's cost per email stays the same.`,
    `The donut and histogram are just counts of Jev's answers. <b>${s.scam} scams</b> and <b>${s.deals} brand deals</b> were separated from the noise automatically.`,
  ]);
}

/* ═══════════════════ 4 · Slop filter ═══════════════════ */
const F = { timer: null, idx: 0 };
function initFeed() {
  F.flow = new Flow($("#f-flow"), {
    w: 920, h: 130,
    nodes: [
      { id: "post", x: 90, y: 65, label: "New post", color: "io", w: 130 },
      { id: "jev", x: 340, y: 65, label: "Jev", sub: "kind · slop · worth", color: "jev", w: 170 },
      { id: "label", x: 590, y: 65, label: "Your rules", sub: "hide / boost / keep", color: "code", w: 150 },
      { id: "feed", x: 810, y: 65, label: "Clean feed", color: "good", w: 130 },
    ],
    edges: [["post", "jev"], ["jev", "label"], ["label", "feed"]].map(([from, to]) => ({ from, to })),
  });
  $("#f-hide").addEventListener("change", (e) => {
    $("#f-feed").classList.toggle("hideslop", e.target.checked);
    if (e.target.checked) cue(`Your rule: hide anything Jev calls AI slop. <b>${F.slop ?? 0} posts vanished</b> with zero extra model calls, because the label was already attached.`, { spot: "#f-feed" });
  });
  $("#f-go").addEventListener("click", startFeed);
  $("#f-stop").addEventListener("click", () => { clearInterval(F.timer); $("#f-go").disabled = false; });
  paintFeed();
}
function startFeed() {
  clearInterval(F.timer);
  $("#f-go").disabled = true; $("#f-feed").innerHTML = ""; $("#f-note").innerHTML = "";
  resetRun();
  cue("Posts stream in. Jev labels each one <b>as it lands</b>: its kind, how likely it is machine-written, and whether it is worth reading. One call each.", { step: 1, total: 4, spot: "#f-feed" });
  Object.assign(F, { n: 0, slop: 0, ms: 0, cost: 0, tok: 0, idx: 0, done: 0 });
  paintFeed();
  const MAX = 24;
  F.timer = setInterval(async () => {
    if (F.n >= MAX) {
      clearInterval(F.timer); $("#f-go").disabled = false;
      setTimeout(() => {
        cue(`Feed complete: <b>${F.done} posts</b> judged at ${F.done ? fmtMs(F.ms / F.done) : "–"} each, <b>${F.slop} flagged as slop</b>, total Jev spend ${fmtUsd(F.cost)}.`, { step: 4, total: 4, spot: "#f-kpis" });
        callout($("#f-note"), [
          `Each label took about <b>${F.done ? fmtMs(F.ms / F.done) : "–"}</b>, fast enough to run <b>before a post is even shown</b>. An LLM per post would be visibly slow and far pricier.`,
          `The filter is a one-line rule on Jev's answer (<b>kind = ai_slop</b>). Change the rule, not the model.`,
        ]);
      }, 1500);
      return;
    }
    const p = SAMPLES.feedPosts[F.idx++ % SAMPLES.feedPosts.length]; F.n++;
    const card = document.createElement("div");
    card.className = "post"; card.innerHTML = `<div>${esc(p.text)}</div><div class="meta"><span class="pending">Jev is judging…</span></div>`;
    $("#f-feed").prepend(card);
    F.flow.send("post", "jev", { ms: 250 });
    try {
      const r = await api("/api/feed/label", { post: p.text }), v = r.value;
      card.style.setProperty("--pc", KIND_COLORS[v.kind]);
      if (v.kind === "ai_slop") { card.classList.add("slop"); F.slop++; }
      card.querySelector(".meta").innerHTML = `<span class="badge tone-${v.kind}">${v.kind.replace("_", " ")}</span><span>${fmtPct(v.kindConfidence)} sure</span><span>AI-written ${fmtPct(v.aiWritten)}</span><span>worth reading ${v.worthReading.toFixed(1)}/3</span><span style="margin-left:auto">${fmtMs(r.latencyMs)}${r.simulated ? " · simulated" : ""}</span>`;
      F.done++; F.ms += r.latencyMs; F.cost += r.costUsd; F.tok += r.inputTokens;
      if (F.done === 1) cue(`First post labelled <b>${v.kind.replace("_", " ")}</b> in ${fmtMs(r.latencyMs)}, ${fmtPct(v.kindConfidence)} sure. That single call also scored AI-written and worth-reading.`, { step: 2, total: 4, spot: "#f-flow" });
      if (v.kind === "ai_slop" && F.slop === 1) cue(`Caught one: flagged <b>AI slop</b> (${fmtPct(v.aiWritten)} likely machine-written). Tick “hide slop” to remove it from the feed.`, { step: 3, total: 4 });
      F.flow.state("jev", "active", fmtMs(r.latencyMs)); F.flow.send("jev", "label", { ms: 200 }).then(() => F.flow.send("label", "feed", { ms: 200, color: v.kind === "ai_slop" ? "var(--k4)" : "good" }));
    } catch (e) { card.querySelector(".meta").innerHTML = `<span class="err">${esc(e.message)}</span>`; }
    paintFeed();
  }, 750);
}
function paintFeed() {
  const m = MODELS[small()], avgTok = F.done ? F.tok / F.done : 0, est = F.done * ((avgTok * m.inPerM + 70 * m.outPerM) / 1e6);
  $("#f-kpis").innerHTML = [
    kpi("", "Posts judged", F.done ?? 0, `${F.n ?? 0} sent`), kpi("", "Slop flagged", F.slop ?? 0, "hidden when the toggle is on"),
    kpi("jev", "Avg Jev latency", F.done ? fmtMs(F.ms / F.done) : "–", "per post, live"),
    kpi("", "Jev spend", fmtUsd(F.cost ?? 0), `${esc(m.label)} would be ~${fmtUsd(est)} (est.)`),
  ].join("");
}

/* ═══════════════════ 5 · Title scorer ═══════════════════ */
const TI = {};
const ROW_H = 44;
function initTitles() {
  buildTitles();
  $("#ti-go").addEventListener("click", () => busy($("#ti-go"), $("#ti-kpis"), runTitles));
}
function buildTitles() {
  TI.flow = new Flow($("#ti-flow"), {
    w: 920, h: 130,
    nodes: [
      { id: "topic", x: 90, y: 65, label: "Topic", color: "io", w: 130 },
      { id: "writer", x: 330, y: 65, label: label(small()), sub: "writes candidates", color: "light", w: 170 },
      { id: "jev", x: 590, y: 65, label: "Jev ×N", sub: "scores each, parallel", color: "jev", w: 170 },
      { id: "board", x: 830, y: 65, label: "Leaderboard", color: "good", w: 130 },
    ],
    edges: [["topic", "writer"], ["writer", "jev"], ["jev", "board"]].map(([from, to]) => ({ from, to })),
  });
}
function layoutBoard(rows) {
  const sorted = [...rows].sort((a, b) => (b.score ?? -1) - (a.score ?? -1));
  sorted.forEach((r, i) => { r.el.style.top = i * ROW_H + "px"; r.el.querySelector(".rk").textContent = i + 1; r.el.classList.toggle("first", i === 0 && r.score != null); });
}
async function runTitles() {
  const topic = $("#ti-topic").value.trim(), n = +$("#ti-n").value; if (!topic) throw new Error("Enter a topic");
  const board = $("#ti-board"); board.innerHTML = ""; $("#ti-kpis").innerHTML = ""; $("#ti-note").innerHTML = ""; TI.flow.reset();
  resetRun();
  cue(`<b>${label(small())}</b> writes ${n} candidate titles. Writing is what an LLM is for.`, { step: 1, total: 4, spot: "#ti-flow" });
  await beat();
  TI.flow.state("topic", "done", "");
  const stopW = TI.flow.timer("writer"); TI.flow.send("topic", "writer", { ms: 300 });
  const gen = await api("/api/titles/generate", { topic, n }); stopW(fmtMs(gen.latencyMs ?? 0));
  cue(`Now <b>Jev scores every title in parallel</b>, four judgements each: click appeal, clarity, hype and specificity. No text is generated; the leaderboard re-ranks as scores arrive.`, { step: 2, total: 4, spot: "#ti-board" });
  await beat();
  board.style.height = gen.titles.length * ROW_H + "px";
  const rows = gen.titles.map((t) => {
    const d = document.createElement("div"); d.className = "trow";
    d.innerHTML = `<div class="rk">·</div><div class="ttl" title="${esc(t)}">${esc(t)}</div><div class="sc"><div class="track"><div class="fill" style="background:var(--accent)"></div></div><b class="muted">…</b></div>`;
    board.appendChild(d); return { title: t, el: d, score: null };
  });
  rows.forEach((r, i) => (r.el.style.top = i * ROW_H + "px"));
  await TI.flow.send("writer", "jev", { ms: 400, n: 4 });
  const t0 = performance.now(), stopJ = TI.flow.timer("jev"); let cost = 0, tok = 0, done = 0;
  await pool(rows, 8, async (r) => {
    const res = await api("/api/titles/score", { title: r.title, topic }), v = res.value;
    r.score = v.composite; cost += res.costUsd; tok += res.inputTokens; done++;
    const fill = r.el.querySelector(".fill"), b = r.el.querySelector("b");
    fill.style.width = v.composite + "%"; b.textContent = v.composite; b.className = "";
    r.el.title = `click appeal ${v.clickAppeal.toFixed(1)}/4 · clarity ${v.clarity.toFixed(1)}/3 · hype ${fmtPct(v.clickbait)} · specific ${fmtPct(v.specific)}`;
    layoutBoard(rows);
    TI.flow.send("jev", "board", { ms: 250 });
  });
  const jevMs = performance.now() - t0; stopJ(fmtMs(jevMs));
  const best = [...rows].sort((a, b) => b.score - a.score)[0];
  cue(`All ${done} titles judged in <b>${fmtMs(jevMs)}</b> for <b>${fmtUsd(cost)}</b>. Winner: “${esc(best.title.slice(0, 60))}” at <b>${best.score}/100</b>.`, { step: 4, total: 4, spot: "#ti-board" });
  callout($("#ti-note"), [
    `The <b>LLM writes, Jev judges</b>: two different jobs, two different models, one pipeline.`,
    `Scoring ${done} titles cost ${fmtUsd(cost)}. Scaling to a thousand candidates is still pennies, which is what makes “generate many, keep the best” practical.`,
  ]); TI.flow.state("board", "done", `#1 scored ${Math.max(...rows.map((r) => r.score))}`);
  const m = MODELS[small()], est = (done * ((tok / done) * m.inPerM + 90 * m.outPerM)) / 1e6;
  $("#ti-kpis").innerHTML = [
    kpi("jev", `Jev scored ${done} titles${gen.simulated ? " · titles simulated" : ""}`, fmtMs(jevMs), "in parallel, four judgements each"),
    kpi("", "Jev cost", fmtUsd(cost), `${fmtUsd((cost / done) * 1000)} per 1,000 titles`),
    kpi("", `${esc(m.label)} as judge (est.)`, fmtUsd(est), `${(est / cost).toFixed(0)}× more, and slower`),
    kpi("gold", "Winner", `${Math.max(...rows.map((r) => r.score))}/100`, esc([...rows].sort((a, b) => b.score - a.score)[0].title.slice(0, 44))),
  ].join("");
}

/* ═══════════════════ 6 · Cost at scale ═══════════════════ */
let lastCost, costTimer;
function initCost() {
  document.querySelectorAll("#view-cost input").forEach((i) => i.addEventListener("input", () => {
    drawCost();
    clearTimeout(costTimer);
    costTimer = setTimeout(costCue, 450);
  }));
  drawCost();
}
function costCue() {
  const c = lastCost; if (!c) return;
  cue(`At <b>${c.vol.toLocaleString()}</b> decisions a day, Jev costs <b>${fmtUsd(c.j.month)}</b> a month. ${label(big())} costs <b>${fmtUsd(c.bg.month)}</b> (<b>${(c.bg.month / c.j.month).toFixed(0)}×</b> more). Same decisions, different bill.`, { step: 1, total: 1, spot: "#c-bars" });
}
function drawCost() {
  const vol = Math.round(10 ** +$("#c-vol").value), tin = +$("#c-in").value, tout = +$("#c-out").value;
  $("#c-vol-l").textContent = vol.toLocaleString(); $("#c-in-l").textContent = tin.toLocaleString(); $("#c-out-l").textContent = tout;
  const rows = [
    { k: "jev", name: "Jev", color: "var(--accent)", per: (tin * STATUS.jevInPerM) / 1e6 },
    ...Object.entries(MODELS).map(([k, m]) => ({ k, name: m.label, color: "var(--k7)", per: (tin * m.inPerM + tout * m.outPerM) / 1e6 })),
  ].map((r) => ({ ...r, month: r.per * vol * 30 })).sort((a, b) => a.month - b.month);
  const mx = Math.max(...rows.map((r) => r.month));
  $("#c-bars").innerHTML = rows.map((r) => `<div class="cbar"><b style="text-align:left;${r.k === "jev" ? "color:var(--accent)" : ""}">${esc(r.name)}</b><div class="track"><div class="fill" style="width:${Math.max(0.6, (r.month / mx) * 100)}%;background:${r.color}"></div></div><b>${fmtUsd(r.month)} <span class="muted" style="font-weight:400">/ mo</span></b></div>`).join("");
  const by = Object.fromEntries(rows.map((r) => [r.k, r])), j = by.jev, sm = by[small()], bg = by[big()];
  $("#c-kpis").innerHTML = [
    kpi("jev", "Jev per month", fmtUsd(j.month), `${fmtUsd(j.per * 1000)} per 1,000 decisions`),
    kpi("", `${esc(bg.name)} per month`, fmtUsd(bg.month), `${(bg.month / j.month).toFixed(0)}× Jev`),
    kpi("gold", `Jev vs ${esc(sm.name)}`, (sm.month / j.month).toFixed(0) + "×", `saves ${fmtUsd(sm.month - j.month)} a month`),
    kpi("", `Saved vs ${esc(bg.name)} / year`, fmtUsd((bg.month - j.month) * 12), "at this volume"),
  ].join("");
  lastCost = { vol, j, sm, bg };
}

/* ═══════════════════ Demo mode: guides, tab intros and the guided tour ═══════════════════ */
const EXPLAIN = {
  overview: { title: "How Jev works", body: "Start here. This page explains the idea the other six demos build on: <b>an LLM writes text, Jev returns a typed decision</b>.", steps: ["Press <b>Run the duel</b> and watch both finish.", "Click each answer type (choice, score, yes/no) to see the shape of Jev's output.", "Then open <b>LLM router</b> for the first real demo."] },
  router: { title: "LLM router", body: "Jev reads each prompt and picks the <b>cheapest model that can handle it</b>. Easy prompts skip the expensive tier.", steps: ["Click a sample chip, for example <b>Rewrite</b> (easy) or <b>Race condition</b> (hard).", "Press <b>Route &amp; answer</b>.", "Watch the packet travel Jev → one model. The other tiers stay dark: that is the saving."] },
  triage: { title: "Ticket triage", body: "One Jev call answers <b>six questions</b> about a support ticket. Plain if-statements then decide what happens.", steps: ["Pick a sample ticket such as <b>Cancel threat</b>.", "Press <b>Triage ticket</b>.", "Read the action. The small-model race is off in this classroom copy so a missing model is not shown as a win."] },
  inbox: { title: "Inbox at scale", body: "Classify a whole inbox <b>in parallel</b>. This is where cheap, fast decisions add up.", steps: ["Leave the size at 60.", "Press <b>Classify inbox</b>.", "Watch the donut, histogram and estimated cost-per-million update live."] },
  feed: { title: "Slop filter", body: "Posts stream in and Jev labels each one in real time. A one-line rule can then hide the slop.", steps: ["Press <b>Start feed</b>.", "Watch the labels appear a fraction of a second after each post.", "Tick <b>hide AI slop</b> to clean the feed instantly."] },
  titles: { title: "Title scorer", body: "An LLM <b>writes</b> titles and Jev <b>judges</b> them. Two models, each doing what it is best at.", steps: ["Keep or change the topic.", "Press <b>Generate &amp; rank</b>.", "Watch the leaderboard re-rank as Jev's scores arrive."] },
  cost: { title: "Cost at scale", body: "The same decisions priced across every model. Small per-call gaps become large monthly bills.", steps: ["Drag <b>Decisions per day</b> up to a million.", "Compare Jev's bar with each model.", "Try more input tokens to see how the gap grows."] },
};
const TAB_INTRO = {
  overview: "Welcome. The idea in one line: <b>an LLM writes text, Jev returns a typed decision</b>. Run the duel to see the difference.",
  router: "<b>LLM router.</b> Jev decides which model should answer, before any expensive model is called. Pick a sample and press Route.",
  triage: "<b>Ticket triage.</b> One Jev call, six typed questions, then plain code decides. Pick a ticket and press Triage.",
  inbox: "<b>Inbox at scale.</b> Hundreds of emails, classified in parallel. Press Classify inbox and watch the clock.",
  feed: "<b>Slop filter.</b> Jev labels a stream of posts live. Press Start feed, then try “hide slop”.",
  titles: "<b>Title scorer.</b> An LLM writes titles, Jev scores them in parallel. Press Generate &amp; rank.",
  cost: "<b>Cost at scale.</b> The same decisions priced across every model. Drag the slider up to see the gap grow.",
};
function tabCue(id) { resetRun(); cue(TAB_INTRO[id]); }

let touring = false;
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
async function runAndWait(sel, timeout = 120000) {
  const b = $(sel); b.click(); await wait(250);
  const t = Date.now();
  while (touring && b.disabled && Date.now() - t < timeout) await wait(150);
}
async function narrate(html, opts, mult = 2) { cue(html, opts); await wait(demo.paceMs * mult); }
const setTourButton = () => { $("#n-tour").textContent = touring ? "■ Stop tour" : "▶ Guided tour"; };
function stopTour() { touring = false; setTourButton(); }
async function startTour() {
  if (touring) return;
  touring = true; setDemo(true); renderControls(); setTourButton();
  $("#hero").scrollIntoView({ block: "start" });
  try {
    showTab("overview"); await narrate("Welcome to the guided tour. About two minutes, six demos. First, the core idea.", { step: 1, total: 8, label: "Tour" }, 2.5);
    if (touring) await runAndWait("#o-run");
    if (touring) { showTab("router"); $("#r-baseline").checked = false; $$chip("#r-samples", 2); await narrate("Demo 1: the <b>LLM router</b>. First, an easy request: a simple rewrite.", { step: 2, total: 8, label: "Tour" }); await runAndWait("#r-go"); }
    if (touring) { $$chip("#r-samples", 7); await narrate("Now a genuinely hard prompt. Watch Jev choose a different tier.", { step: 3, total: 8, label: "Tour" }); await runAndWait("#r-go"); }
    if (touring) { showTab("triage"); $$chip("#t-samples", 2); await narrate("Demo 2: <b>ticket triage</b>. An angry customer threatening to cancel.", { step: 4, total: 8, label: "Tour" }); await runAndWait("#t-go"); }
    if (touring) { showTab("inbox"); $("#i-n").value = "25"; $("#i-race").checked = false; await narrate("Demo 3: <b>an inbox at scale</b>. 25 emails, classified in parallel.", { step: 5, total: 8, label: "Tour" }); await runAndWait("#i-go"); }
    if (touring) { showTab("feed"); await narrate("Demo 4: a <b>live slop filter</b>. A short feed streams in.", { step: 6, total: 8, label: "Tour" }); $("#f-go").click(); await wait(9500); if (touring) { $("#f-hide").checked = true; $("#f-hide").dispatchEvent(new Event("change")); await wait(demo.paceMs * 2); } $("#f-stop").click(); }
    if (touring) { showTab("titles"); $("#ti-n").value = "8"; await narrate("Demo 5: an <b>LLM writes titles, Jev ranks them</b>.", { step: 7, total: 8, label: "Tour" }); await runAndWait("#ti-go"); }
    if (touring) { showTab("cost"); const v = $("#c-vol"); v.value = "6"; v.dispatchEvent(new Event("input")); await wait(demo.paceMs * 4); }
    if (touring) { showTab("overview"); $("#hero").scrollIntoView({ block: "start" }); cue("That was the tour. Open any tab and run it yourself. Numbers stay <b>simulated</b> in this classroom copy.", { step: 8, total: 8, label: "Tour" }); }
  } finally { stopTour(); }
}
function $$chip(container, i) { document.querySelectorAll(container + " .chip")[i]?.click(); }
