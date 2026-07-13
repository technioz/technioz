#!/usr/bin/env node
/**
 * IndexNow submitter for technioz.com.
 *
 * - Reads URLs from /public/sitemap.xml (static) and /public/sitemap-blog.xml (dynamic).
 * - Dedupes and submits the merged set to the IndexNow API.
 * - Splits into batches of 10,000 (IndexNow limit per request).
 * - Key is read from a {key}.txt file at /public/ (Next.js-served at
 *   https://technioz.com/{key}.txt). Falls back to the repo root for
 *   setups where the file is reverse-proxy-served. No env var dependency.
 *
 * IndexNow pings Bing, Yandex, Naver, Seznam.cz, Amazon, Yep. Google is
 * NOT a member — for Google indexing, use the URL Inspection API.
 *
 * Submits to each engine endpoint in parallel so a Bing outage doesn't
 * fail the whole submission. Per the protocol docs, 200/202 = success;
 * any 4xx/5xx from a specific engine is logged but does not block the
 * others.
 *
 * Run after build/prebuild:
 *   node scripts/submit-indexnow.js
 *
 * If the key file is missing, the script logs and exits 0 (no-op) so it
 * can be safely wired into the build pipeline without breaking local
 * development.
 */
const fs = require("fs");
const path = require("path");
const https = require("https");

const SITE_HOST = process.env.SITE_HOST || "technioz.com";

// Per the IndexNow FAQ, the participating search engines accept POSTs
// at the following endpoints. Posting to one endpoint shares the
// submission with all other participating engines automatically.
const ENDPOINTS = [
  { name: "indexnow.org", host: "api.indexnow.org" },
  { name: "bing",         host: "www.bing.com" },
  { name: "yandex",       host: "yandex.com" },
  { name: "naver",        host: "searchadvisor.naver.com" },
  { name: "seznam",       host: "search.seznam.cz" },
  { name: "amazon",       host: "indexnow.amazonbot.amazon" },
  { name: "yep",          host: "indexnow.yep.com" },
];

function readKeyFile() {
  const root = path.join(__dirname, "..");
  const candidates = [path.join(root, "public"), root];
  const keyFileName = /^[0-9a-f-]{8,128}\.txt$/i;
  for (const dir of candidates) {
    if (!fs.existsSync(dir)) continue;
    const found = fs.readdirSync(dir).find((f) => keyFileName.test(f));
    if (found) return fs.readFileSync(path.join(dir, found), "utf8").trim();
  }
  return null;
}

const KEY = readKeyFile();

function extractUrlsFromSitemap(sitemapPath) {
  if (!fs.existsSync(sitemapPath)) return [];
  const xml = fs.readFileSync(sitemapPath, "utf8");
  const matches = xml.matchAll(/<loc>([^<]+)<\/loc>/g);
  return [...matches].map((m) => m[1].trim());
}

function submitToEndpoint(endpoint, body) {
  return new Promise((resolve) => {
    const req = https.request(
      {
        method: "POST",
        hostname: endpoint.host,
        path: "/indexnow",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Content-Length": Buffer.byteLength(body),
        },
        timeout: 15000,
      },
      (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => resolve({ name: endpoint.name, status: res.statusCode, body: data }));
      }
    );
    req.on("error", (err) => resolve({ name: endpoint.name, status: 0, body: err.message }));
    req.on("timeout", () => { req.destroy(new Error("timeout")); });
    req.write(body);
    req.end();
  });
}

async function submitBatch(urls) {
  const body = JSON.stringify({
    host: SITE_HOST,
    key: KEY,
    keyLocation: `https://${SITE_HOST}/${KEY}.txt`,
    urlList: urls,
  });

  const results = await Promise.all(
    ENDPOINTS.map((e) => submitToEndpoint(e, body))
  );

  const successes = results.filter((r) => r.status === 200 || r.status === 202);
  const failures  = results.filter((r) => !(r.status === 200 || r.status === 202));

  return { successes, failures, count: urls.length };
}

async function main() {
  if (!KEY) {
    console.log("[indexnow] No {key}.txt file at /public/ or project root — skipping (no-op).");
    return;
  }

  const staticSitemap = path.join(__dirname, "..", "public", "sitemap.xml");
  const blogSitemap = path.join(__dirname, "..", "public", "sitemap-blog.xml");
  const dynamicBlogSitemap = path.join(__dirname, "..", ".next", "server", "app", "sitemap-blog.xml.body");

  let urls = [
    ...extractUrlsFromSitemap(staticSitemap),
    ...extractUrlsFromSitemap(blogSitemap),
  ];
  if (urls.length === 0 && fs.existsSync(dynamicBlogSitemap)) {
    urls = extractUrlsFromSitemap(dynamicBlogSitemap);
  }

  const seen = new Set();
  const filtered = [];
  for (const u of urls) {
    const normalized = u.replace(/^http:\/\//, "https://").replace(/\/+$/, "") || u;
    if (!seen.has(normalized)) {
      seen.add(normalized);
      filtered.push(normalized);
    }
  }

  if (filtered.length === 0) {
    console.log("[indexnow] No URLs found in sitemaps. Skipping.");
    return;
  }

  console.log(`[indexnow] Submitting ${filtered.length} URLs for ${SITE_HOST} to ${ENDPOINTS.length} endpoints`);
  const batches = [];
  for (let i = 0; i < filtered.length; i += 10000) {
    batches.push(filtered.slice(i, i + 10000));
  }

  let allOk = true;
  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    try {
      const result = await submitBatch(batch);
      const successList = result.successes.map((r) => `${r.name}:${r.status}`).join(", ");
      console.log(`[indexnow] Batch ${i + 1}/${batches.length} (${result.count} URLs) — accepted by: ${successList || "none"}`);
      for (const f of result.failures) {
        console.log(`  - ${f.name}: ${f.status} ${f.body.slice(0, 150)}`);
      }
      if (result.successes.length === 0) allOk = false;
    } catch (err) {
      console.error(`[indexnow] Batch ${i + 1} failed:`, err.message);
      allOk = false;
    }
  }

  if (!allOk) process.exitCode = 1;
}

main();
