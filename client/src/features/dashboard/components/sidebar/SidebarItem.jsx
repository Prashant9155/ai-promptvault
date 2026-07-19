"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function SidebarItem({ item, collapsed, }) {
  const pathname = usePathname();

  const isActive =
    pathname === item.href ||
    pathname.startsWith(item.href + "/");

  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all",
        collapsed ? "justify-center" : "gap-3",
        isActive
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      )}
    >
      <Icon size={18} />

      {!collapsed && <span>{item.title}</span>}
    </Link>
  );
}