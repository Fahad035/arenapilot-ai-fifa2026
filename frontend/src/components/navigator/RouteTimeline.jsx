import {
  FaClock,
  FaPersonWalking,
  FaArrowRight,
  FaCircleCheck,
} from "react-icons/fa6";

import Card from "../ui/Card";

const RouteTimeline = ({ analysis }) => {
  const routeAnalysis = analysis?.routeAnalysis ?? {};
  const steps = routeAnalysis?.navigationSteps ?? [];
  const estimatedTime = routeAnalysis?.estimatedTime;

  return (
    <Card>

      <div className="flex items-center gap-3 mb-8">

        <FaClock
          size={26}
          className="text-cyan-400"
        />

        <h2 className="text-2xl font-bold text-white">
          Route Timeline
        </h2>

      </div>

      <div className="space-y-6">

        {steps.map((step, index) => (

          <div
            key={index}
            className="flex items-start gap-5"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10">

              {index === steps.length - 1 ? (
                <FaCircleCheck className="text-green-400" />
              ) : (
                <FaPersonWalking className="text-cyan-400" />
              )}

            </div>

            <div className="flex-1">

              <div className="flex items-center justify-between">

                <h3 className="font-semibold text-white">
                  {step}
                </h3>

                <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-300">
                  Step {index + 1}
                </span>

              </div>

              {index !== steps.length - 1 && (
                <div className="mt-4 ml-2 h-10 border-l-2 border-dashed border-cyan-500/40" />
              )}

            </div>

          </div>

        ))}

      </div>

      <div className="mt-8 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-5">

        <div className="flex items-center gap-3">

          <FaArrowRight className="text-emerald-400" />

          <h3 className="font-semibold text-white">
            Estimated Arrival
          </h3>

        </div>

        <p className="mt-3 text-3xl font-bold text-emerald-400">
          {estimatedTime !== undefined && estimatedTime !== null
            ? `${estimatedTime} Minutes`
            : "Unavailable"}
        </p>

        <p className="mt-2 text-slate-300">
          Based on current crowd density and walking speed.
        </p>

      </div>

    </Card>
  );
};

export default RouteTimeline;