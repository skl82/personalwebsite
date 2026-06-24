import { Disc3, Music } from "lucide-react";
import { SpotifyIcon, YoutubeIcon } from "@/components/icons";
import type { Rec } from "@/lib/music";

export function RecCard({ rec }: { rec: Rec }) {
  const KindIcon = rec.kind === "album" ? Disc3 : Music;

  return (
    <div className="card lift flex flex-col gap-3 rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-bg-soft px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-muted ring-1 ring-border">
          <KindIcon className="h-3.5 w-3.5" />
          {rec.kind}
        </span>
        <div className="flex items-center gap-2.5">
          {rec.spotifyUrl && (
            <a
              href={rec.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${rec.title} in Spotify`}
              className="text-muted transition-colors hover:text-fg"
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
              className="text-muted transition-colors hover:text-fg"
            >
              <YoutubeIcon className="h-[18px] w-[18px]" />
            </a>
          )}
        </div>
      </div>

      <div>
        <h3 className="font-display text-lg font-semibold leading-tight">
          {rec.title}
        </h3>
        <p className="text-sm text-muted">{rec.artist}</p>
      </div>

      {rec.note && (
        <p className="text-sm leading-relaxed text-muted/90">{rec.note}</p>
      )}
    </div>
  );
}
