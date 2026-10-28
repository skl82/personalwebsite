# sebastianlarsen.xyz

My personal website: music, reading, writing, projects, and a way to get in touch. Live at **[sebastianlarsen.xyz](https://www.sebastianlarsen.xyz)**.

![The homepage: name and bio with a menu of six sections on the left, and a stack of three photos on a textured paper background on the right](docs/screenshot.jpg)

## What's on it

- **Music:** bands I play in, my releases as Spotify embeds, and what I'm listening to.
- **Reading:** a hall of fame of favorite books.
- **Writing:** essays written in MDX and rendered on the site. Each one has its own shareable link.
- **Projects:** things I've built.
- **Resume:** links out to LinkedIn.
- **Contact:** a form that sends straight to my inbox.

The whole site is one page. Each section opens in a window over the home screen, the URL hash tracks where you are (`#writing`, `#writing/<essay>`), and the browser's back and forward buttons work as expected. On phones, the menu becomes a grid and sections open full-screen.

## How it's built

| Part | Tools |
|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS 4, Space Mono via `next/font` |
| Writing | MDX files in `content/writing/`, rendered with `next-mdx-remote` and `remark-gfm` |
| Motion | Framer Motion |
| Contact form | [Web3Forms](https://web3forms.com) |
| Hosting | Vercel, with Vercel Analytics |

### Details I cared about

- **Fully static.** Essays are rendered at build time, so the site is prerendered and serves fast with no server work per visit.
- **Publishing is just a file.** Drop an `.mdx` file with a title, date, summary, and tags into `content/writing/` and it appears, sorted by date, with reading time calculated. A post can link out to Substack instead of rendering on the site.
- **Security headers.** A strict Content Security Policy only allows the site itself, Spotify embeds, and the contact form's API, and the site can't be framed by other sites. It also sets HSTS and a Permissions-Policy that turns off camera, microphone, and location. See `next.config.ts`.
- **Smooth and accessible.** Spotify embeds load after the page is idle and hold their space so nothing jumps. The photo animation stops for visitors who prefer reduced motion, and hidden sections are `inert` so keyboard users can't tab into them.
- **Spam protection without a CAPTCHA.** The contact form uses a hidden honeypot field.

## Run it locally

```bash
npm install
npm run dev     # http://localhost:3000
```

The contact form needs `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local`. Everything else works without it.

## Project layout

```
src/app/          # the single page, layout, and global styles
src/components/   # shell, photo stack, viewer window, section panes
src/lib/          # site config and content data: posts loader, music, reading, projects
content/writing/  # essays as .mdx
```
