// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIG — edit this file to make the site yours.
// Everything here is placeholder content. Search for "REPLACE".
// Note: the whole site renders lowercase by design; type things normally here.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "sebastian larsen", // REPLACE — sits above the nav, slightly larger
  tagline: "musician · writer · builder", // REPLACE — small line under the name
  email: "you@example.com", // REPLACE
  url: "https://example.com", // REPLACE — final domain (SEO / OpenGraph)
  description:
    "Personal site of Your Name — music, writing, and the occasional experiment.", // REPLACE

  // The three layered hero portraits (top → middle → bottom of the stack).
  // Files live in /public. Cropped to 4:5 and rounded automatically.
  photos: ["/me-1.jpeg", "/me-2.jpg", "/me-3.jpg"],

  // Shown in the "resume" panel.
  resume: {
    blurb:
      "I’m a multidisciplinary maker — I write songs, essays, and software. Currently looking for interesting people to build interesting things with.", // REPLACE
    highlights: [
      "Released original music (see the music tab).", // REPLACE
      "Write regularly — on this site and on Substack.",
      "Build on the web; this site is one of those builds.",
    ],
  },

  // External links. Leave a value as "" to hide it.
  socials: {
    linkedin: "https://www.linkedin.com/in/sebastian-larsen-5b03b1231/", // REPLACE
    github: "https://github.com/skl82", // REPLACE — or ""
    substack: "https://sebastianl3.substack.com", // REPLACE
    spotify: "https://open.spotify.com/artist/your-artist-id", // REPLACE — or ""
  },
} as const;
