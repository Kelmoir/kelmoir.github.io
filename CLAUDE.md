# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Current state

This is a **rebuild in progress**. The previous portfolio implementation was deleted (commit 704f06b) and the new build has not started yet. The repo currently contains only specification documents and `README.md`.

`README.md` describes the *previous* attempt — its "Project Structure" (`index.html` / `styles.css` / `script.js`) and customization instructions no longer reflect anything in the tree. Its **Technical Constraints** and **GitHub Pages deployment** steps are still accurate for the new build.

`CLAUDE.md` and `AGENTS.md` are intentionally kept in sync — update both when changing agent guidance.

## The specification chain

Three documents, produced by the ZTM "Complete Claude Code" bootcamp workflow, define what to build. They refine each other in order — read them as a chain, and when they conflict the **later** document wins:

1. **PRD.md** — vision, personas, feature tiers (Must/Should/Nice-to-Have), technical constraints, success criteria.
2. **content-model.md** — every content field, its meaning, and its constraints (length, tone). Section-by-section.
3. **site-contract.md** — page structure, exact section order, behaviour spec (nav, scroll, hover states per element type, mobile layout changes, animations). This is the most concrete; build against it.

Before implementing a section, check all three for that section. `site-contract.md` also records **assumptions it added** (footer Blog link, back-to-index link, no hamburger menu) — treat those as decisions, not suggestions.

## Hard constraints (from PRD + contract)

- **Static only.** HTML/CSS/JS, client-side. No backend, no database, no auth, no CMS, no server runtime.
- **No build step** — or at most a minimal static build with zero runtime dependency. Prefer plain files.
- Contact is `mailto:` + a static LinkedIn URL. No contact form.
- **Exactly 3 projects**, **text-only** — no screenshots or media. Descriptions carry all the weight.
- Blog = a **dedicated Blog Index page** plus separate static HTML pages, one hand-authored/pre-generated file per post. No runtime rendering, no client-side routing — blog navigation is full page loads.
- Main page has a **persistent Header nav**: in-page section anchors (About, Projects, Contact) + the Blog Index link. The Blog link goes here, **not in the footer** (footer is a closing element with no nav role).
- **No hamburger / collapsing menu.** The Header stays a row of inline links at every breakpoint (wrap before hiding). Section nav uses smooth-scroll anchors (`scroll-behavior: smooth`, no JS).
- Nothing hidden or truncated on mobile; no horizontal scroll at any breakpoint.
- Deploy target: GitHub Pages from the `main` branch root. Anything that breaks a from-root static deploy is out.

## Design intent

Late-summer-afternoon atmosphere — warm muted palette (golden ambers, soft terracottas, dusty greens), generous whitespace, calm/warm typography. But the mood is a **surface layer only**: project titles, role, and outcomes must stay immediately scannable and high-contrast. Whenever atmosphere and scan-speed conflict, **scan-speed wins** (success criteria: a visitor identifies who this is and one contact method within 10 seconds). Ambient animation and scroll fade-ins are optional and must be dropped if they delay content visibility.

## Workflow notes

- No test / lint / build tooling exists. Once HTML/CSS/JS files exist, preview locally with `python3 -m http.server` from the repo root and open the printed URL.
- Verify against PRD success criteria: sub-2s load, no console errors, correct render on mobile/tablet/desktop with no horizontal scroll.
