interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  image?: string;
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  image = "https://technioz.com/logo.webp",
}: ArticleJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    image: {
      "@type": "ImageObject",
      url: image,
    },
    author: {
      "@type": "Organization",
      name: "Technioz",
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
