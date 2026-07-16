# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ai-assistant.spec.js >> ArenaPilot AI Assistant >> Typing indicator appears
- Location: e2e\ai-assistant.spec.js:70:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/thinking|analyzing/i)
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(/thinking|analyzing/i)

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
  - textbox "Ask ArenaPilot AI...": Generate crowd analysis.
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
  1   | import { test, expect } from "@playwright/test";
  2   | 
  3   | test.describe("ArenaPilot AI Assistant", () => {
  4   | 
  5   |   test.beforeEach(async ({ page }) => {
  6   |     await page.goto("/dashboard");
  7   | 
  8   |     // Open AI Assistant tab
  9   |     await page.getByRole("button", {
  10  |       name: /AI Assistant/i,
  11  |     }).click();
  12  | 
  13  |     await expect(
  14  |       page.getByText(/ArenaPilot AI Assistant/i)
  15  |     ).toBeVisible();
  16  |   });
  17  | 
  18  |   test("AI Assistant page loads", async ({ page }) => {
  19  |     await expect(
  20  |       page.getByPlaceholder(/Ask ArenaPilot AI/i)
  21  |     ).toBeVisible();
  22  | 
  23  |     await expect(
  24  |       page.getByRole("button", {
  25  |         name: /Send/i,
  26  |       })
  27  |     ).toBeVisible();
  28  |   });
  29  | 
  30  |   test("Suggested prompts are visible", async ({ page }) => {
  31  |     await expect(
  32  |       page.getByText(/Suggested Prompts/i)
  33  |     ).toBeVisible();
  34  |   });
  35  | 
  36  |   test("User can type a question", async ({ page }) => {
  37  |     const input = page.getByPlaceholder(
  38  |       /Ask ArenaPilot AI/i
  39  |     );
  40  | 
  41  |     await input.fill(
  42  |       "What is the safest evacuation route?"
  43  |     );
  44  | 
  45  |     await expect(input).toHaveValue(
  46  |       "What is the safest evacuation route?"
  47  |     );
  48  |   });
  49  | 
  50  |   test("User can send a message", async ({ page }) => {
  51  |     const input = page.getByPlaceholder(
  52  |       /Ask ArenaPilot AI/i
  53  |     );
  54  | 
  55  |     await input.fill(
  56  |       "Summarize the current stadium situation."
  57  |     );
  58  | 
  59  |     await page.getByRole("button", {
  60  |       name: /Send/i,
  61  |     }).click();
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
> 87  |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
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
```