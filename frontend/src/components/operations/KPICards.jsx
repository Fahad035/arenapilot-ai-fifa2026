import Card from "../ui/Card";

const KPICards = ({ analysis }) => {
  const cards = [
    {
      title: "Active Incidents",
      value:
        analysis?.recommendations?.length ?? 0,
      color: "text-red-400",
    },
    {
      title: "Crowd Safety",
      value:
        analysis?.score !== undefined && analysis?.score !== null
          ? `${Math.max(0, 100 - analysis.score)}%`
          : "Unavailable",
      color: "text-green-400",
    },
    {
      title: "Transport",
      value:
        analysis?.route ?? "Unavailable",
      color: "text-cyan-400",
    },
    {
      title: "AI Confidence",
      value:
        analysis?.confidence !== undefined && analysis?.confidence !== null
          ? `${analysis.confidence}%`
          : "Unavailable",
      color: "text-blue-400",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title}>
          <p className="text-sm text-slate-400">{card.title}</p>
          <h2 className={`mt-4 text-3xl font-bold ${card.color}`}>
            {card.value}
          </h2>
        </Card>
      ))}
    </div>
  );
};

export default KPICards;