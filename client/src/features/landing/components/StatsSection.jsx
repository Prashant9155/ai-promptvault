"use client";

import { Sparkles, FolderKanban, Wand2, Users } from "lucide-react";

const stats = [
  {
    icon: Sparkles,
    value: "10K+",
    label: "Prompts Managed",
    description: "Store, organize and search prompts instantly.",
  },
  {
    icon: Wand2,
    value: "25K+",
    label: "AI Improvements",
    description: "Enhance prompts using AI-powered suggestions.",
  },
  {
    icon: FolderKanban,
    value: "500+",
    label: "Collections",
    description: "Organize prompts into reusable collections.",
  },
  {
    icon: Users,
    value: "2K+",
    label: "Developers",
    description: "Trusted by creators, developers and AI teams.",
  },
];

export default function StatsSection() {
  return (
    <section className="border-y border-border/50 bg-muted/20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label, description }) => (
            <div
              key={label}
              className="group rounded-3xl border border-border/60 bg-background/80 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:scale-110">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="text-4xl font-bold tracking-tight">{value}</h3>

              <p className="mt-2 text-lg font-semibold">{label}</p>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}