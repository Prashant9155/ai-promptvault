import { Sparkles } from "lucide-react";

export default function HeroDashboardPreview() {
  return (
    <div className="relative w-full max-w-xl">

      <div className="rounded-3xl border bg-card shadow-2xl">

        {/* Topbar */}

        <div className="flex items-center justify-between border-b px-6 py-4">

          <h3 className="font-semibold">
            AI PromptVault
          </h3>

          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>

        </div>

        <div className="flex">

          {/* Sidebar */}

          <aside className="hidden w-48 border-r p-4 md:block">

            {[
              "Dashboard",
              "Prompts",
              "Collections",
              "Tags",
              "Billing",
            ].map((item) => (
              <div
                key={item}
                className="mb-3 rounded-lg px-3 py-2 text-sm hover:bg-muted"
              >
                {item}
              </div>
            ))}

          </aside>

          {/* Content */}

          <main className="flex-1 space-y-5 p-6">

            {/* Stats */}

            <div className="grid grid-cols-3 gap-4">

              {[
                ["240", "Prompts"],
                ["18", "Collections"],
                ["94%", "AI Score"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border p-4"
                >
                  <p className="text-2xl font-bold">
                    {value}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {label}
                  </p>
                </div>
              ))}

            </div>

            {/* Prompt */}

            <div className="rounded-xl border p-5">

              <div className="mb-3 h-3 w-40 rounded bg-muted" />

              <div className="mb-2 h-2 rounded bg-muted" />

              <div className="mb-2 h-2 w-5/6 rounded bg-muted" />

              <div className="mb-6 h-2 w-4/6 rounded bg-muted" />

              <button className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground">

                <Sparkles className="mr-2 h-4 w-4" />

                Improve Prompt

              </button>

            </div>

          </main>

        </div>

      </div>

    </div>
  );
}