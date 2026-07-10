import { NextRequest, NextResponse } from "next/server";
import { writeFileSync, mkdirSync } from "fs";
import path from "path";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

export const dynamic = "force-dynamic";

function getPrisma() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }
  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
}

interface WebhookArticle {
  id: string;
  title: string;
  content_markdown: string;
  content_html: string;
  meta_description?: string;
  created_at: string;
  image_url?: string;
  slug: string;
  tags?: string[];
}

export async function POST(request: NextRequest) {
  try {
    // Validate Bearer token
    const authHeader = request.headers.get("authorization");
    const expectedToken = process.env.ARTICLE_WEBHOOK_SECRET;

    if (!expectedToken) {
      return NextResponse.json(
        { error: "Webhook secret not configured" },
        { status: 500 }
      );
    }

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Missing or invalid authorization header" },
        { status: 401 }
      );
    }

    const token = authHeader.slice("Bearer ".length).trim();
    if (token !== expectedToken) {
      return NextResponse.json(
        { error: "Invalid webhook token" },
        { status: 401 }
      );
    }

    const body = await request.json();

    if (body.event_type !== "publish_articles") {
      return NextResponse.json(
        { error: `Unsupported event type: ${body.event_type}` },
        { status: 400 }
      );
    }

    const articles: WebhookArticle[] = body.data?.articles || [];
    const results = [];

    for (const article of articles) {
      // Download image if provided
      let localImagePath: string | null = null;
      if (article.image_url) {
        localImagePath = await downloadImage(article.image_url, article.slug);
      }

      // Infer category from tags if possible
      const category = inferCategory(article.tags);

      // Build excerpt from meta description or markdown
      const excerpt =
        article.meta_description ||
        truncate(stripMarkdown(article.content_markdown), 160);

      const imageAlt = article.title;

      const prisma = getPrisma();
      const saved = await prisma.article.upsert({
        where: { externalId: article.id },
        update: {
          slug: article.slug,
          title: article.title,
          excerpt,
          contentMarkdown: article.content_markdown,
          contentHtml: article.content_html,
          metaDescription: article.meta_description || excerpt,
          category,
          imageUrl: article.image_url,
          imageLocalPath: localImagePath,
          imageAlt,
          publishedAt: new Date(article.created_at),
          tags: {
            set: [],
            connectOrCreate: (article.tags || []).map((name) => ({
              where: { name: name.toLowerCase() },
              create: { name: name.toLowerCase() },
            })),
          },
        },
        create: {
          externalId: article.id,
          slug: article.slug,
          title: article.title,
          excerpt,
          contentMarkdown: article.content_markdown,
          contentHtml: article.content_html,
          metaDescription: article.meta_description || excerpt,
          category,
          authorName: "Technioz Team",
          authorRole: "Editorial",
          imageUrl: article.image_url,
          imageLocalPath: localImagePath,
          imageAlt,
          publishedAt: new Date(article.created_at),
          tags: {
            connectOrCreate: (article.tags || []).map((name) => ({
              where: { name: name.toLowerCase() },
              create: { name: name.toLowerCase() },
            })),
          },
        },
      });

      results.push({
        id: saved.id,
        slug: saved.slug,
        status: "saved",
      });

      await prisma.$disconnect();
    }

    return NextResponse.json(
      {
        success: true,
        saved: results.length,
        articles: results,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Articles webhook error:", error);
    return NextResponse.json(
      {
        error: "Failed to process articles",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

async function downloadImage(url: string, slug: string): Promise<string | null> {
  try {
    const response = await fetch(url, { timeout: 30000 } as RequestInit);
    if (!response.ok) {
      console.warn(`Failed to download image from ${url}: ${response.status}`);
      return null;
    }

    const contentType = response.headers.get("content-type") || "";
    const ext = extensionFromContentType(contentType) || "jpg";
    const filename = `${slug}.${ext}`;
    const dir = path.join(process.cwd(), "public", "assets", "articles");
    mkdirSync(dir, { recursive: true });
    const filepath = path.join(dir, filename);

    const buffer = await response.arrayBuffer();
    writeFileSync(filepath, Buffer.from(buffer));

    return `/assets/articles/${filename}`;
  } catch (error) {
    console.warn(`Image download failed for ${slug}:`, error);
    return null;
  }
}

function extensionFromContentType(contentType: string): string | null {
  if (contentType.includes("image/webp")) return "webp";
  if (contentType.includes("image/png")) return "png";
  if (contentType.includes("image/jpeg") || contentType.includes("image/jpg"))
    return "jpg";
  if (contentType.includes("image/avif")) return "avif";
  return null;
}

function inferCategory(tags?: string[]): string {
  if (!tags || tags.length === 0) return "Insights";

  const tagMap: Record<string, string> = {
    "software architecture": "Custom Software",
    "software development": "Custom Software",
    "microservices": "Backend Development",
    "system design": "Custom Software",
    "cloud architecture": "Cloud & DevOps",
    "ai": "AI Solutions",
    "artificial intelligence": "AI Solutions",
    "chatbot": "AI Solutions",
    "machine learning": "AI Solutions",
    "llm": "AI Solutions",
    "mobile app": "Web & Mobile",
    "web app": "Web & Mobile",
    "react": "Frontend Development",
    "react native": "Web & Mobile",
    "flutter": "Web & Mobile",
    "ios": "Web & Mobile",
    "android": "Web & Mobile",
    "cloud": "Cloud & DevOps",
    "devops": "Cloud & DevOps",
    "docker": "Cloud & DevOps",
    "kubernetes": "Cloud & DevOps",
    "aws": "Cloud & DevOps",
    "security": "Security & Reliability",
    "compliance": "Consulting & Strategy",
    "healthcare": "Industry Solutions",
    "fintech": "Industry Solutions",
    "ecommerce": "Industry Solutions",
    "logistics": "Industry Solutions",
    "transport": "Industry Solutions",
    "startup": "Consulting & Strategy",
  };

  for (const tag of tags) {
    const lower = tag.toLowerCase();
    for (const [key, value] of Object.entries(tagMap)) {
      if (lower.includes(key)) return value;
    }
  }

  return "Insights";
}

function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/#{1,6}\s?/g, "")
    .replace(/\*\*|\*|__|_/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/>\s?/g, "")
    .replace(/-\s?/g, "")
    .replace(/\n+/g, " ")
    .trim();
}

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).replace(/\s+\S*$/, "").trim() + "...";
}
