import { describe, it, expect } from "vitest";
import { validateScenario } from "../validators/scenarioValidator.js";

const validScenario = {
  eventName: "Argentina vs Brazil",
  eventType: "Football Match",
  attendance: 60000,
  weather: "Clear",
  gateA: 25,
  gateB: 25,
  gateC: 25,
  gateD: 25,
  accessibilityRequired: false,
  medicalIncident: false,
  securityIncident: false,
  emergencyMode: false,
};

describe("validateScenario", () => {
  it("accepts a fully valid scenario", () => {
    const result = validateScenario(validScenario);
    expect(result.success).toBe(true);
  });

  it("rejects an event name shorter than 2 characters", () => {
    const result = validateScenario({ ...validScenario, eventName: "A" });
    expect(result.success).toBe(false);
  });

  it("rejects an unknown eventType", () => {
    const result = validateScenario({ ...validScenario, eventType: "Rodeo" });
    expect(result.success).toBe(false);
  });

  it("rejects attendance above the 80000 cap", () => {
    const result = validateScenario({ ...validScenario, attendance: 90000 });
    expect(result.success).toBe(false);
  });

  it("rejects negative attendance", () => {
    const result = validateScenario({ ...validScenario, attendance: -1 });
    expect(result.success).toBe(false);
  });

  it("rejects an unknown weather value", () => {
    const result = validateScenario({ ...validScenario, weather: "Snow" });
    expect(result.success).toBe(false);
  });

  it("rejects a gate percentage above 100", () => {
    const result = validateScenario({ ...validScenario, gateA: 150 });
    expect(result.success).toBe(false);
  });

  it("rejects a gate percentage below 0", () => {
    const result = validateScenario({ ...validScenario, gateB: -10 });
    expect(result.success).toBe(false);
  });

  it("rejects when a boolean flag is sent as a string", () => {
    const result = validateScenario({
      ...validScenario,
      medicalIncident: "true",
    });
    expect(result.success).toBe(false);
  });

  it("rejects a payload missing required fields", () => {
    const { eventName, ...incomplete } = validScenario;
    const result = validateScenario(incomplete);
    expect(result.success).toBe(false);
  });

  it("returns flattenable field errors on failure", () => {
    const result = validateScenario({ ...validScenario, attendance: -5 });
    expect(result.success).toBe(false);
    const flattened = result.error.flatten();
    expect(flattened.fieldErrors).toHaveProperty("attendance");
  });
});
