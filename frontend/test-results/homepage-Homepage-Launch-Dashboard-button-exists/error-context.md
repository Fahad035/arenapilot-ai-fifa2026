# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage.spec.js >> Homepage >> Launch Dashboard button exists
- Location: e2e\homepage.spec.js:31:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: /Launch Dashboard/i })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: /Launch Dashboard/i })

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
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("Homepage", () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto("/");
  6  |   });
  7  | 
  8  |   test("Homepage loads successfully", async ({ page }) => {
  9  |     await expect(page).toHaveTitle(/ArenaPilot AI/i);
  10 |     await expect(page.locator("body")).toBeVisible();
  11 |   });
  12 | 
  13 |   test("Hero section is visible", async ({ page }) => {
  14 |     await expect(
  15 |       page.getByRole("heading", {
  16 |         name: /Smart Stadium/i,
  17 |       })
  18 |     ).toBeVisible();
  19 | 
  20 |     await expect(
  21 |       page.getByText(/Operations Copilot/i)
  22 |     ).toBeVisible();
  23 |   });
  24 | 
  25 |   test("Hero description is visible", async ({ page }) => {
  26 |     await expect(
  27 |       page.getByText(/ArenaPilot AI helps organizers/i)
  28 |     ).toBeVisible();
  29 |   });
  30 | 
  31 |   test("Launch Dashboard button exists", async ({ page }) => {
  32 |     const dashboardButton = page.getByRole("link", {
  33 |       name: /Launch Dashboard/i,
  34 |     });
  35 | 
> 36 |     await expect(dashboardButton).toBeVisible();
     |                                   ^ Error: expect(locator).toBeVisible() failed
  37 |   });
  38 | 
  39 |   test("About ArenaPilot AI button exists", async ({ page }) => {
  40 |     const aboutButton = page.getByRole("link", {
  41 |       name: /About ArenaPilot AI/i,
  42 |     });
  43 | 
  44 |     await expect(aboutButton).toBeVisible();
  45 |   });
  46 | 
  47 |   test("Dashboard navigation works", async ({ page }) => {
  48 |     await page
  49 |       .getByRole("link", {
  50 |         name: /Launch Dashboard/i,
  51 |       })
  52 |       .click();
  53 | 
  54 |     await expect(page).toHaveURL(/dashboard/);
  55 |   });
  56 | 
  57 |   test("About page navigation works", async ({ page }) => {
  58 |     await page
  59 |       .getByRole("link", {
  60 |         name: /About ArenaPilot AI/i,
  61 |       })
  62 |       .click();
  63 | 
  64 |     await expect(page).toHaveURL(/about/);
  65 |   });
  66 | 
  67 |   test("Workflow section is present", async ({ page }) => {
  68 |     await expect(page.locator("section").nth(1)).toBeVisible();
  69 |   });
  70 | 
  71 |   test("Scenario demo section is present", async ({ page }) => {
  72 |     await expect(page.locator("section").last()).toBeVisible();
  73 |   });
  74 | });
```