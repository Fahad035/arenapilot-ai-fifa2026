import RoutePlanner from "../navigator/RoutePlanner";
import SuggestedRoute from "../navigator/SuggestedRoute";
import AccessibilityCard from "../navigator/AccessibilityCard";
import TransportationCard from "../navigator/TransportationCard";
import NavigationRecommendation from "../navigator/NavigationRecommendation";

const NavigatorTab = () => {
  return (
    <div className="space-y-6">

      <div className="grid gap-6 lg:grid-cols-2">

        <RoutePlanner />

        <SuggestedRoute />

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <AccessibilityCard />

        <TransportationCard />

      </div>

      <NavigationRecommendation />

    </div>
  );
};

export default NavigatorTab;