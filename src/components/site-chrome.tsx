"use client";

import { usePathname } from "next/navigation";
import { isDistractionFreePath } from "@/lib/landing-pages";

/**
 * Renders the main site chrome (nav, footer, chat assistant) everywhere except
 * paid-ad landing pages, which supply their own minimal header and footer.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (isDistractionFreePath(pathname)) return null;
  return <>{children}</>;
}
