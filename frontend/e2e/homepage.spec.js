import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Homepage loads successfully", async ({ page }) => {
    await expect(page).toHaveTitle(/ArenaPilot AI/i);
    await expect(page.locator("body")).toBeVisible();
  });

  test("Hero section is visible", async ({ page }) => {
    await expect(
      page.getByRole("heading", {
        name: /Smart Stadium/i,
      })
    ).toBeVisible();

    await expect(
      page.getByText(/Operations Copilot/i)
    ).toBeVisible();
  });

  test("Hero description is visible", async ({ page }) => {
    await expect(
      page.getByText(/ArenaPilot AI helps organizers/i)
    ).toBeVisible();
  });

  test("Launch Dashboard button exists", async ({ page }) => {
    const dashboardButton = page.getByRole("link", {
      name: /Open Live Stadium Dashboard/i,
    });

    await expect(dashboardButton).toBeVisible();
  });

  test("About ArenaPilot AI button exists", async ({ page }) => {
    const aboutButton = page.getByRole("link", {
      name: /About ArenaPilot AI/i,
    });

    await expect(aboutButton).toBeVisible();
  });

  test("Dashboard navigation works", async ({ page }) => {
    await page
      .getByRole("link", {
        name: /Open Live Stadium Dashboard/i,
      })
      .click();

    await expect(page).toHaveURL(/dashboard/);
  });

  test("About page navigation works", async ({ page }) => {
    await page
      .getByRole("link", {
        name: /About ArenaPilot AI/i,
      })
      .click();

    await expect(page).toHaveURL(/about/);
  });

  test("Workflow section is present", async ({ page }) => {
    await expect(page.locator("section").nth(1)).toBeVisible();
  });

  test("Scenario demo section is present", async ({ page }) => {
    await expect(page.locator("section").last()).toBeVisible();
  });
});
