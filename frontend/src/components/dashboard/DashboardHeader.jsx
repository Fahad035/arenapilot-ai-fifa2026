import { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaBell,
  FaRobot,
  FaCloudSun,
  FaCircle,
} from "react-icons/fa";

const DashboardHeader = () => {
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

  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}
        <div>

          <div className="mb-3 flex items-center gap-3">

            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
              <FaRobot size={18} />
            </span>

            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white">
                ArenaPilot AI
              </h1>

              <p className="text-sm text-slate-400">
                Intelligent FIFA World Cup Operations Center
              </p>
            </div>

          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm">

            <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-300">

              <FaMapMarkerAlt />

              Lusail Stadium

            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-emerald-300">

              <FaCircle className="text-[10px]" />

              Live Operations

            </div>

            <div className="flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-yellow-300">

              <FaCloudSun />

              29°C Clear

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4">

            <p className="text-xs uppercase tracking-wide text-slate-500">
              AI Status
            </p>

            <h3 className="mt-2 text-lg font-bold text-emerald-400">
              Online
            </h3>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4">

            <p className="text-xs uppercase tracking-wide text-slate-500">
              Active Alerts
            </p>

            <h3 className="mt-2 flex items-center gap-2 text-lg font-bold text-red-400">

              <FaBell />

              03

            </h3>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4">

            <p className="text-xs uppercase tracking-wide text-slate-500">
              Crowd Status
            </p>

            <h3 className="mt-2 text-lg font-bold text-cyan-400">
              Moderate
            </h3>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4">

            <p className="text-xs uppercase tracking-wide text-slate-500">
              Local Time
            </p>

            <h3 className="mt-2 text-lg font-bold text-white">
              {time}
            </h3>

          </div>

        </div>

      </div>
    </header>
  );
};

export default DashboardHeader;