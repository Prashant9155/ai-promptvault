"use client";

import Link from "next/link";
import { PanelLeftClose } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppLogo from "@/components/branding/AppLogo";

export default function SidebarHeader({
  collapsed = false,
  onToggle,
}) {
  return (
    <div className="flex items-center justify-between border-b px-5 py-5">
      <Link
        href="/dashboard"
        className="flex items-center gap-3"
      >
        <AppLogo className="h-9 w-9" />
      </Link>

      <Button
        variant="ghost"
        size="icon"
        onClick={onToggle}
        className="hidden lg:flex"
      >
        <PanelLeftClose className="h-5 w-5" />
      </Button>
    </div>
  );
}