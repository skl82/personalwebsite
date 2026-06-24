// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIG — edit this file to make the site yours.
// Everything here is placeholder content. Search for "REPLACE" to find the
// spots that most want your real info.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Your Name", // REPLACE
  initials: "YN", // REPLACE — shown in the nav logo
  tagline: "Musician · Writer · Builder", // REPLACE — the hero subtitle
  // A 1–2 sentence intro shown on the home page. Keep it personal.
  intro:
    "I make music, write things down, and build on the internet. This little corner is where it all lives — half portfolio, half open notebook.", // REPLACE
  email: "you@example.com", // REPLACE
  url: "https://example.com", // REPLACE — your final domain (used for SEO/OG)
  description:
    "Personal site of Your Name — music, writing, and the occasional experiment.", // REPLACE

  // Social / external links. Leave a value as "" to hide that icon.
  socials: {
    linkedin: "https://www.linkedin.com/in/your-handle", // REPLACE
    github: "https://github.com/your-handle", // REPLACE — or ""
    substack: "https://yourname.substack.com", // REPLACE
    spotify: "https://open.spotify.com/artist/your-artist-id", // REPLACE — or ""
    instagram: "", // optional
  },
} as const;

export type NavItem = {
  href: string;
  label: string;
  external?: boolean;
};

// The "Resume" tab is just an external link to LinkedIn, per request.
export const nav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/writing", label: "Writing" },
  { href: site.socials.linkedin, label: "Resume", external: true },
];
