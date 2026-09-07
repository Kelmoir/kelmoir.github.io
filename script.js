/* Progressive enhancement only. The page is fully readable with this file absent. */
(function () {
  'use strict';

  var root = document.documentElement;
  var mqDark = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  var mqReduce = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;

  /* -------- Theme toggle (client-side, localStorage only) -------- */
  var toggle = document.querySelector('.theme-toggle');

  function currentTheme() {
    var explicit = root.getAttribute('data-theme');
    if (explicit === 'dark' || explicit === 'light') return explicit;
    return (mqDark && mqDark.matches) ? 'dark' : 'light';
  }

  function syncToggle() {
    if (!toggle) return;
    var dark = currentTheme() === 'dark';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    var sun = toggle.querySelector('[data-icon="sun"]');
    var moon = toggle.querySelector('[data-icon="moon"]');
    if (sun && moon) {
      sun.hidden = !dark;   // in dark mode, offer the sun
      moon.hidden = dark;
    }
  }

  if (toggle) {
    syncToggle();
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncToggle();
    });
    if (mqDark && mqDark.addEventListener) {
      mqDark.addEventListener('change', function () {
        if (!root.getAttribute('data-theme')) syncToggle();
      });
    }
  }

  /* -------- Header hairline once the page has scrolled -------- */
  var header = document.querySelector('.page-header');
  if (header) {
    var setScrolled = function () {
      header.setAttribute('data-scrolled', String(window.scrollY > 4));
    };
    setScrolled();
    window.addEventListener('scroll', setScrolled, { passive: true });
  }

  /* -------- Active section marker in the header nav -------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link[data-section]'));
  var sections = navLinks
    .map(function (link) { return document.getElementById(link.getAttribute('data-section')); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navLinks.forEach(function (link) {
          var active = link.getAttribute('data-section') === id;
          if (active) link.setAttribute('data-active', '');
          else link.removeAttribute('data-active');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (section) { spy.observe(section); });
  }

  /* -------- Scroll-reveal: a settle, plays once -------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  var reduce = mqReduce && mqReduce.matches;

  if (!revealEls.length) return;

  if (reduce || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var revealObserver = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  revealEls.forEach(function (el) { revealObserver.observe(el); });

  // Safety net: never let a settle animation strand content off-screen readers
  // or slow frames. Anything still hidden after a beat is simply shown.
  var sweep = function () {
    revealEls.forEach(function (el) {
      if (!el.classList.contains('is-visible')) el.classList.add('is-visible');
    });
  };
  window.addEventListener('load', function () { setTimeout(sweep, 1500); });
})();
