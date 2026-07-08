import Card from "../ui/Card";

const CrowdInsights = () => {
  return (
    <Card>

      <h3 className="text-xl font-bold text-white">
        AI Crowd Insights
      </h3>

      <ul className="mt-6 space-y-4 text-slate-300">

        <li>
          Crowd density at Gate C is approaching critical capacity.
        </li>

        <li>
          Redirect arriving fans toward Gate D to reduce congestion.
        </li>

        <li>
          Deploy additional volunteers near security checkpoints.
        </li>

        <li>
          Broadcast multilingual navigation announcements.
        </li>

      </ul>

    </Card>
  );
};

export default CrowdInsights;