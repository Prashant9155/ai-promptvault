import { Check } from "lucide-react";

export default function PricingFeatures({ features }) {
  return (
    <ul className="space-y-4">
      {features.map((feature) => (
        <li
          key={feature}
          className="flex items-start gap-3"
        >
          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Check className="h-3.5 w-3.5" />
          </div>

          <span className="text-sm leading-6 text-muted-foreground">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}