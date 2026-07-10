import { blogPosts } from "@/lib/blog-data";
import { getDbArticleSlugs } from "@/lib/db-articles";

export async function GET() {
  const staticSlugs = blogPosts.map((p) => p.slug);
  const dbSlugs = await getDbArticleSlugs();

  const allSlugs = Array.from(new Set([...staticSlugs, ...dbSlugs]));

  const xml = `\<?xml version="1.0" encoding="UTF-8"?\>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allSlugs
  .map(
    (slug) => `  <url>
    <loc>https://technioz.com/blog/${slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
