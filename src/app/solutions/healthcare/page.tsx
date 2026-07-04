import type { Metadata } from "next";
import { SolutionPage } from "@/components/solution-page";
import { solutions } from "@/lib/solutions-data";

const data = solutions.find((s) => s.slug === "healthcare")!;

export const metadata: Metadata = {
  title: `${data.title} | Technioz`,
  description: data.metaDescription,
  keywords: data.keywords,
  openGraph: {
    title: `${data.title} | Technioz`,
    description: data.metaDescription,
    url: "https://technioz.com/solutions/healthcare",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://technioz.com/solutions/healthcare",
  },
};

export default function HealthcarePage() {
  return <SolutionPage data={data} />;
}