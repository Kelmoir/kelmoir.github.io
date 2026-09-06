# Site Contract: Personal Portfolio Site

Static site. No backend, no database, no authentication. All behavior is CSS/JavaScript only, running client-side.

---

## 1. Page Structure

### Main Page (single scrolling page)
1. **Hero** — establishes identity and role the instant the page loads, before any elaboration.
2. **About/Bio** — gives warm personal/professional context beyond the Hero's headline.
3. **Project Showcase** — demonstrates concrete work through exactly 3 project entries.
4. **Contact** — gives the visitor two direct, backend-free ways to reach out.
5. **Footer** — provides the entry point into the Blog (not previously specified in the content model; added here since the Blog lives on a separate page and needs a link from the main page to be reachable).

### Blog Index Page (separate page)
1. **Post List** — gives visitors an overview of all posts, each linking to its own page.

### Blog Post Page (template, one instance per post)
1. **Post Header** — identifies the post being read (title, date).
2. **Post Body** — delivers the post's full content.
3. **Back-to-Index Link** — returns the visitor to the Post List (added for navigability; not previously specified).

---

## 2. Content Inventory

### Hero
| Field | Description | Constraints |
|---|---|---|
| Name | Person's name | Plain text, 1 line |
| Role/Title | What the person does | Plain text, ≤6 words |
| Tagline | Line setting tone and clarity together | ≤12 words; concrete, not purely atmospheric |

### About/Bio
| Field | Description | Constraints |
|---|---|---|
| Bio Text | Short summary elaborating on Hero | 2–4 sentences, warm/calm tone, no jargon |

### Project Showcase (× 3)
| Field | Description | Constraints |
|---|---|---|
| Project Title | Name of the project | Plain text, 1 line |
| Project Description | What it is / what was done | 1–2 sentences; concrete and scannable (no image to anchor meaning) |
| Outcome/Role (optional) | Role or result | ≤1 sentence if included |

### Contact
| Field | Description | Constraints |
|---|---|---|
| Email CTA | Call-to-action label | ≤3 words, calm/confident tone |
| Email Link | `mailto:` address | Resolves without backend logic |
| LinkedIn Link | Static profile URL | Plain URL, no backend logic |

### Footer
| Field | Description | Constraints |
|---|---|---|
| Blog Link | Link to Blog Index page | ≤2 words label (e.g., "Blog") |

### Blog Index — Post List (per entry)
| Field | Description | Constraints |
|---|---|---|
| Post Title | Title, links to post page | Plain text, 1 line |
| Post Date | Publish date | Consistent format (e.g., "Aug 2026") |
| Excerpt | Teaser line | ≤20 words |

### Blog Post Page
| Field | Description | Constraints |
|---|---|---|
| Post Title | Same as index | Plain text, 1 line |
| Post Date | Same as index | Consistent date format |
| Post Body | Full content | No strict length; tone consistent with Bio Text |
| Back-to-Index Link | Returns to Post List | ≤3 words label (e.g., "← All posts") |

---

## 3. Behaviour Spec

### Navigation
- Main page sections are reached via smooth-scroll anchor links (single-page nav).
- Blog Link (footer) and Post Title links (index) are standard page navigations — full page load, no client-side routing, consistent with static-site constraints.
- Back-to-Index Link on post pages is a standard link back to the Blog Index page.

### Scroll Behaviour
- Smooth-scroll easing on in-page anchor navigation (CSS `scroll-behavior: smooth`, no JS required).
- No scroll-jacking or forced-scroll sections — visitor retains normal scroll control throughout.

### Hover States (by element type)
- **Text links** (Blog Link, Post Title, Back-to-Index): underline or subtle color shift on hover, ~150–200ms ease transition.
- **CTA elements** (Email CTA): subtle background/opacity shift on hover — no scale or bounce, to stay consistent with the calm Design Standard.
- **Project entries**: subtle background tint or border highlight on hover to indicate interactivity, if the entry is clickable; if not clickable, no hover state (avoid implying interactivity that isn't there).

### Mobile Layout Changes
- Hero, About, Contact, and Footer stack vertically at all breakpoints (already single-column by design).
- Project Showcase switches from a multi-column grid (desktop) to a single stacked column (mobile).
- Font sizes scale down proportionally on narrow viewports; no content is hidden or truncated on mobile.
- Blog Index post list remains a single stacked column at all breakpoints (no grid needed given expected post volume).

### Transitions & Animations
- Optional, lightweight ambient effect (per PRD Nice-to-Have) — e.g., a slow-drifting light/shadow gradient in the Hero background; purely decorative, must not affect text legibility or load time.
- Section fade-in on scroll (optional, subtle, ~300–400ms) — skipped entirely if it risks delaying content visibility on slow connections.
- No animated page-to-page transitions between the main page and Blog pages — standard browser navigation, kept simple and fast rather than novel.

---

## Assumptions & Additions Made in This Contract
- **Footer with Blog Link** and **Back-to-Index Link** were added — required for the Blog Index page to be reachable and returnable-from, but not previously specified in the content model.
- **Mobile nav approach**: no hamburger/menu component introduced — smooth-scroll anchors remain simple in-page links at all breakpoints, consistent with the site's calm, low-complexity direction. Flag if a persistent mobile nav is wanted instead.
