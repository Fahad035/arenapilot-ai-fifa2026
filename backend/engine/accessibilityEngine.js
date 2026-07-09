import stadiumKnowledge from "../knowledge/stadiumKnowledge.js";

const analyzeAccessibility = (scenario) => {
  const accessibilityRequired = Boolean(scenario.accessibilityRequired);

  if (!accessibilityRequired) {
    return {
      required: false,
      accessibleGate: null,
      accessibleRoutes: [],
      assistance: false,
      recommendation: "No accessibility assistance required.",
    };
  }

  const accessibleRoutes = Object.entries(stadiumKnowledge.gates)
    .filter(([, gate]) => gate.accessible)
    .map(([name]) => name);

  return {
    score,

    recommendation,

    wheelchairAccess: [
      { gate: "Gate A", status: "Available" },
      { gate: "Gate B", status: "Available" },
      { gate: "Gate C", status: "Limited" },
      { gate: "Gate D", status: "Available" },
    ],

    accessibleRoutes: [
      "North Entrance → Elevator A → Level 1",
      "East Entrance → Ramp B → VIP Seating",
    ],

    elevators: [
      { id: "Lift A", status: "Operational" },
      { id: "Lift B", status: "Operational" },
      { id: "Lift C", status: "Maintenance" },
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
