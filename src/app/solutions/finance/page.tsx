import type { Metadata } from "next";
import { SolutionPage } from "@/components/solution-page";
import { solutions } from "@/lib/solutions-data";

const data = solutions.find((s) => s.slug === "finance")!;

export const metadata: Metadata = {
  title: `${data.title} | Technioz`,
  description: data.metaDescription,
  openGraph: {
    title: `${data.title} | Technioz`,
    description: data.metaDescription,
    url: "https://technioz.com/solutions/finance",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://technioz.com/solutions/finance",
  },
};

export default function FinancePage() {
  return <SolutionPage data={data} />;
}