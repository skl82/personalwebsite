// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIG — edit this file to make the site yours.
// Everything here is placeholder content. Search for "REPLACE".
// Note: text renders with the casing you type here.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Sebastian Larsen", // REPLACE — sits above the nav, slightly larger
  email: "", // REPLACE
  url: "https://sebastianlarsen.xyz", // REPLACE — final domain (SEO / OpenGraph)
  description:
    "Sebastian Larsen's Personal Site.", // REPLACE

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
