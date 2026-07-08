import {
  FaDoorOpen,
  FaStar,
  FaParking,
  FaCircle,
} from "react-icons/fa";

import Card from "../ui/Card";

const HeatMap = ({ analysis }) => {
  const congestion = analysis?.metrics?.congestion || 74;

  const zones = [
    {
      name: "Gate A",
      occupancy: 42,
      status: "Normal",
      icon: FaDoorOpen,
    },
    {
      name: "Gate B",
      occupancy: 67,
      status: "Busy",
      icon: FaDoorOpen,
    },
    {
      name: "Gate C",
      occupancy: congestion,
      status:
        congestion >= 80
          ? "Critical"
          : congestion >= 60
          ? "Busy"
          : "Normal",
      icon: FaDoorOpen,
    },
    {
      name: "Gate D",
      occupancy: 31,
      status: "Normal",
      icon: FaDoorOpen,
    },
    {
      name: "VIP Lounge",
      occupancy: 24,
      status: "Normal",
      icon: FaStar,
    },
    {
      name: "Parking",
      occupancy: 58,
      status: "Busy",
      icon: FaParking,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Critical":
        return {
          dot: "text-red-500",
          badge:
            "bg-red-500/10 text-red-400 border-red-500/30",
          bar: "bg-red-500",
        };

      case "Busy":
        return {
          dot: "text-yellow-400",
          badge:
            "bg-yellow-500/10 text-yellow-300 border-yellow-500/30",
          bar: "bg-yellow-400",
        };

      default:
        return {
          dot: "text-emerald-400",
          badge:
            "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
          bar: "bg-emerald-400",
        };
    }
  };

  return (
    <Card className="h-full">

      {/* Header */}

      <div className="mb-6">

        <h2 className="text-xl font-bold text-white">
          Stadium Zone Monitor
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Live occupancy by stadium section
        </p>

      </div>

      {/* Zones */}

      <div className="space-y-5">

        {zones.map((zone) => {
          const colors = getStatusColor(zone.status);
          const Icon = zone.icon;

          return (
            <div
              key={zone.name}
              className="rounded-xl border border-slate-800 bg-slate-950 p-4 transition hover:border-cyan-500/30"
            >
              <div className="mb-3 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="rounded-lg bg-slate-800 p-3">
                    <Icon className="text-cyan-400" />
                  </div>

                  <div>

                    <h3 className="font-semibold text-white">
                      {zone.name}
                    </h3>

                    <div className="mt-1 flex items-center gap-2">

                      <FaCircle
                        className={`text-[10px] ${colors.dot}`}
                      />

                      <span className="text-xs text-slate-500">
                        Live Monitoring
                      </span>

                    </div>

                  </div>

                </div>

                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${colors.badge}`}
                >
                  {zone.status}
                </span>

              </div>

              {/* Progress */}

              <div className="mb-2 h-3 overflow-hidden rounded-full bg-slate-800">

                <div
                  className={`h-full rounded-full ${colors.bar}`}
                  style={{
                    width: `${zone.occupancy}%`,
                  }}
                />

              </div>

              <div className="flex items-center justify-between text-sm">

                <span className="text-slate-400">
                  Occupancy
                </span>

                <span className="font-semibold text-white">
                  {zone.occupancy}%
                </span>

              </div>

            </div>
          );
        })}

      </div>

      {/* Summary */}

      <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">

        <h3 className="font-semibold text-cyan-400">
          AI Insight
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-300">
          Gate C is approaching maximum operating capacity.
          ArenaPilot recommends redirecting spectators toward
          Gate D to reduce congestion and improve entry flow.
        </p>

      </div>

    </Card>
  );
};

export default HeatMap;