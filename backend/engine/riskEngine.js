import { RISK_LEVELS } from "../config/constants.js";

const calculateRiskLevel = (score) => {
  if (score >= 85) return RISK_LEVELS.CRITICAL;
  if (score >= 65) return RISK_LEVELS.HIGH;
  if (score >= 40) return RISK_LEVELS.MEDIUM;
  return RISK_LEVELS.LOW;
};

const getRecommendations = (factors) => {
  const recommendations = [];

  if (factors.crowd > 80) {
    recommendations.push(
      "Redirect spectators to less congested entry gates."
    );
  }

  if (factors.weather === "Storm") {
    recommendations.push(
      "Delay outdoor movement and broadcast weather advisory."
    );
  }

  if (factors.medicalIncident) {
    recommendations.push(
      "Dispatch medical response team immediately."
    );
  }

  if (factors.securityIncident) {
    recommendations.push(
      "Increase security personnel in affected zone."
    );
  }

  if (recommendations.length === 0) {
    recommendations.push(
      "Current operational conditions are stable."
    );
  }

  return recommendations;
};

const analyzeRisk = (scenario) => {
  let score = 0;

  const factors = {
    crowd: Number(scenario.crowd ?? 0),
    weather: scenario.weather ?? "Clear",
    medicalIncident: Boolean(scenario.medicalIncident),
    securityIncident: Boolean(scenario.securityIncident),
  };

  score += factors.crowd * 0.5;

  switch (factors.weather) {
    case "Rain":
      score += 10;
      break;

    case "Storm":
      score += 25;
      break;

    default:
      break;
  }

  if (factors.medicalIncident) {
    score += 15;
  }

  if (factors.securityIncident) {
    score += 20;
  }

  score = Math.min(Math.round(score), 100);

  return {
  score,

  level:
    score >= 85
      ? "Critical"
      : score >= 65
      ? "High"
      : score >= 40
      ? "Moderate"
      : "Low",

  medicalRisk: medicalIncident
    ? "High"
    : "Low",

  securityRisk: securityIncident
    ? "High"
    : "Low",

  weatherRisk: weather,

  recommendations,

  breakdown: [
    {
      category: "Crowd",
      score: crowd,
    },
    {
      category: "Weather",
      score:
        weather === "Storm"
          ? 90
          : weather === "Rain"
          ? 65
          : weather === "Cloudy"
          ? 35
          : 10,
    },
    {
      category: "Medical",
      score: medicalIncident ? 85 : 20,
    },
    {
      category: "Security",
      score: securityIncident ? 90 : 25,
    },
  ],

  executiveSummary:
    score >= 70
      ? "High operational risk. Immediate monitoring and intervention are recommended."
      : score >= 40
      ? "Moderate operational risk. Continue active monitoring and prepare response teams."
      : "Low operational risk. Standard operating procedures are sufficient.",

  timeline: [
    {
      time: "T+0",
      event: "Scenario received",
    },
    {
      time: "T+15s",
      event: "Crowd analysis completed",
    },
    {
      time: "T+30s",
      event: "Risk assessment completed",
    },
    {
      time: "T+45s",
      event: "Recommendations generated",
    },
  ],
};

};

export default analyzeRisk;