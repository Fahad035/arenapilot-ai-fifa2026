import {
  FaUsers,
  FaExclamationTriangle,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";

const StatsCards = ({ analysis }) => {
  const stats = [
    {
      title: "Crowd Density",
      value: analysis?.crowdDensity || "81%",
      subtitle: "Current Occupancy",
      icon: FaUsers,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      title: "Active Alerts",
      value: analysis?.alerts || "04",
      subtitle: "Open Incidents",
      icon: FaExclamationTriangle,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      title: "AI Confidence",
      value: analysis?.confidence || "96%",
      subtitle: "Recommendation Score",
      icon: FaRobot,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Stadium Status",
      value: analysis?.status || "Operational",
      subtitle: "System Health",
      icon: FaShieldAlt,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:border-blue-500/50 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">{card.title}</p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  {card.value}
                </h2>

                <p className="mt-2 text-xs text-slate-500">
                  {card.subtitle}
                </p>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl ${card.bg}`}
              >
                <Icon className={`text-2xl ${card.color}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;