# Product Requirements Document: Personal Portfolio Site

## 1. Vision
A personal portfolio — a primary single-page profile plus a small set of static blog pages — where the work itself reads clearly and fast, wrapped in a late-summer-afternoon visual atmosphere — warm light, unhurried pacing — as a stylistic layer rather than the message. Visitors should leave with a clear sense of what this person does, the quality of their work, and how to reach them; the mood should differentiate the site, not slow down that assessment.

## 2. User Personas
- **The Recruiter/Hiring Manager** — scans quickly for role fit, skills, and past work; needs to find contact info in seconds.
- **The Potential Collaborator/Client** — wants a feel for the person's style and quality of work before reaching out.
- **The Peer/Industry Contact** — browsing out of curiosity or networking; appreciates personality over polish.

## 3. Feature List

### Must-Have (reflects static-site constraint: no backend, no database, no auth)
- Static HTML/CSS/JS only — no server-side logic, no CMS, no database
- Bio/About section with static text content
- Project showcase (static content — images/text hardcoded or loaded from static JSON/markdown files)
- Contact method via `mailto:` link or embedded static link to an external service (e.g., Calendly, LinkedIn) — no self-hosted contact form, since that requires a backend
- Responsive layout (mobile, tablet, desktop)
- Fast initial load (minimal, optimized assets)

### Should-Have
- Single-page smooth-scroll navigation between sections
- Downloadable résumé/CV (static file link)
- Social/external profile links (GitHub, LinkedIn, etc.)
- Blog section, delivered as additional static HTML pages (one page per post), linked from the main page — no CMS, no database, posts authored/generated as static files

### Nice-to-Have
- Subtle ambient animation (e.g., slow-drifting light/shadow effect evoking late-day sun)
- Light/dark mode toggle (client-side only, no persistence backend — localStorage is fine)
- Small hover/scroll micro-interactions

## 4. Technical Constraints
- Static site: HTML/CSS/JS only, no backend, no database, no authentication
- Deployable to static hosts (GitHub Pages, Netlify, Vercel, or similar) with no server runtime
- Any dynamic-feeling behavior (contact, forms) must rely on third-party static-compatible services or `mailto:` — not self-hosted logic
- No build step required, or at most a minimal static-site build (e.g., a bundler) with no runtime dependency
- Must support current major browsers without polyfills for core content visibility
- Blog posts are individual static HTML pages, hand-authored or generated ahead of time (e.g., via a static-site generator) — no runtime rendering, no server, no database

## 5. Design Standard Summary
Warm, muted late-summer palette — golden ambers, soft terracottas, dusty greens — evoking fading afternoon light, applied as a surface/atmosphere layer only. Generous whitespace and relaxed pacing between sections, but never at the cost of scan-speed: project titles, role, and outcomes must remain immediately legible, not softened into the mood. Typography should feel calm and warm rather than sharp or corporate, while staying high-contrast and easy to skim. Overall: quiet confidence framing substantive work — not relaxation as the pitch itself.

## 6. Success Criteria
- Page loads in under 2 seconds on a standard broadband connection
- A first-time visitor can identify who the person is and one way to contact them within 10 seconds
- Layout renders correctly on mobile, tablet, and desktop without horizontal scrolling
- No console errors; no dependency on server-side infrastructure at any point
- Visual tone (per Design Standard) is recognizable as "late summer afternoon, relaxed" without needing explanation
