import { Disc3 } from "lucide-react";

/** Turn a normal Spotify share URL into its /embed/ equivalent. */
function toEmbedUrl(url: string): string | null {
  const match = url.match(
    /open\.spotify\.com\/(?:intl-\w+\/)?(track|album|artist|playlist|episode|show)\/([A-Za-z0-9]+)/,
  );
  if (!match) return null;
  return `https://open.spotify.com/embed/${match[1]}/${match[2]}?utm_source=generator&theme=0`;
}

export function SpotifyEmbed({ url, title }: { url: string; title?: string }) {
  const embed = toEmbedUrl(url);

  if (!embed) {
    return (
      <div className="flex h-[152px] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-bg-soft/50 px-4 text-center">
        <Disc3 className="h-6 w-6 text-muted" />
        <p className="text-sm text-muted">
          Paste a Spotify link in{" "}
          <code className="rounded bg-surface px-1 py-0.5 font-mono text-xs text-fg">
            src/lib/music.ts
          </code>
        </p>
      </div>
    );
  }

  return (
    <iframe
      src={embed}
      title={title ?? "Spotify player"}
      className="w-full rounded-2xl"
      height={152}
      style={{ border: 0 }}
      loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    />
  );
}
