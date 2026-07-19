import { useCallback, useState } from "react";

import { analyzeScenario } from "../../services/analysisService";
import { WEATHER_BACKEND_MAP } from "./scenarioForm.constants";

export default function useScenarioForm({
  scenarioData,
  setScenarioData,
  setAnalysis,
  setLoading,
}) {
  const [errors, setErrors] = useState({});

  const handleChange = useCallback(
    (field, value) => {
      setScenarioData((prev) => ({
        ...prev,
        [field]: value,
      }));
    },
    [setScenarioData]
  );

  const validate = useCallback(() => {
    const newErrors = {};

    if (!scenarioData.stadium) newErrors.stadium = "Please select a stadium.";
    if (!scenarioData.match) newErrors.match = "Please select a match.";
    if (!scenarioData.crowd) newErrors.crowd = "Crowd size is required.";
    if (!scenarioData.incident) newErrors.incident = "Select an incident.";
    if (!scenarioData.priority) newErrors.priority = "Priority is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }, [scenarioData]);

  const handleGenerate = useCallback(async () => {
    if (!validate()) return;

    setLoading(true);

    try {
      const gateAPct = 25;
      const gateBPct = 25;
      const gateCPct = 25;
      const gateDPct = 25;

      const payload = {
        eventName: scenarioData.match,
        eventType: "Football Match",

        attendance: Number(scenarioData.crowd),

        weather: WEATHER_BACKEND_MAP[scenarioData.weather] ?? "Clear",

        gateA: gateAPct,
        gateB: gateBPct,
        gateC: gateCPct,
        gateD: gateDPct,

        accessibilityRequired: false,

        medicalIncident: scenarioData.incident === "Medical Emergency",
        securityIncident: scenarioData.incident === "Security Threat",
        emergencyMode: scenarioData.priority === "Critical",
      };

      const result = await analyzeScenario(payload);

      setAnalysis(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [scenarioData, validate, setAnalysis, setLoading]);

  return { errors, handleChange, handleGenerate };
}
