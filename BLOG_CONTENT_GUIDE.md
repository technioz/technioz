# Blog Content Creation Guide

## SEO Metadata (Every Article)

### generateMetadata (page.tsx)
```ts
title: `${post.title} | Technioz Blog`,
description: post.excerpt,
keywords: post.tags.join(", "),
robots: { index: true, follow: true },
openGraph: {
  title: post.title,
  description: post.excerpt,
  url: `https://technioz.com/blog/${post.slug}`,
  siteName: "Technioz",
  type: "article",
  publishedTime: new Date(post.date).toISOString(),
  authors: [post.author.name],
  images: [{ url: "/logo.webp", width: 256, height: 71, alt: post.imageAlt }],
},
twitter: {
  card: "summary_large_image",
  title: post.title,
  description: post.excerpt,
  images: ["/logo.webp"],
},
alternates: { canonical: url },
```

### BlogPostingJsonLd Schema
- `@type: "BlogPosting"`
- `headline`, `description`, `url`
- `mainEntityOfPage` with WebPage `@id`
- `datePublished`, `dateModified`
- `wordCount` (calculated from blocks)
- `timeRequired` (readTime)
- `author` (Person), `publisher` (Organization with logo)
- `image`, `keywords`, `articleSection`
- `inLanguage: "en-US"`, `isAccessibleForFree: true`

---

## Copywriting Framework

### Structure
1. **Hook** — Open with the reader's pain point or question
2. **Problem** — Articulate their situation better than they can
3. **Solution** — Bridge to your approach
4. **Details** — 3-5 key sections with H2/H3
5. **FAQ** — 3-5 questions for AEO/GEO optimization
6. **CTA** — Clear next step

### Principles
- **Specificity** — Use exact numbers, ranges, percentages
- **Benefits over features** — What it means for the customer
- **Active voice** — "We build" not "Software is built"
- **Confident tone** — Remove "almost", "very", "really"
- **Simple language** — "Use" not "utilize"

### Internal Links
Use markdown-style format in `p` blocks:
```
[anchor text](/target-path)
```
Renders as: `<Link href="/target-path">anchor text</Link>`

---

## ContentBlock Types
```ts
{ type: "h2", value: "Section Title" }
{ type: "h3", value: "Subsection Title" }
{ type: "p", value: "Paragraph text with [links](/path) inline." }
{ type: "ul", items: ["Item 1", "Item 2"] }
{ type: "code", value: "code block" }
```

---

## Article Checklist
- [ ] 1500-2000 words
- [ ] SEO metadata complete (title, description, keywords, OG, Twitter, canonical)
- [ ] BlogPostingJsonLd schema
- [ ] Internal links to pillar page and related services
- [ ] FAQ section (3-5 questions)
- [ ] Strong CTA at the end
- [ ] Category matches existing serviceCta in page.tsx
- [ ] Category added to categories array in blog-data.ts
- [ ] Build passes (npm run build && npm run lint)
