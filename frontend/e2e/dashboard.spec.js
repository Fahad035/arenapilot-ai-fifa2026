import { test, expect } from "@playwright/test";

test("Dashboard loads", async ({ page }) => {
  await page.goto("/dashboard");

  await expect(page.getByText("Overview")).toBeVisible();
});

test("Sidebar is visible", async ({ page }) => {
  await page.goto("/dashboard");

  await expect(page.getByText("Crowd Intelligence")).toBeVisible();
  await expect(page.getByText("AI Briefing")).toBeVisible();
  await expect(page.getByText("Alerts")).toBeVisible();
});

test("Collapse sidebar", async ({ page }) => {
  await page.goto("/dashboard");

  await page.locator("button").first().click();

  await expect(page.getByText("Overview")).toBeVisible();
});

test("Overview cards are visible", async ({ page }) => {
  await page.goto("/dashboard");

  await expect(page.getByText("AI Status")).toBeVisible();
  await expect(page.getByText("Crowd Status")).toBeVisible();
});

test("Header changes when Alerts tab is opened", async ({ page }) => {
  await page.goto("/dashboard");

  await page.getByText("Alerts").click();

  await expect(page.getByText("Live Alerts")).toBeVisible();
});