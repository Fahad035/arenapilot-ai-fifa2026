import AlertSummaryCards from "./AlertSummaryCards";
import LiveAlertsList from "./LiveAlertsList";
import EmergencyActions from "./EmergencyActions";
import AlertStatistics from "./AlertStatistics";
import AlertHistoryTable from "./AlertHistoryTable";

const SettingsTab = ({ analysis }) => {
  return (
    <div className="space-y-8">

      <AlertSummaryCards analysis={analysis} />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        <div className="xl:col-span-2">
          <LiveAlertsList analysis={analysis} />
        </div>

        <AlertStatistics analysis={analysis} />

      </div>

      <EmergencyActions analysis={analysis} />

      <AlertHistoryTable analysis={analysis} />

    </div>
  );
};

export default SettingsTab;