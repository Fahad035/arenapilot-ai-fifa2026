import {
  FaUsers,
  FaExclamationTriangle,
  FaRobot,
  FaRoute,
} from "react-icons/fa";

const StatsCards = ({ analysis }) => {
  const stats = [
    {
      title: "Attendance",
      value: "92,580",
      change: "+8%",
      icon: FaUsers,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
    },
    {
      title: "Active Alerts",
      value: analysis ? "03" : "00",
      change: "Live",
      icon: FaExclamationTriangle,
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
    },
    {
      title: "AI Confidence",
      value: analysis?.confidence
        ? `${analysis.confidence}%`
        : "98%",
      change: "Stable",
      icon: FaRobot,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      title: "Recommended Route",
      value: analysis?.route || "Gate D",
      change: "Fastest",
      icon: FaRoute,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className={`rounded-2xl border ${card.border} ${card.bg} p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white">
                  {card.value}
                </h2>

                <span className={`mt-2 inline-block text-sm ${card.color}`}>
                  {card.change}
                </span>
              </div>

              <div
                className={`rounded-xl p-4 ${card.bg}`}
              >
                <Icon
                  className={card.color}
                  size={28}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;