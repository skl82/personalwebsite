"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

// THREE FACETS — an interactive triptych hero.
// Three different portraits sit as tall vertical slats. The active one (hover
// on desktop, tap on mobile) expands to dominate while the other two compress
// to slivers and desaturate — so the eye reads "one person, three sides."
// Sharp corners + a paper-print edge + a slight pinned-to-the-page tilt keep it
// in the paper world of the rest of the site.
export function PhotoStack({
  onActiveChange,
}: {
  onActiveChange?: (index: number) => void;
}) {
  const photos = site.photos.slice(0, 3);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  // Gentle auto-drift: slowly breathe through each facet on its own, so the
  // hero feels alive before anyone touches it. Pauses while the pointer is over
  // the photos (manual control wins) and respects reduced-motion preferences.
  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % photos.length);
    }, 3800);
    return () => clearInterval(id);
  }, [paused, reduceMotion, photos.length]);

  // Report the active facet up so the name can take on its color.
  useEffect(() => {
    onActiveChange?.(active);
  }, [active, onActiveChange]);

  return (
    <div
      className={cn(
        "relative [transform:rotate(1.5deg)]",
        // Mobile: a compact triptych that fits the top half of the stacked
        // layout. Height is a dvh clamp (matching the h-dvh shell) but also
        // capped at 100% of its half via min(): when large accessibility font
        // sizes make the bio wrap to more lines, the bottom (text) half grows
        // and steals height from this top half. The min() lets the photo shrink
        // to fit the space that's left — so growing text scales the carousel
        // down instead of pushing into it and clipping at the top of the
        // screen. The half's pt-14 keeps the gap above the photo constant.
        "[width:clamp(220px,72vw,360px)] [height:min(clamp(220px,38dvh,400px),100%)]",
        // Desktop (md+): the original full-bleed dimensions, unchanged.
        "md:[width:clamp(320px,46vw,540px)] md:[height:clamp(440px,82vh,720px)]",
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
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
              transition={{ type: "spring", stiffness: 160, damping: 28 }}
            >
              <Image
                src={src}
                alt={`portrait ${i + 1}`}
                fill
                sizes="(max-width: 768px) 60vw, 540px"
                quality={90}
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

              {/* Editorial index marker — blends so it reads on any photo.
                  Sits parallel to the photo's (tilted) bottom edge. */}
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
