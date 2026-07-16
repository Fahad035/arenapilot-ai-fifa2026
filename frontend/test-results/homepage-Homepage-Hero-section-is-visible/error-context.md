# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage.spec.js >> Homepage >> Hero section is visible
- Location: e2e\homepage.spec.js:13:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/Operations Copilot/i)
Expected: visible
Error: strict mode violation: getByText(/Operations Copilot/i) resolved to 2 elements:
    1) <p class="font-body text-sm text-slate-400">AI Operations Copilot</p> aka getByRole('link', { name: 'ArenaPilot Home' })
    2) <span class="block bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Operations Copilot</span> aka getByText('Operations Copilot', { exact: true })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(/Operations Copilot/i)

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - link "ArenaPilot Home" [ref=e6] [cursor=pointer]:
        - /url: /
        - img [ref=e8]
        - generic [ref=e14]:
          - heading "ArenaPilot" [level=1] [ref=e15]
          - paragraph [ref=e16]: AI Operations Copilot
      - navigation [ref=e17]:
        - link "Platform" [ref=e18] [cursor=pointer]:
          - /url: /
        - link "Operations" [ref=e19] [cursor=pointer]:
          - /url: /dashboard
        - link "About Us" [ref=e20] [cursor=pointer]:
          - /url: /about
  - main [ref=e21]:
    - generic [ref=e26]:
      - generic [ref=e27]:
        - generic [ref=e28]:
          - img [ref=e29]
          - text: AI Powered Stadium Operations Platform
        - heading "Smart Stadium Operations Copilot" [level=1] [ref=e32]:
          - text: Smart Stadium
          - generic [ref=e33]: Operations Copilot
        - paragraph [ref=e34]: ArenaPilot AI helps organizers, volunteers and venue staff manage navigation, crowd flow, multilingual assistance, transportation, sustainability and operational decisions during the FIFA World Cup 2026 using Google Gemini.
        - generic [ref=e35]:
          - link "Open Live Stadium Dashboard" [ref=e36] [cursor=pointer]:
            - /url: /dashboard
            - text: Launch Dashboard
            - img [ref=e37]
          - link "Learn more about ArenaPilot AI and FIFA World Cup 2026 Smart Stadium platform" [ref=e39] [cursor=pointer]:
            - /url: /about
            - text: About ArenaPilot AI
      - generic [ref=e41]:
        - generic [ref=e42]:
          - generic [ref=e43]:
            - img [ref=e44]
            - heading "Live Operations Preview" [level=3] [ref=e47]
          - generic [ref=e48]: Live
        - generic [ref=e50]:
          - generic [ref=e51]:
            - img [ref=e53]
            - generic [ref=e55]:
              - heading "Crowd Congestion" [level=4] [ref=e56]
              - paragraph [ref=e57]: Gate A
          - generic [ref=e58]: High Priority
          - paragraph [ref=e59]: AI detected increasing congestion near Gate A. Recommend redirecting spectators to Gate C.
    - generic [ref=e67]:
      - generic [ref=e68]:
        - text: AI Workflow
        - heading "From Stadium Situation to Intelligent Decisions" [level=2] [ref=e69]:
          - text: From Stadium Situation to
          - generic [ref=e70]: Intelligent Decisions
        - paragraph [ref=e71]: ArenaPilot AI transforms operational data into clear, actionable recommendations that help organizers make faster and more informed decisions during live events.
      - generic [ref=e74]:
        - generic [ref=e75]:
          - generic [ref=e76]: "01"
          - img [ref=e78]
          - generic [ref=e81]:
            - heading "Capture Stadium Situation" [level=3] [ref=e82]
            - paragraph [ref=e83]: Operators enter live stadium conditions including crowd density, weather, transportation updates, gate status, incidents, and accessibility requests.
        - generic [ref=e84]:
          - generic [ref=e85]: "02"
          - img [ref=e87]
          - generic [ref=e99]:
            - heading "AI Understands the Context" [level=3] [ref=e100]
            - paragraph [ref=e101]: ArenaPilot AI uses Google Gemini to analyze the complete operational context instead of evaluating isolated events.
        - generic [ref=e102]:
          - generic [ref=e103]: "03"
          - img [ref=e105]
          - generic [ref=e108]:
            - heading "Generate Operational Plan" [level=3] [ref=e109]
            - paragraph [ref=e110]: The AI produces structured recommendations for navigation, crowd flow, multilingual announcements, transportation, sustainability, and emergency response.
        - generic [ref=e111]:
          - generic [ref=e112]: "04"
          - img [ref=e114]
          - generic [ref=e117]:
            - heading "Execute With Confidence" [level=3] [ref=e118]
            - paragraph [ref=e119]: Venue staff receive prioritized actions that help improve fan experience, operational efficiency, and overall stadium safety.
    - generic [ref=e121]:
      - generic [ref=e122]:
        - text: Interactive Demo
        - heading "Experience ArenaPilot AI" [level=2] [ref=e123]
        - paragraph [ref=e124]: Select a real stadium scenario and preview how ArenaPilot AI generates operational recommendations.
      - generic [ref=e125]:
        - generic [ref=e126]:
          - button "Crowd Congestion Heavy crowd detected near Gate A before kickoff." [ref=e127]:
            - generic [ref=e128]:
              - img [ref=e130]
              - generic [ref=e135]:
                - heading "Crowd Congestion" [level=3] [ref=e136]
                - paragraph [ref=e137]: Heavy crowd detected near Gate A before kickoff.
          - button "Transport Delay Metro service delayed by 15 minutes." [ref=e138]:
            - generic [ref=e139]:
              - img [ref=e141]
              - generic [ref=e145]:
                - heading "Transport Delay" [level=3] [ref=e146]
                - paragraph [ref=e147]: Metro service delayed by 15 minutes.
          - button "Medical Emergency Medical assistance requested in Section B." [ref=e148]:
            - generic [ref=e149]:
              - img [ref=e151]
              - generic [ref=e153]:
                - heading "Medical Emergency" [level=3] [ref=e154]
                - paragraph [ref=e155]: Medical assistance requested in Section B.
          - button "Language Support Spanish-speaking visitors need assistance." [ref=e156]:
            - generic [ref=e157]:
              - img [ref=e159]
              - generic [ref=e163]:
                - heading "Language Support" [level=3] [ref=e164]
                - paragraph [ref=e165]: Spanish-speaking visitors need assistance.
          - button "Waste Overflow Food court waste bins nearing capacity." [ref=e166]:
            - generic [ref=e167]:
              - img [ref=e169]
              - generic [ref=e172]:
                - heading "Waste Overflow" [level=3] [ref=e173]
                - paragraph [ref=e174]: Food court waste bins nearing capacity.
        - generic [ref=e175]:
          - generic [ref=e176]:
            - img [ref=e177]
            - heading "AI Recommendation" [level=3] [ref=e180]
          - generic [ref=e181]: "Priority: High • Redirect spectators to Gates C and D • Deploy two volunteers for crowd guidance • Update digital signboards immediately • Broadcast multilingual announcements • Monitor crowd density every 2 minutes"
          - link "Try Full Dashboard" [ref=e182] [cursor=pointer]:
            - /url: /dashboard
            - text: Try Full Dashboard
            - img [ref=e183]
  - contentinfo [ref=e185]:
    - generic [ref=e186]:
      - paragraph [ref=e187]: © 2026 ArenaPilot AI. All rights reserved.
      - generic [ref=e188]:
        - link "View ArenaPilot AI source code on GitHub" [ref=e189] [cursor=pointer]:
          - /url: https://github.com/Fahad035/arenapilot-ai-fifa2026
          - img [ref=e190]
        - generic [ref=e192]:
          - generic [ref=e193]: Built with
          - generic [ref=e194]: React + Gemini
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
> 22 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
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
  36 |     await expect(dashboardButton).toBeVisible();
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