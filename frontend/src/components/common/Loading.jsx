import { FaRobot } from "react-icons/fa";

const Loading = ({
  title = "ArenaPilot AI is analyzing...",
  description = "Processing live stadium intelligence, verifying operational rules and generating AI recommendations.",
}) => {
  return (
    <div className="flex min-h-125 items-center justify-center">
      <div className="w-full max-w-xl rounded-3xl border border-cyan-500/20 bg-slate-900/70 p-10 text-center shadow-2xl backdrop-blur-xl">

        {/* Animated Robot */}

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500/10">

          <FaRobot className="animate-pulse text-5xl text-cyan-400" />

        </div>

        <h2 className="mt-8 text-3xl font-bold text-white">
          {title}
        </h2>

        <p className="mx-auto mt-4 max-w-md leading-7 text-slate-400">
          {description}
        </p>

        {/* Progress */}

        <div className="mt-10 h-2 overflow-hidden rounded-full bg-slate-800">

          <div className="h-full w-1/3 animate-[loading_1.4s_ease-in-out_infinite] rounded-full bg-cyan-400" />

        </div>

        {/* Status */}

        <div className="mt-8 grid grid-cols-3 gap-4">

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs uppercase text-slate-500">
              Rules Engine
            </p>

            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-sm text-emerald-400">
                Running
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs uppercase text-slate-500">
              Gemini AI
            </p>

            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              <span className="text-sm text-cyan-400">
                Thinking
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs uppercase text-slate-500">
              Dashboard
            </p>

            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
              <span className="text-sm text-yellow-400">
                Updating
              </span>
            </div>
          </div>

        </div>

      </div>

      <style>
        {`
          @keyframes loading {
            0% {
              transform: translateX(-120%);
            }
            50% {
              transform: translateX(250%);
            }
            100% {
              transform: translateX(-120%);
            }
          }
        `}
      </style>

    </div>
  );
};

export default Loading;