import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("Navigate from Home to Dashboard", async ({ page }) => {
    await page.goto("/");

    await page
      .getByRole("link", {
        name: /Launch Dashboard/i,
      })
      .click();

    await expect(page).toHaveURL(/dashboard/);
  });

  test("Navigate from Home to About", async ({ page }) => {
    await page.goto("/");

    await page
      .getByRole("link", {
        name: /About ArenaPilot AI/i,
      })
      .click();

    await expect(page).toHaveURL(/about/);
  });

  test("Sidebar navigation - Overview", async ({ page }) => {
    await page.goto("/dashboard");

    await page
      .getByRole("button", {
        name: /Overview/i,
      })
      .click();

    await expect(
      page.getByRole("button", {
        name: /Overview/i,
      })
    ).toBeVisible();
  });

  test("Sidebar navigation - Crowd", async ({ page }) => {
    await page.goto("/dashboard");

    const crowdTab = page.getByRole("button", {
      name: /Crowd/i,
    });

    if (await crowdTab.count()) {
      await crowdTab.click();

      await expect(crowdTab).toBeVisible();
    }
  });

  test("Sidebar navigation - Alerts", async ({ page }) => {
    await page.goto("/dashboard");

    const alertsTab = page.getByRole("button", {
      name: /Alerts/i,
    });

    await alertsTab.click();

    await expect(
      page.getByText(/Alert|Live Alerts/i)
    ).toBeVisible();
  });

  test("Sidebar navigation - AI Assistant", async ({ page }) => {
    await page.goto("/dashboard");

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

  test("Sidebar navigation - Settings", async ({ page }) => {
    await page.goto("/dashboard");

    const settingsTab = page.getByRole("button", {
      name: /Settings/i,
    });

    if (await settingsTab.count()) {
      await settingsTab.click();

      await expect(
        page.getByText(/Settings/i)
      ).toBeVisible();
    }
  });

  test("Browser Back and Forward Navigation", async ({ page }) => {
    await page.goto("/");

    await page
      .getByRole("link", {
        name: /Launch Dashboard/i,
      })
      .click();

    await expect(page).toHaveURL(/dashboard/);

    await page.goBack();

    await expect(page).toHaveURL("/");

    await page.goForward();

    await expect(page).toHaveURL(/dashboard/);
  });
});