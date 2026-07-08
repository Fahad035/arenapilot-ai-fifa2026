import {
  FaRobot,
  FaShieldAlt,
  FaRoute,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

import Card from "../ui/Card";

const QuickSummary = ({ analysis }) => {
  if (!analysis) {
    return (
      <Card className="h-full">
        <div className="flex h-full min-h-130 flex-col items-center justify-center text-center">

          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10">
            <FaRobot className="text-4xl text-cyan-400" />
          </div>

          <h2 className="text-2xl font-bold text-white">
            AI Briefing Ready
          </h2>

          <p className="mt-4 max-w-sm text-slate-400">
            Fill in the scenario details and generate an AI analysis.
            ArenaPilot will evaluate crowd conditions, risks,
            evacuation routes, and operational recommendations.
          </p>

          <div className="mt-8 w-full rounded-xl border border-slate-800 bg-slate-950 p-5">

            <h3 className="mb-4 font-semibold text-white">
              Analysis will include
            </h3>

            <div className="space-y-3 text-left text-sm text-slate-400">

              <div className="flex items-center gap-3">
                <FaShieldAlt className="text-emerald-400" />
                Risk Assessment
              </div>

              <div className="flex items-center gap-3">
                <FaRoute className="text-cyan-400" />
                Route Optimization
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-400" />
                Operational Recommendations
              </div>

            </div>

          </div>

        </div>
      </Card>
    );
  }

  return (
    <Card className="space-y-6">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            AI Quick Summary
          </h2>

          <p className="text-sm text-slate-400">
            Generated operational briefing
          </p>

        </div>

        <div className="rounded-xl bg-cyan-500/10 p-4">
          <FaRobot className="text-2xl text-cyan-400" />
        </div>

      </div>

      {/* Risk */}

      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-5">

        <div className="mb-2 flex items-center gap-3">

          <FaExclamationTriangle className="text-red-400" />

          <span className="text-sm text-slate-400">
            Operational Risk
          </span>

        </div>

        <h2 className="text-3xl font-bold text-red-400">
          {analysis.risk}
        </h2>

      </div>

      {/* Confidence */}

      <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-5">

        <div className="mb-2 flex items-center gap-3">

          <FaRobot className="text-cyan-400" />

          <span className="text-sm text-slate-400">
            AI Confidence
          </span>

        </div>

        <h2 className="text-3xl font-bold text-cyan-400">
          {analysis.confidence}%
        </h2>

      </div>

      {/* Route */}

      <div className="rounded-xl border border-purple-500/20 bg-purple-500/10 p-5">

        <div className="mb-2 flex items-center gap-3">

          <FaRoute className="text-purple-400" />

          <span className="text-sm text-slate-400">
            Recommended Route
          </span>

        </div>

        <h2 className="text-2xl font-bold text-purple-400">
          {analysis.route}
        </h2>

      </div>

      {/* Summary */}

      <div>

        <h3 className="mb-3 text-lg font-semibold text-white">
          Executive Summary
        </h3>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">

          <p className="leading-7 text-slate-300">
            {analysis.summary}
          </p>

        </div>

      </div>

      {/* Recommendations */}

      <div>

        <h3 className="mb-3 text-lg font-semibold text-white">
          AI Recommendations
        </h3>

        <div className="space-y-3">

          {analysis.recommendations?.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4"
            >
              <FaCheckCircle className="mt-1 text-emerald-400" />

              <span className="text-slate-200">
                {item}
              </span>
            </div>
          ))}

        </div>

      </div>

    </Card>
  );
};

export default QuickSummary;