import { useEffect, useMemo, useState } from "react";
import { FaRobot, FaBell, FaCircle, FaSatelliteDish } from "react-icons/fa";

const CommandCenterDashboardHeader = ({ analysis }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const status = useMemo(() => {
    const overall = analysis?.overallStatus;
    if (!overall) return { label: "Monitoring", tone: "text-cyan-400" };

    // Map backend status to colors
    if (overall === "Critical") return { label: overall, tone: "text-red-400" };
    if (overall === "High Alert") return { label: overall, tone: "text-yellow-300" };
    if (overall === "Moderate") return { label: overall, tone: "text-cyan-400" };
    return { label: overall, tone: "text-emerald-400" };
  }, [analysis]);

  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
              <FaRobot size={18} />
            </span>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white">
                Command Center
              </h1>
              <p className="text-sm text-slate-400">
                Enterprise operations & AI decisioning for stadium events
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-300">
              <FaSatelliteDish className="text-cyan-400" />
              Live Intelligence
            </div>

            <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-slate-200">
              <FaCircle className="text-[10px] text-slate-300" />
              Decision Feed
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-emerald-300">
              <FaCircle className="text-[10px] text-emerald-400" />
              Systems Online
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">AI Status</p>
            <h3 className="mt-2 text-lg font-bold text-emerald-400">Online</h3>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">Active Alerts</p>
            <h3 className="mt-2 flex items-center gap-2 text-lg font-bold text-red-400">
              <FaBell />
              03
            </h3>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">Operational Status</p>
            <h3 className={`mt-2 text-lg font-bold ${status.tone}`}>{status.label}</h3>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">Local Time</p>
            <h3 className="mt-2 text-lg font-bold text-white">{time}</h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CommandCenterDashboardHeader;

