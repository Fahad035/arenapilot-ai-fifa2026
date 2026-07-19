import { FaRoute } from "react-icons/fa6";

import Card from "../ui/Card";
import RouteSummaryGrid from "./RouteSummaryGrid";
import RouteJourneyDetails from "./RouteJourneyDetails";

const RouteResultCard = ({
  recommendedGate,
  estimatedTime,
  distance,
  congestion,
  navigationSteps,
  checkpoints,
  alternativeRoutes,
  evacuationPlan,
}) => (
  <Card>
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-2xl font-bold text-white">Recommended Route</h3>

        <p className="mt-2 text-slate-400">
          Generated using Rules Engine + Gemini AI
        </p>
      </div>

      <FaRoute size={32} className="text-cyan-400" />
    </div>

    <RouteSummaryGrid
      recommendedGate={recommendedGate}
      estimatedTime={estimatedTime}
      distance={distance}
      congestion={congestion}
    />

    <RouteJourneyDetails
      navigationSteps={navigationSteps}
      checkpoints={checkpoints}
      alternativeRoutes={alternativeRoutes}
      evacuationPlan={evacuationPlan}
    />
  </Card>
);

export default RouteResultCard;
