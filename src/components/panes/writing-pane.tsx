"use client";

import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { site } from "@/lib/site";

// The open post lives in the URL hash as #writing/<slug>, so individual essays
// are deep-linkable, refresh-safe, and work with the browser back button.
function slugFromHash(): string | null {
  const [tab, ...rest] = window.location.hash.replace("#", "").split("/");
  return tab === "writing" && rest.length
    ? decodeURIComponent(rest.join("/"))
    : null;
}

export function WritingPane({
  posts,
  bodies,
}: {
  posts: PostMeta[];
  // Pre-rendered MDX bodies, keyed by slug (rendered on the server).
  bodies: Record<string, React.ReactNode>;
}) {
  const [slug, setSlug] = useState<string | null>(null);

  // Keep the open post in sync with the hash (deep links + back/forward).
  useEffect(() => {
    const sync = () => setSlug(slugFromHash());
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const openPost = (s: string) => {
    window.location.hash = `writing/${encodeURIComponent(s)}`;
  };
  const closePost = () => {
    window.location.hash = "writing";
  };

  const current = slug ? (posts.find((p) => p.slug === slug) ?? null) : null;

  // ── Reading a single post ────────────────────────────────────────────────
  if (current) {
    return (
      // Writing is the one place that keeps real capitalization (the rest of
      // the site is forced lowercase). `normal-case` lifts that here.
      <article className="normal-case">
        <button
          type="button"
          onClick={closePost}
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          all writing
        </button>

        <h2 className="text-2xl leading-snug text-ink">{current.title}</h2>
        {current.summary && (
          <p className="mt-2 text-base leading-relaxed text-muted">
            {current.summary}
          </p>
        )}
        <p className="mt-2 text-xs text-muted">
          {formatDate(current.date)} · {current.readingTime}
        </p>

        <div className="prose prose-sm prose-neutral mt-6 max-w-none prose-headings:font-bold prose-headings:text-ink prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-ink prose-blockquote:border-l-accent prose-blockquote:not-italic prose-code:text-accent prose-code:before:content-none prose-code:after:content-none [&_.footnotes]:mt-10 [&_.footnotes]:border-t [&_.footnotes]:border-line [&_.footnotes]:pt-5 [&_.footnotes]:text-[0.8rem] [&_.footnotes]:text-muted [&_.footnotes_h2]:hidden">
          {bodies[current.slug]}
        </div>
      </article>
    );
  }

  // ── The list ─────────────────────────────────────────────────────────────
  return (
    <div className="normal-case">
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
                  className="group block border-b border-line py-4"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-lg text-ink transition-colors group-hover:text-accent">
                      {post.title}
                    </span>
                    <span className="shrink-0 text-xs text-muted">
                      {formatDate(post.date)} ↗
                    </span>
                  </div>
                  {post.summary && (
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {post.summary}
                    </p>
                  )}
                </a>
              </li>
            ) : (
              <li key={post.slug}>
                <button
                  type="button"
                  onClick={() => openPost(post.slug)}
                  className="group block w-full border-b border-line py-4 text-left"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-lg text-ink transition-colors group-hover:text-accent">
                      {post.title}
                    </span>
                    <span className="shrink-0 text-xs text-muted">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  {post.summary && (
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {post.summary}
                    </p>
                  )}
                </button>
              </li>
            ),
          )}
        </ul>
      )}
    </div>
  );
}
