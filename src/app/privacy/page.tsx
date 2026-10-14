import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { CookieSettingsButton } from "@/components/consent-manager";

import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

/*
 * ACCURACY CONTRACT
 * Every statement on this page must match what the site actually does.
 * If you add a tracker, form field, data store, or service provider, update
 * this page in the same change. Sources of truth:
 *   - src/components/consent-manager.tsx   (GA4 + Meta Pixel gating, storage key)
 *   - src/app/layout.tsx                   (Umami, Vercel Speed Insights)
 *   - src/components/contact-form.tsx + src/app/api/contact/route.ts
 *     + src/lib/contact.ts                 (fields, IP/user agent, DB, ntfy.sh)
 *   - src/components/chat-widget.tsx + src/app/api/chat/route.ts (Ollama, localStorage)
 *   - src/app/ai-saas-development-uae/lead-form.tsx + src/app/api/leads/route.ts
 *     + src/lib/campaign-leads.ts          (campaign form fields, UTM/fbclid, Calendly embed, Pixel events)
 *     + src/lib/lead-confirmation-email.ts (confirmation email to the lead via Zoho SMTP)
 */

const LAST_UPDATED = "October 14, 2026";
const PRIVACY_EMAIL = "gaurav.bhatia@technioz.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Technioz, a Dubai-based software development agency, collects, uses, shares and protects personal data from its website, contact form, chat assistant and ads.",
  openGraph: buildOpenGraph({
    title: "Privacy Policy",
    description: "How Technioz collects, uses, shares and protects personal data.",
    url: "https://technioz.com/privacy",
  }),
  twitter: buildTwitterCard({
    title: "Privacy Policy",
    description: "How Technioz collects, uses, shares and protects personal data.",
  }),
  alternates: {
    canonical: "https://technioz.com/privacy",
  },
};

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 flex flex-col gap-3">
      <h2 className="font-display text-[24px] leading-[1.2] tracking-[-1.2px] text-black-500">{title}</h2>
      {children}
    </section>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="p3 font-medium text-black-500 mt-2">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="p3 text-black-400 leading-relaxed">{children}</p>;
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-2 ml-1">
      {items.map((item, i) => (
        <li key={i} className="p3 text-black-400 leading-relaxed flex items-start gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cobolt-500 shrink-0 mt-[10px]" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Mail({ address = PRIVACY_EMAIL }: { address?: string }) {
  return (
    <a href={`mailto:${address}`} className="text-cobolt-500 underline hover:no-underline">
      {address}
    </a>
  );
}

const B = ({ children }: { children: React.ReactNode }) => <span className="text-black-500">{children}</span>;

export default function Privacy() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Privacy Policy", href: "/privacy" }]} />
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[800px]">
            <div className="flex items-center gap-2 text-black-400 p5">
              <Link href="/" className="hover:text-cobolt-500 transition-colors">Home</Link>
              <span>/</span>
              <span>Privacy</span>
            </div>
            <h1 className="h2 text-black-500">Privacy Policy</h1>
            <p className="p5 text-black-400">Last updated: {LAST_UPDATED}</p>
            <p className="p3 text-black-400">
              Technioz (&ldquo;Technioz&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a founder-led,
              remote-first software development agency based in Dubai, United Arab Emirates. This policy
              explains what personal data we collect when you visit technioz.com, contact us, book a call,
              use our chat assistant, or respond to our advertising, and how we use, share and protect it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[800px] flex flex-col gap-12">
            <Section id="who-we-are" title="1. Who we are">
              <P>
                Technioz is a software development agency based in Dubai, United Arab Emirates. We work
                remotely and do not have a physical office. Technioz decides how and why the personal data
                described in this policy is used.
              </P>
              <List
                items={[
                  <>Privacy contact and Grievance Officer: <B>Gaurav Bhatia, Founder</B> — <Mail /></>,
                  <>General enquiries: <Mail address="info@technioz.com" /></>,
                  <>Website: https://technioz.com</>,
                ]}
              />
            </Section>

            <Section id="information-we-collect" title="2. Information we collect">
              <H3>Information you give us</H3>
              <List
                items={[
                  <><B>Contact form:</B> your full name, email address, project type and message (required), and your phone number and company name (optional).</>,
                  <><B>Campaign landing pages:</B> our advertising landing page form asks for your full name, work email, company or startup name, WhatsApp number, where your idea is, your funding status, the budget set aside for the build, and whether you are the decision maker (required), plus your launch timeline, technical background and a one-line description of your idea (optional). Any campaign form collects only the fields shown on it.</>,
                  <><B>Consultation bookings:</B> the details you enter when you book a call through Calendly.</>,
                  <><B>Correspondence:</B> anything you send us by email, phone or WhatsApp.</>,
                  <><B>Chat assistant:</B> the messages you type into the chat assistant on our website.</>,
                ]}
              />
              <H3>Information collected automatically</H3>
              <List
                items={[
                  <><B>With every contact form or campaign form submission:</B> your IP address, your browser&apos;s user agent (browser and device type), the page or source the enquiry came from, and the date and time. Campaign forms also record the advertising details included in the page link (UTM parameters and the Facebook click ID, <code>fbclid</code>) and the website that referred you.</>,
                  <><B>Server logs:</B> our hosting provider records technical request data such as IP address, the page requested, browser type and time.</>,
                  <><B>Analytics and advertising:</B> usage data from the tools described in <a href="#cookies" className="text-cobolt-500 underline hover:no-underline">section 5</a>. Google Analytics and the Meta Pixel only run if you agree to them.</>,
                ]}
              />
              <P>
                We do not take payments on this website and do not collect payment card details through it.
              </P>
            </Section>

            <Section id="how-we-use" title="3. How we use your information">
              <List
                items={[
                  "To reply to your enquiry, arrange and hold consultations, and prepare proposals.",
                  "To follow up on your enquiry by email, phone or WhatsApp.",
                  "To email you a confirmation when you submit our campaign landing page form, including a copy of the details you entered.",
                  "To keep a record of enquiries and track their status.",
                  "To notify our team instantly when a new enquiry arrives.",
                  "To answer your questions through the chat assistant.",
                  "To understand how the website is used and improve it.",
                  "To measure how our advertising performs, if you allow marketing cookies.",
                  "To protect the website and forms from spam and abuse, for example by rate-limiting submissions and filtering automated bots.",
                  "To meet our legal obligations.",
                ]}
              />
              <P>
                Campaign forms use your answers to sort and prioritise enquiries. For example, if you select a
                budget under $5,000, we don&apos;t show a booking calendar straight away, but we still keep your
                enquiry. This does not have legal effects on you, and you can always contact us directly at{" "}
                <Mail address="info@technioz.com" />.
              </P>
            </Section>

            <Section id="legal-bases" title="4. Legal bases">
              <P>Where data protection law requires a legal basis for using personal data, we rely on:</P>
              <List
                items={[
                  <><B>Your request / steps before a contract</B> — to respond to your enquiry and prepare a proposal.</>,
                  <><B>Consent</B> — for Google Analytics cookies and the Meta Pixel. You can withdraw consent at any time.</>,
                  <><B>Legitimate interests</B> — to follow up on business enquiries, run cookieless analytics, keep the site secure, and prevent spam.</>,
                  <><B>Legal obligations</B> — where the law requires us to keep or disclose information.</>,
                ]}
              />
            </Section>

            <Section id="cookies" title="5. Cookies, browser storage and analytics">
              <P>
                When you first visit, a banner asks whether you allow analytics and marketing cookies.
                Nothing in the &ldquo;Analytics&rdquo; or &ldquo;Marketing&rdquo; groups below runs until you
                agree. You can change your choice at any time:{" "}
                <CookieSettingsButton className="text-cobolt-500 underline hover:no-underline cursor-pointer" />.
              </P>
              <H3>Essential (always on)</H3>
              <List
                items={[
                  <><B>Your consent choice</B> — stored in your browser&apos;s local storage (<code>technioz-consent</code>) so we don&apos;t ask again on every page.</>,
                  <><B>Chat history</B> — your recent chat messages and a random chat session ID are stored in your browser&apos;s local storage so the conversation stays open as you browse. They stay on your device until you use &ldquo;Clear chat&rdquo; or clear your browser data.</>,
                ]}
              />
              <H3>Cookieless analytics (always on)</H3>
              <List
                items={[
                  <><B>Umami</B> — our own analytics instance at umami.technioz.com. It does not use cookies and records page views, referrers, browser, device type and country.</>,
                  <><B>Vercel Speed Insights</B> — measures page performance (such as load times) and does not use cookies.</>,
                ]}
              />
              <H3>Analytics (only with your consent)</H3>
              <List
                items={[
                  <><B>Google Analytics 4</B> — sets cookies (<code>_ga</code>, <code>_ga_*</code>) to understand how visitors use the site, such as pages viewed and time on site.</>,
                ]}
              />
              <H3>Marketing (only with your consent)</H3>
              <List
                items={[
                  <><B>Meta Pixel</B> — when we run Facebook and Instagram ads, the Pixel sets a cookie (<code>_fbp</code>) and sends events such as page views, campaign-form submissions and completed bookings to Meta so we can measure our ads. Meta processes this data under its own terms and privacy policy.</>,
                ]}
              />
              <P>
                If you withdraw consent, we stop loading these tools and remove the cookies they set on
                technioz.com. After you submit our campaign form, the booking calendar you see is provided by
                Calendly inside our page, and Calendly may set its own cookies there. Cookies set by other
                websites (for example Calendly or Facebook) are controlled by those websites.
              </P>
            </Section>

            <Section id="sharing" title="6. Who we share your information with">
              <P>
                We do not sell your personal data. We share it only with the service providers we use to run
                our website and business, and with authorities where the law requires:
              </P>
              <List
                items={[
                  <><B>Vercel</B> — hosts the website and provides server logs and Speed Insights.</>,
                  <><B>Contabo</B> — hosts the server running our database, located in Mumbai, India, where contact-form and campaign-form enquiries are stored.</>,
                  <><B>Cloudflare</B> — provides DNS and network delivery for our domain and analytics.</>,
                  <><B>Google</B> — Google Analytics (only with your consent) and Google Sheets, which we use to track enquiries and their follow-up status.</>,
                  <><B>Meta</B> — Facebook and Instagram advertising, the Meta Pixel (only with your consent), and WhatsApp if you message us or we reply there.</>,
                  <><B>ntfy.sh</B> — a push-notification service that alerts our team to new enquiries. Each notification contains the enquiry details (such as your name, email, phone or WhatsApp number, company, your message or form answers, and the page and campaign the enquiry came from).</>,
                  <><B>Ollama</B> — the AI model provider behind our chat assistant. Your chat messages are sent to Ollama to generate replies. We do not save chat conversations in our database.</>,
                  <><B>Calendly</B> — consultation scheduling, including the booking calendar shown on our campaign page.</>,
                  <><B>Zoho</B> — our email provider. It sends the confirmation email you receive after submitting our campaign landing page form, which contains a copy of the details you entered.</>,
                  <><B>Marketing agency</B> — when we run advertising campaigns, an agency working on our behalf runs the ads and may access enquiry data from our campaign forms to run, screen and measure the campaign.</>,
                  <><B>Authorities</B> — if we are required to by law.</>,
                ]}
              />
            </Section>

            <Section id="transfers" title="7. International transfers">
              <P>
                We are based in the UAE, our database server is in India, and several of our providers
                (including Vercel, Google, Meta and Cloudflare) process data in the United States and other
                countries. Your information may therefore be processed outside the country where you live.
                Where the law requires it, we rely on the contractual safeguards these providers offer for
                international transfers.
              </P>
            </Section>

            <Section id="retention" title="8. How long we keep your information">
              <List
                items={[
                  <><B>Enquiries and lead records</B> (our database, Google Sheets and email): kept until you ask us to delete them.</>,
                  <><B>Chat messages:</B> not stored in our database. They remain in your browser until you clear them.</>,
                  <><B>Analytics, server logs and notifications:</B> kept by the relevant provider under its own retention settings.</>,
                ]}
              />
            </Section>

            <Section id="your-rights" title="9. Your rights">
              <P>
                Depending on where you live, laws such as the UAE Personal Data Protection Law (Federal
                Decree-Law No. 45 of 2021), Saudi Arabia&apos;s Personal Data Protection Law, the EU and UK
                GDPR, and India&apos;s Digital Personal Data Protection Act, 2023 may give you the right to:
              </P>
              <List
                items={[
                  "access the personal data we hold about you;",
                  "correct or update it;",
                  "have it deleted;",
                  "object to or restrict how we use it;",
                  "receive a copy in a portable format;",
                  "withdraw consent at any time, without affecting earlier processing;",
                  "ask us to stop contacting you;",
                  "complain to your local data protection authority.",
                ]}
              />
              <P>
                To use any of these rights, email <Mail />. We may need to confirm your identity before we
                act on a request.
              </P>
            </Section>

            <Section id="security" title="10. Security">
              <P>
                The website is served only over HTTPS. Access to enquiry data is limited to the people who
                need it to respond to you, and our contact form is protected against automated spam. No method of
                transmission or storage is completely secure, so we cannot guarantee absolute security.
              </P>
            </Section>

            <Section id="children" title="11. Children">
              <P>
                Our website and services are intended for businesses and are not directed at anyone under
                18. We do not knowingly collect personal data from children. If you believe a child has sent
                us personal data, contact <Mail /> and we will delete it.
              </P>
            </Section>

            <Section id="third-party-links" title="12. Other websites">
              <P>
                Our website links to other services, such as Calendly, WhatsApp, LinkedIn, GitHub, X and
                Instagram. Their own privacy policies apply when you use them.
              </P>
            </Section>

            <Section id="changes" title="13. Changes to this policy">
              <P>
                We will update this page when our practices change and revise the &ldquo;Last updated&rdquo;
                date at the top.
              </P>
            </Section>

            <Section id="contact" title="14. Contact us">
              <List
                items={[
                  <>Privacy questions and requests (Grievance Officer): Gaurav Bhatia — <Mail /></>,
                  <>General enquiries: <Mail address="info@technioz.com" /></>,
                  <>Technioz — Dubai, United Arab Emirates (remote-first, no physical office)</>,
                ]}
              />
            </Section>
          </div>
        </div>
      </section>
    </>
  );
}
