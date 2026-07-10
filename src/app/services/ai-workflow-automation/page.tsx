import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Workflow Automation Company | Document & Process Bots | Technioz",
  description: "AI workflow automation company. Reduce manual work with document processing, classification, routing, and intelligent decisions.",
  openGraph: {
    title: "AI Workflow Automation Company | Document & Process Bots | Technioz",
    description:
      "Technioz uses AI to automate repetitive workflows: document processing, data extraction, approvals, and decision support.",
    url: "https://technioz.com/services/ai-workflow-automation",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://technioz.com/services/ai-workflow-automation",
  },
};

export default function AIWorkflowAutomation() {
  return (
    <>
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="AI Workflow Automation" />
            <span className="e1 text-black-300">{'\u{2699}'} AI Workflow Automation</span>
            <h1 className="h2 text-black-500">Automate the Boring Work With AI</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Manual data entry, document review, and approval routing slow teams down and introduce errors. We build AI workflows that read documents, extract data, make decisions, and trigger actions — so your people focus on judgment, not keystrokes.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Document processing, data extraction, classification, and routing</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>LLM-powered decision support with human approval where needed</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Integration with your existing CRM, ERP, email, and productivity tools</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Get a Free Workflow Audit</Link>
              <Link href="/services/ai-solutions" className="e2 text-cobolt-500">Back to AI solutions →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">What AI Workflow Automation Replaces</h2>
            <p className="p3 text-black-400">We target the repetitive tasks that drain time and create errors.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Document Intake", desc: "Read invoices, forms, contracts, and emails automatically." },
              { title: "Data Extraction", desc: "Pull structured data from unstructured documents and PDFs." },
              { title: "Classification", desc: "Route requests, tickets, and documents to the right team." },
              { title: "Approval Routing", desc: "Escalate based on rules, risk scores, or amount thresholds." },
              { title: "Response Drafting", desc: "Generate replies, summaries, and follow-ups for review." },
              { title: "Quality Checks", desc: "Flag inconsistencies, missing fields, and policy violations." },
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
            <h2 className="h4 text-black-500 mb-4">Workflows We Automate</h2>
            <p className="p3 text-black-400">Real processes across operations, finance, HR, and customer service.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Invoice Processing", desc: "Extract vendor, amount, and line items; route for approval and sync to accounting.", tags: ["OCR", "AP", "ERP"], link: null },
              { title: "Contract Review", desc: "Flag clauses, compare against templates, and surface risks.", tags: ["Legal", "NLP", "Risk"], link: null },
              { title: "Customer Ticket Routing", desc: "Classify, prioritize, and suggest responses for support teams.", tags: ["Support", "CRM", "AI"], link: "/services/ai-chatbot-development" },
              { title: "Resume Screening", desc: "Parse CVs, match against job criteria, and shortlist candidates.", tags: ["HR", "ATS", "Matching"], link: null },
              { title: "Claims Processing", desc: "Extract claim details, validate documents, and route for decision.", tags: ["Insurance", "Docs", "Rules"], link: null },
              { title: "Order Fulfillment", desc: "Verify orders, check inventory, and trigger downstream systems.", tags: ["ERP", "Inventory", "APIs"], link: null },
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
            <h2 className="h4 !text-white-200 mb-4">Automation Technologies We Use</h2>
            <p className="p3 text-black-200">A mix of LLMs, RPA, integration tools, and custom pipelines.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["OpenAI", "Claude", "LangChain", "n8n", "Make", "Zapier", "Python", "Node.js", "FastAPI", "AWS Lambda", "Google Document AI", "OCR", "Webhook", "RPA"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-12">Our Workflow Automation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Process Discovery", desc: "Map the current workflow, pain points, and decision points." },
              { title: "AI Design", desc: "Choose extraction, classification, or generation models and guardrails." },
              { title: "Build & Connect", desc: "Develop the pipeline and integrate with your existing tools." },
              { title: "Run & Improve", desc: "Deploy with monitoring, human review, and continuous accuracy tuning." },
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
              { title: "AI Agent Development", desc: "Move from static workflows to autonomous decision-making agents.", href: "/services/ai-agent-development" },
              { title: "LLM Integration", desc: "Connect language models into your existing systems.", href: "/services/llm-integration" },
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
            <h2 className="h3 !text-white-100 mb-4">What&apos;s the Repetitive Work You Want Gone?</h2>
            <p className="p3 text-white-100/80">Tell us the process. We&apos;ll design an AI automation that cuts time and errors without removing human judgment.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Start Your Automation Project</Link>
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
