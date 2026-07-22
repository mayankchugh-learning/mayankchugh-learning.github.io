(() => {
  const STORAGE_KEY = "desh-hindi-drafts-v1";
  const SETTINGS_KEY = "desh-hindi-settings-v1";

  const editor = document.getElementById("editor");
  const suggestionsEl = document.getElementById("suggestions");
  const draftList = document.getElementById("draftList");
  const sidebar = document.getElementById("sidebar");
  const toast = document.getElementById("toast");
  const langToggle = document.getElementById("langToggle");
  const voiceBtn = document.getElementById("voiceBtn");
  const copyBtn = document.getElementById("copyBtn");
  const darkToggle = document.getElementById("darkToggle");
  const settingsModal = document.getElementById("settingsModal");
  const backToTop = document.getElementById("backToTop");

  let drafts = loadDrafts();
  let activeId = drafts[0]?.id || null;
  let language = "hi"; // hi | en
  let currentWord = "";
  let suggestions = [];
  let activeSuggestion = 0;
  let debounceTimer = null;
  let history = [""];
  let historyIndex = 0;
  let recognizing = false;
  let recognition = null;

  // ---------- Persistence ----------
  function loadDrafts() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length) return parsed;
      }
    } catch (_) {}
    const first = createDraft("");
    return [first];
  }

  function saveDrafts() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(drafts));
  }

  function createDraft(content) {
    const now = Date.now();
    return {
      id: `d_${now}_${Math.random().toString(36).slice(2, 7)}`,
      content: content || "",
      updatedAt: now,
      createdAt: now,
    };
  }

  function titleFromContent(html) {
    const text = htmlToText(html).trim().replace(/\s+/g, " ");
    if (!text) return "Untitled";
    return text.slice(0, 40) + (text.length > 40 ? "…" : "");
  }

  function htmlToText(html) {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.innerText || "";
  }

  function formatDate(ts) {
    const d = new Date(ts);
    const now = new Date();
    const sameDay = d.toDateString() === now.toDateString();
    if (sameDay) {
      return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }
    return d.toLocaleDateString([], { month: "short", day: "numeric" });
  }

  function getActiveDraft() {
    return drafts.find((d) => d.id === activeId) || drafts[0];
  }

  function persistActiveFromEditor() {
    const draft = getActiveDraft();
    if (!draft) return;
    draft.content = editor.innerHTML;
    draft.updatedAt = Date.now();
    saveDrafts();
    renderDraftList();
  }

  function renderDraftList() {
    draftList.innerHTML = "";
    const sorted = [...drafts].sort((a, b) => b.updatedAt - a.updatedAt);
    sorted.forEach((d) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `draft-item${d.id === activeId ? " active" : ""}`;
      btn.innerHTML = `
        <span class="draft-title">${escapeHtml(titleFromContent(d.content))}</span>
        <span class="draft-meta">${formatDate(d.updatedAt)}</span>
        <span class="delete-draft" data-delete="${d.id}">Delete</span>
      `;
      btn.addEventListener("click", (e) => {
        if (e.target.closest("[data-delete]")) {
          e.stopPropagation();
          deleteDraft(d.id);
          return;
        }
        switchDraft(d.id);
      });
      draftList.appendChild(btn);
    });
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function switchDraft(id) {
    persistActiveFromEditor();
    activeId = id;
    const draft = getActiveDraft();
    editor.innerHTML = draft.content || "";
    pushHistory(editor.innerHTML, true);
    hideSuggestions();
    renderDraftList();
  }

  function deleteDraft(id) {
    if (drafts.length === 1) {
      drafts[0].content = "";
      drafts[0].updatedAt = Date.now();
      editor.innerHTML = "";
      saveDrafts();
      renderDraftList();
      showToast("Draft cleared");
      return;
    }
    drafts = drafts.filter((d) => d.id !== id);
    if (activeId === id) {
      activeId = drafts[0].id;
      editor.innerHTML = drafts[0].content || "";
    }
    saveDrafts();
    renderDraftList();
    showToast("Draft deleted");
  }

  function newFile() {
    persistActiveFromEditor();
    const draft = createDraft("");
    drafts.unshift(draft);
    activeId = draft.id;
    editor.innerHTML = "";
    pushHistory("", true);
    saveDrafts();
    renderDraftList();
    editor.focus();
    showToast("New file created");
  }

  // ---------- Settings / dark mode ----------
  function loadSettings() {
    try {
      return JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}");
    } catch (_) {
      return {};
    }
  }

  function saveSettings(partial) {
    const next = { ...loadSettings(), ...partial };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
    return next;
  }

  function applyDark(on) {
    document.body.classList.toggle("dark", on);
    darkToggle.setAttribute("aria-checked", String(on));
  }

  // ---------- Toast ----------
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.remove("hidden");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.add("hidden"), 2200);
  }

  // ---------- History ----------
  function pushHistory(html, reset) {
    if (reset) {
      history = [html];
      historyIndex = 0;
      return;
    }
    if (history[historyIndex] === html) return;
    history = history.slice(0, historyIndex + 1);
    history.push(html);
    if (history.length > 80) history.shift();
    historyIndex = history.length - 1;
  }

  function undo() {
    if (historyIndex <= 0) return;
    historyIndex -= 1;
    editor.innerHTML = history[historyIndex];
    persistActiveFromEditor();
  }

  function redo() {
    if (historyIndex >= history.length - 1) return;
    historyIndex += 1;
    editor.innerHTML = history[historyIndex];
    persistActiveFromEditor();
  }

  // ---------- Transliteration ----------
  async function fetchSuggestions(word) {
    if (!word || language !== "hi") return [];
    const url =
      "https://inputtools.google.com/request?text=" +
      encodeURIComponent(word) +
      "&itc=hi-t-i0-und&num=8&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage";
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data && data[0] === "SUCCESS" && data[1]?.[0]?.[1]) {
        return data[1][0][1];
      }
    } catch (_) {}
    return [];
  }

  function getWordBeforeCaret() {
    const sel = window.getSelection();
    if (!sel || !sel.rangeCount) return { word: "", range: null };
    const range = sel.getRangeAt(0);
    if (!editor.contains(range.startContainer)) {
      return { word: "", range: null };
    }
    if (range.startContainer.nodeType !== Node.TEXT_NODE) {
      return { word: "", range: null };
    }
    const text = range.startContainer.textContent || "";
    const offset = range.startOffset;
    const before = text.slice(0, offset);
    const match = before.match(/([a-zA-Z']+)$/);
    if (!match) return { word: "", range: null };
    const word = match[1];
    const wordRange = document.createRange();
    wordRange.setStart(range.startContainer, offset - word.length);
    wordRange.setEnd(range.startContainer, offset);
    return { word, range: wordRange };
  }

  function positionSuggestions(range) {
    if (!range) return;
    const rect = range.getBoundingClientRect();
    const parentRect = editor.parentElement.getBoundingClientRect();
    suggestionsEl.style.left = `${Math.max(8, rect.left - parentRect.left)}px`;
    suggestionsEl.style.top = `${rect.bottom - parentRect.top + 6}px`;
  }

  function renderSuggestions() {
    if (!suggestions.length || language !== "hi") {
      hideSuggestions();
      return;
    }
    suggestionsEl.innerHTML = "";
    suggestions.forEach((s, i) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = `suggestion-item${i === activeSuggestion ? " active" : ""}`;
      item.textContent = s;
      item.addEventListener("mousedown", (e) => {
        e.preventDefault();
        commitSuggestion(s);
      });
      suggestionsEl.appendChild(item);
    });
    suggestionsEl.classList.remove("hidden");
  }

  function hideSuggestions() {
    suggestions = [];
    currentWord = "";
    suggestionsEl.classList.add("hidden");
    suggestionsEl.innerHTML = "";
  }

  function commitSuggestion(text) {
    const { range } = getWordBeforeCaret();
    if (!range) {
      hideSuggestions();
      return;
    }
    range.deleteContents();
    const node = document.createTextNode(text + " ");
    range.insertNode(node);
    range.setStartAfter(node);
    range.collapse(true);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    hideSuggestions();
    pushHistory(editor.innerHTML);
    persistActiveFromEditor();
  }

  async function updateSuggestions() {
    if (language !== "hi") {
      hideSuggestions();
      return;
    }
    const { word, range } = getWordBeforeCaret();
    currentWord = word;
    if (!word || word.length < 1) {
      hideSuggestions();
      return;
    }
    const list = await fetchSuggestions(word);
    if (currentWord !== word) return;
    suggestions = list;
    activeSuggestion = 0;
    if (list.length) {
      positionSuggestions(range);
      renderSuggestions();
    } else {
      hideSuggestions();
    }
  }

  function scheduleSuggestions() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(updateSuggestions, 120);
  }

  // ---------- Voice ----------
  function setupSpeech() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return null;
    const r = new SR();
    r.continuous = true;
    r.interimResults = true;
    r.lang = language === "hi" ? "hi-IN" : "en-IN";
    r.onresult = (event) => {
      let finalText = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalText += event.results[i][0].transcript;
        }
      }
      if (finalText) {
        insertTextAtCaret(finalText + " ");
        pushHistory(editor.innerHTML);
        persistActiveFromEditor();
      }
    };
    r.onerror = () => stopVoice();
    r.onend = () => {
      if (recognizing) {
        try {
          r.start();
        } catch (_) {
          stopVoice();
        }
      }
    };
    return r;
  }

  function insertTextAtCaret(text) {
    editor.focus();
    const sel = window.getSelection();
    if (!sel.rangeCount) {
      editor.appendChild(document.createTextNode(text));
      return;
    }
    const range = sel.getRangeAt(0);
    range.deleteContents();
    const node = document.createTextNode(text);
    range.insertNode(node);
    range.setStartAfter(node);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
  }

  function startVoice() {
    recognition = setupSpeech();
    if (!recognition) {
      showToast("Voice typing needs Chrome");
      return;
    }
    recognizing = true;
    voiceBtn.classList.add("listening");
    voiceBtn.innerHTML = '<span class="mic">🎤</span> Listening...';
    try {
      recognition.start();
    } catch (_) {}
  }

  function stopVoice() {
    recognizing = false;
    voiceBtn.classList.remove("listening");
    voiceBtn.innerHTML = '<span class="mic">🎤</span> Voice Typing';
    try {
      recognition?.stop();
    } catch (_) {}
  }

  function toggleVoice() {
    if (recognizing) stopVoice();
    else startVoice();
  }

  // ---------- Toolbar ----------
  function exec(cmd, val = null) {
    document.execCommand(cmd, false, val);
    editor.focus();
    pushHistory(editor.innerHTML);
    persistActiveFromEditor();
  }

  // ---------- Events ----------
  editor.addEventListener("input", () => {
    pushHistory(editor.innerHTML);
    persistActiveFromEditor();
    scheduleSuggestions();
  });

  editor.addEventListener("keydown", (e) => {
    if (suggestions.length && language === "hi") {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        activeSuggestion = (activeSuggestion + 1) % suggestions.length;
        renderSuggestions();
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        activeSuggestion =
          (activeSuggestion - 1 + suggestions.length) % suggestions.length;
        renderSuggestions();
        return;
      }
      if (e.key === " " || e.key === "Enter" || e.key === "Tab") {
        if (currentWord) {
          e.preventDefault();
          commitSuggestion(suggestions[activeSuggestion]);
          return;
        }
      }
      if (e.key === "Escape") {
        hideSuggestions();
        return;
      }
    }

    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z" && !e.shiftKey) {
      e.preventDefault();
      undo();
    }
    if (
      ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "y") ||
      ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "z")
    ) {
      e.preventDefault();
      redo();
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
      e.preventDefault();
      exec("bold");
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "i") {
      e.preventDefault();
      exec("italic");
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "u") {
      e.preventDefault();
      exec("underline");
    }
  });

  document.getElementById("newFileBtn").addEventListener("click", newFile);
  document.getElementById("undoBtn").addEventListener("click", undo);
  document.getElementById("redoBtn").addEventListener("click", redo);
  document.getElementById("boldBtn").addEventListener("click", () => exec("bold"));
  document.getElementById("italicBtn").addEventListener("click", () => exec("italic"));
  document.getElementById("underlineBtn").addEventListener("click", () =>
    exec("underline")
  );
  document.getElementById("ulBtn").addEventListener("click", () =>
    exec("insertUnorderedList")
  );
  document.getElementById("olBtn").addEventListener("click", () =>
    exec("insertOrderedList")
  );
  document.getElementById("printBtn").addEventListener("click", () => window.print());

  document.querySelectorAll("[data-align]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const map = { left: "justifyLeft", center: "justifyCenter", right: "justifyRight" };
      exec(map[btn.dataset.align]);
    });
  });

  document.getElementById("fontSelect").addEventListener("change", (e) => {
    editor.style.fontFamily = e.target.value;
  });

  document.getElementById("fontSizeSelect").addEventListener("change", (e) => {
    editor.style.fontSize = `${e.target.value}px`;
  });

  langToggle.addEventListener("click", () => {
    language = language === "hi" ? "en" : "hi";
    langToggle.classList.toggle("english", language === "en");
    document.getElementById("langLabel").textContent =
      language === "hi" ? "हिन्दी" : "English";
    langToggle.querySelector(".lang-muted").textContent =
      language === "hi" ? "English" : "हिन्दी";
    hideSuggestions();
    if (recognizing) {
      stopVoice();
      startVoice();
    }
    showToast(language === "hi" ? "Hindi mode" : "English mode");
  });

  voiceBtn.addEventListener("click", toggleVoice);

  copyBtn.addEventListener("click", async () => {
    const text = editor.innerText;
    try {
      await navigator.clipboard.writeText(text);
      showToast("Copied!");
    } catch (_) {
      showToast("Copy failed");
    }
  });

  document.getElementById("settingsBtn").addEventListener("click", () => {
    settingsModal.classList.remove("hidden");
  });
  document.getElementById("closeSettings").addEventListener("click", () => {
    settingsModal.classList.add("hidden");
  });
  settingsModal.addEventListener("click", (e) => {
    if (e.target === settingsModal) settingsModal.classList.add("hidden");
  });

  darkToggle.addEventListener("click", () => {
    const on = darkToggle.getAttribute("aria-checked") !== "true";
    applyDark(on);
    saveSettings({ dark: on });
  });

  document.getElementById("sidebarToggle").addEventListener("click", () => {
    if (window.innerWidth <= 900) {
      sidebar.classList.toggle("open");
    } else {
      sidebar.classList.toggle("collapsed");
    }
  });

  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 400);
  });
  backToTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  document.addEventListener("click", (e) => {
    if (!suggestionsEl.contains(e.target) && e.target !== editor) {
      // keep suggestions while typing in editor
    }
    if (window.innerWidth <= 900 && sidebar.classList.contains("open")) {
      if (!sidebar.contains(e.target) && !e.target.closest("#sidebarToggle")) {
        sidebar.classList.remove("open");
      }
    }
  });

  // ---------- Init ----------
  const settings = loadSettings();
  applyDark(!!settings.dark);

  if (!activeId && drafts[0]) activeId = drafts[0].id;
  const active = getActiveDraft();
  editor.innerHTML = active?.content || "";
  pushHistory(editor.innerHTML, true);
  renderDraftList();
  editor.focus();
})();
