import {
  FaRoute,
  FaCircleCheck,
  FaClock,
  FaUsers,
} from "react-icons/fa6";

import Card from "../ui/Card";

const RouteComparison = ({ analysis }) => {
  const routeAnalysis = analysis?.routeAnalysis ?? {};
  const recommendedGate = routeAnalysis?.recommendedGate ?? "Unavailable";
  const routes = routeAnalysis?.alternativeRoutes ?? [];

  return (
    <Card>

      <div className="flex items-center gap-3 mb-8">

        <FaRoute
          className="text-cyan-400"
          size={28}
        />

        <div>

          <h2 className="text-2xl font-bold text-white">
            Route Comparison
          </h2>

          <p className="text-slate-400">
            Compare available routes using live operational data.
          </p>

        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-800">

              <th className="py-4 text-left text-slate-400">
                Route
              </th>

              <th className="text-left text-slate-400">
                Walking Time
              </th>

              <th className="text-left text-slate-400">
                Crowd Level
              </th>

              <th className="text-left text-slate-400">
                Recommendation
              </th>

            </tr>

          </thead>

          <tbody>

            {routes.map((route) => (

              <tr
                key={route.name}
                className="border-b border-slate-900"
              >

                <td className="py-5 font-semibold text-white">
                  {route?.gate ?? "Route unavailable"}
                </td>

                <td>

                  <div className="flex items-center gap-2 text-slate-300">

                    <FaClock />

                    {route?.estimatedTime ?? route?.load ?? "Unavailable"}

                  </div>

                </td>

                <td>

                  <div className="flex items-center gap-2 text-slate-300">

                    <FaUsers />

                    {route?.status ?? "Unavailable"}

                  </div>

                </td>

                <td>

                  {route?.gate === recommendedGate ? (

                    <span className="flex items-center gap-2 text-emerald-400">

                      <FaCircleCheck />

                      Best Route

                    </span>

                  ) : (

                    <span className="text-slate-500">

                      Alternative

                    </span>

                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <div className="mt-8 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-5">

        <h3 className="font-semibold text-cyan-300">
          AI Decision
        </h3>

        <p className="mt-3 leading-7 text-slate-300">
          {routeAnalysis?.recommendation ??
            "ArenaPilot recommends the least congested gate because it currently has the lowest pedestrian density, the shortest estimated walking time, and maintains full accessibility compliance."}
        </p>

      </div>

    </Card>
  );
};

export default RouteComparison;