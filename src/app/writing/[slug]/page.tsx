import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/container";
import { getAllPosts, getPost } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.summary };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <Container className="max-w-3xl pt-16 pb-20 sm:pt-24">
      <Link
        href="/writing"
        className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        Writing
      </Link>

      <header className="mt-8 border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-dim">
          <span>{formatDate(post.date)}</span>
          <span>/</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="font-display mt-4 text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.9] tracking-tight">
          {post.title}
        </h1>
        {post.summary && (
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {post.summary}
          </p>
        )}
        {post.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="border border-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <article className="prose prose-invert mt-10 max-w-none prose-headings:font-sans prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-fg prose-blockquote:border-l-accent prose-blockquote:font-normal prose-blockquote:not-italic prose-code:text-accent prose-code:before:content-none prose-code:after:content-none">
        <MDXRemote source={post.content} />
      </article>
    </Container>
  );
}
