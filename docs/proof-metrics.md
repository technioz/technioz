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
| Booking speed | **85% faster** booking (vs. the old phone/counter process) |
| Tickets | **200K+ tickets booked** |
| Customers | **200K+ customers served** |
| Routes | **150+ routes managed** |
| Uptime | **99.9% uptime** |

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

## Integrated Golden Lines (IGL Transport)

Client (ticketing system). **No published metric** — the "35% revenue increase"
claim is retired.

## Pricing and timelines (custom builds / MVPs)

- Minimum project: **$5,000**
- Typical MVP / SaaS build: **$5,000–$10,000**
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
