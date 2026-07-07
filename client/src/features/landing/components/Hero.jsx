import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import HeroDashboardPreview from "./HeroDashboardPreview";
import BackgroundEffects from "./BackgroundEffects";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32">
      <BackgroundEffects />

      <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* Left */}

        <div>
          <div className="inline-flex rounded-full border bg-muted/50 px-4 py-2 text-sm font-medium">
            🚀 AI Prompt Management Platform
          </div>

          <h1 className="mt-8 max-w-xl text-5xl font-black leading-tight tracking-tight lg:text-7xl">
            Build Better AI Prompts.
            <span className="block text-primary">Faster.</span>
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-8 text-muted-foreground">
            Store, organize, improve and version AI prompts with an AI-powered
            workspace built for developers, creators and modern teams.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="h-12 px-8" asChild>
              <Link href="/register">Get Started</Link>
            </Button>

            <Button size="lg" variant="outline" className="h-12 px-8">
              <Link href="/github.com">View GitHub</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-8">
            {[
              "AI Enhancement",
              "Collections",
              "JWT Security",
              "Lightning Fast",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />

                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <HeroDashboardPreview />
      </div>
    </section>
  );
}
