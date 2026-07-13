import {
  FaShieldAlt,
  FaClock,
  FaBrain,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

import Card from "../ui/Card";

const AlertStatistics = ({ analysis }) => {
  const stats = [
    {
      label: "Today's Alerts",
      value:
        analysis?.alerts?.length ??
        analysis?.activeIncidents ??
        8,
      icon: FaShieldAlt,
      color: "text-red-400",
    },
    {
      label: "Average Response",
      value: "01:42",
      icon: FaClock,
      color: "text-cyan-400",
    },
    {
      label: "AI Confidence",
      value:
        analysis?.confidence ??
        "97%",
      icon: FaBrain,
      color: "text-violet-400",
    },
    {
      label: "Monitoring",
      value: "Live",
      icon: FaChartLine,
      color: "text-emerald-400",
    },
  ];

  return (
    <Card>

      {/* Header */}

      <div className="mb-8">

        <h2 className="font-heading text-2xl font-bold text-white">
          Alert Statistics
        </h2>

        <p className="mt-2 text-slate-400">
          Live operational health of the venue.
        </p>

      </div>

      {/* Statistics */}

      <div className="space-y-5">

        {stats.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-400">
                    {item.label}
                  </p>

                  <h3 className="mt-2 font-mono text-3xl font-bold text-white">
                    {item.value}
                  </h3>

                </div>

                <div
                  className={`rounded-2xl bg-slate-800 p-4 ${item.color}`}
                >

                  <Icon size={22} />

                </div>

              </div>

            </div>

          );

        })}

      </div>

      {/* Divider */}

      <div className="my-8 border-t border-slate-800" />

      {/* AI Health */}

      <div>

        <div className="mb-4 flex items-center justify-between">

          <span className="text-slate-400">
            AI Health Score
          </span>

          <span className="font-semibold text-cyan-400">
            98%
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-800">

          <div
            className="h-full rounded-full bg-linear-to-r from-cyan-500 to-blue-500"
            style={{
              width: "98%",
            }}
          />

        </div>

      </div>

      {/* Monitoring Status */}

      <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">

        <div className="flex items-center gap-3">

          <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />

          <div>

            <h4 className="font-semibold text-white">
              ArenaPilot AI Monitoring
            </h4>

            <p className="mt-1 text-sm text-slate-300">
              All monitoring services are operational.
            </p>

          </div>

        </div>

      </div>

      {/* Last Scan */}

      <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-900/70 p-4">

        <span className="text-slate-400">
          Last Scan
        </span>

        <span className="flex items-center gap-2 font-mono text-cyan-400">

          <FaCheckCircle />

          Just Now

        </span>

      </div>

    </Card>
  );
};

export default AlertStatistics;