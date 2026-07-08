import Badge from "../ui/Badge";
import Card from "../ui/Card";

const rows = [
  {
    id: 1,
    venue: "MetLife Stadium",
    risk: "High",
    crowd: "92%",
    time: "10 mins ago",
  },
  {
    id: 2,
    venue: "SoFi Stadium",
    risk: "Medium",
    crowd: "68%",
    time: "30 mins ago",
  },
  {
    id: 3,
    venue: "AT&T Stadium",
    risk: "Low",
    crowd: "42%",
    time: "1 hour ago",
  },
];

const HistoryTable = () => {
  return (
    <Card>

      <h2 className="mb-6 text-xl font-bold text-white">
        Previous Analyses
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-700 text-left">

              <th className="pb-4">Venue</th>
              <th>Risk</th>
              <th>Crowd</th>
              <th>Generated</th>
              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {rows.map((row) => (

              <tr
                key={row.id}
                className="border-b border-slate-800"
              >

                <td className="py-5">
                  {row.venue}
                </td>

                <td>

                  <Badge color={row.risk}>
                    {row.risk}
                  </Badge>

                </td>

                <td>
                  {row.crowd}
                </td>

                <td>
                  {row.time}
                </td>

                <td>

                  <button
                    className="rounded-lg bg-cyan-600 px-4 py-2 text-sm hover:bg-cyan-500"
                  >
                    View
                  </button>

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