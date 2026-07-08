import {
  FaRobot,
  FaShieldAlt,
  FaRoute,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

import Card from "../ui/Card";

const ExecutiveSummary = ({ analysis }) => {
  if (!analysis) {
    return (
      <Card>

        <div className="flex min-h-105 flex-col items-center justify-center text-center">

          <div className="mb-6 rounded-full bg-cyan-500/10 p-6">
            <FaRobot className="text-5xl text-cyan-400" />
          </div>

          <h2 className="text-2xl font-bold text-white">
            AI Executive Briefing
          </h2>

          <p className="mt-4 max-w-lg text-slate-400">
            Submit a stadium scenario from the Overview tab.
            ArenaPilot AI will generate an executive operational
            briefing including risks, recommendations,
            crowd intelligence and response actions.
          </p>

        </div>

      </Card>
    );
  }

  return (
    <Card className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2">

            <FaRobot className="text-cyan-400" />

            <span className="text-sm font-medium text-cyan-400">
              ArenaPilot AI
            </span>

          </div>

          <h2 className="text-3xl font-bold text-white">
            Executive Operational Briefing
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-400">
            {analysis.summary}
          </p>

        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

          <p className="text-sm text-slate-400">
            AI Confidence
          </p>

          <h2 className="mt-2 text-4xl font-bold text-cyan-400">
            {analysis.confidence}%
          </h2>

        </div>

      </div>

      {/* Metrics */}

      <div className="grid gap-5 md:grid-cols-3">

        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-5">

          <div className="flex items-center gap-3">

            <FaShieldAlt className="text-red-400" />

            <span className="text-sm text-slate-400">
              Risk Level
            </span>

          </div>

          <h3 className="mt-3 text-3xl font-bold text-red-400">
            {analysis.risk}
          </h3>

        </div>

        <div className="rounded-xl border border-purple-500/20 bg-purple-500/10 p-5">

          <div className="flex items-center gap-3">

            <FaRoute className="text-purple-400" />

            <span className="text-sm text-slate-400">
              Recommended Route
            </span>

          </div>

          <h3 className="mt-3 text-2xl font-bold text-purple-400">
            {analysis.route}
          </h3>

        </div>

        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-5">

          <div className="flex items-center gap-3">

            <FaClock className="text-emerald-400" />

            <span className="text-sm text-slate-400">
              Generated
            </span>

          </div>

          <h3 className="mt-3 text-lg font-bold text-emerald-400">
            {new Date(
              analysis.timestamp
            ).toLocaleTimeString()}
          </h3>

        </div>

      </div>

      {/* Operational Highlights */}

      <div>

        <h3 className="mb-5 text-xl font-bold text-white">
          Operational Highlights
        </h3>

        <div className="grid gap-4">

          {analysis.recommendations?.map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-5"
            >

              <FaCheckCircle className="mt-1 text-emerald-400" />

              <div>

                <h4 className="font-semibold text-white">
                  Recommendation {index + 1}
                </h4>

                <p className="mt-2 text-slate-300">
                  {item}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </Card>
  );
};

export default ExecutiveSummary;