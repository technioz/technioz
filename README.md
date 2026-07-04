# Technioz Portfolio Website

A fast, SEO-optimized marketing and portfolio site for **Technioz** — a software development company building custom apps, AI solutions, cloud & DevOps systems, and industry-specific digital products.

**Primary contact:** Gaurav Bhatia — [gaurav.bhatia@technioz.com](mailto:gaurav.bhatia@technioz.com)

---

## Tech Stack

- **Framework:** Next.js 16.2.6 (App Router, React 19, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** AssemblyAI design system — Oceanic Text, UN 11ST, Modern Gothic Mono
- **Icons & Illustrations:** Custom SVG diagrams, `lucide-react`
- **SEO:** OpenGraph, Twitter Cards, canonical URLs, JSON-LD (Organization, WebSite, Breadcrumb, BlogPosting, Article, Service, FAQ)

---

## Getting Started

Install dependencies once:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build & Quality Checks

```bash
# Production build
npm run build

# TypeScript + ESLint
npm run lint

# Start production server locally
npm run start
```

The site is statically generated at build time and exports **65+ pages**.

---

## Project Structure

```
src/
  app/                # Next.js App Router pages
    page.tsx          # Homepage
    layout.tsx        # Root layout, metadata, JSON-LD
    blog/             # Blog listing + article pages
    case-studies/     # Case-study listing
    portfolio/        # Portfolio project detail pages
    services/         # Service hub + sub-service pages
    solutions/        # Industry solution pages
    *-company-dubai/  # Dubai location landing pages
  components/         # Shared UI components
  lib/                # Data files and utilities
public/               # Static assets, sitemap, images
```

---

## Content Architecture

The site follows a topic-cluster SEO model:

- **Pillar hubs** — `/custom-software-development`, `/ai-solutions`, `/cloud-devops`, `/web-mobile-app-development`, `/industry-solutions`
- **Sub-service pages** — e.g. `/services/reactjs-development`, `/services/aws-consulting`, `/services/ai-chatbot-development`
- **Location pages** — e.g. `/software-development-company-dubai`
- **Solutions** — e.g. `/solutions/healthcare`, `/solutions/finance`
- **Blog / Case Studies / Portfolio** — supporting content and proof points

---

## Contact

For questions, deployment, or content updates, contact:

**Gaurav Bhatia**  
Email: [gaurav.bhatia@technioz.com](mailto:gaurav.bhatia@technioz.com)

---

## Deploy

Recommended platforms:

- [Vercel](https://vercel.com) (Next.js-native)
- Any Node.js host supporting `next start`

Set environment variables as needed for analytics, contact forms, or external services.
