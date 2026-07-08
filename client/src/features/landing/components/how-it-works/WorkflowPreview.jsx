import {
  FileText,
  FolderKanban,
  Star,
  Tag,
  Sparkles,
  WandSparkles,
  CheckCircle2,
  Clock3,
  RotateCcw,
  Search,
} from "lucide-react";

export default function WorkflowPreview({ activeStep }) {
  const renderContent = () => {
    switch (activeStep.preview) {
      /* Step 1 — Create or Import Prompt */
      case "editor":
        return (
          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-center justify-between gap-2">
              <div className="flex min-w-0 items-center gap-2">
                <FileText className="h-4 w-4 shrink-0 text-primary" />
                <span className="truncate text-sm font-semibold sm:text-base">
                  Untitled Prompt
                </span>
              </div>

              <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary sm:text-xs">
                Draft
              </span>
            </div>

            <div className="space-y-2.5 rounded-xl border bg-background p-4 sm:p-5">
              <div className="h-2.5 w-4/5 rounded-full bg-muted" />
              <div className="h-2.5 w-full rounded-full bg-muted" />
              <div className="h-2.5 w-3/5 rounded-full bg-muted" />
              <div className="h-2.5 w-2/3 rounded-full bg-muted" />
            </div>

            <div className="flex items-center justify-between gap-3">
              <span className="text-xs text-muted-foreground">
                Autosaved a few seconds ago
              </span>

              <button className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground sm:text-sm">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Save Prompt
              </button>
            </div>
          </div>
        );

      /* Step 2 — Organize Everything */
      case "organize":
        return (
          <div className="space-y-4 sm:space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              {["Marketing", "React", "Backend", "AI"].map((tag, i) => (
                <span
                  key={tag}
                  className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-medium sm:text-xs ${
                    i === 0
                      ? "border-primary/40 bg-primary/10 text-primary"
                      : "border-border bg-muted/40 text-muted-foreground"
                  }`}
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {[
                { name: "Frontend", count: "12 Prompts", starred: true },
                { name: "Marketing", count: "8 Prompts" },
                { name: "Backend", count: "6 Prompts" },
              ].map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-between gap-2 rounded-xl border p-3 sm:p-4"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <FolderKanban className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium">{c.name}</div>
                      <div className="text-xs text-muted-foreground">{c.count}</div>
                    </div>
                  </div>

                  {c.starred && (
                    <Star className="h-4 w-4 shrink-0 fill-primary text-primary" />
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      /* Step 3 — Enhance using Gemini AI */
      case "enhance":
        return (
          <div className="space-y-4 sm:space-y-5">
            <div className="rounded-xl border bg-background p-4 sm:p-5">
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                <span className="text-sm font-semibold sm:text-base">
                  Gemini AI Assistant
                </span>
              </div>

              <div className="space-y-2">
                <div className="h-2.5 w-full rounded-full bg-muted/70 line-through decoration-transparent" />
                <div className="h-2.5 w-4/5 rounded-full bg-muted/70" />
              </div>
            </div>

            <div className="flex justify-center">
              <button className="inline-flex items-center rounded-xl bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground sm:px-5 sm:py-3 sm:text-sm">
                <WandSparkles className="mr-2 h-4 w-4" />
                Improve Prompt
              </button>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5">
              <div className="mb-2 flex items-center gap-2 text-primary">
                <CheckCircle2 className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                <span className="text-sm font-medium sm:text-base">
                  Optimized version ready
                </span>
              </div>

              <div className="space-y-2">
                <div className="h-2.5 w-full rounded-full bg-primary/20" />
                <div className="h-2.5 w-3/4 rounded-full bg-primary/20" />
              </div>
            </div>
          </div>
        );

      /* Step 4 — Save & Reuse */
      case "history":
        return (
          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-center gap-2 rounded-xl border bg-background px-3 py-2.5 text-xs text-muted-foreground sm:px-4 sm:py-3 sm:text-sm">
              <Search className="h-4 w-4 shrink-0" />
              <span className="truncate">Search your prompt history...</span>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {[
                { v: "Version 4", time: "Just now", current: true },
                { v: "Version 3", time: "2 hours ago" },
                { v: "Version 2", time: "1 day ago" },
                { v: "Original", time: "3 days ago" },
              ].map((entry) => (
                <div
                  key={entry.v}
                  className={`flex items-center justify-between gap-2 rounded-xl border p-3 sm:p-4 ${
                    entry.current ? "border-primary/40 bg-primary/5" : ""
                  }`}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                        entry.current
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {entry.current ? (
                        <RotateCcw className="h-4 w-4" />
                      ) : (
                        <Clock3 className="h-4 w-4" />
                      )}
                    </div>

                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium">{entry.v}</div>
                      <div className="text-xs text-muted-foreground">{entry.time}</div>
                    </div>
                  </div>

                  {entry.current && (
                    <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                      Current
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border bg-card shadow-xl">
        {/* Browser Header */}
        <div className="flex items-center justify-between border-b px-4 py-3 sm:px-5 sm:py-4">
          <div className="flex gap-1.5 sm:gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3" />
          </div>

          <span className="text-xs font-medium text-muted-foreground sm:text-sm">
            AI PromptVault
          </span>
        </div>

        {/* Dynamic Preview — key forces remount so the fade-in replays per step */}
        <div
          key={activeStep.id}
          className="
                    min-h-80
                    animate-in
                    fade-in
                    slide-in-from-bottom-2
                    duration-300
                    p-4
                    sm:min-h-95
                    sm:p-6
                    "
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
}