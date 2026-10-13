/**
 * Fire a Meta Pixel standard event. No-op unless the Pixel was loaded, which
 * only happens after the visitor accepts marketing cookies (ConsentManager).
 */
type Fbq = (command: "track", event: string, params?: Record<string, unknown>) => void;

export function trackPixelEvent(event: "Lead" | "Schedule" | "Contact", params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const fbq = (window as unknown as { fbq?: Fbq }).fbq;
  if (typeof fbq === "function") fbq("track", event, params);
}
