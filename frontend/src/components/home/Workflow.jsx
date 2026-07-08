import {
  ClipboardList,
  BrainCircuit,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Capture Stadium Situation",
    description:
      "Operators enter live stadium conditions including crowd density, weather, transportation updates, gate status, incidents, and accessibility requests.",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "AI Understands the Context",
    description:
      "ArenaPilot AI uses Google Gemini to analyze the complete operational context instead of evaluating isolated events.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Generate Operational Plan",
    description:
      "The AI produces structured recommendations for navigation, crowd flow, multilingual announcements, transportation, sustainability, and emergency response.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Execute With Confidence",
    description:
      "Venue staff receive prioritized actions that help improve fan experience, operational efficiency, and overall stadium safety.",
  },
];

const Workflow = () => {
  return (
    <section className="border-y border-slate-800 bg-slate-950 py-28 pt-10">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            AI Workflow
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            From Stadium Situation to
            <span className="block bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Intelligent Decisions
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            ArenaPilot AI transforms operational data into clear,
            actionable recommendations that help organizers make
            faster and more informed decisions during live events.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-800 lg:block" />

          <div className="space-y-10">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative flex flex-col gap-6 rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur transition duration-300 hover:border-blue-500/30 hover:bg-slate-900 lg:flex-row lg:items-start"
                >
                  {/* Step Number */}

                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/20">
                    {step.number}
                  </div>

                  {/* Icon */}

                  <div className="rounded-2xl bg-blue-600/10 p-4 text-blue-400">
                    <Icon size={28} />
                  </div>

                  {/* Content */}

                  <div className="flex-1">

                    <h3 className="text-2xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-3xl text-slate-400 leading-8">
                      {step.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Workflow;