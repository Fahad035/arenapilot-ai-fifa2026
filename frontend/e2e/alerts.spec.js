import { test, expect } from "@playwright/test";

test.describe("Alerts Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/dashboard");

    // Open Alerts tab
    await page.getByRole("button", { name: /alerts/i }).click();
  });

  test("Alerts tab opens", async ({ page }) => {
    await expect(
      page.getByRole("heading", {
        name: /alerts/i,
      })
    ).toBeVisible();
  });

  test("Alert summary cards are displayed", async ({ page }) => {
    await expect(
      page.getByText(/critical/i).first()
    ).toBeVisible();

    await expect(
      page.getByText(/warning/i).first()
    ).toBeVisible();
  });

  test("Live alerts section is visible", async ({ page }) => {
    await expect(
      page.getByText(/live alerts/i)
    ).toBeVisible();
  });

  test("Emergency actions section is visible", async ({ page }) => {
    await expect(
      page.getByText(/emergency actions/i)
    ).toBeVisible();
  });

  test("Alert history section is visible", async ({ page }) => {
    await expect(
      page.getByText(/alert history/i)
    ).toBeVisible();
  });

  test("Alert statistics section is visible", async ({ page }) => {
    const stats = page.getByText(/statistics/i);

    if (await stats.count()) {
      await expect(stats.first()).toBeVisible();
    }
  });

  test("Refresh button exists if available", async ({ page }) => {
    const refresh = page.getByRole("button", {
      name: /refresh/i,
    });

    if (await refresh.count()) {
      await expect(refresh).toBeVisible();
    }
  });

  test("Page has no crash after loading", async ({ page }) => {
    await expect(page.locator("body")).toBeVisible();
  });
});