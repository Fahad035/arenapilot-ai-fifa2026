import KPICards from "./KPICards";
import LiveIncidents from "./LiveIncidents";
import SystemHealth from "./SystemHealth";
import StaffDeployment from "./StaffDeployment";
import TransportStatus from "./TransportStatus";
import AnnouncementGenerator from "./AnnouncementGenerator";
import EventTimeline from "./EventTimeline";

const OperationsTab = () => {
  return (
    <div className="space-y-6">

      <KPICards />

      <div className="grid gap-6 lg:grid-cols-2">
        <LiveIncidents />
        <SystemHealth />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <StaffDeployment />
        <TransportStatus />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <AnnouncementGenerator />
        <EventTimeline />
      </div>

    </div>
  );
};

export default OperationsTab;