import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function CTAContent() {
  return (
    <>
      <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
        🚀 Get Started
      </span>

      <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
        Ready to Organize Every
        <span className="block text-primary">
          AI Prompt?
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
        Join AI PromptVault and start storing, organizing,
        versioning and improving your prompts with Gemini AI.
      </p>

      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
        <Button
          asChild
          size="lg"
          className="h-12 px-8"
        >
          <Link href="/register" className="flex items-center gap-1">
          <span>Get Started</span>
            

            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-12 px-8"
        >
          <Link
            href="https://github.com/yourusername/ai-promptvault"
            target="_blank"
            className="flex items-center gap-1"
          >
            <FaGithub className="mr-2 h-5 w-5" />

            <span>View on GitHub</span>
          </Link>
        </Button>
      </div>
    </>
  );
}