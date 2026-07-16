# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ai-assistant.spec.js >> ArenaPilot AI Assistant >> Reasoning card is displayed
- Location: e2e\ai-assistant.spec.js:201:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/Why this answer|Reasoning/i)
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(/Why this answer|Reasoning/i)

```

```yaml
- complementary:
  - link "ArenaPilot Home":
    - /url: /
    - img
    - heading "ArenaPilot" [level=1]
    - paragraph: AI Operations Copilot
  - button:
    - img
  - button "Overview":
    - img
    - text: Overview
  - button "Crowd Intelligence":
    - img
    - text: Crowd Intelligence
  - button "AI Briefing":
    - img
    - text: AI Briefing
  - button "Navigator":
    - img
    - text: Navigator
  - button "Operations":
    - img
    - text: Operations
  - button "History":
    - img
    - text: History
  - button "AI Assistant":
    - img
    - text: AI Assistant
  - button "Alerts":
    - img
    - text: Alerts
  - paragraph: AI STATUS
  - heading "ArenaPilot Online" [level=3]
  - text: All systems operational
- banner:
  - heading "AI Assistant" [level=1]
  - paragraph: Ask ArenaPilot about the current stadium scenario
  - img
  - text: Lusail Stadium
  - img
  - text: Live Operations
  - paragraph: AI Model
  - heading "Gemini 2.5" [level=3]
  - paragraph: Response Time
  - heading "620 ms" [level=3]
  - paragraph: Conversations
  - heading "14" [level=3]
  - paragraph: Status
  - heading "Ready" [level=3]
- img
- text: Crowd congestion detected near Gate B.
- img
- text: Medical team dispatched to Section D.
- img
- text: Weather conditions remain stable.
- img
- text: ArenaPilot AI monitoring all stadium zones.
- img
- text: Security patrol increased around VIP entrance.
- img
- text: Crowd congestion detected near Gate B.
- img
- text: Medical team dispatched to Section D.
- img
- text: Weather conditions remain stable.
- img
- text: ArenaPilot AI monitoring all stadium zones.
- img
- text: Security patrol increased around VIP entrance.
- main:
  - heading "ArenaPilot AI Assistant" [level=2]
  - paragraph: Ask ArenaPilot AI in your preferred language and export the conversation anytime.
  - img
  - combobox:
    - option "English" [selected]
    - option "Hindi"
    - option "Spanish"
    - option "French"
    - option "Arabic"
  - button "new chat":
    - img
    - text: New Chat
  - button "Export Chat":
    - img
    - text: Export Chat
  - img
  - text: ArenaPilot AI
  - button "Copy Response":
    - img
  - button "Read Aloud":
    - img
  - paragraph: Hello! I'm ArenaPilot AI. Ask me anything about this stadium scenario.
  - textbox "Ask ArenaPilot AI...": Recommend the safest evacuation route.
  - button "Send Message":
    - img
    - text: Send
  - heading "Suggested Prompts" [level=2]
  - paragraph: Click any operational question below to instantly send it to ArenaPilot AI.
  - button "Crowd Management How can we reduce congestion at Gate C?":
    - img
    - heading "Crowd Management" [level=3]
    - paragraph: How can we reduce congestion at Gate C?
  - button "Emergency Generate an emergency evacuation summary.":
    - img
    - heading "Emergency" [level=3]
    - paragraph: Generate an emergency evacuation summary.
  - button "Navigation Recommend the safest spectator route.":
    - img
    - heading "Navigation" [level=3]
    - paragraph: Recommend the safest spectator route.
  - button "AI Summary Summarize the current stadium situation.":
    - img
    - heading "AI Summary" [level=3]
    - paragraph: Summarize the current stadium situation.
  - button "Transport Suggest transport alternatives.":
    - img
    - heading "Transport" [level=3]
    - paragraph: Suggest transport alternatives.
  - button "Medical Identify the nearest medical assistance point and recommend the quickest route.":
    - img
    - heading "Medical" [level=3]
    - paragraph: Identify the nearest medical assistance point and recommend the quickest route.
```

# Test source

```ts
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
  162 |     ).toBeVisible();
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
> 218 |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
  219 |   });
  220 | 
  221 | });
```