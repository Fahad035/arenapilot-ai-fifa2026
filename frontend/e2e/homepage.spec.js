import { test, expect } from "@playwright/test";

test("Homepage loads successfully", async ({ page }) => {
  await page.goto("/");

  // Check logo/brand
  await expect(page.getByText("ArenaPilot")).toBeVisible();

  // Check navigation links
  await expect(page.getByRole("link", { name: /Home/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Features/i })).toBeVisible();

  // Check main CTA button
  await expect(
    page.getByRole("link", { name: /Get Started/i })
  ).toBeVisible();
});