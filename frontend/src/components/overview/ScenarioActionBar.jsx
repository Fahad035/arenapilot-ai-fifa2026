import { memo } from "react";
import { FaMagic } from "react-icons/fa";

import Button from "../ui/Button";

const ScenarioActionBar = memo(function ScenarioActionBar({ loading, onGenerate }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h3 className="text-lg font-semibold text-white">
          Ready to Generate AI Briefing
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          ArenaPilot AI will analyze the scenario using the Rules Engine and
          generate operational recommendations.
        </p>
      </div>

      <Button
        onClick={onGenerate}
        disabled={loading}
        className="flex items-center justify-center gap-3 px-8 py-3"
        aria-label="Generate AI Briefing"
      >
        {loading ? (
          <>
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Analyzing...
          </>
        ) : (
          <>
            <FaMagic />
            Generate AI Briefing
          </>
        )}
      </Button>
    </div>
  );
});

export default ScenarioActionBar;
