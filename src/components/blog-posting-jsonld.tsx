import { blogPosts } from "@/lib/blog-data";

export function BlogPostingJsonLd({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://technioz.com/blog/${post.slug}`,
    datePublished: new Date(post.date).toISOString(),
    author: {
      "@type": "Organization",
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
