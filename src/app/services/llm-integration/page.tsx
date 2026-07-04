import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LLM Integration Services | Technioz",
  description: "LLM integration services for OpenAI, Claude, Gemini, and Azure. Secure, cost-controlled AI features in your product.",
  openGraph: {
    title: "LLM Integration Services | OpenAI, Claude, Gemini | Technioz",
    description:
      "Technioz integrates large language models into your products and workflows.",
    url: "https://technioz.com/services/llm-integration",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://technioz.com/services/llm-integration",
  },
};

export default function LLMIntegration() {
  return (
    <>
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="LLM Integration" />
            <span className="e1 text-black-300">{'\u{1F4AC}'} LLM Integration</span>
            <h1 className="h2 text-black-500">Integrate LLMs Into Your Product — Without the Risk</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Adding a large language model to your app is easy. Doing it securely, cost-effectively, and accurately is not. We connect the right model to your use case and make it a reliable part of your system.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>OpenAI, Claude, Gemini, AWS Bedrock, Azure OpenAI, and open-source models</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Prompt engineering, caching, cost controls, and guardrails</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Secure API design, observability, and model fallback strategies</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Plan Your LLM Integration</Link>
              <Link href="/services/ai-solutions" className="e2 text-cobolt-500">Back to AI solutions →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">What Makes LLM Integration Production-Ready</h2>
            <p className="p3 text-black-400">We treat LLMs as infrastructure: monitored, secured, and optimized for reliability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Model Selection", desc: "Match the right model to latency, cost, accuracy, and privacy needs." },
              { title: "Prompt Engineering", desc: "Structured prompts, few-shot examples, and output parsing that work consistently." },
              { title: "Cost Controls", desc: "Token budgets, caching, model routing, and usage tracking to keep spend predictable." },
              { title: "Guardrails", desc: "Input filtering, output moderation, PII detection, and topic boundaries." },
              { title: "Observability", desc: "Logging, tracing, and evaluation pipelines so you know how the model performs." },
              { title: "Fallbacks", desc: "Graceful degradation when a model is slow, down, or over budget." },
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
            <h2 className="h4 text-black-500 mb-4">LLM Integrations We Build</h2>
            <p className="p3 text-black-400">Practical AI features inside real products and workflows.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI Assistants", desc: "Embedded assistants inside SaaS products, dashboards, and support tools.", tags: ["Chat", "RAG", "Actions"], link: "/services/ai-chatbot-development" },
              { title: "Content Generation", desc: "Draft emails, reports, descriptions, and code with human review loops.", tags: ["Copy", "Code", "Review"], link: null },
              { title: "Document Processing", desc: "Extract, classify, and summarize documents at scale.", tags: ["OCR", "NER", "Summary"], link: "/services/ai-workflow-automation" },
              { title: "Semantic Search", desc: "Natural-language search across internal knowledge bases and catalogs.", tags: ["Embeddings", "Search", "RAG"], link: "/services/rag-system-development" },
              { title: "Classification", desc: "Route tickets, classify content, and flag issues automatically.", tags: ["NLP", "Tags", "Routing"], link: null },
              { title: "Code Assistants", desc: "AI-powered code completion, review, and documentation tools.", tags: ["Copilot", "Dev", "API"], link: null },
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
            <h2 className="h4 !text-white-200 mb-4">LLM Providers We Work With</h2>
            <p className="p3 text-black-200">Multi-provider strategies that avoid lock-in and match use case to model.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["OpenAI", "Anthropic Claude", "Google Gemini", "AWS Bedrock", "Azure OpenAI", "Cohere", "Mistral", "Llama", "LangChain", "LiteLLM", "FastAPI", "Python", "Node.js"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-12">Our LLM Integration Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Use Case Mapping", desc: "Define the exact task, success criteria, and risks for the AI feature." },
              { title: "Model Selection", desc: "Choose providers, models, and hosting based on cost, latency, and privacy." },
              { title: "Integration", desc: "Build secure APIs, prompts, parsing, and guardrails." },
              { title: "Measure & Improve", desc: "Track accuracy, cost, latency, and user feedback in production." },
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
              { title: "AI Agent Development", desc: "Move beyond single calls to autonomous multi-step AI systems.", href: "/services/ai-agent-development" },
              { title: "RAG System Development", desc: "Ground LLM answers in your private data.", href: "/services/rag-system-development" },
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
            <h2 className="h3 !text-white-100 mb-4">Want to Add AI to Your Product?</h2>
            <p className="p3 text-white-100/80">Tell us the feature. We&apos;ll recommend the right model, architecture, and safeguards.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Start Your LLM Integration</Link>
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
