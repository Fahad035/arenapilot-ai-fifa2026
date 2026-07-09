import stadiumKnowledge from "../knowledge/stadiumKnowledge.js";
import { CROWD_LEVELS } from "../config/constants.js";

const getCrowdLevel = (percentage) => {
  if (percentage >= 90) return CROWD_LEVELS.EXTREME;
  if (percentage >= 70) return CROWD_LEVELS.HIGH;
  if (percentage >= 40) return CROWD_LEVELS.MODERATE;
  return CROWD_LEVELS.LOW;
};

const getEstimatedWait = (percentage) => {
  if (percentage >= 90) return 18;
  if (percentage >= 70) return 10;
  if (percentage >= 40) return 5;
  return 2;
};

const getBestGate = (crowdByGate) => {
  let bestGate = null;
  let lowestCrowd = Infinity;

  for (const [gate, value] of Object.entries(crowdByGate)) {
    if (value < lowestCrowd) {
      lowestCrowd = value;
      bestGate = gate;
    }
  }

  return bestGate;
};

export const analyzeCrowd = (scenario) => {
  const crowdByGate = {
    "Gate A": Number(scenario.gateA ?? 85),
    "Gate B": Number(scenario.gateB ?? 62),
    "Gate C": Number(scenario.gateC ?? 48),
    "Gate D": Number(scenario.gateD ?? 71),
  };

  const averageCrowd =
    Object.values(crowdByGate).reduce((a, b) => a + b, 0) /
    Object.keys(crowdByGate).length;

  const bestGate = getBestGate(crowdByGate);

  return {
  attendance: scenario.attendance,

  score,

  level,

  recommendation,

  density: {
    north: Math.min(100, Math.round(score + 8)),
    south: Math.max(20, Math.round(score - 12)),
    east: Math.round(score - 5),
    west: Math.round(score + 4),
  },

  queue: [
    {
      gate: "Gate A",
      people: scenario.gateA,
      status:
        scenario.gateA > 80 ? "Busy" : "Normal",
    },
    {
      gate: "Gate B",
      people: scenario.gateB,
      status:
        scenario.gateB > 80 ? "Busy" : "Normal",
    },
    {
      gate: "Gate C",
      people: scenario.gateC,
      status:
        scenario.gateC > 80 ? "Busy" : "Normal",
    },
    {
      gate: "Gate D",
      people: scenario.gateD,
      status:
        scenario.gateD > 80 ? "Busy" : "Normal",
    },
  ],

  hourlyTrend: [
    { hour: "10 AM", density: Math.max(10, score - 20) },
    { hour: "11 AM", density: Math.max(20, score - 10) },
    { hour: "12 PM", density: score },
    { hour: "1 PM", density: Math.min(100, score + 8) },
    { hour: "2 PM", density: Math.max(15, score - 5) },
  ],

  prediction: {
    next30Minutes:
      score > 70
        ? "Crowd density expected to increase."
        : "Crowd expected to remain stable.",

    confidence: 97,
  },
};

};
export default analyzeCrowd;