import {
  FaUsers,
  FaChartLine,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa";

import Card from "../ui/Card";

const DensityCards = ({ analysis }) => {
  const metrics = analysis?.metrics || {};

  const cards = [
    {
      title: "Live Attendance",
      value: metrics.attendance
        ? metrics.attendance.toLocaleString()
        : "92,580",
      subtitle: "+6.2% from forecast",
      icon: FaUsers,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
    },
    {
      title: "Crowd Density",
      value: metrics.congestion
        ? `${metrics.congestion}%`
        : "74%",
      subtitle: "Moderate",
      icon: FaChartLine,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      title: "Average Wait",
      value: metrics.waitTime
        ? `${metrics.waitTime} min`
        : "12 min",
      subtitle: "Across all gates",
      icon: FaClock,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
    },
    {
      title: "Risk Level",
      value: analysis?.risk || "Medium",
      subtitle: "AI Assessment",
      icon: FaExclamationTriangle,
      color:
        analysis?.risk === "Critical"
          ? "text-red-400"
          : analysis?.risk === "High"
          ? "text-orange-400"
          : analysis?.risk === "Medium"
          ? "text-yellow-400"
          : "text-emerald-400",
      bg:
        analysis?.risk === "Critical"
          ? "bg-red-500/10"
          : analysis?.risk === "High"
          ? "bg-orange-500/10"
          : analysis?.risk === "Medium"
          ? "bg-yellow-500/10"
          : "bg-emerald-500/10",
      border:
        analysis?.risk === "Critical"
          ? "border-red-500/20"
          : analysis?.risk === "High"
          ? "border-orange-500/20"
          : analysis?.risk === "Medium"
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

              <div
                className={`rounded-xl p-4 ${card.bg}`}
              >
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