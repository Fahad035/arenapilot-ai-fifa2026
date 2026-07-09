import Card from "../ui/Card";
import Badge from "../ui/Badge";

const getRiskLevel = (value) => {
  if (value === undefined || value === null) return "Low";

  if (typeof value === "string") {
    if (value.toLowerCase() === "storm") return "Critical";
    if (value.toLowerCase() === "rain") return "Moderate";
    return "Low";
  }

  if (value >= 85) return "Critical";
  if (value >= 65) return "High";
  if (value >= 40) return "Moderate";
  return "Low";
};

const badgeColorByRisk = {
  Critical: "Critical",
  High: "High",
  Moderate: "Moderate",
  Low: "Low",
};

const LiveIncidents = ({ analysis }) => {
  const incidents = [
    {
      title: "Overall Risk",
      level: analysis?.risk,
    },
    {
      title: "Medical Risk",
      level: getRiskLevel(analysis?.medicalRisk),
    },
    {
      title: "Security Risk",
      level: getRiskLevel(analysis?.securityRisk),
    },
    {
      title: "Weather Risk",
      level: getRiskLevel(analysis?.weatherRisk),
    },
  ];

  return (
    <Card>

      <h2 className="text-xl font-bold text-white">
        Live Incidents
      </h2>

      <div className="mt-6 space-y-5">

        {incidents.map((incident) => (

          <div
            key={incident.title}
            className="flex justify-between"
          >

            <span>{incident.title}</span>

            <Badge color={badgeColorByRisk[incident.level] ?? "Low"}>
              {incident.level ?? "Low"}
            </Badge>

          </div>

        ))}

      </div>

    </Card>
  );
};

export default LiveIncidents;