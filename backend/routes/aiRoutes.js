import express from "express";

import {
  analyzeScenarioController,
  getScenarioHistoryController,
} from "../controllers/aiController.js";

const router = express.Router();

router.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "ArenaPilot API is running.",
  });
});

router.post(
  "/analyze",
  analyzeScenarioController
);

router.get("/history", getScenarioHistoryController);

export default router;