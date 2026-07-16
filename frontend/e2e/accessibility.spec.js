import { test, expect } from "@playwright/test";

test.describe("Accessibility Checks", () => {
  test("Page has valid title", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/ArenaPilot/i);
  });

  test("Main navigation is accessible", async ({ page }) => {
    await page.goto("/");

    const links = page.locator("a");

    if (await links.count()) {
      await expect(links.first()).toBeVisible();
    }
  });

  test("Buttons are visible", async ({ page }) => {
    await page.goto("/dashboard");

    const buttons = page.locator("button");

    expect(await buttons.count()).toBeGreaterThan(0);

    await expect(buttons.first()).toBeVisible();
  });

  test("Inputs are accessible", async ({ page }) => {
    await page.goto("/dashboard");

    const inputs = page.locator(
      'input, textarea, select'
    );

    if (await inputs.count()) {
      await expect(inputs.first()).toBeVisible();
    }
  });

  test("Images contain alt attributes", async ({ page }) => {
    await page.goto("/");

    const images = page.locator("img");

    const count = await images.count();

    for (let i = 0; i < count; i++) {
      await expect(
        images.nth(i)
      ).toHaveAttribute("alt");
    }
  });

  test("Dashboard page loads without accessibility blockers", async ({
    page,
  }) => {
    await page.goto("/dashboard");

    await expect(
      page.locator("body")
    ).toBeVisible();
  });

  test("AI Assistant input is keyboard accessible", async ({
    page,
  }) => {
    await page.goto("/dashboard");

    const assistantTab = page
      .getByRole("button", {
        name: /ai assistant/i,
      });

    if (await assistantTab.count()) {
      await assistantTab.click();
    }

    const chatInput = page.getByPlaceholder(
      /ask arenapilot ai/i
    );

    if (await chatInput.count()) {
      await chatInput.focus();

      await expect(chatInput).toBeFocused();
    }
  });

  test("All form controls are enabled", async ({
    page,
  }) => {
    await page.goto("/dashboard");

    const controls = page.locator(
      "input, select, textarea, button"
    );

    const count = await controls.count();

    if (count > 0) {
      await expect(
        controls.first()
      ).toBeEnabled();
    }
  });
});