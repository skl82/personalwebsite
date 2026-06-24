// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIG — edit this file to make the site yours.
// Everything here is placeholder content. Search for "REPLACE".
// Note: the whole site renders lowercase by design; type things normally here.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Your Name", // REPLACE — sits above the nav, slightly larger
  tagline: "musician · writer · builder", // REPLACE — small line under the name
  email: "you@example.com", // REPLACE
  url: "https://example.com", // REPLACE — final domain (SEO / OpenGraph)
  description:
    "Personal site of Your Name — music, writing, and the occasional experiment.", // REPLACE

  // The three layered hero portraits (top → middle → bottom of the stack).
  // Swap these for real photos: drop files in /public and point here, e.g.
  // ["/me-1.jpg", "/me-2.jpg", "/me-3.jpg"].
  photos: ["/portrait-1.svg", "/portrait-2.svg", "/portrait-3.svg"],

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
    linkedin: "https://www.linkedin.com/in/your-handle", // REPLACE
    github: "https://github.com/your-handle", // REPLACE — or ""
    substack: "https://yourname.substack.com", // REPLACE
    spotify: "https://open.spotify.com/artist/your-artist-id", // REPLACE — or ""
  },
} as const;
