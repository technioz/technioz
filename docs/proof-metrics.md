# Proof metrics — single source of truth

Every client number, price and timeline on technioz.com, in `public/*.txt` /
`public/md/*.md`, in the Nova chatbot prompt and in blog posts (static and DB)
must come from this file. If a number isn't here, don't publish it.
Confirmed by Gaurav Bhatia, October 13, 2026.

## Al Khanjry Transport (Al Khanjry Groups — one client)

Omani bus operator, running since 1998. Daily Muscat ↔ Dubai coaches and other
Oman–UAE routes. Public booking site: https://www.alkhanjryonline.com
(alkhanjrygroups.com is their staff admin login — never link it).

| Metric | Value |
|---|---|
| Booking speed | **97% faster** booking (vs. the old phone/counter process) |
| Tickets | **200K+ tickets booked** |
| Customers | **200K+ customers served** |
| Routes | **150+ routes managed** |
| Uptime | **99.9% uptime** |
| Agency API | **80+ agencies** sell tickets through the API we built (confirmed by Gaurav, October 14, 2026) |

Note: "80+ agencies on the API" is a confirmed, current metric. It is NOT the
retired "80+ routes" — routes are 150+.

Retired — do not use: $1M+ ticket sales, 150K+/150,000 bookings, 80+ routes,
"15 min → 30 sec", "15–20 min → 2 min", 40% faster, 500K+ transactions/month,
60% lower ticketing costs, six integrations, 70% fewer complaints, 5x peak
traffic, 7-month rollout, and the "Al Khanjry Groups" second-client framing.

Image: `public/assets/booking.webp` (its baked-in
stats strip also shows "100% Data Security" — not used in copy).

## Hatta Food Hub

Food delivery app and online marketplace for Hatta, Dubai, UAE (iOS + Android,
web at https://hattafoodhub.com, English/Arabic, AED). Categories include food,
home food, bakery, cafés, grocery, beauty, roastery, pharmacy, shops and
"Made in Hatta".

| Metric | Value |
|---|---|
| Monthly orders | **1,500 orders every month** |
| Monthly revenue | **AED 100k a month** running on the platform |
| Lifetime orders | **30K+ orders delivered** |
| Customers | **5K+ customers** |
| Restaurants | **70+ restaurants** |

Retired — do not use: 10,000+/10K+ concurrent orders, 99.9% uptime, 40% more
repeat customers, 800 ms / 8–12 s order confirmation, "multiple cities", the
monolith-crash / microservices / AWS ECS story, the "4 months" timeline, and the
"HattaFoodHub CTO" quote.

Image: `public/assets/hatta-food.webp`.

## Hatta Groups — HRMS (multi-company HR management system)

Client: Hatta Groups, UAE. Live system (login): https://hattagroups.com/ →
/app/login. Built and deployed by Technioz. Image:
`public/assets/hrms-dashboard.webp`.

| Metric | Value |
|---|---|
| Companies | **12 companies** on one HR system, each with its own data and permissions |
| Employees | **93 employees** |
| Fleet | **12 vehicles** |
| Payroll | **AED 272,711** salary paid through it, September 2026 |

Features: employee records and documents, attendance (calendar, shifts,
rotations, overtime, regularization, device punches), leave, expenses and
reimbursements, payroll and payslips, company-scoped roles (RBAC).
Client approved publishing the payroll figure (October 14, 2026). These are dashboard
numbers as of September 2026 — refresh them if quoted much later.

## Integrated Golden Lines (IGL Transport)

Client (ticketing system). **No published metric** — the "35% revenue increase"
claim is retired.

## Pricing and timelines (custom builds / MVPs)

- Minimum project: **$5,000** (**AED 18,000** on the UAE ads landing page)
- Typical MVP / SaaS build: **$5,000–$10,000** (**AED 18k–AED 37k** on the UAE
  ads landing page — the audience thinks in dirhams)
- Timeline: **live in 4 to 8 weeks** from build start; start **within 30 days
  of signing**
- Larger tiers (mid-size apps, enterprise, AI, cloud, dedicated teams,
  augmentation) are unchanged.

Retired: "MVPs start at $15,000", "$15,000–$30,000 MVP", "8–12 week MVP".

Cost calculators (`src/app/resources/*-cost-calculator/cost-calculator.tsx`)
enforce this: every estimate is at least $5,000, and MVP-scope estimates are
scaled (`MVP_SCALE`) so a typical MVP lands in $5k–$10k. Standard/complex
estimates are unscaled.

## Company stats (unchanged)

5+ projects shipped · 98% on-time delivery · founded 2024 · founder-led.
Retired: "200+ projects", "50+ engineers", "10+ years".

## Sales promises (landing page, emails)

- **Fixed quote within 48 hours of the call** (confirmed by Gaurav, October 14, 2026).
- **Two builds at a time** — worded as capacity ("so every project gets the
  founder's direct attention"), never as headcount.
- Landing page CTAs say **"Book your free strategy call"** (October 15, 2026):
  the form books a call, it does not hand out a quote, so the button must not
  promise the quote. The 48-hour quote is still promised after the call.
- Landing page trust line: "Join 3 UAE businesses already running on software we
  built." The three systems shown are Al Khanjry (Oman), Hatta Food Hub (UAE) and
  the Hatta Groups HRMS (UAE) — if the count is ever challenged, the honest
  framing is "3 businesses", or swap in another UAE client (e.g. IGL).

Al Khanjry booking speed is **97%** (corrected from 85% on October 14, 2026). The DB
article `build-vs-buy` still says "85% faster booking processing" because it
quotes Product School's example, not Technioz — leave it.

## Other confirmed / retired items

- **Bus subscription case study** (blog post `bus-subscription-ticketing-platform-uae`,
  unnamed UAE transport operator): confirmed real and true as published.
- **BusPass UAE**: not a confirmed project — don't mention it.
- **Industry solution pages** (`src/lib/solutions-data.ts`): show capability
  statements only; no outcome numbers unless tied to a client in this file.

## Known exception (kept by decision)

- Blog post `app-performance-optimization-case-study-hattafoodhub` still shows
  the retired Hatta Food Hub figures (10,000+ concurrent orders, 8–12 s → 800 ms,
  99.9% uptime, +40% repeat customers). Kept as-is by Gaurav's decision on
  October 13, 2026; it contradicts the Hatta Food Hub numbers above.
