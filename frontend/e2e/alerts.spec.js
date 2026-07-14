import { test, expect } from "@playwright/test";

test.describe("Alerts Page", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("/dashboard");

    // Open Alerts tab
    await page.getByText("Alerts").click();
  });

  test("Alerts page loads", async ({ page }) => {
    await expect(
      page.getByText("Live Alerts")
    ).toBeVisible();
  });

  test("Summary cards are visible", async ({ page }) => {
    await expect(
      page.getByText("Critical Alerts")
    ).toBeVisible();

    await expect(
      page.getByText("High Priority")
    ).toBeVisible();
  });

  test("Live Alerts section is visible", async ({ page }) => {
    await expect(
      page.getByText("Live Alerts")
    ).toBeVisible();
  });

  test("Emergency Actions section is visible", async ({ page }) => {
    await expect(
      page.getByText("Emergency Actions")
    ).toBeVisible();
  });

  test("Alert Statistics section is visible", async ({ page }) => {
    await expect(
      page.getByText("Alert Statistics")
    ).toBeVisible();
  });

  test("Alert History section is visible", async ({ page }) => {
    await expect(
      page.getByText("Alert History")
    ).toBeVisible();
  });

});