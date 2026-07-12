import express from "express";

import { getSavedScenarios } from "../services/historyStore.js";

const router = express.Router();

// Returns the latest saved analysis snapshot.
// This is used by the frontend to simulate "live" updates after generation.
router.get("/latest", (req, res) => {
  const history = getSavedScenarios();
  const latest = history?.[0] ?? null;

  res.status(200).json({
    success: true,
    latest,
    timestamp: new Date().toISOString(),
  });
});

export default router;

