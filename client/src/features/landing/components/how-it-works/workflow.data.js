import {
  FilePlus2,
  Tags,
  WandSparkles,
  History,
} from "lucide-react";

export const workflow = [
  {
    id: "create",
    step: "01",
    title: "Create or Import Prompt",
    description:
      "Write a new prompt from scratch or paste one you already have. It's saved instantly to your workspace.",
    icon: FilePlus2,
    preview: "editor",
    highlights: ["Write a prompt", "Paste an existing prompt", "Save instantly"],
  },

  {
    id: "organize",
    step: "02",
    title: "Organize Everything",
    description:
      "Tag prompts, group them into collections and star the ones you reach for most.",
    icon: Tags,
    preview: "organize",
    highlights: ["Add tags", "Create collections", "Favorite important prompts"],
  },

  {
    id: "enhance",
    step: "03",
    title: "Enhance using Gemini AI",
    description:
      "Let Gemini AI rewrite, optimize and generate improved versions of your prompt in one click.",
    icon: WandSparkles,
    preview: "enhance",
    highlights: ["Rewrite prompt", "Optimize prompt", "Generate better versions"],
  },

  {
    id: "reuse",
    step: "04",
    title: "Save & Reuse",
    description:
      "Every change is versioned automatically, so you can search instantly and reuse any prompt anytime.",
    icon: History,
    preview: "history",
    highlights: ["Version history", "Search instantly", "Reuse anytime"],
  },
];