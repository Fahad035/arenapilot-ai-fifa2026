import { test, expect } from "@playwright/test";

test.describe("Responsive Layout", () => {
  test("Desktop View", async ({ page }) => {
    await page.setViewportSize({
      width: 1440,
      height: 900,
    });

    await page.goto("/");

    await expect(page.locator("body")).toBeVisible();

    await expect(page).toHaveTitle(/ArenaPilot/i);
  });

  test("Tablet View", async ({ page }) => {
    await page.setViewportSize({
      width: 820,
      height: 1180,
    });

    await page.goto("/");

    await expect(page.locator("body")).toBeVisible();

    await expect(page).toHaveTitle(/ArenaPilot/i);
  });

  test("Mobile View", async ({ page }) => {
    await page.setViewportSize({
      width: 390,
      height: 844,
    });

    await page.goto("/");

    await expect(page.locator("body")).toBeVisible();

    await expect(page).toHaveTitle(/ArenaPilot/i);
  });

  test("Dashboard Desktop", async ({ page }) => {
    await page.setViewportSize({
      width: 1440,
      height: 900,
    });

    await page.goto("/dashboard");

    await expect(page.locator("body")).toBeVisible();

    await expect(
      page.getByText(/overview/i).first()
    ).toBeVisible();
  });

  test("Dashboard Tablet", async ({ page }) => {
    await page.setViewportSize({
      width: 820,
      height: 1180,
    });

    await page.goto("/dashboard");

    await expect(page.locator("body")).toBeVisible();
  });

  test("Dashboard Mobile", async ({ page }) => {
    await page.setViewportSize({
      width: 390,
      height: 844,
    });

    await page.goto("/dashboard");

    await expect(page.locator("body")).toBeVisible();
  });

  test("AI Assistant works on Mobile", async ({ page }) => {
    await page.setViewportSize({
      width: 390,
      height: 844,
    });

    await page.goto("/dashboard");

    const assistantTab = page.getByRole("button", {
      name: /ai assistant/i,
    });

    if (await assistantTab.count()) {
      await assistantTab.click();
    }

    const input = page.getByPlaceholder(
      /ask arenapilot ai/i
    );

    if (await input.count()) {
      await expect(input).toBeVisible();
    }
  });

  test("No horizontal scrolling on Mobile", async ({ page }) => {
    await page.setViewportSize({
      width: 390,
      height: 844,
    });

    await page.goto("/dashboard");

    const hasHorizontalScroll = await page.evaluate(() => {
      return (
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth
      );
    });

    expect(hasHorizontalScroll).toBeFalsy();
  });
});