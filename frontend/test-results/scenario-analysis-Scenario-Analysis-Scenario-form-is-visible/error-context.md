# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: scenario-analysis.spec.js >> Scenario Analysis >> Scenario form is visible
- Location: e2e\scenario-analysis.spec.js:11:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: /Generate AI Briefing/i })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: /Generate AI Briefing/i })

```

```yaml
- banner:
  - link "ArenaPilot Home":
    - /url: /
    - img
    - heading "ArenaPilot" [level=1]
    - paragraph: AI Operations Copilot
  - navigation:
    - link "Platform":
      - /url: /
    - link "Operations":
      - /url: /dashboard
    - link "About Us":
      - /url: /about
- main:
  - text: AI Powered Stadium Operations Platform
  - heading "Smart Stadium Operations Copilot" [level=1]
  - paragraph: ArenaPilot AI helps organizers, volunteers and venue staff manage navigation, crowd flow, multilingual assistance, transportation, sustainability and operational decisions during the FIFA World Cup 2026 using Google Gemini.
  - link "Open Live Stadium Dashboard":
    - /url: /dashboard
    - text: Launch Dashboard
  - link "Learn more about ArenaPilot AI and FIFA World Cup 2026 Smart Stadium platform":
    - /url: /about
    - text: About ArenaPilot AI
  - heading "Live Operations Preview" [level=3]
  - text: Live
  - heading "Navigation Request" [level=4]
  - paragraph: Section B12
  - text: Optimized Route
  - paragraph: "Fastest accessible path calculated. Estimated arrival time: 4 minutes."
  - text: AI Workflow
  - heading "From Stadium Situation to Intelligent Decisions" [level=2]
  - paragraph: ArenaPilot AI transforms operational data into clear, actionable recommendations that help organizers make faster and more informed decisions during live events.
  - text: "01"
  - heading "Capture Stadium Situation" [level=3]
  - paragraph: Operators enter live stadium conditions including crowd density, weather, transportation updates, gate status, incidents, and accessibility requests.
  - text: "02"
  - heading "AI Understands the Context" [level=3]
  - paragraph: ArenaPilot AI uses Google Gemini to analyze the complete operational context instead of evaluating isolated events.
  - text: "03"
  - heading "Generate Operational Plan" [level=3]
  - paragraph: The AI produces structured recommendations for navigation, crowd flow, multilingual announcements, transportation, sustainability, and emergency response.
  - text: "04"
  - heading "Execute With Confidence" [level=3]
  - paragraph: Venue staff receive prioritized actions that help improve fan experience, operational efficiency, and overall stadium safety.
  - text: Interactive Demo
  - heading "Experience ArenaPilot AI" [level=2]
  - paragraph: Select a real stadium scenario and preview how ArenaPilot AI generates operational recommendations.
  - button "Crowd Congestion Heavy crowd detected near Gate A before kickoff.":
    - heading "Crowd Congestion" [level=3]
    - paragraph: Heavy crowd detected near Gate A before kickoff.
  - button "Transport Delay Metro service delayed by 15 minutes.":
    - heading "Transport Delay" [level=3]
    - paragraph: Metro service delayed by 15 minutes.
  - button "Medical Emergency Medical assistance requested in Section B.":
    - heading "Medical Emergency" [level=3]
    - paragraph: Medical assistance requested in Section B.
  - button "Language Support Spanish-speaking visitors need assistance.":
    - heading "Language Support" [level=3]
    - paragraph: Spanish-speaking visitors need assistance.
  - button "Waste Overflow Food court waste bins nearing capacity.":
    - heading "Waste Overflow" [level=3]
    - paragraph: Food court waste bins nearing capacity.
  - heading "AI Recommendation" [level=3]
  - text: "Priority: High • Redirect spectators to Gates C and D • Deploy two volunteers for crowd guidance • Update digital signboards immediately • Broadcast multilingual announcements • Monitor crowd density every 2 minutes"
  - link "Try Full Dashboard":
    - /url: /dashboard
- contentinfo:
  - paragraph: © 2026 ArenaPilot AI. All rights reserved.
  - link "View ArenaPilot AI source code on GitHub":
    - /url: https://github.com/Fahad035/arenapilot-ai-fifa2026
    - img
  - text: Built with React + Gemini
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | 
  3   | test.describe("Scenario Analysis", () => {
  4   |   test.beforeEach(async ({ page }) => {
  5   |     await page.goto("/");
  6   | 
  7   |     // Wait until the home page is fully rendered
  8   |     await expect(page.locator("body")).toBeVisible();
  9   |   });
  10  | 
  11  |   test("Scenario form is visible", async ({ page }) => {
  12  |     await expect(
  13  |       page.getByRole("button", {
  14  |         name: /Generate AI Briefing/i,
  15  |       })
> 16  |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
  17  | 
  18  |     await expect(
  19  |       page.locator("input")
  20  |     ).toHaveCount(await page.locator("input").count());
  21  |   });
  22  | 
  23  |   test("Scenario form accepts user input", async ({ page }) => {
  24  |     const inputs = page.locator("input");
  25  | 
  26  |     const totalInputs = await inputs.count();
  27  | 
  28  |     for (let i = 0; i < totalInputs; i++) {
  29  |       await inputs.nth(i).fill(`Test ${i + 1}`);
  30  |     }
  31  | 
  32  |     for (let i = 0; i < totalInputs; i++) {
  33  |       await expect(inputs.nth(i)).not.toHaveValue("");
  34  |     }
  35  |   });
  36  | 
  37  |   test("Generate AI Briefing button is clickable", async ({ page }) => {
  38  |     const button = page.getByRole("button", {
  39  |       name: /Generate AI Briefing/i,
  40  |     });
  41  | 
  42  |     await expect(button).toBeEnabled();
  43  | 
  44  |     await button.click();
  45  | 
  46  |     // Loading indicator OR navigation OR AI response
  47  |     await page.waitForLoadState("networkidle");
  48  |   });
  49  | 
  50  |   test("AI response area appears after generation", async ({ page }) => {
  51  |     const inputs = page.locator("input");
  52  | 
  53  |     const totalInputs = await inputs.count();
  54  | 
  55  |     for (let i = 0; i < totalInputs; i++) {
  56  |       await inputs.nth(i).fill("Demo");
  57  |     }
  58  | 
  59  |     await page
  60  |       .getByRole("button", {
  61  |         name: /Generate AI Briefing/i,
  62  |       })
  63  |       .click();
  64  | 
  65  |     await page.waitForLoadState("networkidle");
  66  | 
  67  |     // Your project renders the dashboard after analysis
  68  |     await expect(page).toHaveURL(/dashboard/);
  69  |   });
  70  | 
  71  |   test("Dashboard renders after successful analysis", async ({ page }) => {
  72  |     const inputs = page.locator("input");
  73  | 
  74  |     const totalInputs = await inputs.count();
  75  | 
  76  |     for (let i = 0; i < totalInputs; i++) {
  77  |       await inputs.nth(i).fill("Test");
  78  |     }
  79  | 
  80  |     await page
  81  |       .getByRole("button", {
  82  |         name: /Generate AI Briefing/i,
  83  |       })
  84  |       .click();
  85  | 
  86  |     await page.waitForLoadState("networkidle");
  87  | 
  88  |     await expect(
  89  |       page.locator("main")
  90  |     ).toBeVisible();
  91  |   });
  92  | 
  93  |   test("No unexpected error is shown", async ({ page }) => {
  94  |     const inputs = page.locator("input");
  95  | 
  96  |     const totalInputs = await inputs.count();
  97  | 
  98  |     for (let i = 0; i < totalInputs; i++) {
  99  |       await inputs.nth(i).fill("Demo");
  100 |     }
  101 | 
  102 |     await page
  103 |       .getByRole("button", {
  104 |         name: /Generate AI Briefing/i,
  105 |       })
  106 |       .click();
  107 | 
  108 |     await page.waitForLoadState("networkidle");
  109 | 
  110 |     await expect(page.locator("body")).not.toContainText(
  111 |       /Cannot GET|404|Internal Server Error|Something went wrong/i
  112 |     );
  113 |   });
  114 | });
```