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
    name: "Araujia", // REPLACE
    role: "lead guitar/songwriter",
    years: "2022 – present",
    description: "\"Gazes into the metallic void\"; at least, that's what The Washington Post said.",
    link: "", // REPLACE — e.g. spotify artist, instagram, or website
    instagram: "https://www.instagram.com/_araujia_/", // REPLACE — the band's instagram URL
  },
  {
    name: "Smite", // REPLACE — the act's name
    role: "guitar", // REPLACE — e.g. "drums", "vocals / bass"
    years: "Jan. 2026 - May 2026", // REPLACE — e.g. "2026–present" (or leave "" to hide)
    description: "Georgetown we (were) here, to spread metal cheer.", // REPLACE — a one-line description (or leave "" to hide)
    link: "", // REPLACE — spotify/instagram/website (or leave "" to hide)
    instagram: "https://www.instagram.com/smitetheband/", // REPLACE — the band's instagram URL
  },
  {
    name: "Hieroglyph", // REPLACE
    role: "guitar",
    years: "Sept. 2025 – Dec. 2025",
    description: "A fun sidequest into power pop.",
    link: "",
    instagram: "https://www.instagram.com/hieroglyph_band/", // REPLACE — the band's instagram URL
  },
  {
    name: "No One and the Elses", // REPLACE
    role: "lead guitar",
    years: "Sept. 2024 - May 2025",
    description: "Known for 'Avocado Girl' and others.",
    link: "",
    instagram: "https://www.instagram.com/nooneandtheelses/", // REPLACE — the band's instagram URL
  },
];

export const releases: Release[] = [
  {
    title: "Desire Machine - Araujia",
    year: "2025",
    spotifyUrl: "https://open.spotify.com/album/17uvr925n9F4KgUBsHJIhj?si=qc7E3us7R16SOHnuK2sicQ", // REPLACE — paste your Spotify track/album link here
    note: "",
  },
  {
    title: "(the) Hieroglyph - Hieroglyph",
    year: "2026",
    spotifyUrl: "https://open.spotify.com/album/23tM4H8MKLl3DA9l2dtwy1?si=ZnWlTNWMQSuKO9reRtlEBA", // REPLACE
    note: "",
  },
  {
    title: "N.O.A.T.E. - No One and the Elses",
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
    youtubeUrl: "https://www.youtube.com/watch?v=5SgN5lvWZwQ",
  },
  {
    title: "Clayman",
    artist: "In Flames",
    kind: "album",
    cover: "/covers/clayman.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=qnLunQEcMn0",
  },
  {
    title: "Epitaph",
    artist: "Necrophagist",
    kind: "album",
    cover: "/covers/epitaph.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=up8taupsRwY",
  },
  {
    title: "Deathless",
    artist: "Revocation",
    kind: "album",
    cover: "/covers/deathless.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=LyX16wztS-c",
  },
  {
    title: "Beware the Heavens",
    artist: "Sinergy",
    kind: "album",
    cover: "/covers/beware-the-heavens.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=ZNqHZ9R-VJM",
  },
  {
    title: "Diorama",
    artist: "MØL",
    kind: "album",
    cover: "/covers/diorama.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=Bi9wI-kwNIk",
  },
  {
    title: "Duél",
    artist: "Jinjer",
    kind: "album",
    cover: "/covers/duel.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=zcS8nu0S0KA",
  },
  {
    title: "The New Flesh",
    artist: "Sylosis",
    kind: "album",
    cover: "/covers/the-new-flesh.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=eFpq1PIB0yk",
  },
];
