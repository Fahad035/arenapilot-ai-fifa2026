import Card from "../ui/Card";

const cards = [
  {
    title: "Active Incidents",
    value: 4,
    color: "text-red-400",
  },
  {
    title: "Crowd Safety",
    value: "96%",
    color: "text-green-400",
  },
  {
    title: "Transport",
    value: "Running",
    color: "text-cyan-400",
  },
  {
    title: "AI Confidence",
    value: "98%",
    color: "text-blue-400",
  },
];

const KPICards = () => (
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

export default KPICards;