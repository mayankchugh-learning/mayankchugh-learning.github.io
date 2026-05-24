(function (global) {
  'use strict';

  var STORAGE_KEY = 'mayank-site-theme';
  var LEGACY_KEY = 'claude-tutorial-theme';
  var THEMES = ['dark', 'light', 'midnight', 'contrast'];

  var ICONS = {
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

  function syncThemeToggle(theme) {
    var btn = document.getElementById('site-theme-toggle');
    if (!btn) return;

    var icon = btn.querySelector('.theme-toggle-icon');
    var label = btn.querySelector('.theme-toggle-label');
    var dark = !isLightTheme(theme);

    if (icon) icon.innerHTML = dark ? ICONS.moon : ICONS.sun;
    if (label) label.textContent = dark ? 'Dark' : 'Light';
    btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    btn.setAttribute('title', dark ? 'Switch to light theme' : 'Switch to dark theme');
  }

  function applyTheme(theme) {
    if (THEMES.indexOf(theme) < 0) theme = 'dark';
    var root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    applyBundlerShell();
    syncThemeToggle(theme);
  }

  function toggleTheme() {
    var current = getStoredTheme();
    applyTheme(isLightTheme(current) ? 'dark' : 'light');
  }

  function isProfilePage() {
    if (document.documentElement.getAttribute('data-page') === 'profile') return true;
    var path = (location.pathname || '').replace(/\\/g, '/').toLowerCase();
    if (path === '/' || path.endsWith('/')) return true;
    return /(^|\/)index\.html?$/.test(path);
  }

  function mountBackButton() {
    if (isProfilePage()) return;
    if (document.getElementById('site-back-home')) return;

    var link = document.createElement('a');
    link.id = 'site-back-home';
    link.className = 'site-back-home';
    link.href = 'index.html';
    link.setAttribute('aria-label', 'Back to Mayank Chugh profile');
    link.textContent = '\u2190 Profile';

    (document.body || document.documentElement).appendChild(link);
  }

  function mountSwitcher() {
    if (document.getElementById('site-theme-toggle')) return;

    var btn = document.createElement('button');
    btn.id = 'site-theme-toggle';
    btn.className = 'theme-toggle';
    btn.type = 'button';

    var icon = document.createElement('span');
    icon.className = 'theme-toggle-icon';

    var label = document.createElement('span');
    label.className = 'theme-toggle-label';

    btn.appendChild(icon);
    btn.appendChild(label);
    btn.addEventListener('click', toggleTheme);

    (document.body || document.documentElement).appendChild(btn);
    syncThemeToggle(getStoredTheme());
  }

  function mountPageChrome() {
    mountBackButton();
    mountSwitcher();
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
