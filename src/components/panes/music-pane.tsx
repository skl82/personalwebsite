import { releases, recommendations } from "@/lib/music";
import { SpotifyEmbed } from "@/components/spotify-embed";

export function MusicPane() {
  return (
    <div className="space-y-10">
      {/* Releases */}
      <section>
        <h2 className="mb-4 flex items-center gap-3 text-sm text-muted">
          made by me and friends
          <span className="h-px flex-1 bg-line" />
        </h2>
        <div className="space-y-6">
          {releases.map((release) => (
            <div key={release.title}>
              <div className="mb-2 flex items-baseline justify-between gap-3">
                <h3 className="text-lg text-ink">{release.title}</h3>
                {release.year && (
                  <span className="shrink-0 text-xs text-muted">
                    {release.year}
                  </span>
                )}
              </div>
              <SpotifyEmbed url={release.spotifyUrl} title={release.title} />
              {release.note && (
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {release.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section>
        <h2 className="mb-4 flex items-center gap-3 text-sm text-muted">
          on rotation
          <span className="h-px flex-1 bg-line" />
        </h2>
        <ul className="border-t border-line">
          {recommendations.map((rec) => (
            <li
              key={rec.title}
              className="flex items-baseline justify-between gap-4 border-b border-line py-3"
            >
              <span className="min-w-0 text-ink">
                {rec.title}
                <span className="text-muted"> — {rec.artist}</span>
              </span>
              <span className="flex shrink-0 items-center gap-3 text-xs text-muted">
                <span className="text-faint">{rec.kind}</span>
                {rec.spotifyUrl && (
                  <a
                    href={rec.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    spotify
                  </a>
                )}
                {rec.youtubeUrl && (
                  <a
                    href={rec.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    youtube
                  </a>
                )}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
