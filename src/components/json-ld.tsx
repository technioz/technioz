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
          "Full-cycle software development company. One partner for web, mobile, AI, and cloud. 5+ projects shipped, 5+ engineers on deck, 98% on-time delivery.",
        foundingDate: "2024",
        founders: [
          { "@type": "Person", name: "Gaurav Bhatia" },
          { "@type": "Person", name: "Pallavi Mishra" },
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
        "@type": "Service",
        "@id": "https://technioz.com/#web-development",
        name: "Web Development",
        provider: { "@id": "https://technioz.com/#organization" },
        url: "https://technioz.com/services/web-development",
        description:
          "Custom web applications built with React, Next.js, Node.js, and TypeScript.",
        areaServed: "Worldwide",
        category: "Software Development",
      },
      {
        "@type": "Service",
        "@id": "https://technioz.com/#mobile-development",
        name: "Mobile App Development",
        provider: { "@id": "https://technioz.com/#organization" },
        url: "https://technioz.com/services/mobile-development",
        description:
          "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
        areaServed: "Worldwide",
        category: "Mobile App Development",
      },
      {
        "@type": "Service",
        "@id": "https://technioz.com/#ai-solutions",
        name: "AI & Machine Learning Solutions",
        provider: { "@id": "https://technioz.com/#organization" },
        url: "https://technioz.com/services/ai-solutions",
        description:
          "NLP, computer vision, predictive analytics, chatbots, and RPA solutions.",
        areaServed: "Worldwide",
        category: "Artificial Intelligence",
      },
      {
        "@type": "Service",
        "@id": "https://technioz.com/#cloud-services",
        name: "Cloud Services",
        provider: { "@id": "https://technioz.com/#organization" },
        url: "https://technioz.com/services/cloud-services",
        description:
          "AWS, Azure, GCP migration, DevOps, Kubernetes, and serverless architecture.",
        areaServed: "Worldwide",
        category: "Cloud Computing",
      },
      {
        "@type": "Service",
        "@id": "https://technioz.com/#it-consulting",
        name: "IT Consulting",
        provider: { "@id": "https://technioz.com/#organization" },
        url: "https://technioz.com/services/it-consulting",
        description:
          "Technology strategy, digital transformation, architecture review, vendor selection.",
        areaServed: "Worldwide",
        category: "IT Consulting",
      },
      {
        "@type": "Service",
        "@id": "https://technioz.com/#cloud-migration",
        name: "Cloud Migration",
        provider: { "@id": "https://technioz.com/#organization" },
        url: "https://technioz.com/services/cloud-migration",
        description:
          "Migrate applications and databases to AWS, Azure, and Google Cloud with minimal downtime.",
        areaServed: "Worldwide",
        category: "Cloud Computing",
      },
      {
        "@type": "Service",
        "@id": "https://technioz.com/#devops-services",
        name: "DevOps Services",
        provider: { "@id": "https://technioz.com/#organization" },
        url: "https://technioz.com/services/devops-services",
        description:
          "CI/CD pipelines, Kubernetes, infrastructure as code, and observability for faster releases.",
        areaServed: "Worldwide",
        category: "DevOps",
      },
      {
        "@type": "Service",
        "@id": "https://technioz.com/#aws-consulting",
        name: "AWS Consulting",
        provider: { "@id": "https://technioz.com/#organization" },
        url: "https://technioz.com/services/aws-consulting",
        description:
          "AWS architecture design, migration, serverless, cost optimization, and security hardening.",
        areaServed: "Worldwide",
        category: "Cloud Computing",
      },
      {
        "@type": "Service",
        "@id": "https://technioz.com/#ai-chatbot-development",
        name: "AI Chatbot Development",
        provider: { "@id": "https://technioz.com/#organization" },
        url: "https://technioz.com/services/ai-chatbot-development",
        description:
          "Custom AI chatbots for customer support, lead generation, and internal help desks.",
        areaServed: "Worldwide",
        category: "Artificial Intelligence",
      },
      {
        "@type": "Service",
        "@id": "https://technioz.com/#ai-agent-development",
        name: "AI Agent Development",
        provider: { "@id": "https://technioz.com/#organization" },
        url: "https://technioz.com/services/ai-agent-development",
        description:
          "Autonomous AI agents that take real actions across APIs, documents, and business tools.",
        areaServed: "Worldwide",
        category: "Artificial Intelligence",
      },
      {
        "@type": "Service",
        "@id": "https://technioz.com/#rag-system-development",
        name: "RAG System Development",
        provider: { "@id": "https://technioz.com/#organization" },
        url: "https://technioz.com/services/rag-system-development",
        description:
          "Retrieval-augmented generation systems that ground LLM answers in private knowledge bases.",
        areaServed: "Worldwide",
        category: "Artificial Intelligence",
      },
      {
        "@type": "Service",
        "@id": "https://technioz.com/#llm-integration",
        name: "LLM Integration",
        provider: { "@id": "https://technioz.com/#organization" },
        url: "https://technioz.com/services/llm-integration",
        description:
          "Integrate OpenAI, Claude, Gemini, and Azure OpenAI securely into your products.",
        areaServed: "Worldwide",
        category: "Artificial Intelligence",
      },
      {
        "@type": "Service",
        "@id": "https://technioz.com/#ai-workflow-automation",
        name: "AI Workflow Automation",
        provider: { "@id": "https://technioz.com/#organization" },
        url: "https://technioz.com/services/ai-workflow-automation",
        description:
          "Automate document processing, classification, routing, and intelligent decision workflows.",
        areaServed: "Worldwide",
        category: "Artificial Intelligence",
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
        spatialCoverage: "Worldwide",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
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
