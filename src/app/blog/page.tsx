import { BlogList } from "@/components/blog-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technioz Blog | Software, AI, Cloud & Mobile Insights",
  description: "Read case studies, engineering notes, and practical guides on custom software, AI solutions, cloud platforms, and mobile app development.",
  openGraph: {
    title: "Technioz Blog | Software, AI, Cloud & Mobile Insights",
    description: "Case studies, engineering notes, and practical guides from the Technioz team.",
    url: "https://technioz.com/blog",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://technioz.com/blog",
  },
};

export default function Blog() {
  return <BlogList />;
}