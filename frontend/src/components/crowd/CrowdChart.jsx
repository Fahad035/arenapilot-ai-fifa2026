import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import Card from "../ui/Card";

const data = [
  { time: "12:00", crowd: 35 },
  { time: "12:30", crowd: 48 },
  { time: "13:00", crowd: 62 },
  { time: "13:30", crowd: 76 },
  { time: "14:00", crowd: 92 },
  { time: "14:30", crowd: 81 },
  { time: "15:00", crowd: 66 },
];

const CrowdChart = () => {
  return (
    <Card>

      <h3 className="mb-5 text-xl font-bold text-white">
        Live Crowd Density
      </h3>

      <div className="h-80">

        <ResponsiveContainer>

          <AreaChart data={data}>

            <defs>
              <linearGradient id="crowd" x1="0" y1="0" x2="0" y2="1">

                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />

                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />

              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#334155"/>

            <XAxis dataKey="time"/>

            <YAxis/>

            <Tooltip/>

            <Area
              type="monotone"
              dataKey="crowd"
              stroke="#3b82f6"
              fill="url(#crowd)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </Card>
  );
};

export default CrowdChart;