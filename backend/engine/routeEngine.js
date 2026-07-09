import stadiumKnowledge from "../knowledge/stadiumKnowledge.js";

const estimateWalkingTime = (crowd) => {
  if (crowd >= 90) return 18;
  if (crowd >= 70) return 12;
  if (crowd >= 50) return 8;
  return 5;
};

const findBestGate = (gateCrowd, accessibilityRequired) => {
  let selectedGate = null;
  let lowestCrowd = Infinity;

  for (const [gate, crowd] of Object.entries(gateCrowd)) {
    const gateInfo = stadiumKnowledge.gates[gate];

    if (!gateInfo) continue;

    if (accessibilityRequired && !gateInfo.accessible) {
      continue;
    }

    if (crowd < lowestCrowd) {
      lowestCrowd = crowd;
      selectedGate = gate;
    }
  }

  return selectedGate;
};

const analyzeRoute = (scenario) => {
  const gateCrowd = {
    "Gate A": Number(scenario.gateA ?? 75),
    "Gate B": Number(scenario.gateB ?? 65),
    "Gate C": Number(scenario.gateC ?? 45),
    "Gate D": Number(scenario.gateD ?? 60),
  };

  const accessibilityRequired = Boolean(scenario.accessibilityRequired);

  const emergencyMode = Boolean(scenario.emergencyMode);

  const bestGate = findBestGate(gateCrowd, accessibilityRequired);

  const gateInfo = stadiumKnowledge.gates[bestGate];

  const walkingTime = estimateWalkingTime(gateCrowd[bestGate]);

  return {
    recommendedGate,

    recommendation: `Use ${recommendedGate} as the primary entrance to reduce congestion.`,

    estimatedTime:
      recommendedGate === "Gate A"
        ? 4
        : recommendedGate === "Gate B"
          ? 6
          : recommendedGate === "Gate C"
            ? 8
            : 5,

    alternativeRoutes: [
      {
        gate: "Gate A",
        status: scenario.gateA > 80 ? "Busy" : "Open",
        load: scenario.gateA,
      },
      {
        gate: "Gate B",
        status: scenario.gateB > 80 ? "Busy" : "Open",
        load: scenario.gateB,
      },
      {
        gate: "Gate C",
        status: scenario.gateC > 80 ? "Busy" : "Open",
        load: scenario.gateC,
      },
      {
        gate: "Gate D",
        status: scenario.gateD > 80 ? "Busy" : "Open",
        load: scenario.gateD,
      },
    ],

    congestionMap: {
      gateA: scenario.gateA,
      gateB: scenario.gateB,
      gateC: scenario.gateC,
      gateD: scenario.gateD,
    },

    evacuationPlan: [
      "Open all emergency exits if congestion exceeds 90%.",
      "Guide spectators using digital signage.",
      "Deploy security staff to major intersections.",
      "Keep medical corridors unobstructed.",
    ],

    checkpoints: [
      {
        name: "North Checkpoint",
        status: "Operational",
      },
      {
        name: "East Checkpoint",
        status: "Operational",
      },
      {
        name: "South Checkpoint",
        status: scenario.gateC > 85 ? "Busy" : "Operational",
      },
      {
        name: "West Checkpoint",
        status: "Operational",
      },
    ],

    navigationSteps: [
      `Proceed towards ${recommendedGate}.`,
      "Follow illuminated route indicators.",
      "Avoid restricted security zones.",
      "Continue to designated seating area.",
    ],
  };
};

export default analyzeRoute;
