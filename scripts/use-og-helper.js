#!/usr/bin/env node
/**
 * Replace every per-page `openGraph` block in src/app/ with a call to
 * `buildOpenGraph(...)` from src/lib/metadata-helpers.ts. The helper
 * adds the missing fields (type, locale, siteName, image width/height/alt)
 * so Ahrefs Site Audit no longer flags pages as "Open Graph tags incomplete".
 *
 * Idempotent.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "src", "app");
let totalFiles = 0;
let totalReplacements = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith("_") || entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts")) {
      process(full);
    }
  }
}

function process(file) {
  let src = fs.readFileSync(file, "utf-8");
  let changed = false;
  let fileReplacements = 0;

  // Already-rewritten file: skip
  if (src.includes("buildOpenGraph") && src.match(/openGraph:\s*buildOpenGraph/)) {
    return;
  }

  // Add the import if missing
  if (!src.includes('from "@/lib/metadata-helpers"') && !src.includes("from \"@/lib/metadata-helpers\"")) {
    // Find the first import from "@/lib/..." or "@/components/..."
    const importMatch = src.match(/^import .+ from ["']@\/[^"']+["'];?\s*$/m);
    if (importMatch) {
      const idx = importMatch.index + importMatch[0].length;
      const helperImport = '\nimport { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";';
      // Insert alphabetically: find the first import starting with 'i' or later
      const allImports = [...src.matchAll(/^import .+ from ["']@\/([^"']+)["'];?\s*$/gm)];
      let insertAt = idx;
      for (const m of allImports) {
        if (m[1] > "lib/metadata-helpers".length) {
          insertAt = m.index;
          break;
        }
        insertAt = m.index + m[0].length;
      }
      src = src.slice(0, insertAt) + helperImport + "\n" + src.slice(insertAt);
      changed = true;
    }
  }

  // Pattern: openGraph: { ... }   — match the whole block including nested fields
  // We want to extract title, description, url, images, type (if present) and convert
  // to buildOpenGraph({...}).
  const ogRegex = /openGraph:\s*\{([\s\S]*?)\n\s*\},/g;
  src = src.replace(ogRegex, (m, body) => {
    // Extract each field
    const titleMatch = body.match(/title:\s*(?:"([^"]+)"|`([^`]+)`)/);
    const descMatch = body.match(/description:\s*(?:"((?:[^"\\]|\\.)*)"|`([^`]+)`)/);
    const urlMatch = body.match(/url:\s*"([^"]+)"/);
    const typeMatch = body.match(/type:\s*"([^"]+)"/);
    const imageMatch = body.match(/url:\s*"([^"]+\.(?:png|jpg|jpeg|webp))"/i);
    // ahrefs image alt
    const altMatch = body.match(/alt:\s*"([^"]+)"/);

    const title = titleMatch ? (titleMatch[1] || titleMatch[2]) : null;
    const description = descMatch ? (descMatch[1] || descMatch[2]) : null;
    const url = urlMatch ? urlMatch[1] : null;
    const type = typeMatch ? typeMatch[1] : null;

    if (!title || !description || !url) {
      // Can't rewrite safely — keep as is
      return m;
    }

    // Build the replacement
    const args = [
      `title: ${JSON.stringify(title)}`,
      `description: ${JSON.stringify(description)}`,
      `url: ${JSON.stringify(url)}`,
    ];
    if (type && type !== "website") args.push(`type: ${JSON.stringify(type)}`);

    const replacement = `openGraph: buildOpenGraph({\n      ${args.join(",\n      ")},\n    }),`;
    fileReplacements++;
    return replacement;
  });

  // Also handle twitter: { ... } blocks if they exist (similar partial-block issue)
  const twitterRegex = /twitter:\s*\{([\s\S]*?)\n\s*\},/g;
  src = src.replace(twitterRegex, (m, body) => {
    const titleMatch = body.match(/title:\s*(?:"([^"]+)"|`([^`]+)`)/);
    const descMatch = body.match(/description:\s*(?:"((?:[^"\\]|\\.)*)"|`([^`]+)`)/);
    const imagesMatch = body.match(/images:\s*\[\s*"([^"]+)"\s*\]/);
    const title = titleMatch ? (titleMatch[1] || titleMatch[2]) : null;
    const description = descMatch ? (descMatch[1] || descMatch[2]) : null;
    const image = imagesMatch ? imagesMatch[1] : null;

    if (!title || !description) {
      return m;
    }

    const args = [
      `title: ${JSON.stringify(title)}`,
      `description: ${JSON.stringify(description)}`,
    ];
    if (image) args.push(`image: ${JSON.stringify(image)}`);

    const replacement = `twitter: buildTwitterCard({\n      ${args.join(",\n      ")},\n    }),`;
    fileReplacements++;
    return replacement;
  });

  if (fileReplacements > 0 || changed) {
    fs.writeFileSync(file, src);
    totalFiles++;
    totalReplacements += fileReplacements;
    if (fileReplacements > 0) {
      console.log(`  ${file.replace(ROOT, "src/app")} (${fileReplacements} blocks)`);
    }
  }
}

walk(ROOT);
console.log(`\nTotal: ${totalFiles} file(s) modified, ${totalReplacements} block(s) replaced.`);
