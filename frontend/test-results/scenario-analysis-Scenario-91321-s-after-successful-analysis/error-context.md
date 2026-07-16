# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: scenario-analysis.spec.js >> Scenario Analysis >> Dashboard renders after successful analysis
- Location: e2e\scenario-analysis.spec.js:71:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /Generate AI Briefing/i })

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
  16  |     ).toBeVisible();
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
> 84  |       .click();
      |        ^ Error: locator.click: Test timeout of 60000ms exceeded.
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