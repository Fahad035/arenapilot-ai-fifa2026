import analyzeCrowd from "../engine/crowdEngine.js";
import analyzeRisk from "../engine/riskEngine.js";
import analyzeRoute from "../engine/routeEngine.js";
import analyzeAccessibility from "../engine/accessibilityEngine.js";
import analyzeTransport from "../engine/transportEngine.js";
import analyzeSustainability from "../engine/sustainabilityEngine.js";

const calculateOverallScore = (results) => {
  const scores = [];

  if (results.crowd?.score !== undefined) {
    scores.push(results.crowd.score);
  }

  if (results.risk?.score !== undefined) {
    scores.push(results.risk.score);
  }

  if (!scores.length) {
    return 0;
  }

  return Math.round(
    scores.reduce((sum, value) => sum + value, 0) / scores.length
  );
};

const determineOverallStatus = (score) => {
  if (score >= 85) {
    return "Critical";
  }

  if (score >= 65) {
    return "High Alert";
  }

  if (score >= 40) {
    return "Moderate";
  }

  return "Normal";
};

const buildSummary = (results, status) => {
  const summary = [];

  summary.push(`Overall operational status is ${status}.`);

  summary.push(results.crowd.recommendation);

  summary.push(...results.risk.recommendations);

  summary.push(results.transport.recommendation);

  summary.push(results.accessibility.recommendation);

  return [...new Set(summary)];
};

const analyzeScenario = (scenario) => {
  const crowd = analyzeCrowd(scenario);

  const risk = analyzeRisk({
    crowd: crowd.score,
    weather: scenario.weather,
    medicalIncident: scenario.medicalIncident,
    securityIncident: scenario.securityIncident,
  });

  const route = analyzeRoute(scenario);

  const accessibility =
    analyzeAccessibility(scenario);

  const transport =
    analyzeTransport(scenario);

  const sustainability =
    analyzeSustainability(scenario);

  const results = {
    crowd,
    risk,
    route,
    accessibility,
    transport,
    sustainability,
  };

  const overallScore =
    calculateOverallScore(results);

  const overallStatus =
    determineOverallStatus(overallScore);

  return {
    timestamp: new Date().toISOString(),

    overallScore,

    overallStatus,

    summary: buildSummary(
      results,
      overallStatus
    ),

    analysis: results,
  };
};

export default analyzeScenario;