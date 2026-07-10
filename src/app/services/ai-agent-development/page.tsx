import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent Development Company | Autonomous Workflow Bots | Technioz",
  description: "AI agent development company. Autonomous workflow bots that take real actions across APIs, documents, and business tools.",
  openGraph: {
    title: "AI Agent Development Company | Autonomous Workflow Bots | Technioz",
    description:
      "Technioz designs and builds AI agents that take action across tools, APIs, and workflows.",
    url: "https://technioz.com/services/ai-agent-development",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://technioz.com/services/ai-agent-development",
  },
};

export default function AIAgentDevelopment() {
  return (
    <>
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="AI Agent Development" />
            <span className="e1 text-black-300">{'\u{1F916}'} AI Agent Development</span>
            <h1 className="h2 text-black-500">AI Agents That Do Work, Not Just Talk</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Chatbots answer questions. AI agents take action. We build autonomous systems that research, plan, call APIs, update records, and execute workflows — with oversight where it matters.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Autonomous agents that interact with your tools, APIs, and databases</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Multi-step reasoning, planning, memory, and human approval loops</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Built with LangChain, CrewAI, AutoGen, and OpenAI function calling</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Get a Free AI Agent Consultation</Link>
              <Link href="/services/ai-solutions" className="e2 text-cobolt-500">Back to AI solutions →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">What Makes an Agent Different From a Bot</h2>
            <p className="p3 text-black-400">Agents combine reasoning, memory, tools, and autonomy to perform tasks that used to need a person.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Tool Use", desc: "Call APIs, query databases, send emails, create tickets, and update CRM records." },
              { title: "Planning", desc: "Break complex requests into steps, execute them in order, and recover from errors." },
              { title: "Memory", desc: "Recall prior interactions, user preferences, and session context." },
              { title: "Reasoning", desc: "Evaluate options, compare data, and explain decisions before acting." },
              { title: "Human Oversight", desc: "Require approval for sensitive actions and log everything for audit." },
              { title: "Multi-Agent Teams", desc: "Orchestrate specialized agents that collaborate on larger tasks." },
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
            <h2 className="h4 text-black-500 mb-4">AI Agents We Build</h2>
            <p className="p3 text-black-400">Focused agents for high-value business workflows.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Research Agents", desc: "Gather, summarize, and cite information from internal and external sources.", tags: ["RAG", "Search", "Citations"], link: "/services/rag-system-development" },
              { title: "Operations Agents", desc: "Automate order processing, inventory checks, and fulfillment updates.", tags: ["ERP", "APIs", "Workflow"], link: null },
              { title: "Sales Agents", desc: "Qualify leads, schedule demos, draft proposals, and update CRM.", tags: ["CRM", "Email", "Calendar"], link: null },
              { title: "Support Agents", desc: "Resolve tickets, escalate complex issues, and update knowledge bases.", tags: ["Tickets", "Chat", "KB"], link: "/services/ai-chatbot-development" },
              { title: "Compliance Agents", desc: "Review documents, flag risks, and generate audit trails.", tags: ["Audit", "Docs", "Risk"], link: null },
              { title: "DevOps Agents", desc: "Monitor logs, create alerts, run diagnostics, and suggest fixes.", tags: ["Logs", "Monitoring", "Cloud"], link: "/services/devops-services" },
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
            <h2 className="h4 !text-white-200 mb-4">Agent Technologies We Use</h2>
            <p className="p3 text-black-200">Frameworks and models that support reasoning, memory, and tool integration.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["LangChain", "CrewAI", "AutoGen", "OpenAI Functions", "Claude", "LlamaIndex", "Pinecone", "Weaviate", "FastAPI", "Node.js", "Docker", "AWS Bedrock", "Google Vertex AI"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-12">Our AI Agent Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Workflow Mapping", desc: "Identify tasks, decisions, tools, and approval points." },
              { title: "Tool Integration", desc: "Connect APIs, databases, and enterprise systems the agent will use." },
              { title: "Agent Build", desc: "Implement reasoning, memory, guardrails, and multi-agent orchestration." },
              { title: "Deploy & Monitor", desc: "Run in production with logging, cost tracking, and human oversight." },
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
              { title: "LLM Integration", desc: "Connect large language models into your existing products.", href: "/services/llm-integration" },
              { title: "AI Workflow Automation", desc: "Automate repetitive decisions and document processing.", href: "/services/ai-workflow-automation" },
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
            <h2 className="h3 !text-white-100 mb-4">Want an AI Agent That Handles Real Tasks?</h2>
            <p className="p3 text-white-100/80">Tell us the workflow you want to automate. We&apos;ll design an agent with the right level of autonomy and oversight.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Start Your AI Agent Project</Link>
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
