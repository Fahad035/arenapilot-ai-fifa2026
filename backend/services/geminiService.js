import { getGeminiModel } from "../config/gemini.js";
import briefingPrompt from "../prompts/briefingPrompt.js";
import mockBriefing from "../mock/mockChatResponse.js";

const USE_MOCK = process.env.USE_MOCK_AI === "true";

const generateBriefing = async (analysis) => {
  if (USE_MOCK) {
    console.log("Using Mock AI Response...");
    return mockBriefing(analysis);
  }

  try {
    const model = getGeminiModel();
    const prompt = briefingPrompt(analysis);

    const result = await model.generateContent(prompt);

    const response = await result.response;

    return response.text();

  } catch (error) {
    console.error("Gemini Error:", error);

    console.log("Falling back to Mock AI...");

    return mockBriefing(analysis);
  }
};

export default generateBriefing;
