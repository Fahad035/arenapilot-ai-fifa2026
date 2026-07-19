const CARD_VALUE_RESOLVERS = {
  time: (_analysis, time) => time,
  attendance: (analysis) => analysis?.metrics?.attendance,
  density: (analysis) => analysis?.metrics?.crowdDensity,
  capacity: (analysis) => analysis?.metrics?.capacity,
  congestion: (analysis) => analysis?.analysis?.risk?.level,
  confidence: (analysis) => analysis?.confidence,
  risk: (analysis) => analysis?.risk,
  recommendation: (analysis) => analysis?.route,
  generated: () => "Just Now",
  gate: (analysis) => analysis?.route,
  routeTime: (analysis) => analysis?.routeAnalysis?.estimatedTime,
  accessibility: (analysis) => analysis?.analysis?.accessibility?.status,
  traffic: (analysis) => analysis?.analysis?.traffic?.status,
  medical: (analysis) => analysis?.metrics?.medicalRisk,
  security: (analysis) => analysis?.metrics?.securityScore,
  weather: (analysis) => analysis?.analysis?.weather,
};

export function resolveCardValue(card, analysis, time) {
  const resolver = CARD_VALUE_RESOLVERS[card.id];
  if (!resolver) return card.value;

  const resolved = resolver(analysis, time);
  return resolved ?? card.value;
}
