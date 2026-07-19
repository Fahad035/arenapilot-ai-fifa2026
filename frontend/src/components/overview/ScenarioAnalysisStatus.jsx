import { memo } from "react";

const ScenarioAnalysisStatus = memo(function ScenarioAnalysisStatus({ analysis }) {
  if (!analysis) return null;

  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-lg font-bold text-emerald-400">
            AI Analysis Completed
          </h3>

          <p className="mt-2 text-slate-300">
            Your operational briefing has been generated successfully.
            Review the AI Summary, Crowd Intelligence, Navigator, and
            Operations tabs for detailed recommendations.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-slate-950/60 p-4 text-center">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Risk
            </p>
            <h3 className="mt-2 text-xl font-bold text-red-400">
              {analysis.risk}
            </h3>
          </div>

          <div className="rounded-xl bg-slate-950/60 p-4 text-center">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Confidence
            </p>
            <h3 className="mt-2 text-xl font-bold text-cyan-400">
              {analysis.confidence}%
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ScenarioAnalysisStatus;
