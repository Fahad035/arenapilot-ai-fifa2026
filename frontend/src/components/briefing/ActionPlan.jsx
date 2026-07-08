import Card from "../ui/Card";

const actions = [
  "Open Gate D immediately",
  "Deploy 20 volunteers",
  "Activate multilingual announcements",
  "Increase shuttle services",
  "Monitor congestion every 5 minutes",
];

const ActionPlan = () => {
  return (
    <Card>

      <h3 className="text-xl font-bold text-white">
        Recommended Actions
      </h3>

      <ul className="mt-5 space-y-4">

        {actions.map((item) => (
          <li
            key={item}
            className="rounded-xl bg-slate-800 p-4 text-slate-300"
          >
            {item}
          </li>
        ))}

      </ul>

    </Card>
  );
};

export default ActionPlan;