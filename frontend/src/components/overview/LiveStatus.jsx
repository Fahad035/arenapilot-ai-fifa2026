import Card from "../ui/Card";
import Badge from "../ui/Badge";

const LiveStatus = () => {
  return (
    <Card>

      <div className="flex items-center justify-between">

        <h3 className="text-lg font-semibold text-white">
          Live AI Status
        </h3>

        <Badge color="Active">
          ● Live
        </Badge>

      </div>

      <div className="mt-6 space-y-5">

        <div>
          <p className="text-sm text-slate-400">
            Gemini Connection
          </p>

          <p className="font-semibold text-emerald-400">
            Connected
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            Last Analysis
          </p>

          <p className="font-semibold text-white">
            2 minutes ago
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            AI Confidence
          </p>

          <p className="font-semibold text-cyan-400">
            96%
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            Active Venue
          </p>

          <p className="font-semibold text-white">
            FIFA Stadium
          </p>
        </div>

      </div>

    </Card>
  );
};

export default LiveStatus;