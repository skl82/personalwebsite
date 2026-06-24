import Image from "next/image";
import { site } from "@/lib/site";

// Three portraits stacked as overlapping rounded rectangles, cascading down.
// The arrangement's TOTAL height = 2 * vertical-gap + one box height. To make
// the photos bigger WITHOUT making the stack taller, the vertical gap between
// them is kept small (0.60 of a box) so the boxes themselves can grow.
//   top    → upper-left, on top
//   middle → down a little + well to the right (overlaps top along the seam)
//   bottom → down + back to the left (overlaps middle along the seam)
// Offsets are multiples of --box, so the whole thing scales as one unit.
// Each print is `--box` wide, 4:5 portrait (height = box * 1.25).
//   width  = 1.85 * box   |   height = 2.45 * box
const frames = [
  { left: "0", top: "0", z: 30 },
  { left: "calc(var(--box) * 0.85)", top: "calc(var(--box) * 0.60)", z: 20 },
  { left: "0", top: "calc(var(--box) * 1.20)", z: 10 },
] as const;

export function PhotoStack() {
  const photos = site.photos.slice(0, 3);

  return (
    <div
      className="relative [--box:clamp(180px,min(24vw,35vh),380px)]"
      style={{
        width: "calc(var(--box) * 1.85)",
        height: "calc(var(--box) * 2.45)",
      }}
    >
      {photos.map((src, i) => (
        <div
          key={i}
          className="absolute overflow-hidden rounded-[24px] ring-[3px] ring-paper shadow-[0_24px_60px_-18px_rgba(40,33,20,0.5)]"
          style={{
            left: frames[i].left,
            top: frames[i].top,
            zIndex: frames[i].z,
            width: "var(--box)",
            height: "calc(var(--box) * 1.25)", // 4:5 portrait
          }}
        >
          <Image
            src={src}
            alt={`portrait ${i + 1}`}
            fill
            sizes="(max-width: 768px) 70vw, 380px"
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  );
}
