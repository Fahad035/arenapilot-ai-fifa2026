import api from "./api";

export const analyzeScenario = async (scenario) => {
  const { data } = await api.post("/analyze", scenario);

  // backend returns engines + risk/metrics/timeline via formatResponse
  const analysis = data?.analysis ?? data?.engines ?? {};
  const routeAnalysis =
    analysis?.routeAnalysis ??
    analysis?.route ??
    data?.routeAnalysis ??
    data?.route ??
    {};
  const dashboard = data?.dashboard ?? {};
  const summary = data?.summary ?? dashboard?.summary ?? [];
  const timeline = data?.timeline ?? analysis?.risk?.timeline ?? [];

  return {
    success: data?.success,

    confidence: data?.confidence ?? 98,

    timestamp: data?.timestamp ?? null,

    score:
      dashboard?.overallScore ?? analysis?.risk?.score ?? null,

    risk:
      analysis?.risk?.level ?? data?.risk ?? "Medium",

    route:
      routeAnalysis?.recommendedGate ?? data?.route ?? null,

    summary:
      Array.isArray(summary) ? summary.join(" ") : summary,

    recommendations:
      analysis?.risk?.recommendations ?? data?.recommendations ?? [],

    medicalRisk:
      analysis?.risk?.medicalRisk,

    securityRisk:
      analysis?.risk?.securityScore,

    weatherRisk:
      analysis?.risk?.weatherRisk,

    metrics: {
      attendance:
        analysis?.crowd?.attendance,

      congestion:
        analysis?.crowd?.score,

      waitTime:
        routeAnalysis?.estimatedTime,

      medicalRisk:
        analysis?.risk?.medicalRisk,

      securityScore:
        analysis?.risk?.securityScore,
    },

    crowd:
      analysis?.crowd,

    riskAnalysis:
      analysis?.risk,

    routeAnalysis:
      routeAnalysis,

    accessibility:
      analysis?.accessibility,

    transport:
      analysis?.transport,

    sustainability:
      analysis?.sustainability,

    briefing:
      data?.aiBriefing,

    timeline,

    overallStatus:
      dashboard?.overallStatus,

    overallScore:
      dashboard?.overallScore,
  };
};