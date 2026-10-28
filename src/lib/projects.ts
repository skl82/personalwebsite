// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS — things you've built. All placeholder; edit freely.
// ─────────────────────────────────────────────────────────────────────────────

export type Project = {
  title: string;
  year?: string;
  description: string;
  tags?: string[];
  url?: string; // live / demo link
  repo?: string; // source code
};

export const projects: Project[] = [
  {
    title: "Backmonkey",
    year: "2026",
    description:
      "A gamified accountability app centered around protecting a pet monkey's lives, or an optional pledge, by checking in daily. The app can be used solo or with friends for group accountability, and is available for free on the App Store.",
    tags: ["react native", "expo", "typescript", "sql", "stripe"],
    url: "https://trybackmonkey.com",
  },
  {
    title: "This website",
    year: "2026",
    description:
      "Like Christmas, with a little more me.",
    tags: ["next.js", "typescript", "tailwind"],
    url: "", // REPLACE — or remove
    repo: "", // REPLACE — or remove
  },
  {
    title: "araujiaband.com",
    year: "2026",
    description:
      "My first foray into \"practical\" web development. It started as a digital place to aggregate our band's gigs, but became our online hub with a newsletter, band news, and more.",
    tags: ["react", "vite", "tailwind", "sql"],
    url: "https://araujiaband.com",
    repo: "", // REPLACE
  },
  {
    title: "Monopoly Tracker",
    year: "2025",
    description:
      "My first-ever personal coding project. A dashboard that replaces the paper money on Monopoly night and keeps track of everyone's cash, properties, houses, mortgages, and trades. It works out rent payments automatically, saves games in the browser, and covers (nearly) every permutation of the US ruleset.",
    tags: ["react", "typescript", "vite", "tailwind", "dexie"],
    url: "https://www.monopolytracker.com",
  },
];
