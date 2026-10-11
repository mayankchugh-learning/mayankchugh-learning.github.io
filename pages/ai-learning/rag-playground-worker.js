import { pipeline, env } from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1";

env.allowLocalModels = false;

const extractors = new Map();

function getExtractor(model) {
  if (!extractors.has(model)) {
    const loading = pipeline("feature-extraction", model, {
      progress_callback: (p) => self.postMessage({ type: "progress", model, progress: p }),
    });
    extractors.set(model, loading);
  }
  return extractors.get(model);
}

async function handle({ id, kind, model, pooling, texts }) {
  try {
    const extractor = await getExtractor(model);
    if (kind === "load") {
      self.postMessage({ id, type: "done", vectors: [] });
      return;
    }
    const vectors = [];
    for (let i = 0; i < texts.length; i++) {
      const output = await extractor(texts[i], { pooling, normalize: true });
      vectors.push(Array.from(output.data));
      if (texts.length > 1) {
        self.postMessage({ id, type: "embed-progress", done: i + 1, total: texts.length });
      }
    }
    self.postMessage({ id, type: "done", vectors });
  } catch (error) {
    extractors.delete(model);
    self.postMessage({ id, type: "error", message: error && error.message ? error.message : String(error) });
  }
}

// ONNX sessions must not run concurrently, so requests are processed one at a time.
let queue = Promise.resolve();
self.onmessage = (event) => {
  queue = queue.then(() => handle(event.data));
};
