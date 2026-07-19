"use client";

import { Bell, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme/theme-toggle";

import UserDropdown from "./UserDropdown";

export default function NavbarActions() {
  return (
    <div className="flex items-center gap-2">
      <Button asChild size="sm" className="hidden md:flex">
        <Link href="/dashboard/prompts/create" className="flex items-center">
          <Plus className="mr-2 h-4 w-4" />
          <span>New Prompt</span>
        </Link>
      </Button>

      <Button asChild variant="ghost" size="icon" className="md:hidden">
        <Link href="/dashboard/prompts/create">
          <Plus className="h-5 w-5" />
        </Link>
      </Button>

      <Button variant="ghost" size="icon">
        <Bell className="h-5 w-5" />
      </Button>

      <ThemeToggle />

      <UserDropdown />
    </div>
  );
}
