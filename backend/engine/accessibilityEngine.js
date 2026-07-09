import stadiumKnowledge from "../knowledge/stadiumKnowledge.js";

const analyzeAccessibility = (scenario) => {
  const accessibilityRequired = Boolean(
    scenario.accessibilityRequired
  );

  const accessibleRoutes = Object.entries(
    stadiumKnowledge.gates
  )
    .filter(([, gate]) => gate.accessible)
    .map(([name]) => name);

  const score = accessibilityRequired ? 95 : 100;

  const recommendation = accessibilityRequired
    ? "Accessible routes and assistance teams have been assigned."
    : "No accessibility assistance required.";

  return {
    required: accessibilityRequired,

    score,

    recommendation,

    accessibleGate:
      accessibleRoutes.length > 0
        ? accessibleRoutes[0]
        : null,

    wheelchairAccess: [
      {
        gate: "Gate A",
        status: "Available",
      },
      {
        gate: "Gate B",
        status: "Available",
      },
      {
        gate: "Gate C",
        status: "Limited",
      },
      {
        gate: "Gate D",
        status: "Available",
      },
    ],

    accessibleRoutes,

    elevators: [
      {
        id: "Lift A",
        status: "Operational",
      },
      {
        id: "Lift B",
        status: "Operational",
      },
      {
        id: "Lift C",
        status: "Maintenance",
      },
    ],

    assistancePoints: [
      {
        location: "Gate A",
        staffAvailable: true,
      },
      {
        location: "Central Lobby",
        staffAvailable: true,
      },
      {
        location: "VIP Entrance",
        staffAvailable: true,
      },
    ],

    alerts: [
      "Lift C is temporarily unavailable.",
      "Wheelchair assistance available at all main entrances.",
    ],
  };
};

export default analyzeAccessibility;