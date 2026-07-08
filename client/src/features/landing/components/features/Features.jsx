"use client";

import { useState } from "react";

import { features } from "./features.data";
import FeatureItem from "./FeatureItem";
import FeaturePreview from "./FeaturePreview";
import FeatureTabs from "./FeatureTabs";
import SectionHeader from "./SectionHeader";

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section id="features" className="scroll-mt-24 py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="✨ Features"
          title="Everything You Need to Manage AI Prompts"
          description="Store, organize, search, version and enhance AI prompts with an intelligent workspace powered by Gemini AI."
        />

        {/* Desktop & Tablet */}
        <div className="mt-12 hidden gap-8 sm:mt-16 lg:mt-20 lg:grid lg:grid-cols-[380px_1fr] lg:items-start lg:gap-12">
          <FeatureTabs
            features={features}
            activeFeature={activeFeature}
            setActiveFeature={setActiveFeature}
          />
          <FeaturePreview activeFeature={activeFeature} />
        </div>

        {/* Mobile & Tablet: static, non-interactive pairing of item + preview */}
        <div className="mt-12 space-y-8 sm:mt-16 lg:hidden">
          {features.map((feature) => (
            <div key={feature.id} className="space-y-5 sm:space-y-6">
              <FeatureItem feature={feature} isActive onClick={() => {}} />
              <FeaturePreview activeFeature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}