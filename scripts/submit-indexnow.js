#!/usr/bin/env node
/**
 * IndexNow submitter for technioz.com.
 *
 * - Reads URLs from /public/sitemap.xml (static) and /sitemap-blog.xml (dynamic).
 * - Dedupes and submits the merged set to the IndexNow API.
 * - Splits into batches of 10,000 (IndexNow limit per request).
 * - Key is read from a {key}.txt file at the project root (proxy-served at
 *   https://technioz.com/{key}.txt). No env var dependency.
 *
 * IndexNow pings Bing, Yandex, Naver, Seznam.cz. Google is NOT a member — for
 * Google indexing, use the URL Inspection API (separate setup).
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

function readKeyFromRootFile() {
  const root = path.join(__dirname, "..");
  const keyFileName = /^[0-9a-f]{16,}\.txt$/i;
  if (!fs.existsSync(root)) return null;
  const found = fs.readdirSync(root).find((f) => keyFileName.test(f));
  if (!found) return null;
  return fs.readFileSync(path.join(root, found), "utf8").trim();
}

const KEY = readKeyFromRootFile();

function extractUrlsFromSitemap(sitemapPath) {
  if (!fs.existsSync(sitemapPath)) return [];
  const xml = fs.readFileSync(sitemapPath, "utf8");
  const matches = xml.matchAll(/<loc>([^<]+)<\/loc>/g);
  return [...matches].map((m) => m[1].trim());
}

async function submitBatch(urls) {
  const body = JSON.stringify({
    host: SITE_HOST,
    key: KEY,
    keyLocation: `https://${SITE_HOST}/${KEY}.txt`,
    urlList: urls,
  });

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        method: "POST",
        hostname: "api.indexnow.org",
        path: "/indexnow",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Content-Length": Buffer.byteLength(body),
        },
      },
      (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () =>
          resolve({ status: res.statusCode, body: data, count: urls.length })
        );
      }
    );
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

async function main() {
  const staticSitemap = path.join(__dirname, "..", "public", "sitemap.xml");
  const blogSitemap = path.join(__dirname, "..", "public", "sitemap-blog.xml");
  const dynamicBlogSitemap = path.join(__dirname, "..", ".next", "server", "app", "sitemap-blog.xml.body");

  let urls = [
    ...extractUrlsFromSitemap(staticSitemap),
    ...extractUrlsFromSitemap(blogSitemap),
  ];
  // Fallback: if the dynamic blog sitemap hasn't been built yet (e.g. local dev), use the static fallback
  if (urls.length === 0 && fs.existsSync(dynamicBlogSitemap)) {
    urls = extractUrlsFromSitemap(dynamicBlogSitemap);
  }

  // Dedupe + ensure host consistency
  const seen = new Set();
  const filtered = [];
  for (const u of urls) {
    let normalized = u.replace(/^http:\/\//, "https://").replace(/\/+$/, "") || u;
    if (!seen.has(normalized)) {
      seen.add(normalized);
      filtered.push(normalized);
    }
  }

  if (!KEY) {
    console.log("[indexnow] No key file at project root — skipping (no-op).");
    return;
  }

  if (filtered.length === 0) {
    console.log("[indexnow] No URLs found in sitemaps. Skipping.");
    return;
  }

  console.log(`[indexnow] Submitting ${filtered.length} URLs for ${SITE_HOST}`);
  const batches = [];
  for (let i = 0; i < filtered.length; i += 10000) {
    batches.push(filtered.slice(i, i + 10000));
  }

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    try {
      const result = await submitBatch(batch);
      console.log(
        `[indexnow] Batch ${i + 1}/${batches.length}: ${result.status} (${result.count} URLs) — ${result.body.slice(0, 200)}`
      );
      if (result.status !== 200 && result.status !== 202) {
        process.exitCode = 1;
      }
    } catch (err) {
      console.error(`[indexnow] Batch ${i + 1} failed:`, err.message);
      process.exitCode = 1;
    }
  }
}

main();
