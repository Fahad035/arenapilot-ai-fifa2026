import { getGeminiModel } from "../config/gemini.js";
import mockChatResponse from "../mock/mockChatResponse.js";

import {
  getConversation,
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

const generateChatResponse = async ({
  sessionId = "default",
  message,
  analysis,
}) => {
  // Save current user message
  addConversationMessage(sessionId, {
    role: "user",
    text: message,
  });

  const history = getConversation(sessionId);

  if (USE_MOCK) {
    const reply = mockChatResponse({
      message,
      analysis,
    });

    addConversationMessage(sessionId, {
      role: "assistant",
      text: reply,
    });

    return reply;
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
INSTRUCTIONS
====================================================

- Remember previous conversation.
- Answer based on BOTH the scenario and previous messages.
- Never invent information.
- If information is unavailable, clearly say so.
- Be concise.
- Use bullet points whenever helpful.
`;

    const result = await model.generateContent(prompt);

    const reply = result.response.text();

    addConversationMessage(sessionId, {
      role: "assistant",
      text: reply,
    });

    return reply;
  } catch (error) {
    console.error("Chat Gemini Error:", error);

    const reply = mockChatResponse({
      message,
      analysis,
    });

    addConversationMessage(sessionId, {
      role: "assistant",
      text: reply,
    });

    return reply;
  }
};

export default generateChatResponse;