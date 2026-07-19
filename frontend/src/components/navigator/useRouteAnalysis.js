import { useCallback, useMemo, useState } from "react";

import { analyzeScenario } from "../../services/analysisService";

const normalizeKey = (value) => value.toLowerCase().replace(/\s+/g, "");

export default function useRouteAnalysis(analysis) {
  const [generatedRouteAnalysis, setGeneratedRouteAnalysis] = useState(null);

  const derived = useMemo(() => {
    const routeAnalysis = generatedRouteAnalysis ?? analysis?.routeAnalysis ?? {};
    const recommendedGate = routeAnalysis?.recommendedGate ?? "Unavailable";
    const estimatedTime = routeAnalysis?.estimatedTime;
    const distance = routeAnalysis?.distance ?? "Unavailable";
    const congestionMap = routeAnalysis?.congestionMap ?? {};

    const congestionEntry = Object.entries(congestionMap).find(
      ([key]) => normalizeKey(key) === normalizeKey(recommendedGate)
    );
    const congestion = congestionEntry?.[1] ?? analysis?.metrics?.congestion;

    const alternativeRoutes = routeAnalysis?.alternativeRoutes ?? [];
    const navigationSteps = routeAnalysis?.navigationSteps ?? [];
    const checkpoints = routeAnalysis?.checkpoints ?? [];
    const evacuationPlan = routeAnalysis?.evacuationPlan ?? [];

    const routeOptions = alternativeRoutes.map((route) => route?.gate).filter(Boolean);
    const destinationOptions = checkpoints
      .map((checkpoint) => checkpoint?.name)
      .filter(Boolean);

    return {
      recommendedGate,
      estimatedTime,
      distance,
      congestion,
      alternativeRoutes,
      navigationSteps,
      checkpoints,
      evacuationPlan,
      routeOptions,
      destinationOptions,
    };
  }, [generatedRouteAnalysis, analysis?.routeAnalysis, analysis?.metrics?.congestion]);

  const generateRoute = useCallback(async ({ start, destination, accessible }) => {
    if (!start || !destination) return;

    const payload = {
      eventName: destination,
      eventType: "Football Match",
      attendance: 50000,
      weather: "Clear",
      gateA: 25,
      gateB: 25,
      gateC: 25,
      gateD: 25,
      accessibilityRequired: accessible,
      medicalIncident: false,
      securityIncident: false,
      emergencyMode: false,
    };

    const result = await analyzeScenario(payload);
    setGeneratedRouteAnalysis(result?.routeAnalysis ?? null);
  }, []);

  return { ...derived, generateRoute };
}
