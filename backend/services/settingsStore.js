const defaultSettings = {
  language: "English",
  theme: {
    darkTheme: true,
    glassEffect: true,
  },
  accessibility: {
    highContrast: false,
    largeText: false,
    keyboardNavigation: true,
  },
  notifications: {
    criticalAlerts: true,
    transportUpdates: true,
    aiReports: true,
  },
};

// In-memory store (resets on server restart). Can be swapped with a DB later.
let settings = { ...defaultSettings };

export const getSettings = () => settings;

export const updateSettings = (next) => {
  // shallow merge to preserve nested objects if partial updates come in
  settings = {
    ...settings,
    ...next,
    theme: { ...settings.theme, ...(next?.theme || {}) },
    accessibility: {
      ...settings.accessibility,
      ...(next?.accessibility || {}),
    },
    notifications: {
      ...settings.notifications,
      ...(next?.notifications || {}),
    },
  };

  return settings;
};

export const resetSettings = () => {
  settings = { ...defaultSettings };
  return settings;
};

