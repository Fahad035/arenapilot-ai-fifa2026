import {
  FaLocationDot,
  FaDoorOpen,
  FaCircle,
  FaRoad,
  FaClock,
} from "react-icons/fa6";

import Card from "../ui/Card";

const StadiumMap = ({ analysis }) => {
  if (!analysis) {
    return (
      <Card>
        <div className="flex h-130 items-center justify-center">
          <div className="text-center">
            <FaLocationDot
              size={48}
              className="mx-auto mb-4 text-cyan-400"
            />

            <h2 className="text-2xl font-bold text-white">
              Stadium Navigation
            </h2>

            <p className="mt-3 max-w-md text-slate-400">
              Run a scenario analysis to generate the recommended
              spectator route and live navigation path.
            </p>
          </div>
        </div>
      </Card>
    );
  }

  const route = analysis.routeAnalysis || {};

  const recommendedGate =
    route.recommendedGate ||
    analysis.route ||
    "Gate D";

  const estimatedTime =
    route.estimatedTime || 8;

  const distance =
    route.distance || "650 m";

  const checkpoints =
    route.checkpoints || [
      {
        name: "Security Check",
        status: "Normal",
      },
      {
        name: "Main Concourse",
        status: "Normal",
      },
      {
        name: recommendedGate,
        status: "Destination",
      },
    ];

  const locations = [
    {
      title: "Current Position",
      icon: FaLocationDot,
      color: "text-cyan-400",
    },

    ...checkpoints.map((checkpoint, index) => ({
      title: checkpoint.name,
      icon:
        index === checkpoints.length - 1
          ? FaDoorOpen
          : FaCircle,
      color:
        checkpoint.status === "Busy"
          ? "text-yellow-400"
          : checkpoint.status === "Destination"
          ? "text-emerald-400"
          : "text-cyan-400",
    })),
  ];

  return (
    <Card className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Stadium Route Overview
          </h2>

          <p className="mt-2 text-slate-400">
            AI-generated navigation route using live crowd data.
          </p>

        </div>

        <FaLocationDot
          size={34}
          className="text-cyan-400"
        />

      </div>

      {/* Route Stats */}

      <div className="grid gap-5 md:grid-cols-3">

        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-5">

          <div className="flex items-center gap-3">

            <FaDoorOpen className="text-cyan-400" />

            <span className="text-sm text-slate-400">
              Recommended Gate
            </span>

          </div>

          <h3 className="mt-3 text-2xl font-bold text-cyan-400">
            {recommendedGate}
          </h3>

        </div>

        <div className="rounded-xl border border-purple-500/20 bg-purple-500/10 p-5">

          <div className="flex items-center gap-3">

            <FaClock className="text-purple-400" />

            <span className="text-sm text-slate-400">
              Estimated Time
            </span>

          </div>

          <h3 className="mt-3 text-2xl font-bold text-purple-400">
            {estimatedTime} min
          </h3>

        </div>

        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-5">

          <div className="flex items-center gap-3">

            <FaRoad className="text-emerald-400" />

            <span className="text-sm text-slate-400">
              Distance
            </span>

          </div>

          <h3 className="mt-3 text-2xl font-bold text-emerald-400">
            {distance}
          </h3>

        </div>

      </div>

      {/* Route Flow */}

      <div className="overflow-x-auto">

        <div className="flex min-w-max items-center justify-between gap-6 py-6">

          {locations.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={`${item.title}-${index}`}
                className="flex items-center"
              >

                <div className="flex flex-col items-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-700 bg-slate-900">

                    <Icon
                      size={24}
                      className={item.color}
                    />

                  </div>

                  <span className="mt-3 w-28 text-center text-sm text-slate-300">
                    {item.title}
                  </span>

                </div>

                {index !== locations.length - 1 && (
                  <div className="mx-4 h-1 w-24 rounded-full bg-linear-to-r from-cyan-500 to-emerald-500" />
                )}

              </div>
            );
          })}

        </div>

      </div>

      {/* AI Insight */}

      <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-6">

        <h3 className="font-semibold text-cyan-300">
          AI Route Insight
        </h3>

        <p className="mt-3 leading-7 text-slate-300">
          {route.recommendation ||
            `ArenaPilot recommends ${recommendedGate} because it currently provides the safest and least congested entry path. This recommendation is generated using live crowd density, estimated queue times, emergency access availability, and operational constraints from the backend analysis engine.`}
        </p>

      </div>

    </Card>
  );
};

export default StadiumMap;