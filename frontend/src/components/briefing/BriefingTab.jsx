import ExecutiveSummary from "./ExecutiveSummary";
import RiskAssessment from "./RiskAssessment";
import ActionPlan from "./ActionPlan";
import PublicAnnouncement from "./PublicAnnouncement";
import AIConfidence from "./AIConfidence";
import NextActions from "./NextActions";

const BriefingTab = ({ analysis }) => {
  return (
    <div className="space-y-6">

      <div className="grid gap-6 lg:grid-cols-2">
        <ExecutiveSummary analysis={analysis} />
        <RiskAssessment analysis={analysis} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ActionPlan analysis={analysis} />
        <PublicAnnouncement analysis={analysis} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <AIConfidence />
        <NextActions />
      </div>

    </div>
  );
};

export default BriefingTab;