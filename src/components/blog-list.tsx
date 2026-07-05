"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { blogPosts } from "@/lib/blog-data";
import { BlogCardBanner } from "@/components/blog-card-banner";

const POSTS_PER_PAGE = 12;

export function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return blogPosts;
    return blogPosts.filter((article) =>
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query) ||
      article.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const totalPages = useMemo(() => Math.ceil(filteredPosts.length / POSTS_PER_PAGE), [filteredPosts]);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

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

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          {/* Search */}
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="relative w-full sm:max-w-[420px]">
              <label htmlFor="blog-search" className="sr-only">Search articles</label>
              <input
                id="blog-search"
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search articles, topics, or tags..."
                className="w-full h-[48px] px-4 pl-11 rounded-sm border border-neutral-300 bg-white-200 text-black-500 placeholder:text-black-300 focus:outline-none focus:border-cobolt-500 transition-colors"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-black-300" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21L16.65 16.65" />
              </svg>
            </div>
            <p className="p5 text-black-400">
              {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>

          {/* Articles grid */}
          {paginatedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((article) => (
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
          ) : (
            <div className="text-center py-20 bg-white-200 rounded-sm border border-neutral-300">
              <p className="p3 text-black-500 mb-2">No articles match your search.</p>
              <p className="p5 text-black-400">Try a different keyword or clear the search.</p>
              <button
                onClick={() => handleSearchChange("")}
                className="mt-4 text-cobolt-500 underline hover:no-underline p4"
              >
                Clear search
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-14 flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="inline-flex items-center justify-center h-[44px] px-4 rounded-sm border border-neutral-300 bg-white-200 text-black-500 disabled:opacity-40 disabled:cursor-not-allowed hover:border-cobolt-500 hover:text-cobolt-500 transition-colors"
              >
                Previous
              </button>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`inline-flex items-center justify-center w-[44px] h-[44px] rounded-sm text-[14px] font-mono transition-colors ${
                      page === currentPage
                        ? "bg-cobolt-500 text-white-100"
                        : "bg-white-200 text-black-500 border border-neutral-300 hover:border-cobolt-500 hover:text-cobolt-500"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="inline-flex items-center justify-center h-[44px] px-4 rounded-sm border border-neutral-300 bg-white-200 text-black-500 disabled:opacity-40 disabled:cursor-not-allowed hover:border-cobolt-500 hover:text-cobolt-500 transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}