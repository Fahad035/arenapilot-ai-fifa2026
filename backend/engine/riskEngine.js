import { RISK_LEVELS } from "../config/constants.js";

const calculateRiskLevel = (score) => {
  if (score >= 85) return RISK_LEVELS.CRITICAL;
  if (score >= 65) return RISK_LEVELS.HIGH;
  if (score >= 40) return RISK_LEVELS.MEDIUM;
  return RISK_LEVELS.LOW;
};

const getRecommendations = (factors) => {
  const recommendations = [];

  if (factors.crowd >= 80) {
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

  if (!recommendations.length) {
    recommendations.push(
      "Current operational conditions are stable."
    );
  }

  return recommendations;
};

const analyzeRisk = (scenario) => {
  const factors = {
    crowd: Number(scenario.crowd ?? 0),
    weather: scenario.weather ?? "Clear",
    medicalIncident: Boolean(scenario.medicalIncident),
    securityIncident: Boolean(scenario.securityIncident),
  };

  let score = 0;

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

  if (factors.medicalIncident) score += 15;

  if (factors.securityIncident) score += 20;

  score = Math.min(Math.round(score), 100);

  const level = calculateRiskLevel(score);

  const recommendations =
    getRecommendations(factors);

  return {
    score,

    level,

    medicalRisk:
      factors.medicalIncident ? 85 : 20,

    securityScore:
      factors.securityIncident ? 90 : 75,

    weatherRisk:
      factors.weather,

    recommendations,

    breakdown: [
      {
        category: "Crowd",
        score: factors.crowd,
      },
      {
        category: "Weather",
        score:
          factors.weather === "Storm"
            ? 90
            : factors.weather === "Rain"
            ? 65
            : factors.weather === "Cloudy"
            ? 35
            : 10,
      },
      {
        category: "Medical",
        score:
          factors.medicalIncident ? 85 : 20,
      },
      {
        category: "Security",
        score:
          factors.securityIncident ? 90 : 25,
      },
    ],

    executiveSummary:
      score >= 70
        ? "High operational risk. Immediate intervention recommended."
        : score >= 40
        ? "Moderate operational risk. Continue active monitoring."
        : "Low operational risk. Normal operating procedures are sufficient.",

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