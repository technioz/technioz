# Technioz — Design System Reference

Single source of truth for the visual design of technioz.com. Everything here
is extracted from the live code — primarily `src/app/globals.css`, the shared
components in `src/components/`, and the page templates. Read this before
building any new page or component so it matches the system instead of
inventing new patterns.

---

## 1. Design philosophy

The site borrows the **AssemblyAI editorial-technical aesthetic**: a print-like
paper canvas, a serif display face at large sizes, uppercase monospace
"technical" labels, hairline rules, and a single cobalt accent. It should feel
like an engineering journal, not a SaaS template.

Core principles:

- **One accent color.** Cobalt (`cobolt-500`) is the only saturated color used.
  Everything else is ink (near-black), paper (warm whites), or hairline
  neutrals. Blush tones exist as tokens but are never used.
- **Paper and ink, not pure black/white.** Text is `#1d1b16`/`#4a4945`, never
  `#000`; backgrounds are `#fdfcf8`/`#f5f3eb`, never `#fff` (except
  `white-100` on buttons and inside dark sections).
- **Hairlines over shadows.** Sections and cards are separated with 1px
  `neutral-300` borders. Shadows are reserved for floating chrome (subnav,
  chat panel) and are always ink-tinted, never pure black.
- **Monospace for "machine voice."** Eyebrow labels, CTAs, diagram captions,
  and stats captions are uppercase mono with letter-spacing. Serif display is
  the "human voice"; sans body carries the reading copy.
- **Flat radii.** `rounded-sm` (4px) everywhere; 2px on small buttons;
  `rounded-full` only for tag pills and bullet dots.
- **Self-drawn graphics.** All diagrams are hand-built inline SVG in the site
  palette (grid-paper background, mono layer labels, cobalt strokes) — no
  stock illustrations, no icon libraries.
- **No dark mode.** The site is light-only. "Dark" means the ink sections
  (`bg-black-500`) and the cobalt CTA closers (`bg-cobolt-500`).

---

## 2. Where tokens live

Tailwind CSS v4, **CSS-first configuration** — there is no
`tailwind.config.js`. All design tokens are declared in the `@theme` block at
the top of `src/app/globals.css` and become Tailwind utilities automatically
(`--color-cobolt-500` → `text-cobolt-500`, `bg-cobolt-500`, etc.). The
typography plugin is loaded with `@plugin "@tailwindcss/typography";`.

To add a token: add it to `@theme` in `globals.css`, not to a config file.

Shared component classes (`.h1`–`.h4`, `.p2`–`.p5`, `.e1`/`.e2`,
`.cta-*`, `.article-prose`) are plain CSS classes in `globals.css` — use them
as literals in `className`, they are not React components.

---

## 3. Color

### Palette (from `@theme`)

| Token | Hex | Role |
|---|---|---|
| `cobolt-500` | `#3923c7` | Primary accent — links, CTAs, bullets, diagram strokes |
| `cobolt-400` | `#614fd2` | Accent hover/mid tone (rare) |
| `cobolt-300` | `#887bdd` | Accent on dark backgrounds; primary-button hover |
| `cobolt-200` | `#b0a7e9` | Outlined dark-variant button text/border |
| `cobolt-100` | `#d7d3f4` | Lightest accent (rare) |
| `black-500` | `#1d1b16` | Ink — headings, dark sections, logo silhouette |
| `black-400` | `#4a4945` | Body text (also `--color-text`) |
| `black-300` | `#777673` | Faint labels, diagram captions, eyebrow on subnav |
| `black-200` | `#a5a4a2` | Secondary text on dark (also `--color-text-faint`) |
| `black-100` | `#d2d1d0` | Lightest ink (kbd shadows) |
| `white-100` | `#ffffff` | Button text, cards on dark, pure highlights |
| `white-200` | `#fdfcf8` | Page background (also `--color-page-bg`); default section bg |
| `white-300` | `#f5f3eb` | Alternate section bg; marketecture card bg |
| `neutral-100` | `#ecebe5` | Lightest neutral |
| `neutral-200` | `#dad7cb` | Prose table borders |
| `neutral-300` | `#c7c3b2` | **The hairline border color** — section rules, card borders, grid dividers |
| `neutral-400` | `oklch(70.8% 0 0)` | Neutral mid (rare) |
| `blush-200/300/500` | `#f4d4d0` / `#ec9d92` / `#e39389` | Warm accent tokens — defined but **unused** in the UI |
| `error` | `#f04438` | Form errors |

Naming quirks to respect: the accent is spelled **"cobolt"** (not cobalt), and
the "black" scale is **ink**, not pure black.

### Usage rules

- **Links:** `text-cobolt-500` on light; `hover:text-cobolt-300` on dark.
  Body/prose links underline on hover only (`hover:no-underline` inverse for
  nav chrome).
- **Text on light:** headings `text-black-500`, body `text-black-400`, faint
  labels `text-black-300`.
- **Text on `bg-black-500`:** headings `text-white-200` (use `!text-white-200`
  when overriding a utility class like `.h3` that sets its own color), body
  `text-black-200`, accents `text-cobolt-300`, faint `text-white-300/60`.
- **Text on `bg-cobolt-500`:** white-100 or white-100/80.
- **Tinted surfaces:** soft washes like `bg-cobolt-500/5` with
  `border-cobolt-500/20` for feature boxes; tag chips use
  `bg-cobolt-500/5 border-cobolt-500/10`.
- Alpha with slash syntax (`text-white-100/80`, `bg-black-500/20`) is the
  standard way to soften, not new colors.

---

## 4. Typography

### Fonts (self-hosted in `public/fonts/`, loaded with `@font-face` + `font-display: swap`)

| Family | Files | Weights | Role |
|---|---|---|---|
| **Oceanic Text** (serif) | `.otf` — Regular, RegularItalic, Medium, Bold | 400, 500, 700 (+italic) | Display: all headings, big stats. Note: `.h1`–`.h4` render at **weight 400** — the serif is designed to be used regular even at 72px. |
| **UN 11ST** (sans) | `.woff2` — Regular, Italic, Bold | 400, 700 (+italic) | Body copy, UI text |
| **Modern Gothic Mono** | `.woff2` — Light, Regular, Medium, Italic | 300, 400, 500 (+italic) | Eyebrows, CTAs, labels, code, diagram annotations |

Token names: `--font-display`, `--font-body`, `--font-mono`. Tailwind
utilities: `font-display`, `font-body`, `font-mono`.

### Type scale (utility classes in `globals.css`)

| Class | Font | Size | Tracking | Line height | Notes |
|---|---|---|---|---|---|
| `.h1` | display | 72px | **−3.6px** | 1 | Homepage hero only |
| `.h2` | display | 64px | −3.2px | 1 | |
| `.h3` | display | 56px | −2.8px | 1 | Sets its own color (`black-500`); override with `!text-white-200` on dark |
| `.h4` | display | 48px | −2.4px | 1 | |
| `.p2` | body | 22px | — | 1.3 | Hero subcopy |
| `.p3` | body | 18px | — | 1.3 | Standard body, nav items |
| `.p4` | body | 16px | — | 1.3 | Card copy, footer links |
| `.p5` | body | 14px | — | 1.3 | Small captions, nav links |
| `.e1` | mono | 12px | +1.2px | normal | Uppercase eyebrow; `font-feature-settings: "ss09" 1` |
| `.e2` | mono | 14px | +1.4px | normal | Uppercase, larger eyebrow (rare) |

Conventions:

- Large display sizes get **negative letter-spacing**; mono labels get
  positive tracking. Never set tracking manually — use the classes.
- Inline display sizes between scale steps use arbitrary values with matching
  negative tracking, e.g. card titles:
  `font-display text-[28px] tracking-[-1.4px] leading-none` (28px/−1.4px),
  `text-[22px] tracking-[-1.1px]`, `text-[20px] tracking-[-1px]` — the ratio
  is ≈ −0.05px per px of size.
- Big stat numbers: `font-display text-[40px] tracking-[-2px]` or
  `text-[56px] tracking-[-2.8px]`, always `leading-none`.
- Body base: `line-height 1.3`, color `--color-text` on `--color-page-bg`;
  html has antialiased + smooth scroll; `overflow-x: clip` on body.
- Mono "machine voice" details: `.e1`, `.cta-tertiary`/`.cta-quaternary` use
  `font-feature-settings: "ss09" 1` (a stylistic set in Modern Gothic Mono).
  Keep it on those classes; don't add it elsewhere.

### Article prose (`.article-prose`)

DB blog posts are rendered with `prose article-prose` (typography plugin,
re-themed in `globals.css`). Key overrides — use these for long-form reading,
not the marketing scale: h2 48px/−2.4px, h3 28px/−1.4px, h4 22px/−0.8px;
paragraphs **18px / line-height 1.7**; bullets are 6px cobalt dots (no default
markers); `pre` blocks `bg-black-500` with `white-200` code, 13px mono;
blockquote gets a 3px cobolt left bar; strong is 500 weight ink; images get
`rounded-sm` + 1px `neutral-300` border.

---

## 5. Layout & spacing

### Page frame

| Pattern | Value |
|---|---|
| Max content width | `max-w-[1440px] mx-auto` |
| Mobile gutters | `px-6` (24px) |
| Desktop gutters (content sections) | `lg:px-[148px]` |
| Nav/footer gutters | `lg:px-[30px]` |
| Homepage section rhythm | `py-16` mobile → `lg:py-[120px]` |
| Sub-page section rhythm | `py-16` → `lg:py-[100px]` |
| Homepage hero top | `pt-12` → `lg:pt-[140px]` (clears sticky nav) |
| Sub-page hero | `pt-12` → `lg:pt-[100px]`, `pb-16` → `lg:pb-[100px]` |
| Hero/heading column | `max-w-[800px]` |
| Section intro column | `max-w-[640px]`, stack `flex flex-col gap-[16px]` |
| Reading column (guides/articles) | `max-w-[700px]`–`max-w-[800px]` |
| Section header stack gap | `gap-[48px] lg:gap-[80px]` (intro above content) |

Spacing inside components is largely **arbitrary pixel values in brackets**
(`gap-[16px]`, `gap-[24px]`, `gap-[32px]`, `p-[32px]`, `gap-[40px]`,
`gap-[80px]`) rather than the Tailwind step scale — follow the existing
ladder: 2 → 4 → 8 → 12 → 16 → 20 → 24 → 32 → 40 → 48 → 60 → 80 → 100 → 120.

### Section background system

Sections alternate paper tones to create rhythm, with two full-bleed "moment"
backgrounds:

1. Default: `bg-white-200` (page paper)
2. Alternate: `bg-white-300` (slightly darker paper) — alternate consecutive
   sections
3. Proof/social moment: `bg-black-500` with cobolt-300 accents and
   `border border-black-400` cards (homepage "Evidence")
4. CTA closer: full-bleed `bg-cobolt-500` with white-100 text and an inverted
   button — every pillar/template page ends with this section

Thin `border-y border-neutral-300` rules separate flat sections (e.g. the
stats strip).

### Grids & cards

- Card grids: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`.
- **Hairline-divided grid** ("marketecture"): `gap-px bg-neutral-300 border
  border-neutral-300 rounded-sm overflow-hidden` with cells
  `bg-white-300 px-[28px] py-[36px]` — the 1px gaps become dividers.
  Cell hover uses an **outline**: `outline outline-1 outline-transparent
  -outline-offset-1 hover:outline-cobolt-300`.
- Standard card: `bg-white-200 rounded-sm p-[32px] flex flex-col gap-[12px]`
  on a `white-300` background (or `border border-neutral-300` on paper).
- Dark card: `border border-black-400 rounded-sm p-[32px]`.
- Tag chips: `inline-flex items-center rounded-full border whitespace-nowrap
  font-body p-[8px] text-[14px] bg-cobolt-500/5 border-cobolt-500/10
  text-black-400`.
- Bullet lists: 6px cobalt dot — `span.w-1.5.h-1.5.rounded-full.bg-cobolt-500
  .mt-[9px]` next to each item (or `li::before` in prose).

### Radius, borders, shadows

- Radius tokens: `--radius-sm 4px` (default), `md 8px`, `lg 12px`, `xl 16px`,
  `full 9999px`. UI is almost exclusively `rounded-sm`; small buttons use a
  literal `rounded-[2px]`.
- Hairlines: `border-neutral-300` (light), `border-black-400` (on dark ink).
- Shadows (floating chrome only, ink-tinted):
  - Subnav dropdown: `shadow-[0_10px_24px_rgba(29,27,22,0.12)]`
  - Chat panel: `shadow-[0_8px_48px_rgba(29,27,22,0.18)]`

---

## 6. Buttons (`.cta-*` classes)

All CTAs are **monospace, uppercase, letter-spacing 1.2–1.4px** with
`transition 0.2s` on background-color/border-color. Never restyle with sans.

| Class | Look | Size | Hover |
|---|---|---|---|
| `.cta-primary` | Solid `cobolt-500`, white text | h-40px, p-12px, 14px, `radius-sm` | bg → `cobolt-300` |
| `.cta-secondary` | Outline `cobolt-500` (1px), cobolt text, transparent | same | fills cobalt, text → white |
| `.cta-primary-dark` | Solid `cobolt-300`, white text — for ink/dark sections | same | `opacity 0.9` |
| `.cta-secondary-dark` | Outline `cobolt-200`, cobolt-200 text | same | fills `cobolt-200`, text → `black-500` |
| `.cta-tertiary` | Solid cobalt, 12px, `rounded-[2px]`, p 8/12px, ss09 | small | bg → `cobolt-300` |
| `.cta-tertiary-dark` | Solid `cobolt-300` | small | `opacity 0.9` |
| `.cta-quaternary` | Outline cobalt, 12px, `rounded-[2px]` | small | fills cobalt, text → white |
| `.cta-quaternary-dark` | Outline `cobolt-200` | small | fills `cobolt-200`, text → `black-500` |

Rules: `-dark` suffixed variants are for `bg-black-500` sections. Inverted
closer-section buttons override a light class: `cta-primary-dark` +
`!bg-white-100 !text-cobolt-500`. The nav's compact CTA is the inline
equivalent of `cta-tertiary` (`bg-cobolt-500 hover:bg-cobolt-300
rounded-[2px] px-[12px] py-[8px] font-mono text-[12px] uppercase
tracking-[1.2px]`).

---

## 7. Component recipes

### Nav (`src/components/nav.tsx`)

- Sticky: `sticky top-0 z-50 bg-white-200`; heights `h-[64px]` mobile,
  `lg:h-[82px]`.
- Links `.p5`; active = `text-cobolt-500`, inactive =
  `text-black-500 hover:text-cobolt-500`.
- Logo is forced to an ink silhouette: global CSS `.nav-logo { filter:
  brightness(0); }` on `/logo.webp`.
- Desktop mega-subnavs (Services, Resources) open on hover with a 150ms close
  delay; panel `bg-white-200 border-neutral-300
  shadow-[0_10px_24px_rgba(29,27,22,0.12)] rounded-b-[4px]`; left column is a
  260px "All Services/Resources" intro card with an `.e1` label; a
  `backdrop-blur-md bg-black/10` scrim covers the page beneath.
- Mobile: full-height right drawer (`max-w-xs bg-white-200`), accordion groups
  animated via `grid-template-rows 0fr→1fr` (400ms), chevron rotates 90°
  (300ms), both `ease-[cubic-bezier(0.22,1,0.36,1)]`.

### Footer (`src/components/footer.tsx`)

`bg-black-500`, 5 link columns (`e1` column headers at 80% opacity, `.p4`
links, `hover:text-cobolt-300`), contact block, legal row, centered
`FooterBrand` wordmark at the very bottom.

### Hero pattern (all pages)

Eyebrow chip → display heading → body subcopy → CTA row.

- Eyebrow chip: `e1 inline-flex items-center justify-center border
  px-[16px] py-[8px] border-black-400 text-black-400` (swap text/border to
  `black-200` on dark). Plain text eyebrows on sub-pages: `e1
  text-cobolt-500`.
- Headline uses hard breaks (`<br />`) with a cobalt second line for
  two-part messages.
- CTA row: `flex items-center gap-[8px]` — primary goes to `/contact`,
  secondary to Calendly.

### Section header pattern

Left-aligned stack: eyebrow chip (`.e1`), `h3` heading, `.p3` intro
(`max-w-[640px]`), then a content grid. No centered section headers.

### Forms

Input recipe (light): `h-[48px] px-4 rounded-sm border border-neutral-300
focus:outline-none focus:border-cobolt-500` — focus is signaled by the border
turning cobalt, not a ring. On cobalt/dark backgrounds: `border-white/30
bg-white/10 text-white-100 placeholder:text-white-100/50
focus:border-white-100`. Errors use `text-error`. Every lead form posts to
`/api/contact` and includes an off-screen `company_url` honeypot field
(`aria-hidden`, `tabIndex=-1`) and `aria-live` status text.

### Chat widget (`src/components/chat-widget.tsx`)

"Corner fold" launcher anchored bottom-right; panel 400×560px, `rounded-sm`,
`border-neutral-200`, unfolds 300ms with spring easing
`cubic-bezier(0.34,1.56,0.64,1)` from `transform-origin: 100% 100%`; cobolt
header with favicon; `bg-black-500/20 backdrop-blur-[2px]` backdrop.

### Motion

- `FadeIn` (IntersectionObserver, threshold 0.1, fires once): `fade-up`
  (default — opacity + 12px rise, 0.5s), `fade-in` (0.6s), `fade-scale`
  (0.97→1, 0.5s); stagger sections with `delay` 100/150/200.
- Customer marquee: duplicated list, `translateX(0→-50%)`, 30s linear
  infinite; logos are `brightness(0)` silhouettes at 50% opacity → full
  opacity on hover.
- Testimonial carousel: auto-advance 5s, slides move via
  `translateX(-index*100%)`, 500ms, `ease-[cubic-bezier(0.22,1,0.36,1)]`.
- Standard micro-transitions: 0.2s for colors/borders on links, buttons,
  cards.
- House easing: `cubic-bezier(0.22,1,0.36,1)` for UI movement; springs only
  for the chat widget.

### SVG diagrams (`src/components/diagrams/`)

Hand-coded inline SVG, `viewBox`-scaled (`w-full h-auto`, ~900px wide), with:
`role="img"` + descriptive `aria-label`; faint 40px grid-paper pattern
(`#c7c3b2` at 30% opacity); uppercase mono 10px layer labels (`#777673`);
flow lines as cobalt gradient strokes; nodes = `fill #fdfcf8` rect with
cobalt or `#c7c3b2` 1.5px strokes, body-font 13px titles + mono 10px captions.
Accent-filled nodes use `#3923c7` with white text. No external images.
Diagram components are lazy-loaded with `next/dynamic` on the homepage.

### Images & assets

- Logos/wordmarks render as ink silhouettes (`filter: brightness(0)`); on
  dark surfaces use `logo-dark.webp`.
- OG/social: `/og-image.png`, 1200×630, wired through
  `buildOpenGraph`/`buildTwitterCard` in `src/lib/metadata-helpers.ts` —
  every page's `metadata` must use these helpers (per-page `openGraph` fully
  replaces the layout's, so the helper repeats all required fields).
- Icons: hand-drawn inline SVGs (chevrons, hamburger, arrows) per component
  with `currentColor`. Note: README lists `lucide-react`, but it is **not**
  installed in `package.json` and never imported — don't rely on it; draw the
  icon inline or add the dependency deliberately.

---

## 8. Accessibility patterns in use

- Focus: default browser ring is suppressed (`focus:outline-none`) in favor of
  cobalt border-color change on inputs; interactive cards use the
  outline-on-hover technique. When adding new interactive elements, ensure a
  visible `:focus-visible` treatment exists.
- Standard ARIA in components: `aria-label` on icon buttons, `aria-expanded`
  on accordions, `aria-live` for form status, `sr-only` for hidden labels,
  decorative SVGs marked `aria-hidden`.
- Honeypot inputs are off-screen and `aria-hidden` so assistive tech skips
  them.
- No `prefers-reduced-motion` handling exists yet — the marquee, carousel
  autoplay, and FadeIn run regardless. If adding new motion, add a reduced-
  motion guard; fixing the existing components is a welcome change.
- Heading order is enforced site-wide for SEO/A11y (one `h1` per page, no
  skipped levels) — preserve this when adding sections.

---

## 9. Rules for new pages

1. Use the shared templates first: `PillarPage` (guide pages),
   `SolutionPage` (industry solutions), `SubServicePlaceholder` (service
   sub-pages) — don't hand-roll a new page skeleton.
2. Follow the background ladder: hero on `white-200`, alternate
   `white-300`/`white-200` sections, optional `black-500` proof section,
   close with the cobalt CTA section.
3. Use the utility classes (`.h3`, `.p3`, `.e1`, `.cta-primary`) — never
   restyle typography or buttons from scratch.
4. Keep gutters/rhythm: `px-6 lg:px-[148px]`, `py-16 lg:py-[100px]`.
5. One accent only. New color = new token in `@theme`, discussed first.
6. Eyebrow every section; keep headings left-aligned.
7. Images: silhouettes for client logos; `rounded-sm` + hairline border for
   photos; next/image for all raster art.
8. Metadata: `buildOpenGraph`/`buildTwitterCard` + canonical in every page's
   `metadata` export; add `BreadcrumbJsonLd` and matching visible breadcrumb
   (Home / …) on sub-pages.
9. Dark sections: switch text to the white-200/black-200/cobolt-300 trio and
   use `-dark` CTA variants.
10. Check this file before inventing a spacing value, shadow, or easing —
    the house pattern probably already exists.

---

## 10. Known quirks

- `marketecture-grid` / `marketecture-card` / `marketecture-title` /
  `marketecture-desc` on the homepage services grid carry **no CSS** — the
  real styling is the adjacent Tailwind utilities. Treat them as inert
  semantic hooks; don't copy the names expecting styles.
- Many paddings/gaps are arbitrary pixel values (`px-[148px]`, `gap-[80px]`)
  rather than the Tailwind scale — match neighboring sections rather than
  "normalizing" them.
- `.h3` sets its own ink color, so dark sections need `!text-white-200`.
- `neutral-400` is an `oklch()` value, the only non-hex color token.
- Blush palette is defined in tokens but completely unused — don't reach for
  it without a reason.
- Global CSS sets every `h1`–`h6` to the display font and ink color, so a
  heading styled with `font-body`/`font-bold` still renders in Oceanic unless
  you override the family explicitly.

---

## 11. Paid-ad landing pages

Reference implementation: `src/app/ai-saas-development-uae/`.

- **Register the path** in `DISTRACTION_FREE_PATHS` (`src/lib/landing-pages.ts`).
  That hides the main nav, footer and Nova chat (`SiteChrome` in the root
  layout) and keeps the page out of the sitemap. Set `robots: { index: false }`
  in the page metadata.
- **Own minimal chrome:** sticky header = logo (links to `/`) + section anchors
  + one CTA; footer = main-site, Privacy, Terms and Cookie settings links.
  Don't add a second `<main>` — the root layout already wraps pages in one.
- **Story order:** promise (hero + proof stats) → proof → problem (ink band) →
  honest comparison → offer + price → process + fit → FAQ (`<details>`) →
  form CTA (ink band). Every CTA anchors to the form (`#apply`).
- **Buttons:** landing pages use 48px-tall touch targets (`BTN_*` in the
  route's `constants.ts`) instead of the 40px `.cta-*` classes.
- **Forms post to `/api/leads`** (`campaign_leads` table + ntfy). Answer
  options live in `src/lib/campaign-lead-options.ts`; fire Meta Pixel events
  only through `trackPixelEvent()` (`src/lib/meta-pixel.ts`), which is a no-op
  without marketing consent.
- **Privacy:** any new form field, tracker or embed must be added to
  `src/app/privacy/page.tsx` in the same change.