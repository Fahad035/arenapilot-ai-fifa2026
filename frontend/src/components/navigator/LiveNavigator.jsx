import { useEffect, useState } from "react";
import {
  FaLocationArrow,
  FaRoute,
  FaClock,
  FaUsers,
  FaWifi,
  FaCircleCheck,
  FaTriangleExclamation,
  FaRobot,
} from "react-icons/fa6";

import Card from "../ui/Card";

const LiveNavigator = ({ analysis }) => {
  const [eta, setEta] = useState(
    analysis?.metrics?.waitTime || 10
  );

  const [progress, setProgress] = useState(12);

  const [status, setStatus] = useState("Navigating");

  const congestion = analysis?.metrics?.congestion || 74;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setStatus("Destination Reached");
          return 100;
        }
        return prev + 4;
      });

      setEta((prev) => {
        if (prev <= 1) return 0;
        return prev - 0.2;
      });
    }, 1200);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card>

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Live Navigator
          </h2>

          <p className="mt-2 text-slate-400">
            Real-time route guidance with AI-powered rerouting.
          </p>

        </div>

        <div className="rounded-xl bg-cyan-500/10 p-4">

          <FaLocationArrow
            className="text-cyan-400"
            size={28}
          />

        </div>

      </div>

      {/* Status Cards */}

      <div className="mt-8 grid gap-5 md:grid-cols-4">

        <div className="rounded-xl bg-slate-900 p-5">

          <FaRoute className="mb-3 text-cyan-400" />

          <p className="text-sm text-slate-400">
            Current Route
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            {analysis?.route || "Gate D"}
          </h3>

        </div>

        <div className="rounded-xl bg-slate-900 p-5">

          <FaClock className="mb-3 text-yellow-400" />

          <p className="text-sm text-slate-400">
            ETA
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            {Math.ceil(eta)} min
          </h3>

        </div>

        <div className="rounded-xl bg-slate-900 p-5">

          <FaUsers className="mb-3 text-red-400" />

          <p className="text-sm text-slate-400">
            Congestion
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            {congestion}%
          </h3>

        </div>

        <div className="rounded-xl bg-slate-900 p-5">

          <FaWifi className="mb-3 text-emerald-400" />

          <p className="text-sm text-slate-400">
            Live Status
          </p>

          <h3 className="mt-2 text-lg font-bold text-emerald-400">
            Connected
          </h3>

        </div>

      </div>

      {/* Route Progress */}

      <div className="mt-10">

        <div className="mb-3 flex justify-between">

          <span className="font-medium text-slate-300">
            Route Progress
          </span>

          <span className="text-cyan-400">
            {progress}%
          </span>

        </div>

        <div className="h-4 overflow-hidden rounded-full bg-slate-800">

          <div
            className="h-full rounded-full bg-linear-to-r from-cyan-500 to-emerald-500 transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* AI Status */}

      <div className="mt-10 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-5">

        <div className="flex items-center gap-3">

          <FaRobot className="text-cyan-400" />

          <h3 className="font-semibold text-white">
            AI Navigation Status
          </h3>

        </div>

        <p className="mt-4 leading-7 text-slate-300">

          {congestion >= 85
            ? "Heavy congestion detected near Gate A. ArenaPilot recommends switching to Gate C for a faster and safer route."
            : "Current route remains optimal based on verified crowd analytics and live operational conditions."}

        </p>

      </div>

      {/* Journey */}

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-5">

          <div className="flex items-center gap-3">

            <FaCircleCheck className="text-emerald-400" />

            <h3 className="font-semibold text-white">
              Navigation Status
            </h3>

          </div>

          <p className="mt-3 text-xl font-bold text-emerald-400">
            {status}
          </p>

        </div>

        <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-5">

          <div className="flex items-center gap-3">

            <FaTriangleExclamation className="text-yellow-400" />

            <h3 className="font-semibold text-white">
              Live Alert
            </h3>

          </div>

          <p className="mt-3 leading-7 text-slate-300">
            Dynamic rerouting is enabled. Any change in crowd density
            or emergency events will automatically trigger a new
            recommended route.
          </p>

        </div>

      </div>

    </Card>
  );
};

export default LiveNavigator;