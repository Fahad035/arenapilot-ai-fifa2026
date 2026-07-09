import {
  FaLocationDot,
  FaFlagCheckered,
  FaDoorOpen,
  FaCircle,
} from "react-icons/fa6";

import Card from "../ui/Card";

const StadiumMap = ({ analysis }) => {
  const routeAnalysis = analysis?.routeAnalysis ?? {};
  const gate = routeAnalysis?.recommendedGate ?? "Recommended gate unavailable";
  const checkpoints = routeAnalysis?.checkpoints ?? [];

  const locations = [
    {
      title: gate,
      icon: FaDoorOpen,
      color: "text-cyan-400",
    },
    ...checkpoints.map((checkpoint, index) => ({
      title: checkpoint?.name ?? `Checkpoint ${index + 1}`,
      icon: index % 2 === 0 ? FaCircle : FaFlagCheckered,
      color:
        checkpoint?.status === "Busy"
          ? "text-yellow-400"
          : "text-emerald-400",
    })),
  ];

  return (
    <Card>

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Stadium Route Overview
          </h2>

          <p className="mt-2 text-slate-400">
            Visual representation of the recommended navigation path.
          </p>

        </div>

        <FaLocationDot
          className="text-cyan-400"
          size={30}
        />

      </div>

      <div className="mt-10">

        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">

          {locations.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex flex-col items-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 border border-slate-700">
                  <Icon
                    size={26}
                    className={item.color}
                  />
                </div>

                <p className="mt-3 text-center text-sm font-medium text-slate-300">
                  {item.title}
                </p>

                {index !== locations.length - 1 && (
                  <div className="mt-4 hidden h-1 w-28 rounded-full bg-linear-to-r from-cyan-500 to-emerald-500 lg:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-5">

        <h3 className="font-semibold text-cyan-300">
          AI Route Insight
        </h3>

        <p className="mt-3 leading-7 text-slate-300">
          {routeAnalysis?.recommendation ??
            "This route minimizes congestion by directing spectators through verified low-density corridors while maintaining emergency access compliance. The recommendation is continuously updated as live operational data changes."}
        </p>

      </div>

    </Card>
  );
};

export default StadiumMap;