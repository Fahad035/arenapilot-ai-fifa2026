import { describe, it, expect } from "vitest";
import analyzeRisk from "../engine/riskEngine.js";

describe("Risk Engine", () => {
  it("should detect storm risk", () => {
    const result = analyzeRisk({
      crowd: 80,
      weather: "Storm",
      medicalIncident: false,
      securityIncident: false,
    });

    expect(result.score).toBeGreaterThan(50);
  });

  it("should include medical incident risk", () => {
    const result = analyzeRisk({
      crowd: 40,
      weather: "Clear",
      medicalIncident: true,
      securityIncident: false,
    });

    expect(result.score).toBeGreaterThan(30);
    expect(result.recommendations.length).toBeGreaterThan(0);
  });
});