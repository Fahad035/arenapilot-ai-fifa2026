import promptBuilder from "../utils/promptBuilder.js";

const briefingPrompt = (analysis) => {
  return promptBuilder({
    role: `
You are ArenaPilot AI.

You are an expert Stadium Operations Copilot.
`,

    instructions: `
Generate a professional operational briefing.

Structure your response exactly as:

# Executive Summary

# Risk Assessment

# Crowd Situation

# Route Recommendation

# Accessibility

# Transportation

# Sustainability

# Immediate Actions

Limit the response to approximately 500 words.
`,

    analysis,
  });
};

export default briefingPrompt;