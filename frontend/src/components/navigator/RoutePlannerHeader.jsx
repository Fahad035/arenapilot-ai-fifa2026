import { memo } from "react";
import { FaLocationDot } from "react-icons/fa6";

import Card from "../ui/Card";

const RoutePlannerHeader = memo(function RoutePlannerHeader() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">
            Navigator Intelligence
          </h2>

          <p className="mt-2 text-slate-400">
            AI-powered route planning using live congestion, verified
            stadium rules and operational intelligence.
          </p>
        </div>

        <div className="rounded-2xl bg-cyan-500/10 p-5">
          <FaLocationDot size={34} className="text-cyan-400" />
        </div>
      </div>
    </Card>
  );
});

export default RoutePlannerHeader;
