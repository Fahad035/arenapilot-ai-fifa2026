import Card from "../ui/Card";

const stats = [
  {
    title: "Total Analyses",
    value: "28",
  },
  {
    title: "Critical Alerts",
    value: "6",
  },
  {
    title: "Average Risk",
    value: "Medium",
  },
  {
    title: "AI Reports",
    value: "28",
  },
];

const HistoryStats = () => {
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