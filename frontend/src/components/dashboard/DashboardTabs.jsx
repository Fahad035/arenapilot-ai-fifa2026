import { motion } from "framer-motion";

import {
  FaChartPie,
  FaUsers,
  FaRobot,
  FaRoute,
  FaBroadcastTower,
  FaHistory,
  FaComments,
  FaCog,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const tabs = [
  { id: "overview", label: "Overview", icon: FaChartPie },
  { id: "crowd", label: "Crowd Intelligence", icon: FaUsers },
  { id: "briefing", label: "AI Briefing", icon: FaRobot },
  { id: "navigator", label: "Navigator", icon: FaRoute },
  { id: "operations", label: "Operations", icon: FaBroadcastTower },
  { id: "history", label: "History", icon: FaHistory },
  { id: "assistant", label: "AI Assistant", icon: FaComments },
  { id: "settings", label: "Settings", icon: FaCog },
];

const DashboardTabs = ({
  activeTab,
  setActiveTab,
  collapsed,
  setCollapsed,
}) => {
  return (
    <aside
      className={`sticky top-24 h-fit shrink-0 transition-all duration-300 ${
        collapsed ? "w-24" : "w-72"
      }`}
    >
      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 backdrop-blur-xl">

        {/* Header */}

        <div className="mb-6 flex items-center justify-between">

          {!collapsed && (
            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Navigation
              </p>

              <h3 className="mt-1 text-lg font-bold text-white">
                ArenaPilot
              </h3>

            </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-xl bg-slate-800 p-3 transition hover:bg-slate-700"
          >
            {collapsed ? (
              <FaChevronRight />
            ) : (
              <FaChevronLeft />
            )}
          </button>

        </div>

        {/* Tabs */}

        <div className="space-y-2">

          {tabs.map((tab) => {
            const Icon = tab.icon;

            const active = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative flex w-full items-center rounded-2xl p-4 transition"
              >
                {active && (
                  <motion.div
                    layoutId="sidebarActive"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                    className="absolute inset-0 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600"
                  />
                )}

                <Icon
                  className={`relative z-10 text-lg ${
                    active
                      ? "text-white"
                      : "text-slate-400"
                  }`}
                />

                {!collapsed && (
                  <span
                    className={`relative z-10 ml-4 font-medium ${
                      active
                        ? "text-white"
                        : "text-slate-300"
                    }`}
                  >
                    {tab.label}
                  </span>
                )}
              </button>
            );
          })}

        </div>

        {/* Bottom */}

        {!collapsed && (

          <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">

            <p className="text-xs uppercase tracking-widest text-cyan-400">
              AI STATUS
            </p>

            <h3 className="mt-2 text-lg font-bold text-white">
              ArenaPilot Online
            </h3>

            <div className="mt-4 flex items-center gap-2">

              <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />

              <span className="text-sm text-slate-300">
                All services operational
              </span>

            </div>

          </div>

        )}

      </div>
    </aside>
  );
};

export default DashboardTabs;