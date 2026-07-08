import {
  FolderKanban,
  Sparkles,
  History,
  FolderTree,
} from "lucide-react";

export const features = [
  {
    id: "library",
    icon: FolderKanban,
    title: "Smart Prompt Library",
    description:
      "Store, search and organize every AI prompt in one centralized workspace.",
    preview: "library",
  },

  {
    id: "ai",
    icon: Sparkles,
    title: "Gemini AI Enhancement",
    description:
      "Rewrite, optimize and generate better prompts using Gemini AI.",
    preview: "ai",
  },

  {
    id: "collections",
    icon: FolderTree,
    title: "Collections & Tags",
    description:
      "Organize prompts with collections, smart tags and quick filters.",
    preview: "collection",
  },

  {
    id: "history",
    icon: History,
    title: "Version History",
    description:
      "Track every change, compare revisions and restore previous versions.",
    preview: "history",
  },
];