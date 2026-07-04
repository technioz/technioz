import type { Metadata } from "next";
import { SolutionPage } from "@/components/solution-page";
import { solutions } from "@/lib/solutions-data";

const data = solutions.find((s) => s.slug === "education")!;

export const metadata: Metadata = {
  title: `${data.title} | Technioz`,
  description: data.metaDescription,
  keywords: data.keywords,
  openGraph: {
    title: `${data.title} | Technioz`,
    description: data.metaDescription,
    url: "https://technioz.com/solutions/education",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://technioz.com/solutions/education",
  },
};

export default function EducationPage() {
  return <SolutionPage data={data} />;
}