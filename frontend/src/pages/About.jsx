import {
  ShieldCheck,
  BrainCircuit,
  Users,
  Globe2,
  Route,
  Languages,
} from "lucide-react";

import Card from "../components/ui/Card";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Decision Support",
    text: "Generate operational briefings, incident analysis and recommendations using Google Gemini.",
  },
  {
    icon: Users,
    title: "Crowd Intelligence",
    text: "Monitor attendance, congestion and safety conditions across the stadium.",
  },
  {
    icon: Route,
    title: "Smart Navigation",
    text: "Recommend safer gates and optimized spectator routes during live events.",
  },
  {
    icon: Languages,
    title: "Multilingual Assistant",
    text: "Interact with ArenaPilot AI in multiple languages for global accessibility.",
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 px-6 py-10">

      <Card className="rounded-3xl border border-cyan-500/20 bg-slate-900">

        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          ABOUT PROJECT
        </p>

        <h1 className="mt-3 text-5xl font-bold text-white">
          ArenaPilot AI
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          ArenaPilot AI is an AI-powered Smart Stadium Operations Copilot
          designed for FIFA World Cup 2026. It helps stadium operators,
          security teams and event managers monitor crowd conditions,
          analyze risks, generate AI operational briefings, improve
          accessibility and support faster decision-making during
          large-scale sporting events.
        </p>

      </Card>

      <div className="grid gap-6 md:grid-cols-2">

        <Card>

          <ShieldCheck
            size={34}
            className="text-cyan-400"
          />

          <h2 className="mt-5 text-2xl font-semibold text-white">
            Our Mission
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Improve spectator safety and stadium operations using
            Generative AI, real-time analytics and intelligent
            recommendations.
          </p>

        </Card>

        <Card>

          <Globe2
            size={34}
            className="text-cyan-400"
          />

          <h2 className="mt-5 text-2xl font-semibold text-white">
            Why ArenaPilot AI?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            The platform assists organizers with crowd intelligence,
            emergency response planning, multilingual communication,
            accessibility support and operational decision making from
            one unified dashboard.
          </p>

        </Card>

      </div>

      <div>

        <h2 className="mb-6 text-3xl font-bold text-white">
          Core Features
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card key={feature.title}>

                <Icon
                  size={28}
                  className="text-cyan-400"
                />

                <h3 className="mt-4 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {feature.text}
                </p>

              </Card>
            );
          })}

        </div>

      </div>

      <Card className="text-center">

        <h2 className="text-2xl font-bold text-white">
          Built for FIFA World Cup 2026
        </h2>

        <p className="mt-4 text-slate-300">
          ArenaPilot AI combines Google Gemini, React, Node.js and
          modern web technologies to create a safer, smarter and more
          accessible stadium experience.
        </p>

      </Card>

    </div>
  );
}