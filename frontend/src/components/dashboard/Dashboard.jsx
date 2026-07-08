import { useState } from "react";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardTabs from "../components/dashboard/DashboardTabs";

import OverviewTab from "../components/dashboard/OverviewTab";
import CrowdTab from "../components/dashboard/CrowdTab";
import BriefingTab from "../components/dashboard/BriefingTab";
import NavigatorTab from "../components /dashboard/NavigatorTab";
import HistoryTab from "../components/dashboard/HistoryTab";
import OperationsTab from "../components/operations/OperationsTab";
import AIAssistantTab from "../components/assistant/AIAssistantTab";
import SettingsTab from "../components/settings/SettingsTab";


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const [scenarioData, setScenarioData] = useState({});

  const [analysis, setAnalysis] = useState(null);

  const [history] = useState([]);

  const [loading, setLoading] = useState(false);

  const renderTab = () => {
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
        return <OperationsTab />;

      case "history":
        return <HistoryTab history={history} />;

      case "assistant":
        return <AIAssistantTab />;

      case "settings":
        return <SettingsTab />;

      default:
        return (
          <div className="rounded-xl border border-red-500 bg-red-500/10 p-6 text-red-300">
            Unknown tab: {activeTab}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <DashboardHeader />

      <DashboardTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {renderTab()}
      </div>

    </div>
  );
};

export default Dashboard;