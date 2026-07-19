"use client";

import PromptToolbar from "./PromptToolbar";
import PromptList from "./PromptList";

export default function PromptLibrary() {
  return (
    <div className="space-y-8">
      <PromptToolbar />

      <PromptList />
    </div>
  );
}