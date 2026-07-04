import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RAG System Development Services | Technioz",
  description: "RAG system development that grounds LLM answers in your private documents, knowledge bases, and policies.",
  openGraph: {
    title: "RAG System Development Services | Enterprise AI Search | Technioz",
    description:
      "Technioz builds RAG systems that ground LLM answers in your private documents and knowledge bases.",
    url: "https://technioz.com/services/rag-system-development",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://technioz.com/services/rag-system-development",
  },
};

export default function RagSystemDevelopment() {
  return (
    <>
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="RAG System Development" />
            <span className="e1 text-black-300">{'\u{1F4C1}'} RAG System Development</span>
            <h1 className="h2 text-black-500">RAG Systems That Give LLMs Your Knowledge - Safely</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Generic LLMs hallucinate and leak. RAG fixes both by retrieving facts from your documents before generating answers. We build RAG pipelines that are accurate, traceable, and secure.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Ground AI answers in your PDFs, wikis, databases, and policies</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Vector search, chunking strategies, re-ranking, and citation trails</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Private deployment, access controls, and data isolation</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Get a Free RAG Assessment</Link>
              <Link href="/services/ai-solutions" className="e2 text-cobolt-500">Back to AI solutions →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">Why RAG Beats Fine-Tuning for Most Businesses</h2>
            <p className="p3 text-black-400">RAG keeps answers current, cites sources, and does not require retraining models when your documents change.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Source Grounding", desc: "Every answer is tied to specific documents, pages, or records — not model memory." },
              { title: "No Hallucination", desc: "The model answers only from retrieved context, dramatically reducing false claims." },
              { title: "Always Current", desc: "Update documents and the answers update immediately — no model retraining." },
              { title: "Access Control", desc: "Retrieve only from documents the user is allowed to see." },
              { title: "Citations", desc: "Show users exactly where the answer came from for trust and audit." },
              { title: "Privacy First", desc: "Run inside your VPC or on-premise so sensitive data never leaves." },
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
            <h2 className="h4 text-black-500 mb-4">RAG Systems We Build</h2>
            <p className="p3 text-black-400">Turn your unstructured data into an answer engine.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Knowledge Base Search", desc: "Internal wikis, SOPs, and documentation that employees can query in plain English.", tags: ["Wiki", "Docs", "Search"], link: null },
              { title: "Document Q&A", desc: "Upload contracts, reports, or manuals and get cited answers instantly.", tags: ["PDF", "OCR", "Citations"], link: null },
              { title: "Customer Support RAG", desc: "Ground chatbot answers in product docs, FAQs, and past tickets.", tags: ["Chatbot", "Tickets", "KB"], link: "/services/ai-chatbot-development" },
              { title: "Legal & Compliance", desc: "Search regulations, contracts, and policies with traceable answers.", tags: ["Legal", "Audit", "Security"], link: null },
              { title: "Healthcare RAG", desc: "HIPAA-aware clinical and research search with controlled access.", tags: ["HIPAA", "Clinical", "Research"], link: "/solutions/healthcare" },
              { title: "Sales Enablement", desc: "Instant answers from battle cards, case studies, and product sheets.", tags: ["Sales", "CRM", "Content"], link: null },
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
            <h2 className="h4 !text-white-200 mb-4">RAG Technologies We Use</h2>
            <p className="p3 text-black-200">Vector databases, embedding models, and retrieval pipelines tuned for accuracy.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["OpenAI Embeddings", "Claude", "LangChain", "LlamaIndex", "Pinecone", "Weaviate", "Chroma", "PGVector", "Redis", "FastAPI", "Python", "AWS Bedrock", "Azure OpenAI"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-12">Our RAG Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Source Audit", desc: "Identify documents, permissions, and answer quality requirements." },
              { title: "Ingestion", desc: "Extract, chunk, embed, and index content for effective retrieval." },
              { title: "Retrieval Tuning", desc: "Optimize chunk size, re-ranking, and hybrid search for accuracy." },
              { title: "Deploy & Monitor", desc: "Launch with guardrails, citations, and usage analytics." },
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
              { title: "AI Chatbot Development", desc: "Turn your RAG pipeline into a conversational assistant.", href: "/services/ai-chatbot-development" },
              { title: "LLM Integration", desc: "Connect models and embeddings to your product.", href: "/services/llm-integration" },
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
            <h2 className="h3 !text-white-100 mb-4">Ready to Make Your Documents Answer Questions?</h2>
            <p className="p3 text-white-100/80">Tell us what knowledge you want unlocked. We&apos;ll design a RAG system that is accurate and secure.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Start Your RAG Project</Link>
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
