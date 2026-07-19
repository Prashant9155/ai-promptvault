"use client";

import PromptCard from "./PromptCard";
import PromptEmptyState from "./PromptEmptyState";
import PromptSkeleton from "./PromptSkeleton";

import usePrompts from "../hooks/usePrompts";

export default function PromptList() {
  const { prompts, loading } = usePrompts();
   console.log("prompts list..", prompts)

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <PromptSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!prompts.length) {
    return <PromptEmptyState />;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {prompts.map((prompt) => (
        <PromptCard
          key={prompt.id}
          prompt={prompt}
        />
      ))}
    </div>
  );
}