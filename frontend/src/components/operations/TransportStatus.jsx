import Card from "../ui/Card";

const statusColorClassByIndex = [
  "text-yellow-400",
  "text-green-400",
  "text-red-400",
];

const TransportStatus = ({ analysis }) => {
  const items = [
    ["Metro", analysis?.route ?? "Unavailable"],
    ["Shuttle", analysis?.summary ?? "Unavailable"],
    [
      "Parking",
      analysis?.score !== undefined && analysis?.score !== null
        ? `${analysis.score}% Operational Load`
        : "Unavailable",
    ],
  ];

  return (
    <Card>
      <h2 className="text-xl font-bold text-white">
        Transport Status
      </h2>

      <div className="mt-6 space-y-5">
        {items.map(([label, value], index) => (
          <div key={label}>
            <p className="text-slate-400">{label}</p>

            <p className={statusColorClassByIndex[index] ?? "text-red-400"}>
              {value}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TransportStatus;
