import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";

import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Case Studies & Portfolio",
  description: "Real projects with real numbers: HattaFoodHub (10,000+ concurrent orders), Al Khanjry ticketing ($1M+ in sales), and more. See how we build.",
  openGraph: buildOpenGraph({
      title: "Portfolio | Technioz Software Projects",
      description: "Explore Technioz software projects: scalable web apps, mobile apps, AI platforms, and cloud solutions.",
      url: "https://technioz.com/portfolio",
    }),
  alternates: {
    canonical: "https://technioz.com/portfolio",
  },
};

interface Project {
  slug: string;
  name: string;
  title: string;
  desc: string;
  techs: string[];
  featured: boolean;
  conceptBuild?: boolean;
  image: string;
}

const projects: Project[] = [
  {
    slug: "food-delivery-app",
    name: "HattaFoodHub",
    title: "Food Delivery App",
    desc: "A scalable food delivery platform connecting restaurants, couriers, and customers with real-time order tracking and seamless payments.",
    techs: ["React Native", "Laravel", "MySQL", "Firebase"],
    featured: true,
    image: "/assets/hatta-food.webp",
  },
  {
    slug: "folio-ai-website-builder",
    name: "Folio",
    title: "AI Website Builder",
    desc: "An AI-powered website builder that creates beautiful, deploy-ready sites from a social-media link, a simple document, or a short prompt — in one click. (Concept build)",
    techs: ["Next.js", "TypeScript", "OpenAI", "Tailwind CSS"],
    featured: false,
    conceptBuild: true,
    image: "/assets/folio.webp",
  },
  {
    slug: "alkhanjry-transport",
    name: "Al Khanjry Groups",
    title: "Transport Ticketing System",
    desc: "An online bus booking portal connecting the UAE and Oman with multi-role management, branch operations, and real-time ticket management.",
    techs: ["Laravel", "MySQL", "ReactJS"],
    featured: false,
    image: "/assets/booking.webp",
  },
  {
    slug: "sky-growers",
    name: "Sky Growers",
    title: "Farm-Fresh Produce Platform",
    desc: "A farm-to-table e-commerce platform for a family-owned regenerative farm in Christchurch, featuring seasonal produce, bulk wholesale, and direct delivery.",
    techs: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    featured: false,
    image: "/assets/sky-growers.webp",
  },
];

export default function Portfolio() {
  return (
      <>
        <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Portfolio", href: "/portfolio" }]} />
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[700px]">
            <div className="flex items-center gap-2 text-black-300 p5">
              <Link href="/" className="hover:text-cobolt-500">Home</Link> / <span>Portfolio</span>
            </div>
            <span className="e1 text-black-300">Our Portfolio</span>
            <h1 className="h2 text-black-500">Showcasing Our Success Stories</h1>
            <p className="p3 text-black-400">Explore our portfolio of successful software development projects that have helped businesses transform their operations and achieve their goals.</p>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-10">Featured Projects</h2>
          <p className="p2 text-black-300 mb-8 max-w-[600px]">Our most impactful and innovative projects that showcase our expertise</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter((p) => p.featured).map((project) => (
              <ProjectCard key={project.slug} project={project} featured />
            ))}
          </div>
        </div>
      </section>

      {/* All */}
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-10">All Projects</h2>
          <div className="flex gap-4 mb-8">
            {["All Projects", "Web Applications", "Mobile Apps"].map((f) => (
              <button key={f} className={`p4 ${f === "All Projects" ? "text-cobolt-500 border-b-2 border-cobolt-500" : "text-black-300 hover:text-cobolt-500"} pb-2`}>{f}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-[600px]">
            <h2 className="h3 !text-white-100 mb-4">Ready for a project worth showcasing?</h2>
            <p className="p3 text-white-100/80">Tell us what you are building — we will map the first three milestones on a free call.</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Plan your build</Link>
            <Link href="/services" className="cta-secondary-dark !border-white-100 !text-white-100 hover:!bg-white-100 hover:!text-cobolt-500">Our Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectCard({ project, featured }: { project: (typeof projects)[0]; featured?: boolean }) {
  return (
    <Link href={`/portfolio/${project.slug}`} className={`bg-white-200 rounded-sm overflow-hidden border border-neutral-300 hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group ${featured ? "lg:col-span-1" : ""}`}>
      <div className="relative aspect-[16/10] bg-neutral-200 overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} — ${project.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500"
        />
      </div>
      <div className="p-[24px] lg:p-[32px] flex flex-col gap-[16px]">
        <div className="flex items-center gap-2">
          {featured && <span className="e1 text-cobolt-500">Featured</span>}
          {project.conceptBuild && <span className="e1 text-cobolt-500">Concept build</span>}
        </div>
        <div>
          <span className="p5 text-black-300">{project.name}</span>
          <h3 className="font-display text-[24px] leading-none tracking-[-1.2px] text-black-500 mt-1">{project.title}</h3>
        </div>
        <p className="p4 text-black-400">{project.desc}</p>
        <div className="flex flex-wrap gap-2">
          {project.techs.map((t) => (
            <span key={t} className="text-[12px] font-mono uppercase tracking-[1px] text-cobolt-500 bg-cobolt-500/5 px-2 py-1 rounded-sm">{t}</span>
          ))}
        </div>
        <span className="e2 text-cobolt-500 group-hover:underline underline-offset-4">View {(featured ? "Case Study" : "Details")}</span>
      </div>
    </Link>
  );
}