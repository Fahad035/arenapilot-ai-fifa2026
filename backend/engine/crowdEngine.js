import { CROWD_LEVELS } from "../config/constants.js";

const getCrowdLevel = (score) => {
  if (score >= 90) return CROWD_LEVELS.EXTREME;
  if (score >= 70) return CROWD_LEVELS.HIGH;
  if (score >= 40) return CROWD_LEVELS.MODERATE;
  return CROWD_LEVELS.LOW;
};

const getRecommendation = (level, bestGate) => {
  switch (level) {
    case CROWD_LEVELS.EXTREME:
      return `Critical congestion detected. Immediately redirect spectators to ${bestGate}.`;

    case CROWD_LEVELS.HIGH:
      return `High congestion detected. Open additional access through ${bestGate}.`;

    case CROWD_LEVELS.MODERATE:
      return `Moderate crowd density. Continue monitoring ${bestGate}.`;

    default:
      return `Crowd flow is normal. ${bestGate} is operating efficiently.`;
  }
};

const getBestGate = (crowdByGate) => {
  let gate = "";
  let min = Infinity;

  for (const [name, value] of Object.entries(crowdByGate)) {
    if (value < min) {
      min = value;
      gate = name;
    }
  }

  return gate;
};

export const analyzeCrowd = (scenario) => {
  const crowdByGate = {
    "Gate A": Number(scenario.gateA ?? 25),
    "Gate B": Number(scenario.gateB ?? 25),
    "Gate C": Number(scenario.gateC ?? 25),
    "Gate D": Number(scenario.gateD ?? 25),
  };

  const score = Math.round(
    Object.values(crowdByGate).reduce((a, b) => a + b, 0) /
      Object.keys(crowdByGate).length
  );

  const level = getCrowdLevel(score);

  const bestGate = getBestGate(crowdByGate);

  const recommendation = getRecommendation(level, bestGate);

  return {
    attendance: Number(scenario.attendance),

    score,

    level,

    recommendation,

    bestGate,

    density: {
      north: Math.min(100, score + 8),
      south: Math.max(10, score - 12),
      east: Math.max(10, score - 5),
      west: Math.min(100, score + 4),
    },

    queue: [
      {
        gate: "Gate A",
        people: crowdByGate["Gate A"],
        status:
          crowdByGate["Gate A"] >= 80
            ? "Busy"
            : "Normal",
      },
      {
        gate: "Gate B",
        people: crowdByGate["Gate B"],
        status:
          crowdByGate["Gate B"] >= 80
            ? "Busy"
            : "Normal",
      },
      {
        gate: "Gate C",
        people: crowdByGate["Gate C"],
        status:
          crowdByGate["Gate C"] >= 80
            ? "Busy"
            : "Normal",
      },
      {
        gate: "Gate D",
        people: crowdByGate["Gate D"],
        status:
          crowdByGate["Gate D"] >= 80
            ? "Busy"
            : "Normal",
      },
    ],

    hourlyTrend: [
      {
        hour: "10 AM",
        density: Math.max(10, score - 20),
      },
      {
        hour: "11 AM",
        density: Math.max(15, score - 10),
      },
      {
        hour: "12 PM",
        density: score,
      },
      {
        hour: "1 PM",
        density: Math.min(100, score + 8),
      },
      {
        hour: "2 PM",
        density: Math.max(15, score - 5),
      },
    ],

    prediction: {
      next30Minutes:
        score >= 70
          ? "Crowd density expected to increase."
          : "Crowd expected to remain stable.",

      confidence: 97,
    },
  };
};

export default analyzeCrowd;