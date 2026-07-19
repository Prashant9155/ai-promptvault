import { Card, CardContent } from "@/components/ui/card";

export default function RecentPrompts() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="mb-6 text-lg font-semibold">
          Recent Prompts
        </h2>

        <div className="flex h-48 items-center justify-center text-muted-foreground">
          No prompts found.
        </div>
      </CardContent>
    </Card>
  );
}