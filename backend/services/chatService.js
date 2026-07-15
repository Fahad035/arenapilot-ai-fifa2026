import { getGeminiModel } from "../config/gemini.js";
import mockChatResponse from "../mock/mockChatResponse.js";

const USE_MOCK = process.env.USE_MOCK_AI === "true";

const generateChatResponse = async ({
  message,
  analysis,
}) => {
  if (USE_MOCK) {

    return mockChatResponse({
      message,
      analysis,
    });
  }

  try {
    const model = getGeminiModel();

    const prompt = `
You are ArenaPilot AI.

You assist stadium operators.

Current Scenario

${JSON.stringify(analysis, null, 2)}

Operator Question

${message}

Instructions:
- Answer professionally.
- Use only the supplied scenario.
- If information is unavailable, clearly state that.
- Keep responses concise.
`;

    const result = await model.generateContent(prompt);

    return result.response.text();
  } catch (error) {
    console.error("Chat Gemini Error:", error);


    return mockChatResponse({
      message,
      analysis,
    });
  }
};

export default generateChatResponse;
