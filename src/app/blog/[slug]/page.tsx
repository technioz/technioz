import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import { getDbArticleBySlug, getDbArticleSlugs, formatDbArticleDate } from "@/lib/db-articles";
import { BlogBanner } from "@/components/blog-banner";
import { BlogCardBanner } from "@/components/blog-card-banner";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { StaticBlogPostingJsonLd, DbBlogPostingJsonLd } from "@/components/blog-posting-jsonld";
import type { Metadata } from "next";

function postCta(slug: string, categoryCta: string): string {
  if (customEstimateSlugs.includes(slug)) return "Get a custom software estimate";
  if (aiSlugs.includes(slug)) return "Build your AI solution";
  if (cloudSlugs.includes(slug)) return "Plan your cloud migration";
  if (mobileSlugs.includes(slug)) return "Start your app project";
  if (webSlugs.includes(slug)) return "Start your web project";
  return categoryCta;
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .substring(0, 80);
}

function renderLinkedText(text: string) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, j) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (m) {
      const isHash = m[2].startsWith("#");
      const className = "text-cobolt-500 underline hover:no-underline";
      if (isHash) {
        return <a key={j} href={m[2]} className={className}>{m[1]}</a>;
      }
      return <Link key={j} href={m[2]} className={className}>{m[1]}</Link>;
    }
    return part;
  });
}

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
    cta: "Get a custom software estimate",
  },
  "Frontend Development": {
    heading: "Launch web and mobile apps that users love",
    body: "Our app development guide covers the process, technology stack, and team approach for modern apps.",
    href: "/web-mobile-app-development",
    cta: "Start your web project",
  },
  "Cloud Security": {
    heading: "Scale your infrastructure with confidence",
    body: "Our cloud and DevOps guide covers migration, CI/CD, and the operating model that keeps systems reliable.",
    href: "/cloud-devops",
    cta: "Plan your cloud migration",
  },
  "Consulting & Strategy": {
    heading: "Get clear on your technology strategy",
    body: "Our consulting and strategy guide covers discovery, stack choice, roadmapping, and choosing the right partner.",
    href: "/consulting-strategy",
    cta: "Get a custom software estimate",
  },
  "AI Solutions": {
    heading: "Turn AI potential into real business results",
    body: "Our AI solutions guide covers chatbots, agents, RAG systems, and LLM integration for practical business applications.",
    href: "/ai-solutions",
    cta: "Build your AI solution",
  },
  "Web & Mobile": {
    heading: "Build mobile apps that work across the Gulf",
    body: "Our web and mobile app development guide covers the process, technology choices, and cost factors for building apps in Dubai, UAE, and Saudi Arabia.",
    href: "/web-mobile-app-development",
    cta: "Start your app project",
  },
  "Cloud & DevOps": {
    heading: "Scale your infrastructure with confidence",
    body: "Our cloud and DevOps guide covers migration, CI/CD, cost optimization, and the operating model that keeps systems reliable.",
    href: "/cloud-devops",
    cta: "Plan your cloud migration",
  },
  "Industry Solutions": {
    heading: "Solutions built for your industry",
    body: "Our industry solutions page covers transport, logistics, healthcare, finance, and more with custom software built for your sector.",
    href: "/industry-solutions",
    cta: "Get a custom software estimate",
  },
};

const customEstimateSlugs = [
  "how-to-choose-software-development-partner-2026",
  "custom-software-development-cost-2026",
  "in-house-vs-outsourced-software-development-2026",
  "how-to-plan-custom-software-project-step-by-step",
  "common-mistakes-custom-software-development-projects",
  "custom-software-vs-off-the-shelf-2026",
  "software-maintenance-support-costs-2026",
  "api-first-development-modern-software-2026",
  "mvp-development-for-startups-2026",
];

const aiSlugs = [
  "rag-systems-explained",
  "ai-chatbot-development-types-costs-best-practices-2026",
  "llm-integration-business-applications-guide-2026",
  "fine-tuning-vs-prompt-engineering-2026",
  "building-production-ready-ai-agents-business-2026",
  "ai-use-cases-different-industries-2026",
  "ai-cost-optimization-production-2026",
  "ai-agents-vs-chatbots",
];

const cloudSlugs = [
  "cloud-migration-strategy-step-by-step-guide-2026",
  "cloud-cost-optimization-practical-guide-2026",
  "ci-cd-pipelines-explained-benefits-implementation-2026",
  "docker-application-deployment-beginner-to-production-2026",
  "scaling-applications-cloud-2026",
  "devops-best-practices-growing-companies-2026",
  "software-security-compliance-guide-enterprise-2026",
];

const mobileSlugs = [
  "mobile-app-development-cost-dubai-uae-saudi-arabia-2026",
  "mobile-app-development-process-idea-to-launch-2026",
  "flutter-app-development-company-dubai-2026",
  "react-native-vs-flutter-2026-comparison",
  "ios-vs-android-app-development-dubai-2026",
  "react-native-app-development-company-dubai-2026",
];

const webSlugs = [
  "web-app-development-company-dubai-2026",
  "web-app-development-process-step-by-step-2026",
  "progressive-web-apps-pwas-when-to-build-2026",
  "app-performance-optimization-case-study-hattafoodhub",
];

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  // Check static posts first
  const staticPost = blogPosts.find((p) => p.slug === slug);
  if (staticPost) {
    const url = `https://technioz.com/blog/${staticPost.slug}`;
    return {
      title: `${staticPost.title} | Technioz Blog`,
      description: staticPost.excerpt,
      robots: staticPost.noindex ? { index: false, follow: true } : { index: true, follow: true },
      openGraph: {
        title: staticPost.title,
        description: staticPost.excerpt,
        url,
        siteName: "Technioz",
        type: "article",
        publishedTime: new Date(staticPost.date).toISOString(),
        authors: [staticPost.author.name],
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: staticPost.imageAlt }],
      },
      twitter: {
        card: "summary_large_image",
        title: staticPost.title,
        description: staticPost.excerpt,
        images: ["/og-image.png"],
      },
      alternates: {
        canonical: url,
      },
    };
  }

  // Check DB posts
  const dbPost = await getDbArticleBySlug(slug);
  if (dbPost) {
    const url = `https://technioz.com/blog/${dbPost.slug}`;
    const imageUrl = dbPost.imageLocalPath || dbPost.imageUrl || "/og-image.png";
    return {
      title: `${dbPost.title} | Technioz Blog`,
      description: dbPost.metaDescription || dbPost.excerpt,
      openGraph: {
        title: dbPost.title,
        description: dbPost.metaDescription || dbPost.excerpt,
        url,
        siteName: "Technioz",
        type: "article",
        publishedTime: dbPost.publishedAt.toISOString(),
        authors: [dbPost.authorName],
        images: [{ url: imageUrl, width: 1200, height: 630, alt: dbPost.imageAlt || dbPost.title }],
      },
      twitter: {
        card: "summary_large_image",
        title: dbPost.title,
        description: dbPost.metaDescription || dbPost.excerpt,
        images: [imageUrl],
      },
      alternates: {
        canonical: url,
      },
    };
  }

  return {};
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const staticPost = blogPosts.find((p) => p.slug === slug);

  if (staticPost) {
    return <StaticBlogDetail post={staticPost} />;
  }

  const dbPost = await getDbArticleBySlug(slug);
  if (!dbPost) notFound();

  return <DbBlogDetail article={dbPost} />;
}

function StaticBlogDetail({ post }: { post: typeof blogPosts[number] }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title }]} />
      <StaticBlogPostingJsonLd slug={post.slug} />
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
                const id = slugify(block.value);
                return <h2 id={id} key={i} className="h4 text-black-500 mt-12 mb-4 scroll-mt-24">{block.value}</h2>;
              }
              if (block.type === "h3") {
                const id = slugify(block.value);
                return <h3 id={id} key={i} className="font-display text-[28px] leading-[1.1] tracking-[-1.4px] text-black-500 mt-8 mb-3 scroll-mt-24">{block.value}</h3>;
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
                        <span>{renderLinkedText(item)}</span>
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
                  {renderLinkedText(block.value)}
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
                  {postCta(post.slug, serviceCta[post.category].cta)}
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

function DbBlogDetail({ article }: { article: Awaited<ReturnType<typeof getDbArticleBySlug>> & {} }) {
  const date = formatDbArticleDate(article.publishedAt);
  const imageSrc = article.imageLocalPath || article.imageUrl || undefined;

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: article.title }]} />
      <DbBlogPostingJsonLd article={article} />
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pt-6 lg:pt-[40px] pb-4">
          <div className="flex items-center gap-2 text-black-400 p5">
            <Link href="/" className="hover:text-cobolt-500 transition-colors">Home</Link>
            <span className="text-black-200">/</span>
            <Link href="/blog" className="hover:text-cobolt-500 transition-colors">Blog</Link>
            <span className="text-black-200">/</span>
            <span className="text-black-400">{article.category}</span>
          </div>
        </div>

        {/* Editorial banner */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[148px] pb-8 lg:pb-[60px]">
          <BlogBanner
            slug={article.slug}
            title={article.title}
            category={article.category}
            date={date}
            readTime={article.readTime}
            author={article.authorName}
          />
        </div>
      </section>

      <section className="bg-white-200">
        <article className="max-w-[1440px] mx-auto px-6 pb-16 lg:px-[148px] lg:pb-[120px]">
          <div className="max-w-[800px] mx-auto flex flex-col">
            {/* Author byline */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-full bg-cobolt-500/10 flex items-center justify-center text-cobolt-500 font-display text-[16px]">
                {article.authorName.charAt(0)}
              </div>
              <div>
                <p className="p4 font-medium text-black-500">{article.authorName}</p>
                <p className="p5 text-black-400">{article.authorRole}</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {article.tags.map((tag) => (
                <span key={tag} className="text-[12px] text-cobolt-500 font-mono bg-cobolt-500/5 px-3 py-1.5 rounded-full">{tag}</span>
              ))}
            </div>

            {/* Hero image */}
            {imageSrc && (
              <figure className="mb-10">
                <div className="relative w-full aspect-[16/9] rounded-sm overflow-hidden border border-neutral-300">
                  <Image
                    src={imageSrc}
                    alt={article.imageAlt || article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                    unoptimized={imageSrc.startsWith("http")}
                  />
                </div>
              </figure>
            )}

            {/* Content HTML */}
            <div
              className="prose prose-lg max-w-none article-prose"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />

            {/* Service CTA */}
            {serviceCta[article.category] && (
              <div className="mt-16 p-8 bg-cobolt-500/5 border border-cobolt-500/20 rounded-sm">
                <h3 className="font-display text-[24px] leading-[1.15] tracking-[-1.2px] text-black-500 mb-3">
                  {serviceCta[article.category].heading}
                </h3>
                <p className="p3 text-black-400 mb-6 leading-relaxed">
                  {serviceCta[article.category].body}
                </p>
                <Link href={serviceCta[article.category].href} className="cta-primary">
                  {serviceCta[article.category].cta}
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
            {blogPosts.filter((p) => p.slug !== article.slug).slice(0, 3).map((p) => (
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