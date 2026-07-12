import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

declare global {
  // eslint-disable-next-line no-var
  var __prisma__: PrismaClient | undefined;
}

function getPrisma() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }

  if (!global.__prisma__) {
    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL,
    });

    global.__prisma__ = new PrismaClient({ adapter });
  }

  return global.__prisma__;
}

export type DbArticle = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  contentHtml: string;
  category: string;
  publishedAt: Date;
  readTime: string;
  authorName: string;
  authorRole: string;
  featured: boolean;
  tags: string[];
  imageUrl: string | null;
  imageLocalPath: string | null;
  imageAlt: string | null;
  metaDescription: string | null;
};

function mapArticle(raw: {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  contentHtml: string | null;
  category: string;
  publishedAt: Date;
  authorName: string;
  authorRole: string;
  featured: boolean;
  tags: { name: string }[];
  imageUrl: string | null;
  imageLocalPath: string | null;
  imageAlt: string | null;
  metaDescription: string | null;
}): DbArticle {
  const wordCount = raw.contentHtml
    ? raw.contentHtml.replace(/<[^>]*>/g, "").trim().split(/\s+/).filter(Boolean).length
    : 0;

  const minutes = Math.max(1, Math.ceil(wordCount / 200));

  return {
    id: raw.id,
    slug: raw.slug,
    title: raw.title,
    excerpt: raw.excerpt || raw.metaDescription || "",
    contentHtml: raw.contentHtml || "",
    category: raw.category,
    publishedAt: raw.publishedAt,
    readTime: `${minutes} min read`,
    authorName: raw.authorName,
    authorRole: raw.authorRole,
    featured: raw.featured,
    tags: raw.tags.map((t) => t.name),
    imageUrl: raw.imageUrl,
    imageLocalPath: raw.imageLocalPath,
    imageAlt: raw.imageAlt,
    metaDescription: raw.metaDescription,
  };
}

export async function getAllDbArticles(): Promise<DbArticle[]> {
  const prisma = getPrisma();

  const articles = await prisma.article.findMany({
    orderBy: { publishedAt: "desc" },
    include: { tags: { select: { name: true } } },
  });

  return articles.map(mapArticle);
}

//to be used when all the blogs are from DB
export async function getDbArticlesPage({
  page,
  pageSize,
}: {
  page: number;
  pageSize: number;
}): Promise<{ items: DbArticle[]; total: number }> {
  const prisma = getPrisma();
  const skip = (page - 1) * pageSize;

  const [articles, total] = await Promise.all([
    prisma.article.findMany({
      orderBy: { publishedAt: "desc" },
      skip,
      take: pageSize,
      include: { tags: { select: { name: true } } },
    }),
    prisma.article.count(),
  ]);

  return {
    items: articles.map(mapArticle),
    total,
  };
}

export async function getDbArticleBySlug(slug: string): Promise<DbArticle | null> {
  const prisma = getPrisma();

  const article = await prisma.article.findUnique({
    where: { slug },
    include: { tags: { select: { name: true } } },
  });

  if (!article) return null;

  return mapArticle(article);
}

export async function getDbArticleSlugs(): Promise<string[]> {
  const prisma = getPrisma();

  const articles = await prisma.article.findMany({
    select: { slug: true },
  });

  return articles.map((a: { slug: string }) => a.slug);
}

export function formatDbArticleDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}