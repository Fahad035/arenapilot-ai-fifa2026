import { test, expect } from "@playwright/test";

test("Generate AI Briefing", async ({ page }) => {
  await page.goto("/dashboard");

  // Fill Scenario Form
  await page.getByLabel(/Stadium/i).selectOption({ index: 1 });
  await page.getByLabel(/Match/i).selectOption({ index: 1 });
  await page.getByLabel(/Incident/i).selectOption({ index: 1 });
  await page.getByLabel(/Priority/i).selectOption({ index: 1 });

  await page.getByPlaceholder(/Attendance/i).fill("50000");

  // Submit
  await page.getByRole("button", {
    name: /Generate AI Briefing/i,
  }).click();

  // Wait for AI response
  await page.waitForTimeout(3000);

  // Verify result
  await expect(
    page.getByText(/Executive Summary/i)
  ).toBeVisible();
});

test("Scenario form validation", async ({ page }) => {
  await page.goto("/dashboard");

  await page.getByRole("button", {
    name: /Generate AI Briefing/i,
  }).click();

  await expect(page).toHaveURL(/dashboard/);
});

test("AI response section is displayed", async ({ page }) => {
  await page.goto("/dashboard");

  await expect(
    page.getByText(/Executive Summary/i)
  ).toBeVisible();
});