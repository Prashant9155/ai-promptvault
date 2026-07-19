export default function PromptHeader({
  title,
  description,
}) {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold tracking-tight">
        {title}
      </h1>

      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  );
}