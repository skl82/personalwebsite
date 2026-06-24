import { SpotifyIcon, YoutubeIcon } from "@/components/icons";
import type { Rec } from "@/lib/music";

export function RecCard({ rec }: { rec: Rec }) {
  return (
    <div className="card lift flex h-full flex-col gap-4 p-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim">
          {rec.kind}
        </span>
        <div className="flex items-center gap-2.5">
          {rec.spotifyUrl && (
            <a
              href={rec.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${rec.title} in Spotify`}
              className="text-dim transition-colors hover:text-accent"
            >
              <SpotifyIcon className="h-[18px] w-[18px]" />
            </a>
          )}
          {rec.youtubeUrl && (
            <a
              href={rec.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Find ${rec.title} on YouTube`}
              className="text-dim transition-colors hover:text-accent"
            >
              <YoutubeIcon className="h-[18px] w-[18px]" />
            </a>
          )}
        </div>
      </div>

      <div className="mt-auto">
        <h3 className="font-display text-2xl uppercase leading-none tracking-tight">
          {rec.title}
        </h3>
        <p className="mt-1.5 font-mono text-xs text-muted">{rec.artist}</p>
      </div>

      {rec.note && (
        <p className="text-sm leading-relaxed text-muted">{rec.note}</p>
      )}
    </div>
  );
}
