import Card from "../ui/Card";

const ThemeSelector = ({
  value,
  onChange,
}) => {
  return (
    <Card>
      <h2 className="text-xl font-bold text-white">
        Appearance
      </h2>

      <div className="mt-5 space-y-3">
        <label className="flex justify-between">
          <span>Dark Theme</span>
          <input
            type="checkbox"
            checked={!!value?.darkTheme}
            onChange={(e) =>
              onChange({
                ...value,
                darkTheme: e.target.checked,
              })
            }
          />
        </label>

        <label className="flex justify-between">
          <span>Glass Effect</span>
          <input
            type="checkbox"
            checked={!!value?.glassEffect}
            onChange={(e) =>
              onChange({
                ...value,
                glassEffect: e.target.checked,
              })
            }
          />
        </label>
      </div>
    </Card>
  );
};

export default ThemeSelector;
