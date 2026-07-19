import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import errorHandler from "../middleware/errorHandler.js";

const buildRes = () => {
  const res = {};
  res.status = vi.fn().mockReturnValue(res);
  res.json = vi.fn().mockReturnValue(res);
  return res;
};

const buildReq = () => ({
  method: "POST",
  originalUrl: "/api/analyze",
});

describe("errorHandler middleware", () => {
  const originalEnv = process.env.NODE_ENV;
  let consoleErrorSpy;

  beforeEach(() => {
    consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    process.env.NODE_ENV = originalEnv;
    consoleErrorSpy.mockRestore();
  });

  it("responds with the error's own status code when provided", () => {
    const res = buildRes();
    const err = Object.assign(new Error("Invalid scenario data."), {
      status: 400,
    });

    errorHandler(err, buildReq(), res, vi.fn());

    expect(res.status).toHaveBeenCalledWith(400);
  });

  it("defaults to 500 when no status is set", () => {
    const res = buildRes();
    const err = new Error("Unexpected failure");

    errorHandler(err, buildReq(), res, vi.fn());

    expect(res.status).toHaveBeenCalledWith(500);
  });

  it("passes the original message through for 4xx errors", () => {
    const res = buildRes();
    const err = Object.assign(new Error("Invalid scenario data."), {
      status: 400,
    });

    errorHandler(err, buildReq(), res, vi.fn());

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        success: false,
        message: "Invalid scenario data.",
      })
    );
  });

  it("never leaks the internal error message for 5xx errors in production", () => {
    process.env.NODE_ENV = "production";
    const res = buildRes();
    const err = new Error("ECONNREFUSED at gemini-service.internal:443");

    errorHandler(err, buildReq(), res, vi.fn());

    const payload = res.json.mock.calls[0][0];
    expect(payload.message).not.toContain("ECONNREFUSED");
    expect(payload).not.toHaveProperty("debug");
  });

  it("includes a debug field with the real message outside production", () => {
    process.env.NODE_ENV = "development";
    const res = buildRes();
    const err = new Error("ECONNREFUSED at gemini-service.internal:443");

    errorHandler(err, buildReq(), res, vi.fn());

    const payload = res.json.mock.calls[0][0];
    expect(payload.debug).toBe("ECONNREFUSED at gemini-service.internal:443");
  });

  it("always sets success: false", () => {
    const res = buildRes();
    errorHandler(new Error("boom"), buildReq(), res, vi.fn());

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ success: false })
    );
  });

  it("logs the request method and URL for observability", () => {
    const res = buildRes();
    errorHandler(new Error("boom"), buildReq(), res, vi.fn());

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining("POST /api/analyze"),
      expect.any(Error)
    );
  });
});
