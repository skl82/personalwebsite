import Image from "next/image";
import { releases, recommendations, type Rec } from "@/lib/music";
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
        <ul className="grid grid-cols-2 gap-x-5 gap-y-7">
          {recommendations.map((rec) => (
            <RecTile key={`${rec.title}-${rec.artist}`} rec={rec} />
          ))}
        </ul>
      </section>
    </div>
  );
}

function RecTile({ rec }: { rec: Rec }) {
  // The cover is clickable when there's a link (spotify preferred).
  const primaryLink = rec.spotifyUrl || rec.youtubeUrl;

  const cover = (
    <div className="relative aspect-square w-full overflow-hidden bg-paper-2 ring-1 ring-line shadow-[0_12px_30px_-14px_rgba(40,33,20,0.5)] transition-transform duration-200 group-hover:-translate-y-1">
      {rec.cover ? (
        <Image
          src={rec.cover}
          alt={`${rec.title} — ${rec.artist}`}
          fill
          sizes="(max-width: 768px) 45vw, 260px"
          className="object-cover"
        />
      ) : (
        // Placeholder when no cover image is set yet.
        <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center">
          <span className="text-sm leading-snug text-ink">{rec.title}</span>
          <span className="text-xs text-faint">{rec.artist}</span>
        </div>
      )}
    </div>
  );

  return (
    <li className="group">
      {primaryLink ? (
        <a
          href={primaryLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {cover}
        </a>
      ) : (
        cover
      )}

      <div className="mt-2.5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="min-w-0 truncate text-ink">{rec.title}</h3>
          <span className="shrink-0 text-xs text-faint">{rec.kind}</span>
        </div>
        <p className="text-sm text-muted">{rec.artist}</p>

        {(rec.spotifyUrl || rec.youtubeUrl) && (
          <div className="mt-1.5 flex gap-3 text-xs text-muted">
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
          </div>
        )}

        {rec.note && (
          <p className="mt-1 text-xs leading-relaxed text-faint">{rec.note}</p>
        )}
      </div>
    </li>
  );
}
