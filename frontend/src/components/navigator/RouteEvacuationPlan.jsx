import { memo } from "react";

const RouteEvacuationPlan = memo(function RouteEvacuationPlan({ items }) {
  return (
    <div className="mt-10 rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-5">
      <h3 className="font-semibold text-yellow-300">Evacuation Plan</h3>

      <div className="mt-3 space-y-3">
        {items.map((item, index) => (
          <p key={index} className="leading-7 text-slate-300">
            {index + 1}. {item}
          </p>
        ))}
      </div>
    </div>
  );
});

export default RouteEvacuationPlan;
