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
  instagram?: string; // the band's instagram URL — shows a hover icon, bottom-right
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
    role: "lead guitar/songwriting",
    years: "2022 – present",
    description: "gazes into the metallic void.",
    link: "", // REPLACE — e.g. spotify artist, instagram, or website
    instagram: "https://www.instagram.com/_araujia_/", // REPLACE — the band's instagram URL
  },
  {
    name: "smite", // REPLACE — the act's name
    role: "guitar", // REPLACE — e.g. "drums", "vocals / bass"
    years: "Jan. 2026 - May 2026", // REPLACE — e.g. "2026–present" (or leave "" to hide)
    description: "georgetown we (were) here, to spread metal cheer.", // REPLACE — a one-line description (or leave "" to hide)
    link: "", // REPLACE — spotify/instagram/website (or leave "" to hide)
    instagram: "https://www.instagram.com/smitetheband/", // REPLACE — the band's instagram URL
  },
  {
    name: "hieroglyph", // REPLACE
    role: "guitar",
    years: "Sept. 2025 – Dec. 2025",
    description: "a fun sidequest into power pop.",
    link: "",
    instagram: "https://www.instagram.com/hieroglyph_band/", // REPLACE — the band's instagram URL
  },
  {
    name: "no one and the elses", // REPLACE
    role: "lead guitar",
    years: "Sept. 2024 - May 2025",
    description: "known for 'avocado girl' and others.",
    link: "",
    instagram: "https://www.instagram.com/nooneandtheelses/", // REPLACE — the band's instagram URL
  },
];

export const releases: Release[] = [
  {
    title: "desire machine - araujia",
    year: "2025",
    spotifyUrl: "https://open.spotify.com/album/17uvr925n9F4KgUBsHJIhj?si=qc7E3us7R16SOHnuK2sicQ", // REPLACE — paste your Spotify track/album link here
    note: "",
  },
  {
    title: "(the) hieroglyph - hieroglyph",
    year: "2026",
    spotifyUrl: "https://open.spotify.com/album/23tM4H8MKLl3DA9l2dtwy1?si=ZnWlTNWMQSuKO9reRtlEBA", // REPLACE
    note: "",
  },
  {
    title: "n.o.a.t.e - no one and the elses",
    year: "2026",
    spotifyUrl: "https://open.spotify.com/album/3akWSmvvGyNq6LdKjXpjfa?si=6divXhhZQMi_5Sa-YTJSnQ", // REPLACE — paste your Spotify track/album link here
    note: "",
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
