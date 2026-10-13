/* Password gate: decrypts AES-256-GCM payloads (PBKDF2-SHA256) in the browser. */
(function (g) {
  'use strict';
  var KEY = 'ed-gate-pw';
  var b64 = function (s) { return Uint8Array.from(atob(s), function (c) { return c.charCodeAt(0); }); };

  async function decrypt(p, pw) {
    var enc = new TextEncoder();
    var base = await crypto.subtle.importKey('raw', enc.encode(pw), 'PBKDF2', false, ['deriveKey']);
    var key = await crypto.subtle.deriveKey(
      { name: 'PBKDF2', salt: b64(p.salt), iterations: p.iter, hash: 'SHA-256' },
      base, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
    var buf = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64(p.iv) }, key, b64(p.ct));
    return new TextDecoder().decode(buf);
  }
  function saved() { try { return sessionStorage.getItem(KEY); } catch (e) { return null; } }
  function save(pw) { try { sessionStorage.setItem(KEY, pw); } catch (e) {} }

  function form(host, payload, onOk) {
    host.innerHTML = '<form style="display:flex;gap:.5rem;flex-wrap:wrap;max-width:420px">' +
      '<input type="password" autocomplete="current-password" placeholder="Password" required ' +
      'style="flex:1;min-width:180px;padding:.7rem .9rem;border-radius:8px;border:1px solid #888;font:inherit">' +
      '<button type="submit" style="padding:.7rem 1.2rem;border-radius:8px;border:0;background:#b3122e;color:#fff;font:inherit;cursor:pointer">Unlock</button>' +
      '<div class="msg" style="width:100%;font-size:.9rem;min-height:1.2em"></div></form>';
    var f = host.firstChild, msg = f.querySelector('.msg');
    f.addEventListener('submit', async function (ev) {
      ev.preventDefault();
      var pw = f.querySelector('input').value;
      msg.textContent = 'Decrypting…';
      try { onOk(await decrypt(payload, pw), pw); }
      catch (e) { msg.textContent = 'Incorrect password.'; }
    });
  }

  g.EDGate = {
    section: function (host, payload) {
      var show = function (html, pw) { save(pw); host.innerHTML = html; };
      var pw = saved();
      if (pw) { decrypt(payload, pw).then(function (h) { show(h, pw); }, function () { form(host, payload, show); }); }
      else form(host, payload, show);
    },
    page: function (payload) {
      var host = document.getElementById('gate');
      var open = function (html, pw) { save(pw); document.open(); document.write(html); document.close(); };
      var pw = saved();
      if (pw) { decrypt(payload, pw).then(function (h) { open(h, pw); }, function () { form(host, payload, open); }); }
      else form(host, payload, open);
    }
  };
})(window);
