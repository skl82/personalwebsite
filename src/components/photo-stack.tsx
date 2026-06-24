import Image from "next/image";
import { site } from "@/lib/site";

// Three portraits stacked as overlapping rounded rectangles, zigzagging down:
//   top      → upper-left, on top of the stack
//   middle   → pushed down + well to the right; TOP's bottom-right just kisses
//              MIDDLE's top-left corner
//   bottom   → down + back to the left; MIDDLE's bottom-left just kisses
//              BOTTOM's top-right corner
// Offsets are multiples of --box, so the whole arrangement scales as one unit.
// Each print is `--box` wide with a 4:5 portrait ratio (height = box * 1.25).
const frames = [
  { left: "0", top: "0", z: 30 },
  { left: "calc(var(--box) * 0.85)", top: "calc(var(--box) * 1.10)", z: 20 },
  { left: "0", top: "calc(var(--box) * 2.20)", z: 10 },
] as const;

export function PhotoStack() {
  const photos = site.photos.slice(0, 3);

  return (
    <div
      className="relative [--box:clamp(150px,min(24vw,25vh),260px)]"
      style={{
        width: "calc(var(--box) * 1.85)",
        height: "calc(var(--box) * 3.45)",
      }}
    >
      {photos.map((src, i) => (
        <div
          key={i}
          className="absolute overflow-hidden rounded-[22px] ring-[3px] ring-paper shadow-[0_22px_55px_-18px_rgba(40,33,20,0.5)]"
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
            sizes="(max-width: 768px) 60vw, 260px"
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  );
}
