import { describe, it, expect, vi } from "vitest";
import sanitizeInput from "../middleware/sanitizeInput.js";

const runMiddleware = (body) => {
  const req = { body };
  const res = {};
  const next = vi.fn();

  sanitizeInput(req, res, next);

  return { req, next };
};

describe("sanitizeInput middleware", () => {
  it("calls next() exactly once", () => {
    const { next } = runMiddleware({ eventName: "Argentina vs Brazil" });
    expect(next).toHaveBeenCalledTimes(1);
  });

  it("strips angle brackets from string fields", () => {
    const { req } = runMiddleware({ notes: "<b>hello</b>" });
    expect(req.body.notes).toBe("bhello/b");
  });

  it("removes inline script tags and their content entirely", () => {
    const { req } = runMiddleware({
      notes: "before <script>alert(1)</script> after",
    });
    expect(req.body.notes).toBe("before  after");
  });

  it("strips javascript: URIs", () => {
    const { req } = runMiddleware({ link: "javascript:alert(1)" });
    expect(req.body.link).not.toMatch(/javascript:/i);
  });

  it("trims leading/trailing whitespace", () => {
    const { req } = runMiddleware({ eventName: "  Lusail Stadium  " });
    expect(req.body.eventName).toBe("Lusail Stadium");
  });

  it("sanitizes strings inside nested objects", () => {
    const { req } = runMiddleware({
      scenario: { eventName: "<img src=x>Test" },
    });
    expect(req.body.scenario.eventName).not.toContain("<");
  });

  it("sanitizes strings inside arrays", () => {
    const { req } = runMiddleware({ tags: ["<b>vip</b>", "safe"] });
    expect(req.body.tags[0]).not.toContain("<");
    expect(req.body.tags[1]).toBe("safe");
  });

  it("leaves non-string primitives untouched", () => {
    const { req } = runMiddleware({ attendance: 60000, active: true });
    expect(req.body.attendance).toBe(60000);
    expect(req.body.active).toBe(true);
  });

  it("does nothing when there is no request body", () => {
    const req = { body: undefined };
    const res = {};
    const next = vi.fn();

    sanitizeInput(req, res, next);

    expect(req.body).toBeUndefined();
    expect(next).toHaveBeenCalledTimes(1);
  });
});
