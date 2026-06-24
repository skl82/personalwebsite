import { site } from "@/lib/site";

// Three portraits stacked as overlapping boxes, zigzagging down:
//   top      → upper-left,  on top of the stack
//   middle   → offset down + right, so TOP's bottom-right covers MIDDLE's top-left
//   bottom   → offset down + left,  so MIDDLE's bottom-left covers BOTTOM's top-right
// Offsets are expressed in multiples of --box so the whole thing scales as one.
const frames = [
  { left: "0", top: "0", z: 30 },
  { left: "calc(var(--box) * 0.60)", top: "calc(var(--box) * 0.80)", z: 20 },
  { left: "0", top: "calc(var(--box) * 1.60)", z: 10 },
] as const;

export function PhotoStack() {
  const photos = site.photos.slice(0, 3);

  return (
    <div
      className="relative"
      style={
        {
          // box width; height of each print ≈ box * 4/3
          "--box": "clamp(116px, 15vw, 188px)",
          width: "calc(var(--box) * 1.60)",
          height: "calc(var(--box) * 2.93)",
        } as React.CSSProperties
      }
    >
      {photos.map((src, i) => (
        <div
          key={i}
          className="absolute bg-white p-2 shadow-[0_14px_36px_-14px_rgba(40,33,20,0.5)] ring-1 ring-black/5"
          style={{
            left: frames[i].left,
            top: frames[i].top,
            zIndex: frames[i].z,
            width: "var(--box)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={`portrait ${i + 1}`}
            className="block w-full"
            style={{ aspectRatio: "3 / 4", objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
}
