import type { Metadata } from "next";
import { SolutionPage } from "@/components/solution-page";
import { enterpriseData } from "@/lib/solutions-data";

import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: `${enterpriseData.title}`,
  description: enterpriseData.metaDescription,
  openGraph: {
    title: `${enterpriseData.title}`,
    description: enterpriseData.metaDescription,
    url: "https://technioz.com/enterprise",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://technioz.com/enterprise",
  },
};

export default function EnterprisePage() {
  return <SolutionPage data={enterpriseData} />;
}