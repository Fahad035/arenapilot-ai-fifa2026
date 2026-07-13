import Card from "../ui/Card";

const riskScore = {
  Low: 1,
  Moderate: 2,
  High: 3,
  Critical: 4,
};

const scoreRisk = (score) => {
  if (score >= 4) return "Critical";
  if (score >= 3) return "High";
  if (score >= 2) return "Moderate";
  return "Low";
};

const HistoryStats = ({ history = [] }) => {
  const totalAnalyses = history.length;
  const criticalAlerts = history.filter(
    (item) => item?.risk === "Critical"
  ).length;

  const averageScore = history.length
    ? history.reduce(
        (sum, item) => sum + (riskScore[item?.risk] ?? 1),
        0
      ) / history.length
    : 1;

  const averageRisk = scoreRisk(Math.round(averageScore));

  const aiReports = history.filter((item) => item?.summary).length;

  const stats = [
    {
      title: "Total Analyses",
      value: totalAnalyses,
    },
    {
      title: "Critical Alerts",
      value: criticalAlerts,
    },
    {
      title: "Average Risk",
      value: averageRisk,
    },
    {
      title: "AI Reports",
      value: aiReports,
    },
  ];

  const getIcon = (title) => {
    switch (title) {
      case "Total Analyses":
        return "🧾";
      case "Critical Alerts":
        return "🚨";
      case "Average Risk":
        return "🎯";
      case "AI Reports":
        return "🤖";
      default:
        return "📊";
    }
  };

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <Card
          key={item.title}
          className="relative overflow-hidden"
        >
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl" />
          <div className="relative">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-slate-200">
                {item.title}
              </p>
              <span className="text-lg" aria-hidden="true">
                {getIcon(item.title)}
              </span>
            </div>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              {item.value}
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Latest snapshot
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default HistoryStats;