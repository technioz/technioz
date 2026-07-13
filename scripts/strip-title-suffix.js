#!/usr/bin/env node
/**
 * Strip the manual " | Technioz" / " | Technioz Blog" suffix from every
 * per-page title in src/app/. The root layout now has
 *   title: { default: "...", template: "%s | Technioz" }
 * so the suffix is added by the template — we must remove the manual one
 * to avoid doubled suffixes.
 *
 * Idempotent: re-running is a no-op.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "src", "app");
let totalChanged = 0;
let filesChanged = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith("_") || entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts")) {
      const src = fs.readFileSync(full, "utf-8");
      let next = src;

      // Pattern 1: title: `... | Technioz`,   (and `Blog` variant)
      next = next.replace(
        /title:\s*`([^`]*?)\s*\|\s*Technioz( Blog)?`/g,
        (m, inner) => `title: \`${inner.trim()}\``
      );

      // Pattern 2: title: "... | Technioz",   (string literal, single or double quotes)
      next = next.replace(
        /title:\s*(["'])([^"']+?)\s*\|\s*Technioz( Blog)?\1/g,
        (m, q, inner) => `title: ${q}${inner.trim()}${q}`
      );

      if (next !== src) {
        filesChanged++;
        totalChanged += (src.length - next.length < 0 ? -1 : 1);
        const changes = (src.match(/title:\s*[`"'].*?Technioz/g) || []).length;
        totalChanged += changes;
        fs.writeFileSync(full, next);
        console.log(`${full.replace(ROOT, "src/app")} (${changes} title(s) updated)`);
      }
    }
  }
}

walk(ROOT);
console.log(`\nDone: ${filesChanged} file(s), ${totalChanged} change(s).`);
