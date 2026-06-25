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
    title: "this website",
    year: "2026",
    description:
      "the page you're looking at. like christmas, with a little more me.", // REPLACE
    tags: ["next.js", "typescript", "tailwind"],
    url: "", // REPLACE — or remove
    repo: "", // REPLACE — or remove
  },
  {
    title: "araujiaband.com",
    year: "2026",
    description:
      "my first foray into web development. it started as a digital place to aggregate our band's gigs, but became our online hub with a newsletter, band news, and more.",
    tags: ["react", "vite", "tailwind", "sql"],
    url: "https://araujiaband.com",
    repo: "", // REPLACE
  },
];
