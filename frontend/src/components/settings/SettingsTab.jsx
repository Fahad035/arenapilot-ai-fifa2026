import { useEffect, useState } from "react";

import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";
import AccessibilitySettings from "./AccessibilitySettings";
import NotificationSettings from "./NotificationSettings";

import { fetchSettings, saveSettings } from "../../services/settingsService";

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

const SettingsTab = () => {
  const [settings, setSettings] = useState(defaultSettings);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const s = await fetchSettings();
        if (mounted) setSettings({ ...defaultSettings, ...s });
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, []);

  const persist = async (nextSettings) => {
    setSettings(nextSettings);
    // fire-and-forget style persistence (keeps UI responsive)
    try {
      await saveSettings(nextSettings);
    } catch (e) {
      // revert is intentionally skipped for now; could add later
      console.error(e);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <LanguageSelector
        value={settings.language}
        onChange={(language) =>
          persist({ ...settings, language })
        }
      />

      <ThemeSelector
        value={settings.theme}
        onChange={(theme) =>
          persist({ ...settings, theme })
        }
      />

      <AccessibilitySettings
        value={settings.accessibility}
        onChange={(accessibility) =>
          persist({ ...settings, accessibility })
        }
      />

      <NotificationSettings
        value={settings.notifications}
        onChange={(notifications) =>
          persist({ ...settings, notifications })
        }
      />

      {loading && (
        <div className="lg:col-span-2 text-sm text-slate-400">
          Loading settings...
        </div>
      )}
    </div>
  );
};

export default SettingsTab;
