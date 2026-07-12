import { getSettings, updateSettings } from "../services/settingsStore.js";

export const getSettingsController = (req, res) => {
  return res.status(200).json({
    success: true,
    settings: getSettings(),
  });
};

export const updateSettingsController = (req, res) => {
  const next = req.body?.settings ?? req.body;

  const updated = updateSettings(next);

  return res.status(200).json({
    success: true,
    settings: updated,
  });
};

