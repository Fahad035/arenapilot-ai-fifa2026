import Card from "../ui/Card";

const actions = [
  "Open overflow queue at Gate C",
  "Increase shuttle frequency",
  "Deploy 12 volunteers",
  "Notify security supervisor",
];

const CrowdRecommendations = () => {
  return (
    <Card>

      <h3 className="text-xl font-bold text-white">
        Recommended Actions
      </h3>

      <div className="mt-6 grid gap-4 md:grid-cols-2">

        {actions.map((item) => (

          <div
            key={item}
            className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5"
          >
            {item}
          </div>

        ))}

      </div>

    </Card>
  );
};

export default CrowdRecommendations;