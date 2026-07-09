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

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => (

        <Card key={item.title}>

          <p className="text-sm text-slate-400">
            {item.title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            {item.value}
          </h2>

        </Card>

      ))}

    </div>
  );
};

export default HistoryStats;