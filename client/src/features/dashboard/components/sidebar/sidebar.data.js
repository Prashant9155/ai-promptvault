import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Tags,
  Sparkles,
  User,
  Settings,
  Archive,
  Heart,
} from "lucide-react";

export const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    title: "All Prompts",
    href: "/dashboard/prompts",
    icon: FileText,
  },

  {
    title: "Favorites",
    href: "/dashboard/prompts/favorites",
    icon: Heart,
  },

  {
    title: "Archived",
    href: "/dashboard/prompts/archived",
    icon: Archive,
  },

  {
    title: "Collections",
    href: "/dashboard/collections",
    icon: FolderOpen,
  },

  {
    title: "Tags",
    href: "/dashboard/tags",
    icon: Tags,
  },

  {
    title: "AI Studio",
    href: "/dashboard/ai",
    icon: Sparkles,
  },

  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },

  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];