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

const defaultData = [
  { time: "09:30", crowd: 22 },
  { time: "09:45", crowd: 28 },
  { time: "10:00", crowd: 41 },
  { time: "10:15", crowd: 58 },
  { time: "10:30", crowd: 73 },
  { time: "10:45", crowd: 82 },
  { time: "11:00", crowd: 78 },
  { time: "11:15", crowd: 69 },
];

const CrowdChart = ({ analysis }) => {
  const current =
    analysis?.metrics?.congestion ??
    defaultData[defaultData.length - 1].crowd;

  return (
    <Card className="h-full">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold text-white">
            Crowd Density Trend
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Live occupancy over the last hour
          </p>

        </div>

        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3">

          <p className="text-xs uppercase tracking-wide text-slate-400">
            Current
          </p>

          <h3 className="text-2xl font-bold text-cyan-400">
            {current}%
          </h3>

        </div>

      </div>

      {/* Chart */}

      <div className="h-90">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={defaultData}>

            <defs>

              <linearGradient
                id="crowdGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#06b6d4"
                  stopOpacity={0.6}
                />

                <stop
                  offset="100%"
                  stopColor="#06b6d4"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#334155"
            />

            <XAxis
              dataKey="time"
              stroke="#94a3b8"
            />

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
              dataKey="crowd"
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

      {/* Footer Stats */}

      <div className="mt-8 grid grid-cols-3 gap-4">

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">

          <p className="text-xs uppercase text-slate-500">
            Peak
          </p>

          <h3 className="mt-2 text-xl font-bold text-red-400">
            82%
          </h3>

        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">

          <p className="text-xs uppercase text-slate-500">
            Average
          </p>

          <h3 className="mt-2 text-xl font-bold text-emerald-400">
            56%
          </h3>

        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">

          <p className="text-xs uppercase text-slate-500">
            Prediction
          </p>

          <h3 className="mt-2 text-xl font-bold text-cyan-400">
            Stable
          </h3>

        </div>

      </div>

    </Card>
  );
};

export default CrowdChart;