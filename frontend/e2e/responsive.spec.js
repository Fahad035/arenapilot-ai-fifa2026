import { test, expect } from "@playwright/test";

test("Desktop View", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });

  await page.goto("/");

  await expect(page.getByText("ArenaPilot")).toBeVisible();
});

test("Tablet View", async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1024 });

  await page.goto("/");

  await expect(page.getByText("ArenaPilot")).toBeVisible();
});

test("Mobile View", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });

  await page.goto("/");

  await expect(page.getByText("ArenaPilot")).toBeVisible();
});

test("Dashboard Responsive", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });

  await page.goto("/dashboard");

  await expect(page.getByText("Overview")).toBeVisible();
});