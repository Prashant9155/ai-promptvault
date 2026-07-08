import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FeatureItem({ feature, isActive, onClick }) {
  const Icon = feature.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group w-full rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5",
        "hover:-translate-y-0.5 hover:border-primary/40 hover:bg-muted/40",
        "focus:outline-none focus:ring-2 focus:ring-primary/20",
        isActive
          ? "border-primary/40 bg-primary/5 shadow-lg shadow-primary/5"
          : "border-border bg-background"
      )}
    >
      <div className="flex items-start justify-between gap-3 sm:gap-4">
        <div className="flex gap-3 sm:gap-4">
          <div
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors sm:h-12 sm:w-12",
              isActive
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
            )}
          >
            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <h3 className="text-base font-semibold text-foreground/90 transition-colors sm:text-lg">
              {feature.title}
            </h3>

            <p className="text-sm leading-6 text-muted-foreground">
              {feature.description}
            </p>
          </div>
        </div>

        <ArrowRight
          className={cn(
            "mt-1 h-4 w-4 shrink-0 transition-all duration-300 sm:h-5 sm:w-5",
            isActive
              ? "translate-x-1 text-primary"
              : "text-muted-foreground group-hover:translate-x-1 group-hover:text-primary"
          )}
        />
      </div>
    </button>
  );
}