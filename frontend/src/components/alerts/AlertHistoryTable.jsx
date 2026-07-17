import { FaCheckCircle, FaClock } from "react-icons/fa";

import Card from "../ui/Card";
import AlertSeverityBadge from "./AlertSeverityBadge";

import { getSeverityStyle, getStatusClass } from "./alertStyles";

const defaultHistory = [
  {
    id: 1,
    time: "07:42 PM",
    category: "Crowd Congestion",
    severity: "High",
    status: "Monitoring",
    action: "Opened Gate C",
  },
  {
    id: 2,
    time: "07:28 PM",
    category: "Medical Emergency",
    severity: "Critical",
    status: "Resolved",
    action: "Medical Team Dispatched",
  },
  {
    id: 3,
    time: "07:11 PM",
    category: "Security Threat",
    severity: "Medium",
    status: "Investigating",
    action: "Security Patrol Sent",
  },
  {
    id: 4,
    time: "06:58 PM",
    category: "Weather Advisory",
    severity: "Low",
    status: "Resolved",
    action: "Public Announcement",
  },
  {
    id: 5,
    time: "06:37 PM",
    category: "VIP Movement",
    severity: "Medium",
    status: "Completed",
    action: "Escort Activated",
  },
];


const AlertHistoryTable = ({ analysis }) => {
  const history =
    analysis?.alertHistory?.length
      ? analysis.alertHistory
      : defaultHistory;

  return (
    <Card>

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="font-heading text-2xl font-bold text-white">
            Alert History
          </h2>

          <p className="mt-2 text-slate-400">
            Timeline of recent operational incidents and AI responses.
          </p>

        </div>

        <div className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-slate-300">

          {history.length} Records

        </div>

      </div>

      {/* Desktop Table */}

      <div className="hidden overflow-x-auto lg:block">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-800 text-left">

              <th className="pb-4 text-sm font-medium text-slate-400">
                Time
              </th>

              <th className="pb-4 text-sm font-medium text-slate-400">
                Category
              </th>

              <th className="pb-4 text-sm font-medium text-slate-400">
                Severity
              </th>

              <th className="pb-4 text-sm font-medium text-slate-400">
                Status
              </th>

              <th className="pb-4 text-sm font-medium text-slate-400">
                AI Action
              </th>

            </tr>

          </thead>

          <tbody>

            {history.map((item) => (

              <tr
                key={item.id}
                className="border-b border-slate-900 transition hover:bg-slate-900/40"
              >

                <td className="py-5">

                  <div className="flex items-center gap-2 text-slate-300">

                    <FaClock className="text-cyan-400" />

                    {item.time}

                  </div>

                </td>

                <td className="font-medium text-white">
                  {item.category}
                </td>

                <td>

                  <AlertSeverityBadge severity={item.severity} />

                </td>

                <td>

                    <span
                      className={`font-medium ${
                        getStatusClass(item.status)
                      }`}
                    >
                      {item.status}
                    </span>

                </td>

                <td className="text-slate-300">
                  {item.action}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile */}

      <div className="space-y-4 lg:hidden">

        {history.map((item) => (

          <div
            key={item.id}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
          >

            <div className="flex items-center justify-between">

              <h3 className="font-semibold text-white">

                {item.category}

              </h3>

              <span
                  className={`rounded-full px-3 py-1 text-xs ${
                    getSeverityStyle(item.severity)
                  }`}
              >
                {item.severity}
              </span>

            </div>

            <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">

              <FaClock />

              {item.time}

            </div>

            <div className="mt-3 text-sm text-slate-300">

              <strong>Status:</strong> {item.status}

            </div>

            <div className="mt-2 text-sm text-slate-300">

              <strong>AI Action:</strong> {item.action}

            </div>

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="mt-8 flex items-center justify-between rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">

        <div>

          <h3 className="font-semibold text-white">
            ArenaPilot AI Incident Log
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            Every alert is automatically stored for operational review and reporting.
          </p>

        </div>

        <FaCheckCircle className="text-3xl text-cyan-400" />

      </div>

    </Card>
  );
};

export default AlertHistoryTable;