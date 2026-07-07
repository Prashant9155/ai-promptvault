import {
  Sparkles,
  FolderKanban,
  Tags,
  BrainCircuit,
  ShieldCheck,
  History,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Prompt Improvement",
    description:
      "Enhance prompts instantly with AI-powered suggestions for better quality and results.",
    className: "md:col-span-2",
  },
  {
    icon: FolderKanban,
    title: "Collections",
    description:
      "Organize prompts into structured collections for faster access.",
  },
  {
    icon: Tags,
    title: "Smart Tags",
    description:
      "Categorize prompts using tags and powerful filtering.",
  },
  {
    icon: BrainCircuit,
    title: "AI Workspace",
    description:
      "Generate, explain and improve prompts from one place.",
    className: "md:col-span-2",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "JWT authentication, email verification and password recovery.",
  },
  {
    icon: History,
    title: "Version History",
    description:
      "Track every prompt update and restore previous versions.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-28"
    >
      <div className="container mx-auto px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border px-4 py-2 text-sm font-medium">
            Features
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Everything you need to manage AI prompts
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Built for developers, creators and AI teams with modern
            tools to organize, improve and scale prompt workflows.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`group rounded-3xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl ${feature.className || ""}`}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mb-3 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}