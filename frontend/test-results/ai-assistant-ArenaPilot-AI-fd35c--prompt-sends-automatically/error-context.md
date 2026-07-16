# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ai-assistant.spec.js >> ArenaPilot AI Assistant >> Suggested prompt sends automatically
- Location: e2e\ai-assistant.spec.js:151:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/Summarize the current stadium situation/i)
Expected: visible
Error: strict mode violation: getByText(/Summarize the current stadium situation/i) resolved to 2 elements:
    1) <p class="whitespace-pre-wrap leading-7 text-slate-200">Summarize the current stadium situation.</p> aka getByText('Summarize the current stadium').first()
    2) <p class="mt-1 text-sm leading-6 text-slate-400">Summarize the current stadium situation.</p> aka getByRole('button', { name: 'AI Summary Summarize the' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(/Summarize the current stadium situation/i)

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
            - heading "AI Assistant" [level=1] [ref=e68]
            - paragraph [ref=e69]: Ask ArenaPilot about the current stadium scenario
          - generic [ref=e70]:
            - generic [ref=e71]:
              - img [ref=e72]
              - text: Lusail Stadium
            - generic [ref=e74]:
              - img [ref=e75]
              - text: Live Operations
        - generic [ref=e77]:
          - generic [ref=e78]:
            - paragraph [ref=e79]: AI Model
            - heading "Gemini 2.5" [level=3] [ref=e81]
          - generic [ref=e82]:
            - paragraph [ref=e83]: Response Time
            - heading "620 ms" [level=3] [ref=e85]
          - generic [ref=e86]:
            - paragraph [ref=e87]: Conversations
            - heading "14" [level=3] [ref=e89]
          - generic [ref=e90]:
            - paragraph [ref=e91]: Status
            - heading "Ready" [level=3] [ref=e93]
    - generic [ref=e96]:
      - generic [ref=e97]:
        - img [ref=e98]
        - generic [ref=e100]: Crowd congestion detected near Gate B.
      - generic [ref=e101]:
        - img [ref=e102]
        - generic [ref=e104]: Medical team dispatched to Section D.
      - generic [ref=e105]:
        - img [ref=e106]
        - generic [ref=e108]: Weather conditions remain stable.
      - generic [ref=e109]:
        - img [ref=e110]
        - generic [ref=e112]: ArenaPilot AI monitoring all stadium zones.
      - generic [ref=e113]:
        - img [ref=e114]
        - generic [ref=e116]: Security patrol increased around VIP entrance.
      - generic [ref=e117]:
        - img [ref=e118]
        - generic [ref=e120]: Crowd congestion detected near Gate B.
      - generic [ref=e121]:
        - img [ref=e122]
        - generic [ref=e124]: Medical team dispatched to Section D.
      - generic [ref=e125]:
        - img [ref=e126]
        - generic [ref=e128]: Weather conditions remain stable.
      - generic [ref=e129]:
        - img [ref=e130]
        - generic [ref=e132]: ArenaPilot AI monitoring all stadium zones.
      - generic [ref=e133]:
        - img [ref=e134]
        - generic [ref=e136]: Security patrol increased around VIP entrance.
    - main [ref=e137]:
      - generic [ref=e138]:
        - generic [ref=e140]:
          - generic [ref=e141]:
            - generic [ref=e142]:
              - heading "ArenaPilot AI Assistant" [level=2] [ref=e143]
              - paragraph [ref=e144]: Ask ArenaPilot AI in your preferred language and export the conversation anytime.
            - generic [ref=e145]:
              - generic [ref=e146]:
                - img
                - combobox [ref=e147]:
                  - option "English" [selected]
                  - option "Hindi"
                  - option "Spanish"
                  - option "French"
                  - option "Arabic"
              - button "new chat" [ref=e148]:
                - img [ref=e149]
                - text: New Chat
              - button "Export Chat" [ref=e151]:
                - img [ref=e152]
                - text: Export Chat
          - generic [ref=e154]:
            - generic [ref=e156]:
              - generic [ref=e157]:
                - generic [ref=e158]:
                  - img [ref=e159]
                  - generic [ref=e161]: ArenaPilot AI
                - generic [ref=e162]:
                  - button "Copy Response" [ref=e163]:
                    - img [ref=e164]
                  - button "Read Aloud" [ref=e166]:
                    - img [ref=e167]
              - paragraph [ref=e169]: Hello! I'm ArenaPilot AI. Ask me anything about this stadium scenario.
            - generic [ref=e171]:
              - generic [ref=e173]:
                - img [ref=e174]
                - generic [ref=e176]: You
              - paragraph [ref=e177]: Summarize the current stadium situation.
            - generic [ref=e179]:
              - generic [ref=e180]:
                - img [ref=e181]
                - generic [ref=e183]: ArenaPilot AI
              - generic [ref=e185]: ArenaPilot AI is thinking
          - generic [ref=e190]:
            - textbox "Ask ArenaPilot AI..." [ref=e191]
            - button "Send Message" [disabled] [ref=e192]:
              - img [ref=e193]
              - text: Sending...
        - generic [ref=e195]:
          - heading "Suggested Prompts" [level=2] [ref=e196]
          - paragraph [ref=e197]: Click any operational question below to instantly send it to ArenaPilot AI.
          - generic [ref=e198]:
            - button "Crowd Management How can we reduce congestion at Gate C?" [ref=e199]:
              - generic [ref=e200]:
                - img [ref=e202]
                - generic [ref=e204]:
                  - heading "Crowd Management" [level=3] [ref=e205]
                  - paragraph [ref=e206]: How can we reduce congestion at Gate C?
            - button "Emergency Generate an emergency evacuation summary." [ref=e207]:
              - generic [ref=e208]:
                - img [ref=e210]
                - generic [ref=e212]:
                  - heading "Emergency" [level=3] [ref=e213]
                  - paragraph [ref=e214]: Generate an emergency evacuation summary.
            - button "Navigation Recommend the safest spectator route." [ref=e215]:
              - generic [ref=e216]:
                - img [ref=e218]
                - generic [ref=e220]:
                  - heading "Navigation" [level=3] [ref=e221]
                  - paragraph [ref=e222]: Recommend the safest spectator route.
            - button "AI Summary Summarize the current stadium situation." [active] [ref=e223]:
              - generic [ref=e224]:
                - img [ref=e226]
                - generic [ref=e228]:
                  - heading "AI Summary" [level=3] [ref=e229]
                  - paragraph [ref=e230]: Summarize the current stadium situation.
            - button "Transport Suggest transport alternatives." [ref=e231]:
              - generic [ref=e232]:
                - img [ref=e234]
                - generic [ref=e236]:
                  - heading "Transport" [level=3] [ref=e237]
                  - paragraph [ref=e238]: Suggest transport alternatives.
            - button "Medical Identify the nearest medical assistance point and recommend the quickest route." [ref=e239]:
              - generic [ref=e240]:
                - img [ref=e242]
                - generic [ref=e244]:
                  - heading "Medical" [level=3] [ref=e245]
                  - paragraph [ref=e246]: Identify the nearest medical assistance point and recommend the quickest route.
```

# Test source

```ts
  62  | 
  63  |     await expect(
  64  |       page.getByText(
  65  |         /Summarize the current stadium situation/i
  66  |       )
  67  |     ).toBeVisible();
  68  |   });
  69  | 
  70  |   test("Typing indicator appears", async ({ page }) => {
  71  |     const input = page.getByPlaceholder(
  72  |       /Ask ArenaPilot AI/i
  73  |     );
  74  | 
  75  |     await input.fill(
  76  |       "Generate crowd analysis."
  77  |     );
  78  | 
  79  |     await page.getByRole("button", {
  80  |       name: /Send/i,
  81  |     }).click();
  82  | 
  83  |     await expect(
  84  |       page.getByText(
  85  |         /thinking|analyzing/i
  86  |       )
  87  |     ).toBeVisible();
  88  |   });
  89  | 
  90  |   test("Language selector exists", async ({ page }) => {
  91  |     await expect(
  92  |       page.getByRole("combobox")
  93  |     ).toBeVisible();
  94  |   });
  95  | 
  96  |   test("User can change language", async ({ page }) => {
  97  |     const language = page.getByRole("combobox");
  98  | 
  99  |     await language.selectOption("Hindi");
  100 | 
  101 |     await expect(language).toHaveValue(
  102 |       "Hindi"
  103 |     );
  104 |   });
  105 | 
  106 |   test("Export Chat button exists", async ({ page }) => {
  107 |     const downloadPromise =
  108 |       page.waitForEvent("download");
  109 | 
  110 |     await page.getByRole("button", {
  111 |       name: /Export Chat/i,
  112 |     }).click();
  113 | 
  114 |     const download =
  115 |       await downloadPromise;
  116 | 
  117 |     expect(download.suggestedFilename())
  118 |       .toContain("ArenaPilotAI_Chat");
  119 |   });
  120 | 
  121 |   test("Clear Conversation button exists", async ({ page }) => {
  122 |     await expect(
  123 |       page.getByRole("button", {
  124 |         name: /New Chat|Clear Conversation/i,
  125 |       })
  126 |     ).toBeVisible();
  127 |   });
  128 | 
  129 |   test("Conversation resets", async ({ page }) => {
  130 |     const input = page.getByPlaceholder(
  131 |       /Ask ArenaPilot AI/i
  132 |     );
  133 | 
  134 |     await input.fill("Hello");
  135 | 
  136 |     await page.getByRole("button", {
  137 |       name: /Send/i,
  138 |     }).click();
  139 | 
  140 |     await page.getByRole("button", {
  141 |       name: /New Chat|Clear Conversation/i,
  142 |     }).click();
  143 | 
  144 |     await expect(
  145 |       page.getByText(
  146 |         /Hello! I'm ArenaPilot AI/i
  147 |       )
  148 |     ).toBeVisible();
  149 |   });
  150 | 
  151 |   test("Suggested prompt sends automatically", async ({ page }) => {
  152 |     await page
  153 |       .getByText(
  154 |         /Summarize the current stadium situation/i
  155 |       )
  156 |       .click();
  157 | 
  158 |     await expect(
  159 |       page.getByText(
  160 |         /Summarize the current stadium situation/i
  161 |       )
> 162 |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
  163 |   });
  164 | 
  165 |   test("Assistant response has Copy button", async ({ page }) => {
  166 |     const input = page.getByPlaceholder(
  167 |       /Ask ArenaPilot AI/i
  168 |     );
  169 | 
  170 |     await input.fill("Hello");
  171 | 
  172 |     await page.getByRole("button", {
  173 |       name: /Send/i,
  174 |     }).click();
  175 | 
  176 |     await page.waitForTimeout(2000);
  177 | 
  178 |     await expect(
  179 |       page.getByTitle(/Copy Response/i).first()
  180 |     ).toBeVisible();
  181 |   });
  182 | 
  183 |   test("Assistant response has Listen button", async ({ page }) => {
  184 |     const input = page.getByPlaceholder(
  185 |       /Ask ArenaPilot AI/i
  186 |     );
  187 | 
  188 |     await input.fill("Hello");
  189 | 
  190 |     await page.getByRole("button", {
  191 |       name: /Send/i,
  192 |     }).click();
  193 | 
  194 |     await page.waitForTimeout(2000);
  195 | 
  196 |     await expect(
  197 |       page.getByTitle(/Read Aloud/i).first()
  198 |     ).toBeVisible();
  199 |   });
  200 | 
  201 |   test("Reasoning card is displayed", async ({ page }) => {
  202 |     const input = page.getByPlaceholder(
  203 |       /Ask ArenaPilot AI/i
  204 |     );
  205 | 
  206 |     await input.fill(
  207 |       "Recommend the safest evacuation route."
  208 |     );
  209 | 
  210 |     await page.getByRole("button", {
  211 |       name: /Send/i,
  212 |     }).click();
  213 | 
  214 |     await page.waitForTimeout(3000);
  215 | 
  216 |     await expect(
  217 |       page.getByText(/Why this answer|Reasoning/i)
  218 |     ).toBeVisible();
  219 |   });
  220 | 
  221 | });
```