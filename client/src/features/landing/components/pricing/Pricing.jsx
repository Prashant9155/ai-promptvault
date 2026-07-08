import Link from "next/link";

import { Button } from "@/components/ui/button";

import PricingCard from "./PricingCard";
import PricingHeader from "./PricingHeader";
import { pricingPlans } from "./pricing.data";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 py-24 lg:py-32"
    >
      <div className="container mx-auto px-6">
        <PricingHeader />

        {/* Pricing Cards */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-2">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-16 max-w-3xl rounded-3xl border bg-card p-8 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-foreground">
            Need something bigger?
          </h3>

          <p className="mt-4 text-muted-foreground">
            Team plans, enterprise licensing, and additional AI
            credits will be available in future releases. We'd love
            to hear what you're building.
          </p>

          <Button
            asChild
            variant="outline"
            className="mt-8 h-12 px-8"
          >
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </div>

        {/* Pricing Note */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          Payments are not live yet. Pricing is displayed for
          demonstration purposes during the MVP phase and will be
          integrated with a payment gateway in a future release.
        </p>
      </div>
    </section>
  );
}