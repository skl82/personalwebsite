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
      "the page you're looking at — a single-screen paper portfolio. built it to have a home on the web that's actually mine.",
    tags: ["next.js", "typescript", "tailwind"],
    repo: "https://github.com/your-handle/personalwebsite", // REPLACE
  },
  {
    title: "project two",
    year: "2025",
    description:
      "a short description of something you made. what it does, why you built it, what you learned.", // REPLACE
    tags: ["react", "node"],
    url: "https://example.com", // REPLACE — or remove
    repo: "https://github.com/your-handle/project-two", // REPLACE — or remove
  },
  {
    title: "project three",
    year: "2024",
    description:
      "another build. an experiment, a tool, a side quest — whatever you're proud of.", // REPLACE
    tags: ["python"],
    repo: "https://github.com/your-handle/project-three", // REPLACE — or remove
  },
];
