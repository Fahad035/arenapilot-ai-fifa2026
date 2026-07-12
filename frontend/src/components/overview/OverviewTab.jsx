import StatsCards from "./StatsCards";
import ScenarioForm from "./ScenarioForm";
import QuickSummary from "./QuickSummary";
import LiveStatus from "./LiveStatus";
import OperationsFeed from "./OperationsFeed";

import useLivePolling from "./useLivePolling";

const OverviewTab = ({
  scenarioData,
  setScenarioData,
  analysis,
  setAnalysis,
  loading,
  setLoading,
}) => {
  // Poll for latest saved snapshot after analysis is generated.
  useLivePolling({
    enabled: !!analysis && !loading,
    setAnalysis,
    intervalMs: 4000,
  });
  return (
    <div className="space-y-8">

      {/* ========= TOP KPI CARDS ========= */}

      <StatsCards analysis={analysis} />

      {/* ========= MAIN GRID ========= */}

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">

        {/* LEFT */}

        <div className="xl:col-span-2">

          <ScenarioForm
            scenarioData={scenarioData}
            setScenarioData={setScenarioData}
            analysis={analysis}
            setAnalysis={setAnalysis}
            loading={loading}
            setLoading={setLoading}
          />

        </div>

        {/* RIGHT */}

        <div>

          <QuickSummary analysis={analysis} />

        </div>

      </div>

      {/* ========= LOWER GRID ========= */}

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

        <LiveStatus analysis={analysis} />

        <OperationsFeed analysis={analysis} />

      </div>

    </div>
  );
};

export default OverviewTab;