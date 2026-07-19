import { Button } from "@/components/ui/button";

export default function WelcomeBanner() {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border bg-card p-8 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back 👋
        </h1>

        <p className="mt-2 text-muted-foreground">
          Organize, improve and manage your AI prompts from one place.
        </p>
      </div>

      <div className="flex gap-3">
        <Button>New Prompt</Button>

        <Button variant="outline">
          AI Generate
        </Button>
      </div>
    </div>
  );
}