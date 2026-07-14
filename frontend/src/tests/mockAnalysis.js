export const mockAnalysis = {
  executiveSummary: {
    overallStatus: "Normal",
    overallRisk: "Low",
  },

  crowd: {
    attendance: 50000,
    density: "Moderate",
  },

  navigation: {
    recommendedGate: "Gate A",
    routeTime: "5 min",
  },

  alerts: [
    {
      id: 1,
      severity: "Critical",
      title: "Medical Emergency",
    },
  ],

  operations: {
    weather: "Clear",
    incidents: 2,
  },

  sustainability: {
    carbonScore: 82,
  },
};