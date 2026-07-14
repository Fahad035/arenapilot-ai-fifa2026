import { test, expect } from "@playwright/test";

test("Homepage loads successfully", async ({ page }) => {
  const start = Date.now();

  await page.goto("/");

  const end = Date.now();

  expect(end - start).toBeLessThan(5000);
});

test("Dashboard loads successfully", async ({ page }) => {
  const start = Date.now();

  await page.goto("/dashboard");

  const end = Date.now();

  expect(end - start).toBeLessThan(5000);
});

test("No console errors", async ({ page }) => {
  const errors = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      errors.push(msg.text());
    }
  });

  await page.goto("/");

  expect(errors).toHaveLength(0);
});