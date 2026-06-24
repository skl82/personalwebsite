import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { SubstackIcon } from "@/components/icons";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export function PostCard({ post }: { post: PostMeta }) {
  const external = Boolean(post.substackUrl);

  const inner = (
    <article className="card lift group flex h-full flex-col rounded-2xl p-6">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5" />
          {formatDate(post.date)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          {post.readingTime}
        </span>
        {external && (
          <span className="inline-flex items-center gap-1 text-accent">
            <SubstackIcon className="h-3.5 w-3.5" />
            Substack
          </span>
        )}
      </div>

      <h3 className="mt-3 font-display text-xl font-semibold leading-snug transition-colors group-hover:text-accent">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {post.summary}
      </p>

      <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-fg">
        {external ? "Read on Substack" : "Read post"}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      {post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-bg-soft px-2 py-0.5 text-[11px] text-muted ring-1 ring-border"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );

  return external ? (
    <a href={post.substackUrl} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <Link href={`/writing/${post.slug}`}>{inner}</Link>
  );
}
