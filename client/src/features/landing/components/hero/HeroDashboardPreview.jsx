import {
  Sparkles,
  Search,
  FolderOpen,
  FolderKanban,
  Tags,
  Star,
  WandSparkles,
  ChevronRight,
} from "lucide-react";

const prompts = [
  { title: "Marketing Landing Page", tag: "Marketing", active: true },
  { title: "React Interview Questions", tag: "React" },
  { title: "Node API Documentation", tag: "Backend" },
  { title: "Gemini System Prompt", tag: "AI" },
];

const sidebar = [
  { icon: FolderKanban, label: "Dashboard" },
  { icon: FolderOpen, label: "Collections" },
  { icon: Tags, label: "Tags" },
  { icon: Star, label: "Favorites" },
  { icon: Sparkles, label: "AI Studio" },
];

export default function HeroDashboardPreview() {
  return (
    <div className="relative w-full max-w-2xl">
      <div className="absolute inset-0 rounded-[36px] bg-primary/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border bg-card shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 border-b px-3 py-2.5 sm:px-4 sm:py-3">
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <div className="flex gap-1.5 sm:gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3" />
            </div>

            <span className="hidden text-sm font-semibold text-muted-foreground md:block">
              AI PromptVault
            </span>
          </div>

          <div className="flex min-w-0 items-center gap-2 rounded-xl border bg-background px-2.5 py-1.5 text-xs text-muted-foreground sm:px-3 sm:py-2 sm:text-sm">
            <Search className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
            <span className="truncate">Search "Gemini Prompt"...</span>
          </div>
        </div>

        <div className="grid md:grid-cols-[180px_1fr]">
          {/* Sidebar */}
          <aside className="hidden border-r bg-muted/20 p-4 md:block">
            {sidebar.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="mb-2 flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-background"
              >
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </aside>

          {/* Content */}
          <main className="space-y-4 p-3 sm:space-y-5 sm:p-5">
            {/* Prompt List */}
            <div className="rounded-2xl border">
              {prompts.map((prompt) => (
                <div
                  key={prompt.title}
                  className={`flex cursor-pointer items-center justify-between gap-2 border-b px-3 py-3 transition last:border-0 hover:bg-muted/40 sm:px-5 sm:py-4 ${
                    prompt.active ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-medium sm:text-base">
                      {prompt.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {prompt.tag}
                    </span>
                  </div>

                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                </div>
              ))}
            </div>

            {/* AI Panel */}
            <div className="rounded-2xl border bg-background p-4 sm:p-5">
              <div className="mb-2.5 flex items-center gap-2 sm:mb-3">
                <Sparkles className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                <h3 className="text-sm font-semibold sm:text-base">
                  Gemini AI Enhancement
                </h3>
              </div>

              <p className="text-sm leading-6 text-muted-foreground">
                Rewrite prompts, improve clarity, optimize for better
                responses and create multiple prompt versions instantly
                using Gemini AI.
              </p>

              <button className="mt-4 inline-flex items-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 sm:mt-5 sm:px-5 sm:py-3">
                <WandSparkles className="mr-2 h-4 w-4" />
                Improve Prompt
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}