import {
  FaUsers,
  FaHeartbeat,
  FaShieldAlt,
  FaCloudSun,
  FaBroadcastTower,
  FaBus,
} from "react-icons/fa";

import Card from "../ui/Card";

const IncidentPanel = ({ analysis }) => {
  const metrics = analysis?.metrics || {};

  const congestion = metrics.congestion || 74;
  const medicalRisk = metrics.medicalRisk || 18;
  const securityScore = metrics.securityScore || 92;

  const incidents = [
    {
      title: "Crowd Congestion",
      value: `${congestion}%`,
      status:
        congestion >= 85
          ? "Critical"
          : congestion >= 65
          ? "High"
          : "Normal",
      description:
        "Current occupancy across monitored gates.",
      icon: FaUsers,
    },
    {
      title: "Medical Readiness",
      value: `${100 - medicalRisk}%`,
      status:
        medicalRisk > 40
          ? "Attention"
          : "Ready",
      description:
        "Medical teams available for rapid response.",
      icon: FaHeartbeat,
    },
    {
      title: "Security Coverage",
      value: `${securityScore}%`,
      status:
        securityScore >= 90
          ? "Excellent"
          : "Good",
      description:
        "Security deployment effectiveness.",
      icon: FaShieldAlt,
    },
    {
      title: "Weather",
      value: "29°C",
      status: "Clear",
      description:
        "Weather conditions are suitable for operations.",
      icon: FaCloudSun,
    },
    {
      title: "Communications",
      value: "Online",
      status: "Stable",
      description:
        "Radio and network systems operational.",
      icon: FaBroadcastTower,
    },
    {
      title: "Transport Access",
      value: "Open",
      status: "Normal",
      description:
        "Roads and public transport functioning normally.",
      icon: FaBus,
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Critical":
        return {
          badge: "bg-red-500/10 text-red-400 border-red-500/20",
          icon: "text-red-400",
        };

      case "High":
      case "Attention":
        return {
          badge:
            "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
          icon: "text-yellow-400",
        };

      case "Excellent":
      case "Ready":
      case "Stable":
      case "Clear":
      case "Normal":
        return {
          badge:
            "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
          icon: "text-emerald-400",
        };

      default:
        return {
          badge:
            "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
          icon: "text-cyan-400",
        };
    }
  };

  return (
    <Card>

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-white">
          Incident Assessment
        </h2>

        <p className="mt-2 text-slate-400">
          Current operational health across all monitored systems.
        </p>

      </div>

      {/* Grid */}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {incidents.map((item) => {
          const style = getStatusStyle(item.status);
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition hover:border-cyan-500/30"
            >

              <div className="mb-5 flex items-center justify-between">

                <div className="rounded-xl bg-slate-800 p-3">
                  <Icon
                    className={style.icon}
                    size={22}
                  />
                </div>

                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${style.badge}`}
                >
                  {item.status}
                </span>

              </div>

              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>

              <div className="mt-3 text-3xl font-bold text-cyan-400">
                {item.value}
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                {item.description}
              </p>

            </div>
          );
        })}

      </div>

      {/* Footer */}

      <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">

        <h3 className="text-lg font-semibold text-cyan-400">
          AI Operational Assessment
        </h3>

        <p className="mt-3 leading-7 text-slate-300">
          Current conditions indicate that stadium operations remain
          stable. Crowd movement is within expected limits, medical and
          security resources are available, and no critical infrastructure
          issues have been detected. Continuous monitoring is recommended,
          particularly around high-density entry points.
        </p>

      </div>

    </Card>
  );
};

export default IncidentPanel;