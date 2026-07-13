import {
  FaShieldAlt,
  FaCheckCircle,
  FaRobot,
} from "react-icons/fa";

const EmptyAlertState = () => {
  return (
    <div className="rounded-3xl border border-dashed border-cyan-500/20 bg-slate-900/60 p-12 text-center">

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10">

        <FaShieldAlt className="text-4xl text-cyan-400" />

      </div>

      <h2 className="mt-6 font-heading text-2xl font-bold text-white">
        No Active Alerts
      </h2>

      <p className="mt-3 text-slate-400">
        ArenaPilot AI is continuously monitoring the venue.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">

          <FaRobot className="mx-auto mb-3 text-2xl text-cyan-400" />

          <h3 className="font-semibold text-white">
            AI Monitoring
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Real-time analysis is active across all stadium zones.
          </p>

        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">

          <FaCheckCircle className="mx-auto mb-3 text-2xl text-emerald-400" />

          <h3 className="font-semibold text-white">
            Operations Stable
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            No incidents currently require operator intervention.
          </p>

        </div>

      </div>

    </div>
  );
};

export default EmptyAlertState;