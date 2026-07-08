import StatsCards from "../overview/StatsCards";
import ScenarioForm from "../overview/ScenarioForm";
import QuickSummary from "../overview/QuickSummary";
import LiveStatus from "../overview/LiveStatus";
import OperationsFeed from "../overview/OperationsFeed";

const OverviewTab = ({
  scenarioData,
  setScenarioData,
  analysis,
  setAnalysis,
  loading,
  setLoading,
}) => {
  return (
    <div className="space-y-8">

      <StatsCards />

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <ScenarioForm
            scenarioData={scenarioData}
            setScenarioData={setScenarioData}
            analysis={analysis}
            setAnalysis={setAnalysis}
            loading={loading}
            setLoading={setLoading}
          />
        </div>

        <LiveStatus />

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <QuickSummary analysis={analysis} />

        <OperationsFeed />

      </div>

    </div>
  );
};

export default OverviewTab;