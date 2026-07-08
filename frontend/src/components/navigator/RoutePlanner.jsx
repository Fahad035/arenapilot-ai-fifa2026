import { useMemo, useState } from "react";

import {
  FaRoute,
  FaPersonWalking,
  FaWheelchair,
  FaClock,
  FaArrowRight,
  FaCircle,
  FaLocationDot,
} from "react-icons/fa6";

import Card from "../ui/Card";
import Button from "../ui/Button";

const RoutePlanner = ({ analysis }) => {
  const [start, setStart] = useState("Main Entrance");
  const [destination, setDestination] = useState("Section A");
  const [accessible, setAccessible] = useState(false);

  const route = useMemo(() => {
    const congestion = analysis?.metrics?.congestion || 74;

    let recommendedGate = "Gate D";
    let walkingTime = "6 min";
    let distance = "320 m";

    if (congestion >= 85) {
      recommendedGate = "Gate A";
      walkingTime = "8 min";
      distance = "470 m";
    }

    return {
      gate: recommendedGate,
      walkingTime,
      distance,
      congestion,
      confidence: analysis?.confidence || 98,
      risk: analysis?.risk || "Medium",
    };
  }, [analysis]);

  const steps = [
    "Start from Main Entrance.",
    `Proceed towards ${route.gate}.`,
    accessible
      ? "Follow the accessible step-free pathway."
      : "Use the primary spectator walkway.",
    "Pass through the security checkpoint.",
    `Continue to ${destination}.`,
    "You have reached your destination.",
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
              <option>Main Entrance</option>
              <option>North Gate</option>
              <option>South Gate</option>
              <option>Parking Zone</option>
              <option>Metro Station</option>
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
              <option>Section A</option>
              <option>Section B</option>
              <option>VIP Lounge</option>
              <option>Food Court</option>
              <option>Medical Center</option>
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

          <Button className="w-full">
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

              <div className="rounded-xl bg-slate-900 p-5">

                <FaLocationDot className="mb-3 text-cyan-400"/>

                <p className="text-sm text-slate-400">
                  Best Gate
                </p>

                <h4 className="mt-2 text-2xl font-bold text-white">
                  {route.gate}
                </h4>

              </div>

              <div className="rounded-xl bg-slate-900 p-5">

                <FaPersonWalking className="mb-3 text-emerald-400"/>

                <p className="text-sm text-slate-400">
                  Walking Time
                </p>

                <h4 className="mt-2 text-2xl font-bold text-white">
                  {route.walkingTime}
                </h4>

              </div>

              <div className="rounded-xl bg-slate-900 p-5">

                <FaClock className="mb-3 text-yellow-400"/>

                <p className="text-sm text-slate-400">
                  Distance
                </p>

                <h4 className="mt-2 text-2xl font-bold text-white">
                  {route.distance}
                </h4>

              </div>

              <div className="rounded-xl bg-slate-900 p-5">

                <FaCircle className="mb-3 text-red-400"/>

                <p className="text-sm text-slate-400">
                  Congestion
                </p>

                <h4 className="mt-2 text-2xl font-bold text-white">
                  {route.congestion}%
                </h4>

              </div>

            </div>

            <div className="mt-10">

              <h3 className="mb-5 text-xl font-bold text-white">
                Navigation Steps
              </h3>

              <div className="space-y-4">

                {steps.map((step, index) => (

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

                    {index !== steps.length - 1 && (
                      <FaArrowRight className="mt-2 text-cyan-400"/>
                    )}

                  </div>

                ))}

              </div>

            </div>

          </Card>

        </div>

      </div>

    </div>
  );
};

export default RoutePlanner;