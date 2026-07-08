import { useState } from "react";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardTabs from "../components/dashboard/DashboardTabs";

// Feature Tabs
import OverviewTab from "../components/overview/OverviewTab";
import CrowdTab from "../components/crowd/CrowdTab";
import BriefingTab from "../components/briefing/BriefingTab";
import NavigatorTab from "../components/navigator/NavigatorTab";
import OperationsTab from "../components/operations/OperationsTab";
import HistoryTab from "../components/history/HistoryTab";
import AIAssistantTab from "../components/assistant/AIAssistantTab";
import SettingsTab from "../components/settings/SettingsTab";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const [scenarioData, setScenarioData] = useState({});
  const [analysis, setAnalysis] = useState(null);
  const [history] = useState([]);
  const [loading, setLoading] = useState(false);

  const tabComponents = {
    overview: (
      <OverviewTab
        scenarioData={scenarioData}
        setScenarioData={setScenarioData}
        analysis={analysis}
        setAnalysis={setAnalysis}
        loading={loading}
        setLoading={setLoading}
      />
    ),

    crowd: <CrowdTab analysis={analysis} />,

    briefing: <BriefingTab analysis={analysis} />,

    navigator: <NavigatorTab analysis={analysis} />,

    operations: <OperationsTab analysis={analysis} />,

    history: <HistoryTab history={history} />,

    assistant: <AIAssistantTab analysis={analysis} />,

    settings: <SettingsTab />,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <DashboardHeader />

      <div className="mx-auto flex max-w-[1800px] gap-6 px-6 py-8">

        <DashboardTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
        />

        <main className="min-w-0 flex-1 transition-all duration-300">
          {tabComponents[activeTab]}
        </main>

      </div>

    </div>
  );
};

export default Dashboard;