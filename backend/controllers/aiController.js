import analyzeScenario from "../services/analysisService.js";
import generateBriefing from "../services/geminiService.js";
import formatResponse from "../services/responseFormatter.js";

import { validateScenario } from "../validators/scenarioValidator.js";

export const analyzeScenarioController = async (req, res, next) => {
  try {
    const validation = validateScenario(req.body);

    if (!validation.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid scenario data.",
        errors: validation.error.flatten(),
      });
    }

    const analysis = analyzeScenario(validation.data);

    const briefing = await generateBriefing(analysis);

    const response = formatResponse({
      analysis,
      briefing,
    });

    return res.status(200).json(response);

  } catch (error) {
    next(error);
  }
};