import Card from "../ui/Card";
import Badge from "../ui/Badge";

const rows = [
  {
    gate: "Gate A",
    density: "High",
    wait: "18 min",
  },
  {
    gate: "Gate B",
    density: "Medium",
    wait: "9 min",
  },
  {
    gate: "Gate C",
    density: "Critical",
    wait: "26 min",
  },
  {
    gate: "Gate D",
    density: "Low",
    wait: "4 min",
  },
];

const DensityTable = () => {
  return (
    <Card>

      <h3 className="mb-5 text-xl font-bold text-white">
        Gate Status
      </h3>

      <table className="w-full">

        <thead>

          <tr className="text-left text-slate-400">

            <th>Gate</th>

            <th>Status</th>

            <th>Wait</th>

          </tr>

        </thead>

        <tbody>

          {rows.map((row) => (

            <tr
              key={row.gate}
              className="border-t border-slate-800"
            >

              <td className="py-4">
                {row.gate}
              </td>

              <td>

                <Badge
                  color={
                    row.density==="Critical"
                    ?"High"
                    :row.density
                  }
                >
                  {row.density}
                </Badge>

              </td>

              <td>
                {row.wait}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </Card>
  );
};

export default DensityTable;