export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://technioz.com/#organization",
        name: "Technioz",
        url: "https://technioz.com",
        logo: "https://technioz.com/logo.webp",
        description:
          "Full-cycle software development company. One partner for web, mobile, AI, and cloud. 5+ projects shipped, 5+ experience, 98% on-time delivery.",
        foundingDate: "2024",
        founders: [
          { "@type": "Person", name: "Gaurav Bhatia" }
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: "info@technioz.com",
            telephone: "+971-56-945-1930",
            areaServed: ["AE", "OM", "BH", "QA", "SA"],
            availableLanguage: "English",
          },
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: "+91-98036-83577",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi", "Punjabi"],
          },
        ],
        areaServed: [
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "Oman" },
          { "@type": "Country", name: "India" },
          { "@type": "Country", name: "Saudi Arabia" },
          { "@type": "Country", name: "Qatar" },
          { "@type": "Country", name: "Bahrain" },
          { "@type": "Place", name: "Worldwide" },
        ],
        sameAs: [
          "https://x.com/technioz",
          "https://www.instagram.com/technioz",
          "https://www.linkedin.com/company/technioz",
          "https://github.com/technioz",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://technioz.com/#website",
        url: "https://technioz.com",
        name: "Technioz",
        description:
          "Full-cycle software development for growing businesses.",
        publisher: { "@id": "https://technioz.com/#organization" },
        inLanguage: "en-US",
      },
      {
        "@type": "FAQPage",
        "@id": "https://technioz.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How long does a typical project take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Project timelines vary based on complexity, but most projects range from 2-6 months from start to finish.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide ongoing support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we offer comprehensive support and maintenance packages to keep your software running smoothly.",
            },
          },
          {
            "@type": "Question",
            name: "Can you work with our existing team?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we can integrate with your existing development team or work as your dedicated development partner.",
            },
          },
          {
            "@type": "Question",
            name: "How much does custom software development cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Project costs vary by scope. Most projects range from $15,000 to $100,000+. We provide detailed fixed quotes after the discovery phase.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work with startups?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, startups are our primary clients. We offer MVP packages starting at $15,000 with fast 8-12 week timelines.",
            },
          },
          {
            "@type": "Question",
            name: "What technologies do you use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We use modern, production-grade technologies including React, Next.js, TypeScript, Node.js, React Native, Flutter, AWS, Docker, Kubernetes, MongoDB, PostgreSQL, and more.",
            },
          },
        ],
      },
      {
        "@type": "SpecialAnnouncement",
        name: "Free 30-Minute Roadmap Session",
        url: "https://calendly.com/technioztech/30min",
        text: "Get a free 30-minute consultation and project roadmap. No contracts, no obligations — just a clear plan you can take to any team.",
        datePosted: "2026-01-01",
        spatialCoverage: { "@type": "Place", name: "Worldwide" },
        keywords: "free consultation, software development, project roadmap, 30 minutes",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
