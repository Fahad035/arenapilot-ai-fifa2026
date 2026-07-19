import { getGeminiModel } from "../config/gemini.js";
import mockChatResponse from "../mock/mockChatResponse.js";

import {
  getConversationHistory,
  addConversationMessage,
} from "../utils/conversationStore.js";

const USE_MOCK = process.env.USE_MOCK_AI === "true";

const MAX_HISTORY = 12;

const buildConversationPrompt = (history) => {
  if (!history.length) return "No previous conversation.";

  return history
    .slice(-MAX_HISTORY)
    .map((message) => {
      const role =
        message.role === "assistant"
          ? "ArenaPilot AI"
          : "Operator";

      return `${role}: ${message.text}`;
    })
    .join("\n");
};

const parseGeminiJSON = (text) => {
  try {
    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleaned);
  } catch {
    return {
      reply: text,
      reasoning:
        "The AI generated this response using the available stadium scenario and previous conversation.",
    };
  }
};

const generateChatResponse = async ({
  sessionId = "default",
  message,
  analysis,
}) => {
  addConversationMessage(sessionId, "user", message);

  const history = getConversationHistory(sessionId);

  if (USE_MOCK) {
    const reply = mockChatResponse({
      message,
      analysis,
    });

    addConversationMessage(sessionId, "assistant", reply);

    return {
      reply,
      reasoning:
        "Generated using ArenaPilot AI mock mode.",
    };
  }

  try {
    const model = getGeminiModel();

    const prompt = `
You are ArenaPilot AI.

You are an intelligent Smart Stadium Operations Copilot
for FIFA World Cup 2026.

====================================================
CURRENT STADIUM SCENARIO
====================================================

${JSON.stringify(analysis, null, 2)}

====================================================
PREVIOUS CONVERSATION
====================================================

${buildConversationPrompt(history)}

====================================================
LATEST USER QUESTION
====================================================

${message}

====================================================
IMPORTANT
====================================================

Return ONLY valid JSON.

Format:

{
  "reply": "...",
  "reasoning": "Explain briefly WHY this answer was produced using the supplied scenario."
}

Rules:

- Never use markdown.
- Never wrap JSON in code blocks.
- Never invent information.
- Base reasoning only on supplied scenario and previous conversation.
- reasoning should be concise (1-3 sentences).
`;

    const result = await model.generateContent(prompt);

    const parsed = parseGeminiJSON(
      result.response.text()
    );

    addConversationMessage(sessionId, "assistant", parsed.reply);

    return {
      reply: parsed.reply,
      reasoning: parsed.reasoning,
    };
  } catch (error) {
    console.error("Chat Gemini Error:", error);

    const reply = mockChatResponse({
      message,
      analysis,
    });

    addConversationMessage(sessionId, "assistant", reply);

    return {
      reply,
      reasoning:
        "Generated using ArenaPilot AI fallback mode because the AI service was unavailable.",
    };
  }
};

export default generateChatResponse;
