import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";
import AccessibilitySettings from "./AccessibilitySettings";
import NotificationSettings from "./NotificationSettings";

const SettingsTab = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-2">

      <LanguageSelector />

      <ThemeSelector />

      <AccessibilitySettings />

      <NotificationSettings />

    </div>
  );
};

export default SettingsTab;