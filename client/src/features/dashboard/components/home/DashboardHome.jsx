import WelcomeBanner from "./WelcomeBanner";
import StatsGrid from "./StatsGrid";
import QuickActions from "./QuickActions";
import RecentPrompts from "./RecentPrompts";
import CollectionsOverview from "./CollectionsOverview";
import RecentAIActivity from "./RecentAIActivity";

export default function DashboardHome() {
  return (
    <div className="space-y-8">
      <WelcomeBanner />

      <StatsGrid />

      <QuickActions />

      <div className="grid gap-8 xl:grid-cols-2">
        <RecentPrompts />

        <CollectionsOverview />
      </div>

      <RecentAIActivity />
    </div>
  );
}