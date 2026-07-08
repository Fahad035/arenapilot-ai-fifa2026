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
} from "react-icons/fa";

const tabs = [
  {
    id: "overview",
    label: "Overview",
    icon: FaChartPie,
  },
  {
    id: "crowd",
    label: "Crowd",
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
    label: "Assistant",
    icon: FaComments,
  },
  {
    id: "settings",
    label: "Settings",
    icon: FaCog,
  },
];

const DashboardTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="sticky top-22 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex gap-3 overflow-x-auto py-4 scrollbar-hide">

          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative flex items-center gap-3 whitespace-nowrap rounded-xl px-5 py-3 transition-all duration-300"
              >
                {/* Active Background */}
                {active && (
                  <motion.div
                    layoutId="activeTab"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                    className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500"
                  />
                )}

                {/* Icon */}
                <Icon
                  className={`relative z-10 text-lg transition-colors duration-300 ${
                    active
                      ? "text-white"
                      : "text-slate-400"
                  }`}
                />

                {/* Label */}
                <span
                  className={`relative z-10 text-sm font-semibold transition-colors duration-300 ${
                    active
                      ? "text-white"
                      : "text-slate-300"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardTabs;