import { Button } from "@/components/ui/button";
import { quickActions } from "./home.data";

export default function QuickActions() {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <h2 className="mb-6 text-lg font-semibold">
        Quick Actions
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickActions.map((action) => {
          const Icon = action.icon;

          return (
            <Button
              key={action.title}
              variant="outline"
              className="h-20 flex-col gap-2"
            >
              <Icon size={22} />

              {action.title}
            </Button>
          );
        })}
      </div>
    </div>
  );
}