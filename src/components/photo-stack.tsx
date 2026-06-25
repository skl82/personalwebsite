"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

// THREE FACETS — an interactive triptych hero.
// Three different portraits sit as tall vertical slats. The active one (hover
// on desktop, tap on mobile) expands to dominate while the other two compress
// to slivers and desaturate — so the eye reads "one person, three sides."
// Sharp corners + a paper-print edge + a slight pinned-to-the-page tilt keep it
// in the paper world of the rest of the site.
export function PhotoStack() {
  const photos = site.photos.slice(0, 3);
  const [active, setActive] = useState(0);

  return (
    <div
      className="relative [transform:rotate(-1.5deg)]"
      style={{
        width: "clamp(300px, 40vw, 440px)",
        height: "clamp(380px, 72vh, 620px)",
      }}
    >
      <div className="flex h-full w-full gap-1.5">
        {photos.map((src, i) => {
          const on = i === active;
          return (
            <motion.button
              key={src}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-label={`portrait ${i + 1}`}
              className="group relative h-full min-w-0 overflow-hidden ring-[3px] ring-paper shadow-[0_24px_60px_-18px_rgba(40,33,20,0.5)] focus:outline-none"
              style={{ flexBasis: 0 }}
              animate={{ flexGrow: on ? 3.4 : 1 }}
              transition={{ type: "spring", stiffness: 210, damping: 26 }}
            >
              <Image
                src={src}
                alt={`portrait ${i + 1}`}
                fill
                sizes="(max-width: 768px) 60vw, 440px"
                priority={i === 0}
                className={cn(
                  "object-cover transition-[filter,transform] duration-500 ease-out",
                  on
                    ? "scale-100 grayscale-0 brightness-100"
                    : "scale-105 grayscale brightness-90",
                )}
              />

              {/* A soft paper veil deepens on the inactive (compressed) slats. */}
              <span
                className={cn(
                  "pointer-events-none absolute inset-0 bg-paper transition-opacity duration-500",
                  on ? "opacity-0" : "opacity-15",
                )}
              />

              {/* Editorial index marker — blends so it reads on any photo. */}
              <span className="absolute bottom-3 left-3 text-xs font-bold text-paper mix-blend-difference">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
