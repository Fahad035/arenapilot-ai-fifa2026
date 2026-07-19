import { memo } from "react";

const ScenarioPreview = memo(function ScenarioPreview({ scenarioData }) {
  return (
    <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">
      <h3 className="mb-4 text-lg font-semibold text-cyan-300">
        Live Scenario Preview
      </h3>

      <div className="grid gap-4 text-sm md:grid-cols-2">
        <div>
          <span className="text-slate-500">Stadium</span>
          <p className="mt-1 text-white">{scenarioData.stadium || "--"}</p>
        </div>

        <div>
          <span className="text-slate-500">Match</span>
          <p className="mt-1 text-white">{scenarioData.match || "--"}</p>
        </div>

        <div>
          <span className="text-slate-500">Crowd</span>
          <p className="mt-1 text-white">{scenarioData.crowd || "--"}</p>
        </div>

        <div>
          <span className="text-slate-500">Incident</span>
          <p className="mt-1 text-white">{scenarioData.incident || "--"}</p>
        </div>
      </div>
    </div>
  );
});

export default ScenarioPreview;
