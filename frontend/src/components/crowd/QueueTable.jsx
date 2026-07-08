import {
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa";

import Card from "../ui/Card";

const QueueTable = ({ analysis }) => {
  const congestion = analysis?.metrics?.congestion || 74;

  const gates = [
    {
      gate: "Gate A",
      queue: 120,
      wait: 4,
      predicted: 3,
      status: "Normal",
    },
    {
      gate: "Gate B",
      queue: 265,
      wait: 11,
      predicted: 8,
      status: "Busy",
    },
    {
      gate: "Gate C",
      queue: congestion > 80 ? 710 : 520,
      wait: congestion > 80 ? 28 : 18,
      predicted: congestion > 80 ? 24 : 15,
      status: congestion > 80 ? "Critical" : "Busy",
    },
    {
      gate: "Gate D",
      queue: 96,
      wait: 3,
      predicted: 2,
      status: "Normal",
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case "Critical":
        return {
          className:
            "bg-red-500/10 text-red-400 border border-red-500/30",
          icon: (
            <FaExclamationTriangle className="text-red-400" />
          ),
        };

      case "Busy":
        return {
          className:
            "bg-yellow-500/10 text-yellow-300 border border-yellow-500/30",
          icon: (
            <FaClock className="text-yellow-400" />
          ),
        };

      default:
        return {
          className:
            "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
          icon: (
            <FaCheckCircle className="text-emerald-400" />
          ),
        };
    }
  };

  return (
    <Card>

      {/* Header */}

      <div className="mb-6">

        <h2 className="text-xl font-bold text-white">
          Gate Queue Analysis
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Estimated waiting times across stadium entrances
        </p>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-800">

              <th className="pb-4 text-left text-sm text-slate-400">
                Gate
              </th>

              <th className="pb-4 text-center text-sm text-slate-400">
                Queue
              </th>

              <th className="pb-4 text-center text-sm text-slate-400">
                Wait
              </th>

              <th className="pb-4 text-center text-sm text-slate-400">
                Predicted
              </th>

              <th className="pb-4 text-right text-sm text-slate-400">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {gates.map((gate) => {
              const badge = getBadge(gate.status);

              return (
                <tr
                  key={gate.gate}
                  className="border-b border-slate-800/50 transition hover:bg-slate-900"
                >
                  <td className="py-5">

                    <div>

                      <h3 className="font-semibold text-white">
                        {gate.gate}
                      </h3>

                      <p className="text-xs text-slate-500">
                        Entrance Zone
                      </p>

                    </div>

                  </td>

                  <td className="py-5 text-center font-semibold text-white">
                    {gate.queue}
                  </td>

                  <td className="py-5 text-center text-cyan-400">
                    {gate.wait} min
                  </td>

                  <td className="py-5 text-center text-emerald-400">
                    {gate.predicted} min
                  </td>

                  <td className="py-5 text-right">

                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${badge.className}`}
                    >
                      {badge.icon}
                      {gate.status}
                    </span>

                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>

      </div>

      {/* Summary */}

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-4">

        <div className="flex items-center justify-between">

          <span className="text-slate-400">
            Average Wait Time
          </span>

          <span className="text-xl font-bold text-cyan-400">
            9 min
          </span>

        </div>

      </div>

    </Card>
  );
};

export default QueueTable;