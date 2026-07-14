import { test, expect } from "@playwright/test";

test.describe("AI Assistant", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("/dashboard");
    await page.getByText("AI Assistant").click();
  });

  test("AI Assistant page loads", async ({ page }) => {
    await expect(
      page.getByText("AI Assistant")
    ).toBeVisible();
  });

  test("Chat input is visible", async ({ page }) => {
    await expect(
      page.getByPlaceholder(/Ask/i)
    ).toBeVisible();
  });

  test("Send button is visible", async ({ page }) => {
    await expect(
      page.getByRole("button")
    ).toBeVisible();
  });

  test("User can type a message", async ({ page }) => {
    const input = page.getByPlaceholder(/Ask/i);

    await input.fill("Show current risk");

    await expect(input).toHaveValue("Show current risk");
  });

});