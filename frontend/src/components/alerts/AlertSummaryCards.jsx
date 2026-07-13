import {
  FaExclamationTriangle,
  FaBell,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

import Card from "../ui/Card";

const AlertSummaryCards = ({ analysis }) => {
  const risk =
    analysis?.riskAssessment?.overallRisk ??
    analysis?.overallRisk ??
    "Medium";

  const incidents =
    analysis?.operations?.activeIncidents ??
    analysis?.activeIncidents ??
    [];

  const critical = incidents.filter(
    (i) => i?.severity === "Critical"
  ).length;

  const high = incidents.filter(
    (i) => i?.severity === "High"
  ).length;

  const resolved =
    analysis?.resolvedAlerts ??
    Math.max(8 - incidents.length, 0);

  const monitoring =
    analysis?.monitoringSystems ??
    12;

  const cards = [
    {
      title: "Critical Alerts",
      value: critical,
      subtitle: "Immediate attention required",
      icon: FaExclamationTriangle,
      color: "text-red-400",
      bg: "from-red-500/10 to-red-500/5",
      border: "border-red-500/20",
    },
    {
      title: "High Priority",
      value: high,
      subtitle: "Requires monitoring",
      icon: FaBell,
      color: "text-orange-400",
      bg: "from-orange-500/10 to-orange-500/5",
      border: "border-orange-500/20",
    },
    {
      title: "Monitoring",
      value: monitoring,
      subtitle: `${risk} Risk`,
      icon: FaShieldAlt,
      color: "text-cyan-400",
      bg: "from-cyan-500/10 to-cyan-500/5",
      border: "border-cyan-500/20",
    },
    {
      title: "Resolved",
      value: resolved,
      subtitle: "Today's incidents",
      icon: FaCheckCircle,
      color: "text-emerald-400",
      bg: "from-emerald-500/10 to-emerald-500/5",
      border: "border-emerald-500/20",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card
            key={card.title}
            className={`border ${card.border} bg-linear-to-br ${card.bg}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-3 font-mono text-4xl font-bold text-white">
                  {card.value}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  {card.subtitle}
                </p>
              </div>

              <div
                className={`rounded-2xl border border-white/10 bg-slate-900/60 p-4 ${card.color}`}
              >
                <Icon size={22} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default AlertSummaryCards;