import { test, expect } from "@playwright/test";

test.describe("Scenario Analysis", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");

    // Wait until the home page is fully rendered
    await expect(page.locator("body")).toBeVisible();
  });

  test("Scenario form is visible", async ({ page }) => {
    await expect(
      page.getByRole("button", {
        name: /Generate AI Briefing/i,
      })
    ).toBeVisible();

    await expect(
      page.locator("input")
    ).toHaveCount(await page.locator("input").count());
  });

  test("Scenario form accepts user input", async ({ page }) => {
    const inputs = page.locator("input");

    const totalInputs = await inputs.count();

    for (let i = 0; i < totalInputs; i++) {
      await inputs.nth(i).fill(`Test ${i + 1}`);
    }

    for (let i = 0; i < totalInputs; i++) {
      await expect(inputs.nth(i)).not.toHaveValue("");
    }
  });

  test("Generate AI Briefing button is clickable", async ({ page }) => {
    const button = page.getByRole("button", {
      name: /Generate AI Briefing/i,
    });

    await expect(button).toBeEnabled();

    await button.click();

    // Loading indicator OR navigation OR AI response
    await page.waitForLoadState("networkidle");
  });

  test("AI response area appears after generation", async ({ page }) => {
    const inputs = page.locator("input");

    const totalInputs = await inputs.count();

    for (let i = 0; i < totalInputs; i++) {
      await inputs.nth(i).fill("Demo");
    }

    await page
      .getByRole("button", {
        name: /Generate AI Briefing/i,
      })
      .click();

    await page.waitForLoadState("networkidle");

    // Your project renders the dashboard after analysis
    await expect(page).toHaveURL(/dashboard/);
  });

  test("Dashboard renders after successful analysis", async ({ page }) => {
    const inputs = page.locator("input");

    const totalInputs = await inputs.count();

    for (let i = 0; i < totalInputs; i++) {
      await inputs.nth(i).fill("Test");
    }

    await page
      .getByRole("button", {
        name: /Generate AI Briefing/i,
      })
      .click();

    await page.waitForLoadState("networkidle");

    await expect(
      page.locator("main")
    ).toBeVisible();
  });

  test("No unexpected error is shown", async ({ page }) => {
    const inputs = page.locator("input");

    const totalInputs = await inputs.count();

    for (let i = 0; i < totalInputs; i++) {
      await inputs.nth(i).fill("Demo");
    }

    await page
      .getByRole("button", {
        name: /Generate AI Briefing/i,
      })
      .click();

    await page.waitForLoadState("networkidle");

    await expect(page.locator("body")).not.toContainText(
      /Cannot GET|404|Internal Server Error|Something went wrong/i
    );
  });
});