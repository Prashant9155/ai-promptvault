export default function SectionHeader({
  badge,
  title,
  description,
  centered = true,
}) {
  return (
    <div
      className={`mx-auto max-w-3xl px-4 sm:px-0 ${
        centered ? "text-center" : "text-left"
      }`}
    >
      {badge && (
        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary sm:px-4 sm:py-2 sm:text-sm">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:mt-6 sm:text-3xl lg:text-4xl xl:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  );
}