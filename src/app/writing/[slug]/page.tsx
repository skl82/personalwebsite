import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
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
    <Container className="max-w-3xl pt-16 pb-16 sm:pt-24">
      <Link
        href="/writing"
        className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        Writing
      </Link>

      <header className="mt-6 border-b border-border/60 pb-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {post.readingTime}
          </span>
        </div>
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        {post.summary && (
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {post.summary}
          </p>
        )}
        {post.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-bg-soft px-2.5 py-1 text-xs text-muted ring-1 ring-border"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <article className="prose prose-invert mt-10 max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-fg prose-blockquote:border-l-accent prose-code:text-accent prose-code:before:content-none prose-code:after:content-none">
        <MDXRemote source={post.content} />
      </article>
    </Container>
  );
}
