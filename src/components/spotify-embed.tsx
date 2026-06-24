import { Disc3 } from "lucide-react";

/** Turn a normal Spotify share URL into its /embed/ equivalent. */
function toEmbedUrl(url: string): string | null {
  const match = url.match(
    /open\.spotify\.com\/(?:intl-\w+\/)?(track|album|artist|playlist|episode|show)\/([A-Za-z0-9]+)/,
  );
  if (!match) return null;
  return `https://open.spotify.com/embed/${match[1]}/${match[2]}?utm_source=generator`;
}

export function SpotifyEmbed({ url, title }: { url: string; title?: string }) {
  const embed = toEmbedUrl(url);

  if (!embed) {
    return (
      <div className="flex h-[152px] flex-col items-center justify-center gap-2 border border-dashed border-line bg-paper px-4 text-center">
        <Disc3 className="h-5 w-5 text-faint" />
        <p className="text-xs text-muted">
          paste a spotify link in{" "}
          <span className="text-accent">src/lib/music.ts</span>
        </p>
      </div>
    );
  }

  return (
    <iframe
      src={embed}
      title={title ?? "Spotify player"}
      className="w-full"
      height={152}
      style={{ border: 0 }}
      loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    />
  );
}
