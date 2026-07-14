import { useState } from "react";


import {
  FaRoute,
  FaPersonWalking,
  FaWheelchair,
  FaClock,
  FaArrowRight,
  FaCircle,
  FaLocationDot,
  FaWandMagic,
} from "react-icons/fa6";

import Card from "../ui/Card";
import Button from "../ui/Button";
import { analyzeScenario } from "../../services/analysisService";

const RoutePlanner = ({ analysis }) => {
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  const [accessible, setAccessible] = useState(false);
  const [generatedRouteAnalysis, setGeneratedRouteAnalysis] = useState(null);


  const routeAnalysis =
    generatedRouteAnalysis ?? analysis?.routeAnalysis ?? {};
  const recommendedGate = routeAnalysis?.recommendedGate ?? "Unavailable";
  const estimatedTime = routeAnalysis?.estimatedTime;
  const distance = routeAnalysis?.distance ?? "Unavailable";
  const congestionMap = routeAnalysis?.congestionMap ?? {};
  const congestionEntry = Object.entries(congestionMap).find(
    ([key]) =>
      key.toLowerCase().replace(/\s+/g, "") ===
      recommendedGate.toLowerCase().replace(/\s+/g, "")
  );
  const congestion = congestionEntry?.[1] ?? analysis?.metrics?.congestion;
  const alternativeRoutes = routeAnalysis?.alternativeRoutes ?? [];
  const navigationSteps = routeAnalysis?.navigationSteps ?? [];
  const checkpoints = routeAnalysis?.checkpoints ?? [];
  const evacuationPlan = routeAnalysis?.evacuationPlan ?? [];
  const routeOptions = alternativeRoutes
    .map((route) => route?.gate)
    .filter(Boolean);
  const destinationOptions = checkpoints
    .map((checkpoint) => checkpoint?.name)
    .filter(Boolean);

  const summaryCards = [
    // generatedRouteAnalysis can override values displayed in this component
  
    {
      label: "Best Gate",
      value: recommendedGate,
      icon: FaLocationDot,
      color: "text-cyan-400",
    },
    {
      label: "Walking Time",
      value:
        estimatedTime !== undefined && estimatedTime !== null
          ? `${estimatedTime} min`
          : "Unavailable",
      icon: FaPersonWalking,
      color: "text-emerald-400",
    },
    {
      label: "Distance",
      value: distance,
      icon: FaClock,
      color: "text-yellow-400",
    },
    {
      label: "Congestion",
      value:
        congestion !== undefined && congestion !== null
          ? `${congestion}%`
          : "Unavailable",
      icon: FaCircle,
      color: "text-red-400",
    },
  ];

  return (
    <div className="space-y-8">

      {/* Header */}

      <Card>

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-bold text-white">
              Navigator Intelligence
            </h2>

            <p className="mt-2 text-slate-400">
              AI-powered route planning using live congestion,
              verified stadium rules and operational intelligence.
            </p>

          </div>

          <div className="rounded-2xl bg-cyan-500/10 p-5">

            <FaLocationDot
              size={34}
              className="text-cyan-400"
            />

          </div>

        </div>

      </Card>

      {/* Planner */}

      <div className="grid gap-8 lg:grid-cols-3">

        {/* Form */}

        <Card className="space-y-6">

          <h3 className="text-xl font-semibold text-white">
            Route Planner
          </h3>

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Starting Point
            </label>

            <select
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
            >
              <option value="">Select starting point</option>
              {routeOptions.length > 0 ? (
                routeOptions.map((gate) => (
                  <option key={gate} value={gate}>
                    {gate}
                  </option>
                ))
              ) : (
                <option value="">No route data available</option>
              )}
            </select>

          </div>

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Destination
            </label>

            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
            >
              <option value="">Select destination</option>
              {destinationOptions.length > 0 ? (
                destinationOptions.map((checkpoint) => (
                  <option key={checkpoint} value={checkpoint}>
                    {checkpoint}
                  </option>
                ))
              ) : (
                <option value="">No checkpoint data available</option>
              )}
            </select>

          </div>

          <label className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950 p-4">

            <input
              type="checkbox"
              checked={accessible}
              onChange={() => setAccessible(!accessible)}
            />

            <FaWheelchair className="text-cyan-400" />

            <span className="text-slate-300">
              Accessible Step-Free Route
            </span>

          </label>

          <Button
            className="w-full"
            onClick={async () => {
              if (!start || !destination) return;

              // Payload shape must match backend scenarioValidator
              // We reuse the same analysis pipeline as ScenarioForm.
              const payload = {
                eventName: destination,
                eventType: "Football Match",

                // Backend expects attendance number between 0..80000
                attendance: 50000,

                // Backend expects weather enum; RoutePlanner doesn't collect weather,
                // so use Clear by default.
                weather: "Clear",

                // We don't model A/B/C/D split in RoutePlanner UI.
                // Use a balanced distribution.
                gateA: 25,
                gateB: 25,
                gateC: 25,
                gateD: 25,

                accessibilityRequired: accessible,

                medicalIncident: false,
                securityIncident: false,
                emergencyMode: false,
              };

              const result = await analyzeScenario(payload);
              setGeneratedRouteAnalysis(result?.routeAnalysis ?? null);
            }}
          >
            <FaWandMagic />
            Generate Smart Route
          </Button>

        </Card>

        {/* Route Result */}

        <div className="lg:col-span-2">

          <Card>

            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-2xl font-bold text-white">
                  Recommended Route
                </h3>

                <p className="mt-2 text-slate-400">
                  Generated using Rules Engine + Gemini AI
                </p>

              </div>

              <FaRoute
                size={32}
                className="text-cyan-400"
              />

            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-4">

              {summaryCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.label}
                    className="rounded-xl bg-slate-900 p-5"
                  >

                    <Icon className={`mb-3 ${card.color}`} />

                    <p className="text-sm text-slate-400">
                      {card.label}
                    </p>

                    <h4 className="mt-2 text-2xl font-bold text-white">
                      {card.value}
                    </h4>

                  </div>
                );
              })}

            </div>

            <div className="mt-10">

              <h3 className="mb-5 text-xl font-bold text-white">
                Navigation Steps
              </h3>

              <div className="space-y-4">

                {navigationSteps.map((step, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4"
                  >

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-white">
                      {index + 1}
                    </div>

                    <div className="flex-1">

                      <p className="leading-7 text-slate-300">
                        {step}
                      </p>

                    </div>

                    {index !== navigationSteps.length - 1 && (
                      <FaArrowRight className="mt-2 text-cyan-400"/>
                    )}

                  </div>

                ))}

              </div>

              {checkpoints.length > 0 && (
                <div className="mt-10">

                  <h3 className="mb-5 text-xl font-bold text-white">
                    Checkpoints
                  </h3>

                  <div className="space-y-4">

                    {checkpoints.map((checkpoint, index) => (

                      <div
                        key={checkpoint?.name || index}
                        className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4"
                      >

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-white">
                          {index + 1}
                        </div>

                        <div className="flex-1">

                          <p className="leading-7 text-slate-300">
                            {checkpoint?.name ?? "Checkpoint unavailable"}
                          </p>

                          <p className="mt-1 text-sm text-slate-500">
                            {checkpoint?.status ?? "Status unavailable"}
                          </p>

                        </div>

                      </div>

                    ))}

                  </div>

                </div>
              )}

              {alternativeRoutes.length > 0 && (
                <div className="mt-10 rounded-xl border border-slate-800 bg-slate-950 p-5">

                  <h3 className="font-semibold text-white">
                    Alternative Routes
                  </h3>

                  <div className="mt-3 space-y-3">
                    {alternativeRoutes.map((route) => (
                      <p key={route?.gate} className="leading-7 text-slate-300">
                        {route?.gate ?? "Route unavailable"} - {route?.status ?? "Unavailable"} ({route?.load ?? "Unavailable"}%)
                      </p>
                    ))}
                  </div>

                </div>
              )}

              {evacuationPlan.length > 0 && (
                <div className="mt-10 rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-5">

                  <h3 className="font-semibold text-yellow-300">
                    Evacuation Plan
                  </h3>

                  <div className="mt-3 space-y-3">
                    {evacuationPlan.map((item, index) => (
                      <p key={index} className="leading-7 text-slate-300">
                        {index + 1}. {item}
                      </p>
                    ))}
                  </div>

                </div>
              )}

            </div>

          </Card>

        </div>

      </div>

    </div>
  );
};

export default RoutePlanner;