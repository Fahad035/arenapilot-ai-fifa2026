import Card from "../ui/Card";
import Badge from "../ui/Badge";

const incidents = [
  {
    title: "Gate C Congestion",
    level: "High",
  },
  {
    title: "Metro Delay",
    level: "Medium",
  },
  {
    title: "Medical Assistance",
    level: "Low",
  },
];

const LiveIncidents = () => (
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

          <Badge color={incident.level}>
            {incident.level}
          </Badge>

        </div>

      ))}

    </div>

  </Card>
);

export default LiveIncidents;