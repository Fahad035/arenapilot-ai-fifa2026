# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage.spec.js >> Homepage >> Dashboard navigation works
- Location: e2e\homepage.spec.js:47:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: /Launch Dashboard/i })

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
            - generic [ref=e57]:
              - heading "Transport Update" [level=4] [ref=e58]
              - paragraph [ref=e59]: Metro Station
          - generic [ref=e60]: Delay Detected
          - paragraph [ref=e61]: Shuttle delay detected. AI recommends Bus Route 2 as the fastest alternative.
    - generic [ref=e69]:
      - generic [ref=e70]:
        - text: AI Workflow
        - heading "From Stadium Situation to Intelligent Decisions" [level=2] [ref=e71]:
          - text: From Stadium Situation to
          - generic [ref=e72]: Intelligent Decisions
        - paragraph [ref=e73]: ArenaPilot AI transforms operational data into clear, actionable recommendations that help organizers make faster and more informed decisions during live events.
      - generic [ref=e76]:
        - generic [ref=e77]:
          - generic [ref=e78]: "01"
          - img [ref=e80]
          - generic [ref=e83]:
            - heading "Capture Stadium Situation" [level=3] [ref=e84]
            - paragraph [ref=e85]: Operators enter live stadium conditions including crowd density, weather, transportation updates, gate status, incidents, and accessibility requests.
        - generic [ref=e86]:
          - generic [ref=e87]: "02"
          - img [ref=e89]
          - generic [ref=e101]:
            - heading "AI Understands the Context" [level=3] [ref=e102]
            - paragraph [ref=e103]: ArenaPilot AI uses Google Gemini to analyze the complete operational context instead of evaluating isolated events.
        - generic [ref=e104]:
          - generic [ref=e105]: "03"
          - img [ref=e107]
          - generic [ref=e110]:
            - heading "Generate Operational Plan" [level=3] [ref=e111]
            - paragraph [ref=e112]: The AI produces structured recommendations for navigation, crowd flow, multilingual announcements, transportation, sustainability, and emergency response.
        - generic [ref=e113]:
          - generic [ref=e114]: "04"
          - img [ref=e116]
          - generic [ref=e119]:
            - heading "Execute With Confidence" [level=3] [ref=e120]
            - paragraph [ref=e121]: Venue staff receive prioritized actions that help improve fan experience, operational efficiency, and overall stadium safety.
    - generic [ref=e123]:
      - generic [ref=e124]:
        - text: Interactive Demo
        - heading "Experience ArenaPilot AI" [level=2] [ref=e125]
        - paragraph [ref=e126]: Select a real stadium scenario and preview how ArenaPilot AI generates operational recommendations.
      - generic [ref=e127]:
        - generic [ref=e128]:
          - button "Crowd Congestion Heavy crowd detected near Gate A before kickoff." [ref=e129]:
            - generic [ref=e130]:
              - img [ref=e132]
              - generic [ref=e137]:
                - heading "Crowd Congestion" [level=3] [ref=e138]
                - paragraph [ref=e139]: Heavy crowd detected near Gate A before kickoff.
          - button "Transport Delay Metro service delayed by 15 minutes." [ref=e140]:
            - generic [ref=e141]:
              - img [ref=e143]
              - generic [ref=e147]:
                - heading "Transport Delay" [level=3] [ref=e148]
                - paragraph [ref=e149]: Metro service delayed by 15 minutes.
          - button "Medical Emergency Medical assistance requested in Section B." [ref=e150]:
            - generic [ref=e151]:
              - img [ref=e153]
              - generic [ref=e155]:
                - heading "Medical Emergency" [level=3] [ref=e156]
                - paragraph [ref=e157]: Medical assistance requested in Section B.
          - button "Language Support Spanish-speaking visitors need assistance." [ref=e158]:
            - generic [ref=e159]:
              - img [ref=e161]
              - generic [ref=e165]:
                - heading "Language Support" [level=3] [ref=e166]
                - paragraph [ref=e167]: Spanish-speaking visitors need assistance.
          - button "Waste Overflow Food court waste bins nearing capacity." [ref=e168]:
            - generic [ref=e169]:
              - img [ref=e171]
              - generic [ref=e174]:
                - heading "Waste Overflow" [level=3] [ref=e175]
                - paragraph [ref=e176]: Food court waste bins nearing capacity.
        - generic [ref=e177]:
          - generic [ref=e178]:
            - img [ref=e179]
            - heading "AI Recommendation" [level=3] [ref=e182]
          - generic [ref=e183]: "Priority: High • Redirect spectators to Gates C and D • Deploy two volunteers for crowd guidance • Update digital signboards immediately • Broadcast multilingual announcements • Monitor crowd density every 2 minutes"
          - link "Try Full Dashboard" [ref=e184] [cursor=pointer]:
            - /url: /dashboard
            - text: Try Full Dashboard
            - img [ref=e185]
  - contentinfo [ref=e187]:
    - generic [ref=e188]:
      - paragraph [ref=e189]: © 2026 ArenaPilot AI. All rights reserved.
      - generic [ref=e190]:
        - link "View ArenaPilot AI source code on GitHub" [ref=e191] [cursor=pointer]:
          - /url: https://github.com/Fahad035/arenapilot-ai-fifa2026
          - img [ref=e192]
        - generic [ref=e194]:
          - generic [ref=e195]: Built with
          - generic [ref=e196]: React + Gemini
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
> 52 |       .click();
     |        ^ Error: locator.click: Test timeout of 60000ms exceeded.
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