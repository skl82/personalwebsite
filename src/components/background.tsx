// Ambient gradient blobs + a faint grid. Purely decorative, fixed behind
// everything. Animation respects prefers-reduced-motion (see globals.css).
export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="animate-float absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full opacity-40 blur-[100px]"
        style={{
          background: "radial-gradient(circle, var(--color-accent), transparent 62%)",
        }}
      />
      <div
        className="animate-float absolute top-1/3 -right-40 h-[40rem] w-[40rem] rounded-full opacity-25 blur-[110px]"
        style={{
          background: "radial-gradient(circle, var(--color-accent-2), transparent 62%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="animate-float absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full opacity-20 blur-[110px]"
        style={{
          background: "radial-gradient(circle, var(--color-cyan), transparent 62%)",
          animationDelay: "-3s",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 0%, black, transparent 75%)",
        }}
      />
    </div>
  );
}
