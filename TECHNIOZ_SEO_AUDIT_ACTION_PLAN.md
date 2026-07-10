# Technioz SEO Audit — Analysis & Action Plan

> **Source:** `technioz-seo-audit.md.docx` (July 3, 2026 audit of previous `technioz.com`)  
> **Purpose:** Use the audit as a diagnostic benchmark for the new Next.js 16 build. We will not blindly copy every recommendation, but we will treat every flagged pattern as a test of whether the new site is also making the same mistake.  
> **How to use this doc:** Each issue has a `Status` field — `Fixed in new build`, `Needs verification`, or `Action required`. Only `Action required` items should become new tasks.

---

## 0. Executive Summary (Audit)

The old site was effectively invisible in organic search:

- **Ahrefs DR:** 2.6
- **Organic keywords in top 100:** 0
- **Organic traffic:** 0
- **Ahrefs Rank:** ~39.4M

Three structural problems suppressed the old site:

1. **Site-wide canonical bug** — every page canonicalized to `https://technioz.com` (the bare homepage). The canonical host also 301-redirected to `www`, creating a canonical loop.
2. **Spam backlink profile** — ~153 of 230 referring domains used an identical spam-testimonial anchor promoting `SEOExpress.org`.
3. **Trust-breaking content contradictions** — homepage claimed "10+ years, 200+ projects, 50+ developers"; About said "Founded in 2024, 10+ projects, 10+ team members."

The audit also noted the upside: SERPs for the target market are unusually soft. A DR 5 competitor (`apptunix.ae`) ranks #2 for `software development company dubai`. The transport/bus-ticketing niche is the strongest wedge because we have real case studies (Al Khanjry, Golden Lines / BusPass UAE).

### New-build position

- We are rebuilding from scratch in Next.js 16 with typed metadata, self-canonicals, `metadataBase`, and JSON-LD components.
- We must **avoid every systemic issue** below.
- Some audit items refer to old pages (`/store`, `/blog/<id>` duplicates) that do not exist in the new build — those are noted as `Not applicable`.

---



## 1. Technical SEO



### 1.1 Critical issues


| #   | Issue                                                       | Old Evidence                                                  | Why it matters                                                           | Status in new build                                                                                                                                                                                                                                                                               | Action if needed                                                                             |
| --- | ----------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 1   | [x] **Site-wide canonical points to homepage**              | Every page output `canonical: https://technioz.com`           | Tells Google all inner pages are duplicates of the homepage → deindexing | `Fixed in new build` — removed root `alternates.canonical` from `layout.tsx`; `metadataBase: new URL("https://technioz.com")` now auto-generates self-referencing canonicals per route. Verified across all 118 generated HTML files: no inner page canonicalizes to homepage, all use apex host. | Keep monitoring; re-verify after any metadata refactor                                       |
| 2   | [x] **Canonical host ≠ served host**                        | Canonical used non-www; site 301-redirected to `www`          | Canonical loop; Google ignores unreliable canonicals                     | `Fixed in new build` — `metadataBase: new URL("https://technioz.com")` but sitemap/OG use `https://technioz.com` (apex). **Decision:** we are standardizing on apex `https://technioz.com` (no www). Verify redirect rule and host consistency.                                                   | Confirm apex serves 200, no www redirect conflicts, and all canonicals/og:url use apex       |
| 3   | [x] **Duplicate blog URLs (numeric IDs)**                   | `/blog/3` served same content as `/blog/react-19-features...` | Duplicate content, split signals                                         | `Not applicable` — new blog uses only `/blog/[slug]` with `generateStaticParams`                                                                                                                                                                                                                  | None                                                                                         |
| 4   | [x] **Empty robots.txt**                                    | `robots.txt` body was empty                                   | No `Sitemap:` directive, weak crawler control                            | `Action required` — `public/robots.txt` must include `Sitemap: https://technioz.com/sitemap.xml`                                                                                                                                                                                                  | Add `robots.txt` with `User-agent: `*, `Allow: /`, `Disallow: /md/`, `Sitemap:` directive    |
| 5   | [x] **Sitemap unverifiable / malformed**                    | Could not parse `/sitemap.xml`; `/sitemap-0.xml` empty        | Discovery failure for inner pages                                        | `Needs verification` — we generate `public/sitemap.xml` manually. Must validate XML and host consistency.                                                                                                                                                                                         | Validate XML, ensure all URLs are apex, exclude `/md/` and any noindex pages                 |
| 6   | [x] **Meta keywords tag ~4,000+ words**                     | Homepage, `/store`, `/faq` stuffed with hundreds of phrases   | Wastes ~30KB HTML; leaks keyword map; looks spammy                       | `Fixed in new build` — we use `keywords` metadata field but it is a curated array, not 4,000 words. **However, we must watch length.**                                                                                                                                                            | Cap keywords array to ≤20 highly relevant phrases per page; delete if not used by any engine |
| 7   | [x] **Empty** `/store` **indexable with homepage metadata** | Old `/store` had no products and duplicate metadata           | Thin-content flag                                                        | `Not applicable` — new build has no `/store` route                                                                                                                                                                                                                                                | None                                                                                         |
| 8   | [x] **No JSON-LD schema detected**                          | None in rendered metadata                                     | Missed rich results / entity clarity                                     | `Fixed in new build` — we have `BreadcrumbJsonLd`, `BlogPostingJsonLd`, `ArticleJsonLd`, and root `Website/Organization` JSON-LD in `layout.tsx`                                                                                                                                                  | Add `Service`, `FAQPage`, and `Organization` schemas where missing                           |
| 9   | [x] **404 handling unverified**                             | Bogus URL returned empty body                                 | Soft-200 wastes crawl budget and confuses users                          | `Needs verification` — need to confirm Next.js renders a real 404 page with status 404                                                                                                                                                                                                            | Test `/this-does-not-exist` returns HTTP 404 with helpful links                              |
| 10  | [x] **Hydration artifact "12369"**                          | Stray number in "Why Choose Us"                               | Visible junk on homepage                                                 | `Fixed in new build` — counters removed / controlled                                                                                                                                                                                                                                              | None                                                                                         |


**Verification log (canonical fix):**

- Built project: `npm run build` → 118 static pages generated successfully.
- Checked 14 sample pages: homepage, about, services, services/web-development, blog, blog/how-to-choose..., portfolio, portfolio/alkhanjry-transport, case-studies, software-development-company-dubai, faq, contact, solutions/logistics, custom-software-development.
- Scanned all generated `.html` files in `.next/server/app`: every user-facing page has a self-referencing apex canonical; no bare homepage canonical on inner pages; no `www` host; no doubled `\| Technioz \| Technioz` suffix.
- Sitemap check: 121 URLs, all `https://technioz.com/*`, only 1 homepage URL. Excludes noindex blog posts (`/blog/building-scalable-microservices-with-node-js-and-docker`, `/blog/react-19-features-every-developer-should-know`).
- Only `_not-found.html` and `_global-error.html` lack canonicals — these are internal Next.js error handlers, not indexable user-facing routes.



### 1.2 Nav & crawlability issues


| #   | Issue                                                    | Old Evidence                        | Status in new build                          | Action if needed                                                                                                                            |
| --- | -------------------------------------------------------- | ----------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 11  | [x] **Nav dropdown parents are non-link triggers**       | "Services" and "Help" had no `href` | Crawlers reach service pages only via footer | `Action required` — verify `nav.tsx` makes "Services" link to `/services` and any Help/Resources parent link to `/faq` or `/resources`      |
| 12  | [x] **Blog "Load More" hides posts**                     | Only 4 of 8 posts in initial HTML   | Older posts become orphans                   | `Fixed in new build` — `/blog` now server-renders all posts with search + pagination (page numbers in query param, sitemap lists all posts) |
| 13  | [x] **Footer social links show raw URLs as anchor text** | Old footer used raw URLs            | Wasted internal/social links                 | `Action required` — verify footer social links use branded anchor text (e.g. "LinkedIn", "X/Twitter")                                       |




### 1.3 Page speed & Core Web Vitals


| #   | Observation                                       | Old Impact              | Status in new build                                                                       | Action if needed                                                                                         |
| --- | ------------------------------------------------- | ----------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 14  | [x] Blog card images requested at `w=3840`        | Heavy LCP on blog pages | `Action required` — we must ensure `sizes` prop on blog card images                       | Add `sizes="(max-width: 768px) 100vw, 400px"` or similar to blog card `<Image>`                          |
| 15  | [x] `og:image` declared as 1200×630 but uses logo | Broken social previews  | `Action required` — `logo.webp` is 256×71; not suitable as OG image                       | Create a real 1200×630 OG image (`/og-image.png` or `/opengraph-image.png`) and reference it in metadata |
| 16  | [x] Hydration cost / bundle bloat                 | TBT/INP risk            | `Needs verification` — monitor bundle sizes; homepage uses dynamic imports for heavy SVGs | Keep dynamic imports; audit `next/bundle-analyzer` output quarterly                                      |


---



## 2. On-Page SEO (Template-Level Issues)



### 2.1 Title / description / social patterns


| #   | Issue                                                | Old Evidence                                                | Status in new build                          | Action if needed                                                                                                                                            |
| --- | ---------------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | [x] **Doubled brand suffix**                         | Inner pages rendered "… | Technioz | Technioz"              | Unprofessional; truncates useful title space | `Fixed in new build` — changed root title template from `"%s | Technioz"` to `"%s"` in `layout.tsx`; verified no page has doubled suffix in generated HTML. |
| 18  | [x] **Twitter-card description is homepage default** | All pages used homepage description                         | Poor social CTR for inner pages              | `Needs verification` — check if `twitter.description` is set per route or inherited                                                                         |
| 19  | [x] **Homepage description 296 chars**               | Truncated in SERP                                           | CTA buried                                   | `Action required` — current homepage description may be long; shorten to ~155 chars                                                                         |
| 20  | [x] **Generic homepage title**                       | "Technioz - Innovative Software Development & IT Solutions" | No money keyword up front                    | `Action required` — update homepage title to target buyer intent                                                                                            |
| 21  | [x] **Generic H1**                                   | "Your Vision, Our Expertise"                                | Zero keywords                                | `Action required` — homepage H1 needs buyer intent                                                                                                          |
| 22  | [x] **Inner page titles brand-first or generic**     | `/services`, `/web-development`, etc. weak                  | Low relevance                                | `Action required` — apply §5 rewrites to all service, pillar, location, and key blog pages                                                                  |
| 23  | [x] **Logo alt = "Hero Image"**                      | Old logo alt meaningless                                    | Decorative misuse                            | `Fixed in new build` — verify nav/footer logo alt = `"Technioz — software development company"`                                                             |


---



## 3. Content Audit



### 3.1 Old inventory vs new build

Old site had:

- 8 blog posts (2 case studies, 6 tutorials)
- 5 portfolio items
- 5 service pages
- 1 FAQ hub

New build current state:

- **118 static pages**, including:
  - 9 pillar hub pages
  - 7 solution pages
  - ~24 service detail pages
  - 4 portfolio case studies
  - 54 blog posts
  - 4 location landing pages
  - Standard company pages (About, Contact, FAQ, Terms, Privacy, Enterprise, Resources)



### 3.2 Strategic content rules from the audit


| #   | Rule                                             | Status in new build                                                                                                                    | Action if needed                                                                                                    |
| --- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| 24  | **Deprioritize generic dev tutorials**           | We still have some generic tutorials (React, microservices, etc.). They may attract developers, not buyers.                            | Review all tutorial posts; either expand with first-hand project detail, add strong service CTAs, or `noindex` them |
| 25  | **Lead with client stories and buyer questions** | We have Al Khanjry and Sky Growers case studies. Good. Need more transport cluster content.                                            | Build `/industries/transport-logistics` or `/solutions/logistics` as cluster hub; add build-vs-buy guide            |
| 26  | **No thin GCC city pages**                       | Audit says don't build thin Oman/Qatar/Kuwait/Bahrain pages. We have 4 Dubai/UAE pages.                                                | Keep Dubai pages rich; do not add thin GCC city pages                                                               |
| 27  | **Portfolio must separate real vs concept work** | Old site mixed real and demo clients. We have Al Khanjry, HattaFoodHub, Folio AI, Sky Growers. Need to verify all are real or labeled. | Add "Concept build" labels if any portfolio item is not a shipped production product                                |




### 3.3 New content to create (lead-generation focused)

The audit recommends creating these landing pages / content assets. We should add them to the roadmap:


| Priority | Page / asset                                                        | Target keyword                                                          | Intent          | Why it matters                                                                      |
| -------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------- | --------------- | ----------------------------------------------------------------------------------- |
| P1       | `/software-development-company-dubai`                               | `software development company dubai` (200/mo, KD 7)                     | Commercial      | We already have this page — verify metadata and content match intent                |
| P1       | `/web-development-company-dubai`                                    | `web development company dubai` (800/mo, KD 7)                          | Commercial      | We already have this page — verify metadata and content match intent                |
| P1       | `/mobile-app-development-company-dubai`                             | `mobile app development company dubai` (450/mo, KD 21)                  | Commercial      | We already have this page — verify metadata and content match intent                |
| P1       | `/services/ai-solutions` rebuilt around chatbots                    | `ai chatbot development company` (1,300/mo, KD 10)                      | Commercial      | We have `/services/ai-solutions` but it may not be chatbot-focused enough — rebuild |
| P1       | `/industries/transport-logistics` or `/solutions/logistics` cluster | `transport management software` (3,000/mo, KD 16)                       | Commercial      | This is our strongest wedge — create the hub                                        |
| P1       | App cost calculator + cost guide                                    | `how much does it cost to develop an app` (1,000/mo, KD 16)             | Info-commercial | Email capture engine                                                                |
| P2       | `/services/mvp-development`                                         | `mvp development company` / `mvp development for startups` (350–600/mo) | Commercial      | Startup buyers move fast                                                            |
| P2       | React Native landing                                                | `react native development company` (300/mo IN, 2,000 global, KD 2)      | Commercial      | Both flagship apps (BusPass, HattaFoodHub) are React Native                         |
| P2       | Hire dedicated developers India                                     | `hire dedicated developers india` (200/mo, KD 22)                       | Transactional   | India delivery story                                                                |
| P2       | E-commerce Dubai landing                                            | `ecommerce website development dubai` (600/mo, KD 11)                   | Commercial      | Matches existing service line                                                       |


---



## 4. Keyword & Competitor Gap Analysis



### 4.1 Old rankingscode 

- 0 keywords in top 100
- 0 organic traffic
- 0 pages with traffic



### 4.2 New-build target keyword map (from audit)


| Keyword                                     | Country   | Volume             | KD     | CPC           | Current URL in new build                | Action                                     | Business value |
| ------------------------------------------- | --------- | ------------------ | ------ | ------------- | --------------------------------------- | ------------------------------------------ | -------------- |
| web development company dubai               | AE        | 800                | 7      | $5.00         | `/web-app-development-company-dubai`    | Verify title/H1/description, add proof     | High           |
| ai chatbot development company              | US/global | 1,300              | 10     | $1.10         | `/services/ai-solutions`                | Rebuild around chatbots                    | High           |
| mobile app development company dubai        | AE        | 450                | 21     | $18.00        | `/mobile-app-development-company-dubai` | Verify, add BusPass/HattaFoodHub proof     | High           |
| transport management software               | US/global | 3,000              | 16     | $1.60         | `/solutions/logistics` (exists)         | Expand into cluster hub                    | High           |
| how much does it cost to develop an app     | US/global | 1,000              | 16     | $1.90         | None                                    | Create cost guide + calculator             | High           |
| software development company dubai / uae    | AE        | 200 + 150          | 7–8    | $3.50–4.00    | `/software-development-company-dubai`   | Verify, add proof                          | High           |
| ecommerce website development dubai         | AE        | 600                | 11     | $1.10         | `/solutions/ecommerce`                  | Add Dubai qualifier / landing variant      | High           |
| mvp development company / for startups      | IN+US/gl. | 350 + 600          | 1–10   | $0.90–1.10    | `/services/mvp-development`             | Verify metadata, add startup proof         | High           |
| react native development company            | IN/global | 300 (2,000 gl.)    | 2      | $0.40         | None                                    | Create dedicated landing                   | Medium-High    |
| custom software development cost            | US        | 250                | 2      | $1.10         | None                                    | Create cost guide                          | Medium-High    |
| fleet management software                   | US/global | 2,900 (14,000 gl.) | 27     | $6.00         | `/solutions/logistics`                  | Secondary target after transport hub ranks | Medium         |
| bus ticketing system / bus booking software | US/global | 200 / 40           | 21 / 0 | $1.70 / $4.00 | `/case-studies` (Al Khanjry)            | Create build-vs-buy guide                  | Medium         |
| hire dedicated developers india             | IN        | 200 (700 gl.)      | 22     | $0.25         | None                                    | Create landing                             | Medium         |
| custom software development dubai           | AE        | 100                | 0      | $4.00         | `/software-development-company-dubai`   | Fold into Dubai hub                        | Medium         |
| app development cost india                  | IN        | 150                | 2      | $0.20         | None                                    | Fold into cost guide                       | Medium         |
| software company in jalandhar               | IN        | 10                 | 12     | $0.04         | `/about`, `/contact`                    | Add NAP + GBP                              | Low-Medium     |
| software development company india          | IN        | 250                | 36     | $0.25         | Homepage                                | Defer — KD 36 unrealistic now              | Low            |




### 4.3 Competitor benchmark

Track these peers in Ahrefs:

- `apptunix.ae` (DR 5) — dedicated Dubai landing page ranks #2
- `skytechdigital.ae` (DR 24) — service page + local proof
- `toxsl.ae` (DR 26)
- `techgropse.ae` (DR 22)
- Directory listicles: `goodfirms.co`, `clutch.co` — we need profiles there

---



## 5. Meta Title & Description Rewrites (Apply to New Build)

The audit gave exact rewrites for key pages. Apply these to the new build where the route exists.

### 5.1 Template fixes

- Fix doubled brand suffix.
- Ensure every route has unique `title`, `description`, `openGraph.title`, `openGraph.description`, `twitter.title`, `twitter.description`.
- Keep descriptions ≤155 characters.
- Canonicals and `og:url` must use apex `https://technioz.com/<path>`.



### 5.2 Per-page rewrites


| Page                                | Current status (new build) | Recommended title                                                             | Recommended description                                                                                                                                       |
| ----------------------------------- | -------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                                 | Verify                     | `Custom Software Development Company — Web, Mobile & AI | Technioz`           | `We build web apps, mobile apps and AI solutions for businesses in the GCC and India. 10+ projects delivered since 2024. Book a free 30-minute consultation.` |
| `/services`                         | Verify                     | `Software Development Services: Web, Mobile, AI & Cloud | Technioz`           | `End-to-end software development — web apps, iOS/Android, AI and cloud. Fixed-price or dedicated teams. See services, process and typical costs.`             |
| `/services/web-development`         | Verify                     | `Custom Web Application Development Company | Technioz`                       | `Custom web apps in React, Next.js and Node — built for scale. See how we digitized GCC transport operators, then get a fixed quote in 48 hours.`             |
| `/services/mobile-development`      | Verify                     | `Mobile App Development Company — iOS & Android | Technioz`                   | `Native and cross-platform apps in React Native and Flutter. We shipped BusPass UAE to 15,000+ subscribers. Free app consultation, no commitment.`            |
| `/services/ai-solutions`            | **Rebuild**                | `AI Chatbot Development Company — NLP, ML & Automation | Technioz`            | `We build AI chatbots, predictive analytics and computer-vision systems that pay for themselves. Book a free AI use-case consultation.`                       |
| `/case-studies` / Al Khanjry detail | Verify                     | `Case Study: Online Bus Ticketing for Al Khanjry Transport (Oman) | Technioz` | `How a 25-year-old GCC bus operator moved to real-time online ticketing on AWS — 40% faster bookings, 99.9% uptime. Full case study + architecture.`          |
| `/faq`                              | Verify                     | `Software Development FAQs — Pricing, Process, NDA & Security | Technioz`     | `30 straight answers: what custom software costs, fixed-price vs hourly, timelines, NDAs, GDPR/HIPAA compliance, and how to start.`                           |
| `/portfolio`                        | Verify                     | `Case Studies & Portfolio — Transport, Fintech, E-commerce | Technioz`        | `Real projects with real numbers: BusPass UAE (15,000+ subscribers), Al Khanjry ticketing (99.9% uptime), and more. See how we build.`                        |
| `/contact`                          | Verify                     | `Contact Technioz — Free 30-Min Consultation & 48h Quote`                     | `Tell us about your project. We reply within 24 hours with next steps and a scoping call — no commitment, NDA on request.`                                    |




### 5.3 New pages to create (with metadata)


| Route                                            | Title                                                                 | Description                                                                                                                            |
| ------------------------------------------------ | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `/software-development-company-dubai`            | `Software Development Company in Dubai — Web, Mobile & AI | Technioz` | `Dubai software development company building web apps, mobile apps and AI solutions for UAE/GCC businesses. Book a free scoping call.` |
| `/web-development-company-dubai`                 | `Web Development Company in Dubai | Technioz`                         | `Custom web application development in Dubai. React, Next.js, Node. Get a fixed quote in 48 hours.`                                    |
| `/mobile-app-development-company-dubai`          | `Mobile App Development Company in Dubai | Technioz`                  | `iOS, Android and React Native app development in Dubai. See BusPass UAE + HattaFoodHub case studies.`                                 |
| `/industries/transport-logistics`                | `Transport & Logistics Software Development | Technioz`               | `Bus ticketing, fleet management and transport software for GCC operators. Real case studies. Download the digitalization roadmap.`    |
| `/blog/bus-ticketing-system-build-vs-buy`        | `Bus Ticketing System: Build vs Buy (2026 Guide) | Technioz`          | `Should you build or buy a bus ticketing system? Cost bands, timelines, and when a custom platform wins.`                              |
| `/resources/app-development-cost-calculator`     | `App Development Cost Calculator (2026) | Technioz`                   | `Estimate custom app development cost in 2 minutes. Interactive calculator + emailed PDF breakdown.`                                   |
| `/services/mvp-development`                      | `MVP Development Company for Startups | Technioz`                     | `Scope, design and ship your startup MVP in 12 weeks. Idea to app store with React Native / Next.js.`                                  |
| `/services/react-native-app-development` landing | `React Native Development Company | Technioz`                         | `Cross-platform apps with React Native. We shipped BusPass UAE and HattaFoodHub. Talk to a React Native lead.`                         |
| `/hire-dedicated-developers-india`               | `Hire Dedicated Developers in India | Technioz`                       | `Senior React, Node, React Native and AI developers on monthly contracts. Get 3 CVs within 72h.`                                       |
| `/ecommerce-website-development-dubai`           | `E-commerce Website Development in Dubai | Technioz`                  | `Custom Shopify, WooCommerce and headless e-commerce builds for UAE retailers. Free store audit.`                                      |


---



## 6. Internal Linking Audit



### 6.1 Current state in new build

- Header/footer provide consistent linking.
- Need to verify **contextual in-body links** between blog ↔ services ↔ portfolio.
- Related-articles blocks should link blog↔blog and also to services where relevant.



### 6.2 Rule to institutionalize

> Every service page links to ≥1 case study + 1 FAQ answer + 1 blog post.
> Every blog post links to ≥1 service page with descriptive anchor.
> Every case study links to the related service page and the next case study.



### 6.3 Internal link plan (apply now)


| Source page                                     | Target page                                               | Suggested anchor                                | Reason                               |
| ----------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------- | ------------------------------------ |
| Al Khanjry case study                           | `/portfolio/alkhanjry-transport` or BusPass detail        | `as we did for BusPass UAE`                     | Chain strongest proof assets         |
| Al Khanjry results                              | `/services/cloud-services` or `/services/devops-services` | `AWS cost-optimization services`                | Convert readers into service path    |
| Sky Growers case study                          | `/solutions/logistics` or future transport hub            | `transport & logistics software development`    | Make transport the cluster hub       |
| `/services/mobile-development` e-commerce block | `/solutions/ecommerce`                                    | `see our e-commerce platform build`             | Every claim links to proof           |
| `/services/web-development`                     | Al Khanjry / Sky Growers case study                       | `how we transformed Golden Lines' booking flow` | Adds unique evidence                 |
| `/services/ai-solutions`                        | `/faq` AI question                                        | `how we integrate AI into existing apps`        | Long-tail support                    |
| Homepage "Industries → Logistics" card          | `/solutions/logistics`                                    | `transport & logistics solutions`               | Industry cards must not be dead-ends |
| Homepage testimonial                            | Al Khanjry case study                                     | `read Al Khanjry's story`                       | Verifies testimonial, passes equity  |
| `/faq` pricing answers                          | `/resources/app-development-cost-calculator`              | `full app development cost breakdown`           | FAQ → MOFU content → lead            |
| Every blog post author box                      | `/about`                                                  | `meet the Technioz team`                        | E-E-A-T reinforcement                |
| Footer social links                             | same URLs                                                 | `Twitter/X`, `Instagram`, `LinkedIn`            | Raw URLs look broken                 |
| Nav "Services" parent                           | `/services`                                               | `Services`                                      | Must be a real link                  |
| Nav "Resources" / "Help" parent                 | `/faq` or `/resources`                                    | `Resources` / `FAQ`                             | Must be a real link                  |


---



## 7. Lead Magnet & Conversion Audit



### 7.1 What already works in new build

- Calendly booking link (low friction)
- Free 30-min consultation + roadmap offer
- Contact form with budget/timeline qualifiers
- FAQ objection handling
- Real case studies



### 7.2 What is broken or missing


| #   | Issue                            | Fix                                                                  | Priority |
| --- | -------------------------------- | -------------------------------------------------------------------- | -------- |
| 27  | No email capture anywhere        | Add footer newsletter: `Get the GCC tech buyer's briefing — monthly` | P1       |
| 28  | No phone/WhatsApp on site        | Add phone/WhatsApp number in footer and `/contact`                   | P1       |
| 29  | Contact page has no response SLA | Add `Replies within 24h` under submit button                         | P1       |
| 30  | No privacy reassurance near form | Add 1-line privacy note + NDA on request                             | P1       |
| 31  | Same generic CTA everywhere      | Add content-matched CTAs per page/funnel stage                       | P1       |
| 32  | No lead magnets                  | Build the 6 lead magnets below                                       | P2–P1    |




### 7.3 Lead magnets to build


| #   | Lead magnet                                             | Audience                             | Placement                                               | CTA                                                    | Why it works                        |
| --- | ------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------ | ----------------------------------- |
| 1   | **App Development Cost Calculator**                     | Startup founders, SME owners         | Cost guide, `/services/mobile-development`, FAQ pricing | `Estimate your app cost in 2 minutes →`                | 1,000/mo searches; captures emails  |
| 2   | **Transport Digitalization Roadmap** (PDF)              | GCC bus/fleet operators              | Transport case studies, `/solutions/logistics`          | `Download the roadmap GCC operators use to go digital` | Proven niche; sales-call asset      |
| 3   | **BusPass UAE case study PDF** (gated)                  | Transport/mobility product owners    | `/portfolio/alkhanjry-transport`, transport landing     | `Get the full case study incl. architecture (PDF)`     | Turns best proof into named leads   |
| 4   | **MVP Launch Checklist** (idea → app store in 12 weeks) | Startup founders                     | `/services/mvp-development`, blog                       | `Free checklist: 27 steps from idea to launch`         | Cheap; captures early founders      |
| 5   | **Software Vendor Evaluation Scorecard**                | SME buyers comparing agencies        | Dubai landing pages, FAQ comparison                     | `Comparing dev shops? Use our scorecard`               | Positions us as honest advisor      |
| 6   | **Free Technical Audit / Code Review**                  | Companies with painful existing apps | `/services/it-consulting`, rescue section               | `Get a free 10-point audit of your current app`        | Different entry door than new build |


---



## 8. Backlink & Authority Audit



### 8.1 Old profile (not directly fixable in code)

- DR 2.6, Ahrefs Rank ~39.4M
- 314 live backlinks from 230 domains
- ~153 domains spam-testimonial anchor for `SEOExpress.org`
- ~28 more domains link-seller ads
- Genuine links: ~1 (`lablab.ai`)



### 8.2 Actions (off-site)


| #   | Action                            | Detail                                                                                                                  | Priority |
| --- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------- |
| 33  | Build disavow file                | Export Ahrefs referring domains; disavow `.shop/.click/.top/.icu` PBN set and SEOExpress testimonial domains (~180–200) | P2       |
| 34  | Stop any paid DR-boost packages   | The data shows they produced 0 traffic/rankings                                                                         | P0       |
| 35  | Directory foundation              | Create/complete Clutch, GoodFirms, TechReviewer, Google Business Profile, LinkedIn                                      | P1       |
| 36  | Earn 10–15 real links in 90 days  | Client partner credits (Al Khanjry, Golden Lines), app-store listings, founder guest posts, hackathons/AI directories   | P1       |
| 37  | Linkable assets                   | Transport Digitalization Roadmap, annual "State of GCC transport digitalization" mini-report                            | P2       |
| 38  | Point new links at priority pages | Homepage, Dubai landing, transport industry page                                                                        | P1       |


---



## 9. Local SEO



### 9.1 Markets

- Jalandhar/Punjab, India (delivery HQ)
- GCC / Dubai (sales focus)



### 9.2 Issues and fixes


| #   | Issue                                        | Status in new build          | Action                                                                                                           |
| --- | -------------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 39  | No NAP (Name, Address, Phone) anywhere       | `Action required`            | Add phone/WhatsApp, email, and India HQ address to footer and `/contact`                                         |
| 40  | No Google Business Profile                   | `Action required` (off-site) | Create GBP for Jalandhar office; get 3 existing testimonial clients to post reviews                              |
| 41  | No LocalBusiness/Organization schema         | `Action required`            | Add `Organization` JSON-LD with address, phone, email, URL, sameAs (LinkedIn, Clutch, etc.)                      |
| 42  | Dubai/UAE page needs UAE contact number      | `Action required`            | Add UAE virtual number or WhatsApp Business number; add "Do you work with clients in the Middle East?" FAQ block |
| 43  | Jalandhar mention on `/about` and `/contact` | `Needs verification`         | Ensure About and Contact mention India HQ and delivery center                                                    |




### 9.3 Decision on LocalBusiness schema

Audit recommends `LocalBusiness` schema. Previous direction was to skip `LocalBusiness`. We should revisit: `Organization` schema with address/contact is the minimum; `LocalBusiness` can be added if/when GBP is verified.

---



## 10. Prioritized Action Plan



### 10.1 Immediate fixes — 0–2 weeks (P0/P1)


| #   | Task                                                                              | Evidence / Where to fix                                | Owner   |
| --- | --------------------------------------------------------------------------------- | ------------------------------------------------------ | ------- |
| 1   | [x] Verify self-referencing apex canonicals on every route; fix `og:url` to match | `src/app/layout.tsx`, every `page.tsx` metadata export | Dev     |
| 2   | [x] Confirm apex host consistency (no www vs non-www conflict)                    | `next.config.ts`, DNS, Coolify                         | Dev     |
| 3   | [x] Add `robots.txt` with `Sitemap:` directive and `/md/` disallow                | `public/robots.txt`                                    | Dev     |
| 4   | [x] Validate `sitemap.xml` XML and URL host consistency                           | `public/sitemap.xml`, GSC                              | Dev     |
| 5   | [x] Reconcile trust claims — one honest set everywhere                            | Homepage, About, Footer stats                          | Content |




## Master action items checklist



### Technical SEO / Crawlability

- [x] Fix site-wide canonical pointing to homepage — self-referencing apex canonicals per route.
- [x] Resolve www vs non-www conflict — standardize on apex `https://technioz.com`.
- [x] Add `robots.txt` with `User-agent: *`, `Allow: /`, `Disallow: /md/`, `Sitemap: https://technioz.com/sitemap.xml`.
- [x] Validate `sitemap.xml` — 115 apex URLs, valid XML, matches build routes.
- [x] Ensure real 404 page returns HTTP 404 with helpful links (`src/app/not-found.tsx`).
- [x] Sitemap split: `public/sitemap.xml` generated by `scripts/generate-sitemap.js` at `prebuild` (60 non-blog pages, no blog posts). `/sitemap-blog.xml` is a dynamic route covering all blog posts (static + DB, 55 URLs as of writing). `public/sitemap-index.xml` references both. `robots.txt` lists all three sitemap URLs.
- [x] Delete bloated meta keywords tag site-wide (was ~1,617 keywords).
- [x] Fix doubled brand suffix in title template.
- [x] Make nav "Services" and "Resources" dropdown parents real links.
- [x] Server-render all blog posts; ensure post titles are anchor text (no raw URLs).
- [x] Remove hydration artifact "12369" — verified absent in generated HTML.
- [x] Add `BreadcrumbList` JSON-LD to all 115 pages.
- [x] Add `Organization` + `WebSite` JSON-LD with NAP, email, phone placeholder, and canonical `sameAs`.
- [x] Add `Service`, `FAQPage`, `BlogPosting`, and `Article` schemas on relevant pages.
- [x] Verify no orphan pages from JS-only pagination.
- [x] Add `priority` to nav logo; optimize image sizes; remove unused 3.8 MB icon font.
- [x] Set up Google Search Console for apex host; sitemap submitted as `https://technioz.com/sitemap.xml`.
- [x] Neutralize old www sitemap — it redirects to apex and `robots.txt` references apex only; monitoring for 2–3 days.
- [ ] Verify indexing of canonical inner pages after Google settles.
- [ ] Set up Bing Webmaster Tools and submit sitemap.
- [x] Confirm apex host serves 200 and www redirects to apex (next.config www→apex rule active; sitemap and canonicals use apex).
- [ ] Add `LocalBusiness` schema if/when GBP is verified.



### On-Page SEO / Metadata

- [x] Rewrite homepage title/description/H1 per §5.
- [x] Rewrite `/services` metadata.
- [x] Rewrite `/services/web-development` metadata.
- [x] Rewrite `/services/mobile-development` metadata (trust-consistent, no unverifiable BusPass stats).
- [x] Rewrite `/services/ai-solutions` metadata toward "AI chatbot development company".
- [x] Add unique metadata to `/faq`.
- [x] Rewrite `/portfolio` metadata.
- [x] Rewrite `/contact` metadata.
- [x] Trim over-long descriptions site-wide; all ≤160 chars, unique.
- [x] Ensure every page has unique `twitter.title`/`twitter.description` via metadata cascade.
- [x] Fix logo alt text (`Technioz` instead of generic "Hero Image").
- [x] Create and wire real 1200×630 OG image across all routes.
- [x] Rebuild `services/ai-solutions` page content around "AI chatbot development" (KD 10, 1,300/mo).



### Trust / Conversion

- [x] Reconcile trust claims — one honest set everywhere (`Founded 2024`, `5+ projects`, `5+ engineers`, `98% on-time`).
- [x] Fix footer social links with readable anchor text.
- [x] Add real phone/WhatsApp number in footer and `/contact`.
- [x] Add UAE/WhatsApp + India numbers on `/contact` and footer.
- [x] Add "Replies within 24h" SLA + privacy/NDA note under contact submit button.
- [x] Add 1-line privacy/NDA reassurance near form.
- [x] Add company names + roles to homepage testimonials (with permission) and link to case studies.
- [x] Label any concept/demo portfolio items (e.g., Folio AI if not shipped) as "Concept build" — Folio is labeled on `/portfolio`, `/portfolio/folio-ai-website-builder`, and related-case-study cards.
- [x] Remove or complete ROI placeholder on `/portfolio/alkhanjry-transport` and add client quote.
- [x] Add content-matched CTAs per page/funnel stage (not just generic "Start Your Project").
- [x] ~~Add email-capture footer newsletter (`Get the GCC tech buyer`s briefing — monthly`).~~ *Not needed — we do not send newsletters.*



### Content Strategy

- [x] Keep and optimize Al Khanjry case study; trim spam tags; add transport CTA and schema.
- [x] Add internal links: service pages → case studies; portfolio → services; blog → FAQ, portfolio, services; contact/about → services/portfolio/FAQ.
- [x] Deprioritize/expand-or-noindex generic dev tutorials — `noindex` applied to `building-scalable-microservices-with-node-js-and-docker`, `react-19-features-every-developer-should-know`, and `cloud-security-best-practices-for-enterprise-applications`. Accessibility guide kept indexed (buyer-focused).
- [x] Merge cloud-security post into a software security & compliance guide — published as `/blog/software-security-compliance-guide-enterprise-2026` under `Consulting & Strategy`.
- [x] Re-angle mobile app performance post to a case-study-backed story — rewritten as `/blog/app-performance-optimization-case-study-hattafoodhub` using HattaFoodHub as the proof story.
- [x] Build `/industries/transport-logistics` cluster hub with roadmap lead magnet.
- [x] Publish "Bus Ticketing System: Build vs Buy (2026)" guide.
- [x] Build app + web cost calculators + cost guide pages — live at `/resources/app-development-cost-calculator` and `/resources/web-app-development-cost-calculator` with interactive estimates, email capture, PDF breakdown, FAQ schema, and cross-linking.
- [x] Build Dubai landing pages: `/software-development-company-dubai`, `/web-app-development-company-dubai`, `/mobile-app-development-company-dubai` — enriched with case-study proof, FAQPage schema, and related guides.
- [x] Build `/services/mvp-development` startup landing — rewritten for founders, added HattaFoodHub proof, MVP Launch Checklist lead-magnet section, and FAQ schema.
- [x] Build React Native development company landing — `/services/react-native-app-development` rewritten with PRESTO copy, HattaFoodHub proof, FAQ schema, and calculator CTA.
- [ ] ~~Build `/hire-dedicated-developers-india` landing.~~ *Removed from current scope — nav, sitemap, and filesystem do not include this page.*
- [x] Build e-commerce Dubai landing — `/ecommerce-website-development-dubai` rewritten with FAQPage schema and a free e-commerce store audit lead-magnet form.
- [x] Add transport digitalization roadmap PDF lead magnet — email capture form live on `/industries/transport-logistics` with FAQPage schema.
- [x] Create remaining lead magnets: MVP checklist, vendor evaluation scorecard, free technical audit — vendor scorecard live on `/software-development-company-dubai`; free technical audit live on `/services/it-consulting` with FAQPage schema.



### Remote-first / NAP decision (resolved)

- [x] Position as remote-first software development company — no physical office published.
- [x] Remove street address from Organization schema and `/contact` / `/about`.
- [x] Add UAE/WhatsApp number: `+971 56 945 1930`.
- [x] Add India number: `+91 98036 83577`.
- [x] Keep email `info@technioz.com` as primary contact.
- [x] Add company names + roles to homepage testimonials — names and roles verified; duplicate IGL quote replaced with unique version.
- [ ] Label concept/demo portfolio items (pending: confirmation of which items are concept builds).
- [x] Skip Google Business Profile / LocalBusiness schema — remote-first, no physical office.
- [ ] Create Clutch / GoodFirms / TechReviewer profiles (pending: company description + remote-first positioning).



### Local / Off-Site SEO

- [x] Position Technioz as remote-first; show phone/WhatsApp + email only (no street address).
- [x] Add Middle East FAQ blocks to Dubai/UAE landing pages explaining remote-first model.
- [ ] Get 3 existing testimonial clients to post reviews once a review destination exists (Clutch / Google / LinkedIn).
- [ ] Create Clutch, GoodFirms, TechReviewer, LinkedIn company profiles.
- [x] Build and submit disavow file — not needed; confirmed no bad backlinks exist.
- [x] Stop any paid DR-boost packages — confirmed none are running.
- [ ] Earn 10–15 real links in 90 days (client credits, app-store listings, founder guest posts, hackathons).
- [ ] Point new links at homepage, Dubai landing, transport hub.
- [ ] Set up rank tracking for §4.2 keyword set and competitors.



### Analytics / Measurement

- [ ] Connect GSC and verify indexing of canonical inner pages.
- [ ] Set up conversion tracking: form submissions + Calendly bookings.
- [ ] Track email-capture rate from calculator/roadmap.
- [ ] Run quarterly content refresh cycle.

---



## 11. New-Build Specific Checks

Because this audit is of the old site, we must also verify these new-build-specific items are not broken:


| #   | Check                                                                         | How to verify                                              | Target                                        |
| --- | ----------------------------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------- |
| A   | All 118 pages build statically                                                | `npm run build`                                            | No errors                                     |
| B   | Every route exports typed `Metadata`                                          | TypeScript check                                           | No `any` metadata                             |
| C   | Sitemap includes all 54 blog posts, 9 pillars, 4 location pages, all services | Parse `public/sitemap.xml`                                 | 110+ clean URLs                               |
| D   | JSON-LD is valid and not duplicated                                           | View page source + JSON-LD validator                       | One Organization, one BreadcrumbList per page |
| E   | Blog heading anchors work                                                     | Click TOC links                                            | Smooth scroll to sections                     |
| F   | Customer marquee logos render uniformly black                                 | Visual check                                               | All logos same visual weight                  |
| G   | No `aggregateRating` fake schema                                              | Grep codebase                                              | Removed                                       |
| H   | `/md/` content blocked for general crawlers                                   | `robots.txt`                                               | Allowed only for LLM crawlers if needed       |
| I   | Security headers active                                                       | Network tab / headers check                                | HSTS, CSP, canonical redirect                 |
| J   | Coolify deployment healthy                                                    | `/api/health`, live site                                   | 200 OK                                        |
| K   | GSC HTML verification file + meta tag present                                 | Check homepage source + `/google-site-verification...html` | Both verify                                   |


---



## 12. Measurement Baseline

Before implementing, record:

- Ahrefs DR and referring domains
- GSC impressions/clicks (once connected)
- Indexed pages count (`site:technioz.com` or GSC)
- Core Web Vitals field data (PSI / CrUX)

Re-check monthly after action plan begins.

---



## 13. How This Document Evolves

1. Every time we complete an action item, mark it `[x]` and add the commit hash.
2. Every time we add a new page or lead magnet, append it to the keyword map.
3. Every time the audit direction conflicts with a new-build decision (e.g., `LocalBusiness` schema), record the decision and reasoning here.
4. Re-read this doc before starting each new structural task.

---

**Last updated:** July 10, 2026  
**Next blocker:** Waiting for real contact details (phone/WhatsApp, India/UAE address, testimonial permissions, concept-build confirmation).

---

## 14. Article Webhook Pipeline (added July 10, 2026)

- [x] `POST /api/articles` webhook with Bearer token validation (`ARTICLE_WEBHOOK_SECRET`).
- [x] Prisma 7 + `@prisma/adapter-pg` + `pg` driver-adapter setup, PostgreSQL schema pushed.
- [x] Articles + Tags tables in `technioz-portfolio` DB on `94.136.190.93:5433`.
- [x] Webhook auto-downloads image to `public/assets/articles/{slug}.{ext}` and stores local path.
- [x] Category inferred from tags (Custom Software, AI Solutions, Cloud & DevOps, etc.).
- [x] `src/lib/db-articles.ts` data layer with `getAllDbArticles`, `getDbArticleBySlug`, `getDbArticleSlugs`.
- [x] `/blog` listing merges static + DB posts (static priority on slug collision; sorted by date desc).
- [x] `/blog/[slug]` dynamic route renders static posts via existing `StaticBlogDetail` and DB posts via new `DbBlogDetail` (raw HTML with Tailwind typography + brand-token overrides in `.article-prose`).
- [x] `BlogPostingJsonLd` component supports both static and DB articles.
- [x] `/sitemap-blog.xml` dynamic route merges static + DB slugs.
- [x] `force-dynamic` on all DB routes so new articles appear without rebuild.
- [x] Webhook tested with `article.json` payload: 200 + saved, idempotent on replay, 401 on bad/missing token, 400 on bad event type, 200 + saved=0 on empty articles array.
- [x] DB article page renders proper typography: 48px display H2 / 28px display H3 / 18px body P, cobalt bullets, numbered list with cobalt markers, ordered/unordered list indent, code/pre styling, table styling, blockquote with cobalt border.