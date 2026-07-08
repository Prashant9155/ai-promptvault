export default function CTAStats({ stats }) {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-3">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-lg"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>

            <h3 className="mt-4 font-semibold">
              {item.title}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}