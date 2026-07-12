import Card from "../ui/Card";

const AccessibilitySettings = ({
  value,
  onChange,
}) => {
  return (
    <Card>
      <h2 className="text-xl font-bold text-white">
        Accessibility
      </h2>

      <div className="mt-5 space-y-4">
        <label className="flex justify-between">
          <span>High Contrast</span>
          <input
            type="checkbox"
            checked={!!value?.highContrast}
            onChange={(e) =>
              onChange({
                ...value,
                highContrast: e.target.checked,
              })
            }
          />
        </label>

        <label className="flex justify-between">
          <span>Large Text</span>
          <input
            type="checkbox"
            checked={!!value?.largeText}
            onChange={(e) =>
              onChange({
                ...value,
                largeText: e.target.checked,
              })
            }
          />
        </label>

        <label className="flex justify-between">
          <span>Keyboard Navigation</span>
          <input
            type="checkbox"
            checked={!!value?.keyboardNavigation}
            onChange={(e) =>
              onChange({
                ...value,
                keyboardNavigation: e.target.checked,
              })
            }
          />
        </label>
      </div>
    </Card>
  );
};

export default AccessibilitySettings;
