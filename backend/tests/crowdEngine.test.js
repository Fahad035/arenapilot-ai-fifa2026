import { describe, it, expect } from "vitest";
import { analyzeCrowd } from "../engine/crowdEngine.js";

describe("Crowd Engine", () => {
  it("should analyze low attendance", () => {
    const result = analyzeCrowd({
      attendance: 20000,
      gateA: 20,
      gateB: 25,
      gateC: 22,
      gateD: 18,
    });

    expect(result.score).toBeLessThan(40);
    expect(result.level).toBe("Low");
  });

  it("should analyze high attendance", () => {
    const result = analyzeCrowd({
      attendance: 90000,
      gateA: 85,
      gateB: 90,
      gateC: 88,
      gateD: 92,
    });

    expect(result.score).toBeGreaterThan(60);
    expect(result.level).toBe("High");
    expect(result).toHaveProperty("recommendation");
  });
});