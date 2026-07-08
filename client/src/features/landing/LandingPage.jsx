import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import HowItWorks from "./components/how-it-works/HowItWorks";
import Pricing from "./components/pricing/Pricing";
import FAQ from "./components/faq/FAQ";
import CTA from "./components/cta/CTA";
import Footer from "./components/footer/Footer"

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}