import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/consent-manager";
import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";
import { LeadForm } from "./lead-form";
import { BTN_OUTLINE, BTN_PRIMARY, LANDING_PATH, whatsappUrl } from "./constants";

/*
 * Paid-ads landing page (Meta Ads, TGM October validation).
 * - Distraction-free: main nav/footer/chat are hidden via src/lib/landing-pages.ts.
 * - noindex and excluded from the sitemap.
 * - Copy is approved campaign copy; every claim must stay true (docs/proof-metrics.md).
 *   Proof: Al Khanjry Transport (since 1998, 200,000+ tickets, 150+ routes,
 *   80+ agencies on the API, 97% faster booking, 99.9% uptime), Hatta Food Hub
 *   (1,500 orders / AED 100k per month, 30K+ delivered, 5K+ customers, 70+
 *   restaurants) and the Hatta Groups HRMS (12 companies, 93 employees,
 *   AED 272,711 payroll in Sept 2026; client approved publishing it).
 * - Promise: fixed quote within 48 hours of the call; two builds at a time.
 * - Proof images: public/assets/booking.webp, hatta-food.webp (shared with /case-studies)
 *   and hrms-dashboard.webp. Setting a proof `image` to null shows a placeholder card instead.
 * - Story: promise → proof → problem → honest comparison → what you get → offer → process/fit → FAQ → quote form.
 */

const TITLE = "Technioz - We Build the System Your Business Runs On. Live in 4 to 8 Weeks.";
const DESCRIPTION =
  "We build the system your business runs on: web and mobile products with AI, payments, and admin built in. Live in 4 to 8 weeks, $5k to $10k typical, fixed quote within 48 hours of your call.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  alternates: { canonical: `https://technioz.com${LANDING_PATH}` },
  openGraph: buildOpenGraph({ title: TITLE, description: DESCRIPTION, url: `https://technioz.com${LANDING_PATH}` }),
  twitter: buildTwitterCard({ title: TITLE, description: DESCRIPTION }),
};

const WRAP = "mx-auto w-full max-w-[1440px] px-5 sm:px-6 lg:px-[148px]";
const H2 = "font-display text-[32px] leading-[1.05] tracking-[-1.4px] sm:text-[44px] sm:tracking-[-2px] mt-[14px] mb-[12px]";

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] ${dark ? "text-cobolt-200" : "text-cobolt-500"}`}>
      <span className="h-px w-[30px] shrink-0 bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}

function Sub({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={`max-w-[660px] text-[16.5px] leading-[1.6] ${dark ? "text-black-200" : "text-black-400"}`}>{children}</p>;
}

function CheckIcon({ featured }: { featured: boolean }) {
  return (
    <span className={`mt-[2px] grid h-[20px] w-[20px] shrink-0 place-items-center rounded-full ${featured ? "bg-cobolt-400" : "bg-white-300"}`} aria-hidden="true">
      {featured ? (
        <svg width="12" height="12" viewBox="0 0 20 20" fill="none"><path d="M4 10.5 8 14 16 6" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 20 20" fill="none"><path d="M5 10h10" stroke="#777673" strokeWidth="2.4" strokeLinecap="round" /></svg>
      )}
    </span>
  );
}

/** ✕ / ✓ marks for the comparison. The shape carries the meaning, so it still reads without colour. */
function MarkIcon({ good }: { good: boolean }) {
  return (
    <span className={`mt-[2px] grid h-[20px] w-[20px] shrink-0 place-items-center rounded-full ${good ? "bg-success" : "bg-error"}`} aria-hidden="true">
      {good ? (
        <svg width="12" height="12" viewBox="0 0 20 20" fill="none"><path d="M4 10.5 8 14 16 6" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      ) : (
        <svg width="10" height="10" viewBox="0 0 20 20" fill="none"><path d="M5 5l10 10M15 5 5 15" stroke="white" strokeWidth="2.8" strokeLinecap="round" /></svg>
      )}
    </span>
  );
}

type Proof = {
  figure: React.ReactNode;
  small: string;
  tag: string;
  title: string;
  desc: string;
  /** Supporting numbers shown under the big figure. Must match docs/proof-metrics.md. */
  stats?: { value: string; label: string }[];
  /** Public live site. Omit for internal systems (e.g. an HR platform behind a login). */
  site?: { href: string; label: string; domain: string };
  /** null = reserved slot; shows a placeholder card linking to the live site. */
  image: { src: string; alt: string; width: number; height: number; caption: string } | null;
};

const proofs: Proof[] = [
  {
    figure: <>97%<span className="text-black-500"> faster</span></>,
    small: "Booking time cut",
    tag: "Transport platform · Al Khanjry, Oman–UAE",
    title: "An Omani bus operator, running since 1998.",
    desc: "200,000+ tickets booked. 150+ routes across Oman and the UAE. 80+ agencies sell tickets through the API we built. Booking 97% faster than their old phone-and-counter process. 99.9% uptime. Every number comes from the live system.",
    stats: [
      { value: "200K+", label: "Tickets booked" },
      { value: "150+", label: "Routes" },
      { value: "80+", label: "Agencies on the API" },
      { value: "99.9%", label: "Uptime" },
    ],
    site: { href: "https://www.alkhanjryonline.com", label: "See the live booking site", domain: "alkhanjryonline.com" },
    image: {
      src: "/assets/booking.webp",
      alt: "Al Khanjry bus booking and management system: the Create Ticket Bookings screen with route, trip and travel date fields",
      width: 1600,
      height: 1066,
      caption: "Al Khanjry bus booking & management system",
    },
  },
  {
    figure: <>1,500</>,
    small: "Orders every month",
    tag: "Food delivery · Hatta Food Hub",
    title: "AED 100k a month running on it",
    desc: "Ordering, operations, and customer flow built end to end. A real business, running daily on software we shipped.",
    stats: [
      { value: "30K+", label: "Orders delivered" },
      { value: "5K+", label: "Customers" },
      { value: "70+", label: "Restaurants" },
    ],
    site: { href: "https://hattafoodhub.com", label: "Visit the live site", domain: "hattafoodhub.com" },
    image: {
      src: "/assets/hatta-food.webp",
      alt: "Hatta Food Hub food delivery app: home screen with food, grocery and pharmacy categories, and the restaurants list",
      width: 1600,
      height: 1066,
      caption: "Hatta Food Hub food delivery app",
    },
  },
  {
    figure: <>12</>,
    small: "Companies on one HR system",
    tag: "HR platform · Hatta Groups, UAE",
    title: "One HR system for a 12-company group.",
    desc: "Employee records, attendance and shifts, expenses, and payroll for every company in Hatta Groups, each with its own data and permissions. AED 272,711 in salaries paid through it in September 2026.",
    stats: [
      { value: "93", label: "Employees" },
      { value: "AED 272K", label: "Payroll, Sept 2026" },
      { value: "12", label: "Fleet vehicles" },
    ],
    // Opens the live system's sign-in page (hattagroups.com → /app/login).
    site: { href: "https://hattagroups.com/", label: "See the live system's login", domain: "hattagroups.com" },
    image: {
      src: "/assets/hrms-dashboard.webp",
      alt: "Hatta Groups HRMS dashboard: 12 companies, 93 employees, 12 vehicles, AED 272,711 salary paid for September 2026, and today's attendance",
      width: 1536,
      height: 1024,
      caption: "Multi-company HR management system for Hatta Groups",
    },
  },
];

function ExternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-[6px] font-mono text-[12px] uppercase tracking-[1.2px] text-cobolt-500 underline-offset-4 hover:underline ${className}`}
    >
      {children}
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M3.5 2.5h6v6M9.5 2.5 2.5 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

function ProofMedia({ proof }: { proof: Proof }) {
  if (proof.image) {
    const img = (
      <Image
        src={proof.image.src}
        alt={proof.image.alt}
        width={proof.image.width}
        height={proof.image.height}
        sizes="(min-width: 1024px) 640px, 100vw"
        className="h-auto w-full"
      />
    );
    return (
      <figure className="mt-6">
        {proof.site ? (
          <a href={proof.site.href} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-[6px] border border-neutral-300 bg-white-100 transition-colors hover:border-cobolt-300">
            {img}
            <span className="sr-only">Opens {proof.site.domain} in a new tab</span>
          </a>
        ) : (
          <div className="overflow-hidden rounded-[6px] border border-neutral-300 bg-white-100">{img}</div>
        )}
        <figcaption className="mt-2 text-[12.5px] text-black-300">{proof.image.caption}</figcaption>
      </figure>
    );
  }

  if (!proof.site) return null;

  // Reserved slot until the real screenshot is supplied — same 3:2 frame, so nothing shifts later.
  return (
    <a
      href={proof.site.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-6 block overflow-hidden rounded-[6px] border border-neutral-300 bg-white-100 transition-colors hover:border-cobolt-300"
    >
      <div className="flex items-center gap-2 border-b border-neutral-300 bg-white-300 px-3 py-2" aria-hidden="true">
        <span className="h-[8px] w-[8px] rounded-full bg-neutral-300" />
        <span className="h-[8px] w-[8px] rounded-full bg-neutral-300" />
        <span className="h-[8px] w-[8px] rounded-full bg-neutral-300" />
        <span className="ml-2 rounded-sm bg-white-100 px-2 py-[2px] font-mono text-[11px] text-black-400">{proof.site.domain}</span>
      </div>
      <div className="flex aspect-[3/2] flex-col items-center justify-center gap-3 px-6 text-center">
        <span className="font-display text-[28px] tracking-[-0.8px] text-black-500">{proof.site.domain}</span>
        <span className="font-mono text-[12px] uppercase tracking-[1.2px] text-cobolt-500 group-hover:underline">
          Open {proof.site.domain} ↗
        </span>
        <span className="sr-only">(opens in a new tab)</span>
      </div>
    </a>
  );
}

const problems = [
  { n: "P.01", title: "Months lost hiring", desc: "Finding one good developer in Dubai takes months. Building a whole product team takes longer. Your launch window does not wait." },
  { n: "P.02", title: "Investors want live proof", desc: "A pitch deck and a prototype do not close a round. A live product with paying users does. That gap is costing you time." },
];

const prototypeCons = [
  "Looks finished, breaks under real logins, payments, and load",
  "No proper security, backups, or admin controls",
  "WhatsApp, payment, and AI integrations held together by workarounds",
  "You become the support team when it goes down",
  "Investors spot a demo in the first five minutes",
];

const productionPros = [
  "Proper backend, auth, payments, and database from day one",
  "AI features wired in properly, not bolted on",
  "Deployed, tested, and monitored. We fix issues before users report them",
  "Full handover and training, you own the IP and the code",
  "A product you can demo to investors without crossing your fingers",
];

const whatYouGet = [
  { title: "A production database", desc: "Real data, properly structured. Not a spreadsheet behind a demo." },
  { title: "Login and user accounts", desc: "Secure sign up and sign in, with the right access for your customers and your team." },
  { title: "Payments, wired and tested", desc: "Set up end to end and tested with real transactions before launch." },
  { title: "Error monitoring", desc: "You know something broke before your customers tell you." },
  { title: "Automatic backups", desc: "One bad day never costs you your data." },
  { title: "A runbook", desc: "Written steps so someone other than us can run it and fix it." },
];

const included = [
  { title: "Scoping", desc: "We map features, users, and revenue flow. You get a clear scope, timeline, and fixed quote before we write code." },
  { title: "Product build", desc: "Web or mobile product, admin panel, user accounts, and payments. Built for real use, not a pitch." },
  { title: "AI integration", desc: "Chat, automation, or smart workflows where they actually save time or make money. No AI for show." },
  { title: "Deployment and launch", desc: "Hosted, secured, and live. We test with real scenarios before your first customer touches it." },
  { title: "Handover and training", desc: "You get the code, logins, docs, and a walkthrough. Your product, fully in your control." },
];

const steps = [
  { n: "1", when: "This week", title: "30 minute call", desc: "Tell us the idea, who pays, and where you are stuck. We tell you straight if we are the right fit and what it will take." },
  { n: "2", when: "Within 48 hours", title: "Your fixed quote", desc: "Scope, timeline, and price in writing. You approve the plan before any build money moves." },
  { n: "3", when: "Next 4 to 8 weeks", title: "Build, demo, launch", desc: "Weekly demos, WhatsApp updates, and fixes as we go. Launch, handover, and training at the end." },
];

const fitYes = [
  "You are funded or your business has revenue backing the build",
  "Your idea is clear enough to explain in 2 minutes",
  "You have $5k or more set aside for a proper build",
  "You are the decision maker",
  "You want to launch in the next 2 months",
];

const fitNo = [
  "You are still testing if anyone wants this",
  "Budget is under $5k, a prototype tool is a better start",
  "You need approval from 3 other partners first",
  "You want a clone built in a week for cheap",
];

const faqs = [
  { q: "How much does it really cost?", a: "Most builds land between $5,000 and $10,000. Simple MVPs sit at the lower end, products with payments, AI, and multiple user types go higher. You get a fixed quote within 48 hours of your call, so the number does not creep mid build." },
  { q: "How fast can we actually launch?", a: "4 to 8 weeks from build start for a focused MVP. We start within 30 days of signing. If your scope needs 4 months, we will tell you on the call instead of selling you a fantasy timeline." },
  { q: "Do I own the product and the code?", a: "Yes, 100%. Code, accounts, data, and IP transfer to you at handover. We document everything and train you or your team to run it." },
  { q: "I am not technical. Is that a problem?", a: "No, most of our founders are not technical. You bring the business and the customers. We translate it into a product and explain every decision in plain language." },
  { q: "What happens after launch?", a: "You get handover, training, and a support window after go live. If you want ongoing improvements, we can discuss a monthly plan. No lock in, no hostage situation with your own product." },
  { q: "Why not hire a freelancer for less?", a: "You can, and for a tiny tool it can work. For a product you plan to charge for, one freelancer is a single point of failure. With us you get a team, a process, weekly demos, and someone accountable for the launch date." },
];

export default function AiSaasDevelopmentUaeLanding() {
  return (
    <div className="bg-white-200 text-black-500 [&_h2]:font-normal [&_h3]:font-normal">
      {/* ── Minimal header ── */}
      <header className="sticky top-0 z-40 border-b border-neutral-300 bg-white-200/90 backdrop-blur-md">
        <div className={`${WRAP} flex items-center justify-between gap-4 py-[12px]`}>
          <Link href="/" className="flex items-center gap-3" aria-label="Technioz — visit the main website">
            <Image src="/logo.webp" alt="Technioz" width={130} height={36} priority unoptimized className="h-[28px] w-auto brightness-0 sm:h-[32px]" />
            <span className="hidden border-l border-neutral-300 pl-3 font-mono text-[10px] uppercase tracking-[0.14em] text-black-400 sm:block">
              Dubai · AI products
            </span>
          </Link>
          <nav aria-label="Page sections" className="flex items-center gap-1">
            <a href="#proof" className="hidden rounded-sm px-[14px] py-[10px] p5 font-bold text-black-400 hover:bg-white-300 hover:text-black-500 md:block">Proof</a>
            <a href="#process" className="hidden rounded-sm px-[14px] py-[10px] p5 font-bold text-black-400 hover:bg-white-300 hover:text-black-500 md:block">How it works</a>
            <a href="#apply" className="cta-tertiary">Get your fixed quote</a>
          </nav>
        </div>
      </header>

      <div id="top">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden border-b border-neutral-300">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "repeating-linear-gradient(90deg, rgba(29,27,22,.045) 0 1px, transparent 1px 280px)" }}
            aria-hidden="true"
          />
          <div className={`${WRAP} relative py-10 lg:py-[88px]`}>
            <div className="max-w-[860px]">
              <h1 className="mt-[22px] mb-[18px] font-display text-[44px] font-normal leading-none tracking-[-2.2px] sm:text-[56px] sm:tracking-[-2.8px] lg:text-[72px] lg:tracking-[-3.6px]">
                We build the system your business runs on. <em className="italic text-cobolt-500">Live in 4 to 8 weeks.</em>
              </h1>
              <p className="max-w-[600px] text-[18px] leading-[1.65] text-black-400">
                You have the idea and the budget. We handle scoping, build, AI integration, and launch. One team, one
                timeline, a real product your customers and investors can actually use.
              </p>
              <div className="mt-[28px] flex flex-wrap gap-3">
                <a href="#apply" className={BTN_PRIMARY}>Get your fixed quote</a>
                <a href="#proof" className={BTN_OUTLINE}>See shipped proof</a>
              </div>
              <dl className="mt-[30px] grid max-w-[720px] grid-cols-1 gap-5 border-t border-neutral-300 pt-[22px] sm:grid-cols-3 sm:gap-7">
                {[
                  ["$5k to $10k", "Typical build. $5k minimum."],
                  ["4 to 8 weeks", "Idea to live product"],
                  ["Start in 30 days", "Within 30 days of signing"],
                ].map(([v, l]) => (
                  <div key={v}>
                    <dt className="font-display text-[23px] leading-[1.1] tracking-[-0.5px] text-cobolt-500">{v}</dt>
                    <dd className="text-[13px] text-black-400">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>

          </div>
        </section>

        {/* ── 01 Proof ── */}
        <section id="proof" className="scroll-mt-20 py-12 lg:py-[80px]">
          <div className={WRAP}>
            <Eyebrow>01 / Proof, not promises</Eyebrow>
            <h2 className={H2}>We ship products people pay on.</h2>
            <Sub>No slideware. Three live client systems below, handling bookings, orders, payroll, and revenue for businesses in Oman and the UAE.</Sub>
            <div className="mt-10 border-t border-neutral-300">
              {proofs.map((p) => (
                <article key={p.tag} className="grid items-start gap-x-9 gap-y-4 border-b border-neutral-300 py-[26px] md:grid-cols-[minmax(230px,0.85fr)_1.15fr] md:grid-rows-[auto_1fr] md:py-[34px]">
                  <p className="font-display text-[56px] leading-[0.95] tracking-[-2.5px] text-cobolt-500 sm:text-[86px] sm:tracking-[-3.5px]">
                    {p.figure}
                    <small className="mt-3 block font-mono text-[11px] uppercase tracking-[0.14em] text-black-400">{p.small}</small>
                  </p>
                  {p.stats && (
                    <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-neutral-300 pt-4 md:col-start-1 md:row-start-2 md:self-start">
                      {p.stats.map((st) => (
                        <div key={st.label}>
                          <dt className="font-display text-[26px] leading-none tracking-[-0.8px] text-black-500">{st.value}</dt>
                          <dd className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-black-400">{st.label}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                  <div className="md:col-start-2 md:row-span-2 md:row-start-1">
                    <span className="mb-[14px] inline-block rounded-sm border border-neutral-300 bg-white-100 px-[9px] py-[5px] font-mono text-[10.5px] uppercase tracking-[0.1em] text-cobolt-500">{p.tag}</span>
                    <h3 className="mb-2 text-[22px] leading-[1.15] tracking-[-0.6px]">{p.title}</h3>
                    <p className="max-w-[520px] text-[15.5px] leading-[1.6] text-black-400">{p.desc}</p>
                    {p.site && <ExternalLink href={p.site.href} className="mt-4">{p.site.label}</ExternalLink>}
                    <ProofMedia proof={p} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 02 Problem ── */}
        <section className="bg-black-500 py-12 text-white-300 lg:py-[80px]">
          <div className={WRAP}>
            <Eyebrow dark>02 / The problem</Eyebrow>
            <h2 className={`${H2} !text-white-200`}>Your idea is stuck. It is not an idea problem.</h2>
            <Sub dark>Most founders we meet are not short on vision. They are short on a team that will just build it properly and finish.</Sub>
            <div className="mt-9 grid border-t border-white-100/15 md:grid-cols-2">
              {problems.map((p, i) => (
                <div key={p.n} className={`border-b border-white-100/15 py-[26px] md:pr-[26px] ${i > 0 ? "md:border-l md:pl-[26px]" : ""}`}>
                  <p className="font-mono text-[12px] tracking-[0.1em] text-cobolt-200">{p.n}</p>
                  <h3 className="mt-3 mb-2 text-[21px] leading-[1.15] tracking-[-0.5px] !text-white-200">{p.title}</h3>
                  <p className="text-[14.5px] leading-[1.6] text-black-200">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 03 Compare ── */}
        <section className="py-12 lg:py-[80px]">
          <div className={WRAP}>
            <Eyebrow>03 / Straight answer</Eyebrow>
            <h2 className={H2}>Why can&apos;t I just use Lovable, Replit, Claude, or ChatGPT?</h2>
            <Sub>Use them to test an idea. Do not bet your company on them. Here is the honest difference.</Sub>
            <div className="mt-8 grid items-stretch gap-[18px] md:grid-cols-2">
              <div className="rounded-[6px] border border-error/40 border-t-4 border-t-error bg-error/[0.05] p-[26px]">
                <h3 className="font-display text-[22px] tracking-[-0.6px]">A prototype on your own</h3>
                <p className="mt-1 mb-[18px] text-[14px] text-black-400">Great for a weekend demo. Painful with real customers.</p>
                <ul className="grid gap-[11px]">
                  {prototypeCons.map((t) => (
                    <li key={t} className="flex gap-[10px] text-[14.5px] leading-[1.5] text-black-500"><MarkIcon good={false} /><span>{t}</span></li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col rounded-[6px] border border-success/40 border-t-4 border-t-success bg-success/[0.06] p-[26px]">
                <h3 className="font-display text-[22px] tracking-[-0.6px]">A production build with Technioz</h3>
                <p className="mt-1 mb-[18px] text-[14px] text-black-400">Built to charge money and keep running.</p>
                <ul className="grid gap-[11px]">
                  {productionPros.map((t) => (
                    <li key={t} className="flex gap-[10px] text-[14.5px] leading-[1.5] text-black-500"><MarkIcon good /><span>{t}</span></li>
                  ))}
                </ul>
                <div className="mt-auto pt-[22px]">
                  <a href="#apply" className={`${BTN_PRIMARY} w-full`}>Get your fixed quote</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 What you get ── */}
        <section className="py-12 lg:py-[80px]">
          <div className={WRAP}>
            <Eyebrow>04 / What you actually get</Eyebrow>
            <h2 className={H2}>What you actually get.</h2>
            <Sub>Not a prototype that looks finished. A product built to take money and keep running.</Sub>
            <ul className="mt-8 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
              {whatYouGet.map((item) => (
                <li key={item.title} className="flex gap-[12px] rounded-[6px] border border-neutral-300 bg-white-100 p-[22px]">
                  <CheckIcon featured />
                  <div>
                    <h3 className="mb-1 text-[19px] leading-[1.2] tracking-[-0.4px]">{item.title}</h3>
                    <p className="text-[14.5px] leading-[1.6] text-black-400">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a href="#apply" className={`${BTN_PRIMARY} mt-[26px]`}>Get your fixed quote</a>
          </div>
        </section>

        {/* ── 05 Offer ── */}
        <section className="pb-12 lg:pb-[80px]">
          <div className={WRAP}>
            <Eyebrow>05 / The offer</Eyebrow>
            <h2 className={H2}>Everything included. No hiring. No chasing.</h2>
            <Sub>AI Service and Solution by Technioz. One fixed scope, one team in Dubai, weekly progress you can see.</Sub>
            <div className="mt-8 grid items-start gap-9 lg:grid-cols-[1.15fr_0.85fr]">
              <ol className="border-t border-neutral-300">
                {included.map((item, i) => (
                  <li key={item.title} className="flex gap-5 border-b border-neutral-300 py-5">
                    <span className="w-[34px] shrink-0 font-display text-[26px] italic leading-none text-cobolt-500">{i + 1}</span>
                    <div>
                      <h3 className="mt-[1px] mb-1 text-[19px] leading-[1.2] tracking-[-0.4px]">{item.title}</h3>
                      <p className="text-[14.5px] leading-[1.6] text-black-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <aside className="rounded-[6px] border border-white-100/10 bg-black-500 p-[26px] text-white-300 lg:sticky lg:top-[84px]">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] !text-black-200">Typical investment</h3>
                <p className="mt-3 mb-[6px] font-display text-[46px] leading-none tracking-[-1.5px] text-white-200">$5k to $10k</p>
                <p className="text-[14px] text-black-200">Minimum project $5,000. Fixed quote, so the number does not creep later.</p>
                <ul className="my-[18px] grid gap-[9px] text-[14.5px] text-white-300">
                  {["Live in 4 to 8 weeks", "Start within 30 days of signing", "Dubai based team, direct WhatsApp access", "You own 100% of the IP"].map((t) => (
                    <li key={t} className="flex gap-[9px]">
                      <span className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-[2px] bg-cobolt-200" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
                <a href="#apply" className={`${BTN_PRIMARY} w-full`}>Get your fixed quote</a>
                <p className="mt-3 text-center text-[12.5px] text-black-200">Fixed quote within 48 hours of your call.</p>
              </aside>
            </div>
          </div>
        </section>

        {/* ── 05 Process + fit ── */}
        <section id="process" className="scroll-mt-20 pb-12 lg:pb-[80px]">
          <div className={WRAP}>
            <Eyebrow>06 / How it works</Eyebrow>
            <h2 className={H2}>Three steps. You always know what is next.</h2>
            <ol className="mt-9 grid gap-2 md:grid-cols-3 md:gap-7">
              {steps.map((s) => (
                <li key={s.n} className="border-t-2 border-black-500 pt-[18px] pb-4 md:pb-0">
                  <span className="block font-display text-[38px] leading-none">{s.n}</span>
                  <p className="mt-[10px] font-mono text-[11px] uppercase tracking-[0.1em] text-cobolt-500">{s.when}</p>
                  <h3 className="mt-[6px] mb-[6px] text-[20px] leading-[1.2] tracking-[-0.5px]">{s.title}</h3>
                  <p className="text-[14.5px] leading-[1.6] text-black-400">{s.desc}</p>
                </li>
              ))}
            </ol>

            <div className="mt-11 grid gap-[18px] md:grid-cols-2">
              <div className="rounded-[6px] border border-cobolt-200 bg-cobolt-100/50 p-6">
                <h3 className="mb-3 font-display text-[20px] tracking-[-0.5px]">This is for you if</h3>
                <ul className="list-disc space-y-[6px] pl-[18px] text-[14.5px] text-black-400 marker:text-cobolt-500">
                  {fitYes.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
              <div className="rounded-[6px] border border-neutral-300 bg-white-100 p-6">
                <h3 className="mb-3 font-display text-[20px] tracking-[-0.5px]">Not yet, if</h3>
                <ul className="list-disc space-y-[6px] pl-[18px] text-[14.5px] text-black-400 marker:text-black-300">
                  {fitNo.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <p className="mt-3 text-[14px] text-black-400">No hard feelings. Come back when the funding and idea are ready, we will be here.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 06 FAQ ── */}
        <section className="pb-12 lg:pb-[80px]">
          <div className={WRAP}>
            <Eyebrow>07 / Questions founders ask</Eyebrow>
            <h2 className={H2}>Before you book, read this.</h2>
            <div className="mt-[26px] border-b border-neutral-300">
              {faqs.map((f) => (
                <details key={f.q} className="group border-t border-neutral-300">
                  <summary className="flex min-h-[52px] cursor-pointer list-none items-center justify-between gap-4 px-1 py-[19px] font-display text-[19px] tracking-[-0.4px] text-black-500 [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="text-[22px] leading-none text-black-500 transition-transform duration-200 group-open:rotate-45 group-open:text-cobolt-500 motion-reduce:transition-none" aria-hidden="true">+</span>
                  </summary>
                  <p className="max-w-[760px] px-1 pb-5 text-[15px] leading-[1.6] text-black-400">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── 07 CTA + form ── */}
        <section id="apply" className="scroll-mt-20 pb-12 lg:pb-[80px]">
          <div className={WRAP}>
            <div className="rounded-[6px] bg-black-500 p-[22px] text-white-200 sm:p-[34px]">
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <Eyebrow dark>08 / Your fixed quote</Eyebrow>
                  <h2 className={`${H2} !text-white-200`}>Tell us what you need. Get a fixed quote within 48 hours of your call.</h2>
                  <p className="text-[16px] leading-[1.6] text-black-100">
                    Pick a 30 minute call right after. We confirm on WhatsApp within 10 minutes in working hours.
                  </p>
                  <ul className="mt-4 list-disc space-y-1 pl-[18px] text-[15px] text-black-100 marker:text-cobolt-200">
                    <li>No sales script, we scope your actual build</li>
                    <li>A fixed quote within 48 hours of your call</li>
                    <li>If we are not the fit, we will say so on the call</li>
                  </ul>
                  <p className="mt-5 border-l-2 border-cobolt-200 pl-3 text-[15px] text-white-200">
                    We take on two builds at a time, so every project gets the founder&apos;s direct attention.
                  </p>
                  <p className="mt-4 text-[13.5px] text-black-200">
                    Prefer chat first? Use the WhatsApp button below. Same team, same response time.
                  </p>
                </div>
                <LeadForm />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── Minimal footer (extra mobile bottom padding clears the floating WhatsApp button) ── */}
      <footer className="pb-28 pt-[30px] text-[13.5px] text-black-400 sm:pb-12">
        <div className={`${WRAP}`}>
          <div className="flex flex-wrap justify-between gap-3 border-t border-neutral-300 pt-[22px]">
            <span>
              <b className="text-black-500">Technioz</b> · AI Service and Solution · Dubai, UAE ·{" "}
              <Link href="/" className="underline hover:text-cobolt-500">technioz.com</Link>
            </span>
          </div>
          <nav aria-label="Legal" className="mt-3 flex flex-wrap gap-4">
            <Link href="/" className="hover:text-cobolt-500">Main website</Link>
            <Link href="/privacy" className="hover:text-cobolt-500">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cobolt-500">Terms</Link>
            <CookieSettingsButton className="cursor-pointer hover:text-cobolt-500" />
          </nav>
        </div>
      </footer>

      {/* ── Floating WhatsApp ── */}
      <a
        href={whatsappUrl("Hi Technioz, I want to discuss building my SaaS product.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-30 flex items-center gap-2 rounded-full bg-[#00a884] px-[18px] py-[13px] text-[14px] font-bold text-white-100 shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition-colors hover:bg-[#009176]"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.13c-.24.68-1.42 1.3-1.95 1.35-.5.05-.97.23-3.28-.68-2.77-1.09-4.53-3.93-4.67-4.11-.13-.18-1.11-1.48-1.11-2.82 0-1.34.7-2 .95-2.27.25-.27.54-.34.72-.34h.52c.17 0 .39-.06.61.47.24.56.79 1.92.86 2.06.07.14.11.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.56.16.27.71 1.17 1.52 1.89 1.05.93 1.93 1.22 2.2 1.36.27.14.43.11.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.23.61-.14.25.09 1.59.75 1.86.89.27.14.45.2.52.32.07.11.07.66-.17 1.33Z" />
        </svg>
        Chat on WhatsApp
      </a>
    </div>
  );
}
