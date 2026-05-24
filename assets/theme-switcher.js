(function (global) {
  'use strict';

  var STORAGE_KEY = 'mayank-site-theme';
  var LEGACY_KEY = 'claude-tutorial-theme';
  var THEMES = ['dark', 'light', 'midnight', 'contrast'];
  var THEME_LABELS = {
    dark: 'Dark (readable)',
    light: 'Light',
    midnight: 'Midnight',
    contrast: 'High contrast'
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

  function syncSwitcherSelect(theme) {
    var select = document.getElementById('site-theme-select');
    if (select && select.value !== theme) select.value = theme;
  }

  function applyTheme(theme) {
    if (THEMES.indexOf(theme) < 0) theme = 'dark';
    var root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    applyBundlerShell();
    syncSwitcherSelect(theme);
  }

  function mountSwitcher() {
    if (document.getElementById('site-theme-switcher')) return;

    var wrap = document.createElement('div');
    wrap.id = 'site-theme-switcher';
    wrap.className = 'theme-switcher';
    wrap.setAttribute('role', 'group');
    wrap.setAttribute('aria-label', 'Color theme');

    var label = document.createElement('label');
    label.setAttribute('for', 'site-theme-select');
    label.textContent = 'Theme';

    var select = document.createElement('select');
    select.id = 'site-theme-select';
    select.setAttribute('aria-label', 'Choose color theme');

    THEMES.forEach(function (theme) {
      var option = document.createElement('option');
      option.value = theme;
      option.textContent = THEME_LABELS[theme];
      select.appendChild(option);
    });

    select.value = getStoredTheme();
    select.addEventListener('change', function () {
      applyTheme(select.value);
    });

    wrap.appendChild(label);
    wrap.appendChild(select);
    (document.body || document.documentElement).appendChild(wrap);
  }

  function init() {
    ensurePageAttribute();
    ensureStylesheet();
    applyTheme(getStoredTheme());

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        mountSwitcher();
        applyBundlerShell();
      });
    } else {
      mountSwitcher();
      applyBundlerShell();
    }

    if (document.documentElement.getAttribute('data-page') === 'bundler') {
      var checks = 0;
      var timer = setInterval(function () {
        ensurePageAttribute();
        ensureStylesheet();
        applyTheme(getStoredTheme());
        mountSwitcher();
        applyBundlerShell();
        checks += 1;
        if (checks > 120) clearInterval(timer);
      }, 500);
    }
  }

  global.SiteTheme = {
    apply: applyTheme,
    get: getStoredTheme,
    mount: mountSwitcher
  };

  init();
})(window);
