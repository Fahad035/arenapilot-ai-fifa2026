import { describe, it, expect } from "vitest";
import analyzeScenario from "../services/analysisService.js";

describe("Analysis Service", () => {
  it("should generate a complete analysis", () => {
    const result = analyzeScenario({
      eventName: "India vs Australia",
      eventType: "Football Match",
      attendance: 70000,
      weather: "Storm",
      gateA: 90,
      gateB: 60,
      gateC: 30,
      gateD: 50,
      accessibilityRequired: true,
      medicalIncident: true,
      securityIncident: false,
      emergencyMode: false,
    });

    expect(result).toHaveProperty("overallScore");
    expect(result).toHaveProperty("overallStatus");
    expect(result).toHaveProperty("analysis");
  });
});