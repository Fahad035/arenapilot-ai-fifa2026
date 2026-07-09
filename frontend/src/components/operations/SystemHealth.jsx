import Card from "../ui/Card";

const SystemHealth = ({ analysis }) => {
  const items = [
    ["Operations Timestamp", analysis?.timestamp ? "Updated" : "Unavailable"],
    ["Risk Engine", analysis?.risk ?? "Unavailable"],
    ["Route Engine", analysis?.route ?? "Unavailable"],
    ["Overall Score", analysis?.score !== undefined && analysis?.score !== null ? `${analysis.score}/100` : "Unavailable"],
    ["AI Confidence", analysis?.confidence !== undefined && analysis?.confidence !== null ? `${analysis.confidence}%` : "Unavailable"],
  ];

  return (
    <Card>

      <h2 className="text-xl font-bold text-white">
        System Health
      </h2>

      <div className="mt-6 space-y-5">

        {items.map(([name, status]) => (
          <div
            key={name}
            className="flex justify-between"
          >

            <span>{name}</span>

            <span className="text-green-400">
              {status}
            </span>

          </div>
        ))}

      </div>

    </Card>
  );
};

export default SystemHealth;