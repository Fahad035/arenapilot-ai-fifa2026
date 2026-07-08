import { useState } from "react";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardTabs from "../components/dashboard/DashboardTabs";

import OverviewTab from "../components/dashboard/OverviewTab";
import CrowdTab from "../components/dashboard/CrowdTab";
import BriefingTab from "../components/dashboard/BriefingTab";
import NavigatorTab from "../components/dashboard/NavigatorTab";
import HistoryTab from "../components/dashboard/HistoryTab";

import useDashboard from "../hooks/useDashboard";

const Dashboard = () => {
  const [tab, setTab] = useState("overview");

  const {
    scenarioData,
    setScenarioData,

    analysis,
    setAnalysis,

    history,

    loading,
    setLoading,
  } = useDashboard();

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10">

      <div className="mx-auto max-w-7xl">

        <DashboardHeader />

        <DashboardTabs
          activeTab={tab}
          setActiveTab={setTab}
        />

        <div className="mt-10">

          {tab === "overview" && (
            <OverviewTab
              scenarioData={scenarioData}
              setScenarioData={setScenarioData}
              analysis={analysis}
              setAnalysis={setAnalysis}
              loading={loading}
              setLoading={setLoading}
            />
          )}

          {tab === "crowd" && <CrowdTab />}

          {tab === "briefing" && (
            <BriefingTab analysis={analysis} />
          )}

          {tab === "navigator" && (
            <NavigatorTab />
          )}

          {tab === "history" && (
            <HistoryTab history={history} />
          )}

        </div>

      </div>

    </main>
  );
};

export default Dashboard;