/* Classroom engine for the learning-hub copy.
 * Same offline heuristics as the MIT demo (src/router.ts, triage.ts, usecases.ts, llm.ts).
 * There is no server and no API key: Jev answers are simulated, and LLM race lanes return null
 * so a missing model is never shown as a measured win. */

const TIERS = ["light", "standard", "frontier"];
const MIN_CONFIDENCE = 0.6;

export const JEV_IN_PER_M = 0.042;

export const MODELS = {
  haiku: { id: "claude-haiku-4-5", label: "Haiku 4.5", provider: "claude", inPerM: 1, outPerM: 5 },
  sonnet: { id: "claude-sonnet-5", label: "Sonnet 5", provider: "claude", inPerM: 2, outPerM: 10 },
  opus: { id: "claude-opus-5", label: "Opus 5", provider: "claude", inPerM: 5, outPerM: 25 },
  kimiK26: { id: "kimi-k2.6", label: "Kimi K2.6", provider: "kimi", inPerM: 0.95, outPerM: 4 },
  kimiK3: { id: "kimi-k3", label: "Kimi K3", provider: "kimi", inPerM: 3, outPerM: 15 },
};

export const PROVIDERS = {
  claude: { label: "Claude", tiers: { light: "haiku", standard: "sonnet", frontier: "opus" }, small: "haiku", mid: "sonnet", big: "opus" },
  kimi: { label: "Kimi", tiers: { light: "kimiK26", standard: "kimiK3", frontier: "kimiK3" }, small: "kimiK26", mid: "kimiK3", big: "kimiK3" },
};

const SIM = {
  haiku: { latency: 800, outTok: 140 },
  sonnet: { latency: 2200, outTok: 380 },
  opus: { latency: 3800, outTok: 520 },
  kimiK26: { latency: 900, outTok: 160 },
  kimiK3: { latency: 4500, outTok: 420 },
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const jitter = (base) => Math.round(base * (0.85 + Math.random() * 0.3));
const has = (text, re) => re.test(String(text).toLowerCase());
const jevCost = (inTok) => (inTok * JEV_IN_PER_M) / 1e6;
const llmCost = (model, inTok, outTok) => (inTok * MODELS[model].inPerM + outTok * MODELS[model].outPerM) / 1e6;

function providerOf(body) {
  return body && body.provider === "kimi" ? "kimi" : "claude";
}

async function jevCall(state, questionCount, mock) {
  const started = performance.now();
  const text = typeof state === "string" ? state : JSON.stringify(state);
  const inputTokens = Math.ceil(text.length / 4) + 60 * questionCount;
  await sleep(70 + Math.random() * 130);
  return {
    value: mock(),
    latencyMs: Math.round(performance.now() - started),
    inputTokens,
    costUsd: jevCost(inputTokens),
    simulated: true,
  };
}

async function complete(model, prompt) {
  const started = performance.now();
  const info = MODELS[model];
  const sim = SIM[model];
  const inputTokens = Math.ceil(String(prompt).length / 4) + 20;
  await sleep(jitter(sim.latency));
  return {
    model,
    text: `[Simulated ${info.label} response: this classroom copy has no API key, so this is a placeholder. The latency and cost are the teaching numbers.]`,
    inputTokens,
    outputTokens: sim.outTok,
    latencyMs: Math.round(performance.now() - started),
    costUsd: llmCost(model, inputTokens, sim.outTok),
    simulated: true,
  };
}

function routeHeuristic(prompt) {
  const p = prompt.toLowerCase();
  let hard = 0;
  if (/prove|proof|distributed|consensus|architect|race condition|deadlock|optimi[sz]e|trade-?offs?|migration plan|threat model/.test(p)) hard += 2;
  if (/step by step|derive|why does|root cause|design a|from scratch/.test(p)) hard += 1;
  if (prompt.length > 900) hard += 1;
  let std = 0;
  if (/refactor|function|code|bug|sql|summari[sz]e|analy[sz]e|compare|write an? (email|essay|report)/.test(p)) std += 1;
  if (prompt.length > 300) std += 1;
  const tier = hard >= 2 ? "frontier" : hard + std >= 1 ? "standard" : "light";
  const top = tier === "light" ? 0.9 : tier === "standard" ? 0.78 : 0.86;
  const rest = (1 - top) / 2;
  return {
    jevTier: tier,
    probabilities: Object.fromEntries(TIERS.map((t) => [t, t === tier ? top : rest])),
    confidence: top,
    complexity: { light: 0.4, standard: 1.7, frontier: 2.7 }[tier],
    needsReasoning: { light: 0.05, standard: 0.4, frontier: 0.9 }[tier],
  };
}

async function decide(prompt, provider) {
  const r = await jevCall(prompt.slice(0, 60000), 3, () => routeHeuristic(prompt));
  const idx = TIERS.indexOf(r.value.jevTier);
  const escalated = r.value.confidence < MIN_CONFIDENCE && idx < TIERS.length - 1;
  const tier = escalated ? TIERS[idx + 1] : r.value.jevTier;
  return {
    ...r.value,
    tier,
    escalated,
    provider,
    model: PROVIDERS[provider].tiers[tier],
    latencyMs: r.latencyMs,
    inputTokens: r.inputTokens,
    costUsd: r.costUsd,
    simulated: true,
  };
}

function triageHeuristic(ticket) {
  const department = has(ticket, /charged|refund|invoice|payment|billing|card/)
    ? "billing"
    : has(ticket, /error|bug|crash|down|outage|api|500|not working|broken/)
      ? "technical"
      : has(ticket, /password|login|log in|access|seat|account/)
        ? "account"
        : has(ticket, /pricing|quote|demo|enterprise|upgrade/)
          ? "sales"
          : "other";
  const spam = has(ticket, /seo|backlinks|crypto|winner|click here|guaranteed/) ? 0.95 : 0.03;
  const relaxed = has(ticket, /nothing urgent|not urgent|no rush|whenever you/);
  const urgency = relaxed ? 0.5 : has(ticket, /production|down|outage|asap|urgent|immediately|losing/) ? 2.8 : has(ticket, /today|blocked|can't/) ? 2.1 : 0.7;
  const frustration = has(ticket, /unacceptable|furious|worst|scam|ridiculous|!!/) ? 2.7 : has(ticket, /again|still|third time|frustrat/) ? 1.8 : 0.4;
  return {
    department,
    departmentConfidence: 0.9,
    urgency,
    frustration,
    refundRequested: has(ticket, /refund|money back/) ? 0.94 : 0.04,
    churnRisk: has(ticket, /cancel|switch to|leaving|competitor/) ? 0.88 : 0.05,
    spam,
  };
}

function decideAction(t) {
  const pct = (n) => `${Math.round(n * 100)}%`;
  if (t.spam > 0.7) return { action: "discard", reasons: [`spam ${pct(t.spam)}`] };
  const reasons = [];
  if (t.churnRisk > 0.6) reasons.push(`churn risk ${pct(t.churnRisk)}`);
  if (t.urgency >= 2.2) reasons.push(`urgency ${t.urgency.toFixed(1)}/3`);
  if (t.frustration >= 2.2) reasons.push(`frustration ${t.frustration.toFixed(1)}/3`);
  if (t.refundRequested > 0.7 && t.department === "billing") reasons.push("refund request");
  return reasons.length ? { action: "escalate", reasons } : { action: "auto-reply", reasons: ["low urgency, low churn risk"] };
}

function inboxHeuristic(email) {
  const category = has(email, /verify your account|password will expire|wire transfer|gift card|prince|lottery/) ? "scam"
    : has(email, /sponsor|brand deal|collab|paid partnership|ambassador/) ? "brand_deal"
    : has(email, /invoice|receipt|payment (received|failed)|payout|billing/) ? "invoice"
    : has(email, /newsletter|this week in|unsubscribe|digest/) ? "newsletter"
    : has(email, /quick call|book a demo|grow your|10x|our agency|leads/) ? "cold_pitch"
    : has(email, /help|not working|broken|refund|can't|question|thank/) ? "customer" : "other";
  return {
    category,
    categoryConfidence: 0.88,
    urgency: has(email, /urgent|asap|immediately|today|down/) ? (category === "scam" ? 0.4 : 2.6) : category === "customer" ? 1.8 : category === "brand_deal" ? 1.9 : 0.5,
    scam: category === "scam" ? 0.93 : 0.03,
    needsReply: category === "customer" || category === "brand_deal" ? 0.9 : 0.06,
  };
}

function feedHeuristic(post) {
  const slop = has(post, /game[- ]?changer|unlock|here'?s the thing|let that sink in|thread 🧵|10 ways|nobody is talking about|🚀|🔥/);
  const kind = slop ? "ai_slop"
    : has(post, /just released|announcing|now available|launch(ed|es)|breaking/) ? "breaking"
    : has(post, /giveaway|use code|link in bio|discount|dm me/) ? "promo"
    : has(post, /benchmark|tip:|how to|repo|paper|latency|we measured|open.?source/) ? "golden_nugget"
    : has(post, /unpopular opinion|overrated|hot take|dead/) ? "hot_take" : "noise";
  return {
    kind,
    kindConfidence: 0.85,
    aiWritten: slop ? 0.94 : 0.08,
    worthReading: { breaking: 2.6, golden_nugget: 2.8, hot_take: 1.2, promo: 0.4, ai_slop: 0.2, noise: 0.3 }[kind],
  };
}

function titleScore(title) {
  const specific = /\d|build|step|vs|tutorial|how to/i.test(title) ? 0.8 : 0.25;
  const clickbait = /insane|shocking|you won't believe|secret|!!/i.test(title) ? 0.85 : 0.1;
  const t = { clickAppeal: 1.4 + (title.length % 7) * 0.32, clarity: specific > 0.5 ? 2.4 : 1.3, clickbait, specific };
  const composite = Math.round(Math.max(0, Math.min(100, (t.clickAppeal / 4) * 45 + (t.clarity / 3) * 25 + t.specific * 15 + (1 - t.clickbait) * 15)));
  return { ...t, composite };
}

export const routerPrompts = [
  { label: "Greeting", text: "Hey! Can you say hi and tell me what you can help with in one sentence?" },
  { label: "Capital lookup", text: "What is the capital of Australia?" },
  { label: "Rewrite", text: "Rewrite this to sound more professional: 'hey, just checking if u got my invoice, need it paid asap thx'" },
  { label: "Extract fields", text: "Extract the name, company and email from: 'Hi, I'm Priya Nair from Acme Robotics, reach me at priya@acmerobotics.io'. Return JSON." },
  { label: "SQL query", text: "Write a SQL query that returns the top 5 customers by total order value in the last 90 days from tables customers(id, name) and orders(id, customer_id, total, created_at)." },
  { label: "Refactor", text: "Refactor this function to be easier to test and explain what you changed:\n\nfunction process(o){ if(o.items.length>0){ let t=0; for(let i=0;i<o.items.length;i++){ t+=o.items[i].p*o.items[i].q } if(o.coupon){ t=t-t*0.1 } db.save({id:o.id,total:t}); email.send(o.user,'Total: '+t) } }" },
  { label: "Cargo warehouse", text: "Compare a Fabric lakehouse with Kafka-based CDC for syncing a cargo booking database to an analytics warehouse. Give a recommendation and the trade-offs for a six-person architecture team." },
  { label: "Race condition", text: "Our job queue occasionally processes the same payment twice under load. Workers use SELECT ... WHERE status='pending' LIMIT 1, then UPDATE status='processing' in a separate statement, with retries on timeout. Find the root cause, explain every way a duplicate can happen, and design a fix that stays correct across a primary failover." },
  { label: "Design a system", text: "Design a multi-region, eventually consistent rate limiter for an API gateway handling 200k req/s that must never allow more than 2x the configured limit even during a network partition. Justify each trade-off and describe failure modes." },
  { label: "Proof", text: "Prove that the sum of the first n odd numbers is n^2, then use that to derive a closed form for the sum of the first n cubes, showing each step." },
];

export const tickets = [
  { label: "Double charge", text: "Subject: Charged twice\nI was charged $49 twice on the 3rd for the same plan. Please refund the duplicate charge." },
  { label: "Prod outage", text: "Subject: API returning 500s\nOur production integration has been returning 500 errors for the last 20 minutes and we are losing orders. This is URGENT, please get an engineer on this immediately." },
  { label: "Cancel threat", text: "Subject: Third time asking\nThis is the third time I'm asking about my broken export. This is unacceptable. If it isn't fixed this week we're switching to a competitor and cancelling our annual plan." },
  { label: "Password reset", text: "Subject: Can't log in\nHi, I forgot my password and the reset email isn't arriving. No rush, whenever you get a chance." },
  { label: "Pricing question", text: "Subject: Enterprise pricing\nWe're a team of 120 and are interested in the enterprise tier. Could someone send a quote and set up a demo next week?" },
  { label: "SEO spam", text: "Subject: Guaranteed #1 ranking\nClick here to buy 10,000 SEO backlinks for $9. Guaranteed first page on Google or your money back!!" },
  { label: "Feature how-to", text: "Subject: Question about webhooks\nHello! Is there a way to filter which events get sent to a webhook endpoint? Nothing urgent, just planning our integration." },
  { label: "Angry billing", text: "Subject: SCAM\nYou raised my price without telling me and charged my card $199. This is ridiculous and the worst billing experience I've had. Refund me right now or I'll dispute it with my bank!!" },
];

export const feedPosts = [
  { label: "Launch", text: "Just released: our new open-source vector index. 3x faster builds, MIT licensed. Repo + benchmarks in the thread." },
  { label: "Slop", text: "🚀 AI is a GAME-CHANGER and nobody is talking about it. Here's the thing: the future belongs to those who adapt. Let that sink in. 🔥" },
  { label: "Nugget", text: "Tip: cache your system prompt and put per-request data after the last cache breakpoint. We measured 71% lower input cost on a 6k token prefix." },
  { label: "Promo", text: "GIVEAWAY! Follow, retweet and DM me 'AI' to win a free course. Use code SAVE50 for 50% off today only!" },
  { label: "Hot take", text: "Unpopular opinion: RAG is overrated. Most teams just need better search and a good prompt." },
  { label: "Noise", text: "monday again. coffee." },
  { label: "Breaking", text: "Breaking: the regulator has announced new disclosure rules for AI-generated ads, effective next quarter." },
  { label: "Slop", text: "10 ways AI will unlock your productivity 🧵 Number 7 will BLOW YOUR MIND. Bookmark this and thank me later." },
  { label: "Nugget", text: "How to cut LLM router latency: classify with a small typed model first, then only call the big model when confidence is low. p50 went 2.1s → 0.8s." },
  { label: "Launch", text: "Now available: streaming structured outputs in our SDK. Docs and migration guide linked below." },
  { label: "Hot take", text: "Dashboards are dead. Everything is going to be a chat box in two years." },
  { label: "Slop", text: "In today's fast-paced world, leveraging cutting-edge AI is no longer optional. It's a game-changer. Are you ready to unlock your potential? 🚀" },
];

const NAMES = ["Priya", "Marcus", "Ana", "Kenji", "Sofia", "Omar", "Lena", "Tom", "Ivy", "Raj"];
const COMPANIES = ["Northwind", "Acme Robotics", "Lumen Labs", "Bluepeak", "Orbit AI", "Fable Foods", "Helix", "Nimbus"];
const TEMPLATES = [
  (n, c) => `Subject: Paid partnership with ${c}\nHi, I'm ${n} from ${c}. We loved your content and would like to sponsor a video. Budget is $4,000. Are you open to a brand deal?`,
  (n, c) => `Subject: Your receipt from ${c}\nPayment received: $49.00. Invoice #${1000 + n.length * 37} is attached. Thanks for your business.`,
  (n, c) => `Subject: This week in AI, ${c} digest\nTop stories this week. Read online or unsubscribe at any time.`,
  (n, c) => `Subject: Quick call?\nHi, ${n} here from ${c}. Our agency can 10x your leads. Can we book a demo this week?`,
  (n) => `Subject: Help, export not working\nHi, it's ${n}. The export button is broken again and I have a deadline today. Can someone help asap?`,
  (n, c) => `Subject: Verify your account immediately\nYour ${c} password will expire in 24 hours. Click the link to verify your account or it will be suspended.`,
  (n) => `Subject: Thank you!\nJust wanted to say thanks, ${n} here. The tutorial helped me ship my first automation. Question: does it support webhooks?`,
  (n, c) => `Subject: Wire transfer needed\nHi, this is the CEO of ${c}. I need you to buy gift cards urgently and send the codes. Do not tell anyone. - ${n}`,
  (n, c) => `Subject: Ambassador program at ${c}\nHey! ${n} here. We're launching an ambassador program with a collab package and paid partnership. Interested?`,
  (n) => `Subject: lunch thursday?\nHey, it's ${n}. Are we still on for lunch Thursday?`,
];

export function makeEmails(n) {
  let seed = 42;
  const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 2 ** 32);
  return Array.from({ length: n }, (_, i) => {
    const t = TEMPLATES[Math.floor(rnd() * TEMPLATES.length)];
    const name = NAMES[Math.floor(rnd() * NAMES.length)];
    const company = COMPANIES[Math.floor(rnd() * COMPANIES.length)];
    return { label: `#${i + 1}`, text: t(name, company) };
  });
}

function status() {
  const note = "Classroom copy: no API key. Decisions use the offline heuristic.";
  const provider = (key) => ({
    ...PROVIDERS[key],
    state: "simulated",
    note,
    keySource: "classroom",
    budget: { spentUsd: 0, capUsd: 0 },
  });
  return {
    jev: "simulated",
    jevNote: note,
    jevSource: "classroom",
    jevInPerM: JEV_IN_PER_M,
    hosted: true,
    models: MODELS,
    providers: { claude: provider("claude"), kimi: provider("kimi") },
  };
}

export async function handle(path, params, body) {
  const b = body || {};
  const provider = providerOf(b);
  if (path === "/api/status") return status();
  if (path === "/api/samples") return { routerPrompts, tickets, feedPosts };
  if (path === "/api/inbox/sample") {
    const n = Math.min(500, Math.max(5, Math.round(Number(params.get("n")) || 60)));
    return makeEmails(n);
  }
  if (path === "/api/route/decide") return decide(String(b.prompt || ""), provider);
  if (path === "/api/route/answer") {
    const tier = TIERS.includes(b.tier) ? b.tier : "light";
    return complete(PROVIDERS[provider].tiers[tier], String(b.prompt || ""));
  }
  if (path === "/api/triage/jev") {
    const ticket = String(b.ticket || "");
    const r = await jevCall(ticket, 6, () => triageHeuristic(ticket));
    const jev = { triage: r.value, latencyMs: r.latencyMs, costUsd: r.costUsd, inputTokens: r.inputTokens, simulated: true };
    return { jev, ...decideAction(jev.triage) };
  }
  if (path === "/api/triage/llm" || path === "/api/inbox/llm") return null;
  if (path === "/api/triage/reply") {
    const model = b.action === "escalate" ? PROVIDERS[provider].mid : PROVIDERS[provider].small;
    return complete(model, String(b.ticket || ""));
  }
  if (path === "/api/inbox/jev") return jevCall(String(b.email || ""), 5, () => inboxHeuristic(String(b.email || "")));
  if (path === "/api/feed/label") return jevCall(String(b.post || ""), 3, () => feedHeuristic(String(b.post || "")));
  if (path === "/api/titles/generate") {
    const topic = String(b.topic || "Jev");
    const n = Math.min(16, Math.max(3, Math.round(Number(b.n) || 8)));
    const seeds = [
      `${topic}: the complete beginner tutorial`,
      `I built an AI agent with ${topic} in 20 minutes`,
      `${topic} is INSANE (you won't believe this)`,
      `${topic} vs the old way: real cost and speed numbers`,
      `The secret ${topic} trick nobody talks about`,
      `${topic} explained in 5 minutes`,
      `Build a support triage bot with ${topic} step by step`,
      `Why ${topic} changes everything`,
      `${topic} for beginners: 3 projects you can copy`,
      `Stop overpaying for AI: ${topic} cuts costs 90%`,
      `${topic}: what I learned after 7 days`,
      `Is ${topic} overhyped? I tested it`,
    ];
    await sleep(300);
    return { titles: seeds.slice(0, n), simulated: true, latencyMs: 300, costUsd: 0 };
  }
  if (path === "/api/titles/score") return jevCall({ topic: b.topic, title: b.title }, 4, () => titleScore(String(b.title || "")));
  throw new Error("Not found");
}
