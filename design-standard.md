# Design Standard: Personal Portfolio Site

The authoritative reference for every visual decision on this site. `PRD.md` sets the vision, `content-model.md` defines the content, `site-contract.md` defines structure and behaviour — **this document defines how it looks and moves.** When an implementation choice about colour, type, spacing, texture, or motion is not answered here, extend this file rather than deciding ad hoc.

The mood is **a late-summer afternoon**: warm low light, unhurried pacing, quiet confidence. That mood is a **surface layer**. It never costs legibility or scan-speed. Where atmosphere and clarity conflict, clarity wins — a recruiter must identify who this is and one way to contact them within 10 seconds (`PRD.md` §6).

All values below are given as CSS custom properties so two developers converge on the same result. The complete token block is in [§7](#7-reference-token-block).

---

## 1. Principles

1. **Warmth comes from hue and type, not from low contrast.** Every colour is warm-biased (there is no pure grey, no pure black, no pure white), but text/background pairs still meet WCAG AA.
2. **Space is the primary design material.** Reach for more whitespace before reaching for a rule, a box, or a shadow.
3. **One accent.** Amber/terracotta is the only colour that draws the eye. Dusty green is a quiet secondary. Nothing else competes.
4. **Motion decelerates into rest.** Things ease to a stop. Nothing bounces, snaps, or springs.
5. **Depth is shallow.** Soft, warm, low shadows and 1px hairlines — never glass, glow, or drama.

---

## 2. Colour palette

### 2.1 Light theme (default)

| Token | Hex | Role & usage |
|---|---|---|
| `--color-bg` | `#FBF5EC` | Page background. Warm ivory, like sun on plaster. The default surface for Hero, Projects, Footer. |
| `--color-surface` | `#F3E9D9` | Raised/alternate surface. One step deeper than `--color-bg`. Used for the About and Contact section backgrounds, and as the hover fill for a clickable project entry. |
| `--color-surface-sunken` | `#EDE1CD` | Rare. Inset wells only (e.g. a code block on a blog post). Not for sections. |
| `--color-ink` | `#2B2320` | Primary text. Dark espresso brown. All headings and body copy. ~14:1 on `--color-bg`. |
| `--color-ink-muted` | `#6B5D4F` | Secondary text: post dates, meta lines, captions, footer text. ~5.7:1 on `--color-bg`. Only for text ≥ 15px and never for the primary reading passage. |
| `--color-ink-faint` | `#8A7B6B` | Decorative / disabled / large-only. ~3.5:1. Never used for text a visitor must read. |
| `--color-accent` | `#A85528` | The accent. Links, link underlines, inline icons, the active section marker in the header, focus ring. ~4.7:1 on `--color-bg`. |
| `--color-accent-strong` | `#8F461F` | The accent when it sits on `--color-surface` (sections tinted one step deeper), and the `:active`/pressed state of accent elements. |
| `--color-accent-bright` | `#D98324` | Decorative only — the warm note in the hero light-wash, a hover tint. **Never text, never a link colour** (fails AA). |
| `--color-accent-green` | `#5C6A44` | Dusty green. Secondary, quiet. Optional: a hairline accent on the current nav item, a small dot separator, a success message. ~5.2:1 on `--color-bg` — safe for small text if needed. |
| `--color-accent-green-soft` | `#7E8E5A` | Decorative green (background washes, low-opacity fills). Not text. |
| `--color-cta-bg` | `#8F461F` | Filled CTA (the "Get in touch" button) background. |
| `--color-cta-bg-hover` | `#7A3A18` | Filled CTA hover background. |
| `--color-cta-ink` | `#FBF5EC` | Text on a filled CTA. ~5.8:1 on `--color-cta-bg`; keep CTA labels ≥ 16px. |
| `--color-border` | `#E3D5C0` | Default hairline: section dividers (when whitespace alone isn't enough), card edges, input borders. |
| `--color-border-strong` | `#D8C4A6` | Hairline on hover / focus of a bordered element. |
| `--color-focus` | `#A85528` | Focus-visible ring colour (same as `--color-accent`). |
| `--sun-rgb` | `247, 199, 119` | Raw RGB for the hero light-wash gradient (used with varying alpha). |
| `--shadow-rgb` | `74, 55, 40` | Raw RGB for all shadows — a warm brown, never neutral grey. |

### 2.2 Dark theme (optional — `PRD.md` Nice-to-Have, client-side toggle + `prefers-color-scheme`)

Same roles, dusk instead of afternoon. Ship only if the toggle ships.

| Token | Hex / value |
|---|---|
| `--color-bg` | `#201A15` |
| `--color-surface` | `#2A231D` |
| `--color-surface-sunken` | `#17120E` |
| `--color-ink` | `#F2E7D5` |
| `--color-ink-muted` | `#B7A794` |
| `--color-ink-faint` | `#8C7C69` |
| `--color-accent` | `#E39A54` |
| `--color-accent-strong` | `#EFAE6C` |
| `--color-accent-bright` | `#F0A94E` (decorative only) |
| `--color-accent-green` | `#9BAA77` |
| `--color-accent-green-soft` | `#6E7B54` |
| `--color-cta-bg` | `#E39A54` |
| `--color-cta-bg-hover` | `#EFAE6C` |
| `--color-cta-ink` | `#201A15` |
| `--color-border` | `rgba(242, 231, 213, 0.14)` |
| `--color-border-strong` | `rgba(242, 231, 213, 0.24)` |
| `--color-focus` | `#E39A54` |
| `--sun-rgb` | `247, 199, 119` (used at lower alpha — see §5.2) |
| `--shadow-rgb` | `0, 0, 0` (dark shadows, alpha raised ~1.5×) |

### 2.3 Contrast rules (non-negotiable)

- Body / reading text: **≥ 4.5:1**. Use `--color-ink` only.
- Large text (≥ 24px, or ≥ 18.66px semibold), UI labels, borders, icons: **≥ 3:1**.
- `--color-ink-muted`: text ≥ 15px, secondary information only.
- `--color-ink-faint`, `--color-accent-bright`, `*-soft` greens: decorative or ≥ 24px display only — never body, never links.
- Links on a `--color-surface` background use `--color-accent-strong`, not `--color-accent`.
- Re-verify every pair with a contrast checker before merge; treat these hexes as starting points that must pass, not as licence to skip the check.

---

## 3. Typography

### 3.1 Families

| Use | Family | Fallback stack |
|---|---|---|
| Display & headings (h1–h4, hero tagline) | **Fraunces** — a soft serif with optical sizing; carries all the warmth | `"Fraunces", "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif` |
| Body, UI, nav, meta | **Inter** — chosen for legibility and scan-speed; the mood is carried by Fraunces and colour, not by the body face | `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` |

**Loading.** One `<link>` to Google Fonts, `display=swap`, with `<link rel="preconnect">` to `fonts.gstatic.com`. Self-host the two files if the 2s load budget (`PRD.md` §6) is at risk.

```
https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=Inter:wght@400;500;600&display=swap
```

- Fraunces: `font-optical-sizing: auto`. Weights **400 and 500 only** — 600+ reads assertive and corporate, which is off-tone. If the variable `SOFT` axis is used, set it to `40`; leave `WONK` at `0`.
- Inter: weights **400, 500, 600**. 600 is for rare UI emphasis and the overline label only.

### 3.2 Scale

Root stays at the browser default (16px). Modular ratio ≈ **1.25** — gentle, not dramatic. Sizes are fluid via `clamp()`; the px column is the rendered range.

| Token | `clamp()` | px range | Element | Family / weight | Line height | Letter-spacing |
|---|---|---|---|---|---|---|
| `--text-hero` | `clamp(2.5rem, 1.6rem + 4vw, 3.5rem)` | 40–56 | Hero name (h1) | Fraunces 400 | 1.08 | −0.02em |
| `--text-h2` | `clamp(1.75rem, 1.3rem + 2vw, 2.25rem)` | 28–36 | Section titles | Fraunces 500 | 1.15 | −0.015em |
| `--text-h3` | `1.375rem` | 22 | Project titles, blog post header | Fraunces 500 | 1.25 | −0.01em |
| `--text-h4` | `1.125rem` | 18 | Minor sub-labels (rare) | Fraunces 500 | 1.3 | 0 |
| `--text-lead` | `1.25rem` | 20 | Hero tagline, blog post intro paragraph | Inter 400 | 1.55 | 0 |
| `--text-body` | `1.125rem` | 18 | Default body copy | Inter 400 | 1.65 | 0 |
| `--text-body-long` | `1.125rem` | 18 | Blog post body | Inter 400 | 1.75 | 0 |
| `--text-small` | `0.9375rem` | 15 | Meta, dates, footer, back-link | Inter 400 | 1.5 | 0 |
| `--text-overline` | `0.8125rem` | 13 | Eyebrow labels above section titles (optional) | Inter 600 | 1.4 | +0.1em, `text-transform: uppercase` |

**Heading contrast is deliberately mild.** h1→h2 and h2→h3 step by roughly the 1.25 ratio; do not inflate the hero to "hero-banner" size — this is a calm document, not a landing-page shout.

### 3.3 Rules

- **Uppercase** appears in exactly one place: `--text-overline`. Nowhere else — not in nav, not in buttons, not in the footer.
- **Measure (line length):** body 62–70 characters; blog body target 66ch (`--measure-text: 42rem`); the hero tagline is capped by its ≤12-word limit — let it wrap to at most two lines, never force one.
- **Body letter-spacing is 0.** Inter is spaced correctly at these sizes. Only the large Fraunces headings are tightened, and only by the amounts in the table.
- **Weight for emphasis in prose:** Inter 600, used sparingly. Never italicise for emphasis (reserve italics for titles of works and the Fraunces headings' natural character).
- **Numbers in meta** (dates): lining figures, `font-variant-numeric: normal`.
- Minimum body size on any viewport is 16px — `--text-body` never clamps below `1rem`.

---

## 4. Spacing

### 4.1 Philosophy → base unit

Relaxed pacing is expressed as **larger gaps between things, not looser type**. The base unit is **8px (0.5rem)**. Every margin, padding, and gap is a token from the scale below. The only non-8 steps permitted are `4px` (tight inline) and `12px` (the 1.5× half-step used for control padding) — both are in the scale, nothing else off-grid.

### 4.2 Scale

| Token | px | rem | Typical use |
|---|---|---|---|
| `--space-3xs` | 4 | 0.25 | Icon-to-label, tight inline nudges |
| `--space-2xs` | 8 | 0.5 | Meta dot separators, chip padding-y |
| `--space-xs` | 12 | 0.75 | Button padding-y, gap in a tight list |
| `--space-sm` | 16 | 1 | Heading-to-body (h2), paragraph rhythm baseline |
| `--space-md` | 24 | 1.5 | Card padding (mobile), gap between project entries (stacked), nav link gap |
| `--space-lg` | 32 | 2 | Card padding (desktop), grid gap |
| `--space-xl` | 48 | 3 | Footer padding-y, gap between a section title and its content block |
| `--space-2xl` | 64 | 4 | Section padding-y (mobile floor) |
| `--space-3xl` | 96 | 6 | Section padding-y (mid) |
| `--space-4xl` | 128 | 8 | Section padding-y (desktop ceiling), gap between major page regions |

### 4.3 Layout widths

| Token | Value | Use |
|---|---|---|
| `--container-max` | `1080px` | Outer content width (header row, project area). Centred with auto margins. |
| `--measure-text` | `42rem` (~672px) | Max width of any prose column — About bio, blog post body, blog index list. |
| `--gutter` | `clamp(1.5rem, 5vw, 3rem)` | Page side padding: 24px mobile → 48px desktop. Applied inside the container, never removed. |
| `--section-rhythm` | `clamp(4rem, 10vw, 8rem)` | Vertical padding on the top and bottom of every main-page section. |
| `--header-h` | `4rem` (64px) | Sticky header height. Set `scroll-padding-top: calc(var(--header-h) + 1rem)` on `:root` so anchored sections clear it. |

### 4.4 Standard paddings (apply exactly)

| Element | Padding / gap |
|---|---|
| Page gutter, each side | `--gutter` |
| Section, top & bottom | `--section-rhythm` |
| Header | `0 --gutter`; height `--header-h`; nav-link gap `--space-md` (→ `--space-lg` at ≥1024px) |
| Footer | `--space-xl` top & bottom; `--gutter` sides |
| Section title → its content | `--space-xl` |
| Heading → immediately following body | `--space-sm` (h2), `--space-xs` (h3) |
| Paragraph → paragraph | `1.1em` (≈20px at body size), as `margin-block-end` |
| Project entry, internal padding | `--space-md` (mobile) → `--space-lg` (≥768px) |
| Between project entries | `--space-md` stacked / `--space-lg` in grid |
| Button / CTA, internal | `--space-xs --space-md` (12px vertical, 24px horizontal) |
| Inline gap (icon↔text, meta separators) | `--space-2xs` |
| Focus ring offset | `2px` |

### 4.5 Rhythm rules

- Adjacent sections do **not** double their padding at the seam — the seam gap is one `--section-rhythm`, not two stacked. Use a single owner (e.g. `padding-block`) and collapse consistently.
- A colour change between sections (`--color-bg` ↔ `--color-surface`) replaces the need for a divider rule. Don't use both.
- Never more than **two** distinct section background colours on the main page.
- Vertical space between a section title and its body is always `--space-xl`; don't tune it per section.

---

## 5. Texture & atmosphere

The finish is **matte and papery**. No glassmorphism, no `backdrop-filter` blur, no neon glow. Two effects carry the world: a fine grain, and a single soft light-wash in the hero.

### 5.1 Grain

A static film/paper grain over the whole viewport.

- Inline SVG `feTurbulence` as a `data:` URI (no network request), `baseFrequency ≈ 0.9`, `numOctaves 2`.
- Applied on a `body::after`: `position: fixed; inset: 0; pointer-events: none; z-index: 0;` with page content on `z-index: 1`.
- `opacity: 0.035` light theme / `0.05` dark theme. `mix-blend-mode: soft-light`.
- **Never animated.** It is a texture, not a motion effect. It is exempt from `prefers-reduced-motion` because it doesn't move, but it must not tile visibly or shift on scroll (hence `fixed`).

### 5.2 Hero light-wash

The "late-day sun". One warm radial gradient entering from the upper-right, optionally a cooler dusty-green wash from the lower-left, both very soft, behind the hero content.

```css
.hero {
  background:
    radial-gradient(120% 80% at 85% -10%,
      rgba(var(--sun-rgb), 0.38) 0%,
      rgba(var(--sun-rgb), 0.10) 40%,
      transparent 70%),
    radial-gradient(90% 60% at 0% 120%,
      rgba(126, 142, 90, 0.12) 0%,
      transparent 60%),
    var(--color-bg);
}
```

- Light theme: warm stop alpha `0.38`. Dark theme: drop the warm stop to `0.20` and the green to `0.08`.
- The wash sits **behind** text on the base `--color-bg` — it must not pull any hero text below its contrast target. Verify the tagline against the lightest point of the gradient.
- It appears in the **hero only**. Other sections are flat colour.

### 5.3 Section surfaces

- Default section background: `--color-bg`.
- About and Contact: `--color-surface` (one step deeper). This is the entire rhythm — a one-step tonal shift, nothing more.
- `--color-surface-sunken` is for inset wells inside content (e.g. a code block), never a section.

### 5.4 Elevation & shadow

Depth is shallow, warm, and diffuse. A raised element gets a **1px hairline plus a low shadow** — not a big blur.

| Token | Value | Use |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(var(--shadow-rgb), 0.06)` | Resting state of a raised element; the header once scrolled. |
| `--shadow-md` | `0 4px 16px -4px rgba(var(--shadow-rgb), 0.12), 0 2px 6px -2px rgba(var(--shadow-rgb), 0.07)` | Hover state of a clickable card or the CTA. |
| `--shadow-lg` | `0 14px 34px -10px rgba(var(--shadow-rgb), 0.16)` | Reserved for overlay/modal-like UI. This portfolio likely never needs it. |

Rules: no shadow larger than `--shadow-lg`; no `inset` shadows; no coloured shadows or glows (the hero wash in §5.2 is the only coloured light on the page); dark theme multiplies each alpha by ~1.5.

### 5.5 Corner radius

| Token | px | Use |
|---|---|---|
| `--radius-sm` | 4 | Chips/tags, inline code, small inputs |
| `--radius-md` | 8 | Cards, buttons, project entries, blog images |
| `--radius-lg` | 12 | Large panels only |

No pills (`border-radius: 999px`), no perfectly sharp corners on interactive elements. Blog images: `--radius-md` + `--shadow-sm`. (The Project Showcase has no images — `content-model.md` §3.)

### 5.6 Blur policy

`filter: blur()` and `backdrop-filter` are **not used** anywhere. The only blur on the page is the blur radius inside the shadow tokens. A sticky header that needs separation from scrolling content uses an opaque `--color-bg` fill + `--shadow-sm` + a `--color-border` bottom hairline — never a translucent blur.

---

## 6. Interactions

### 6.1 Timing & easing tokens

| Token | Value | Use |
|---|---|---|
| `--dur-quick` | `160ms` | Colour, background tint, opacity, underline colour |
| `--dur-base` | `240ms` | Card lift, shadow change, underline draw-in, translate |
| `--dur-slow` | `400ms` | Scroll-reveal entrances |
| `--ease-soft` | `cubic-bezier(0.2, 0.6, 0.2, 1)` | **Default.** Decelerates into rest, no overshoot. |
| `--ease-unhurried` | `cubic-bezier(0.33, 0, 0.2, 1)` | Movement that should feel deliberate and slow (nav underline, scroll reveal) |
| ambient loop | `ease-in-out` | **Only** the hero light drift (§6.5) |

**Forbidden easing:** anything that overshoots — `ease-in-out-back`, elastic, spring, or any `cubic-bezier` with a y-value outside `0–1`. Nothing on this site bounces.

No user-triggered feedback lasts longer than `--dur-slow` (400ms). Prefer `--dur-quick` — responsiveness reads as confidence.

### 6.2 Hover / focus / active by element

| Element | Rest | Hover | Focus-visible | Active |
|---|---|---|---|---|
| **Text link** (in prose) | `--color-accent`; underline 1px, `text-underline-offset: 0.15em`, underline colour at 40% alpha | Underline → full alpha, thickness → 2px; colour unchanged. `--dur-quick`. No layout shift. | 2px solid `--color-focus` ring, 2px offset, `border-radius: 2px` | Colour → `--color-accent-strong`, `--dur-quick` |
| **Header nav link** | `--color-ink`, no underline; current section marked with a `--color-accent` 2px bottom rule | Underline draws in from left (`background-size` or `scaleX` transition), `--dur-base` `--ease-unhurried`; colour → `--color-accent` `--dur-quick` | Same ring as above | — |
| **Filled CTA** ("Get in touch") | `--color-cta-bg`, `--color-cta-ink`, `--shadow-sm`, `--radius-md` | Background → `--color-cta-bg-hover`; shadow `sm → md`; `translateY(-1px)` max. `--dur-quick`. **No scale.** | Ring as above, offset 2px | `translateY(0)`, background a touch darker, `--dur-quick` (~80ms feel) |
| **Project entry (whole entry is a link)** | `--color-bg`, `--color-border` hairline, `--shadow-sm`, `--radius-md` | Background → `--color-surface`; border → `--color-border-strong`; shadow `sm → md`; `translateY(-2px)`. `--dur-base` `--ease-soft`. | Ring wraps the whole entry, offset 2px | `translateY(-1px)`, `--dur-quick` |
| **Project entry (not a link)** | `--color-bg`, `--color-border` hairline | **No hover state at all** — don't imply interactivity that isn't there (`site-contract.md` §3) | n/a | n/a |
| **Back-to-index link** | Treated as a text link | As text link | As text link | As text link |

Global: `:focus-visible` is **always** a visible ring; never `outline: none` without an equivalent replacement. `:hover` effects are gated so they don't fire on touch (`@media (hover: hover)`).

### 6.3 Scroll behaviour

- `scroll-behavior: smooth` on `:root` for anchor jumps; `scroll-padding-top: calc(var(--header-h) + 1rem)`.
- No scroll-jacking, no pinned/forced-scroll sections — the visitor keeps normal scroll control at all times (`site-contract.md` §3).

### 6.4 Scroll-reveal (optional, subtle)

If used at all: `opacity: 0 → 1` and `translateY(12px → 0)`, `--dur-slow` `--ease-unhurried`, triggered by `IntersectionObserver` at ~15% visible, **plays once**, optional stagger of ~60ms per sibling.

- Travel distance is **never more than 16px** — this is a settle, not a slide-in.
- Skipped entirely if it would delay first contentful paint on a slow connection (`site-contract.md` §3, `PRD.md` §6). Content must be readable with JS disabled — the reveal is progressive enhancement, initial state in CSS must not leave content permanently invisible if the observer never fires (guard with a `.js` class on `<html>`).

### 6.5 Ambient light drift (optional)

The hero light-wash (§5.2) may drift almost imperceptibly: a `transform: translate()`/`scale()` of a few percent, or a small position shift, **30–60s per cycle**, `ease-in-out`, `alternate`. Amplitude so small a visitor notices only that the page feels alive. Disabled entirely under `prefers-reduced-motion`.

### 6.6 Reduced motion

Under `@media (prefers-reduced-motion: reduce)`:

- No transforms, no scroll-reveal travel, no ambient drift.
- Colour/opacity transitions may remain but clamp to ≤ `--dur-quick`, or cut to `0.01ms`.
- The grain (static) and the light-wash (static base state) stay.

### 6.7 Emotional quality of movement

Movement on this site is **a held breath releasing** — it eases to rest, it never snaps to it. Durations are short enough to feel immediate (nothing over 400ms for anything the visitor triggers), but the curve always decelerates into place. Elements lift by 1–2px, not 8. Underlines grow, they don't flash. Nothing scales, spins, bounces, or slides across the viewport. Motion never runs while the visitor is trying to read — reveals complete before attention arrives, or they don't happen. The overall impression should match the light: warm, slow, and settled.

---

## 7. Reference token block

Drop into `:root`. Light theme is the base; dark theme overrides follow the mechanism in `PRD.md` (class toggle + `prefers-color-scheme`).

```css
:root {
  /* ---- Colour: light ---- */
  --color-bg: #FBF5EC;
  --color-surface: #F3E9D9;
  --color-surface-sunken: #EDE1CD;
  --color-ink: #2B2320;
  --color-ink-muted: #6B5D4F;
  --color-ink-faint: #8A7B6B;
  --color-accent: #A85528;
  --color-accent-strong: #8F461F;
  --color-accent-bright: #D98324;      /* decorative only */
  --color-accent-green: #5C6A44;
  --color-accent-green-soft: #7E8E5A;  /* decorative only */
  --color-cta-bg: #8F461F;
  --color-cta-bg-hover: #7A3A18;
  --color-cta-ink: #FBF5EC;
  --color-border: #E3D5C0;
  --color-border-strong: #D8C4A6;
  --color-focus: #A85528;
  --sun-rgb: 247, 199, 119;
  --shadow-rgb: 74, 55, 40;

  /* ---- Type ---- */
  --font-display: "Fraunces", "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif;
  --font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

  --text-hero: clamp(2.5rem, 1.6rem + 4vw, 3.5rem);
  --text-h2: clamp(1.75rem, 1.3rem + 2vw, 2.25rem);
  --text-h3: 1.375rem;
  --text-h4: 1.125rem;
  --text-lead: 1.25rem;
  --text-body: 1.125rem;
  --text-body-long: 1.125rem;
  --text-small: 0.9375rem;
  --text-overline: 0.8125rem;

  --lh-tight: 1.08;
  --lh-heading: 1.2;
  --lh-body: 1.65;
  --lh-long: 1.75;

  /* ---- Space (base 8px) ---- */
  --space-3xs: 0.25rem;  /* 4  */
  --space-2xs: 0.5rem;   /* 8  */
  --space-xs: 0.75rem;   /* 12 */
  --space-sm: 1rem;      /* 16 */
  --space-md: 1.5rem;    /* 24 */
  --space-lg: 2rem;      /* 32 */
  --space-xl: 3rem;      /* 48 */
  --space-2xl: 4rem;     /* 64 */
  --space-3xl: 6rem;     /* 96 */
  --space-4xl: 8rem;     /* 128 */

  /* ---- Layout ---- */
  --container-max: 1080px;
  --measure-text: 42rem;
  --gutter: clamp(1.5rem, 5vw, 3rem);
  --section-rhythm: clamp(4rem, 10vw, 8rem);
  --header-h: 4rem;

  /* ---- Radius ---- */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* ---- Elevation ---- */
  --shadow-sm: 0 1px 2px rgba(var(--shadow-rgb), 0.06);
  --shadow-md: 0 4px 16px -4px rgba(var(--shadow-rgb), 0.12),
               0 2px 6px -2px rgba(var(--shadow-rgb), 0.07);
  --shadow-lg: 0 14px 34px -10px rgba(var(--shadow-rgb), 0.16);

  /* ---- Motion ---- */
  --dur-quick: 160ms;
  --dur-base: 240ms;
  --dur-slow: 400ms;
  --ease-soft: cubic-bezier(0.2, 0.6, 0.2, 1);
  --ease-unhurried: cubic-bezier(0.33, 0, 0.2, 1);

  scroll-behavior: smooth;
  scroll-padding-top: calc(var(--header-h) + 1rem);
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --color-bg: #201A15;
    --color-surface: #2A231D;
    --color-surface-sunken: #17120E;
    --color-ink: #F2E7D5;
    --color-ink-muted: #B7A794;
    --color-ink-faint: #8C7C69;
    --color-accent: #E39A54;
    --color-accent-strong: #EFAE6C;
    --color-accent-bright: #F0A94E;
    --color-accent-green: #9BAA77;
    --color-accent-green-soft: #6E7B54;
    --color-cta-bg: #E39A54;
    --color-cta-bg-hover: #EFAE6C;
    --color-cta-ink: #201A15;
    --color-border: rgba(242, 231, 213, 0.14);
    --color-border-strong: rgba(242, 231, 213, 0.24);
    --color-focus: #E39A54;
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.24);
    --shadow-md: 0 4px 16px -4px rgba(0, 0, 0, 0.38),
                 0 2px 6px -2px rgba(0, 0, 0, 0.28);
    --shadow-lg: 0 14px 34px -10px rgba(0, 0, 0, 0.5);
  }
}

[data-theme="dark"] {
  /* same overrides as the media block above — apply for the explicit toggle */
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --dur-quick: 0.01ms;
    --dur-base: 0.01ms;
    --dur-slow: 0.01ms;
    scroll-behavior: auto;
  }
}
```

---

## 8. Do / Don't

**Do**
- Add whitespace before adding a border, box, or shadow.
- Keep amber as the only eye-catching colour; keep green quiet.
- Tighten only the large Fraunces headings; leave body spacing at 0.
- Let the hero tagline wrap to two lines.
- Verify every text/background pair against WCAG AA before merge.
- Make every interactive element reachable and visibly focusable by keyboard.
- Ship the dark theme only alongside a working toggle.

**Don't**
- Use pure black, pure white, or any neutral grey.
- Use `backdrop-filter`, `filter: blur()`, or any glow.
- Use uppercase anywhere except the one overline label.
- Use Fraunces at weight 600+ or as body text.
- Use `--color-ink-muted` for the main reading passage, or `--color-accent-bright` for a link.
- Animate the grain, scroll-jack, or move anything more than 16px on entrance.
- Use bounce / elastic / spring easing, or any transition over 400ms for user-triggered feedback.
- Add screenshots to the Project Showcase (`content-model.md` §3).
- Exceed two section background colours on the main page.
```
