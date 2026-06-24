import { projects } from "@/lib/projects";

export function ProjectsPane() {
  return (
    <ul className="border-t border-line">
      {projects.map((p) => (
        <li key={p.title} className="border-b border-line py-5">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-lg text-ink">{p.title}</h3>
            {p.year && (
              <span className="shrink-0 text-xs text-muted">{p.year}</span>
            )}
          </div>

          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {p.description}
          </p>

          {p.tags && p.tags.length > 0 && (
            <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-faint">
              {p.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}

          {(p.url || p.repo) && (
            <div className="mt-2.5 flex gap-4 text-xs text-muted">
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  live ↗
                </a>
              )}
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  source ↗
                </a>
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
