export type Tool = {
  slug: string;
  name: string;
  tagline: string;
  title: string;
  metaDescription: string;
  liveUrl: string;
  liveLabel: string;
  applicationCategory: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  features: string[];
  techs: string[];
  faq: { q: string; a: string }[];
  moneyPage: { label: string; href: string; blurb: string };
};

export const tools: Tool[] = [
  {
    slug: "uplink",
    name: "Uplink",
    tagline: "Video calls from your browser or your terminal.",
    title: "Uplink — Self-Hosted Video Calls",
    metaDescription:
      "Uplink is a self-hosted video calling platform by Technioz. Join from any browser or straight from your terminal with a native Rust client. No accounts, no installs.",
    liveUrl: "https://meet.heygauravbhatia.com",
    liveLabel: "Open Uplink",
    applicationCategory: "CommunicationsApplication",
    intro:
      "Uplink is a self-hosted video calling platform with two ways in: any browser, no install needed — or a native Rust terminal client for developers who never leave the keyboard. Share a room code, join, talk. No accounts, no plugins, no meeting software to administer. Technioz built and operates it end to end, from the WebRTC media stack to the server it runs on.",
    sections: [
      {
        heading: "What Uplink does",
        paragraphs: [
          "Rooms are created by code — anyone with the code joins in one click. The browser client gives you an adaptive video grid, chat, a command bar for keyboard control, and clean camera and microphone toggles that don't drop your devices mid-call.",
          "Everything runs on infrastructure we control: our own signaling server, our own STUN, with TURN relay as the fallback for strict networks. That's why calls connect on hotel Wi-Fi and carrier NAT where consumer tools often fail silently.",
        ],
      },
      {
        heading: "The terminal client",
        paragraphs: [
          "The part nobody else ships: uplink-terminal is a native Rust app that renders live video inside your terminal — real H.264 decoding, 48 kHz Opus audio, and a keyboard-driven interface. Join a call from the same window you run tmux in, which is exactly where most of our team already lives.",
        ],
      },
      {
        heading: "Built the hard way, on purpose",
        paragraphs: [
          "Uplink exists because real-time media is one of the hardest classes of software to build — NAT traversal, codec negotiation, mobile browser quirks — and we wanted the scar tissue. It's also our proof: when we build real-time features for your product, this is the depth of the team behind it.",
        ],
      },
    ],
    features: [
      "Rooms by code — no accounts, no scheduling",
      "Adaptive grid tiles, chat, and a keyboard command bar",
      "Native Rust terminal client with live video and audio",
      "Self-hosted STUN + TURN relay for strict networks",
      "Screen-lock resilient on mobile browsers",
      "Runs on a single container with a small footprint",
    ],
    techs: ["React", "TypeScript", "Node.js", "Socket.io", "WebRTC", "Rust", "OpenH264", "Opus"],
    faq: [
      {
        q: "Is Uplink free to use?",
        a: "Yes. Open a room at the live URL and share the code. There is no sign-up, no download, and no cost.",
      },
      {
        q: "Can I self-host Uplink?",
        a: "The platform is designed to run as a single container on your own server, with a configurable STUN/TURN setup. Talk to us if you want it deployed under your own domain.",
      },
      {
        q: "Why build a terminal video client?",
        a: "Because a surprising amount of work happens in terminals — servers, SSH sessions, pair programming. Uplink's Rust client brings calls to that environment instead of forcing a browser tab.",
      },
    ],
    moneyPage: {
      label: "Real-time and web development",
      href: "/web-mobile-app-development",
      blurb: "Need real-time features — calls, chat, live tracking — in your own product?",
    },
  },
  {
    slug: "neural-journal",
    name: "The Neural Journal",
    tagline: "An AI newspaper that writes itself, hourly.",
    title: "The Neural Journal — AI News Engine",
    metaDescription:
      "The Neural Journal is an autonomous AI news engine: it discovers stories hourly, clusters multi-source coverage, and publishes synthesized articles with no human editor.",
    liveUrl: "https://news.technioz.com",
    liveLabel: "Read The Neural Journal",
    applicationCategory: "NewsApplication",
    intro:
      "The Neural Journal is an autonomous news engine: every hour it discovers what the world is reporting, groups the coverage, and publishes synthesized multi-source articles — with no human editor in the loop. It has been running unattended around the clock, deciding what deserves a story and whether a draft is good enough to publish. Technioz built the entire pipeline: discovery, clustering, generation, quality gates, and the reader-facing newspaper itself.",
    sections: [
      {
        heading: "How the pipeline works",
        paragraphs: [
          "Discovery pulls topics hourly from news feeds and search, then clusters coverage of the same event across sources by similarity — so one story becomes one article, not ten duplicates.",
          "AI agents synthesize the clustered sources into a single balanced article, and a quality gate rejects anything that reads like a rough draft before it can reach the front page. Publishing, rankings, and sitemaps all run on a schedule with zero manual steps.",
        ],
      },
      {
        heading: "No human in the loop",
        paragraphs: [
          "The hard part of generative pipelines isn't writing — it's operating: preventing duplicate work when stories break, failing safely when a model call fails, and keeping quality stable over weeks of unattended runs. The Neural Journal handles all three, which is why it can run 24/7 without an editor.",
        ],
      },
      {
        heading: "Why we built it",
        paragraphs: [
          "It's the reference implementation of the AI automation work we do for clients — content pipelines, agent workflows, and unattended operations — built for ourselves first so the lessons ship to your project already paid for.",
        ],
      },
    ],
    features: [
      "Hourly topic discovery from live news sources",
      "Multi-source clustering — one event, one article",
      "LLM synthesis with automatic quality gating",
      "Fully unattended 24/7 publishing",
      "Server-rendered newspaper frontend",
    ],
    techs: ["Laravel", "PostgreSQL", "Redis", "LLM Agents", "Nuxt 4", "Tailwind CSS"],
    faq: [
      {
        q: "Where do the articles come from?",
        a: "From live news coverage: the engine discovers topics from public news feeds, clusters every source reporting the same event, and synthesizes one article from the full coverage.",
      },
      {
        q: "Is any human involved?",
        a: "No. Discovery, writing, quality checks, and publishing are all automated. Humans set the rules; the system runs them.",
      },
      {
        q: "Can something like this run for my industry?",
        a: "Yes — the same pipeline architecture powers monitoring, content, and reporting automation for clients. Talk to us about your use case.",
      },
    ],
    moneyPage: {
      label: "AI development services",
      href: "/ai-development-company-dubai",
      blurb: "Need an AI pipeline that runs itself — content, monitoring, reporting?",
    },
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}