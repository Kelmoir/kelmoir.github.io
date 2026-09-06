# Content Model: Personal Portfolio Site

Scope: Must-Have features, plus the Blog feature (Should-Have). Other Should-Have items (nav, résumé link, social links beyond LinkedIn) remain excluded.

## 1. Hero Section
Distinct from About — this is the immediate, above-the-fold moment: who this is and what they do, before any elaboration.

| Field | Description | Constraints |
|---|---|---|
| Name | Person's name | Plain text, 1 line |
| Role/Title | What the person does | Plain text, ≤6 words |
| Tagline | Short line setting tone and clarity in one breath | ≤12 words; must stay concrete/legible — not purely atmospheric filler, per Design Standard tension |

## 2. About / Bio Section

| Field | Description | Constraints |
|---|---|---|
| Bio Text | Short personal/professional summary, elaborating on Hero | 2–4 sentences, warm/calm tone, no jargon-dense phrasing |

## 3. Project Showcase Section
Exactly 3 projects. No media/screenshots — relies on text only, so descriptions carry full weight of legibility.

| Field | Description | Constraints |
|---|---|---|
| Project Title | Name of the project | Plain text, 1 line |
| Project Description | What it is / what the person did | 1–2 sentences; concrete and scannable — no vague or purely atmospheric copy, since there's no image to anchor meaning |
| Outcome/Role (optional) | Person's role or result achieved | ≤1 sentence if included |

## 4. Blog Section (Should-Have)
Delivered as additional static HTML pages — one per post — not part of the single scrolling main page. Requires two content structures:

**Blog Index** (list/teaser) — its own **dedicated page**, reached via a link in the main page's Header nav (not the footer). Decided; see Gaps below.

| Field | Description | Constraints |
|---|---|---|
| Post Title | Title of the post, links to its page | Plain text, 1 line |
| Post Date | Publish date | Consistent date format (e.g., "Aug 2026") |
| Excerpt | One-line teaser of the post | ≤20 words |

**Blog Post Page** (one static HTML page per post)

| Field | Description | Constraints |
|---|---|---|
| Post Title | Same as index | Plain text, 1 line |
| Post Date | Same as index | Consistent date format |
| Post Body | Full post content | No strict length; tone should stay consistent with Bio Text (warm, calm) |

## 5. Contact Section

| Field | Description | Constraints |
|---|---|---|
| Email CTA | Short call-to-action label (e.g., "Get in touch") | ≤3 words, calm/confident tone |
| Email Link | `mailto:` address | Must resolve without backend logic |
| LinkedIn Link | Static link to LinkedIn profile | Plain URL, no backend logic |

---

## Technical Addendum: Page Metadata (not a visible section)
Lives in HTML `<head>`, not on-page content:
- **Title tag** — derive from Name + Role
- **Meta description** — derive from Bio Text (trimmed to ~150–160 chars)
- **Social preview (OG) image** — no avatar exists to reuse; needs its own static asset, or can be omitted in favor of a plain-text preview

## Gaps Resolved
1. ~~Profile photo~~ — confirmed excluded.
2. ~~Project count~~ — fixed at 3.
3. ~~Metadata placement~~ — resolved above; not a content-model section.
4. ~~Hero vs. About~~ — resolved: Hero and About are now separate sections.
5. ~~Project media~~ — removed; showcase is text-only.

## Remaining Open Items
- Image weight/format standard for the OG/social-preview asset (if one is added later) is still undefined — not urgent since it's optional metadata, not a page section.

## Gaps Resolved (later)
6. ~~Blog Index placement~~ — resolved: its own **dedicated index page**, linked from a **Header nav** on the main page (not the footer). Introduces a persistent Header nav element; footer loses its navigation role.
