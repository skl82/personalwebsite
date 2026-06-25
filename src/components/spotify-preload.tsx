import { releases } from "@/lib/music";
import { SpotifyEmbed } from "@/components/spotify-embed";

// Warms the Spotify players the moment the landing page loads, rather than
// when the music tab is first opened. We mount the real release embeds in an
// off-screen, inert container so the browser fetches Spotify's embed document,
// scripts, and artwork up front. When the music tab opens, the visible players
// pull from this warm cache and appear instantly instead of loading cold.
export function SpotifyPreload() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed -left-[9999px] top-0 h-px w-px overflow-hidden opacity-0"
    >
      {releases.map((release) => (
        <SpotifyEmbed
          key={release.title}
          url={release.spotifyUrl}
          title={release.title}
        />
      ))}
    </div>
  );
}
