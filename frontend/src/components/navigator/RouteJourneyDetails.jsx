import { memo } from "react";
import { FaArrowRight } from "react-icons/fa6";

import RouteCheckpoints from "./RouteCheckpoints";
import RouteAlternatives from "./RouteAlternatives";
import RouteEvacuationPlan from "./RouteEvacuationPlan";

const RouteJourneyDetails = memo(function RouteJourneyDetails({
  navigationSteps,
  checkpoints,
  alternativeRoutes,
  evacuationPlan,
}) {
  return (
    <div className="mt-10">
      <h3 className="mb-5 text-xl font-bold text-white">Navigation Steps</h3>

      <div className="space-y-4">
        {navigationSteps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-white">
              {index + 1}
            </div>

            <div className="flex-1">
              <p className="leading-7 text-slate-300">{step}</p>
            </div>

            {index !== navigationSteps.length - 1 && (
              <FaArrowRight className="mt-2 text-cyan-400" />
            )}
          </div>
        ))}
      </div>

      {checkpoints.length > 0 && <RouteCheckpoints checkpoints={checkpoints} />}
      {alternativeRoutes.length > 0 && (
        <RouteAlternatives routes={alternativeRoutes} />
      )}
      {evacuationPlan.length > 0 && (
        <RouteEvacuationPlan items={evacuationPlan} />
      )}
    </div>
  );
});

export default RouteJourneyDetails;
