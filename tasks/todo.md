# Personal Website — Plan

## Goal
A fun, personal, but professional site. Bold & modern. Tabs: **Music**, **Writing**, **Resume/Professional**.
Stack: Next.js 15 (App Router) + TypeScript + Tailwind, deploy to Vercel.

## Architecture
- **App Router** with shared layout (sticky bold nav + footer with socials).
- Content is **data-driven** (TS/JSON for music; MDX files for writing) so updates are easy.
- **Framer Motion** for tasteful animation/personality.
- Light base with vibrant gradient accents; dark-mode toggle if time allows.

## Pages / Routes
- `/`              Home — bold hero (name, one-liner, gradient), quick links into tabs.
- `/music`         "My releases" (embeds) + "What I'm into" (recommendations grid).
- `/writing`       List of native MDX posts + a section linking out to Substack.
- `/writing/[slug]` Individual post page, styled in theme.
- `/about` (or `/resume`)  Short professional blurb + LinkedIn / GitHub / résumé PDF, or just nav link to LinkedIn.

## Phases (checklist)
### Phase 0 — Scaffold
- [x] `create-next-app` (TS, Tailwind v4, App Router, ESLint, src dir, import alias) — installed **Next 16.2.9 + React 19.2**
- [x] Deps: framer-motion, next-mdx-remote, gray-matter, lucide-react, clsx, tailwind-merge, @tailwindcss/typography
- [x] Fonts via next/font (Space Grotesk display + Geist body/mono), color tokens, base styles
- [x] git init + first commit

### Phase 1 — Shell & home
- [x] Root layout: responsive nav (Home/Music/Writing/Resume↗) + footer w/ socials
- [x] Bold animated hero (Framer Motion stagger + spinning gradient disc)
- [x] Theme primitives (Container, SectionHeading, gradient utilities, Reveal-on-scroll, ambient background)

### Phase 2 — Music
- [x] Spotify embed component (auto-converts share URLs → /embed/, graceful placeholder)
- [x] "Made by me" releases section (data-driven, `src/lib/music.ts`)
- [x] "On heavy rotation" recommendations grid (songs + albums, YT/Spotify links)

### Phase 3 — Writing
- [x] MDX pipeline: `content/writing/*.mdx` w/ frontmatter (title, date, summary, tags, substackUrl?)
- [x] `/writing` index (list, dates, reading time, tags) + Substack subscribe callout
- [x] `/writing/[slug]` themed post page (prose-invert, async params, generateStaticParams)
- [x] Seeded 2 placeholder posts

### Phase 4 — Professional
- [x] Resume = external LinkedIn link in nav (per request) — no full page

### Phase 5 — Polish & deploy
- [x] SEO metadata + OpenGraph + title template, prefers-reduced-motion support
- [x] Verified: `next build` passes (typecheck clean), all routes serve HTTP 200, MDX renders
- [ ] Deploy to Vercel (waiting on real content + domain)

## Review

**Status: shipped a complete, running placeholder site.** `npm run dev` → bold, animated,
fully navigable. Production build is green; all 4 route types prerender static (incl. both
MDX posts via `generateStaticParams`).

**Notable decisions / findings:**
- create-next-app pulled **Next 16** (not 15). Its `AGENTS.md` warned of breaking changes,
  so I read the bundled docs first: `params` is now a `Promise` (awaited in `[slug]`),
  Turbopack is the default bundler.
- **lucide-react 1.21 removed brand icons** (`Github`/`Linkedin` gone) → wrote inline SVG
  brand glyphs in `src/components/icons.tsx`.
- Custom gradient/hover effects live as plain CSS classes (`.gradient-text`, `.lift`, etc.)
  in `globals.css` rather than Tailwind variants, to sidestep Tailwind v4 custom-utility
  variant quirks.

**Left for Sebastian:** fill in real content (name/tagline/links in `src/lib/site.ts`,
releases + recs in `src/lib/music.ts`, posts in `content/writing/`), then deploy to Vercel
and set `site.url` for SEO.

## Open inputs needed from Sebastian
- Full name + the one-liner / tagline vibe
- LinkedIn URL, GitHub, contact email
- Substack URL
- Music links: own releases (Spotify artist / SoundCloud / Bandcamp / YouTube) + a few recommendations
- Whether "Professional" is a full page or just a LinkedIn link

## Review
(to be filled in as phases complete)
