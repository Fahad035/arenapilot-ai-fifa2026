import { describe, it, expect } from "vitest";
import analyzeRoute from "../engine/routeEngine.js";

describe("Route Engine", () => {
  it("should return a route recommendation", () => {
    const result = analyzeRoute({
      gateA: 90,
      gateB: 50,
      gateC: 20,
      gateD: 40,
    });

    expect(result).toBeDefined();
    expect(result).toHaveProperty("recommendedGate");
  });
});