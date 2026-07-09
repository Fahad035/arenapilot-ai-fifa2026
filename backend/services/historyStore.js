import { randomUUID } from "crypto";

const savedScenarios = [];

export const addSavedScenario = ({
  scenarioName,
  attendance,
  risk,
  confidence,
  recommendedRoute,
  summary,
  timestamp,
  score,
  medicalRisk,
  securityRisk,
  weatherRisk,
}) => {
  const entry = {
    id: randomUUID(),
    scenarioName,
    attendance,
    risk,
    confidence,
    recommendedRoute,
    summary,
    timestamp,
    score,
    medicalRisk,
    securityRisk,
    weatherRisk,
  };

  savedScenarios.unshift(entry);

  return entry;
};

export const getSavedScenarios = () => savedScenarios;
