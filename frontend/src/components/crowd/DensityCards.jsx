import {
  FaUsers,
  FaChartLine,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa";

import Card from "../ui/Card";

const DensityCards = ({ analysis }) => {
  const crowd = analysis?.crowd;

  const waitTime =
    analysis?.metrics?.waitTime ??
    analysis?.routeAnalysis?.estimatedTime ??
    null;

  const riskLevel = analysis?.risk ?? "Medium";

  const cards = [
    {
      title: "Live Attendance",
      value:
        crowd?.attendance !== undefined
          ? crowd.attendance.toLocaleString()
          : "--",
      subtitle: "Current Attendance",
      icon: FaUsers,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
    },
    {
      title: "Crowd Density",
      value:
        crowd?.score !== undefined
          ? `${crowd.score}%`
          : "--",
      subtitle: crowd?.level ?? "--",
      icon: FaChartLine,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      title: "Average Wait",
      value: waitTime !== null ? `${waitTime} min` : "--",
      subtitle: "Recommended Route",
      icon: FaClock,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
    },
    {
      title: "Risk Level",
      value: riskLevel,
      subtitle: "AI Assessment",
      icon: FaExclamationTriangle,

      color:
        riskLevel === "Critical"
          ? "text-red-400"
          : riskLevel === "High"
            ? "text-orange-400"
            : riskLevel === "Moderate"
              ? "text-yellow-400"
              : "text-emerald-400",

      bg:
        riskLevel === "Critical"
          ? "bg-red-500/10"
          : riskLevel === "High"
            ? "bg-orange-500/10"
            : riskLevel === "Moderate"
              ? "bg-yellow-500/10"
              : "bg-emerald-500/10",

      border:
        riskLevel === "Critical"
          ? "border-red-500/20"
          : riskLevel === "High"
            ? "border-orange-500/20"
            : riskLevel === "Moderate"
              ? "border-yellow-500/20"
              : "border-emerald-500/20",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card
            key={card.title}
            className={`border ${card.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white">
                  {card.value}
                </h2>

                <p className={`mt-2 text-sm ${card.color}`}>
                  {card.subtitle}
                </p>
              </div>

              <div className={`rounded-xl p-4 ${card.bg}`}>
                <Icon
                  size={24}
                  className={card.color}
                />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default DensityCards;