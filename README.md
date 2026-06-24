# Personal Website

A fun-but-professional personal site — **bold & modern**, built with Next.js 16,
TypeScript, Tailwind v4, and Framer Motion. Three tabs: **Music**, **Writing**, and
a **Resume** link out to LinkedIn.

## Getting started

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Make it yours

Everything is placeholder content right now. Three files + one folder are all you
need to touch (search the codebase for `REPLACE`):

| What | Where |
| --- | --- |
| Name, tagline, intro, email, social links, nav | `src/lib/site.ts` |
| Your releases (Spotify) + recommendations grid | `src/lib/music.ts` |
| Blog posts | `content/writing/*.mdx` |

### Music

- **Your releases**: paste a normal Spotify share link (track / album / artist /
  playlist) into `releases` in `src/lib/music.ts`. It's auto-converted into an
  embedded player. Empty links show a styled "coming soon" placeholder.
- **Recommendations**: add songs/albums to `recommendations`, each with optional
  YouTube and/or Spotify links.

### Writing

- To publish a post, drop a new `.mdx` file in `content/writing/`. Frontmatter:

  ```mdx
  ---
  title: "Post title"
  date: "2026-06-23"
  summary: "One-line teaser shown in the list."
  tags: ["essays"]
  # Optional: if set, the card links out to Substack instead of an on-site page.
  # substackUrl: "https://yourname.substack.com/p/slug"
  ---

  Your markdown / MDX here.
  ```

- The list at `/writing` is generated automatically (newest first), and each post
  gets its own themed page at `/writing/[slug]`.
- Set your Substack URL in `src/lib/site.ts` for the "Subscribe" callout.

### Theme

Colors and fonts are CSS variables in `src/app/globals.css` (the `@theme` block).
The signature gradient is `--color-accent` → `--color-accent-2` → `--color-accent-3`.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com) — zero config.
Set your final domain in `site.url` (`src/lib/site.ts`) for correct SEO/OpenGraph.

## Project structure

```
src/
  app/                 routes (home, music, writing, writing/[slug])
  components/          nav, footer, hero, cards, embeds, motion helpers
  lib/                 site config, music data, MDX post loader, utils
content/writing/       your .mdx posts
```
