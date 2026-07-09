import analyzeScenario from "../services/analysisService.js";
import generateBriefing from "../services/geminiService.js";
import formatResponse from "../services/responseFormatter.js";
import { addSavedScenario, getSavedScenarios } from "../services/historyStore.js";

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

    addSavedScenario({
      scenarioName:
        validation.data.eventName ||
        validation.data.stadium ||
        validation.data.match ||
        "Unnamed Scenario",
      attendance:
        response.metrics?.attendance ?? validation.data.attendance ?? 0,
      risk: analysis.analysis?.risk?.level ?? response.risk,
      confidence: response.confidence,
      recommendedRoute: response.route,
      summary: response.summary,
      timestamp: response.timestamp,
      score: analysis.overallScore,
      medicalRisk: response.metrics?.medicalRisk,
      securityRisk: response.metrics?.securityScore,
      weatherRisk: analysis.analysis?.risk?.weatherRisk,
    });

    return res.status(200).json(response);

  } catch (error) {
    next(error);
  }
};

export const getScenarioHistoryController = (req, res) => {
  return res.status(200).json({
    success: true,
    history: getSavedScenarios(),
  });
};