import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
      <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      <span>Powered by Gemini AI</span>
    </div>
  );
}