import type { Metadata } from "next";
import { SolutionPage } from "@/components/solution-page";
import { solutions } from "@/lib/solutions-data";

import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

const data = solutions.find((s) => s.slug === "healthcare")!;

export const metadata: Metadata = {
  title: `${data.title}`,
  description: data.metaDescription,
  openGraph: {
    title: `${data.title}`,
    description: data.metaDescription,
    url: "https://technioz.com/solutions/healthcare",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://technioz.com/solutions/healthcare",
  },
};

export default function HealthcarePage() {
  return <SolutionPage data={data} />;
}