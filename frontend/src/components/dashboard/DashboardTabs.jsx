import { motion } from "framer-motion";

import {
  FaChartPie,
  FaUsers,
  FaRobot,
  FaRoute,
  FaBroadcastTower,
  FaHistory,
  FaComments,
  FaBell,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import Logo from "../common/Logo";

const tabs = [
  {
    id: "overview",
    label: "Overview",
    icon: FaChartPie,
  },
  {
    id: "crowd",
    label: "Crowd Intelligence",
    icon: FaUsers,
  },
  {
    id: "briefing",
    label: "AI Briefing",
    icon: FaRobot,
  },
  {
    id: "navigator",
    label: "Navigator",
    icon: FaRoute,
  },
  {
    id: "operations",
    label: "Operations",
    icon: FaBroadcastTower,
  },
  {
    id: "history",
    label: "History",
    icon: FaHistory,
  },
  {
    id: "assistant",
    label: "AI Assistant",
    icon: FaComments,
  },
  {
    id: "alert",
    label: "Alerts",
    icon: FaBell,
  },
];

const DashboardTabs = ({
  activeTab,
  setActiveTab,
  collapsed,
  setCollapsed,
}) => {
  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-screen overflow-y-auto border-r border-slate-800 bg-[#070b18] transition-all duration-300 ease-in-out ${
    collapsed ? "w-24" : "w-72"
  }`}
    >
      <div className="flex h-full flex-col p-6">

        {/* Logo */}

        {/* Top */}

        <div
          className={`mb-8 flex ${collapsed
            ? "justify-center"
            : "items-start justify-between"
            }`}
        >

          <Logo collapsed={collapsed} />

          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 transition ${collapsed
              ? "justify-center"
              : "justify-between  "
              }`}
          >
            {collapsed ? (
              <FaChevronRight />
            ) : (
              <FaChevronLeft />
            )}
          </button>

        </div>

        {/* Navigation */}

        <div className="mt-6 flex-1 space-y-2">

          {tabs.map((tab) => {
            const Icon = tab.icon;

            const active =
              activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveTab(tab.id)
                }
                className="relative flex w-full items-center overflow-hidden rounded-2xl p-4"
              >
                {active && (
                  <motion.div
                    layoutId="activeSidebar"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    className="absolute inset-0 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600"
                  />
                )}

                <Icon
                  className={`relative z-10 text-lg ${active
                    ? "text-white"
                    : "text-slate-400"
                    }`}
                />

                {!collapsed && (
                  <span
                    className={`relative z-10 ml-4 font-medium ${active
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

        {/* Footer */}

        {!collapsed && (
          <div className="mt-auto pt-6">
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">

              <p className="text-xs uppercase tracking-widest text-cyan-400">
                AI STATUS
              </p>

              <h3 className="mt-2 text-lg font-bold text-white">
                ArenaPilot Online
              </h3>

              <div className="mt-4 flex items-center gap-2">

                <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />

                <span className="text-sm text-slate-300">
                  All systems operational
                </span>

              </div>

            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default DashboardTabs;