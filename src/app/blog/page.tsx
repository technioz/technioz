import { BlogList, type BlogListItem } from "@/components/blog-list";
import { blogPosts } from "@/lib/blog-data";
import { getAllDbArticles, formatDbArticleDate } from "@/lib/db-articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technioz Blog — Software, AI, Cloud & Mobile Insights",
  description: "Case studies, engineering notes, and practical guides on custom software, AI solutions, cloud platforms, and mobile app development.",
  openGraph: {
    title: "Technioz Blog — Software, AI, Cloud & Mobile Insights",
    description: "Case studies, engineering notes, and practical guides from the Technioz team.",
    url: "https://technioz.com/blog",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://technioz.com/blog",
  },
};

export const dynamic = "force-dynamic";

export default async function Blog() {
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

  // Static posts take priority if slug collides; DB posts come first by date
  const staticSlugs = new Set(staticItems.map((p) => p.slug));
  const merged: BlogListItem[] = [
    ...staticItems,
    ...dbItems.filter((d) => !staticSlugs.has(d.slug)),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return <BlogList posts={merged} />;
}
