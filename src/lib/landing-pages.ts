/**
 * Paid-ad landing pages. These routes render without the main site nav,
 * footer and chat assistant (see SiteChrome in src/app/layout.tsx), are
 * noindex, and are excluded from the sitemap (scripts/generate-sitemap.js).
 */
export const DISTRACTION_FREE_PATHS = ["/ai-saas-development-uae"] as const;

export function isDistractionFreePath(pathname: string | null): boolean {
  if (!pathname) return false;
  const clean = pathname.replace(/\/+$/, "") || "/";
  return (DISTRACTION_FREE_PATHS as readonly string[]).includes(clean);
}
