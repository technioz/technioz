import { blogPosts } from "@/lib/blog-data";
import type { DbArticle } from "@/lib/db-articles";

export function BlogPostingJsonLd({
  slug,
  title,
  excerpt,
  date,
  readTime,
  authorName,
  category,
  wordCount,
}: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  authorName: string;
  category: string;
  wordCount: number;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt,
    url: `https://technioz.com/blog/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://technioz.com/blog/${slug}`,
    },
    datePublished: new Date(date).toISOString(),
    dateModified: new Date(date).toISOString(),
    wordCount,
    timeRequired: readTime,
    author: {
      "@type": "Person",
      name: authorName,
      url: "https://technioz.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Technioz",
      url: "https://technioz.com",
      logo: {
        "@type": "ImageObject",
        url: "https://technioz.com/logo.webp",
      },
    },
    image: {
      "@type": "ImageObject",
      url: "https://technioz.com/logo.webp",
    },
    articleSection: category,
    inLanguage: "en-US",
    isAccessibleForFree: true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function StaticBlogPostingJsonLd({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return null;

  const wordCount = post.blocks.reduce((count, block) => {
    if (block.type === "p" || block.type === "h2" || block.type === "h3") return count + block.value.split(" ").length;
    if (block.type === "ul") return count + block.items.join(" ").split(" ").length;
    if (block.type === "code") return count + block.value.split(" ").length;
    return count;
  }, 0);

  return (
    <BlogPostingJsonLd
      slug={post.slug}
      title={post.title}
      excerpt={post.excerpt}
      date={post.date}
      readTime={post.readTime}
      authorName={post.author.name}
      category={post.category}
      wordCount={wordCount}
    />
  );
}

export function DbBlogPostingJsonLd({ article }: { article: DbArticle }) {
  const wordCount = article.contentHtml
    ? article.contentHtml.replace(/<[^>]*>/g, "").split(/\s+/).length
    : 0;

  return (
    <BlogPostingJsonLd
      slug={article.slug}
      title={article.title}
      excerpt={article.excerpt}
      date={article.publishedAt.toISOString()}
      readTime={article.readTime}
      authorName={article.authorName}
      category={article.category}
      wordCount={wordCount}
    />
  );
}
