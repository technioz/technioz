const fs = require('fs');
const path = require('path');

const ROOT = 'https://technioz.com';
const SITEMAP_DATE = new Date().toISOString().split('T')[0];

// Pull slug list from src/lib/blog-data.ts (single source of truth for static posts)
const blogDataPath = path.join(__dirname, '..', 'src', 'lib', 'blog-data.ts');
const blogDataSrc = fs.readFileSync(blogDataPath, 'utf-8');
const blogSlugs = Array.from(
  new Set(
    [...blogDataSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1])
  )
);

// Discover static pages from src/app
const appDir = path.join(__dirname, '..', 'src', 'app');
function walk(dir, prefix = '') {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // dynamic segment: skip (e.g. [slug], [param])
      if (entry.name.startsWith('[')) continue;
      out.push(...walk(full, prefix + '/' + entry.name));
    } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
      out.push(prefix || '/');
    }
  }
  return out;
}
const staticPages = walk(appDir);

const excluded = new Set([
  '/blog', // blog index lives in dynamic sitemap-blog.xml
  '/not-found',
  '/sitemap-blog.xml', // own route
]);

const allPages = staticPages
  .filter((p) => !excluded.has(p))
  .map((p) => p.replace(/\/+/g, '/').replace(/\/$/, '') || '/')
  .filter((p, i, arr) => arr.indexOf(p) === i)
  .sort();

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const sections = [
  { title: 'Primary Pages', priority: (p) => (p === '/' ? '1.0' : '0.8'), freq: (p) => (p === '/' ? 'weekly' : 'monthly'), match: (p) => ['/', '/about', '/services', '/portfolio', '/case-studies', '/resources', '/contact', '/faq'].includes(p) },
  { title: 'Location Landing Pages', priority: () => '0.9', freq: () => 'monthly', match: (p) => p.includes('dubai') || p.includes('uae') },
  { title: 'Service Pages', priority: () => '0.9', freq: () => 'monthly', match: (p) => p.startsWith('/services/') },
  { title: 'Solution Pages', priority: () => '0.8', freq: () => 'monthly', match: (p) => p.startsWith('/solutions/') },
  { title: 'Industry Pages', priority: () => '0.8', freq: () => 'monthly', match: (p) => p.startsWith('/industries/') },
  { title: 'Resource Pages', priority: () => '0.7', freq: () => 'monthly', match: (p) => p.startsWith('/resources/') },
  { title: 'Pillar Pages', priority: () => '0.7', freq: () => 'monthly', match: (p) => ['/custom-software-development', '/ai-solutions', '/cloud-devops', '/security-reliability', '/consulting-strategy', '/data-apis-integrations', '/digital-transformation', '/enterprise', '/industry-solutions', '/web-mobile-app-development', '/ai-development-company-dubai'].includes(p) },
  { title: 'Portfolio Items', priority: () => '0.7', freq: () => 'monthly', match: (p) => p.startsWith('/portfolio/') },
  { title: 'Legal', priority: () => '0.3', freq: () => 'yearly', match: (p) => p === '/privacy' || p === '/terms' },
];

const homepageImage = `      <image:image>
      <image:loc>${ROOT}/og-image.png</image:loc>
    </image:image>`;

let body = '';
for (const section of sections) {
  const pages = allPages.filter(section.match);
  if (pages.length === 0) continue;
  body += `\n  <!-- ${section.title} -->\n`;
  for (const p of pages) {
    const loc = ROOT + p;
    body += `  <url>
    <loc>${escape(loc)}</loc>
    <lastmod>${SITEMAP_DATE}</lastmod>
    <changefreq>${section.freq(p)}</changefreq>
    <priority>${section.priority(p)}</priority>
    `;
    if (p === '/') body += homepageImage + '\n';
  body+= `</url>
`;
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/0.9">${body}</urlset>
`;

const out = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(out, xml);
console.log(`Wrote ${out} with ${allPages.length - 1} non-blog pages (blog posts served by /sitemap-blog.xml).`);

// Also write a sitemap index so Google discovers both files
const indexPath = path.join(__dirname, '..', 'public', 'sitemap-index.xml');
const today = SITEMAP_DATE;
const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${ROOT}/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${ROOT}/sitemap-blog.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>
`;
fs.writeFileSync(indexPath, indexXml);
console.log(`Wrote ${indexPath} (sitemap index).`);
