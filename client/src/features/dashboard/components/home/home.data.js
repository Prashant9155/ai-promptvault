import {
  FileText,
  FolderOpen,
  Tags,
  Sparkles,
  Plus,
  WandSparkles,
  FolderPlus,
  Tag,
} from "lucide-react";

export const stats = [
  {
    title: "Total Prompts",
    value: "0",
    icon: FileText,
    color: "text-blue-600",
  },
  {
    title: "Collections",
    value: "0",
    icon: FolderOpen,
    color: "text-green-600",
  },
  {
    title: "Tags",
    value: "0",
    icon: Tags,
    color: "text-orange-600",
  },
  {
    title: "AI Generations",
    value: "0",
    icon: Sparkles,
    color: "text-violet-600",
  },
];

export const quickActions = [
  {
    title: "New Prompt",
    icon: Plus,
  },
  {
    title: "AI Generate",
    icon: WandSparkles,
  },
  {
    title: "New Collection",
    icon: FolderPlus,
  },
  {
    title: "Manage Tags",
    icon: Tag,
  },
];

export const recentPrompts = [];

export const collections = [];

export const activities = [];