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

export type Band = {
  name: string;
  role?: string; // what you do — "guitar", "vocals / songwriting", etc.
  years?: string; // "2021–present", "2023", …
  description?: string;
  link?: string; // optional — bandcamp, instagram, website, spotify artist page
};

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

// BANDS & PROJECTS — the acts you play in or run. A roster, shown up top.
export const bands: Band[] = [
  {
    name: "araujia", // REPLACE
    role: "guitar / songwriting",
    years: "2021–present",
    description: "my main band — dark, loud, and a little romantic.",
    link: "", // REPLACE — e.g. spotify artist, instagram, or website
  },
  {
    name: "hieroglyph", // REPLACE
    role: "guitar",
    years: "2025–present",
    description: "a fun sidequest into power pop.",
    link: "",
  },
  {
    name: "no one and the elses", // REPLACE
    role: "lead guitar",
    years: "2026",
    description: "studio project — see the release below.",
    link: "",
  },
];

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
    cover: "/covers/are-you-dead-yet.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=aNJXS9X0yY0",
    note: "The greatest metal album ever? Maybe. In my world? Certainly.",
  },
  {
    title: "Clayman",
    artist: "In Flames",
    kind: "album",
    cover: "/covers/clayman.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=qnLunQEcMn0",
    note: "Melodeath's high-water mark — 'only for the weak' still lands.",
  },
  {
    title: "Epitaph",
    artist: "Necrophagist",
    kind: "album",
    cover: "/covers/epitaph.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=up8taupsRwY",
    note: "Absurd technical precision. 'stabwound' shouldn't be possible.",
  },
  {
    title: "Deathless",
    artist: "Revocation",
    kind: "album",
    cover: "/covers/deathless.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=Fo8tz1BqPYE",
    note: "Modern tech-death with riffs that actually stick.",
  },
  {
    title: "Beware the Heavens",
    artist: "Sinergy",
    kind: "album",
    cover: "/covers/beware-the-heavens.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=kyTGOvifFnA",
    note: "Kimberly Goss and Alexi Laiho, 1999. Criminally overlooked.",
  },
  {
    title: "Diorama",
    artist: "MØL",
    kind: "album",
    cover: "/covers/diorama.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=T2l2tvw2n7c",
    note: "Blackgaze — wall-of-sound beauty welded to blast beats.",
  },
];
