(function (global) {
  'use strict';

  var STORAGE_KEY = 'mayank-site-theme';
  var LEGACY_KEY = 'claude-tutorial-theme';
  var THEMES = ['dark', 'light', 'midnight', 'contrast'];

  var ICONS = {
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5z"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>'
  };

  function getDefaultTheme() {
    var page = document.documentElement.getAttribute('data-page');
    if (page === 'profile' || page === 'consulting' || page === 'article') return 'light';
    return 'dark';
  }

  function getStoredTheme() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      saved = localStorage.getItem(LEGACY_KEY);
      if (saved) {
        localStorage.setItem(STORAGE_KEY, saved);
        localStorage.removeItem(LEGACY_KEY);
      }
    }
    if (saved && THEMES.indexOf(saved) >= 0) return saved;
    return getDefaultTheme();
  }

  function isLightTheme(theme) {
    return theme === 'light';
  }

  function isProfilePage() {
    if (document.documentElement.getAttribute('data-page') === 'profile') return true;
    var path = (location.pathname || '').replace(/\\/g, '/').toLowerCase();
    if (path === '/' || path.endsWith('/')) return true;
    return /(^|\/)index\.html?$/.test(path);
  }

  function ensurePageAttribute() {
    var root = document.documentElement;
    if (root.getAttribute('data-page')) return;
    root.setAttribute('data-page', 'bundler');
  }

  function ensureStylesheet() {
    if (document.querySelector('link[href*="theme-switcher.css"]')) return;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'assets/theme-switcher.css';
    (document.head || document.documentElement).appendChild(link);
  }

  function applyBundlerShell() {
    if (document.documentElement.getAttribute('data-page') !== 'bundler') return;
    var style = getComputedStyle(document.documentElement);
    var bg = style.getPropertyValue('--bundler-bg').trim();
    if (!bg || !document.body) return;
    document.body.style.background = bg;
    var thumb = document.getElementById('__bundler_thumbnail');
    if (thumb) thumb.style.background = bg;
  }

  function syncThemeButton(theme) {
    var btn = document.getElementById('site-theme-toggle');
    if (!btn) return;

    var icon = btn.querySelector('.site-chrome-icon');
    var label = btn.querySelector('.site-chrome-label');
    var dark = !isLightTheme(theme);

    if (icon) icon.innerHTML = dark ? ICONS.moon : ICONS.sun;
    if (label) label.textContent = dark ? 'Dark' : 'Light';
    btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    btn.setAttribute('title', dark ? 'Light mode' : 'Dark mode');
  }

  function applyTheme(theme) {
    if (THEMES.indexOf(theme) < 0) theme = 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    applyBundlerShell();
    syncThemeButton(theme);
  }

  function toggleTheme() {
    var current = getStoredTheme();
    applyTheme(isLightTheme(current) ? 'dark' : 'light');
  }

  function makeChromeButton(tag, className, id) {
    var el = document.createElement(tag);
    el.className = 'site-chrome-btn ' + className;
    if (id) el.id = id;
    return el;
  }

  function mountSiteChrome() {
    if (document.getElementById('site-chrome')) return;

    var dock = document.createElement('nav');
    dock.id = 'site-chrome';
    dock.className = 'site-chrome';
    dock.setAttribute('aria-label', 'Page tools');

    var onProfile = isProfilePage();
    if (!onProfile) {
      var home = makeChromeButton('a', 'site-chrome-home');
      home.href = 'index.html';
      home.setAttribute('aria-label', 'Back to profile');
      home.setAttribute('title', 'Back to profile');

      var homeIcon = document.createElement('span');
      homeIcon.className = 'site-chrome-icon';
      homeIcon.innerHTML = ICONS.home;

      var homeLabel = document.createElement('span');
      homeLabel.className = 'site-chrome-label';
      homeLabel.textContent = 'Home';

      home.appendChild(homeIcon);
      home.appendChild(homeLabel);
      dock.appendChild(home);

      var divider = document.createElement('span');
      divider.className = 'site-chrome-divider';
      divider.setAttribute('aria-hidden', 'true');
      dock.appendChild(divider);
    } else {
      dock.classList.add('site-chrome--home-only');
    }

    var themeBtn = makeChromeButton('button', 'site-chrome-theme', 'site-theme-toggle');
    themeBtn.type = 'button';

    var themeIcon = document.createElement('span');
    themeIcon.className = 'site-chrome-icon';

    var themeLabel = document.createElement('span');
    themeLabel.className = 'site-chrome-label';

    themeBtn.appendChild(themeIcon);
    themeBtn.appendChild(themeLabel);
    themeBtn.addEventListener('click', toggleTheme);
    dock.appendChild(themeBtn);

    (document.body || document.documentElement).appendChild(dock);
    syncThemeButton(getStoredTheme());
  }

  function removeLegacyChrome() {
    ['site-back-home', 'site-theme-toggle'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el && !el.closest('#site-chrome')) el.remove();
    });
    document.querySelectorAll('.theme-toggle:not(.site-chrome-btn)').forEach(function (el) {
      if (!el.closest('#site-chrome')) el.remove();
    });
    document.querySelectorAll('.site-back-home').forEach(function (el) {
      if (!el.closest('#site-chrome')) el.remove();
    });
  }

  function mountPageChrome() {
    removeLegacyChrome();
    mountSiteChrome();
  }

  function init() {
    ensurePageAttribute();
    ensureStylesheet();
    applyTheme(getStoredTheme());

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        mountPageChrome();
        applyBundlerShell();
      });
    } else {
      mountPageChrome();
      applyBundlerShell();
    }

    if (document.documentElement.getAttribute('data-page') === 'bundler') {
      var checks = 0;
      var timer = setInterval(function () {
        ensurePageAttribute();
        ensureStylesheet();
        applyTheme(getStoredTheme());
        mountPageChrome();
        applyBundlerShell();
        checks += 1;
        if (checks > 120) clearInterval(timer);
      }, 500);
    }
  }

  global.SiteTheme = {
    apply: applyTheme,
    get: getStoredTheme,
    toggle: toggleTheme,
    mount: mountPageChrome
  };

  init();
})(window);
