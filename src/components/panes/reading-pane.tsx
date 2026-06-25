import Image from "next/image";
import { hallOfFame, type Book } from "@/lib/reading";

export function ReadingPane() {
  return (
    <div className="space-y-10">
      {/* Book hall of fame */}
      <section>
        <h2 className="mb-4 flex items-center gap-3 text-sm text-muted">
          book hall of fame
          <span className="h-px flex-1 bg-line" />
        </h2>
        <ul className="grid grid-cols-2 gap-x-5 gap-y-7">
          {hallOfFame.map((book) => (
            <BookTile key={`${book.title}-${book.author}`} book={book} />
          ))}
        </ul>
      </section>
    </div>
  );
}

function BookTile({ book }: { book: Book }) {
  const cover = (
    <div className="relative aspect-[2/3] w-full overflow-hidden bg-paper-2 ring-1 ring-line shadow-[0_12px_30px_-14px_rgba(40,33,20,0.5)] transition-transform duration-200 group-hover:-translate-y-1">
      {book.cover ? (
        <Image
          src={book.cover}
          alt={`${book.title} — ${book.author}`}
          fill
          sizes="(max-width: 768px) 45vw, 260px"
          className="object-cover"
        />
      ) : (
        // Placeholder when no cover image is set yet.
        <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center">
          <span className="text-sm leading-snug text-ink">{book.title}</span>
          <span className="text-xs text-faint">{book.author}</span>
        </div>
      )}
    </div>
  );

  return (
    <li className="group">
      {book.link ? (
        <a
          href={book.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {cover}
        </a>
      ) : (
        cover
      )}

      <div className="mt-2.5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="min-w-0 truncate text-ink">{book.title}</h3>
          {book.year && (
            <span className="shrink-0 text-xs text-muted">{book.year}</span>
          )}
        </div>
        <p className="text-sm text-muted">{book.author}</p>
        {book.note && (
          <p className="mt-1 text-xs leading-relaxed text-faint">{book.note}</p>
        )}
      </div>
    </li>
  );
}
