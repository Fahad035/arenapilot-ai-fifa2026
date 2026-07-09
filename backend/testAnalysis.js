import analyzeScenario from "./services/analysisService.js";

const scenario = {
  eventName: "India vs Australia",

  eventType: "Football Match",

  attendance: 72000,

  weather: "Storm",

  gateA: 92,
  gateB: 74,
  gateC: 45,
  gateD: 63,

  accessibilityRequired: true,

  medicalIncident: true,

  securityIncident: false,

  emergencyMode: false,
};

console.log(
  JSON.stringify(
    analyzeScenario(scenario),
    null,
    2
  )
);