import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-data";
import { BlogCardBanner } from "@/components/blog-card-banner";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";

import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Resources — Guides, Case Studies & Engineering Notes",
  description: "Practical guides, case studies, and engineering notes on custom software, AI, cloud, and mobile app development.",
  openGraph: buildOpenGraph({
      title: "Resources — Guides, Case Studies & Engineering Notes",
      description: "Practical guides, case studies, and engineering notes from the Technioz team.",
      url: "https://technioz.com/resources",
    }),
  alternates: {
    canonical: "https://technioz.com/resources",
  },
};

const pillars = [
  {
    href: "/custom-software-development",
    label: "Custom Software",
    title: "Custom Software Development Guide",
    desc: "When to build custom software, how the process works, and how to choose the right partner.",
  },
  {
    href: "/ai-solutions",
    label: "AI Solutions",
    title: "AI Solutions for Business",
    desc: "Chatbots, AI agents, RAG systems, and workflow automation explained for business teams.",
  },
  {
    href: "/cloud-devops",
    label: "Cloud & DevOps",
    title: "Cloud and DevOps Guide",
    desc: "How to scale infrastructure, migrate to the cloud, and ship software faster with CI/CD.",
  },
  {
    href: "/web-mobile-app-development",
    label: "App Development",
    title: "Web and Mobile App Development Guide",
    desc: "The process, technology stack, and team approach for building web and mobile apps.",
  },
  {
    href: "/industry-solutions",
    label: "Industry Solutions",
    title: "Industry-Specific Software Solutions",
    desc: "How custom software solves problems in transport, retail, logistics, healthcare, and finance.",
  },
  {
    href: "/resources/app-development-cost-calculator",
    label: "Tool",
    title: "App Development Cost Calculator",
    desc: "Estimate iOS, Android, React Native, Flutter, and web app costs in 2 minutes. Get a detailed PDF breakdown.",
  },
  {
    href: "/resources/web-app-development-cost-calculator",
    label: "Tool",
    title: "Web App Development Cost Calculator",
    desc: "Estimate SaaS, dashboard, marketplace, and e-commerce web app costs in 2 minutes. Get a detailed PDF breakdown.",
  },
];

export default function Resources() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
      <>
        <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Resources", href: "/resources" }]} />
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[700px]">
            <div className="flex items-center gap-2 text-black-400 p5">
              <Link href="/" className="hover:text-cobolt-500">Home</Link> / <span>Resources</span>
            </div>
            <h1 className="h2 text-black-500">Resources</h1>
            <p className="p3 text-black-400">Practical guides, case studies, and engineering notes for teams building modern software.</p>
          </div>
        </div>
      </section>

      {/* Pillar guides */}
      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="mb-10">
            <span className="e1 text-cobolt-500 mb-3 block">Pillar guides</span>
            <h2 className="h4 text-black-500">Strategy guides by topic</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <Link key={pillar.href} href={pillar.href} className="group">
                <div className="bg-white-200 rounded-sm overflow-hidden border border-neutral-300 hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow h-full flex flex-col p-[32px]">
                  <span className="text-[11px] font-mono uppercase tracking-[1px] text-cobolt-500 mb-3">{pillar.label}</span>
                  <h3 className="font-display text-[24px] leading-[1.1] tracking-[-1.2px] text-black-500 group-hover:text-cobolt-500 transition-colors mb-3">{pillar.title}</h3>
                  <p className="p4 text-black-400 flex-1">{pillar.desc}</p>
                  <span className="e2 text-cobolt-500 mt-6">Read guide →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog and case studies */}
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Link href="/blog" className="group bg-white-300 rounded-sm overflow-hidden border border-neutral-300 hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow p-[32px] flex flex-col gap-[16px]">
              <span className="e1 text-cobolt-500">Blog</span>
              <h2 className="font-display text-[32px] leading-[1.1] tracking-[-1.6px] text-black-500 group-hover:text-cobolt-500 transition-colors">Read the blog</h2>
              <p className="p3 text-black-400">Case studies, tutorials, and insights on custom software, AI, cloud, and app development.</p>
              <span className="e2 text-cobolt-500 mt-auto">Browse all articles →</span>
            </Link>

            <Link href="/case-studies" className="group bg-white-300 rounded-sm overflow-hidden border border-neutral-300 hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow p-[32px] flex flex-col gap-[16px]">
              <span className="e1 text-cobolt-500">Case Studies</span>
              <h2 className="font-display text-[32px] leading-[1.1] tracking-[-1.6px] text-black-500 group-hover:text-cobolt-500 transition-colors">See client results</h2>
              <p className="p3 text-black-400">Real projects, real outcomes. Explore how we have helped businesses across transport, retail, food tech, and more.</p>
              <span className="e2 text-cobolt-500 mt-auto">View case studies →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest from the blog */}
      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 pb-16 lg:px-[148px] lg:pb-[120px]">
          <div className="flex items-center justify-between mb-10">
            <h2 className="h4 text-black-500">Latest from the blog</h2>
            <Link href="/blog" className="e2 text-cobolt-500">View all →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="group">
                <div className="bg-white-200 rounded-sm overflow-hidden hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow h-full flex flex-col">
                  <div className="aspect-video">
                    <BlogCardBanner slug={article.slug} category={article.category} title={article.title} readTime={article.readTime} />
                  </div>
                  <div className="p-[24px] flex flex-col gap-[12px] flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-[1px] text-cobolt-500">{article.category}</span>
                      <span className="text-xs text-black-400">{article.readTime}</span>
                    </div>
                    <h3 className="font-display text-[20px] leading-[1.2] tracking-[-1px] text-black-500 group-hover:text-cobolt-500 transition-colors">{article.title}</h3>
                    <p className="p5 text-black-400 line-clamp-2">{article.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}