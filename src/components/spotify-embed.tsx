"use client";

import { useEffect, useState } from "react";
import { Disc3 } from "lucide-react";

/** Turn a normal Spotify share URL into its /embed/ equivalent. */
function toEmbedUrl(url: string): string | null {
  const match = url.match(
    /open\.spotify\.com\/(?:intl-\w+\/)?(track|album|artist|playlist|episode|show)\/([A-Za-z0-9]+)/,
  );
  if (!match) return null;
  // theme=0 renders Spotify's dark (black) player instead of the
  // artwork-tinted default.
  return `https://open.spotify.com/embed/${match[1]}/${match[2]}?utm_source=generator&theme=0`;
}

export function SpotifyEmbed({ url, title }: { url: string; title?: string }) {
  const embed = toEmbedUrl(url);

  // Defer loading the player until the browser is idle — i.e. after the hero
  // has painted — so first paint stays snappy. The players warm in the
  // background within the first moment, so the music tab is ready by the time
  // anyone opens it. A same-size placeholder holds the space (no layout shift).
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!embed) return;
    const warm = () => setReady(true);
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(warm, { timeout: 1500 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(warm, 250);
    return () => window.clearTimeout(id);
  }, [embed]);

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

  if (!ready) {
    return <div className="h-[152px] w-full bg-paper-2" aria-hidden />;
  }

  return (
    <iframe
      src={embed}
      title={title ?? "Spotify player"}
      className="w-full"
      height={152}
      style={{ border: 0 }}
      loading="eager"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    />
  );
}
