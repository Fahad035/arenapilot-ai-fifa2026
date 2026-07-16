# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: responsive.spec.js >> Responsive Layout >> No horizontal scrolling on Mobile
- Location: e2e\responsive.spec.js:105:3

# Error details

```
Error: expect(received).toBeFalsy()

Received: true
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - complementary [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - link "ArenaPilot Home" [ref=e7] [cursor=pointer]:
          - /url: /
          - img [ref=e9]
          - generic [ref=e15]:
            - heading "ArenaPilot" [level=1] [ref=e16]
            - paragraph [ref=e17]: AI Operations Copilot
        - button [ref=e18]:
          - img [ref=e19]
      - generic [ref=e21]:
        - button "Overview" [ref=e22]:
          - img [ref=e24]
          - generic [ref=e26]: Overview
        - button "Crowd Intelligence" [ref=e27]:
          - img [ref=e28]
          - generic [ref=e30]: Crowd Intelligence
        - button "AI Briefing" [ref=e31]:
          - img [ref=e32]
          - generic [ref=e34]: AI Briefing
        - button "Navigator" [ref=e35]:
          - img [ref=e36]
          - generic [ref=e38]: Navigator
        - button "Operations" [ref=e39]:
          - img [ref=e40]
          - generic [ref=e42]: Operations
        - button "History" [ref=e43]:
          - img [ref=e44]
          - generic [ref=e46]: History
        - button "AI Assistant" [ref=e47]:
          - img [ref=e48]
          - generic [ref=e50]: AI Assistant
        - button "Alerts" [ref=e51]:
          - img [ref=e52]
          - generic [ref=e54]: Alerts
      - generic [ref=e56]:
        - paragraph [ref=e57]: AI STATUS
        - heading "ArenaPilot Online" [level=3] [ref=e58]
        - generic [ref=e61]: All systems operational
  - generic [ref=e62]:
    - banner [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e65]:
          - generic [ref=e67]:
            - heading "Overview" [level=1] [ref=e68]
            - paragraph [ref=e69]: Full-venue situational awareness
          - generic [ref=e70]:
            - generic [ref=e71]:
              - img [ref=e72]
              - text: Lusail Stadium
            - generic [ref=e74]:
              - img [ref=e75]
              - text: Live Operations
        - generic [ref=e77]:
          - generic [ref=e78]:
            - paragraph [ref=e79]: AI Status
            - heading "Online" [level=3] [ref=e81]
          - generic [ref=e82]:
            - paragraph [ref=e83]: Crowd Status
            - heading "Moderate" [level=3] [ref=e85]
          - generic [ref=e86]:
            - paragraph [ref=e87]: Active Alerts
            - generic [ref=e88]:
              - img [ref=e89]
              - heading "03" [level=3] [ref=e91]
          - generic [ref=e92]:
            - paragraph [ref=e93]: Local Time
            - heading "08:15 PM" [level=3] [ref=e95]
    - generic [ref=e98]:
      - generic [ref=e99]:
        - img [ref=e100]
        - generic [ref=e102]: Crowd congestion detected near Gate B.
      - generic [ref=e103]:
        - img [ref=e104]
        - generic [ref=e106]: Medical team dispatched to Section D.
      - generic [ref=e107]:
        - img [ref=e108]
        - generic [ref=e110]: Weather conditions remain stable.
      - generic [ref=e111]:
        - img [ref=e112]
        - generic [ref=e114]: ArenaPilot AI monitoring all stadium zones.
      - generic [ref=e115]:
        - img [ref=e116]
        - generic [ref=e118]: Security patrol increased around VIP entrance.
      - generic [ref=e119]:
        - img [ref=e120]
        - generic [ref=e122]: Crowd congestion detected near Gate B.
      - generic [ref=e123]:
        - img [ref=e124]
        - generic [ref=e126]: Medical team dispatched to Section D.
      - generic [ref=e127]:
        - img [ref=e128]
        - generic [ref=e130]: Weather conditions remain stable.
      - generic [ref=e131]:
        - img [ref=e132]
        - generic [ref=e134]: ArenaPilot AI monitoring all stadium zones.
      - generic [ref=e135]:
        - img [ref=e136]
        - generic [ref=e138]: Security patrol increased around VIP entrance.
    - main [ref=e139]:
      - generic [ref=e140]:
        - generic [ref=e141]:
          - generic [ref=e143]:
            - generic [ref=e144]:
              - paragraph [ref=e145]: Attendance
              - heading "0" [level=2] [ref=e146]
              - generic [ref=e147]: +8%
            - img [ref=e149]
          - generic [ref=e152]:
            - generic [ref=e153]:
              - paragraph [ref=e154]: Active Alerts
              - heading "00" [level=2] [ref=e155]
              - generic [ref=e156]: Live
            - img [ref=e158]
          - generic [ref=e161]:
            - generic [ref=e162]:
              - paragraph [ref=e163]: AI Confidence
              - heading "98%" [level=2] [ref=e164]
              - generic [ref=e165]: Stable
            - img [ref=e167]
          - generic [ref=e170]:
            - generic [ref=e171]:
              - paragraph [ref=e172]: Recommended Route
              - heading "Gate D" [level=2] [ref=e173]
              - generic [ref=e174]: Fastest
            - img [ref=e176]
        - generic [ref=e178]:
          - generic [ref=e180]:
            - generic:
              - generic [ref=e181]:
                - heading "AI Scenario Builder" [level=2] [ref=e182]
                - paragraph [ref=e183]: Enter a stadium scenario and let ArenaPilot AI generate an operational briefing.
              - img [ref=e185]
            - generic:
              - generic [ref=e187]:
                - generic [ref=e188]: Stadium
                - generic [ref=e189]:
                  - img [ref=e190]
                  - combobox [ref=e192]:
                    - option "Select Stadium" [selected]
                    - option "Lusail Stadium"
                    - option "Al Bayt Stadium"
                    - option "974 Stadium"
                    - option "Al Janoub Stadium"
                    - option "Education City Stadium"
              - generic [ref=e193]:
                - generic [ref=e194]: Match
                - combobox [ref=e195]:
                  - option "Select Match" [selected]
                  - option "Argentina vs Brazil"
                  - option "England vs France"
                  - option "Germany vs Spain"
                  - option "Portugal vs Italy"
                  - option "Netherlands vs Belgium"
            - generic:
              - generic [ref=e196]:
                - generic [ref=e197]: Estimated Crowd Size
                - spinbutton [ref=e198]
              - generic [ref=e199]:
                - generic [ref=e200]: Weather
                - generic [ref=e201]:
                  - img [ref=e202]
                  - combobox [ref=e204]:
                    - option "Weather Condition" [selected]
                    - option "Sunny"
                    - option "Cloudy"
                    - option "Rainy"
                    - option "Windy"
            - generic:
              - generic [ref=e205]:
                - generic [ref=e206]: Incident Type
                - generic [ref=e207]:
                  - img [ref=e208]
                  - combobox [ref=e210]:
                    - option "Select Incident" [selected]
                    - option "Crowd Congestion"
                    - option "Medical Emergency"
                    - option "Security Threat"
                    - option "Gate Delay"
                    - option "Transport Delay"
                    - option "VIP Movement"
              - generic [ref=e211]:
                - generic [ref=e212]: Priority
                - generic [ref=e213]:
                  - img [ref=e214]
                  - combobox [ref=e216]:
                    - option "Select Priority" [selected]
                    - option "Low"
                    - option "Medium"
                    - option "High"
                    - option "Critical"
            - generic:
              - generic: Additional Notes
              - textbox "Provide any additional operational information..." [ref=e217]
            - generic [ref=e218]:
              - heading "Live Scenario Preview" [level=3]
              - generic:
                - generic [ref=e219]:
                  - text: Stadium
                  - paragraph [ref=e220]: "--"
                - generic [ref=e221]:
                  - text: Match
                  - paragraph [ref=e222]: "--"
                - generic [ref=e223]:
                  - text: Crowd
                  - paragraph [ref=e224]: "--"
                - generic [ref=e225]:
                  - text: Incident
                  - paragraph [ref=e226]: "--"
            - generic [ref=e227]:
              - generic:
                - heading "Ready to Generate AI Briefing" [level=3]
                - paragraph: ArenaPilot AI will analyze the scenario using the Rules Engine and generate operational recommendations.
              - button "Generate AI Briefing" [ref=e228]:
                - img
                - text: Generate AI Briefing
          - generic [ref=e231]:
            - generic:
              - img [ref=e233]
              - heading "AI Briefing Ready" [level=2] [ref=e235]
              - paragraph [ref=e236]: Fill in the scenario details and generate an AI analysis. ArenaPilot will evaluate crowd conditions, risks, evacuation routes, and operational recommendations.
              - generic [ref=e237]:
                - heading "Analysis will include" [level=3]
                - generic:
                  - generic:
                    - img
                    - text: Risk Assessment
                  - generic:
                    - img
                    - text: Route Optimization
                  - generic:
                    - img
                    - text: Operational Recommendations
        - generic [ref=e241]:
          - generic [ref=e242]:
            - generic:
              - generic [ref=e243]:
                - heading "Live Operations Status" [level=2] [ref=e244]
                - paragraph [ref=e245]: Real-time operational monitoring
              - generic [ref=e246]:
                - img [ref=e247]
                - generic [ref=e249]: LIVE
            - generic:
              - generic [ref=e250]:
                - generic [ref=e251]:
                  - img [ref=e253]
                  - generic [ref=e255]:
                    - heading "Gate Operations" [level=3] [ref=e256]
                    - paragraph [ref=e257]: Operational Status
                - generic [ref=e258]: Normal
              - generic [ref=e259]:
                - generic [ref=e260]:
                  - img [ref=e262]
                  - generic [ref=e264]:
                    - heading "Medical Risk" [level=3] [ref=e265]
                    - paragraph [ref=e266]: Operational Status
                - generic [ref=e267]: 0%
              - generic [ref=e268]:
                - generic [ref=e269]:
                  - img [ref=e271]
                  - generic [ref=e273]:
                    - heading "Security Score" [level=3] [ref=e274]
                    - paragraph [ref=e275]: Operational Status
                - generic [ref=e276]: undefined%
              - generic [ref=e277]:
                - generic [ref=e278]:
                  - img [ref=e280]
                  - generic [ref=e282]:
                    - heading "AI Confidence" [level=3] [ref=e283]
                    - paragraph [ref=e284]: Operational Status
                - generic [ref=e285]: undefined%
              - generic [ref=e286]:
                - generic [ref=e287]:
                  - img [ref=e289]
                  - generic [ref=e291]:
                    - heading "Weather" [level=3] [ref=e292]
                    - paragraph [ref=e293]: Operational Status
                - generic [ref=e294]: Clear
            - generic [ref=e295]:
              - generic:
                - generic [ref=e296]: Last Updated
                - generic [ref=e297]: Just Now
          - generic [ref=e298]:
            - generic:
              - generic [ref=e299]:
                - heading "Operations Timeline" [level=2] [ref=e300]
                - paragraph [ref=e301]: Recent operational events across the stadium
              - generic [ref=e302]: Live Feed
            - generic [ref=e304]: No live events yet. Generate a scenario to populate the operations timeline.
            - generic [ref=e305]:
              - generic:
                - generic [ref=e306]: Events Recorded
                - generic [ref=e307]: "0"
```

# Test source

```ts
  20  |       height: 1180,
  21  |     });
  22  | 
  23  |     await page.goto("/");
  24  | 
  25  |     await expect(page.locator("body")).toBeVisible();
  26  | 
  27  |     await expect(page).toHaveTitle(/ArenaPilot/i);
  28  |   });
  29  | 
  30  |   test("Mobile View", async ({ page }) => {
  31  |     await page.setViewportSize({
  32  |       width: 390,
  33  |       height: 844,
  34  |     });
  35  | 
  36  |     await page.goto("/");
  37  | 
  38  |     await expect(page.locator("body")).toBeVisible();
  39  | 
  40  |     await expect(page).toHaveTitle(/ArenaPilot/i);
  41  |   });
  42  | 
  43  |   test("Dashboard Desktop", async ({ page }) => {
  44  |     await page.setViewportSize({
  45  |       width: 1440,
  46  |       height: 900,
  47  |     });
  48  | 
  49  |     await page.goto("/dashboard");
  50  | 
  51  |     await expect(page.locator("body")).toBeVisible();
  52  | 
  53  |     await expect(
  54  |       page.getByText(/overview/i).first()
  55  |     ).toBeVisible();
  56  |   });
  57  | 
  58  |   test("Dashboard Tablet", async ({ page }) => {
  59  |     await page.setViewportSize({
  60  |       width: 820,
  61  |       height: 1180,
  62  |     });
  63  | 
  64  |     await page.goto("/dashboard");
  65  | 
  66  |     await expect(page.locator("body")).toBeVisible();
  67  |   });
  68  | 
  69  |   test("Dashboard Mobile", async ({ page }) => {
  70  |     await page.setViewportSize({
  71  |       width: 390,
  72  |       height: 844,
  73  |     });
  74  | 
  75  |     await page.goto("/dashboard");
  76  | 
  77  |     await expect(page.locator("body")).toBeVisible();
  78  |   });
  79  | 
  80  |   test("AI Assistant works on Mobile", async ({ page }) => {
  81  |     await page.setViewportSize({
  82  |       width: 390,
  83  |       height: 844,
  84  |     });
  85  | 
  86  |     await page.goto("/dashboard");
  87  | 
  88  |     const assistantTab = page.getByRole("button", {
  89  |       name: /ai assistant/i,
  90  |     });
  91  | 
  92  |     if (await assistantTab.count()) {
  93  |       await assistantTab.click();
  94  |     }
  95  | 
  96  |     const input = page.getByPlaceholder(
  97  |       /ask arenapilot ai/i
  98  |     );
  99  | 
  100 |     if (await input.count()) {
  101 |       await expect(input).toBeVisible();
  102 |     }
  103 |   });
  104 | 
  105 |   test("No horizontal scrolling on Mobile", async ({ page }) => {
  106 |     await page.setViewportSize({
  107 |       width: 390,
  108 |       height: 844,
  109 |     });
  110 | 
  111 |     await page.goto("/dashboard");
  112 | 
  113 |     const hasHorizontalScroll = await page.evaluate(() => {
  114 |       return (
  115 |         document.documentElement.scrollWidth >
  116 |         document.documentElement.clientWidth
  117 |       );
  118 |     });
  119 | 
> 120 |     expect(hasHorizontalScroll).toBeFalsy();
      |                                 ^ Error: expect(received).toBeFalsy()
  121 |   });
  122 | });
```