import { memo } from "react";

const RouteCheckpoints = memo(function RouteCheckpoints({ checkpoints }) {
  return (
    <div className="mt-10">
      <h3 className="mb-5 text-xl font-bold text-white">Checkpoints</h3>

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
  );
});

export default RouteCheckpoints;
