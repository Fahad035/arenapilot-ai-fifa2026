import { useEffect, useRef } from "react";

import { getLatestLiveSnapshot } from "../../services/liveService";

export default function useLivePolling({
  enabled,
  setAnalysis,
  intervalMs = 5000,
}) {
  const timerRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    let stopped = false;

    const tick = async () => {
      try {
        const snap = await getLatestLiveSnapshot();
        if (stopped) return;

        const latest = snap?.latest ?? null;
        if (!latest) return;

        setAnalysis((prev) => {
          if (!prev) {
            return {
              risk: latest.risk,
              confidence: latest.confidence,
              route: latest.recommendedRoute,
              summary: latest.summary,
              medicalRisk: latest.medicalRisk,
              securityRisk: latest.securityRisk,
              weatherRisk: latest.weatherRisk,
              metrics: {
                attendance: latest.attendance,
                medicalRisk: latest.medicalRisk,
                securityScore: latest.securityRisk,
              },
              timeline: prev?.timeline ?? [],
              overallStatus: undefined,
              overallScore: latest.score,
              briefing: undefined,
            };
          }

          return {
            ...prev,
            risk: latest.risk ?? prev.risk,
            confidence: latest.confidence ?? prev.confidence,
            route: latest.recommendedRoute ?? prev.route,
            summary: latest.summary ?? prev.summary,
            metrics: {
              ...prev.metrics,
              attendance: latest.attendance ?? prev.metrics?.attendance,
              medicalRisk: latest.medicalRisk ?? prev.metrics?.medicalRisk,
              securityScore: latest.securityRisk ?? prev.metrics?.securityScore,
            },
            overallScore: latest.score ?? prev.overallScore,
          };
        });
      } catch (e) {
        console.error("live polling error", e);
      }
    };

    tick();
    timerRef.current = setInterval(tick, intervalMs);

    return () => {
      stopped = true;
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [enabled, intervalMs, setAnalysis]);
}
