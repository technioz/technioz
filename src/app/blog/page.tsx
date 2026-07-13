import { BlogList, type BlogListItem } from "@/components/blog-list";
import { blogPosts } from "@/lib/blog-data";
import { getAllDbArticles, formatDbArticleDate } from "@/lib/db-articles";
import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

import type { Metadata } from "next";

const POSTS_PER_PAGE = 12;

export const metadata: Metadata = {
  title: "Technioz Blog — Software, AI, Cloud & Mobile Insights",
  description:
    "Case studies, engineering notes, and practical guides on custom software, AI solutions, cloud platforms, and mobile app development.",
  openGraph: buildOpenGraph({
      title: "Technioz Blog — Software, AI, Cloud & Mobile Insights",
      description: "Case studies, engineering notes, and practical guides from the Technioz team.",
      url: "https://technioz.com/blog",
    }),
  alternates: {
    canonical: "https://technioz.com/blog",
  },
};

export const dynamic = "force-dynamic";

function matchesSearch(article: BlogListItem, query: string) {
  return (
    article.title.toLowerCase().includes(query) ||
    article.excerpt.toLowerCase().includes(query) ||
    article.category.toLowerCase().includes(query) ||
    article.tags.some((tag) => tag.toLowerCase().includes(query))
  );
}

export default async function Blog({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string; q?: string }>;
}) {
  const resolvedSearchParams = (await searchParams) ?? {};

  const rawPage = Number(resolvedSearchParams.page ?? "1");
  const currentPage = Number.isFinite(rawPage) && rawPage > 0 ? rawPage : 1;

  // const searchQuery = (resolvedSearchParams.q ?? "").trim();
  // const normalizedQuery = searchQuery.toLowerCase();
  const normalizedQuery = (resolvedSearchParams.q ?? "")
  .trim()
  .toLowerCase()
  .replace(/[?&]+$/g, "");

  const dbArticles = await getAllDbArticles();

  const staticItems: BlogListItem[] = blogPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    date: post.date,
    readTime: post.readTime,
    author: post.author,
    tags: post.tags,
    fromDb: false,
  }));

  const dbItems: BlogListItem[] = dbArticles.map((article) => ({
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    category: article.category,
    date: formatDbArticleDate(article.publishedAt),
    readTime: article.readTime,
    author: { name: article.authorName, role: article.authorRole },
    tags: article.tags,
    fromDb: true,
  }));

  const staticSlugs = new Set(staticItems.map((p) => p.slug));

  const merged: BlogListItem[] = [
    ...staticItems,
    ...dbItems.filter((d) => !staticSlugs.has(d.slug)),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const filtered = normalizedQuery
    ? merged.filter((article) => matchesSearch(article, normalizedQuery))
    : merged;

  const totalPosts = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const start = (safeCurrentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filtered.slice(start, start + POSTS_PER_PAGE);

  return (
    <BlogList
      posts={paginatedPosts}
      totalPosts={totalPosts}
      currentPage={safeCurrentPage}
      totalPages={totalPages}
    />
  );
}