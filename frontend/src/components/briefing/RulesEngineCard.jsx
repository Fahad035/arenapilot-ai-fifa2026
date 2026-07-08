import {
  FaCogs,
  FaShieldAlt,
  FaRobot,
  FaArrowDown,
  FaCheckCircle,
} from "react-icons/fa";

import Card from "../ui/Card";

const RulesEngineCard = ({ analysis }) => {
  const congestion = analysis?.metrics?.congestion || 74;
  const attendance = analysis?.metrics?.attendance || 92580;
  const waitTime = analysis?.metrics?.waitTime || 12;
  const route = analysis?.route || "Gate D";

  const verifiedFacts = [
    {
      label: "Live Attendance",
      value: attendance.toLocaleString(),
    },
    {
      label: "Crowd Density",
      value: `${congestion}%`,
    },
    {
      label: "Average Wait",
      value: `${waitTime} min`,
    },
    {
      label: "Recommended Route",
      value: route,
    },
  ];

  return (
    <Card className="space-y-8">

      {/* Header */}

      <div>

        <h2 className="text-2xl font-bold text-white">
          Trustworthy AI Pipeline
        </h2>

        <p className="mt-2 text-slate-400">
          ArenaPilot verifies operational facts before sending
          context to Gemini, reducing hallucinations and ensuring
          recommendations are based on validated stadium data.
        </p>

      </div>

      {/* Flow */}

      <div className="grid gap-6 lg:grid-cols-3">

        {/* Rules Engine */}

        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">

          <div className="mb-5 flex items-center gap-3">

            <FaCogs
              className="text-blue-400"
              size={24}
            />

            <h3 className="text-lg font-bold text-white">
              Rules Engine
            </h3>

          </div>

          <ul className="space-y-3 text-sm leading-7 text-slate-300">

            <li>✓ Crowd threshold validation</li>

            <li>✓ Queue time calculation</li>

            <li>✓ Safe route selection</li>

            <li>✓ Risk classification</li>

            <li>✓ Emergency protocol checks</li>

          </ul>

        </div>

        {/* Verified Facts */}

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">

          <div className="mb-5 flex items-center gap-3">

            <FaShieldAlt
              className="text-emerald-400"
              size={24}
            />

            <h3 className="text-lg font-bold text-white">
              Verified Facts
            </h3>

          </div>

          <div className="space-y-4">

            {verifiedFacts.map((fact) => (

              <div
                key={fact.label}
                className="flex items-center justify-between rounded-lg bg-slate-900/70 p-3"
              >

                <span className="text-slate-400">
                  {fact.label}
                </span>

                <span className="font-semibold text-white">
                  {fact.value}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Gemini */}

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

          <div className="mb-5 flex items-center gap-3">

            <FaRobot
              className="text-cyan-400"
              size={24}
            />

            <h3 className="text-lg font-bold text-white">
              Gemini AI
            </h3>

          </div>

          <p className="leading-7 text-slate-300">
            Gemini receives verified operational facts and
            generates a concise executive briefing,
            multilingual announcements and actionable
            recommendations without inventing stadium data.
          </p>

        </div>

      </div>

      {/* Pipeline */}

      <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

        <h3 className="mb-8 text-lg font-bold text-white">
          Decision Pipeline
        </h3>

        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">

          <div className="rounded-xl bg-slate-800 px-5 py-3 font-semibold text-white">
            Scenario Input
          </div>

          <FaArrowDown className="text-slate-500 lg:-rotate-90" />

          <div className="rounded-xl bg-blue-500/20 px-5 py-3 font-semibold text-blue-300">
            Rules Engine
          </div>

          <FaArrowDown className="text-slate-500 lg:-rotate-90" />

          <div className="rounded-xl bg-emerald-500/20 px-5 py-3 font-semibold text-emerald-300">
            Verified Facts
          </div>

          <FaArrowDown className="text-slate-500 lg:-rotate-90" />

          <div className="rounded-xl bg-cyan-500/20 px-5 py-3 font-semibold text-cyan-300">
            Gemini AI
          </div>

          <FaArrowDown className="text-slate-500 lg:-rotate-90" />

          <div className="rounded-xl bg-purple-500/20 px-5 py-3 font-semibold text-purple-300">
            AI Briefing
          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-5">

        <div className="flex items-center gap-3">

          <FaCheckCircle className="text-emerald-400" />

          <h3 className="font-semibold text-white">
            Why this matters
          </h3>

        </div>

        <p className="mt-3 leading-7 text-slate-300">
          By separating deterministic decision logic from
          generative AI, ArenaPilot ensures that critical
          operational facts remain accurate while Gemini is
          responsible only for explanation, summarization and
          natural-language communication. This architecture
          improves transparency, reliability and trust in
          high-impact event operations.
        </p>

      </div>

    </Card>
  );
};

export default RulesEngineCard;