"use client";

import Link from "next/link";
import Script from "next/script";
import { useCallback, useEffect, useState } from "react";

/**
 * Cookie / tracking consent.
 *
 * - Google Analytics 4 loads only after "analytics" consent.
 * - Meta Pixel (NEXT_PUBLIC_META_PIXEL_ID) loads only after "marketing" consent. It is mounted
 *   from the root layout, so it covers every page; client-side navigations are
 *   tracked as PageViews by the Pixel's built-in history tracking.
 * - Umami and Vercel Speed Insights are cookieless and are not gated here.
 *
 * The choice is stored in localStorage under CONSENT_STORAGE_KEY. The footer's
 * "Cookie settings" button reopens the banner by dispatching OPEN_CONSENT_EVENT.
 * Keep this file in sync with the "Cookies" section of src/app/privacy/page.tsx.
 */

export const CONSENT_STORAGE_KEY = "technioz-consent";
export const OPEN_CONSENT_EVENT = "technioz:open-consent";

const CONSENT_VERSION = 1;
const GA_MEASUREMENT_ID = "G-QYDE8LRP78";
// Set NEXT_PUBLIC_META_PIXEL_ID (numeric ID from Meta Events Manager) in .env
// and in the hosting provider. Inlined at build time — redeploy after changing.
// If unset or invalid, the Pixel never loads.
const RAW_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
const META_PIXEL_ID = /^\d+$/.test(RAW_PIXEL_ID) ? RAW_PIXEL_ID : "";

// Cookies set by GA4 (_ga, _ga_<id>) and Meta Pixel (_fbp, _fbc).
const ANALYTICS_COOKIE_RE = /^(_ga|_gid|_gat)/;
const MARKETING_COOKIE_RE = /^(_fbp|_fbc)/;

type Consent = { analytics: boolean; marketing: boolean };

function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Consent> & { v?: number };
    if (parsed.v !== CONSENT_VERSION) return null;
    return { analytics: Boolean(parsed.analytics), marketing: Boolean(parsed.marketing) };
  } catch {
    return null;
  }
}

function writeConsent(consent: Consent) {
  try {
    localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({ ...consent, v: CONSENT_VERSION, at: new Date().toISOString() })
    );
  } catch {
    // Storage unavailable (private mode etc.) — choice applies to this page view only.
  }
}

function clearCookies(pattern: RegExp) {
  const host = window.location.hostname;
  const parts = host.split(".");
  const rootDomain = parts.length > 1 ? parts.slice(-2).join(".") : host;
  const domains = ["", host, `.${host}`, rootDomain, `.${rootDomain}`];
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0]?.trim();
    if (!name || !pattern.test(name)) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  }
}

export function ConsentManager() {
  const [mounted, setMounted] = useState(false);
  const [consent, setConsent] = useState<Consent | null>(null);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [draft, setDraft] = useState<Consent>({ analytics: false, marketing: false });

  useEffect(() => {
    const stored = readConsent();
    // Remove cookies left over from a withdrawn consent (GA4 can rewrite its
    // cookies while the previous page unloads, so clearing once isn't enough).
    if (!stored?.analytics) clearCookies(ANALYTICS_COOKIE_RE);
    if (!stored?.marketing) clearCookies(MARKETING_COOKIE_RE);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage is only readable after mount
    setConsent(stored);
    setBannerOpen(stored === null);
    setMounted(true);

    const open = () => {
      const current = readConsent();
      setDraft(current ?? { analytics: false, marketing: false });
      setCustomizing(true);
      setBannerOpen(true);
    };
    window.addEventListener(OPEN_CONSENT_EVENT, open);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, open);
  }, []);

  const save = useCallback(
    (next: Consent) => {
      const revokedAnalytics = Boolean(consent?.analytics && !next.analytics);
      const revokedMarketing = Boolean(consent?.marketing && !next.marketing);
      writeConsent(next);
      setConsent(next);
      setBannerOpen(false);
      setCustomizing(false);
      if (revokedAnalytics || revokedMarketing) {
        // Scripts that already ran can't be unloaded — clear their cookies and
        // reload; the mount effect clears anything rewritten during unload.
        if (revokedAnalytics) clearCookies(ANALYTICS_COOKIE_RE);
        if (revokedMarketing) clearCookies(MARKETING_COOKIE_RE);
        window.location.reload();
      }
    },
    [consent]
  );

  if (!mounted) return null;

  return (
    <>
      {consent?.analytics && (
        <>
          <Script
            id="ga4-src"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}

      {consent?.marketing && META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      {bannerOpen && (
        <div
          role="dialog"
          aria-labelledby="consent-title"
          aria-describedby="consent-body"
          className="fixed z-[60] bottom-4 left-4 right-4 sm:right-auto sm:max-w-[420px] bg-white-200 border border-neutral-300 rounded-sm shadow-[0_10px_24px_rgba(29,27,22,0.12)] p-[24px] flex flex-col gap-[16px]"
        >
          <p id="consent-title" className="e1 text-black-300">
            Cookies &amp; privacy
          </p>
          <p id="consent-body" className="p5 text-black-400">
            We use cookieless analytics to keep the site running well. With your permission, we
            also use Google Analytics cookies to understand visits and the Meta Pixel to measure our
            ads. You can change this any time from &ldquo;Cookie settings&rdquo; in the footer.{" "}
            <Link href="/privacy#cookies" className="text-cobolt-500 underline hover:no-underline">
              Privacy Policy
            </Link>
          </p>

          {customizing && (
            <div className="flex flex-col gap-[12px] border-t border-neutral-300 pt-[16px]">
              <label className="flex items-start gap-3 p5 text-black-400">
                <input type="checkbox" checked disabled className="mt-[3px] accent-cobolt-500" />
                <span>
                  <span className="text-black-500">Essential</span> — remembers this choice and
                  your chat history in your browser. Always on.
                </span>
              </label>
              <label className="flex items-start gap-3 p5 text-black-400 cursor-pointer">
                <input
                  type="checkbox"
                  checked={draft.analytics}
                  onChange={(e) => setDraft((d) => ({ ...d, analytics: e.target.checked }))}
                  className="mt-[3px] accent-cobolt-500"
                />
                <span>
                  <span className="text-black-500">Analytics</span> — Google Analytics cookies that
                  show how visitors use the site.
                </span>
              </label>
              <label className="flex items-start gap-3 p5 text-black-400 cursor-pointer">
                <input
                  type="checkbox"
                  checked={draft.marketing}
                  onChange={(e) => setDraft((d) => ({ ...d, marketing: e.target.checked }))}
                  className="mt-[3px] accent-cobolt-500"
                />
                <span>
                  <span className="text-black-500">Marketing</span> — Meta Pixel, used to measure our
                  Facebook and Instagram ads.
                </span>
              </label>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-[8px]">
            {customizing ? (
              <button type="button" className="cta-tertiary" onClick={() => save(draft)}>
                Save choices
              </button>
            ) : (
              <button
                type="button"
                className="cta-tertiary"
                onClick={() => save({ analytics: true, marketing: true })}
              >
                Accept all
              </button>
            )}
            <button
              type="button"
              className="cta-quaternary"
              onClick={() => save({ analytics: false, marketing: false })}
            >
              Reject all
            </button>
            {!customizing && (
              <button
                type="button"
                className="p5 text-black-400 underline hover:text-cobolt-500 ml-1"
                onClick={() => {
                  setDraft(consent ?? { analytics: false, marketing: false });
                  setCustomizing(true);
                }}
              >
                Customize
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
    >
      Cookie settings
    </button>
  );
}
