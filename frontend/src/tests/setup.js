import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Vitest-compatible jest-dom matchers
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
});

