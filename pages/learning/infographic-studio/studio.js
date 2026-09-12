(function () {
  'use strict';

  var STORAGE_KEY = 'mhc-private-infographics';
  var SHARE_KEY = 'mhc-infographic-shares';
  var PASS_HASH = 'e8bafe78d22f06e9ed2ed7aa3ee705f00697b21a353ee260f408f67b6a4cad5d';

  function sha256Hex(text) {
    if (!window.crypto || !crypto.subtle) {
      return Promise.reject(new Error('crypto unavailable'));
    }
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)).then(function (buf) {
      return Array.from(new Uint8Array(buf)).map(function (b) {
        return b.toString(16).padStart(2, '0');
      }).join('');
    });
  }

  function sha256Bytes(text) {
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  }

  function b64ToBytes(b64) {
    var bin = atob(b64);
    var out = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }

  function decryptPayload(b64, password) {
    var raw = b64ToBytes(b64);
    var iv = raw.slice(0, 12);
    var data = raw.slice(12);
    return sha256Bytes(password).then(function (keyBytes) {
      return crypto.subtle.importKey('raw', keyBytes, 'AES-GCM', false, ['decrypt']);
    }).then(function (key) {
      return crypto.subtle.decrypt({ name: 'AES-GCM', iv: iv }, key, data);
    }).then(function (dec) {
      return new TextDecoder().decode(dec);
    });
  }

  function verifyPassphrase(value) {
    var plain = (value || '').trim();
    if (!plain) return Promise.resolve(false);
    return sha256Hex(plain).then(function (hash) {
      return hash === PASS_HASH;
    }).catch(function () {
      return false;
    });
  }

  function isUnlocked() {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch (e) {
      return false;
    }
  }

  function rememberUnlock() {
    try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch (e) { /* ignore */ }
  }

  function loadShares() {
    try {
      return JSON.parse(localStorage.getItem(SHARE_KEY) || '{}') || {};
    } catch (e) {
      return {};
    }
  }

  function saveShares(map) {
    try { localStorage.setItem(SHARE_KEY, JSON.stringify(map)); } catch (e) { /* ignore */ }
  }

  function getShare(id) {
    var row = loadShares()[id] || {};
    return { linkedin: !!row.linkedin, youtube: !!row.youtube };
  }

  function setShare(id, channel, value) {
    var map = loadShares();
    if (!map[id]) map[id] = {};
    map[id][channel] = !!value;
    saveShares(map);
    document.dispatchEvent(new CustomEvent('studio-shares-changed'));
  }

  function bindShareBars(root) {
    var scope = root || document;
    Array.prototype.forEach.call(scope.querySelectorAll('[data-item-id]'), function (bar) {
      var id = bar.getAttribute('data-item-id');
      var state = getShare(id);
      Array.prototype.forEach.call(bar.querySelectorAll('input[data-channel]'), function (input) {
        var channel = input.getAttribute('data-channel');
        input.checked = !!state[channel];
        input.addEventListener('change', function () {
          setShare(id, channel, input.checked);
        });
      });
    });
  }

  function bindCopyButtons(root) {
    var scope = root || document;
    Array.prototype.forEach.call(scope.querySelectorAll('.copy-btn'), function (btn) {
      btn.addEventListener('click', function () {
        var block = btn.closest('.prompt-block');
        var code = block && block.querySelector('code');
        if (!code) return;
        var text = code.textContent || '';
        var done = function () {
          var prev = btn.textContent;
          btn.textContent = 'Copied';
          setTimeout(function () { btn.textContent = prev; }, 1400);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done).catch(function () {
            window.prompt('Copy this prompt:', text);
          });
        } else {
          window.prompt('Copy this prompt:', text);
        }
      });
    });
  }

  function cachedPassword() {
    try { return sessionStorage.getItem(STORAGE_KEY + '-k') || ''; } catch (e) { return ''; }
  }

  function cachePassword(value) {
    try { sessionStorage.setItem(STORAGE_KEY + '-k', value); } catch (e) { /* ignore */ }
  }

  function reveal(gate, content) {
    if (gate) gate.hidden = true;
    if (content) content.hidden = false;
    document.dispatchEvent(new CustomEvent('studio-unlocked'));
  }

  function bootGate(onReady) {
    var gate = document.getElementById('access-gate');
    var content = document.getElementById('protected-content');
    var form = document.getElementById('gate-form');
    var passInput = document.getElementById('gate-pass');
    var errorEl = document.getElementById('gate-error');

    function finish(password) {
      rememberUnlock();
      cachePassword(password);
      reveal(gate, content);
      if (onReady) onReady(password);
    }

    if (isUnlocked() && cachedPassword()) {
      finish(cachedPassword());
      return;
    }

    if (!form || !passInput) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (errorEl) errorEl.textContent = '';
      var value = passInput.value;
      verifyPassphrase(value).then(function (ok) {
        if (ok) {
          finish(value.trim());
        } else {
          if (errorEl) errorEl.textContent = 'Incorrect passphrase.';
          passInput.value = '';
          passInput.focus();
        }
      });
    });
  }

  function renderCatalog(catalog) {
    var collectionsEl = document.getElementById('studio-collections');
    var tableBody = document.getElementById('studio-items');
    var searchEl = document.getElementById('studio-search');
    var collectionEl = document.getElementById('studio-filter-collection');
    var statusEl = document.getElementById('studio-filter-status');
    var exportBtn = document.getElementById('studio-export');
    var importBtn = document.getElementById('studio-import');
    var importFile = document.getElementById('studio-import-file');
    if (!collectionsEl || !tableBody) return;

    collectionsEl.innerHTML = catalog.collections.map(function (col) {
      return (
        '<a class="collection-card" href="' + col.href + '">' +
          '<span class="tag">' + escapeHtml(col.tag) + '</span>' +
          '<h3>' + escapeHtml(col.title) + '</h3>' +
          '<p>' + escapeHtml(col.blurb) + ' · ' + col.itemCount + ' trackable items</p>' +
        '</a>'
      );
    }).join('');

    if (collectionEl) {
      collectionEl.innerHTML = '<option value="">All collections</option>' +
        catalog.collections.map(function (col) {
          return '<option value="' + escapeHtml(col.id) + '">' + escapeHtml(col.title) + '</option>';
        }).join('');
    }

    function paint() {
      var q = (searchEl && searchEl.value || '').trim().toLowerCase();
      var colId = collectionEl && collectionEl.value || '';
      var status = statusEl && statusEl.value || '';
      var shares = loadShares();
      var items = catalog.items.filter(function (item) {
        if (colId && item.collectionId !== colId) return false;
        var hay = (item.title + ' ' + item.collectionTitle).toLowerCase();
        if (q && hay.indexOf(q) === -1) return false;
        var s = shares[item.id] || {};
        var li = !!s.linkedin;
        var yt = !!s.youtube;
        if (status === 'unshared' && (li || yt)) return false;
        if (status === 'linkedin' && !li) return false;
        if (status === 'youtube' && !yt) return false;
        if (status === 'both' && !(li && yt)) return false;
        return true;
      });

      var liCount = 0;
      var ytCount = 0;
      var both = 0;
      catalog.items.forEach(function (item) {
        var s = shares[item.id] || {};
        if (s.linkedin) liCount += 1;
        if (s.youtube) ytCount += 1;
        if (s.linkedin && s.youtube) both += 1;
      });
      setText('stat-total', String(catalog.items.length));
      setText('stat-linkedin', liCount + ' / ' + catalog.items.length);
      setText('stat-youtube', ytCount + ' / ' + catalog.items.length);
      setText('stat-both', String(both));

      if (!items.length) {
        tableBody.innerHTML = '<tr><td colspan="4" class="empty">No matching items.</td></tr>';
        return;
      }

      tableBody.innerHTML = items.map(function (item) {
        var s = shares[item.id] || {};
        var done = s.linkedin && s.youtube;
        return (
          '<tr class="' + (done ? 'row-done' : '') + '">' +
            '<td><div class="item-title">' + escapeHtml(item.title) + '</div>' +
            '<div class="hide-sm" style="color:var(--muted);font-size:0.78rem;margin-top:0.15rem">' + escapeHtml(item.collectionTitle) + '</div></td>' +
            '<td class="hide-sm">' + escapeHtml(item.tag) + '</td>' +
            '<td>' +
              '<label class="share-check li"><input type="checkbox" data-item-id="' + escapeHtml(item.id) + '" data-channel="linkedin"' + (s.linkedin ? ' checked' : '') + '> LinkedIn</label>' +
            '</td>' +
            '<td>' +
              '<label class="share-check yt"><input type="checkbox" data-item-id="' + escapeHtml(item.id) + '" data-channel="youtube"' + (s.youtube ? ' checked' : '') + '> YouTube Short</label>' +
              ' <a href="' + item.href + '#' + item.anchor + '" style="margin-left:0.6rem">Open</a>' +
            '</td>' +
          '</tr>'
        );
      }).join('');

      Array.prototype.forEach.call(tableBody.querySelectorAll('input[data-item-id]'), function (input) {
        input.addEventListener('change', function () {
          setShare(input.getAttribute('data-item-id'), input.getAttribute('data-channel'), input.checked);
          paint();
        });
      });
    }

    if (searchEl) searchEl.addEventListener('input', paint);
    if (collectionEl) collectionEl.addEventListener('change', paint);
    if (statusEl) statusEl.addEventListener('change', paint);
    document.addEventListener('studio-shares-changed', paint);

    if (exportBtn) {
      exportBtn.addEventListener('click', function () {
        var blob = new Blob([JSON.stringify(loadShares(), null, 2)], { type: 'application/json' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'infographic-share-tracker.json';
        a.click();
        URL.revokeObjectURL(a.href);
      });
    }
    if (importBtn && importFile) {
      importBtn.addEventListener('click', function () { importFile.click(); });
      importFile.addEventListener('change', function () {
        var file = importFile.files && importFile.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function () {
          try {
            var parsed = JSON.parse(String(reader.result || '{}'));
            saveShares(parsed);
            paint();
          } catch (err) {
            window.alert('Could not read that tracker file.');
          }
        };
        reader.readAsText(file);
        importFile.value = '';
      });
    }

    paint();
  }

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function initCatalog() {
    bootGate(function (password) {
      var payload = window.STUDIO_CATALOG_ENC;
      if (!payload) return;
      decryptPayload(payload, password).then(function (json) {
        renderCatalog(JSON.parse(json));
      }).catch(function () {
        var err = document.getElementById('gate-error');
        if (err) err.textContent = 'Could not unlock the catalog. Try again.';
        var gate = document.getElementById('access-gate');
        var content = document.getElementById('protected-content');
        if (gate) gate.hidden = false;
        if (content) content.hidden = true;
        try { sessionStorage.removeItem(STORAGE_KEY); sessionStorage.removeItem(STORAGE_KEY + '-k'); } catch (e) { /* ignore */ }
      });
    });
  }

  function initArticle() {
    bootGate(function (password) {
      var payload = window.STUDIO_PAYLOAD;
      var target = document.getElementById('article-body');
      if (!payload || !target) return;
      decryptPayload(payload, password).then(function (html) {
        target.innerHTML = html;
        bindShareBars(target);
        bindCopyButtons(target);
        if (location.hash) {
          var el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
          if (el) el.scrollIntoView();
        }
      }).catch(function () {
        target.innerHTML = '<p class="empty">Could not decrypt this page.</p>';
      });
    });
  }

  window.InfographicStudio = {
    initCatalog: initCatalog,
    initArticle: initArticle,
    bindShareBars: bindShareBars,
    getShare: getShare,
    setShare: setShare
  };
})();
