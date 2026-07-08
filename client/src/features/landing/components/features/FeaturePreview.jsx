import {
  CheckCircle2,
  Clock3,
  FolderKanban,
  Search,
  Sparkles,
  Tags,
  WandSparkles,
} from "lucide-react";

export default function FeaturePreview({ activeFeature }) {
  const renderContent = () => {
    switch (activeFeature.preview) {
      case "library":
        return (
          <>
            <div className="mb-4 flex items-center gap-2 rounded-xl border bg-background px-3 py-2.5 text-xs text-muted-foreground sm:mb-5 sm:px-4 sm:py-3 sm:text-sm">
              <Search className="h-4 w-4 shrink-0" />
              <span className="truncate">Search "React Interview Prompt"</span>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {[
                "Marketing Landing Page",
                "React Interview Questions",
                "Gemini Prompt Engineering",
                "REST API Documentation",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center justify-between gap-2 rounded-xl border p-3 transition sm:p-4 ${
                    index === 1 ? "border-primary/40 bg-primary/5" : ""
                  }`}
                >
                  <span className="truncate text-sm font-medium sm:text-base">{item}</span>
                  <FolderKanban className="h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
                </div>
              ))}
            </div>
          </>
        );

      case "ai":
        return (
          <div className="space-y-4 sm:space-y-5">
            <div className="rounded-xl border bg-background p-4 sm:p-5">
              <div className="mb-2.5 flex items-center gap-2 sm:mb-3">
                <Sparkles className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                <span className="text-sm font-semibold sm:text-base">Gemini AI Assistant</span>
              </div>

              <p className="text-sm leading-6 text-muted-foreground">
                Rewrite this prompt to improve clarity and generate more accurate AI responses.
              </p>
            </div>

            <div className="flex justify-center">
              <button className="inline-flex items-center rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground sm:px-5 sm:py-3">
                <WandSparkles className="mr-2 h-4 w-4" />
                Improve Prompt
              </button>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5">
              <div className="flex items-center gap-2 text-sm text-primary sm:text-base">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                Prompt optimized successfully
              </div>
            </div>
          </div>
        );

      case "collection":
        return (
          <div className="space-y-3 sm:space-y-4">
            {["Frontend", "Marketing", "Backend", "Content Writing"].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-xl border p-3 sm:p-4">
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium sm:text-base">{item}</div>
                  <div className="text-xs text-muted-foreground">18 Prompts</div>
                </div>
                <Tags className="h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
              </div>
            ))}
          </div>
        );

      case "history":
        return (
          <div className="space-y-3 sm:space-y-4">
            {["Version 4", "Version 3", "Version 2", "Original"].map((item, index) => (
              <div key={item} className="flex items-center justify-between rounded-xl border p-3 sm:p-4">
                <div>
                  <div className="text-sm font-medium sm:text-base">{item}</div>
                  <div className="text-xs text-muted-foreground">{index + 1} day ago</div>
                </div>
                <Clock3 className="h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
              </div>
            ))}
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

        <div className="min-h-80 p-4 transition-all duration-300 sm:min-h-95 sm:p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}