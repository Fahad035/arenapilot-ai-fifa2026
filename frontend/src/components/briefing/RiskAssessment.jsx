import Card from "../ui/Card";
import Badge from "../ui/Badge";

const risks = [
  {
    title: "Crowd Density",
    level: "High",
  },
  {
    title: "Weather",
    level: "Medium",
  },
  {
    title: "Transport",
    level: "Low",
  },
  {
    title: "Accessibility",
    level: "Medium",
  },
];

const RiskAssessment = () => {
  return (
    <Card>

      <h3 className="text-xl font-bold text-white">
        Risk Assessment
      </h3>

      <div className="mt-6 space-y-4">

        {risks.map((risk) => (
          <div
            key={risk.title}
            className="flex items-center justify-between"
          >

            <span className="text-slate-300">
              {risk.title}
            </span>

            <Badge color={risk.level}>
              {risk.level}
            </Badge>

          </div>
        ))}

      </div>

    </Card>
  );
};

export default RiskAssessment;