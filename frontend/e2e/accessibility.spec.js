    import { test, expect } from "@playwright/test";

test("Images have alt text", async ({ page }) => {
  await page.goto("/");

  const images = page.locator("img");

  const count = await images.count();

  for (let i = 0; i < count; i++) {
    await expect(images.nth(i)).toHaveAttribute("alt");
  }
});

test("Buttons are visible", async ({ page }) => {
  await page.goto("/");

  const buttons = page.locator("button");

  await expect(buttons.first()).toBeVisible();
});

test("Inputs are accessible", async ({ page }) => {
  await page.goto("/dashboard");

  const inputs = page.locator("input");

  if (await inputs.count()) {
    await expect(inputs.first()).toBeVisible();
  }
});

test("Page has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/ArenaPilot/i);
});