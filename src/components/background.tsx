// Flat terminal backdrop: faint 60px grid, subtle scanlines, vignette.
// Echoes the band site's CRT/terminal loader. Purely decorative, fixed.
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 0%, black, transparent 80%)",
        }}
      />
      {/* scanlines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 4px)",
        }}
      />
      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.5) 100%)",
        }}
      />
    </div>
  );
}
