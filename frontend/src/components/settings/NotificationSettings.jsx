import Card from "../ui/Card";

const NotificationSettings = ({
  value,
  onChange,
}) => {
  return (
    <Card>
      <h2 className="text-xl font-bold text-white">
        Notifications
      </h2>

      <div className="mt-5 space-y-4">
        <label className="flex justify-between">
          <span>Critical Alerts</span>
          <input
            type="checkbox"
            checked={!!value?.criticalAlerts}
            onChange={(e) =>
              onChange({
                ...value,
                criticalAlerts: e.target.checked,
              })
            }
          />
        </label>

        <label className="flex justify-between">
          <span>Transport Updates</span>
          <input
            type="checkbox"
            checked={!!value?.transportUpdates}
            onChange={(e) =>
              onChange({
                ...value,
                transportUpdates: e.target.checked,
              })
            }
          />
        </label>

        <label className="flex justify-between">
          <span>AI Reports</span>
          <input
            type="checkbox"
            checked={!!value?.aiReports}
            onChange={(e) =>
              onChange({
                ...value,
                aiReports: e.target.checked,
              })
            }
          />
        </label>
      </div>
    </Card>
  );
};

export default NotificationSettings;
