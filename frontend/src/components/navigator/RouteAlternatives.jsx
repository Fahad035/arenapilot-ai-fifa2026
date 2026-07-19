import { memo } from "react";

const RouteAlternatives = memo(function RouteAlternatives({ routes }) {
  return (
    <div className="mt-10 rounded-xl border border-slate-800 bg-slate-950 p-5">
      <h3 className="font-semibold text-white">Alternative Routes</h3>

      <div className="mt-3 space-y-3">
        {routes.map((route) => (
          <p key={route?.gate} className="leading-7 text-slate-300">
            {route?.gate ?? "Route unavailable"} -{" "}
            {route?.status ?? "Unavailable"} ({route?.load ?? "Unavailable"}%)
          </p>
        ))}
      </div>
    </div>
  );
});

export default RouteAlternatives;
