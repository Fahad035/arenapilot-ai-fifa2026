import Badge from "../ui/Badge";
import Card from "../ui/Card";

const HistoryTable = ({ history = [] }) => {
  return (
    <Card>
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            Previous Analyses
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            {history.length} saved record{history.length === 1 ? "" : "s"}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1 text-xs font-semibold text-slate-200">
            Tip: scroll horizontally on small screens
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-fixed">
          <thead>
            <tr className="sticky top-0 z-10 border-b border-slate-700 bg-slate-900/95 text-left backdrop-blur">
              <th className="pb-4 pr-3 text-sm font-semibold text-slate-200">
                Scenario Name
              </th>
              <th className="pb-4 pr-3 text-sm font-semibold text-slate-200">
                Attendance
              </th>
              <th className="pb-4 pr-3 text-sm font-semibold text-slate-200">
                Risk
              </th>

              {/* Hide extra columns on smaller screens */}
              <th className="hidden pb-4 pr-3 text-sm font-semibold text-slate-200 md:table-cell">
                Confidence
              </th>
              <th className="hidden pb-4 pr-3 text-sm font-semibold text-slate-200 lg:table-cell">
                Recommended Route
              </th>
              <th className="hidden pb-4 pr-3 text-sm font-semibold text-slate-200 xl:table-cell">
                Generated Summary
              </th>

              <th className="pb-4 pr-3 text-sm font-semibold text-slate-200">
                Timestamp
              </th>
            </tr>
          </thead>

          <tbody>
            {history.map((row) => (
              <tr
                key={row.id}
                className="border-b border-slate-800 transition-colors hover:bg-slate-800/30"
              >
                <td className="py-4 pr-3">
                  <div className="truncate font-medium text-white">
                    {row.scenarioName ?? "Unnamed Scenario"}
                  </div>
                </td>

                <td className="py-4 pr-3 text-slate-200">
                  {row.attendance !== undefined &&
                  row.attendance !== null
                    ? row.attendance.toLocaleString()
                    : "Unavailable"}
                </td>

                <td className="py-4 pr-3">
                  <Badge color={row.risk ?? "Low"}>
                    {row.risk ?? "Low"}
                  </Badge>
                </td>

                <td className="hidden py-4 pr-3 text-slate-200 md:table-cell">
                  {row.confidence !== undefined &&
                  row.confidence !== null
                    ? `${row.confidence}%`
                    : "Unavailable"}
                </td>

                <td className="hidden py-4 pr-3 text-slate-200 lg:table-cell">
                  <div className="line-clamp-2">
                    {row.recommendedRoute ?? "Unavailable"}
                  </div>
                </td>

                <td className="hidden py-4 pr-3 text-slate-200 xl:table-cell">
                  <div className="line-clamp-2">
                    {row.summary ?? "Unavailable"}
                  </div>
                </td>

                <td className="py-4 pr-3 text-slate-200">
                  {row.timestamp
                    ? new Date(row.timestamp).toLocaleString()
                    : "Unavailable"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default HistoryTable;
