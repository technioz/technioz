import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Chatbot Development Company in Dubai | UAE",
  description: "AI chatbot development company in Dubai. Custom bots, agents, RAG, and LLM integrations for UAE businesses. Free AI consultation.",
  openGraph: buildOpenGraph({
      title: "AI Chatbot Development Company in Dubai | UAE",
      description: "Technioz builds AI solutions for Dubai businesses including chatbots, agents, RAG systems, and workflow automation.",
      url: "https://technioz.com/ai-development-company-dubai",
    }),
  alternates: {
    canonical: "https://technioz.com/ai-development-company-dubai",
  },
};

export default function AiDevelopmentCompanyDubai() {
  return (
    <>
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="Dubai, UAE" />
            <span className="e1 text-cobolt-500">Dubai, UAE</span>
            <h1 className="h2 text-black-500">AI Development Company in Dubai</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Dubai is positioning itself as a global AI hub. We help UAE and GCC businesses turn that ambition into working products — chatbots that answer accurately, agents that automate workflows, RAG systems grounded in private data, and LLM integrations deployed securely.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>AI chatbots, intelligent agents, RAG systems, and LLM integrations for the UAE market</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Private, secure deployments on AWS, Azure, and Google Cloud with data residency in mind</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>From proof-of-concept to production systems with guardrails, monitoring, and cost controls</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Book a Free Strategy Call</Link>
              <Link href="/ai-solutions" className="e2 text-cobolt-500">Read the AI solutions guide →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">Why Dubai Businesses Trust Technioz for AI</h2>
            <p className="p3 text-black-400">We bridge the gap between AI prototypes and production systems that your team can actually use.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Use-Case Focus", desc: "We identify where AI adds real ROI rather than adding it where it is only a distraction." },
              { title: "Private & Secure", desc: "Design deployments with data privacy, access control, and regional hosting in mind." },
              { title: "Model Agnostic", desc: "OpenAI, Claude, Gemini, AWS Bedrock, Azure OpenAI, and open-source models matched to the task." },
              { title: "Grounded Answers", desc: "RAG and knowledge bases that ground responses in your documents, not the open internet." },
              { title: "Cost Control", desc: "Token budgets, caching, and model routing that keep AI spend predictable." },
              { title: "Production Ready", desc: "Monitoring, guardrails, fallbacks, and evaluation loops so AI stays reliable." },
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
            <h2 className="h4 text-black-500 mb-4">AI Solutions We Build in Dubai</h2>
            <p className="p3 text-black-400">We design AI features and systems across the sectors driving Dubai&apos;s economy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI Chatbots", desc: "Customer support, internal help desks, and FAQ bots that resolve questions without hallucinations.", tags: ["NLP", "RAG", "Support"], link: "/services/ai-chatbot-development" },
              { title: "AI Agents", desc: "Autonomous agents that perform multi-step tasks across APIs, documents, and tools.", tags: ["Agents", "Automation", "APIs"], link: "/services/ai-agent-development" },
              { title: "RAG Systems", desc: "Internal search and Q&A grounded in your policies, contracts, and knowledge bases.", tags: ["Embeddings", "Search", "Private"], link: "/services/rag-system-development" },
              { title: "Workflow Automation", desc: "AI-powered document processing, classification, and decision support.", tags: ["OCR", "Classify", "Route"], link: "/services/ai-workflow-automation" },
              { title: "LLM Integration", desc: "Embed OpenAI, Claude, Gemini, or Azure OpenAI securely into your existing products.", tags: ["OpenAI", "Claude", "Azure"], link: "/services/llm-integration" },
              { title: "AI Consulting", desc: "Feasibility studies, roadmap design, and responsible AI strategy for leadership teams.", tags: ["Strategy", "Roadmap", "ROI"], link: "/ai-solutions" },
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
            <h2 className="h4 !text-white-200 mb-4">AI Stack We Use in Dubai</h2>
            <p className="p3 text-black-200">Production-grade tools and providers selected for capability, security, and cost efficiency.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["OpenAI", "Anthropic Claude", "Google Gemini", "Azure OpenAI", "AWS Bedrock", "LangChain", "LlamaIndex", "Pinecone", "Weaviate", "Chroma", "Vector DBs", "Python", "FastAPI", "Node.js", "LangSmith", "LiteLLM"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="max-w-[700px]">
              <h2 className="h4 text-black-500 mb-4">AI for the UAE Market</h2>
              <p className="p3 text-black-400 mb-6">Dubai&apos;s AI strategy is ambitious, but real value comes from practical applications. We help you identify high-impact use cases, build responsibly, and deploy securely.</p>
              <ul className="flex flex-col gap-3 p4 text-black-400">
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Bilingual AI interfaces in Arabic and English where needed</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Cloud deployment options aligned to data residency and governance preferences</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Evaluation frameworks to measure accuracy, cost, and user satisfaction</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Responsible AI guardrails including moderation, PII handling, and access control</span></li>
              </ul>
            </div>
            <div className="bg-white-300 rounded-sm p-[32px]">
              <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 mb-4">Local Coverage</h3>
              <p className="p4 text-black-400 mb-4">We support AI projects across the UAE and GCC with remote delivery and on-call engineering aligned to regional hours.</p>
              <div className="flex flex-wrap gap-2">
                {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Riyadh", "Jeddah", "Doha", "Kuwait City", "Manama"].map((c) => (
                  <span key={c} className="text-[12px] text-black-300 bg-black-500/5 px-2 py-1 rounded-sm">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-[600px]">
            <h2 className="h3 !text-white-100 mb-4">Bring AI to Your Dubai Business</h2>
            <p className="p3 text-white-100/80">Tell us the problem you want AI to solve. We&apos;ll build a secure, measurable, production-ready solution.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Book a Free Strategy Call</Link>
        </div>
      </section>
    </>
  );
}

function Breadcrumb({ label }: { label: string }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "AI Solutions", href: "/services/ai-solutions" }, { name: label }]} />
      <div className="flex items-center gap-2 text-black-300 p5">
        <Link href="/" className="hover:text-cobolt-500">Home</Link> / <Link href="/services" className="hover:text-cobolt-500">Services</Link> / <Link href="/services/ai-solutions" className="hover:text-cobolt-500">AI Solutions</Link> / <span>{label}</span>
      </div>
    </>
  );
}
