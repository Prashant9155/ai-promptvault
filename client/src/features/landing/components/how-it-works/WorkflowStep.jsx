import { cn } from "@/lib/utils";

export default function WorkflowStep({ step, isActive, onClick }) {
  const Icon = step.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative w-full rounded-2xl border p-4 text-left transition-all duration-300",
        "hover:-translate-y-0.5 hover:border-primary/40 hover:bg-muted/40",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
        isActive
          ? "border-primary/50 bg-primary/5 shadow-lg shadow-primary/10"
          : "border-border bg-background"
      )}
    >
      {/* Left active-state accent bar */}
      <span
        className={cn(
          "absolute inset-y-3 left-0 w-0.5 rounded-full bg-primary transition-opacity duration-300 sm:inset-y-4",
          isActive ? "opacity-100" : "opacity-0"
        )}
      />

      <div className="flex items-start gap-3 sm:gap-4">
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 sm:h-11 sm:w-11",
            isActive
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
          )}
        >
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>

        <div className="min-w-0 space-y-1.5 sm:space-y-2">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "font-mono text-xs font-semibold tracking-wider transition-colors duration-300",
                isActive ? "text-primary" : "text-muted-foreground/70"
              )}
            >
              {step.step}
            </span>
          </div>

          <h3
            className={cn(
              "font-semibold transition-colors duration-300 text-base xl:text-lg",
              isActive ? "text-foreground" : "text-foreground/90"
            )}
          >
            {step.title}
          </h3>

          <p
            className={cn(
              "text-sm leading-6 text-muted-foreground transition-all duration-300",
              isActive
                ? "max-h-40 opacity-100"
                : "max-h-0 overflow-hidden opacity-0 sm:max-h-40 sm:opacity-100"
            )}
          >
            {step.description}
          </p>
        </div>
      </div>
    </button>
  );
}