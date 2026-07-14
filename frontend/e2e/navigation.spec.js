import { test, expect } from "@playwright/test";

test("Navigate to Dashboard", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: /Get Started/i }).click();

  await expect(page).toHaveURL(/dashboard/);
});

test("Overview tab is visible", async ({ page }) => {
  await page.goto("/dashboard");

  await expect(page.getByText("Overview")).toBeVisible();
});

test("Navigate to Alerts tab", async ({ page }) => {
  await page.goto("/dashboard");

  await page.getByText("Alerts").click();

  await expect(page.getByText("Live Alerts")).toBeVisible();
});