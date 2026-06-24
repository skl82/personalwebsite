import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SectionHeading({
  index,
  title,
  href,
  linkLabel = "View all",
}: {
  index?: string;
  title: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4 border-b border-border pb-4">
      <div className="flex items-baseline gap-3">
        {index && <span className="font-mono text-xs text-accent">{index}</span>}
        <h2 className="font-display text-3xl uppercase leading-none tracking-tight sm:text-4xl">
          {title}
        </h2>
      </div>
      {href && (
        <Link
          href={href}
          className="label group hidden items-center gap-1.5 text-muted transition-colors hover:text-accent sm:inline-flex"
        >
          {linkLabel}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      )}
    </div>
  );
}
