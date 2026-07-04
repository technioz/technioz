import type { Metadata } from "next";
import { SolutionPage } from "@/components/solution-page";
import { solutions } from "@/lib/solutions-data";

const data = solutions.find((s) => s.slug === "logistics")!;

export const metadata: Metadata = {
  title: `${data.title} | Technioz`,
  description: data.metaDescription,
  keywords: data.keywords,
  openGraph: {
    title: `${data.title} | Technioz`,
    description: data.metaDescription,
    url: "https://technioz.com/solutions/logistics",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://technioz.com/solutions/logistics",
  },
};

export default function LogisticsPage() {
  return <SolutionPage data={data} />;
}