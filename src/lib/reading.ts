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
    title: "Blood Meridian", // REPLACE
    author: "Cormac McCarthy",
    cover: "", // REPLACE — e.g. "/covers/blood-meridian.jpg"
    year: "2024",
    note: "the most beautiful sentences about the most terrible things.",
  },
  {
    title: "The Left Hand of Darkness", // REPLACE
    author: "Ursula K. Le Guin",
    cover: "",
    year: "2023",
    note: "rewired how i think about people and politics.",
  },
  {
    title: "Gödel, Escher, Bach", // REPLACE
    author: "Douglas Hofstadter",
    cover: "",
    note: "a book that thinks about thinking. took a year, worth a decade.",
  },
  {
    title: "Stoner", // REPLACE
    author: "John Williams",
    cover: "",
    note: "a quiet life rendered so well it breaks your heart.",
  },
];
