import {
  FaCircle,
  FaWifi,
  FaShieldAlt,
  FaHeartbeat,
  FaCloudSun,
  FaBroadcastTower,
} from "react-icons/fa";

import Card from "../ui/Card";

const statusItems = [
  {
    title: "Gate Operations",
    value: "Normal",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    icon: FaShieldAlt,
  },
  {
    title: "Medical Teams",
    value: "Standby",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    icon: FaHeartbeat,
  },
  {
    title: "Security Units",
    value: "Active",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    icon: FaBroadcastTower,
  },
  {
    title: "Network Health",
    value: "99.8%",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    icon: FaWifi,
  },
  {
    title: "Weather",
    value: "29°C Clear",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    icon: FaCloudSun,
  },
];

const LiveStatus = () => {
  return (
    <Card>

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold text-white">
            Live Operations Status
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Real-time operational monitoring
          </p>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-2">

          <FaCircle className="animate-pulse text-xs text-emerald-400" />

          <span className="text-sm font-medium text-emerald-400">
            LIVE
          </span>

        </div>

      </div>

      {/* Status Cards */}

      <div className="space-y-4">

        {statusItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4 transition hover:border-cyan-500/30"
            >
              <div className="flex items-center gap-4">

                <div
                  className={`rounded-xl p-3 ${item.bg}`}
                >
                  <Icon
                    className={item.color}
                    size={20}
                  />
                </div>

                <div>

                  <h3 className="font-medium text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400">
                    Operational Status
                  </p>

                </div>

              </div>

              <span
                className={`font-semibold ${item.color}`}
              >
                {item.value}
              </span>

            </div>
          );
        })}

      </div>

      {/* Footer */}

      <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">

        <div className="flex items-center justify-between">

          <span className="text-sm text-slate-300">
            Last Updated
          </span>

          <span className="font-semibold text-cyan-400">
            Just Now
          </span>

        </div>

      </div>

    </Card>
  );
};

export default LiveStatus;