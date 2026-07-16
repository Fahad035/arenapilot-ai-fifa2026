# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.js >> Navigation >> Browser Back and Forward Navigation
- Location: e2e\navigation.spec.js:106:3

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
  13  |     await expect(page).toHaveURL(/dashboard/);
  14  |   });
  15  | 
  16  |   test("Navigate from Home to About", async ({ page }) => {
  17  |     await page.goto("/");
  18  | 
  19  |     await page
  20  |       .getByRole("link", {
  21  |         name: /About ArenaPilot AI/i,
  22  |       })
  23  |       .click();
  24  | 
  25  |     await expect(page).toHaveURL(/about/);
  26  |   });
  27  | 
  28  |   test("Sidebar navigation - Overview", async ({ page }) => {
  29  |     await page.goto("/dashboard");
  30  | 
  31  |     await page
  32  |       .getByRole("button", {
  33  |         name: /Overview/i,
  34  |       })
  35  |       .click();
  36  | 
  37  |     await expect(
  38  |       page.getByRole("button", {
  39  |         name: /Overview/i,
  40  |       })
  41  |     ).toBeVisible();
  42  |   });
  43  | 
  44  |   test("Sidebar navigation - Crowd", async ({ page }) => {
  45  |     await page.goto("/dashboard");
  46  | 
  47  |     const crowdTab = page.getByRole("button", {
  48  |       name: /Crowd/i,
  49  |     });
  50  | 
  51  |     if (await crowdTab.count()) {
  52  |       await crowdTab.click();
  53  | 
  54  |       await expect(crowdTab).toBeVisible();
  55  |     }
  56  |   });
  57  | 
  58  |   test("Sidebar navigation - Alerts", async ({ page }) => {
  59  |     await page.goto("/dashboard");
  60  | 
  61  |     const alertsTab = page.getByRole("button", {
  62  |       name: /Alerts/i,
  63  |     });
  64  | 
  65  |     await alertsTab.click();
  66  | 
  67  |     await expect(
  68  |       page.getByText(/Alert|Live Alerts/i)
  69  |     ).toBeVisible();
  70  |   });
  71  | 
  72  |   test("Sidebar navigation - AI Assistant", async ({ page }) => {
  73  |     await page.goto("/dashboard");
  74  | 
  75  |     await page
  76  |       .getByRole("button", {
  77  |         name: /AI Assistant/i,
  78  |       })
  79  |       .click();
  80  | 
  81  |     await expect(
  82  |       page.getByText(/ArenaPilot AI Assistant/i)
  83  |     ).toBeVisible();
  84  | 
  85  |     await expect(
  86  |       page.getByPlaceholder(/Ask ArenaPilot AI/i)
  87  |     ).toBeVisible();
  88  |   });
  89  | 
  90  |   test("Sidebar navigation - Settings", async ({ page }) => {
  91  |     await page.goto("/dashboard");
  92  | 
  93  |     const settingsTab = page.getByRole("button", {
  94  |       name: /Settings/i,
  95  |     });
  96  | 
  97  |     if (await settingsTab.count()) {
  98  |       await settingsTab.click();
  99  | 
  100 |       await expect(
  101 |         page.getByText(/Settings/i)
  102 |       ).toBeVisible();
  103 |     }
  104 |   });
  105 | 
  106 |   test("Browser Back and Forward Navigation", async ({ page }) => {
  107 |     await page.goto("/");
  108 | 
  109 |     await page
  110 |       .getByRole("link", {
  111 |         name: /Launch Dashboard/i,
  112 |       })
> 113 |       .click();
      |        ^ Error: locator.click: Test timeout of 60000ms exceeded.
  114 | 
  115 |     await expect(page).toHaveURL(/dashboard/);
  116 | 
  117 |     await page.goBack();
  118 | 
  119 |     await expect(page).toHaveURL("/");
  120 | 
  121 |     await page.goForward();
  122 | 
  123 |     await expect(page).toHaveURL(/dashboard/);
  124 |   });
  125 | });
```