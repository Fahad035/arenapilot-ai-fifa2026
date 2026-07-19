import { lazy, Suspense, useState } from "react";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardTabs from "../components/dashboard/DashboardTabs";
import AlertTicker from "../components/alerts/AlertTicker";
import RouteFallback from "../components/ui/RouteFallback";

const OverviewTab = lazy(() => import("../components/overview/OverviewTab"));
const CrowdTab = lazy(() => import("../components/crowd/CrowdTab"));
const BriefingTab = lazy(() => import("../components/briefing/BriefingTab"));
const NavigatorTab = lazy(() => import("../components/navigator/NavigatorTab"));
const OperationsTab = lazy(() => import("../components/operations/OperationsTab"));
const HistoryTab = lazy(() => import("../components/history/HistoryTab"));
const AIAssistantTab = lazy(() => import("../components/assistant/AIAssistantTab"));
const AlertTab = lazy(() => import("../components/alerts/SettingsTab"));

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const [scenarioData, setScenarioData] = useState({});

  const [analysis, setAnalysis] = useState(null);

  const [history] = useState([]);

  const [loading, setLoading] = useState(false);

  const renderActiveTab = () => {
    switch (activeTab) {
      case "overview":
        return (
          <OverviewTab
            scenarioData={scenarioData}
            setScenarioData={setScenarioData}
            analysis={analysis}
            setAnalysis={setAnalysis}
            loading={loading}
            setLoading={setLoading}
          />
        );
      case "crowd":
        return <CrowdTab analysis={analysis} />;
      case "briefing":
        return <BriefingTab analysis={analysis} />;
      case "navigator":
        return <NavigatorTab analysis={analysis} />;
      case "operations":
        return <OperationsTab analysis={analysis} />;
      case "history":
        return <HistoryTab history={history} />;
      case "assistant":
        return <AIAssistantTab analysis={analysis} />;
      case "alert":
        return <AlertTab analysis={analysis} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <DashboardTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />

      <div
        className={`transition-all duration-300 ${
          sidebarCollapsed ? "ml-24" : "ml-72"
        }`}
      >
        <DashboardHeader activeTab={activeTab} analysis={analysis} />
        <AlertTicker analysis={analysis} />
        <main className="p-8">
          <Suspense fallback={<RouteFallback />}>
            {renderActiveTab()}
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
