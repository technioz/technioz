export const demoWidgetTabs = [
  {
    label: "Web Development",
    model: "React + Next.js",
    content: "Your web app preview will appear here...",
    code: "// components/App.tsx\n'use client'\n\nexport function App() {\n  return (\n    <main>\n      <h1>Your App</h1>\n      <p>Built with React + Next.js</p>\n    </main>\n  )\n}",
  },
  {
    label: "Mobile App",
    model: "React Native",
    content: "Your mobile app preview will appear here...",
    code: "import { View, Text } from 'react-native'\n\nexport default function App() {\n  return (\n    <View>\n      <Text>Your App</Text>\n    </View>\n  )\n}",
  },
  {
    label: "AI Integration",
    model: "OpenAI + LangChain",
    content: "Your AI integration results will appear here...",
    code: "import { OpenAI } from 'openai'\n\nconst client = new OpenAI({\n  apiKey: process.env.OPENAI_KEY\n})\n\nconst response = await client\n  .chat.completions.create({\n    model: 'gpt-4',\n    messages: [...]\n  })",
  },
];

export const marqueeCustomers = [
  { name: "Al Khanjry", logo: "/assets/customers/alkhanjry.webp" },
  { name: "IGL Transport", logo: "/assets/customers/igl-transport.webp" },
  { name: "Hatta Sky", logo: "/assets/customers/hatta-sky.webp" },
  { name: "Hatta Food Hub", logo: "/assets/customers/hatta-food-hub.webp" },
  { name: "Sky Growers", logo: "/assets/customers/sky-growers.webp" }
];

export const referenceFlowSteps = [
  {
    title: "Infrastructure you can build a business on",
    desc: "Global redundancy, enterprise-grade uptime, and millions of requests processed every day. The infrastructure your product can depend on at any scale.",
    image: "Infrastructure diagram",
    cta: { label: "Explore Enterprise", href: "/services/cloud-services" },
  },
  {
    title: "Pricing that doesn't turn against you at scale",
    desc: "No concurrency limits, no throttles, no forced commitments — the same team scales from your first prototype to 400,000 users a month.",
    image: "Pricing model",
    cta: { label: "See pricing", href: "/contact" },
  },
  {
    title: "Less time configuring tools, more time shipping",
    desc: "We let you choose which parts of the stack you need, build quickly, and scale what works — with a team that becomes an extension of yours.",
    image: "Shipping velocity",
    cta: { label: "Explore product overview", href: "/services" },
  },
];

export const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Docker", "Kubernetes",
  "MongoDB", "PostgreSQL", "GraphQL", "REST API", "Redux", "Tailwind CSS", "Flutter",
  "React Native", "Azure", "CI/CD", "Microservices", "Serverless",
];

export const testimonials = [
  {
    quote:
      "Technioz took the time to really understand our business and delivered a solution that just works. Communication was easy and the team was always responsive.",
    author: "Rashid Alkhanjry",
    role: "Founder/CEO, Al Khanjry Transport",
    caseStudyHref: "/portfolio/alkhanjry-transport",
  },
  {
    quote:
      "We needed a partner who could guide us through the tech side of things, and Technioz did exactly that. The new system has made our daily work so much smoother.",
    author: "Ali Salem",
    role: "Founder/CEO, Hatta Sky",
  },
  {
    quote:
      "From start to finish, the process was straightforward and professional. Our team and customers love the new platform — thank you, Technioz!",
    author: "Abdul Rehman",
    role: "Founder/CEO, Hatta Food Hub",
    caseStudyHref: "/portfolio/food-delivery-app",
  },
  {
    quote:
      "Moving our ticketing and fleet operations online was a big shift for our team. Technioz made the transition smooth, kept us informed at every stage, and delivered a platform that has cut manual work across our routes.",
    author: "Shahid Yousef",
    role: "Founder/CEO, IGL Transport",
  },
  {
    quote:
      "We were looking for a partner who could help us build a scalable and efficient system, and Technioz delivered. The new system has made our daily work so much smoother.",
    author: "Upkar Singh",
    role: "Founder/CEO, Sky Growers",
    caseStudyHref: "/portfolio/sky-growers",
  }
];
