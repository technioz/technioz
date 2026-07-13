import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Chatbot Development Company — NLP, ML & Automation",
  description: "We build AI chatbots, agents, RAG systems, and LLM integrations that automate support, sales, and operations. Book a free AI use-case consultation.",
  openGraph: buildOpenGraph({
      title: "AI Chatbot Development Company — NLP, ML & Automation",
      description: "Technioz builds practical AI chatbots, agents, RAG systems, LLM integrations, and workflow automation.",
      url: "https://technioz.com/services/ai-solutions",
    }),
  alternates: {
    canonical: "https://technioz.com/services/ai-solutions",
  },
};

export default function AISolutions() {
  return (
    <>
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="AI Chatbot Development" />
            <span className="e1 text-black-300">{"🤖 AI Chatbot Development"}</span>
            <h1 className="h2 text-black-500">AI Chatbot Development Company for Support, Sales & Operations</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Most chatbots frustrate users with rigid menus and dead-end replies. We design, build, and deploy AI chatbots that understand context, answer real questions, and hand off cleanly to humans — so your team spends time on work that matters.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>LLM-powered chatbots for support, sales, onboarding, and internal help desks</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Grounded answers from your knowledge base, documents, CRM, and live systems</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Multi-channel deployment with guardrails, analytics, and human handoff</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary">Get a Free Chatbot Consultation</Link>
              <Link href="/services/ai-chatbot-development" className="e2 text-cobolt-500">Explore chatbot development →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">Why Most Chatbots Fail — and Ours Don&apos;t</h2>
            <p className="p3 text-black-400">A useful chatbot is a system, not a script. We focus on intent, grounding, safety, and continuous improvement.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Intent Understanding", desc: "Users ask in their own words. Our bots parse intent, entities, and context instead of forcing button flows." },
              { title: "Knowledge Grounding", desc: "RAG architecture retrieves the right answer from your documents, FAQs, policies, and product data." },
              { title: "Human Handoff", desc: "Seamless escalation to live agents with full conversation context and suggested replies." },
              { title: "Multi-Channel", desc: "Deploy the same bot on web, mobile, WhatsApp, Slack, Messenger, and custom apps." },
              { title: "Safety Guardrails", desc: "Prompt filtering, topic boundaries, PII redaction, and fallbacks that protect your brand." },
              { title: "Cost Control", desc: "Token budgets, model selection, caching, and usage analytics keep AI spend predictable." },
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
            <p className="p3 text-black-400">Purpose-built conversational AI for the highest-value business use cases.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Customer Support Bots", desc: "Answer FAQs, track orders, open tickets, and resolve common issues 24/7.", tags: ["Support", "RAG", "CRM"] },
              { title: "Sales Assistants", desc: "Qualify leads, recommend products, answer objections, and book demos.", tags: ["Lead Gen", "Recommendations", "Calendar"] },
              { title: "Onboarding Guides", desc: "Walk new users through setup, features, and first actions to improve activation.", tags: ["UX", "Product Tours", "Help"] },
              { title: "Internal Help Desks", desc: "Answer HR, IT, finance, and policy questions for employees instantly.", tags: ["HR", "IT", "Knowledge Base"] },
              { title: "E-commerce Bots", desc: "Product search, cart help, order status, returns, and personalized suggestions.", tags: ["Shopify", "WooCommerce", "Stripe"] },
              { title: "Healthcare Triage", desc: "HIPAA-aware intake, symptom checkers, and appointment scheduling.", tags: ["HIPAA", "Scheduling", "EHR"] },
            ].map((s) => (
              <div key={s.title} className="bg-white-300 rounded-sm p-[32px] flex flex-col gap-[16px]">
                <h3 className="font-display text-[22px] leading-none tracking-[-1.1px] text-black-500">{s.title}</h3>
                <p className="p4 text-black-400 flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => <span key={t} className="text-[12px] text-cobolt-500 font-mono uppercase tracking-[1px] bg-cobolt-500/5 px-2 py-1 rounded-sm">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 !text-white-200 mb-4">Technologies We Use</h2>
            <p className="p3 text-black-200">Modern LLMs, vector stores, and frameworks combined with your business data.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["OpenAI GPT", "Claude", "Google Dialogflow", "Rasa", "LangChain", "LangGraph", "Pinecone", "Weaviate", "pgvector", "FastAPI", "Node.js", "WhatsApp API", "Slack API", "WebSocket", "Next.js"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 text-black-500 mb-4">When Chatbots Are Not Enough</h2>
            <p className="p3 text-black-400">Some problems need AI that takes action, not just answers questions. We also build:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI Agents", desc: "Autonomous systems that perform tasks across APIs, documents, and business tools.", href: "/services/ai-agent-development" },
              { title: "RAG Systems", desc: "Knowledge bases that ground any LLM application in your private data.", href: "/services/rag-system-development" },
              { title: "LLM Integration", desc: "Embed OpenAI, Claude, or Gemini features into your existing product.", href: "/services/llm-integration" },
              { title: "AI Workflow Automation", desc: "Automate document processing, classification, routing, and approvals.", href: "/services/ai-workflow-automation" },
              { title: "Predictive Analytics", desc: "Forecast behavior, demand, churn, and risk with machine learning models.", href: null },
              { title: "Custom AI Consulting", desc: "Feasibility audits, use-case prioritization, and implementation roadmaps.", href: "/consulting-strategy" },
            ].map((s) => (
              <div key={s.title} className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-[16px]">
                <h3 className="font-display text-[22px] leading-none tracking-[-1.1px] text-black-500">{s.title}</h3>
                <p className="p4 text-black-400 flex-1">{s.desc}</p>
                {s.href && <Link href={s.href} className="e2 text-cobolt-500 text-sm mt-1">Learn more →</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-12">Our AI Chatbot Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Use Case Design", desc: "Define user intents, success metrics, channels, and integration requirements." },
              { title: "Knowledge Setup", desc: "Prepare documents, FAQs, and data sources for grounded, accurate answers." },
              { title: "Build & Test", desc: "Develop the bot, add guardrails, and run real conversation tests." },
              { title: "Deploy & Monitor", desc: "Launch across channels, track metrics, and refine based on feedback." },
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

      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-[600px]">
            <h2 className="h3 !text-white-100 mb-4">Ready to Stop Replying to the Same Questions?</h2>
            <p className="p3 text-white-100/80">Tell us about your support load, sales workflow, or internal help-desk backlog. We&apos;ll design a chatbot that handles it.</p>
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
