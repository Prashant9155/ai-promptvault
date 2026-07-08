import FeatureItem from "./FeatureItem";

export default function FeatureTabs({ features, activeFeature, setActiveFeature }) {
  return (
    <div className="space-y-3 sm:space-y-4">
      {features.map((feature) => (
        <FeatureItem
          key={feature.id}
          feature={feature}
          isActive={activeFeature.id === feature.id}
          onClick={() => setActiveFeature(feature)}
        />
      ))}
    </div>
  );
}