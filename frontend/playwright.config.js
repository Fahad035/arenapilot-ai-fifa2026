import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",

  timeout: 60000,

  fullyParallel: true,

  retries: process.env.CI ? 1 : 0,

  use: {
    baseURL: "http://localhost:5173",

    headless: true,

    screenshot: "only-on-failure",

    video: "retain-on-failure",

    trace: "retain-on-failure",
  },

  // Automatically boots the Vite dev server before the suite runs (and
  // reuses one you already have running locally), so `npm run test:e2e`
  // works standalone instead of requiring a manually-started server.
  webServer: {
    command: "npm run dev",
    url: "http://localhost:5173",
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
