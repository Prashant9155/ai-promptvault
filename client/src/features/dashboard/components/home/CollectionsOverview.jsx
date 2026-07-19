import { Card, CardContent } from "@/components/ui/card";

export default function CollectionsOverview() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="mb-6 text-lg font-semibold">
          Collections
        </h2>

        <div className="flex h-48 items-center justify-center text-muted-foreground">
          No collections created.
        </div>
      </CardContent>
    </Card>
  );
}