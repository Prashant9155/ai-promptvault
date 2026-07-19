import { Card, CardContent } from "@/components/ui/card";

export default function RecentAIActivity() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="mb-6 text-lg font-semibold">
          AI Activity
        </h2>

        <div className="flex h-48 items-center justify-center text-muted-foreground">
          No AI activity yet.
        </div>
      </CardContent>
    </Card>
  );
}