import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import Card from "../ui/Card";

const CrowdChart = ({ analysis }) => {
  const trend = analysis?.crowd?.hourlyTrend;

  const hasTrend = Array.isArray(trend) && trend.length > 0;

  const current = analysis?.crowd?.score ?? null;
  const peak = hasTrend ? Math.max(...trend.map((item) => item.density)) : null;
  const average = hasTrend
    ? Math.round(
        trend.reduce((sum, item) => sum + item.density, 0) / trend.length
      )
    : null;
  const prediction = analysis?.crowd?.prediction?.next30Minutes ?? null;

  return (
    <Card className="h-full">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Crowd Density Trend</h2>
          <p className="mt-1 text-sm text-slate-400">AI crowd prediction timeline</p>
        </div>

        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3">
          <p className="text-xs uppercase tracking-wide text-slate-400">Current</p>
          <h3 className="text-2xl font-bold text-cyan-400">
            {current !== null && current !== undefined ? `${current}%` : "--"}
          </h3>
        </div>
      </div>

      {!hasTrend ? (
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6 text-center text-slate-400">
          No crowd telemetry yet. Generate a scenario to populate the density trend.
        </div>
      ) : (
        <div className="h-80 sm:h-90">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trend}>
              <defs>
                <linearGradient id="crowdGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="4 4" stroke="#334155" />

              <XAxis dataKey="hour" stroke="#94a3b8" />

              <YAxis
                stroke="#94a3b8"
                domain={[0, 100]}
                tickFormatter={(v) => `${v}%`}
              />

              <Tooltip
                contentStyle={{
                  background: "#0f172a",
                  border: "1px solid #334155",
                  borderRadius: "12px",
                  color: "#fff",
                }}
                formatter={(value) => [`${value}%`, "Density"]}
              />

              <Area
                type="monotone"
                dataKey="density"
                stroke="#06b6d4"
                strokeWidth={3}
                fill="url(#crowdGradient)"
                activeDot={{
                  r: 7,
                  stroke: "#06b6d4",
                  strokeWidth: 2,
                  fill: "#fff",
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}

      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-xs uppercase text-slate-500">Peak</p>
          <h3 className="mt-2 text-xl font-bold text-red-400">
            {peak !== null ? `${peak}%` : "--"}
          </h3>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-xs uppercase text-slate-500">Average</p>
          <h3 className="mt-2 text-xl font-bold text-emerald-400">
            {average !== null ? `${average}%` : "--"}
          </h3>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-xs uppercase text-slate-500">Prediction</p>
          <h3 className="mt-2 text-xl font-bold text-cyan-400">
            {prediction ?? "Stable"}
          </h3>
        </div>
      </div>
    </Card>
  );
};

export default CrowdChart;

