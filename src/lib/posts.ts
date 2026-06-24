import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

// MDX posts live here. Drop a new `.mdx` file in to publish.
const POSTS_DIR = path.join(process.cwd(), "content", "writing");

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // ISO string
  summary: string;
  tags: string[];
  readingTime: string;
  /** If set, this post lives on Substack — link out instead of rendering. */
  substackUrl?: string;
};

export type Post = PostMeta & { content: string };

function estimateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPost(slug: string): Post | null {
  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
  return {
    slug,
    title: typeof data.title === "string" ? data.title : slug,
    date: data.date ? new Date(data.date).toISOString() : new Date(0).toISOString(),
    summary: typeof data.summary === "string" ? data.summary : "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    readingTime: estimateReadingTime(content),
    substackUrl: typeof data.substackUrl === "string" ? data.substackUrl : undefined,
    content,
  };
}

/** All posts, newest first, without the heavy `content` field. */
export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => getPost(slug))
    .filter((post): post is Post => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(({ content: _content, ...meta }) => meta);
}
