import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { blogPosts } from "@/lib/blog-data";
import { BlogCardBanner } from "@/components/blog-card-banner";

export function BlogList() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Resources", href: "/resources" }, { name: "Blog" }]} />
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[700px]">
            <div className="flex items-center gap-2 text-black-400 p5">
              <Link href="/" className="hover:text-cobolt-500">Home</Link> / <Link href="/resources" className="hover:text-cobolt-500">Resources</Link> / <span>Blog</span>
            </div>
            <h1 className="h2 text-black-500">Latest Insights on Technology & Development</h1>
            <p className="p3 text-black-400">Practical guides, case studies, and engineering notes for teams building modern software.</p>
          </div>
        </div>
      </section>

      {/* All articles in a single grid */}
      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="group">
                <div className="bg-white-200 rounded-sm overflow-hidden border border-neutral-300 hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow h-full flex flex-col">
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
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-xs font-medium text-black-500">{article.author.name}</span>
                      <span className="text-xs text-black-400">{article.date}</span>
                    </div>
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