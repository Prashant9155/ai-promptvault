"use client";

import Link from "next/link";
import { FileText, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function PromptEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-20 text-center">
      <div className="rounded-full bg-muted p-5">
        <FileText className="h-10 w-10 text-muted-foreground" />
      </div>

      <h2 className="mt-6 text-2xl font-semibold">
        No prompts yet
      </h2>

      <p className="mt-2 max-w-md text-muted-foreground">
        Start building your AI prompt library by creating your
        first prompt.
      </p>

      <Button asChild className="mt-6">
        <Link href="/dashboard/prompts/create">
          <Plus className="mr-2 h-4 w-4" />
          Create First Prompt
        </Link>
      </Button>
    </div>
  );
}