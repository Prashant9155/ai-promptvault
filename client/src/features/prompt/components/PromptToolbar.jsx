"use client";

import Link from "next/link";
import { Search, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PromptToolbar() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Prompt Library
          </h1>

          <p className="text-muted-foreground">
            Manage and organize all your AI prompts.
          </p>
        </div>

        <Button asChild>
          <Link href="/dashboard/prompts/create">
            <Plus className="mr-2 h-4 w-4" />
            Create Prompt
          </Link>
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          placeholder="Search prompts..."
          className="pl-10"
        />
      </div>
    </div>
  );
}