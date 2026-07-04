import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";
import { AIMLDiagram } from "@/components/diagrams/aiml-diagram";

export const metadata: Metadata = {
  title: "AI Solutions & Machine Learning | Technioz",
  description: "AI and machine learning development services. Chatbots, intelligent agents, RAG systems, and workflow automation.",
  openGraph: {
    title: "AI Solutions & Machine Learning Development Services | Technioz",
    description:
      "Technioz builds practical AI solutions: chatbots, AI agents, RAG systems, LLM integrations, and workflow automation.",
    url: "https://technioz.com/services/ai-solutions",
    images: ["/logo.webp"],
  },
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
            <Breadcrumb label="AI Solutions" />
            <span className="e1 text-black-300">{'\u{1F916}'} AI & Machine Learning</span>
            <h1 className="h2 text-black-500">AI Solutions That Actually Deliver Business Value</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              AI projects fail when they chase hype instead of outcomes. We design, train, and deploy AI systems that cut costs, automate decisions, and improve customer experiences — with measurable ROI.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>LLM integration, RAG systems, AI agents, and predictive models</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Production-ready deployment with monitoring, safety, and cost control</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Strategy-first approach: use cases, data audit, and feasibility before build</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary">Get a Free AI Consultation</Link>
              <Link href="/ai-solutions" className="e2 text-cobolt-500">Read the AI solutions guide →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[80px]">
          <div className="max-w-[640px] flex flex-col gap-[16px] mb-10">
            <span className="e1 inline-flex items-center justify-center border px-[16px] py-[8px] border-black-400 text-black-400 w-fit">ML Pipeline</span>
            <h2 className="h4 text-black-500">From Raw Data to Production AI</h2>
            <p className="p3 text-black-400">Every AI project follows a structured pipeline — from data collection through model training to deployment, monitoring, and continuous improvement.</p>
          </div>
          <div className="bg-white-200 border border-neutral-300 rounded-sm p-6 lg:p-10">
            <AIMLDiagram />
          </div>
        </div>
      </section>

      <FeatureGrid />
      <AIServices />
      <Industries />
      <ProcessSection />

      <RelatedServices />
      <CTASection />
    </>
  );
}

const related = [
  { title: "AI Chatbot Development", desc: "Conversational agents for support, sales, onboarding, and internal help desks.", href: "/services/ai-chatbot-development" },
  { title: "AI Agent Development", desc: "Autonomous agents that take actions across tools, APIs, and workflows.", href: "/services/ai-agent-development" },
  { title: "RAG Systems", desc: "Retrieval-augmented generation that grounds LLM answers in your private documents.", href: "/services/rag-system-development" },
];

function RelatedServices() {
  return (
    <section className="bg-white-300">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
        <h2 className="h4 text-black-500 mb-8">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((s) => (
            <Link key={s.href} href={s.href} className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-[12px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group">
              <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 group-hover:text-cobolt-500 transition-colors">{s.title}</h3>
              <p className="p4 text-black-400">{s.desc}</p>
              <span className="e2 text-cobolt-500 mt-2">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
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

function FeatureGrid() {
  return (
    <section className="bg-white-300">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <h2 className="h4 text-black-500 mb-4">Why AI Projects Fail — and Why Ours Don&apos;t</h2>
          <p className="p3 text-black-400">We focus on practical use cases, clean data, responsible design, and production reliability.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Use-Case First", desc: "We identify high-value automation and insight opportunities before selecting models or vendors." },
            { title: "Production-Ready", desc: "APIs, monitoring, guardrails, and cost controls so AI works reliably in live environments." },
            { title: "Private & Secure", desc: "On-premise, VPC, and private-cloud options for sensitive data and regulated industries." },
            { title: "Human-in-the-Loop", desc: "Interfaces that combine AI speed with human oversight for decisions that matter." },
            { title: "Transparent & Explainable", desc: "Clear outputs, citations, and audit trails so teams trust the system." },
            { title: "Scalable MLOps", desc: "CI/CD for models, automated retraining, and version control across experiments." },
          ].map((f, i) => (
            <div key={i} className="bg-white-200 rounded-sm p-[32px]">
              <h3 className="font-display text-[18px] font-medium text-black-500 mb-2">{f.title}</h3>
              <p className="p4 text-black-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIServices() {
  const services = [
    { title: "AI Chatbots & Assistants", desc: "Conversational agents for support, sales, onboarding, and internal help desks.", techs: "OpenAI GPT, Claude, Dialogflow, Rasa", link: "/services/ai-chatbot-development" },
    { title: "AI Agent Development", desc: "Autonomous agents that take actions across tools, APIs, and workflows.", techs: "LangChain, CrewAI, AutoGen, OpenAI Functions", link: "/services/ai-agent-development" },
    { title: "RAG Systems", desc: "Retrieval-augmented generation that grounds LLM answers in your private documents.", techs: "Pinecone, Weaviate, OpenAI, LangChain", link: "/services/rag-system-development" },
    { title: "LLM Integration", desc: "Connect large language models into your existing products and processes.", techs: "OpenAI, Anthropic, Cohere, AWS Bedrock", link: "/services/llm-integration" },
    { title: "AI Workflow Automation", desc: "Automate repetitive decisions, data extraction, and document processing.", techs: "n8n, Make, Zapier, custom pipelines", link: "/services/ai-workflow-automation" },
    { title: "Predictive Analytics", desc: "Forecast behavior, demand, churn, and risk with machine learning models.", techs: "Scikit-learn, XGBoost, Prophet, TensorFlow", link: null },
  ];

  return (
    <section className="bg-white-200">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
        <div className="max-w-[700px] mb-12">
          <h2 className="h4 text-black-500 mb-4">AI & Machine Learning Services</h2>
          <p className="p3 text-black-400">We match the right technique to your business problem — not the other way around.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white-300 rounded-sm p-[32px] flex flex-col gap-[16px]">
              <h3 className="font-display text-[22px] leading-none tracking-[-1.1px] text-black-500">{s.title}</h3>
              <p className="p4 text-black-400">{s.desc}</p>
              <div className="text-[12px] font-mono uppercase tracking-[1px] text-cobolt-500">Technologies: {s.techs}</div>
              {s.link && <Link href={s.link} className="e2 text-cobolt-500 text-sm mt-1">Learn more →</Link>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="bg-black-500">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
        <div className="max-w-[700px] mb-12">
          <h2 className="h4 !text-white-200 mb-4">AI Solutions Across Industries</h2>
          <p className="p3 text-black-200">Every industry has different data, compliance, and workflow constraints. Here is where we have delivered results.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            ["Healthcare", "Medical imaging analysis, patient triage bots, and clinical documentation automation.", ["Diagnostic Assistance", "Triage Chatbots", "Clinical Notes"]],
            ["Finance", "Fraud detection, credit scoring, risk modeling, and automated compliance checks.", ["Fraud Detection", "Credit Scoring", "Risk Management"]],
            ["Retail & E-commerce", "Personalized recommendations, inventory forecasting, and customer support automation.", ["Recommendations", "Demand Forecasting", "Support Bots"]],
            ["Manufacturing", "Predictive maintenance, quality inspection, and supply chain optimization.", ["Predictive Maintenance", "Quality Control", "Supply Chain"]],
            ["Logistics", "Route optimization, demand prediction, and fleet management.", ["Route Optimization", "Fleet Management", "Demand Planning"]],
            ["Education", "Adaptive learning, automated grading, and student support assistants.", ["Adaptive Learning", "Auto-Grading", "Student Support"]],
          ].map(([title, desc, apps]) => (
            <div key={title as string} className="border border-black-400 rounded-sm p-[32px] flex flex-col gap-[12px]">
              <h3 className="font-display text-[24px] leading-none tracking-[-1.2px] !text-white-200">{title as string}</h3>
              <p className="p4 text-black-200">{desc as string}</p>
              <div className="flex flex-wrap gap-2">
                {(apps as string[]).map((a) => <span key={a} className="text-[12px] text-cobolt-300 bg-black-400/30 px-2 py-1 rounded-sm">{a}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-white-200">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
        <h2 className="h4 text-black-500 mb-12">Our AI Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { title: "Problem Definition", desc: "Identify high-value use cases and define success metrics." },
            { title: "Data Assessment", desc: "Audit data quality, sources, and privacy requirements." },
            { title: "Model Development", desc: "Train, evaluate, and select the right model or LLM setup." },
            { title: "Integration & Testing", desc: "Connect to your product, add guardrails, and test edge cases." },
            { title: "Deployment & Monitoring", desc: "Launch with observability, cost tracking, and feedback loops." },
          ].map((s, i) => (
            <div key={s.title} className="flex gap-[16px]">
              <span className="font-display text-[40px] leading-none text-cobolt-500/30">0{i + 1}</span>
              <div>
                <h3 className="font-display text-[18px] font-medium text-black-500 mb-2">{s.title}</h3>
                <p className="p4 text-black-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-cobolt-500">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-[600px]">
          <h2 className="h3 !text-white-100 mb-4">Ready to Put AI to Work?</h2>
          <p className="p3 text-white-100/80">Share your challenge. We&apos;ll identify the right AI approach and outline a practical implementation plan.</p>
        </div>
        <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Start Your AI Project</Link>
      </div>
    </section>
  );
}
