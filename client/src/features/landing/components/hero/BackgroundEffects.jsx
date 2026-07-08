export default function BackgroundEffects() {
  return (
    <>
      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 -z-20 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-[100px] sm:h-[420px] sm:w-[420px] sm:blur-[140px]" />

      {/* Left Glow */}
      <div className="absolute -left-20 top-40 -z-20 h-48 w-48 rounded-full bg-violet-500/10 blur-[90px] sm:-left-40 sm:top-60 sm:h-[360px] sm:w-[360px] sm:blur-[130px]" />

      {/* Right Glow */}
      <div className="absolute -right-20 bottom-10 -z-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-[100px] sm:-right-40 sm:bottom-20 sm:h-[420px] sm:w-[420px] sm:blur-[140px]" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -z-20 h-40 w-64 -translate-x-1/2 rounded-full bg-primary/5 blur-[90px] sm:h-[300px] sm:w-[500px] sm:blur-[120px]" />

      {/* Radial Overlay */}
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.08),transparent_60%)]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-40 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.05] sm:bg-[size:56px_56px]" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-b from-transparent to-background sm:h-40" />
    </>
  );
}