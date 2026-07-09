import stadiumKnowledge from "../knowledge/stadiumKnowledge.js";

const estimateWalkingTime = (crowd) => {
  if (crowd >= 90) return 18;
  if (crowd >= 70) return 12;
  if (crowd >= 50) return 8;
  return 5;
};

const findBestGate = (
  gateCrowd,
  accessibilityRequired
) => {
  let selectedGate = null;
  let lowestCrowd = Infinity;

  for (const [gate, crowd] of Object.entries(gateCrowd)) {
    const gateInfo = stadiumKnowledge.gates[gate];

    if (!gateInfo) continue;

    if (
      accessibilityRequired &&
      !gateInfo.accessible
    ) {
      continue;
    }

    if (crowd < lowestCrowd) {
      lowestCrowd = crowd;
      selectedGate = gate;
    }
  }

  return selectedGate || "Gate D";
};

const analyzeRoute = (scenario) => {
  const gateCrowd = {
    "Gate A": Number(scenario.gateA ?? 75),
    "Gate B": Number(scenario.gateB ?? 65),
    "Gate C": Number(scenario.gateC ?? 45),
    "Gate D": Number(scenario.gateD ?? 60),
  };

  const accessibilityRequired =
    Boolean(scenario.accessibilityRequired);

  const emergencyMode =
    Boolean(scenario.emergencyMode);

  const recommendedGate =
    findBestGate(
      gateCrowd,
      accessibilityRequired
    );

  const gateInfo =
    stadiumKnowledge.gates[recommendedGate];

  const walkingTime =
    estimateWalkingTime(
      gateCrowd[recommendedGate]
    );

  return {
    recommendedGate,

    recommendation: emergencyMode
      ? `Emergency mode active. Direct spectators through ${recommendedGate}.`
      : `Use ${recommendedGate} as the recommended entry route.`,

    estimatedTime: walkingTime,

    distance:
      gateInfo?.distance ?? "Unknown",

    accessible:
      gateInfo?.accessible ?? false,

    emergencyMode,

    alternativeRoutes: Object.entries(
      gateCrowd
    ).map(([gate, load]) => ({
      gate,
      load,
      status:
        load > 80
          ? "Busy"
          : load > 60
          ? "Moderate"
          : "Open",
    })),

    congestionMap: {
      gateA: gateCrowd["Gate A"],
      gateB: gateCrowd["Gate B"],
      gateC: gateCrowd["Gate C"],
      gateD: gateCrowd["Gate D"],
    },

    evacuationPlan: [
      "Open emergency exits when congestion exceeds 90%.",
      "Guide spectators using digital signage.",
      "Deploy security personnel to intersections.",
      "Maintain clear medical corridors.",
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
        status:
          gateCrowd["Gate C"] > 85
            ? "Busy"
            : "Operational",
      },
      {
        name: "West Checkpoint",
        status: "Operational",
      },
    ],

    navigationSteps: [
      `Proceed to ${recommendedGate}.`,
      "Follow illuminated route indicators.",
      "Avoid restricted security zones.",
      "Continue to your designated seating area.",
    ],
  };
};

export default analyzeRoute;