// ─────────────────────────────────────────────────────────────────────────────
// MUSIC DATA
//
// 1) RELEASES — your own tracks. Paste a normal Spotify share link (track,
//    album, artist, or playlist). The page turns it into an embedded player.
//    e.g. https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC
//    Leave spotifyUrl as "" to show a styled "coming soon" placeholder.
//
// 2) RECOMMENDATIONS — stuff you love. Songs and albums shown as cover tiles.
//    Add cover art by dropping a square image into /public/covers/ and pointing
//    `cover` at it (e.g. "/covers/in-rainbows.jpg"). Covers look best square
//    (e.g. 500×500). Leave `cover` as "" for a styled placeholder tile.
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
  cover?: string; // "/covers/your-cover.jpg" (square), or "" for a placeholder
  // Optional links — both are shown if present.
  youtubeUrl?: string;
  spotifyUrl?: string;
  note?: string;
};

export const releases: Release[] = [
  {
    title: "desire machine - araujia",
    year: "2025",
    spotifyUrl: "https://open.spotify.com/album/17uvr925n9F4KgUBsHJIhj?si=qc7E3us7R16SOHnuK2sicQ", // REPLACE — paste your Spotify track/album link here
    note: "my main band's first EP",
  },
  {
    title: "(the) hieroglyph - hieroglyph",
    year: "2026",
    spotifyUrl: "https://open.spotify.com/album/23tM4H8MKLl3DA9l2dtwy1?si=ZnWlTNWMQSuKO9reRtlEBA", // REPLACE
    note: "a fun sidequest into power pop",
  },
  {
    title: "n.o.a.t.e - no one and the elses",
    year: "2026",
    spotifyUrl: "https://open.spotify.com/album/3akWSmvvGyNq6LdKjXpjfa?si=6divXhhZQMi_5Sa-YTJSnQ", // REPLACE — paste your Spotify track/album link here
    note: "lead guitar",
  },
];

export const recommendations: Rec[] = [
  {
    title: "Are You Dead Yet?",
    artist: "Children of Bodom",
    kind: "album",
    youtubeUrl: "https://www.youtube.com/results?search_query=David+Bowie+Blackstar",
    note: "The greatest metal album ever? Maybe. In my world? Certainly.",
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
