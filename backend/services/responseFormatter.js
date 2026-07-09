const formatResponse = ({ analysis, briefing }) => {
  const crowd = analysis.analysis.crowd;
  const risk = analysis.analysis.risk;
  const route = analysis.analysis.route;
  const transport = analysis.analysis.transport;
  const accessibility = analysis.analysis.accessibility;
  const sustainability = analysis.analysis.sustainability;

  return {
    success: true,

    timestamp: analysis.timestamp,

    confidence: 98,

    risk:
      risk.level ||
      analysis.overallStatus,

    route:
      route.bestRoute ||
      route.recommendedRoute ||
      "Gate A",

    summary: analysis.summary.join(" "),

    recommendations:
      risk.recommendations || [],

    metrics: {
      attendance:
        crowd.attendance || 0,

      congestion:
        crowd.score || 0,

      waitTime:
        transport.waitTime || 0,

      medicalRisk:
        risk.medicalRisk || 0,

      securityScore:
        risk.securityScore || 95,
    },

    timeline:
      route.timeline || [],

    dashboard: {
      overallScore:
        analysis.overallScore,

      overallStatus:
        analysis.overallStatus,
    },

    engines: {
      crowd,
      risk,
      route,
      transport,
      accessibility,
      sustainability,
    },

    aiBriefing: briefing,
  };
};

export default formatResponse;