import type { Metadata } from "next";

const SITE_NAME = "Technioz";
const SITE_LOCALE = "en_US";
const DEFAULT_OG_IMAGE = "/og-image.png";
const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;
const OG_IMAGE_ALT = "Technioz — Custom software, SaaS, and AI for startups and SMBs";

/**
 * Build a complete `openGraph` block. The Next.js metadata API does NOT
 * merge per-page openGraph with the parent layout's openGraph — it
 * replaces. So every per-page openGraph must repeat all 7-8 fields
 * or fall back to this helper. Use the helper for every page that
 * needs to override the default OG title/description/url while
 * keeping the image, site name, locale, and type from the layout.
 *
 * Ahrefs Site Audit flags any page missing one of:
 *   og:title, og:description, og:url, og:image, og:type, og:site_name,
 *   og:locale, og:image:width, og:image:height, og:image:alt
 *
 * Example:
 *   openGraph: buildOpenGraph({
 *     title: "Contact Us",
 *     description: "Get in touch with Technioz",
 *     url: "https://technioz.com/contact",
 *   }),
 */
export function buildOpenGraph({
  title,
  description,
  url,
  type = "website",
  image = DEFAULT_OG_IMAGE,
  imageAlt = OG_IMAGE_ALT,
  imageWidth = OG_IMAGE_WIDTH,
  imageHeight = OG_IMAGE_HEIGHT,
  publishedTime,
  authors,
}: {
  title: string;
  description: string;
  url: string;
  type?: "website" | "article";
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  publishedTime?: string;
  authors?: string[];
}): NonNullable<Metadata["openGraph"]> {
  const og: NonNullable<Metadata["openGraph"]> = {
    type,
    locale: SITE_LOCALE,
    siteName: SITE_NAME,
    title,
    description,
    url,
    images: [
      {
        url: image,
        width: imageWidth,
        height: imageHeight,
        alt: imageAlt,
      },
    ],
  };
  if (type === "article") {
    (og as Record<string, unknown>).publishedTime = publishedTime;
    (og as Record<string, unknown>).authors = authors;
  }
  return og;
}

export function buildTwitterCard({
  title,
  description,
  image = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  image?: string;
}): NonNullable<Metadata["twitter"]> {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  };
}

export const DEFAULT_OG = {
  type: "website",
  locale: SITE_LOCALE,
  siteName: SITE_NAME,
  image: DEFAULT_OG_IMAGE,
  imageAlt: OG_IMAGE_ALT,
  imageWidth: OG_IMAGE_WIDTH,
  imageHeight: OG_IMAGE_HEIGHT,
} as const;
