import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import PricingFeatures from "./PricingFeatures";

export default function PricingCard({
  plan,
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border bg-card p-8 transition-all duration-300",
        "hover:-translate-y-2 hover:shadow-2xl",
        plan.featured
          ? "border-primary shadow-xl shadow-primary/10"
          : "border-border hover:border-primary/30"
      )}
    >
      {/* Popular Badge */}

      {plan.featured && (
        <div className="absolute right-6 top-6">
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            ⭐ Most Popular
          </span>
        </div>
      )}

      {/* Plan */}

      <div>
        <h3 className="text-2xl font-bold text-foreground">
          {plan.name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {plan.description}
        </p>
      </div>

      {/* Price */}

      <div className="mt-8 flex items-end gap-1">
        <span className="text-5xl font-black tracking-tight">
          {plan.price}
        </span>

        <span className="pb-1 text-muted-foreground">
          {plan.period}
        </span>
      </div>

      {/* Divider */}

      <div className="my-8 h-px bg-border" />

      {/* Features */}

      <PricingFeatures
        features={plan.features}
      />

      {/* CTA */}

      <Button
        className={cn(
          "mt-10 h-12 w-full text-base",
          plan.featured &&
            "shadow-lg shadow-primary/20"
        )}
        variant={
          plan.featured ? "default" : "outline"
        }
      >
        {plan.button}

        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      {/* Bottom Glow */}

      {plan.featured && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-primary/10 to-transparent" />
      )}
    </div>
  );
}