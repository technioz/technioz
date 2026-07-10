import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

function getPrisma() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }
  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
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
    ? raw.contentHtml.replace(/<[^>]*>/g, "").split(/\s+/).length
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

  const result = articles.map(mapArticle);
  await prisma.$disconnect();
  return result;
}

export async function getDbArticleBySlug(slug: string): Promise<DbArticle | null> {
  const prisma = getPrisma();
  const article = await prisma.article.findUnique({
    where: { slug },
    include: { tags: { select: { name: true } } },
  });

  if (!article) {
    await prisma.$disconnect();
    return null;
  }
  const result = mapArticle(article);
  await prisma.$disconnect();
  return result;
}

export async function getDbArticleSlugs(): Promise<string[]> {
  const prisma = getPrisma();
  const articles = await prisma.article.findMany({
    select: { slug: true },
  });
  const result = articles.map((a: { slug: string }) => a.slug);
  await prisma.$disconnect();
  return result;
}

export function formatDbArticleDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
