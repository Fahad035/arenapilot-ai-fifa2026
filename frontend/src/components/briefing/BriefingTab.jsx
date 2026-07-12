import ExecutiveSummary from "../briefing/ExecutiveSummary";
import AIResponse from "../briefing/AIResponse";
import RecommendationCard from "../briefing/RecommendationCard";
import IncidentPanel from "../briefing/IncidentPanel";
import RulesEngineCard from "../briefing/RulesEngineCard";
import AnnouncementCard from "../briefing/AnnouncementCard";
import DownloadReport from "../briefing/DownloadReport";

import BriefingSkeleton from "./BriefingSkeleton";

const BriefingTab = ({ analysis }) => {
  // Keep skeleton ONLY while analysis is truly not available.
  // When live polling updates partial fields, cards should still render
  // using their own internal fallbacks.
  if (analysis === null) {
    return <BriefingSkeleton />;
  }

  return (
    <div className="space-y-8">
      {/* Executive Summary */}
      <ExecutiveSummary analysis={analysis} />

      {/* AI Response */}
      <AIResponse analysis={analysis} />

      {/* Recommendations + Incident */}
      <div className="grid gap-8 xl:grid-cols-2">
        <RecommendationCard analysis={analysis} />
        <IncidentPanel analysis={analysis} />
      </div>

      {/* Rules Engine */}
      <RulesEngineCard analysis={analysis} />

      {/* Announcement + Report */}
      <div className="grid gap-8 lg:grid-cols-2">
        <AnnouncementCard analysis={analysis} />
        <DownloadReport analysis={analysis} />
      </div>
    </div>
  );
};

export default BriefingTab;

