import { memo, useMemo } from "react";
import {
  FaPersonWalking,
  FaClock,
  FaCircle,
  FaLocationDot,
} from "react-icons/fa6";

const RouteSummaryGrid = memo(function RouteSummaryGrid({
  recommendedGate,
  estimatedTime,
  distance,
  congestion,
}) {
  const summaryCards = useMemo(
    () => [
      {
        label: "Best Gate",
        value: recommendedGate,
        icon: FaLocationDot,
        color: "text-cyan-400",
      },
      {
        label: "Walking Time",
        value:
          estimatedTime !== undefined && estimatedTime !== null
            ? `${estimatedTime} min`
            : "Unavailable",
        icon: FaPersonWalking,
        color: "text-emerald-400",
      },
      {
        label: "Distance",
        value: distance,
        icon: FaClock,
        color: "text-yellow-400",
      },
      {
        label: "Congestion",
        value:
          congestion !== undefined && congestion !== null
            ? `${congestion}%`
            : "Unavailable",
        icon: FaCircle,
        color: "text-red-400",
      },
    ],
    [recommendedGate, estimatedTime, distance, congestion]
  );

  return (
    <div className="mt-8 grid gap-5 md:grid-cols-4">
      {summaryCards.map((card) => {
        const Icon = card.icon;

        return (
          <div key={card.label} className="rounded-xl bg-slate-900 p-5">
            <Icon className={`mb-3 ${card.color}`} />

            <p className="text-sm text-slate-400">{card.label}</p>

            <h4 className="mt-2 text-2xl font-bold text-white">
              {card.value}
            </h4>
          </div>
        );
      })}
    </div>
  );
});

export default RouteSummaryGrid;
