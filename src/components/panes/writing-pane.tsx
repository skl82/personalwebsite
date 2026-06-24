"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { site } from "@/lib/site";

export function WritingPane({
  posts,
  bodies,
}: {
  posts: PostMeta[];
  // Pre-rendered MDX bodies, keyed by slug (rendered on the server).
  bodies: Record<string, React.ReactNode>;
}) {
  const [slug, setSlug] = useState<string | null>(null);
  const current = slug ? (posts.find((p) => p.slug === slug) ?? null) : null;

  // ── Reading a single post ────────────────────────────────────────────────
  if (current) {
    return (
      <article>
        <button
          type="button"
          onClick={() => setSlug(null)}
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          all writing
        </button>

        <h2 className="text-2xl leading-snug text-ink">{current.title}</h2>
        <p className="mt-1.5 text-xs text-muted">
          {formatDate(current.date)} · {current.readingTime}
        </p>

        <div className="prose prose-sm prose-neutral mt-6 max-w-none prose-headings:font-bold prose-headings:text-ink prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-ink prose-blockquote:border-l-accent prose-blockquote:not-italic prose-code:text-accent prose-code:before:content-none prose-code:after:content-none">
          {bodies[current.slug]}
        </div>
      </article>
    );
  }

  // ── The list ─────────────────────────────────────────────────────────────
  return (
    <div>
      <a
        href={site.socials.substack}
        target="_blank"
        rel="noopener noreferrer"
        className="link mb-6 inline-block text-sm text-muted"
      >
        subscribe on substack ↗
      </a>

      {posts.length === 0 ? (
        <p className="text-sm text-muted">
          no posts yet — drop an .mdx file in content/writing.
        </p>
      ) : (
        <ul className="border-t border-line">
          {posts.map((post) =>
            post.substackUrl ? (
              <li key={post.slug}>
                <a
                  href={post.substackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-4 border-b border-line py-4"
                >
                  <span className="text-lg text-ink transition-colors group-hover:text-accent">
                    {post.title}
                  </span>
                  <span className="shrink-0 text-xs text-muted">
                    {formatDate(post.date)} ↗
                  </span>
                </a>
              </li>
            ) : (
              <li key={post.slug}>
                <button
                  type="button"
                  onClick={() => setSlug(post.slug)}
                  className="group flex w-full items-baseline justify-between gap-4 border-b border-line py-4 text-left"
                >
                  <span className="text-lg text-ink transition-colors group-hover:text-accent">
                    {post.title}
                  </span>
                  <span className="shrink-0 text-xs text-muted">
                    {formatDate(post.date)}
                  </span>
                </button>
              </li>
            ),
          )}
        </ul>
      )}
    </div>
  );
}
