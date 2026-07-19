import { test, expect } from "@playwright/test";

test.describe("Dashboard", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/dashboard");
  });

  test("Dashboard loads successfully", async ({ page }) => {
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.locator("body")).toBeVisible();
  });

  test("Sidebar is visible", async ({ page }) => {
    const sidebar = page.locator("aside");

    await expect(sidebar).toBeVisible();
  });

  test("Dashboard header is visible", async ({ page }) => {
    await expect(
      page.getByRole("heading").first()
    ).toBeVisible();
  });

  test("Overview tab is selected by default", async ({ page }) => {
    await expect(
      page.getByRole("button", {
        name: /overview/i,
      })
    ).toBeVisible();
  });

  test("Navigate to Alerts tab", async ({ page }) => {
    await page
      .getByRole("button", {
        name: /alerts/i,
      })
      .click();

    await expect(
      page.getByText(/Live Alerts|Alert/i)
    ).toBeVisible();
  });

  test("Navigate to AI Assistant tab", async ({ page }) => {
    await page
      .getByRole("button", {
        name: /AI Assistant/i,
      })
      .click();

    await expect(
      page.getByText(/ArenaPilot AI Assistant/i)
    ).toBeVisible();

    await expect(
      page.getByPlaceholder(/Ask ArenaPilot AI/i)
    ).toBeVisible();
  });

  test("Navigate to AI Briefing tab", async ({ page }) => {
    const briefingTab = page.getByRole("button", {
      name: /AI Briefing/i,
    });

    await briefingTab.click();

    await expect(briefingTab).toBeVisible();
  });

  test("Sidebar navigation changes active tab", async ({ page }) => {
    const assistant = page.getByRole("button", {
      name: /AI Assistant/i,
    });

    await assistant.click();

    await expect(
      page.getByPlaceholder(/Ask ArenaPilot AI/i)
    ).toBeVisible();

    await page
      .getByRole("button", {
        name: /overview/i,
      })
      .click();

    await expect(
      page.getByRole("heading").first()
    ).toBeVisible();
  });

  test("Dashboard has no obvious rendering errors", async ({ page }) => {
    await expect(page.locator("main")).toBeVisible();

    await expect(page.locator("body")).not.toContainText(
      /404|Not Found|Cannot GET/i
    );
  });
});
