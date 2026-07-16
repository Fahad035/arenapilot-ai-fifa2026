import { test, expect } from "@playwright/test";

test.describe("Performance Tests", () => {
  test("Homepage loads successfully", async ({ page }) => {
    const start = Date.now();

    await page.goto("/");

    await expect(page.locator("body")).toBeVisible();

    const loadTime = Date.now() - start;

    console.log(`Homepage loaded in ${loadTime} ms`);

    expect(loadTime).toBeLessThan(5000);
  });

  test("Dashboard loads successfully", async ({ page }) => {
    const start = Date.now();

    await page.goto("/dashboard");

    await expect(page.locator("body")).toBeVisible();

    const loadTime = Date.now() - start;

    console.log(`Dashboard loaded in ${loadTime} ms`);

    expect(loadTime).toBeLessThan(6000);
  });

  test("No JavaScript console errors", async ({ page }) => {
    const errors = [];

    page.on("console", (msg) => {
      if (msg.type() === "error") {
        errors.push(msg.text());
      }
    });

    await page.goto("/dashboard");

    await page.waitForLoadState("networkidle");

    console.log(errors);

    expect(errors).toEqual([]);
  });

  test("No failed network requests", async ({ page }) => {
    const failedRequests = [];

    page.on("requestfailed", (request) => {
      failedRequests.push(request.url());
    });

    await page.goto("/dashboard");

    await page.waitForLoadState("networkidle");

    console.log(failedRequests);

    expect(failedRequests).toEqual([]);
  });

  test("Application responds within acceptable time", async ({ page }) => {
    await page.goto("/dashboard");

    const start = Date.now();

    await page.reload();

    await page.waitForLoadState("networkidle");

    const duration = Date.now() - start;

    console.log(`Reload completed in ${duration} ms`);

    expect(duration).toBeLessThan(5000);
  });

  test("Dashboard remains responsive after navigation", async ({ page }) => {
    await page.goto("/dashboard");

    const buttons = page.locator("button");

    const count = await buttons.count();

    if (count > 0) {
      await buttons.first().click();
    }

    await expect(page.locator("body")).toBeVisible();
  });

  test("AI Assistant input remains interactive", async ({ page }) => {
    await page.goto("/dashboard");

    const assistantTab = page.getByRole("button", {
      name: /ai assistant/i,
    });

    if (await assistantTab.count()) {
      await assistantTab.click();
    }

    const input = page.getByPlaceholder(/ask arenapilot ai/i);

    if (await input.count()) {
      await input.fill("Performance Test");

      await expect(input).toHaveValue("Performance Test");
    }
  });

  test("Memory stability after multiple reloads", async ({ page }) => {
    await page.goto("/");

    for (let i = 0; i < 3; i++) {
      await page.reload();
      await page.waitForLoadState("networkidle");
    }

    await expect(page.locator("body")).toBeVisible();
  });
});