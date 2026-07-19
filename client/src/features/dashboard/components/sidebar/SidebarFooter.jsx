"use client";

import { LogOut, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme/theme-toggle";

export default function SidebarFooter() {
  return (
    <div className="border-t p-4 space-y-3">
      <ThemeToggle />

      <Button
        variant="outline"
        className="w-full justify-start gap-2"
      >
        <LogOut className="h-4 w-4" />

        <span className="hidden lg:block">Logout</span>
      </Button>
    </div>
  );
}