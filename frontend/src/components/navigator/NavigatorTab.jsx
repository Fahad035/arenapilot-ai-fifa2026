import RoutePlanner from "../navigator/RoutePlanner";
import StadiumMap from "../navigator/StadiumMap";
import RouteTimeline from "../navigator/RouteTimeline";
import AccessibilityPanel from "../navigator/AccessibilityPanel";
import TrafficMonitor from "../navigator/TrafficMonitor";
import EmergencyRoutes from "../navigator/EmergencyRoute";
import RouteComparison from "../navigator/RouteComparison";
import LiveNavigator from "../navigator/LiveNavigator";

const NavigatorTab = ({ analysis }) => {
  return (
    <div className="space-y-8">

      <RoutePlanner analysis={analysis} />

      <div className="grid gap-8 xl:grid-cols-2">
        <StadiumMap analysis={analysis} />
        <RouteTimeline analysis={analysis} />
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <AccessibilityPanel analysis={analysis} />
        <TrafficMonitor analysis={analysis} />
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <EmergencyRoutes analysis={analysis} />
        <RouteComparison analysis={analysis} />
      </div>

      <LiveNavigator analysis={analysis} />

    </div>
  );
};

export default NavigatorTab;