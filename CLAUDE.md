# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a static personal portfolio website for Sebastian Hacker (embedded developer / ML enthusiast), deployed via GitHub Pages. It has no build system, no package manager, and no dependencies — just three files: `index.html`, `styles.css`, `script.js`.

## Commands

- **Build**: None required — static files served as-is.
- **Test**: No test framework; verify changes manually in a browser.
- **Lint**: No linter configured.
- **Local dev server**: `python -m http.server 8000` or `npx serve`, then open the served URL.

## Architecture

- `index.html` — single-page site; all content lives in one file as stacked `<section>` elements (`#home`, `#about`, `#projects`, `#blog`, `#contact`) linked from the nav via in-page anchors (`href="#section-id"`).
- `styles.css` — organized by section in the same order as the HTML (Header & Navigation, Hero, Buttons, About, Projects, Contact, Blog, Footer, Responsive Design at the end). Colors, spacing, and shadows are driven by CSS custom properties defined in `:root` — change the palette/theme there rather than hard-coding values in section rules.
- `script.js` — vanilla JS, no framework, no build step. Handles: mobile nav toggle, smooth-scroll for anchor links, header shadow-on-scroll, and an `IntersectionObserver` fade/slide-in animation applied to every `<section>`. Because the observer targets `document.querySelectorAll('section')` generically, any new top-level `<section>` added to `index.html` automatically gets the same entrance animation with no JS changes needed.

## Adding content

- **New project card**: duplicate a `.project-card` block inside `.projects-grid` in `index.html`; update the placeholder text, title, description, and GitHub link.
- **New section**: add a `<section id="...">` in `index.html` (it will auto-animate via the existing observer), add matching styles in `styles.css` following the existing per-section block pattern, and add a nav link in `.nav-menu`.

## Code style (from AGENTS.md)

- **HTML**: semantic HTML5 tags, kebab-case IDs/classes, 2-space indent.
- **CSS**: use CSS custom properties for colors/spacing, BEM-style naming, mobile-first, flexbox/grid for layout.
- **JavaScript**: ES6+ (const/let, arrow functions, template literals), camelCase names, JSDoc on functions.
- General: keep files under ~300 lines, 2-space indentation throughout.
