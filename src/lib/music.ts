// ─────────────────────────────────────────────────────────────────────────────
// MUSIC DATA
//
// 1) RELEASES — your own tracks. Paste a normal Spotify share link (track,
//    album, artist, or playlist). The page turns it into an embedded player.
//    e.g. https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC
//    Leave spotifyUrl as "" to show a styled "coming soon" placeholder.
//
// 2) RECOMMENDATIONS — stuff you love. Songs and albums, with optional links.
// ─────────────────────────────────────────────────────────────────────────────

export type Release = {
  title: string;
  year?: string;
  spotifyUrl: string; // open.spotify.com share link, or "" for a placeholder
  note?: string;
};

export type Rec = {
  title: string;
  artist: string;
  kind: "song" | "album";
  // Optional links — both are shown if present.
  youtubeUrl?: string;
  spotifyUrl?: string;
  note?: string;
};

export const releases: Release[] = [
  {
    title: "First Single",
    year: "2026",
    spotifyUrl: "", // REPLACE — paste your Spotify track/album link here
    note: "The one that started it. Recorded in a bedroom at 2am.",
  },
  {
    title: "Demo / EP Name",
    year: "2025",
    spotifyUrl: "", // REPLACE
    note: "A short collection of things I couldn't stop humming.",
  },
];

export const recommendations: Rec[] = [
  {
    title: "Blackstar",
    artist: "David Bowie",
    kind: "album",
    youtubeUrl: "https://www.youtube.com/results?search_query=David+Bowie+Blackstar",
    note: "A goodbye disguised as a jazz record. Endlessly replayable.",
  },
  {
    title: "Dreams",
    artist: "Fleetwood Mac",
    kind: "song",
    youtubeUrl: "https://www.youtube.com/results?search_query=Fleetwood+Mac+Dreams",
    note: "The internet was right about this one.",
  },
  {
    title: "In Rainbows",
    artist: "Radiohead",
    kind: "album",
    youtubeUrl: "https://www.youtube.com/results?search_query=Radiohead+In+Rainbows",
    note: "Still sounds like it's from ten years in the future.",
  },
  {
    title: "Redbone",
    artist: "Childish Gambino",
    kind: "song",
    youtubeUrl: "https://www.youtube.com/results?search_query=Childish+Gambino+Redbone",
    note: "Stay woke. The bass alone is worth it.",
  },
  {
    title: "Currents",
    artist: "Tame Impala",
    kind: "album",
    youtubeUrl: "https://www.youtube.com/results?search_query=Tame+Impala+Currents",
    note: "Heartbreak you can dance to.",
  },
  {
    title: "Nightcall",
    artist: "Kavinsky",
    kind: "song",
    youtubeUrl: "https://www.youtube.com/results?search_query=Kavinsky+Nightcall",
    note: "Driving at night, the platonic ideal of.",
  },
];
