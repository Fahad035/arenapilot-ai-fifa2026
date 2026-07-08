import Card from "../ui/Card";
import Badge from "../ui/Badge";

const SuggestedRoute = () => {
  return (
    <Card>

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-bold text-white">
          Suggested Route
        </h2>

        <Badge color="Low">
          Optimal
        </Badge>

      </div>

      <div className="mt-6 space-y-4">

        <div>
          <p className="text-slate-400">Entry Gate</p>
          <p className="font-semibold text-white">Gate D</p>
        </div>

        <div>
          <p className="text-slate-400">Estimated Time</p>
          <p className="font-semibold text-emerald-400">
            7 Minutes
          </p>
        </div>

        <div>
          <p className="text-slate-400">Crowd Density</p>
          <p className="font-semibold text-cyan-400">
            Low
          </p>
        </div>

      </div>

    </Card>
  );
};

export default SuggestedRoute;