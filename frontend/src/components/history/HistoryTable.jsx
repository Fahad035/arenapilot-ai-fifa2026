import Badge from "../ui/Badge";
import Card from "../ui/Card";

const HistoryTable = ({ history = [] }) => {
  return (
    <Card>

      <h2 className="mb-6 text-xl font-bold text-white">
        Previous Analyses
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-700 text-left">

              <th className="pb-4">Scenario Name</th>
              <th>Attendance</th>
              <th>Risk Level</th>
              <th>Confidence</th>
              <th>Recommended Route</th>
              <th>Generated Summary</th>
              <th>Timestamp</th>

            </tr>

          </thead>

          <tbody>

            {history.map((row) => (

              <tr
                key={row.id}
                className="border-b border-slate-800"
              >

                <td className="py-5">
                  {row.scenarioName ?? "Unnamed Scenario"}
                </td>

                <td>

                  {row.attendance !== undefined && row.attendance !== null
                    ? row.attendance.toLocaleString()
                    : "Unavailable"}

                </td>

                <td>
                  <Badge color={row.risk ?? "Low"}>
                    {row.risk ?? "Low"}
                  </Badge>
                </td>

                <td>
                  {row.confidence !== undefined && row.confidence !== null
                    ? `${row.confidence}%`
                    : "Unavailable"}
                </td>

                <td>
                  {row.recommendedRoute ?? "Unavailable"}
                </td>

                <td>
                  {row.summary ?? "Unavailable"}
                </td>

                <td>
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