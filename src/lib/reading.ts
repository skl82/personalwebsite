// ─────────────────────────────────────────────────────────────────────────────
// READING DATA — your "book hall of fame".
//
// Each book is a tile with a cover image and a few details. To add a cover:
//   1) Drop the image into /public/covers/ (e.g. /public/covers/dune.jpg)
//   2) Point `cover` at it: cover: "/covers/dune.jpg"
// Covers look best at a 2:3 portrait ratio (e.g. 400×600).
// Leave `cover` as "" to show a styled placeholder tile with the title.
//
// Note: the whole site renders lowercase by design; type things normally here.
// ─────────────────────────────────────────────────────────────────────────────

export type Book = {
  title: string;
  author: string;
  cover: string; // "/covers/your-book.jpg", or "" for a placeholder tile
  year?: string; // when you read it, or the book's year — your call
  note?: string; // why it's in the hall of fame
  link?: string; // optional — goodreads, the storygraph, a buy link, etc.
};

export const hallOfFame: Book[] = [
  {
    title: "Solaris",
    author: "Stanisław Lem",
    cover: "/covers/solaris.jpg",
    year: "1961",
    note: "first contact as a mirror — the truly alien, and how little of it we'd ever grasp.",
  },
  {
    title: "Skunk Works",
    author: "Ben Rich",
    cover: "/covers/skunk-works.jpg",
    year: "1994",
    note: "how a tiny team conjured the u-2, the sr-71, and stealth. engineering as guerrilla warfare.",
  },
];
