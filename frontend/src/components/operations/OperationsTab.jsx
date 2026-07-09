import KPICards from "./KPICards";
import LiveIncidents from "./LiveIncidents";
import SystemHealth from "./SystemHealth";
import StaffDeployment from "./StaffDeployment";
import TransportStatus from "./TransportStatus";
import AnnouncementGenerator from "./AnnouncementGenerator";
import EventTimeline from "./EventTimeline";

const OperationsTab = ({ analysis }) => {
  return (
    <div className="space-y-6">

      <KPICards analysis={analysis} />

      <div className="grid gap-6 lg:grid-cols-2">
        <LiveIncidents analysis={analysis} />
        <SystemHealth analysis={analysis} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <StaffDeployment analysis={analysis} />
        <TransportStatus analysis={analysis} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <AnnouncementGenerator analysis={analysis} />
        <EventTimeline analysis={analysis} />
      </div>

    </div>
  );
};

export default OperationsTab;