# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.js >> Navigation >> Sidebar navigation - Alerts
- Location: e2e\navigation.spec.js:58:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/Alert|Live Alerts/i)
Expected: visible
Error: strict mode violation: getByText(/Alert|Live Alerts/i) resolved to 10 elements:
    1) <span class="relative z-10 ml-4 font-body font-medium text-white">Alerts</span> aka getByRole('button', { name: 'Alerts' })
    2) <h1 class="font-heading text-xl font-bold tracking-tight text-white">Alerts</h1> aka getByRole('heading', { name: 'Alerts', exact: true })
    3) <p class="text-xs uppercase tracking-widest text-slate-500">Critical Alerts</p> aka getByRole('banner').getByText('Critical Alerts')
    4) <p class="text-xs uppercase tracking-widest text-slate-500">Alert Level</p> aka getByText('Alert Level')
    5) <p class="text-sm text-slate-400">Critical Alerts</p> aka getByRole('main').getByText('Critical Alerts')
    6) <h2 class="font-heading text-2xl font-bold text-white">Live Alerts</h2> aka getByRole('heading', { name: 'Live Alerts' })
    7) <h2 class="font-heading text-2xl font-bold text-white">Alert Statistics</h2> aka getByRole('heading', { name: 'Alert Statistics' })
    8) <p class="text-sm text-slate-400">Today's Alerts</p> aka getByText('Today\'s Alerts')
    9) <h2 class="font-heading text-2xl font-bold text-white">Alert History</h2> aka getByRole('heading', { name: 'Alert History' })
    10) <p class="mt-1 text-sm text-slate-400">Every alert is automatically stored for operation…</p> aka getByText('Every alert is automatically')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(/Alert|Live Alerts/i)

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
          - img [ref=e23]
          - generic [ref=e25]: Overview
        - button "Crowd Intelligence" [ref=e26]:
          - img [ref=e27]
          - generic [ref=e29]: Crowd Intelligence
        - button "AI Briefing" [ref=e30]:
          - img [ref=e31]
          - generic [ref=e33]: AI Briefing
        - button "Navigator" [ref=e34]:
          - img [ref=e35]
          - generic [ref=e37]: Navigator
        - button "Operations" [ref=e38]:
          - img [ref=e39]
          - generic [ref=e41]: Operations
        - button "History" [ref=e42]:
          - img [ref=e43]
          - generic [ref=e45]: History
        - button "AI Assistant" [ref=e46]:
          - img [ref=e47]
          - generic [ref=e49]: AI Assistant
        - button "Alerts" [active] [ref=e50]:
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
            - heading "Alerts" [level=1] [ref=e68]
            - paragraph [ref=e69]: Critical incidents requiring immediate attention
          - generic [ref=e70]:
            - generic [ref=e71]:
              - img [ref=e72]
              - text: Lusail Stadium
            - generic [ref=e74]:
              - img [ref=e75]
              - text: Live Operations
        - generic [ref=e77]:
          - generic [ref=e78]:
            - paragraph [ref=e79]: Critical Alerts
            - generic [ref=e80]:
              - img [ref=e81]
              - heading "03" [level=3] [ref=e83]
          - generic [ref=e84]:
            - paragraph [ref=e85]: Alert Level
            - heading "High" [level=3] [ref=e87]
          - generic [ref=e88]:
            - paragraph [ref=e89]: Response Team
            - heading "Active" [level=3] [ref=e91]
          - generic [ref=e92]:
            - paragraph [ref=e93]: Last Update
            - heading "09:32 AM" [level=3] [ref=e95]
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
              - paragraph [ref=e145]: Critical Alerts
              - heading "0" [level=2] [ref=e146]
              - paragraph [ref=e147]: Immediate attention required
            - img [ref=e149]
          - generic [ref=e152]:
            - generic [ref=e153]:
              - paragraph [ref=e154]: High Priority
              - heading "0" [level=2] [ref=e155]
              - paragraph [ref=e156]: Requires monitoring
            - img [ref=e158]
          - generic [ref=e161]:
            - generic [ref=e162]:
              - paragraph [ref=e163]: Monitoring
              - heading "12" [level=2] [ref=e164]
              - paragraph [ref=e165]: Medium Risk
            - img [ref=e167]
          - generic [ref=e170]:
            - generic [ref=e171]:
              - paragraph [ref=e172]: Resolved
              - heading "8" [level=2] [ref=e173]
              - paragraph [ref=e174]: Today's incidents
            - img [ref=e176]
        - generic [ref=e178]:
          - generic [ref=e180]:
            - generic [ref=e181]:
              - generic [ref=e182]:
                - heading "Live Alerts" [level=2] [ref=e183]
                - paragraph [ref=e184]: Active operational events detected by ArenaPilot AI.
              - generic [ref=e185]: 4 Active
            - generic [ref=e186]:
              - generic [ref=e188]:
                - generic [ref=e189]:
                  - img [ref=e191]
                  - generic [ref=e193]:
                    - heading "Crowd Congestion" [level=3] [ref=e194]
                    - paragraph [ref=e195]: Gate B Entrance
                    - generic [ref=e196]:
                      - img [ref=e197]
                      - text: 2 min ago
                - generic [ref=e199]: High
              - generic [ref=e201]:
                - generic [ref=e202]:
                  - img [ref=e204]
                  - generic [ref=e206]:
                    - heading "Medical Assistance Required" [level=3] [ref=e207]
                    - paragraph [ref=e208]: Section D - Block 12
                    - generic [ref=e209]:
                      - img [ref=e210]
                      - text: 6 min ago
                - generic [ref=e212]: Medium
              - generic [ref=e214]:
                - generic [ref=e215]:
                  - img [ref=e217]
                  - generic [ref=e219]:
                    - heading "Security Monitoring" [level=3] [ref=e220]
                    - paragraph [ref=e221]: VIP Corridor
                    - generic [ref=e222]:
                      - img [ref=e223]
                      - text: 9 min ago
                - generic [ref=e225]: Low
              - generic [ref=e227]:
                - generic [ref=e228]:
                  - img [ref=e230]
                  - generic [ref=e232]:
                    - heading "Weather Advisory" [level=3] [ref=e233]
                    - paragraph [ref=e234]: Entire Venue
                    - generic [ref=e235]:
                      - img [ref=e236]
                      - text: 15 min ago
                - generic [ref=e238]: Info
          - generic [ref=e239]:
            - generic [ref=e240]:
              - heading "Alert Statistics" [level=2] [ref=e241]
              - paragraph [ref=e242]: Live operational health of the venue.
            - generic [ref=e243]:
              - generic [ref=e245]:
                - generic [ref=e246]:
                  - paragraph [ref=e247]: Today's Alerts
                  - heading "8" [level=3] [ref=e248]
                - img [ref=e250]
              - generic [ref=e253]:
                - generic [ref=e254]:
                  - paragraph [ref=e255]: Average Response
                  - heading "01:42" [level=3] [ref=e256]
                - img [ref=e258]
              - generic [ref=e261]:
                - generic [ref=e262]:
                  - paragraph [ref=e263]: AI Confidence
                  - heading "97%" [level=3] [ref=e264]
                - img [ref=e266]
              - generic [ref=e269]:
                - generic [ref=e270]:
                  - paragraph [ref=e271]: Monitoring
                  - heading "Live" [level=3] [ref=e272]
                - img [ref=e274]
            - generic [ref=e278]:
              - generic [ref=e279]: AI Health Score
              - generic [ref=e280]: 98%
            - generic [ref=e286]:
              - heading "ArenaPilot AI Monitoring" [level=4] [ref=e287]
              - paragraph [ref=e288]: All monitoring services are operational.
            - generic [ref=e289]:
              - generic [ref=e290]: Last Scan
              - generic [ref=e291]:
                - img [ref=e292]
                - text: Just Now
        - generic [ref=e294]:
          - generic [ref=e295]:
            - generic [ref=e296]:
              - heading "AI Recommended Actions" [level=2] [ref=e297]
              - paragraph [ref=e298]: Operational recommendations generated by ArenaPilot AI.
            - generic [ref=e299]:
              - img [ref=e300]
              - generic [ref=e302]: AI Active
          - generic [ref=e303]:
            - generic [ref=e304]:
              - generic [ref=e305]:
                - generic [ref=e306]:
                  - img [ref=e308]
                  - generic [ref=e310]:
                    - heading "Deploy Additional Stewards" [level=3] [ref=e311]
                    - paragraph [ref=e312]: Increase staff presence around Gate B to reduce crowd congestion.
                - generic [ref=e313]: High
              - generic [ref=e314]:
                - generic [ref=e315]:
                  - img [ref=e316]
                  - text: Ready to Execute
                - button "Execute" [ref=e318]:
                  - text: Execute
                  - img [ref=e319]
            - generic [ref=e321]:
              - generic [ref=e322]:
                - generic [ref=e323]:
                  - img [ref=e325]
                  - generic [ref=e327]:
                    - heading "Open Gate C" [level=3] [ref=e328]
                    - paragraph [ref=e329]: Redirect incoming visitors to reduce waiting time.
                - generic [ref=e330]: Medium
              - generic [ref=e331]:
                - generic [ref=e332]:
                  - img [ref=e333]
                  - text: Ready to Execute
                - button "Execute" [ref=e335]:
                  - text: Execute
                  - img [ref=e336]
            - generic [ref=e338]:
              - generic [ref=e339]:
                - generic [ref=e340]:
                  - img [ref=e342]
                  - generic [ref=e344]:
                    - heading "Dispatch Medical Team" [level=3] [ref=e345]
                    - paragraph [ref=e346]: Nearest response team should inspect Section D immediately.
                - generic [ref=e347]: Critical
              - generic [ref=e348]:
                - generic [ref=e349]:
                  - img [ref=e350]
                  - text: Ready to Execute
                - button "Execute" [ref=e352]:
                  - text: Execute
                  - img [ref=e353]
            - generic [ref=e355]:
              - generic [ref=e356]:
                - generic [ref=e357]:
                  - img [ref=e359]
                  - generic [ref=e361]:
                    - heading "Public Announcement" [level=3] [ref=e362]
                    - paragraph [ref=e363]: Notify spectators regarding alternate entry routes.
                - generic [ref=e364]: Medium
              - generic [ref=e365]:
                - generic [ref=e366]:
                  - img [ref=e367]
                  - text: Ready to Execute
                - button "Execute" [ref=e369]:
                  - text: Execute
                  - img [ref=e370]
            - generic [ref=e372]:
              - generic [ref=e373]:
                - generic [ref=e374]:
                  - img [ref=e376]
                  - generic [ref=e378]:
                    - heading "Increase CCTV Monitoring" [level=3] [ref=e379]
                    - paragraph [ref=e380]: Enable enhanced surveillance for the affected zone.
                - generic [ref=e381]: Low
              - generic [ref=e382]:
                - generic [ref=e383]:
                  - img [ref=e384]
                  - text: Ready to Execute
                - button "Execute" [ref=e386]:
                  - text: Execute
                  - img [ref=e387]
        - generic [ref=e389]:
          - generic [ref=e390]:
            - generic [ref=e391]:
              - heading "Alert History" [level=2] [ref=e392]
              - paragraph [ref=e393]: Timeline of recent operational incidents and AI responses.
            - generic [ref=e394]: 5 Records
          - table [ref=e396]:
            - rowgroup [ref=e397]:
              - row "Time Category Severity Status AI Action" [ref=e398]:
                - columnheader "Time" [ref=e399]
                - columnheader "Category" [ref=e400]
                - columnheader "Severity" [ref=e401]
                - columnheader "Status" [ref=e402]
                - columnheader "AI Action" [ref=e403]
            - rowgroup [ref=e404]:
              - row "07:42 PM Crowd Congestion High Monitoring Opened Gate C" [ref=e405]:
                - cell "07:42 PM" [ref=e406]:
                  - generic [ref=e407]:
                    - img [ref=e408]
                    - text: 07:42 PM
                - cell "Crowd Congestion" [ref=e410]
                - cell "High" [ref=e411]:
                  - generic [ref=e412]: High
                - cell "Monitoring" [ref=e413]
                - cell "Opened Gate C" [ref=e414]
              - row "07:28 PM Medical Emergency Critical Resolved Medical Team Dispatched" [ref=e415]:
                - cell "07:28 PM" [ref=e416]:
                  - generic [ref=e417]:
                    - img [ref=e418]
                    - text: 07:28 PM
                - cell "Medical Emergency" [ref=e420]
                - cell "Critical" [ref=e421]:
                  - generic [ref=e422]: Critical
                - cell "Resolved" [ref=e423]
                - cell "Medical Team Dispatched" [ref=e424]
              - row "07:11 PM Security Threat Medium Investigating Security Patrol Sent" [ref=e425]:
                - cell "07:11 PM" [ref=e426]:
                  - generic [ref=e427]:
                    - img [ref=e428]
                    - text: 07:11 PM
                - cell "Security Threat" [ref=e430]
                - cell "Medium" [ref=e431]:
                  - generic [ref=e432]: Medium
                - cell "Investigating" [ref=e433]
                - cell "Security Patrol Sent" [ref=e434]
              - row "06:58 PM Weather Advisory Low Resolved Public Announcement" [ref=e435]:
                - cell "06:58 PM" [ref=e436]:
                  - generic [ref=e437]:
                    - img [ref=e438]
                    - text: 06:58 PM
                - cell "Weather Advisory" [ref=e440]
                - cell "Low" [ref=e441]:
                  - generic [ref=e442]: Low
                - cell "Resolved" [ref=e443]
                - cell "Public Announcement" [ref=e444]
              - row "06:37 PM VIP Movement Medium Completed Escort Activated" [ref=e445]:
                - cell "06:37 PM" [ref=e446]:
                  - generic [ref=e447]:
                    - img [ref=e448]
                    - text: 06:37 PM
                - cell "VIP Movement" [ref=e450]
                - cell "Medium" [ref=e451]:
                  - generic [ref=e452]: Medium
                - cell "Completed" [ref=e453]
                - cell "Escort Activated" [ref=e454]
          - generic [ref=e455]:
            - generic [ref=e456]:
              - heading "ArenaPilot AI Incident Log" [level=3] [ref=e457]
              - paragraph [ref=e458]: Every alert is automatically stored for operational review and reporting.
            - img [ref=e459]
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | 
  3   | test.describe("Navigation", () => {
  4   |   test("Navigate from Home to Dashboard", async ({ page }) => {
  5   |     await page.goto("/");
  6   | 
  7   |     await page
  8   |       .getByRole("link", {
  9   |         name: /Launch Dashboard/i,
  10  |       })
  11  |       .click();
  12  | 
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
> 69  |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
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
  113 |       .click();
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