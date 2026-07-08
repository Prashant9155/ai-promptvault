export default function FAQHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
        ❓ Frequently Asked Questions
      </span>

      <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        Everything You Need to Know
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
        Have questions about AI PromptVault? Here are answers to the
        most common questions from developers, creators and AI teams.
      </p>
    </div>
  );
}