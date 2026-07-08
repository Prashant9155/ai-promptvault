import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import HeroBadge from "./HeroBadge";

import { Button } from "@/components/ui/button";

const highlights = [
  "Prompt Versioning",
  "AI Enhancement",
  "Smart Collections",
  "Lightning Search",
];

export default function HeroContent() {
  return (
    <div className="flex max-w-2xl flex-col items-start text-left">
      <HeroBadge />

      <h1 className="mt-5 text-3xl font-black tracking-tight text-foreground sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
        Organize Every AI Prompt in One Workspace.
      </h1>

      <p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground sm:mt-6 sm:text-base sm:leading-7">
        AI PromptVault helps developers, creators and teams organize, version,
        search and enhance prompts with Gemini AI — so every great prompt is
        always easy to find and improve.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button size="lg" className="h-12 px-8 text-base" asChild>
          <Link href="/register">Get Started</Link>
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="h-11 px-6 text-sm sm:px-8 sm:text-base"
          asChild
        >
          <a
            href="https://github.com/Prashant9155/ai-promptvault"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </Button>
      </div>

      <div className="mt-6 grid w-full grid-cols-1 gap-3 xs:grid-cols-2 sm:mt-7 sm:gap-5">
        {highlights.map((item) => (
          <div key={item} className="flex items-center gap-2.5 sm:gap-3">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
            <span className="text-sm font-medium text-muted-foreground">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
