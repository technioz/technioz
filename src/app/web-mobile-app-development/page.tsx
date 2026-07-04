import { PillarPage, type PillarData } from "@/components/pillar-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web & Mobile App Development Guide | Technioz",
  description: "The process, technology stack, and team approach for building modern web and mobile apps that users love.",
  openGraph: {
    title: "Web & Mobile App Development Guide | Technioz",
    description:
      "What founders and marketing managers should know about building web and mobile apps in 2026.",
    url: "https://technioz.com/web-mobile-app-development",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://technioz.com/web-mobile-app-development",
  },
};

const data: PillarData = {
  title: "Web & Mobile App Development Guide",
  description:
    "A practical guide for founders and product owners. Learn how web apps, mobile apps, and PWAs differ, how the development process works, and what technology stack fits your timeline.",
  heroLabel: "App Development",
  heroIcon: "📱",
  sections: [
    {
      heading: "Web apps vs mobile apps vs progressive web apps",
      content: [
        "A web app runs in a browser and works on any device. A mobile app is installed through an app store and can use native features like cameras, GPS, and push notifications. A Progressive Web App sits in between: it runs in the browser but can be installed, work offline, and send notifications.",
      ],
      points: [
        "Choose a web app for fast delivery, easy updates, and broad reach",
        "Choose a mobile app for deep device integration or app store distribution",
        "Choose a PWA for content, commerce, or tools where installation friction matters",
      ],
    },
    {
      heading: "How the development process works",
      content: [
        "A solid project usually moves through discovery, UX and UI design, technical planning, development, testing, and launch with iteration. The difference between apps that launch and apps that stagnate usually comes down to how well the team defines the problem and ships iteratively.",
      ],
      points: [
        "Discovery: define the problem, target users, and success metrics",
        "Design: map user flows, wireframes, and high-fidelity screens",
        "Planning: choose the stack, architecture, and integrations",
        "Development: build the frontend, backend, APIs, and database",
        "Testing and QA: functional, performance, security, and usability testing",
        "Launch and iteration: release, monitor, and improve based on real usage",
      ],
    },
    {
      heading: "Choosing the technology stack",
      content: [
        "The right stack depends on your timeline, budget, and the experience you need. For web apps, frameworks like Next.js and React are proven for performance and SEO. For mobile, React Native and Flutter let one codebase serve both iOS and Android, which is ideal for MVPs and scale. Native development is best when you need maximum polish or deep hardware access.",
      ],
    },
    {
      heading: "MVP development and post-launch success",
      content: [
        "A Minimum Viable Product should do one thing excellently for a specific group of users, not everything poorly for everyone. Define the smallest set of features that proves value, then add based on feedback.",
        "At Technioz, we build web and mobile apps with a product mindset. Our work includes booking platforms, e-commerce apps, SaaS dashboards, and AI-powered tools. We handle design, development, testing, launch, and ongoing support so the product keeps improving after release.",
      ],
    },
  ],
  ctaHeading: "Launch web and mobile apps that users love",
  ctaBody:
    "We build responsive web apps, cross-platform mobile apps, and MVPs with a product mindset — from discovery to post-launch iteration.",
  ctaHref: "/services/web-development",
  ctaText: "Explore app development",
  relatedLinks: [
    { title: "Mobile app development process step-by-step", href: "/blog/mobile-app-development-process" },
    { title: "Web app development process explained", href: "/blog/web-app-development-process" },
    { title: "React Native vs Flutter in 2026", href: "/blog/react-native-vs-flutter-2026" },
    { title: "How much does it cost to build a mobile app in Dubai?", href: "/blog/cost-to-build-mobile-app-dubai" },
  ],
};

export default function WebMobilePillar() {
  return <PillarPage data={data} parent={{ href: "/services", label: "Services" }} parentLabel="App Development" />;
}
