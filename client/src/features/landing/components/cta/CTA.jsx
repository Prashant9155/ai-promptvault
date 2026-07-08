import CTAContent from "./CTAContent";
import CTAStats from "./CTAStats";
import { ctaStats } from "./cta.data";

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-24 lg:py-32"
    >
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-[2rem] border bg-card px-8 py-16 text-center shadow-xl lg:px-16">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.12),transparent_70%)]" />

          <div className="relative">
            <CTAContent />

            <CTAStats stats={ctaStats} />
          </div>
        </div>
      </div>
    </section>
  );
}