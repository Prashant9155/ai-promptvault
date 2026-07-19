"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Calendar,
  Sparkles,
  Lock,
  Globe,
} from "lucide-react";

export default function PromptCard({ prompt }) {
 
  return (
    <div className="rounded-xl border bg-card p-6 transition hover:shadow-lg">
      <div className="space-y-3">
        <h3 className="line-clamp-1 text-lg font-semibold">
          {prompt.title}
        </h3>

        <p className="line-clamp-3 text-sm text-muted-foreground">
          {prompt.description}
        </p>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">
            <Sparkles className="mr-1 h-3 w-3" />
            {prompt.aiModel}
          </Badge>

          <Badge variant="outline">
            {prompt.visibility === "PUBLIC" ? (
              <>
                <Globe className="mr-1 h-3 w-3" />
                Public
              </>
            ) : (
              <>
                <Lock className="mr-1 h-3 w-3" />
                Private
              </>
            )}
          </Badge>
        </div>

        <div className="flex items-center justify-between pt-4">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {new Date(prompt.createdAt).toLocaleDateString()}
          </span>

          <Button
            variant="outline"
            size="sm"
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
}