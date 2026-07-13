import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Chatbot Development Company | Custom Business Bots",
  description: "AI chatbot development company. Custom bots for support, sales, onboarding, and internal help desks with grounded answers and human handoff.",
    openGraph: buildOpenGraph({
      title: "AI Chatbot Development Company | Custom Business Bots",
      description: "Technioz builds custom AI chatbots for customer support, sales, onboarding, and internal help desks.",
      url: "https://technioz.com/services/ai-chatbot-development",
    }),
  alternates: {
    canonical: "https://technioz.com/services/ai-chatbot-development",
  },
};

export default function AIChatbotDevelopment() {
  return (
    <>
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="AI Chatbot Development" />
            <span className="e1 text-black-300">{'\u{1F916}'} AI Chatbot Development</span>
            <h1 className="h2 text-black-500">Chatbots That Actually Solve Customer Problems</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Most chatbots frustrate users with rigid menus and dead-end replies. We build AI chatbots that understand context, answer real questions, and hand off cleanly to humans when needed.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>LLM-powered bots for support, sales, onboarding, and internal help desks</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Connected to your knowledge base, CRM, tickets, and live chat tools</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Guardrails, analytics, and human handoff built in</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Get a Free Chatbot Demo</Link>
              <Link href="/services/ai-solutions" className="e2 text-cobolt-500">Back to AI solutions →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">Why Most Chatbots Fail — and Ours Don&apos;t</h2>
            <p className="p3 text-black-400">A good chatbot is not a list of scripted replies. It is a system that understands intent, retrieves the right information, and stays safe.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Intent Understanding", desc: "Natural-language queries instead of forcing users through rigid button flows." },
              { title: "Knowledge Grounding", desc: "RAG architecture that grounds answers in your documents, FAQs, and policies." },
              { title: "Human Handoff", desc: "Smooth escalation to live agents with full conversation context." },
              { title: "Multi-Channel", desc: "Deploy on web, mobile, WhatsApp, Slack, Messenger, and custom apps." },
              { title: "Safety Guardrails", desc: "Prompt filtering, topic boundaries, and fallback responses that protect your brand." },
              { title: "Continuous Learning", desc: "Analytics, conversation logs, and feedback loops for ongoing improvement." },
            ].map((f, i) => (
              <div key={i} className="bg-white-200 rounded-sm p-[32px]">
                <h3 className="font-display text-[18px] font-medium text-black-500 mb-2">{f.title}</h3>
                <p className="p4 text-black-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 text-black-500 mb-4">Chatbots We Build</h2>
            <p className="p3 text-black-400">Purpose-built bots for the highest-value use cases.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Customer Support Bots", desc: "Answer FAQs, track orders, open tickets, and resolve common issues 24/7.", tags: ["Support", "RAG", "CRM"], link: null },
              { title: "Sales Assistants", desc: "Qualify leads, recommend products, and book demos or calls.", tags: ["Lead Gen", "Recommendations", "Calendar"], link: null },
              { title: "Onboarding Guides", desc: "Walk new users through setup, features, and first actions.", tags: ["UX", "Product Tours", "Help"], link: null },
              { title: "Internal Help Desks", desc: "Answer HR, IT, and policy questions for employees.", tags: ["HR", "IT", "Knowledge Base"], link: null },
              { title: "E-commerce Bots", desc: "Product search, cart help, order status, and returns.", tags: ["Shopify", "WooCommerce", "Stripe"], link: "/solutions/ecommerce" },
              { title: "Healthcare Triage", desc: "HIPAA-aware intake, symptom checkers, and appointment scheduling.", tags: ["HIPAA", "Scheduling", "EHR"], link: "/solutions/healthcare" },
            ].map((s) => (
              <div key={s.title} className="bg-white-300 rounded-sm p-[32px] flex flex-col gap-[16px]">
                <h3 className="font-display text-[22px] leading-none tracking-[-1.1px] text-black-500">{s.title}</h3>
                <p className="p4 text-black-400 flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => <span key={t} className="text-[12px] text-cobolt-500 font-mono uppercase tracking-[1px] bg-cobolt-500/5 px-2 py-1 rounded-sm">{t}</span>)}
                </div>
                {s.link && <Link href={s.link} className="e2 text-cobolt-500 text-sm mt-1">Learn more →</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 !text-white-200 mb-4">Chatbot Technologies We Use</h2>
            <p className="p3 text-black-200">Modern LLMs and frameworks combined with your business data.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["OpenAI GPT", "Claude", "Google Dialogflow", "Rasa", "LangChain", "Pinecone", "Weaviate", "Vector DB", "FastAPI", "Node.js", "WhatsApp API", "Slack API", "WebSocket", "Next.js"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-12">Our Chatbot Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Use Case Design", desc: "Define user intents, success metrics, and integration requirements." },
              { title: "Knowledge Setup", desc: "Prepare documents, FAQs, and data sources for grounded answers." },
              { title: "Build & Test", desc: "Develop the bot, add guardrails, and test real conversations." },
              { title: "Deploy & Monitor", desc: "Launch across channels, track metrics, and refine continuously." },
            ].map((p, i) => (
              <div key={p.title} className="flex gap-[16px]">
                <span className="font-display text-[40px] leading-none text-cobolt-500/30">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-[18px] font-medium text-black-500 mb-2">{p.title}</h3>
                  <p className="p4 text-black-400">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-8">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "RAG System Development", desc: "Ground your chatbot in private documents and knowledge bases.", href: "/services/rag-system-development" },
              { title: "AI Agent Development", desc: "Move from chat to action with autonomous AI agents.", href: "/services/ai-agent-development" },
              { title: "AI Solutions", desc: "Explore the full range of AI and machine learning services.", href: "/services/ai-solutions" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-[12px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group">
                <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 group-hover:text-cobolt-500 transition-colors">{s.title}</h3>
                <p className="p4 text-black-400">{s.desc}</p>
                <span className="e2 text-cobolt-500 mt-2">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-[600px]">
            <h2 className="h3 !text-white-100 mb-4">Ready to Stop Replying to the Same Questions?</h2>
            <p className="p3 text-white-100/80">Tell us about your support load. We&apos;ll design a chatbot that handles it.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Start Your Chatbot Project</Link>
        </div>
      </section>
    </>
  );
}

function Breadcrumb({ label }: { label: string }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: label }]} />
      <div className="flex items-center gap-2 text-black-300 p5">
      <Link href="/" className="hover:text-cobolt-500">Home</Link> / <Link href="/services" className="hover:text-cobolt-500">Services</Link> / <span>{label}</span>
    </div>
    </>
  );
}
