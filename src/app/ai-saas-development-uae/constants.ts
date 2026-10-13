export const LANDING_PATH = "/ai-saas-development-uae";
export const CALENDLY_URL = "https://calendly.com/technioztech/30min";
export const WHATSAPP_NUMBER = "971569451930"; // +971 56 945 1930 (site UAE/WhatsApp line)

export function whatsappUrl(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// 48px-tall touch targets (the site's .cta-* classes are 40px).
const BTN_BASE =
  "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm px-[22px] font-mono text-[13px] uppercase tracking-[1.3px] no-underline transition-colors duration-200 text-center";
export const BTN_PRIMARY = `${BTN_BASE} bg-cobolt-500 text-white-100 hover:bg-cobolt-300`;
export const BTN_OUTLINE = `${BTN_BASE} border border-cobolt-500 text-cobolt-500 hover:bg-cobolt-500 hover:text-white-100`;
export const BTN_SECONDARY = `${BTN_BASE} bg-white-300 text-black-500 border border-neutral-300 hover:border-cobolt-500 hover:text-cobolt-500`;
export const BTN_LIGHT = `${BTN_BASE} bg-white-100 text-cobolt-500 hover:bg-cobolt-100`;
