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

const TITLE = "Technioz - We Build Your AI SaaS Product in Dubai. Live in 4 to 8 Weeks.";
const DESCRIPTION =
  "We build AI SaaS products in Dubai. Web and mobile apps with AI, payments, and admin built in. Live in 4 to 8 weeks. AED 18k to AED 37k. Fixed quote 48 hours after your call.";

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
    desc: "200,000+ tickets booked. 150+ routes in Oman and the UAE. 80+ agencies sell tickets through the API we built. Booking is 97% faster than the old phone-and-counter way. 99.9% uptime. Every number comes from the live system.",
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
    desc: "Ordering, operations, and customers, all built. A real business, running every day on software we shipped.",
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
    desc: "Staff records, attendance, shifts, expenses, and payroll for every company in the group. Each company has its own data and its own logins. AED 272,711 in salaries paid through it in September 2026.",
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
  { n: "P.01", title: "Months lost hiring", desc: "One good developer in Dubai takes months to hire. A whole team takes longer. Your launch window will not wait." },
  { n: "P.02", title: "Investors want live proof", desc: "A deck and a demo do not close a round. A live product with paying users does. That gap costs you months." },
];

const prototypeCons = [
  "Looks done. Breaks with real logins, payments, and traffic",
  "No real security, backups, or admin panel",
  "WhatsApp, payments, and AI held together with workarounds",
  "When it breaks, you are the support team",
  "Investors spot a demo in five minutes",
];

const productionPros = [
  "Real backend, logins, payments, and database from day one",
  "AI built in properly, not stuck on later",
  "Live, tested, and watched. We fix problems before your users find them",
  "We hand over everything. You own the code and the IP",
  "A product you can demo to investors with no worries",
];

const whatYouGet = [
  { title: "A production database", desc: "Real data, stored properly. Not a spreadsheet behind a demo." },
  { title: "Login and user accounts", desc: "Secure sign up and sign in. Different access for customers and for your team." },
  { title: "Payments, wired and tested", desc: "Set up fully. Tested with real payments before launch." },
  { title: "Error monitoring", desc: "You know something broke before your customers tell you." },
  { title: "Automatic backups", desc: "One bad day never costs you your data." },
  { title: "A runbook", desc: "Written steps, so someone else can run it and fix it." },
];

const included = [
  { title: "Scoping", desc: "We list the features, the users, and how money flows. You get the scope, the timeline, and a fixed quote before we write code." },
  { title: "Product build", desc: "Web or mobile app, admin panel, user accounts, and payments. Built for real use, not for a pitch." },
  { title: "AI integration", desc: "Chat, automation, or smart workflows, where they save time or make money. No AI for show." },
  { title: "Deployment and launch", desc: "Hosted, secured, and live. We test real cases before your first customer sees it." },
  { title: "Handover and training", desc: "You get the code, logins, docs, and a walkthrough. The product is yours." },
];

const steps = [
  { n: "1", when: "This week", title: "30 minute call", desc: "Tell us the idea, who pays, and where you are stuck. We tell you straight if we fit, and what it takes." },
  { n: "2", when: "Within 48 hours", title: "Your fixed quote", desc: "Scope, timeline, and price, in writing. You say yes before any build money moves." },
  { n: "3", when: "Next 4 to 8 weeks", title: "Build, demo, launch", desc: "Weekly demos and WhatsApp updates. Fixes as we go. Launch, handover, and training at the end." },
];

const fitYes = [
  "You are funded, or your business earns enough to pay for the build",
  "You can explain the idea in 2 minutes",
  "You have AED 18,000 or more set aside",
  "You make the call",
  "You want to launch in 2 months",
];

const fitNo = [
  "You are still testing if anyone wants this",
  "Your budget is under AED 18,000. A prototype tool is a better start",
  "You need 3 partners to agree first",
  "You want a cheap clone in a week",
];

const faqs = [
  { q: "How much does it really cost?", a: "Most builds land between AED 18,000 and AED 37,000. Simple apps sit at the low end. Payments, AI, and many user types push it up. You get a fixed quote 48 hours after your call, so the price does not move mid build." },
  { q: "How fast can we actually launch?", a: "4 to 8 weeks from the day we start. We start within 30 days of signing. If your build needs 4 months, we say so on the call." },
  { q: "Do I own the product and the code?", a: "Yes, all of it. The code, the accounts, the data, and the IP go to you at handover. We write the docs and train you or your team." },
  { q: "I am not technical. Is that a problem?", a: "No. Most of our founders are not technical. You bring the business and the customers. We turn it into a product and explain each decision in plain words." },
  { q: "What happens after launch?", a: "You get handover, training, and support after launch. If you want more work later, we can talk about a monthly plan. No lock in. Your product stays yours." },
  { q: "Why not hire a freelancer for less?", a: "You can. For a tiny tool, it works. For a product you charge money for, one freelancer is one point of failure. With us you get a team, a plan, weekly demos, and someone who owns the launch date." },
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
            <a href="#apply" className="cta-tertiary">Book your call</a>
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
                We build your AI SaaS product in Dubai. <em className="italic text-cobolt-500">Live in 4 to 8 weeks.</em>
              </h1>
              <p className="max-w-[600px] text-[18px] leading-[1.65] text-black-400">
                You bring the idea. We build it. We plan it, build it, add the AI, and launch it. One team, one
                timeline, a product your customers can really use.
              </p>
              <div className="mt-[28px] flex flex-wrap gap-3">
                <a href="#apply" className={BTN_PRIMARY}>Book your free strategy call</a>
                <a href="#proof" className={BTN_OUTLINE}>See shipped proof</a>
              </div>
              <dl className="mt-[30px] grid max-w-[720px] grid-cols-1 gap-5 border-t border-neutral-300 pt-[22px] sm:grid-cols-3 sm:gap-7">
                {[
                  ["AED 18k to AED 37k", "Typical build. Starts at AED 18,000."],
                  ["4 to 8 weeks", "From idea to live"],
                  ["Start in 30 days", "After you sign"],
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
            <Sub>Real systems, live right now. They take bookings, orders, payroll, and money.</Sub>
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
            <h2 className={`${H2} !text-white-200`}>Your idea is stuck. The idea is not the problem.</h2>
            <Sub dark>Most founders we meet are not short on vision. They are short on a team that builds it properly and finishes.</Sub>
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
            <Sub>Use them to test an idea. Do not run your business on them. Here is the real difference.</Sub>
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
                  <a href="#apply" className={`${BTN_PRIMARY} w-full`}>Book your free strategy call</a>
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
            <a href="#apply" className={`${BTN_PRIMARY} mt-[26px]`}>Book your free strategy call</a>
          </div>
        </section>

        {/* ── 05 Offer ── */}
        <section className="pb-12 lg:pb-[80px]">
          <div className={WRAP}>
            <Eyebrow>05 / The offer</Eyebrow>
            <h2 className={H2}>Everything included. No hiring. No chasing.</h2>
            <Sub>One fixed scope. One team in Dubai. Progress you can see every week.</Sub>
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
                <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] !text-black-200">Typical cost</h3>
                <p className="mt-3 mb-[6px] font-display text-[46px] leading-none tracking-[-1.5px] text-white-200">AED 18k to AED 37k</p>
                <p className="text-[14px] text-black-200">Minimum AED 18,000. The quote is fixed, so the price does not creep up later.</p>
                <ul className="my-[18px] grid gap-[9px] text-[14.5px] text-white-300">
                  {["Live in 4 to 8 weeks", "Start within 30 days of signing", "Dubai team, direct WhatsApp access", "You own 100% of the IP"].map((t) => (
                    <li key={t} className="flex gap-[9px]">
                      <span className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-[2px] bg-cobolt-200" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
                <a href="#apply" className={`${BTN_PRIMARY} w-full`}>Book your free strategy call</a>
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
                <p className="mt-3 text-[14px] text-black-400">No hard feelings. Come back when the money and the idea are ready.</p>
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
                  <Eyebrow dark>08 / Book your call</Eyebrow>
                  <h2 className={`${H2} !text-white-200`}>Tell us what you need. Pick your call time right after this.</h2>
                  <p className="text-[16px] leading-[1.6] text-black-100">
                    It is a 30 minute call. We confirm on WhatsApp within 10 minutes in working hours.
                  </p>
                  <ul className="mt-4 list-disc space-y-1 pl-[18px] text-[15px] text-black-100 marker:text-cobolt-200">
                    <li>No sales script. We plan your real build</li>
                    <li>A fixed quote 48 hours after your call</li>
                    <li>If we are not the right fit, we say so on the call</li>
                  </ul>
                  <p className="mt-5 border-l-2 border-cobolt-200 pl-3 text-[15px] text-white-200">
                    We take two builds at a time, so each project gets the founder&apos;s own attention.
                  </p>
                  <p className="mt-4 text-[13.5px] text-black-200">
                    Prefer to chat? Use the WhatsApp button below. Same team, same speed.
                  </p>
                </div>
                <div>
                  <p className="mb-[10px] flex items-start gap-[8px] text-[13.5px] leading-[1.5] text-black-100">
                    <span className="mt-[1px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-success" aria-hidden="true">
                      <svg width="11" height="11" viewBox="0 0 20 20" fill="none"><path d="M4 10.5 8 14 16 6" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    Join 3 UAE businesses already running on software we built.
                  </p>
                  <LeadForm />
                </div>
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
