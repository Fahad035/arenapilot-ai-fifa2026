import { GoogleGenerativeAI } from "@google/generative-ai";

export const getGeminiModel = () => {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    const err = new Error(
      "GEMINI_API_KEY is missing. Ensure your .env is loaded and GEMINI_API_KEY is set."
    );
    err.code = "GEMINI_API_KEY_MISSING";
    throw err;
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  return genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });
};
