const formatResponse = ({ analysis, briefing }) => {
  const crowd = analysis.analysis.crowd;
  const risk = analysis.analysis.risk;
  const route = analysis.analysis.route;

  // Build metrics expected by the current frontend
  const metrics = {
    attendance: crowd?.attendance ?? 0,
    congestion: crowd?.score ?? 0,
    waitTime: route?.estimatedTime ?? 0,
    medicalRisk: risk?.medicalRisk ?? risk?.score ?? 0,
    securityScore: Math.max(0, 100 - (risk?.score ?? 0)),
  };

  // Build recommendation list
  const recommendations = [
    crowd?.recommendation,
    ...(risk?.recommendations || []),
    route?.recommendation,
  ].filter(Boolean);

  // Build timeline
  const timeline = [
    {
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      event: "Scenario received",
    },
    {
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      event: "Crowd analysis completed",
    },
    {
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      event: "Risk assessment completed",
    },
    {
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      event: "AI briefing generated",
    },
  ];

  return {
    success: true,

    timestamp: new Date().toISOString(),

    confidence: 98,

    // ===== Existing frontend fields =====
    risk: analysis.overallStatus,

    route:
      route?.bestGate ||
      route?.recommendedGate ||
      route?.route ||
      "Gate A",

    summary: analysis.summary.join(" "),

    recommendations,

    metrics,

    timeline,

    // ===== Keep new backend structure =====
    dashboard: {
      overallScore: analysis.overallScore,
      overallStatus: analysis.overallStatus,
      summary: analysis.summary,
    },

    analysis: analysis.analysis,

    aiBriefing: briefing,
  };
};

export default formatResponse;