import { test, expect } from "@playwright/test";

test.describe("Smoke Tests", () => {
  test("Application loads successfully", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/ArenaPilot AI/i);

    await expect(page.locator("body")).toBeVisible();
  });

  test("Home page renders", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        name: /ArenaPilot AI/i,
      }).first()
    ).toBeVisible();
  });

  test("Dashboard route is reachable", async ({ page }) => {
    await page.goto("/dashboard");

    await expect(page).toHaveURL(/dashboard/);

    await expect(page.locator("body")).toBeVisible();
  });

  test("About page is reachable", async ({ page }) => {
    await page.goto("/about");

    await expect(page).toHaveURL(/about/);

    await expect(page.locator("body")).toBeVisible();
  });
});