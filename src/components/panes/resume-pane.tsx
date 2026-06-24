import { site } from "@/lib/site";

export function ResumePane() {
  return (
    <div className="space-y-7">
      <p className="text-lg leading-relaxed text-ink">{site.resume.blurb}</p>

      <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
        {site.resume.highlights.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-px text-accent">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <a
        href={site.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-ink px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
      >
        view full résumé on linkedin ↗
      </a>
    </div>
  );
}
