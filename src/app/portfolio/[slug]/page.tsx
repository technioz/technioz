import { notFound } from "next/navigation";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { ArticleJsonLd } from "@/components/article-jsonld";
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
  timeline: string;
  featured: boolean;
  primaryStats: { metric: string; label: string }[];
  sections: CaseStudySection[];
  results: { metric: string; label: string }[];
  techs: string[];
}

const caseStudies: CaseStudy[] = [
  {
    slug: "food-delivery-app",
    client: "HattaFoodHub",
    title: "From MVP Crashes to 10,000+ Concurrent Orders",
    subtitle: "How we rebuilt a failing food delivery monolith into a microservices platform that restaurants, couriers, and customers actually trust.",
    industry: "Food & Logistics",
    timeline: "4 months",
    featured: true,
    primaryStats: [
      { metric: "10,000+", label: "concurrent orders" },
      { metric: "99.9%", label: "platform uptime" },
      { metric: "40%", label: "more repeat customers" },
    ],
    sections: [
      {
        type: "heading", heading: "About the Client",
      },
      {
        type: "paragraph",
        content: "HattaFoodHub is a food delivery startup connecting restaurants, couriers, and customers across multiple cities. They entered the market with a strong brand and loyal restaurant partners, but their technology stack could not keep up with growth.",
      },
      {
        type: "heading", heading: "The Problem",
      },
      {
        type: "paragraph",
        content: "HattaFoodHub had a working MVP — but it was built on a monolithic Laravel backend tied to a single MySQL database. It worked fine for 50 orders an hour. At 200 orders, it slowed down. At 500, it crashed. Lunch and dinner peaks were a daily gamble: would the platform stay up today?",
      },
      {
        type: "bullet-list",
        items: [
          "Orders took 8–12 seconds to confirm during peak hours",
          "Driver dispatching had no real-time component — couriers refreshed their screens manually",
          "Restaurant dashboards showed stale inventory — menus would sell items that were out of stock",
          "No automated retry logic for failed payments — customers were charged without orders being created",
        ],
      },
      {
        type: "heading", heading: "What We Built",
      },
      {
        type: "paragraph",
        content: "We rebuilt the entire platform with a microservices architecture:",
      },
      {
        type: "bullet-list",
        items: [
          "Order Management Service — handles the lifecycle from cart creation to delivery confirmation, with idempotency keys so double-charges are impossible",
          "Dispatch Engine — a real-time WebSocket service that matches couriers to orders based on proximity, load, and vehicle type, with automatic reassignment if a courier rejects or times out",
          "Payment Gateway — unified integration with Stripe, with retry logic, webhook reconciliation, and automatic refunds for cancelled orders",
          "Restaurant Dashboard — a React frontend that shows live inventory sync, incoming orders with audio alerts, and analytics on peak hours and popular items",
          "Customer App — React Native app with live GPS tracking of couriers and estimated delivery times recalculated every 30 seconds",
        ],
      },
      {
        type: "heading", heading: "Technical Approach",
      },
      {
        type: "paragraph",
        content: "We containerized each service with Docker and orchestrated them on AWS ECS with auto-scaling. Redis handled session caching and rate limiting. PostgreSQL became the transactional database. The entire stack deployed through a GitHub Actions CI/CD pipeline with blue-green deployments — meaning updates went live with zero downtime.",
      },
      {
        type: "quote",
        quote: { text: "I can finally sleep during dinner rush. The platform just handles it.", author: "HattaFoodHub CTO", role: "" },
      },
      {
        type: "heading", heading: "The Results",
      },
      {
        type: "paragraph",
        content: "The new platform launched without a single outage. Peak-hour order confirmation dropped from 8–12 seconds to under 800 milliseconds. Repeat customers increased by 40% in the first two months — users came back because the app was fast and reliable.",
      },
    ],
    results: [
      { metric: "10,000+", label: "concurrent orders handled" },
      { metric: "99.9%", label: "platform uptime" },
      { metric: "40%", label: "increase in repeat customers" },
      { metric: "800ms", label: "order confirmation time" },
    ],
    techs: ["React Native", "Laravel", "Node.js", "MySQL", "PostgreSQL", "Redis", "AWS ECS", "Docker", "Stripe"],
  },
  {
    slug: "alkhanjry-transport",
    client: "Al Khanjry Groups",
    title: "From Manual Counters to $27 Million in Digital Sales",
    subtitle: "How a 25-year-old Omani bus operator replaced counter queues and WhatsApp bookings with an online platform that now processes millions in ticket sales across 80+ cross-border routes.",
    industry: "Transportation & Logistics",
    timeline: "7 months",
    featured: true,
    primaryStats: [
      { metric: "$27M+", label: "in ticket sales" },
      { metric: "150K+", label: "bookings completed" },
      { metric: "200K+", label: "passengers served" },
    ],
    sections: [
      {
        type: "heading", heading: "About the Client",
      },
      {
        type: "paragraph",
        content: "Al Khanjry Transport is a 100% Omani-owned bus operator running since 1998. Headquartered in Muscat, they operate daily cross-border routes between Oman and the UAE — primarily Muscat to Dubai — plus charter coach services across the GCC. They run 5 physical branch locations in Dubai, Ruwi (Muscat), Sohar, Al Khoud, and Ajman, serving both local passengers and international travelers. Their reputation is strong: 25 years of reliability, fair pricing, and drivers who know every checkpoint on the border route.",
      },
      {
        type: "heading", heading: "The Problem",
      },
      {
        type: "paragraph",
        content: "Despite their market position and loyal customer base, Al Khanjry had no digital presence. Every booking happened offline — customers called a phone number, walked into a branch counter, or messaged on WhatsApp. A staff member manually checked availability on a spreadsheet, assigned a seat, and collected cash or made a bank transfer request. Confirmation was verbal or sent as a WhatsApp message.",
      },
      {
        type: "paragraph",
        content: "This worked when they were moving 50 passengers a day. By 2024, they were handling 100x that volume — and the system was visibly failing:",
      },
      {
        type: "bullet-list",
        items: [
          "During peak seasons — Eid, winter tourism, national holidays — counters had 40-minute queues",
          "Phone lines were jammed for hours. Passengers gave up and went to competitors with online booking",
          "Staff had no visibility into real-time seat inventory across routes — double-bookings happened weekly",
          "The website that existed before was static HTML with no booking capability. It could not be updated without taking the server offline",
          "Arabic-speaking passengers had no way to book in their language. Support had to translate manually over WhatsApp",
          "No payment gateway integration. All payments were offline, creating reconciliation nightmares for the finance team",
        ],
      },
      {
        type: "heading", heading: "What We Built",
      },
      {
        type: "paragraph",
        content: "Technioz rebuilt the entire booking experience from the ground up — a bilingual online platform that handles the full passenger journey from search to payment to onboard.",
      },
      {
        type: "heading", heading: "1. Online Booking Portal",
      },
      {
        type: "bullet-list",
        items: [
          "Responsive web application built with React and Next.js — works on mobile, tablet, and desktop",
          "Real-time seat selection with a visual seat map showing booked vs. available seats on every bus",
          "Full bilingual support — passengers switch between Arabic and English with one tap. All content, including booking confirmations and error messages, is fully localized",
          "One-way and round-trip booking with departure date selection and passenger count selector",
          "Automated SMS and email confirmations after payment — passengers receive booking IDs, seat numbers, and branch pick-up instructions instantly",
          "Guest checkout and account-based booking — returning passengers can manage bookings, rebook previous routes, and save payment methods",
        ],
      },
      {
        type: "heading", heading: "2. Payment Integration",
      },
      {
        type: "bullet-list",
        items: [
          "Integrated GCC-compatible payment gateways supporting local cards, bank transfers, and digital wallets",
          "Multi-currency support — passengers book in AED on the UAE side and in OMR on the Oman side, with automatic conversion",
          "Webhook-based reconciliation system that matches payments with bookings in real time, eliminating manual finance reconciliation",
          "Automatic refunds triggered for cancelled or rescheduled buses, with notification to the passenger",
        ],
      },
      {
        type: "heading", heading: "3. Cloud Infrastructure and DevOps",
      },
      {
        type: "bullet-list",
        items: [
          "Full migration to AWS with architecture designed for demand spikes: EC2 auto-scaling groups, RDS for PostgreSQL, ElastiCache (Redis) for session management, S3 for static assets, and CloudFront CDN for global delivery",
          "Serverless Lambda functions for scheduled tasks — ticket expiry reminders, daily sales reports, and automated seat release for abandoned bookings",
          "CI/CD pipeline using GitHub Actions with automated testing, staging environment, and zero-downtime blue-green deployments",
          "Monitoring and alerting with CloudWatch — the team gets Slack notifications if error rates or latency exceed thresholds",
        ],
      },
      {
        type: "heading", heading: "4. Admin Dashboard",
      },
      {
        type: "bullet-list",
        items: [
          "Central dashboard for operations team to manage routes, schedules, pricing, and seat inventory across all 80+ routes",
          "Real-time sales dashboard showing revenue by route, time period, and booking channel",
          "Passenger manifest generation — one-click export of passenger lists for border crossing documentation",
          "Agent management system with role-based access — branch staff can process walk-in bookings through the same system, keeping all inventory in sync",
        ],
      },
      {
        type: "heading", heading: "The Rollout",
      },
      {
        type: "paragraph",
        content: "We launched in phases. Phase 1 went live with the Muscat–Dubai route and a single payment gateway. We monitored for two weeks, fixed edge cases, then expanded to all routes in Phase 2. By Phase 3, branch staff were using the admin dashboard to process walk-in bookings, putting 100% of inventory online. Total rollout: 7 months from first commit to all routes live.",
      },
      {
        type: "heading", heading: "The Results",
      },
      {
        type: "paragraph",
        content: "Since launch, alkhanjryonline.com has become the primary booking channel for the company. Over $27 million in ticket sales has been processed digitally. More than 150,000 bookings have been completed, serving over 200,000 passengers across 80+ cross-border routes. Booking time dropped from 15–20 minutes (phone/counter) to under 2 minutes (online). Platform uptime is 99.9% even during peak seasons when traffic spikes 5x normal levels. Customer complaints about booking errors are down approximately 70%. The operations team that once spent hours on manual reconciliation now has a live dashboard that updates in real time.",
      },
    ],
    results: [
      { metric: "$27M+", label: "in ticket sales processed" },
      { metric: "150K+", label: "bookings completed" },
      { metric: "200K+", label: "passengers served" },
      { metric: "80+", label: "cross-border routes" },
      { metric: "2 min", label: "booking time (was 15-20 min)" },
      { metric: "99.9%", label: "platform uptime" },
    ],
    techs: ["React", "Next.js", "Node.js", "Express.js", "PostgreSQL", "Redis", "AWS EC2", "AWS RDS", "AWS Lambda", "Docker", "GitHub Actions"],
  },
  {
    slug: "folio-ai-website-builder",
    client: "Folio",
    title: "One-Click AI Website Builder",
    subtitle: "Turn a social-media link, a document, or a simple prompt into a beautiful, deploy-ready website — in seconds.",
    industry: "AI SaaS",
    timeline: "5 months",
    featured: false,
    primaryStats: [
      { metric: "60 sec", label: "average site build time" },
      { metric: "85%", label: "faster than hand-coding" },
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
    title: `${project.title} | ${project.client} | Technioz`,
    description: project.subtitle,
    openGraph: {
      title: `${project.title} | ${project.client} | Technioz`,
      description: project.subtitle,
      url,
      images: ["/logo.webp"],
    },
    alternates: {
      canonical: url,
    },
  };
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
              <span className="p5 text-black-400">{study.industry}</span>
              <span className="text-black-200">&middot;</span>
              <span className="p5 text-black-400">{study.timeline}</span>
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
          <h2 className="h3 text-white-200 mb-4">Results at a glance</h2>
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
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-[1px] text-cobolt-500">{p.industry}</span>
                    <span className="text-xs text-black-400">{p.timeline}</span>
                  </div>
                  <h3 className="font-display text-[18px] leading-[1.2] tracking-[-0.9px] text-black-500 group-hover:text-cobolt-500 transition-colors line-clamp-2">{p.title}</h3>
                  <span className="e2 text-cobolt-500">Read case study</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/case-studies" className="cta-secondary">View all case studies</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-[600px]">
            <h2 className="h3 !text-white-100 mb-4">Want results like these?</h2>
            <p className="p3 text-white-100/80">Let&apos;s discuss your project and map out what it takes to get there.</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <Link href="https://calendly.com/technioztech/30min" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Book a free roadmap session</Link>
            <Link href="/contact" className="cta-secondary-dark !border-white-100 !text-white-100 hover:!bg-white-100 hover:!text-cobolt-500">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
