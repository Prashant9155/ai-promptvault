import { ShieldCheck, Sparkles, FolderKanban, Zap } from "lucide-react";

const STATS = [
  { icon: Sparkles, title: "AI Enhancement" },
  { icon: FolderKanban, title: "Smart Collections" },
  { icon: ShieldCheck, title: "Secure Workspace" },
  { icon: Zap, title: "Lightning Fast" },
];

export default function HeroStats() {
  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4">
      {STATS.map(({ icon: Icon, title }) => (
        <div
          key={title}
          className="flex items-center gap-2.5 rounded-xl border bg-background/60 px-3 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-muted/60 sm:gap-3 sm:px-4 sm:py-3"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-10 sm:w-10">
            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>

          <span className="truncate text-xs font-medium text-foreground sm:text-sm">
            {title}
          </span>
        </div>
      ))}
    </div>
  );
}