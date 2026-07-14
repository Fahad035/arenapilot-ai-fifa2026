import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  Bus,
  Leaf,
  Languages,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const scenarios = [
  {
    id: 1,
    title: "Crowd Congestion",
    icon: Users,
    prompt:
      "Heavy crowd detected near Gate A before kickoff.",
    response: `Priority: High

• Redirect spectators to Gates C and D
• Deploy two volunteers for crowd guidance
• Update digital signboards immediately
• Broadcast multilingual announcements
• Monitor crowd density every 2 minutes`,
  },
  {
    id: 2,
    title: "Transport Delay",
    icon: Bus,
    prompt:
      "Metro service delayed by 15 minutes.",
    response: `Priority: Medium

• Increase shuttle frequency
• Notify arriving fans through stadium app
• Suggest alternate bus routes
• Delay non-critical gate closures`,
  },
  {
    id: 3,
    title: "Medical Emergency",
    icon: AlertTriangle,
    prompt:
      "Medical assistance requested in Section B.",
    response: `Priority: Critical

• Dispatch nearest medical team
• Reserve emergency access corridor
• Notify stadium control room
• Redirect nearby spectators`,
  },
  {
    id: 4,
    title: "Language Support",
    icon: Languages,
    prompt:
      "Spanish-speaking visitors need assistance.",
    response: `Priority: Normal

• Translate announcements
• Guide visitors to multilingual help desk
• Display bilingual navigation instructions`,
  },
  {
    id: 5,
    title: "Waste Overflow",
    icon: Leaf,
    prompt:
      "Food court waste bins nearing capacity.",
    response: `Priority: Medium

• Dispatch cleaning crew
• Redirect visitors temporarily
• Monitor recycling stations
• Log sustainability event`,
  },
];

const ScenarioDemo = () => {
  const [selected, setSelected] = useState(scenarios[0]);

  return (
    <section className="bg-slate-950 py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            Interactive Demo
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Experience ArenaPilot AI
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Select a real stadium scenario and preview how ArenaPilot AI
            generates operational recommendations.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Left */}

          <div className="space-y-4">

            {scenarios.map((scenario) => {
              const Icon = scenario.icon;

              const active = selected.id === scenario.id;

              return (
                <button
                  key={scenario.id}
                  onClick={() => setSelected(scenario)}
                  className={`w-full rounded-2xl border p-5 text-left transition ${active
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-slate-800 bg-slate-900 hover:border-blue-500/40"
                    }`}
                >
                  <div className="flex items-center gap-4">

                    <div className="rounded-xl bg-slate-800 p-3">
                      <Icon className="text-blue-400" size={22} />
                    </div>

                    <div>

                      <h3 className="font-semibold text-white">
                        {scenario.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        {scenario.prompt}
                      </p>

                    </div>

                  </div>
                </button>
              );
            })}

          </div>

          {/* Right */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="mb-6 flex items-center gap-3">

              <Sparkles className="text-blue-400" />

              <h3 className="text-xl font-semibold text-white">
                AI Recommendation
              </h3>

            </div>

            <pre className="whitespace-pre-wrap font-sans leading-8 text-slate-300">
              {selected.response}
            </pre>

            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700"
            >
              Try Full Dashboard

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ScenarioDemo;