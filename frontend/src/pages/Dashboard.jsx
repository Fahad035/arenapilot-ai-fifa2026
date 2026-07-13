import { useState } from "react";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardTabs from "../components/dashboard/DashboardTabs";

import OverviewTab from "../components/overview/OverviewTab";
import CrowdTab from "../components/crowd/CrowdTab";
import BriefingTab from "../components/briefing/BriefingTab";
import NavigatorTab from "../components/navigator/NavigatorTab";
import OperationsTab from "../components/operations/OperationsTab";
import HistoryTab from "../components/history/HistoryTab";
import AIAssistantTab from "../components/assistant/AIAssistantTab";
import AlertTab from "../components/alerts/SettingsTab";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const [sidebarCollapsed, setSidebarCollapsed] =
    useState(false);

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

    navigator: (
      <NavigatorTab analysis={analysis} />
    ),

    operations: (
      <OperationsTab analysis={analysis} />
    ),

    history: (
      <HistoryTab history={history} />
    ),

    assistant: (
      <AIAssistantTab analysis={analysis} />
    ),

    alert: (
      <AlertTab analysis={analysis} />
    ),
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Fixed Sidebar */}
      <DashboardTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />

      {/* Everything on the right */}
      <div
        className={`transition-all duration-300 ${sidebarCollapsed ? "ml-24" : "ml-72"
          }`}
      >

        <DashboardHeader
          activeTab={activeTab}
          analysis={analysis}
        />

        <main className="p-8">
          {tabComponents[activeTab]}
        </main>

      </div>

    </div>
  );
};

export default Dashboard;