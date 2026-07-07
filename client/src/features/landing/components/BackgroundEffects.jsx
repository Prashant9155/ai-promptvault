export default function BackgroundEffects() {
  return (
    <>
      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />

      {/* Left Glow */}
      <div className="absolute -left-24 top-64 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

      {/* Right Glow */}
      <div className="absolute -right-24 bottom-20 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Grid */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-size-[60px_60px] opacity-[0.04]" />
    </>
  );
}