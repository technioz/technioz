import { blogPosts } from "@/lib/blog-data";

export function BlogPostingJsonLd({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return null;

  const wordCount = post.blocks.reduce((count, block) => {
    if (block.type === "p" || block.type === "h2" || block.type === "h3") return count + block.value.split(" ").length;
    if (block.type === "ul") return count + block.items.join(" ").split(" ").length;
    if (block.type === "code") return count + block.value.split(" ").length;
    return count;
  }, 0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://technioz.com/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://technioz.com/blog/${post.slug}`,
    },
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    wordCount,
    timeRequired: post.readTime,
    author: {
      "@type": "Person",
      name: post.author.name,
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
    keywords: post.tags.join(", "),
    articleSection: post.category,
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
