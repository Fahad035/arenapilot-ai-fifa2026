import express from "express";

import {
  getSettingsController,
  updateSettingsController,
} from "../controllers/settingsController.js";

const router = express.Router();

router.get("/", getSettingsController);
router.post("/", updateSettingsController);

export default router;

