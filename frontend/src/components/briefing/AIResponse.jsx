import {
  FaRobot,
  FaBolt,
  FaBullhorn,
  FaExclamationTriangle,
  FaUsers,
  FaClock,
  FaCheckCircle,
  FaMagic,
} from "react-icons/fa";

const AIResponse = ({ analysis }) => {
  if (!analysis) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-12 text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10">
          <FaRobot className="text-4xl text-blue-400" />
        </div>

        <h2 className="mt-6 text-3xl font-bold text-white">
          AI Operational Briefing
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
          No operational briefing has been generated yet.
          Complete the Stadium Situation Form in the Overview tab and
          ArenaPilot AI will generate crowd management recommendations,
          navigation guidance, multilingual announcements,
          accessibility support and operational intelligence.
        </p>

        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-6 py-3 text-blue-300">
          <FaMagic />
          Generate your first AI briefing
        </div>

      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Header */}

      <Section title="AI Operations Briefing" icon={<FaRobot />}>
        <div className="flex items-center justify-between">

          <p className="text-slate-300">
            AI-generated operational recommendations for stadium staff.
          </p>

          <div className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
            Confidence {analysis.confidence}
          </div>

        </div>
      </Section>

      <Section title="Situation Summary" icon={<FaRobot />}>
        <p className="leading-7 text-slate-300">
          {analysis.summary}
        </p>
      </Section>

      <Section title="Priority Level" icon={<FaBolt />}>
        <span className="inline-flex rounded-full bg-red-500/10 px-4 py-2 font-semibold text-red-400">
          {analysis.priority}
        </span>
      </Section>

      <Section title="Immediate Actions" icon={<FaCheckCircle />}>
        <ul className="space-y-3">
          {analysis.actions.map((item, index) => (
            <li
              key={index}
              className="flex gap-3 rounded-xl bg-slate-800/60 p-4"
            >
              <FaCheckCircle className="mt-1 text-emerald-400" />

              <span className="text-slate-300">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Public Announcement" icon={<FaBullhorn />}>
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-5">
          <p className="leading-7 text-blue-100">
            {analysis.announcement}
          </p>
        </div>
      </Section>

      <div className="grid gap-6 lg:grid-cols-2">

        <Section title="Resources Required" icon={<FaUsers />}>
          <ul className="space-y-3">
            {analysis.resources.map((item, index) => (
              <li
                key={index}
                className="rounded-lg bg-slate-800/60 p-3 text-slate-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Risk Assessment" icon={<FaExclamationTriangle />}>
          <ul className="space-y-3">
            {analysis.risks.map((item, index) => (
              <li
                key={index}
                className="rounded-lg bg-red-500/10 p-3 text-red-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </Section>

      </div>

      <Section title="Recommended Timeline" icon={<FaClock />}>
        <div className="space-y-4">
          {analysis.timeline.map((step, index) => (
            <div
              key={index}
              className="flex gap-4"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-bold">
                {index + 1}
              </div>

              <div className="flex-1 rounded-xl bg-slate-800/60 p-4 text-slate-300">
                {step}
              </div>
            </div>
          ))}
        </div>
      </Section>

    </div>
  );
};

function Section({ title, icon, children }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="mb-5 flex items-center gap-3">

        <div className="text-cyan-400">
          {icon}
        </div>

        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

      </div>

      {children}

    </div>
  );
}

export default AIResponse;