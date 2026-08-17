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
      "My first foray into web development. It started as a digital place to aggregate our band's gigs, but became our online hub with a newsletter, band news, and more.",
    tags: ["react", "vite", "tailwind", "sql"],
    url: "https://araujiaband.com",
    repo: "", // REPLACE
  },
];
