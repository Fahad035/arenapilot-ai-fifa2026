import { test, expect } from "@playwright/test";

test.describe("ArenaPilot AI Assistant", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("/dashboard");

    // Open AI Assistant tab
    await page.getByRole("button", {
      name: /AI Assistant/i,
    }).click();

    await expect(
      page.getByText(/ArenaPilot AI Assistant/i)
    ).toBeVisible();
  });

  test("AI Assistant page loads", async ({ page }) => {
    await expect(
      page.getByPlaceholder(/Ask ArenaPilot AI/i)
    ).toBeVisible();

    await expect(
      page.getByRole("button", {
        name: /Send/i,
      })
    ).toBeVisible();
  });

  test("Suggested prompts are visible", async ({ page }) => {
    await expect(
      page.getByText(/Suggested Prompts/i)
    ).toBeVisible();
  });

  test("User can type a question", async ({ page }) => {
    const input = page.getByPlaceholder(
      /Ask ArenaPilot AI/i
    );

    await input.fill(
      "What is the safest evacuation route?"
    );

    await expect(input).toHaveValue(
      "What is the safest evacuation route?"
    );
  });

  test("User can send a message", async ({ page }) => {
    const input = page.getByPlaceholder(
      /Ask ArenaPilot AI/i
    );

    await input.fill(
      "Summarize the current stadium situation."
    );

    await page.getByRole("button", {
      name: /Send/i,
    }).click();

    await expect(
      page.getByText(
        /Summarize the current stadium situation/i
      )
    ).toBeVisible();
  });

  test("Typing indicator appears", async ({ page }) => {
    const input = page.getByPlaceholder(
      /Ask ArenaPilot AI/i
    );

    await input.fill(
      "Generate crowd analysis."
    );

    await page.getByRole("button", {
      name: /Send/i,
    }).click();

    await expect(
      page.getByText(
        /thinking|analyzing/i
      )
    ).toBeVisible();
  });

  test("Language selector exists", async ({ page }) => {
    await expect(
      page.getByRole("combobox")
    ).toBeVisible();
  });

  test("User can change language", async ({ page }) => {
    const language = page.getByRole("combobox");

    await language.selectOption("Hindi");

    await expect(language).toHaveValue(
      "Hindi"
    );
  });

  test("Export Chat button exists", async ({ page }) => {
    const downloadPromise =
      page.waitForEvent("download");

    await page.getByRole("button", {
      name: /Export Chat/i,
    }).click();

    const download =
      await downloadPromise;

    expect(download.suggestedFilename())
      .toContain("ArenaPilotAI_Chat");
  });

  test("Clear Conversation button exists", async ({ page }) => {
    await expect(
      page.getByRole("button", {
        name: /New Chat|Clear Conversation/i,
      })
    ).toBeVisible();
  });

  test("Conversation resets", async ({ page }) => {
    const input = page.getByPlaceholder(
      /Ask ArenaPilot AI/i
    );

    await input.fill("Hello");

    await page.getByRole("button", {
      name: /Send/i,
    }).click();

    await page.getByRole("button", {
      name: /New Chat|Clear Conversation/i,
    }).click();

    await expect(
      page.getByText(
        /Hello! I'm ArenaPilot AI/i
      )
    ).toBeVisible();
  });

  test("Suggested prompt sends automatically", async ({ page }) => {
    await page
      .getByRole("button", {
        name: /Summarize the current stadium situation/i,
      })
      .click();

    await expect(
      page.getByText(/Summarize the current stadium situation/i).last()
    ).toBeVisible();
  });

  test("Assistant response has Copy button", async ({ page }) => {
    const input = page.getByPlaceholder(
      /Ask ArenaPilot AI/i
    );

    await input.fill("Hello");

    await page.getByRole("button", {
      name: /Send/i,
    }).click();

    await page.waitForTimeout(2000);

    await expect(
      page.getByTitle(/Copy Response/i).first()
    ).toBeVisible();
  });

  test("Assistant response has Listen button", async ({ page }) => {
    const input = page.getByPlaceholder(
      /Ask ArenaPilot AI/i
    );

    await input.fill("Hello");

    await page.getByRole("button", {
      name: /Send/i,
    }).click();

    await page.waitForTimeout(2000);

    await expect(
      page.getByTitle(/Read Aloud/i).first()
    ).toBeVisible();
  });

  test("Reasoning card is displayed", async ({ page }) => {
    const input = page.getByPlaceholder(
      /Ask ArenaPilot AI/i
    );

    await input.fill(
      "Recommend the safest evacuation route."
    );

    await page.getByRole("button", {
      name: /Send/i,
    }).click();

    await page.waitForTimeout(3000);

    await expect(
      page.getByText(/Why ArenaPilot AI Recommended This/i)
    ).toBeVisible();
  });

});
