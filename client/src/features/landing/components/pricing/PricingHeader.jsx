export default function PricingHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {/* Badge */}
      <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
        💰 Pricing
      </span>

      {/* Heading */}
      <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        Simple Pricing for Every
        <span className="block text-primary">
          AI Creator
        </span>
      </h2>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
        Start for free and organize up to{" "}
        <span className="font-semibold text-foreground">
          25 AI prompts
        </span>
        . Upgrade anytime for just{" "}
        <span className="font-semibold text-primary">
          ₹10/month
        </span>{" "}
        to unlock unlimited prompts, Gemini AI enhancements, and all future premium features.
      </p>
    </div>
  );
}