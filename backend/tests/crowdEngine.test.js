import { describe, it, expect } from "vitest";
import analyzeCrowd from "../engine/crowdEngine.js";

describe("Crowd Engine", () => {
  it("should analyze low attendance", () => {
    const result = analyzeCrowd({
      attendance: 12000,
    });

    expect(result).toBeDefined();
    expect(result.score).toBeGreaterThanOrEqual(0);
  });

  it("should analyze high attendance", () => {
    const result = analyzeCrowd({
      attendance: 72000,
    });

    expect(result.score).toBeGreaterThan(60);
    expect(result).toHaveProperty("score");
    expect(result).toHaveProperty("recommendation");
  });
});