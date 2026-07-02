---
name: publish-essay
description: Publish a new writing/essay post from a dropped-in markdown file (often a Notion export) into content/writing/. Use when the user says they've added/dropped a new essay, post, or .md file to publish, or asks to turn draft markdown into a live post. Converts to a properly-formatted .mdx with frontmatter, cleans up export cruft, and previews.
---

# Publish an essay

Turn a raw markdown file (usually a Notion export) that the user dropped into
`content/writing/` into a clean, published `.mdx` post.

## How posts work in this repo

- **Location:** all posts live in `content/writing/`. The loader is
  `src/lib/posts.ts` (`POSTS_DIR = content/writing`); it picks up any `.mdx`
  file automatically — no code changes, no registration.
- **The filename IS the slug and URL.** Use **kebab-case**, no date prefix.
  `claude-health-data-experiment-report-1.mdx` → `#writing/claude-health-data-experiment-report-1`.
- **Extension must be `.mdx`** (not `.md`). Bodies support GitHub-flavored
  markdown via `remark-gfm` (footnotes, tables, strikethrough).
- Posts are sorted **newest-first by `date`** automatically.

## Frontmatter schema

```mdx
---
title: "Exact Display Title"
date: "YYYY-MM-DD"
summary: "The subtitle/dek — renders under the title in both the list and the post header."
tags: ["ai", "health"]
---
```

- `title`, `date`, `summary`, `tags` are the fields. Map the user's **subtitle
  to `summary`** — there is no separate subtitle field.
- **Do NOT add** `slug` or `readingTime` — `slug` comes from the filename and
  `readingTime` is auto-computed from word count.
- Optional `substackUrl: "..."` — if set, the list links out to Substack
  instead of rendering the essay inline. Only add if the user asks.

## Steps

1. **Find the dropped file** in `content/writing/` — the raw one that isn't
   already a clean kebab-case `.mdx`. Notion exports look like
   `Some Title (Final) 391f3a2b...hexhash.md`. Read it.
2. **Get the metadata.** Title, publication date, and subtitle usually come
   from the user's message. If any is missing and not obvious from the file,
   ask. Pick 2–3 lowercase `tags` from the content if the user didn't specify.
3. **Write the new `.mdx`** with a kebab-case filename derived from the title:
   - Prepend the frontmatter block above.
   - **Strip the redundant top `# H1` title** — the title lives in frontmatter
     (matches existing posts, which have no H1 in the body).
   - **Section headings stay `###` (H3).** Notion sometimes exports them as H2;
     normalize section headers to H3.
   - Keep body prose as-is — smart/curly quotes render fine, leave them.
   - Drop any trailing Notion hash cruft and "(Final)"-type markers from the title.
4. **Delete the original dropped file** (`rm` the Notion export) so only the
   clean `.mdx` remains.
5. **Preview:** `npm run dev` (Next.js, http://localhost:3000), confirm the post
   renders, then offer to kill the server. Reference `examples/` in the `run`
   skill if you need the browser-driving pattern.

## Reference

An existing well-formed post: `content/writing/chatbots-mental-health-and-incumbency-blindness.mdx`.
