const DEFAULT_RULES = `
IMPORTANT RULES

1. Never invent facts.
2. Only use the provided structured analysis.
3. Never modify scores or risk levels.
4. Never create recommendations not present in the analysis.
5. Keep responses concise and professional.
6. Use Markdown formatting.
`;

const promptBuilder = ({
  role,
  instructions,
  analysis,
}) => {
  return `
${role}

${DEFAULT_RULES}

${instructions}

Structured Analysis

${JSON.stringify(analysis, null, 2)}
`;
};

export default promptBuilder;