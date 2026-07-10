import type { Metadata } from "next";
import { SolutionPage } from "@/components/solution-page";
import { enterpriseData } from "@/lib/solutions-data";

export const metadata: Metadata = {
  title: `${enterpriseData.title} | Technioz`,
  description: enterpriseData.metaDescription,
  openGraph: {
    title: `${enterpriseData.title} | Technioz`,
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