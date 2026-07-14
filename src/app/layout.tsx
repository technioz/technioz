import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://technioz.com"),
  title: {
    default: "Technioz - Innovative Software Development & IT Solutions",
    template: "%s | Technioz",
  },
  description:
    "Technioz builds custom web apps, mobile apps, AI solutions, and cloud software for startups and SMBs. Founded 2024. Book a free 30-minute consultation.",
  authors: [{ name: "Technioz Team", url: "https://technioz.com" }],
  creator: "Technioz",
  publisher: "Technioz",
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
  },
  openGraph: buildOpenGraph({
    title: "Technioz - Innovative Software Development & IT Solutions",
    description:
      "Technioz builds custom web applications, mobile apps, AI solutions, and cloud software for startups and SMBs. Founded in 2024. Book a free 30-minute consultation.",
    url: "https://technioz.com",
  }),
  twitter: buildTwitterCard({
    title: "Technioz - Innovative Software Development & IT Solutions",
    description:
      "Technioz builds custom web applications, mobile apps, AI solutions, and cloud software for startups and SMBs. Founded in 2024. Book a free 30-minute consultation.",
  }),
  // Self-referencing canonicals are auto-generated from metadataBase + route path.
  // Do NOT set a root canonical here — that would make every page canonicalize to the homepage.
  alternates: {},
  verification: {
    google: "e6DVDREsIqIoZ76a5sakPxFSgbwAFzlstG0_yb_2QDs",
    other: {
      "msvalidate.01": "815380119EFE87A1BC1C3A90FA4B6EB6",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <JsonLd />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://umami.technioz.com/script.js"
          data-website-id="d53eda4e-035b-4d79-ad99-08f80ebb4727"
          strategy="afterInteractive"
        />
        <SpeedInsights />
      </body>
    </html>
  );
}
