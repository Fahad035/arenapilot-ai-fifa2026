import {
  FaUsers,
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaCircle,
} from "react-icons/fa6";

import Card from "../ui/Card";

const TrafficMonitor = ({ analysis }) => {
  const routeAnalysis = analysis?.routeAnalysis ?? {};
  const congestionMap = routeAnalysis?.congestionMap ?? {};
  const recommendedGate = routeAnalysis?.recommendedGate ?? "Unavailable";

  const zones = Object.entries(congestionMap).map(([key, value]) => ({
    name: key
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/^gate/i, "Gate")
      .trim(),
    value,
  }));

  const mostCongestedZone =
    zones.reduce((highest, zone) => {
      if (!highest || Number(zone.value) > Number(highest.value)) {
        return zone;
      }

      return highest;
    }, null) ?? { name: "Unavailable", value: null };

  const color = (value) => {
    if (value >= 80) return "bg-red-500";
    if (value >= 60) return "bg-yellow-500";
    return "bg-emerald-500";
  };

  return (
    <Card>

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Live Crowd Monitor
          </h2>

          <p className="mt-2 text-slate-400">
            Real-time congestion across stadium zones.
          </p>

        </div>

        <FaUsers
          size={30}
          className="text-cyan-400"
        />

      </div>

      <div className="space-y-5">

        {zones.map((zone) => (

          <div key={zone.name}>

            <div className="mb-2 flex justify-between">

              <span className="text-slate-300">
                {zone.name}
              </span>

              <span className="font-semibold text-white">
                {zone.value}%
              </span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-800">

              <div
                className={`h-full ${color(zone.value)}`}
                style={{
                  width: `${zone.value}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-5">

          <div className="flex items-center gap-3">

            <FaArrowTrendDown className="text-emerald-400" />

            <h3 className="font-semibold text-white">
              Recommended Zone
            </h3>

          </div>

          <p className="mt-3 text-2xl font-bold text-emerald-400">
            {recommendedGate}
          </p>

        </div>

        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-5">

          <div className="flex items-center gap-3">

            <FaArrowTrendUp className="text-red-400" />

            <h3 className="font-semibold text-white">
              Avoid
            </h3>

          </div>

          <p className="mt-3 text-2xl font-bold text-red-400">
            {mostCongestedZone?.name ?? "Unavailable"}
          </p>

        </div>

      </div>

      <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950 p-5">

        <div className="flex items-center gap-3">

          <FaCircle className="text-cyan-400" />

          <h3 className="font-semibold text-white">
            AI Insight
          </h3>

        </div>

        <p className="mt-3 leading-7 text-slate-300">
          {routeAnalysis?.recommendation ??
            "Live crowd analytics indicate shifting density across stadium zones. ArenaPilot recommends redirecting spectators through the least congested route to balance pedestrian flow and reduce queue times."}
        </p>

      </div>

    </Card>
  );
};

export default TrafficMonitor;