import type { Metadata } from "next";
import { SolutionPage } from "@/components/solution-page";
import { solutions } from "@/lib/solutions-data";

import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

const data = solutions.find((s) => s.slug === "startups")!;

export const metadata: Metadata = {
  title: `${data.title}`,
  description: data.metaDescription,
  openGraph: {
    title: `${data.title}`,
    description: data.metaDescription,
    url: "https://technioz.com/solutions/startups",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://technioz.com/solutions/startups",
  },
};

export default function StartupsPage() {
  return <SolutionPage data={data} />;
}