import {
  FaExclamationTriangle,
  FaRoute,
  FaHeartbeat,
  FaShieldAlt,
  FaCheckCircle,
  FaBroadcastTower,
} from "react-icons/fa";

import Card from "../ui/Card";

const operations = [
  {
    id: 1,
    time: "10:12",
    title: "Crowd Surge Detected",
    description: "High pedestrian density near Gate C.",
    severity: "High",
    icon: FaExclamationTriangle,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    id: 2,
    time: "10:14",
    title: "Medical Team Dispatched",
    description: "Medical responders sent to Section B12.",
    severity: "Medium",
    icon: FaHeartbeat,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    id: 3,
    time: "10:15",
    title: "AI Generated Alternate Route",
    description: "Spectators redirected through Gate D.",
    severity: "Info",
    icon: FaRoute,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    id: 4,
    time: "10:17",
    title: "Security Team Arrived",
    description: "Additional officers reached congestion area.",
    severity: "Normal",
    icon: FaShieldAlt,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    id: 5,
    time: "10:19",
    title: "Emergency Gate Opened",
    description: "Gate D temporarily opened for crowd balancing.",
    severity: "Normal",
    icon: FaBroadcastTower,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    id: 6,
    time: "10:22",
    title: "Operations Normalized",
    description: "Crowd flow returned to acceptable levels.",
    severity: "Resolved",
    icon: FaCheckCircle,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

const severityClasses = {
  High: "bg-red-500/20 text-red-300",
  Medium: "bg-yellow-500/20 text-yellow-300",
  Info: "bg-cyan-500/20 text-cyan-300",
  Normal: "bg-emerald-500/20 text-emerald-300",
  Resolved: "bg-blue-500/20 text-blue-300",
};

const OperationsFeed = () => {
  return (
    <Card>

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold text-white">
            Operations Timeline
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Recent operational events across the stadium
          </p>

        </div>

        <div className="rounded-full bg-cyan-500/10 px-3 py-2 text-sm font-medium text-cyan-400">
          Live Feed
        </div>

      </div>

      {/* Timeline */}

      <div className="max-h-130 space-y-5 overflow-y-auto pr-2">

        {operations.map((event) => {
          const Icon = event.icon;

          return (
            <div
              key={event.id}
              className="relative flex gap-5"
            >
              {/* Timeline Line */}

              <div className="flex flex-col items-center">

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${event.bg}`}
                >
                  <Icon
                    className={event.color}
                    size={18}
                  />
                </div>

                {event.id !== operations.length && (
                  <div className="mt-2 h-16 w-px bg-slate-700" />
                )}

              </div>

              {/* Content */}

              <div className="flex-1 rounded-2xl border border-slate-800 bg-slate-950 p-5 transition hover:border-cyan-500/30">

                <div className="flex flex-wrap items-center justify-between gap-3">

                  <div>

                    <h3 className="font-semibold text-white">
                      {event.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      {event.description}
                    </p>

                  </div>

                  <div className="text-right">

                    <div className="font-semibold text-cyan-400">
                      {event.time}
                    </div>

                    <span
                      className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                        severityClasses[event.severity]
                      }`}
                    >
                      {event.severity}
                    </span>

                  </div>

                </div>

              </div>

            </div>
          );
        })}

      </div>

      {/* Footer */}

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-4">

        <div className="flex items-center justify-between">

          <span className="text-sm text-slate-400">
            Events Recorded
          </span>

          <span className="font-bold text-white">
            {operations.length}
          </span>

        </div>

      </div>

    </Card>
  );
};

export default OperationsFeed;