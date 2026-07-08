import BackgroundEffects from "./BackgroundEffects";
import HeroContent from "./HeroContent";
import HeroDashboardPreview from "./HeroDashboardPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <BackgroundEffects />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-12 py-16 sm:gap-14 sm:py-20 lg:min-h-[calc(100vh-20px)] lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:py-28">
          {/* Left */}
          <HeroContent />

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <HeroDashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}