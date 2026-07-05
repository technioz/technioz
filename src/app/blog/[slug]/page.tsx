import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import { BlogBanner } from "@/components/blog-banner";
import { BlogCardBanner } from "@/components/blog-card-banner";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { BlogPostingJsonLd } from "@/components/blog-posting-jsonld";
import type { Metadata } from "next";

const serviceCta: Record<string, { heading: string; body: string; href: string; cta: string }> = {
  "Case Study": {
    heading: "See how we deliver results",
    body: "Read more case studies to see how we have helped businesses across transport, retail, food tech, and more.",
    href: "/case-studies",
    cta: "View case studies",
  },
  "Backend Development": {
    heading: "Build software that fits your business",
    body: "Our custom software development guide covers planning, architecture, and choosing the right partner.",
    href: "/custom-software-development",
    cta: "Read the guide",
  },
  "Frontend Development": {
    heading: "Launch web and mobile apps that users love",
    body: "Our app development guide covers the process, technology stack, and team approach for modern apps.",
    href: "/web-mobile-app-development",
    cta: "Read the guide",
  },
  "Cloud Security": {
    heading: "Scale your infrastructure with confidence",
    body: "Our cloud and DevOps guide covers migration, CI/CD, and the operating model that keeps systems reliable.",
    href: "/cloud-devops",
    cta: "Read the guide",
  },
  "AI Solutions": {
    heading: "Turn AI potential into real business results",
    body: "Our AI solutions guide covers chatbots, agents, RAG systems, and LLM integration for practical business applications.",
    href: "/ai-solutions",
    cta: "Read the guide",
  },
  "Web & Mobile": {
    heading: "Build mobile apps that work across the Gulf",
    body: "Our web and mobile app development guide covers the process, technology choices, and cost factors for building apps in Dubai, UAE, and Saudi Arabia.",
    href: "/web-mobile-app-development",
    cta: "Read the guide",
  },
  "Cloud & DevOps": {
    heading: "Scale your infrastructure with confidence",
    body: "Our cloud and DevOps guide covers migration, CI/CD, cost optimization, and the operating model that keeps systems reliable.",
    href: "/cloud-devops",
    cta: "Read the guide",
  },
  "Industry Solutions": {
    heading: "Solutions built for your industry",
    body: "Our industry solutions page covers transport, logistics, healthcare, finance, and more with custom software built for your sector.",
    href: "/industry-solutions",
    cta: "Explore solutions",
  },
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const url = `https://technioz.com/blog/${post.slug}`;
  return {
    title: `${post.title} | Technioz Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    robots: { index: true, follow: true },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: "Technioz",
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author.name],
      images: [{ url: "/logo.webp", width: 1200, height: 630, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/logo.webp"],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title }]} />
      <BlogPostingJsonLd slug={post.slug} />
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pt-6 lg:pt-[40px] pb-4">
          <div className="flex items-center gap-2 text-black-400 p5">
            <Link href="/" className="hover:text-cobolt-500 transition-colors">Home</Link>
            <span className="text-black-200">/</span>
            <Link href="/blog" className="hover:text-cobolt-500 transition-colors">Blog</Link>
            <span className="text-black-200">/</span>
            <span className="text-black-400">{post.category}</span>
          </div>
        </div>

        {/* Editorial banner */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[148px] pb-8 lg:pb-[60px]">
          <BlogBanner
            slug={post.slug}
            title={post.title}
            category={post.category}
            date={post.date}
            readTime={post.readTime}
            author={post.author.name}
          />
        </div>
      </section>

      <section className="bg-white-200">
        <article className="max-w-[1440px] mx-auto px-6 pb-16 lg:px-[148px] lg:pb-[120px]">
          <div className="max-w-[800px] mx-auto flex flex-col">
            {/* Author byline */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-full bg-cobolt-500/10 flex items-center justify-center text-cobolt-500 font-display text-[16px]">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="p4 font-medium text-black-500">{post.author.name}</p>
                <p className="p5 text-black-400">{post.author.role}</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {post.tags.map((tag) => (
                <span key={tag} className="text-[12px] text-cobolt-500 font-mono bg-cobolt-500/5 px-3 py-1.5 rounded-full">{tag}</span>
              ))}
            </div>

            {/* Content blocks */}
            {post.blocks.map((block, i) => {
              if (block.type === "h2") {
                return <h2 key={i} className="h4 text-black-500 mt-12 mb-4">{block.value}</h2>;
              }
              if (block.type === "h3") {
                return <h3 key={i} className="font-display text-[28px] leading-[1.1] tracking-[-1.4px] text-black-500 mt-8 mb-3">{block.value}</h3>;
              }
              if (block.type === "code") {
                return (
                  <pre key={i} className="bg-black-500 text-white-200 rounded-sm p-6 my-6 overflow-x-auto">
                    <code className="text-[13px] leading-[1.6] font-mono whitespace-pre">{block.value}</code>
                  </pre>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="flex flex-col gap-2 my-4 ml-4">
                    {block.items.map((item, j) => (
                      <li key={j} className="p3 text-black-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cobolt-500 shrink-0 mt-[9px]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "image") {
                return (
                  <figure key={i} className="my-8">
                    <div className="relative w-full aspect-[16/9] rounded-sm overflow-hidden border border-neutral-300">
                      <Image
                        src={block.src}
                        alt={block.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 800px"
                        className="object-cover"
                      />
                    </div>
                    {block.caption && (
                      <figcaption className="mt-2 text-center p5 text-black-400">{block.caption}</figcaption>
                    )}
                  </figure>
                );
              }
              return (
                <p key={i} className="p3 text-black-400 my-4 leading-relaxed">
                  {block.value.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, j) => {
                    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
                    if (m) {
                      return <Link key={j} href={m[2]} className="text-cobolt-500 underline hover:no-underline">{m[1]}</Link>;
                    }
                    return part;
                  })}
                </p>
              );
            })}

            {/* Service CTA for pillar posts */}
            {serviceCta[post.category] && (
              <div className="mt-16 p-8 bg-cobolt-500/5 border border-cobolt-500/20 rounded-sm">
                <h3 className="font-display text-[24px] leading-[1.15] tracking-[-1.2px] text-black-500 mb-3">
                  {serviceCta[post.category].heading}
                </h3>
                <p className="p3 text-black-400 mb-6 leading-relaxed">
                  {serviceCta[post.category].body}
                </p>
                <Link href={serviceCta[post.category].href} className="cta-primary">
                  {serviceCta[post.category].cta}
                </Link>
              </div>
            )}
          </div>
        </article>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-10">More from the blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="bg-white-200 rounded-sm overflow-hidden hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group">
                <div className="aspect-video">
                  <BlogCardBanner slug={p.slug} category={p.category} title={p.title} readTime={p.readTime} />
                </div>
                <div className="p-[24px] flex flex-col gap-[12px]">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-[1px] text-cobolt-500">{p.category}</span>
                    <span className="text-xs text-black-400">{p.date}</span>
                  </div>
                  <h3 className="font-display text-[18px] leading-[1.2] tracking-[-0.9px] text-black-500 group-hover:text-cobolt-500 transition-colors line-clamp-2">{p.title}</h3>
                  <span className="e2 text-cobolt-500">Read more</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="cta-secondary">View all articles</Link>
          </div>
        </div>
      </section>
    </>
  );
}