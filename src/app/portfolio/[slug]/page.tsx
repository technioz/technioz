import { notFound } from "next/navigation";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { ArticleJsonLd } from "@/components/article-jsonld";
import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

import type { Metadata } from "next";

interface CaseStudySection {
  heading?: string;
  type: "heading" | "paragraph" | "bullet-list" | "stat-grid" | "tech-grid" | "quote";
  content?: string;
  items?: string[];
  stats?: { metric: string; label: string }[];
  techs?: string[];
  quote?: { text: string; author: string; role: string };
}

interface CaseStudy {
  slug: string;
  client: string;
  title: string;
  subtitle: string;
  industry: string;
  /** Omit when the real duration isn't confirmed. */
  timeline?: string;
  featured: boolean;
  conceptBuild?: boolean;
  primaryStats: { metric: string; label: string }[];
  sections: CaseStudySection[];
  results: { metric: string; label: string }[];
  techs: string[];
}

const caseStudies: CaseStudy[] = [
  {
    slug: "food-delivery-app",
    client: "Hatta Food Hub",
    title: "A Food Delivery App Running 1,500 Orders a Month in Hatta",
    subtitle: "How Hatta Food Hub runs ordering, operations, and customer flow on software we shipped: 30K+ orders delivered to 5K+ customers from 70+ restaurants, with about AED 100k in revenue every month.",
    industry: "Food Delivery",
    featured: true,
    primaryStats: [
      { metric: "1,500", label: "orders every month" },
      { metric: "AED 100k", label: "monthly revenue on the platform" },
      { metric: "30K+", label: "orders delivered" },
    ],
    sections: [
      {
        type: "heading", heading: "About the Client",
      },
      {
        type: "paragraph",
        content: "Hatta Food Hub is a food delivery app and online marketplace for Hatta, Dubai, in the UAE. Customers order from local restaurants, home cooks, bakeries, cafés, grocers, pharmacies, and shops, including a \u201cMade in Hatta\u201d section for local products.",
      },
      {
        type: "heading", heading: "What We Built",
      },
      {
        type: "paragraph",
        content: "Ordering, operations, and customer flow, built end to end:",
      },
      {
        type: "bullet-list",
        items: [
          "Customer app for iOS and Android, available on the App Store and Google Play",
          "Web storefront at hattafoodhub.com in English and Arabic, with prices in AED",
          "Category browsing across food, home food, bakery, cafés, grocery, beauty, roastery, pharmacy, and shops",
          "Restaurant listings with ratings, delivery times, and search",
          "Vendor registration so local businesses can join the marketplace",
        ],
      },
      {
        type: "heading", heading: "The Results",
      },
      {
        type: "paragraph",
        content: "Hatta Food Hub is a real business running daily on the platform: about 1,500 orders and AED 100k in revenue every month. Since launch it has delivered 30K+ orders to 5K+ customers from 70+ restaurants.",
      },
    ],
    results: [
      { metric: "1,500", label: "orders every month" },
      { metric: "AED 100k", label: "monthly revenue on the platform" },
      { metric: "30K+", label: "orders delivered" },
      { metric: "5K+", label: "customers" },
      { metric: "70+", label: "restaurants" },
    ],
    techs: [],
  },
  {
    slug: "alkhanjry-transport",
    client: "Al Khanjry Transport",
    title: "From Manual Counters to 200K+ Tickets Booked",
    subtitle: "How an Omani bus operator running Oman–UAE routes since 1998 moved from counter queues and phone bookings to a booking and management system, with booking now 97% faster across 150+ routes.",
    industry: "Transportation & Logistics",
    featured: true,
    primaryStats: [
      { metric: "97%", label: "faster booking" },
      { metric: "200K+", label: "tickets booked" },
      { metric: "150+", label: "routes managed" },
    ],
    sections: [
      {
        type: "heading", heading: "About the Client",
      },
      {
        type: "paragraph",
        content: "Al Khanjry Transport is an Omani bus operator running since 1998. It runs daily coaches between Muscat and Dubai, plus other routes across Oman and the UAE, with branch counters serving both local passengers and international travelers.",
      },
      {
        type: "heading", heading: "The Problem",
      },
      {
        type: "paragraph",
        content: "Every booking happened offline: customers called a phone number, walked into a branch counter, or messaged on WhatsApp. A staff member manually checked availability, assigned a seat, and collected cash or requested a bank transfer. Confirmation was verbal or sent as a WhatsApp message. As passenger numbers grew, the process started to fail:",
      },
      {
        type: "bullet-list",
        items: [
          "Peak seasons such as Eid, winter tourism, and national holidays meant long queues at the counters",
          "Phone lines were jammed for hours, and passengers gave up and went to competitors with online booking",
          "Staff had no real-time view of seat inventory across routes, so double-bookings happened",
          "Arabic-speaking passengers had no way to book in their own language",
          "All payments were offline, which made reconciliation hard for the finance team",
        ],
      },
      {
        type: "heading", heading: "What We Built",
      },
      {
        type: "paragraph",
        content: "Technioz built a bilingual booking and management system that handles the passenger journey from search to payment to boarding, and gives staff one place to run operations.",
      },
      {
        type: "heading", heading: "1. Online Booking",
      },
      {
        type: "bullet-list",
        items: [
          "Public booking site at alkhanjryonline.com that works on mobile, tablet, and desktop",
          "Arabic and English throughout",
          "One-way and round-trip booking with travel date and passenger selection",
          "Manage Booking for passengers who need to check or change a trip",
        ],
      },
      {
        type: "heading", heading: "2. Booking & Management System",
      },
      {
        type: "bullet-list",
        items: [
          "Counter ticket booking by route, trip, and travel date, with passenger search by passport or phone number",
          "Two-way and printed tickets",
          "Update bookings, travel date changes, check-in lists, and discounted bookings",
          "Sales, expense, deposit, and refund reports for the finance team",
          "Consignment handling and bus schedule availability across all routes",
        ],
      },
      {
        type: "heading", heading: "The Rollout",
      },
      {
        type: "paragraph",
        content: "We launched in phases. Phase 1 went live with the Muscat–Dubai route. We monitored it, fixed edge cases, then expanded to all routes. In the final phase, branch staff moved walk-in bookings into the same system, so every seat is sold from one live inventory.",
      },
      {
        type: "heading", heading: "The Results",
      },
      {
        type: "paragraph",
        content: "Booking is now 97% faster than the old phone-and-counter process. 200K+ tickets have been booked for 200K+ customers across 150+ routes, with 99.9% platform uptime. The operations team runs every route from a live dashboard instead of spreadsheets and phone calls.",
      },
    ],
    results: [
      { metric: "97%", label: "faster booking" },
      { metric: "200K+", label: "tickets booked" },
      { metric: "200K+", label: "customers served" },
      { metric: "150+", label: "routes managed" },
      { metric: "99.9%", label: "platform uptime" },
    ],
    techs: ["React", "Next.js", "Node.js", "Express.js", "PostgreSQL", "Redis", "AWS EC2", "AWS RDS", "AWS Lambda", "Docker", "GitHub Actions"],
  },
  {
    slug: "folio-ai-website-builder",
    client: "Folio",
    title: "One-Click AI Website Builder",
    subtitle: "Turn a social-media link, a document, or a simple prompt into a beautiful, deploy-ready website — in seconds. (Concept build)",
    industry: "AI SaaS",
    timeline: "5 months",
    featured: false,
    conceptBuild: true,
    primaryStats: [
      { metric: "60 sec", label: "average site build time" },
      { metric: "85%", label: "less manual work vs. traditional builders" },
      { metric: "3x", label: "input formats supported" },
    ],
    sections: [
      { type: "heading", heading: "About the Product" },
      { type: "paragraph", content: "Folio is an AI-powered website builder that eliminates the traditional gap between idea and live site. Unlike templated no-code tools, Folio reads what you already have — a LinkedIn or Instagram profile, a PDF brochure, or a short text description — and generates a fully structured, styled, and deployed website with one click." },
      { type: "heading", heading: "The Problem" },
      { type: "paragraph", content: "Small businesses, freelancers, and startups waste weeks launching a simple website. They either pay agencies thousands of dollars, wrestle with rigid templates that all look the same, or hire developers for what should be a 10-minute task." },
      { type: "bullet-list", items: ["Generic templates force users to design from a blank canvas", "Content has to be written and formatted manually, block by block", "No easy way to convert existing brand assets into a live page", "Publishing, hosting, and domain setup require multiple disconnected tools"] },
      { type: "heading", heading: "What We Built" },
      { type: "bullet-list", items: ["Social-media import — paste a profile URL and the AI extracts brand colors, imagery, bio, services, and tone", "Document-to-website — upload a PDF, Word doc, or Notion page; the model structures sections, headings, and CTAs automatically", "Prompt-to-site — describe the business in plain English and Folio generates layout, copy, and visual hierarchy in under a minute", "One-click deploy — production hosting, SSL, CDN, and custom domain configuration handled automatically", "Inline editor — refine any section with natural-language commands or a visual WYSIWYG"] },
      { type: "heading", heading: "The Results" },
      { type: "paragraph", content: "Folio reduces average time-to-live-website from weeks to minutes. Users can launch sites from three different input formats — links, documents, or prompts — and every output is mobile-responsive, SEO-ready, and production-hosted from the start." },
    ],
    results: [
      { metric: "60 sec", label: "average site build time" },
      { metric: "85%", label: "less manual work vs. traditional builders" },
      { metric: "3x", label: "input formats: link, doc, prompt" },
      { metric: "100%", label: "responsive + SEO-ready output" },
    ],
    techs: ["Next.js", "TypeScript", "OpenAI", "LangChain", "Tailwind CSS", "PostgreSQL", "Vercel", "Cloudflare R2"],
  },
  {
    slug: "sky-growers",
    client: "Sky Growers",
    title: "Farm-to-Table Produce Platform",
    subtitle: "A seasonal produce and bulk-wholesale ordering platform for a family-owned regenerative farm in Christchurch, New Zealand.",
    industry: "Agriculture & Food",
    timeline: "4 months",
    featured: false,
    primaryStats: [
      { metric: "100%", label: "farm-direct supply" },
      { metric: "24/7", label: "online ordering" },
      { metric: "3x", label: "faster reordering" },
    ],
    sections: [
      { type: "heading", heading: "About the Client" },
      { type: "paragraph", content: "Sky Growers is a family-owned regenerative farm based in Christchurch, Canterbury, New Zealand. Founded in 2023, they grow premium farm-fresh vegetables year-round — including coriander, spinach, beetroot, radish, cucumber, pumpkin, and spring onion — using sustainable agriculture practices that protect long-term soil health." },
      { type: "heading", heading: "The Problem" },
      { type: "paragraph", content: "Despite high-quality produce, Sky Growers relied on phone calls, in-person visits, and ad-hoc WhatsApp messages to take orders. Restaurants, grocery stores, and individual families had no way to browse live availability, place recurring bulk orders, or get reliable delivery updates." },
      { type: "bullet-list", items: ["No public product catalog — customers had to ask what was in season", "Bulk wholesale orders handled manually over phone and email", "No delivery scheduling or order tracking for individual families", "Payment reconciliation was split across bank transfers, cash, and invoices"] },
      { type: "heading", heading: "What We Built" },
      { type: "bullet-list", items: ["Seasonal e-commerce storefront with live produce availability", "Bulk-wholesale tiered pricing for restaurants, grocers, and institutions", "Subscription/reorder flows for recurring weekly vegetable boxes", "Delivery zone logic for Christchurch with free-delivery thresholds", "Stripe-powered checkout with automated invoicing and order management"] },
      { type: "heading", heading: "The Results" },
      { type: "paragraph", content: "Sky Growers now takes orders around the clock. Wholesale customers reorder three times faster through saved order templates. Individual families can subscribe to weekly boxes and track deliveries. Payment reconciliation is fully automated, and the farm team manages inventory from a single dashboard." },
    ],
    results: [
      { metric: "24/7", label: "online produce ordering" },
      { metric: "3x", label: "faster wholesale reordering" },
      { metric: "100%", label: "farm-direct traceability" },
      { metric: "0", label: "manual payment reconciliation" },
    ],
    techs: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Vercel"],
  },
];

export async function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) return {};
  const url = `https://technioz.com/portfolio/${project.slug}`;
  return {
    title: project.title,
    description: project.subtitle,
    openGraph: buildOpenGraph({
      title: project.title,
      description: project.subtitle,
      url,
    }),
    alternates: {
      canonical: url,
    },
  };
}

const serviceLinksBySlug: Record<string, { title: string; href: string; desc: string }[]> = {
  "food-delivery-app": [
    { title: "Mobile Development", href: "/services/mobile-development", desc: "Native and cross-platform apps built for engagement and scale." },
    { title: "Web Development", href: "/services/web-development", desc: "Fast, secure web applications with React and Next.js." },
    { title: "Custom Software Development", href: "/services/custom-software-development", desc: "Software built around your exact workflows and growth goals." },
  ],
  "alkhanjry-transport": [
    { title: "Web Development", href: "/services/web-development", desc: "Customer-facing portals and booking platforms that convert." },
    { title: "Custom Software Development", href: "/services/custom-software-development", desc: "Bespoke platforms built around complex business rules." },
    { title: "Cloud Services", href: "/services/cloud-services", desc: "AWS-backed infrastructure that scales with demand." },
  ],
  "folio-ai-website-builder": [
    { title: "AI Solutions", href: "/services/ai-solutions", desc: "LLM integration, RAG systems, and production AI features." },
    { title: "Web Development", href: "/services/web-development", desc: "Next.js applications with performance and SEO built in." },
  ],
  "sky-growers": [
    { title: "Web Development", href: "/services/web-development", desc: "E-commerce and portal web apps that serve customers 24/7." },
    { title: "Custom Software Development", href: "/services/custom-software-development", desc: "Tailored platforms for operations, ordering, and reporting." },
  ],
};

function ServicesUsed({ slug }: { slug: string }) {
  const links = serviceLinksBySlug[slug];
  if (!links) return null;
  return (
    <section className="bg-white-200">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
        <h2 className="h4 text-black-500 mb-10">Services used on this project</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((s) => (
            <Link key={s.href} href={s.href} className="bg-white-300 rounded-sm p-[32px] flex flex-col gap-[12px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group">
              <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 group-hover:text-cobolt-500 transition-colors">{s.title}</h3>
              <p className="p4 text-black-400">{s.desc}</p>
              <span className="e2 text-cobolt-500 mt-2">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((p) => p.slug === slug);
  if (!study) notFound();

  const studyUrl = `https://technioz.com/portfolio/${study.slug}`;

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Case Studies", href: "/case-studies" }, { name: "Portfolio", href: "/portfolio" }, { name: study.client }]} />
      <ArticleJsonLd
        title={study.title}
        description={study.subtitle}
        url={studyUrl}
        datePublished="2025-08-01"
      />
      {/* Hero */}
      <section className="bg-white-200">
        {/* Breadcrumbs — outside the centered container */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[148px] pt-6 lg:pt-[40px] pb-10 lg:pb-[60px]">
          <div className="flex items-center gap-2 text-black-400 p5">
            <Link href="/" className="hover:text-cobolt-500 transition-colors">Home</Link>
            <span className="text-black-200">/</span>
            <Link href="/case-studies" className="hover:text-cobolt-500 transition-colors">Case Studies</Link>
            <span className="text-black-200">/</span>
            <span className="text-black-400">{study.client}</span>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 pb-8 lg:px-[148px] lg:pb-[80px] flex justify-start">
          <div className="max-w-[800px] w-full text-start">
            <div className="flex items-center gap-3 mb-5">
              {study.featured && <span className="e1 text-cobolt-500">Case Study</span>}
              {study.conceptBuild && <span className="e1 text-cobolt-500">Concept build</span>}
              <span className="p5 text-black-400">{study.industry}</span>
              {study.timeline && (
                <>
                  <span className="text-black-200">&middot;</span>
                  <span className="p5 text-black-400">{study.timeline}</span>
                </>
              )}
            </div>

            <h1 className="h2 text-black-500 mb-4">{study.title}</h1>
            <p className="p3 text-black-400 mb-8 leading-relaxed">{study.subtitle}</p>

            {/* Primary stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-[32px] bg-white-300 rounded-sm border border-neutral-300">
              {study.primaryStats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-display text-[36px] leading-none tracking-[-1.8px] text-cobolt-500">{s.metric}</span>
                  <span className="p5 text-black-400">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white-200">
        <article className="max-w-[1440px] mx-auto px-6 pb-16 lg:px-[148px] lg:pb-[80px] flex justify-start">
          <div className="max-w-[800px] w-full">
            {study.sections.map((section, i) => {
              if (section.type === "heading" && section.heading) {
                return (
                  <h2 key={i} className="h4 text-black-500 mt-14 mb-5">{section.heading}</h2>
                );
              }
              if (section.type === "paragraph" && section.content) {
                return (
                  <p key={i} className="p3 text-black-400 mb-5 leading-relaxed">{section.content}</p>
                );
              }
              if (section.type === "bullet-list" && section.items) {
                return (
                  <ul key={i} className="flex flex-col gap-3 my-5 ml-4">
                    {section.items.map((item, j) => (
                      <li key={j} className="p3 text-black-400 flex items-start gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-cobolt-500 shrink-0 mt-[9px]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (section.type === "tech-grid" && section.techs) {
                return (
                  <div key={i} className="flex flex-wrap gap-2 my-6">
                    {section.techs.map((t) => (
                      <span key={t} className="text-[12px] font-mono uppercase tracking-[1px] text-cobolt-500 bg-cobolt-500/5 px-3 py-1.5 rounded-sm">{t}</span>
                    ))}
                  </div>
                );
              }
              if (section.type === "quote" && section.quote) {
                return (
                  <blockquote key={i} className="border-l-[3px] border-cobolt-500 bg-white-300 rounded-sm px-[28px] py-[24px] my-8">
                    <p className="p3 text-black-500 italic leading-relaxed">&ldquo;{section.quote.text}&rdquo;</p>
                    <footer className="mt-3 p5 text-black-400">— {section.quote.author}{section.quote.role && `, ${section.quote.role}`}</footer>
                  </blockquote>
                );
              }
              return null;
            })}
          </div>
        </article>
      </section>

      {/* Results */}
      <section className="bg-black-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col items-center text-center">
          <h2 className="h3 !text-white-200 mb-4">Results at a glance</h2>
          <p className="p3 text-black-200 mb-10 max-w-[600px]">Measurable outcomes since launch.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[900px]">
            {study.results.map((r) => (
              <div key={r.label} className="border border-black-400 rounded-sm p-[32px] flex flex-col gap-[12px]">
                <span className="font-display text-[48px] leading-none tracking-[-2.4px] text-cobolt-300">{r.metric}</span>
                <p className="p3 text-white-200">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      {study.techs.length > 0 && (
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col items-center text-center">
          <h2 className="h4 text-black-500 mb-6">Technology used</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {study.techs.map((t) => (
              <span key={t} className="text-[13px] font-mono uppercase tracking-[1px] text-cobolt-500 bg-cobolt-500/5 px-4 py-2 rounded-sm">{t}</span>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Related */}
      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-10">More case studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.filter((p) => p.slug !== slug).slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className="bg-white-200 rounded-sm overflow-hidden hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group">
                <div className="aspect-[16/10] bg-neutral-200 flex items-center justify-center">
                  <span className="p4 text-black-400">{p.client}</span>
                </div>
                <div className="p-[24px] flex flex-col gap-[12px]">
                  <div className="flex items-center gap-2 flex-wrap">
                    {p.conceptBuild && <span className="text-[11px] font-mono uppercase tracking-[1px] text-cobolt-500 bg-cobolt-500/5 px-2 py-0.5 rounded-sm">Concept build</span>}
                    <span className="text-[11px] font-mono uppercase tracking-[1px] text-black-300">{p.industry}</span>
                    {p.timeline && <span className="text-xs text-black-400">{p.timeline}</span>}
                  </div>
                  <h3 className="font-display text-[18px] leading-[1.2] tracking-[-0.9px] text-black-500 group-hover:text-cobolt-500 transition-colors line-clamp-2">{p.title}</h3>
                  <span className="e2 text-cobolt-500">{p.conceptBuild ? "View concept build" : "Read case study"}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/case-studies" className="cta-secondary">View all case studies</Link>
          </div>
        </div>
      </section>

      {/* Services used */}
      <ServicesUsed slug={slug} />

      {/* CTA */}
      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-[600px]">
            <h2 className="h3 !text-white-100 mb-4">Want results like these?</h2>
            <p className="p3 text-white-100/80">Let&apos;s discuss your project and map out what it takes to get there.</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <Link href="https://calendly.com/technioztech/30min" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Book a free roadmap session</Link>
            <Link href="/contact" className="cta-secondary-dark !border-white-100 !text-white-100 hover:!bg-white-100 hover:!text-cobolt-500">Discuss a similar project</Link>
          </div>
        </div>
      </section>
    </>
  );
}
