import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

// Editorial list row. Use inside <PostList>, which draws the top border.
export function PostCard({
  post,
  index = 0,
}: {
  post: PostMeta;
  index?: number;
}) {
  const external = Boolean(post.substackUrl);
  const num = String(index + 1).padStart(2, "0");

  const inner = (
    <>
      <span className="font-mono text-xs text-accent">{num}</span>

      <div className="min-w-0">
        <h3 className="truncate text-lg font-medium transition-colors group-hover:text-accent">
          {post.title}
        </h3>
        <p className="mt-1 line-clamp-1 text-sm text-muted">{post.summary}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-dim">
          <span>{formatDate(post.date)}</span>
          <span>/</span>
          <span>{post.readingTime}</span>
          {external && <span className="text-accent">/ Substack</span>}
          {post.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </div>

      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-dim transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
    </>
  );

  const cls =
    "group grid grid-cols-[auto_1fr_auto] items-start gap-4 border-b border-border px-1 py-5 transition-colors hover:bg-panel";

  return external ? (
    <a href={post.substackUrl} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={`/writing/${post.slug}`} className={cls}>
      {inner}
    </Link>
  );
}

/** Wraps post rows with a top border so the list reads as a table. */
export function PostList({ children }: { children: React.ReactNode }) {
  return <div className="border-t border-border">{children}</div>;
}
