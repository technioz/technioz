import type { Metadata } from "next";
import { SolutionPage } from "@/components/solution-page";
import { solutions } from "@/lib/solutions-data";

import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

const data = solutions.find((s) => s.slug === "ecommerce")!;

export const metadata: Metadata = {
  title: `${data.title}`,
  description: data.metaDescription,
  openGraph: {
    title: `${data.title}`,
    description: data.metaDescription,
    url: "https://technioz.com/solutions/ecommerce",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://technioz.com/solutions/ecommerce",
  },
};

export default function EcommercePage() {
  return <SolutionPage data={data} />;
}