import {
  FaWheelchair,
  FaElevator,
  FaRestroom,
  FaSuitcaseMedical,
  FaCircleCheck,
} from "react-icons/fa6";

import Card from "../ui/Card";

const AccessibilityPanel = ({ analysis }) => {
  const routeAnalysis = analysis?.routeAnalysis ?? {};
  const accessibleRoute = routeAnalysis?.recommendedGate
    ? `Step-Free Route via ${routeAnalysis.recommendedGate}`
    : "Step-Free Route unavailable";

  const facilities = [
    {
      icon: FaWheelchair,
      title: "Accessible Entrance",
      value: routeAnalysis?.recommendedGate ?? "Unavailable",
      status: "Available",
    },
    {
      icon: FaElevator,
      title: "Elevator Access",
      value: "Lift Zone 2",
      status: "Operational",
    },
    {
      icon: FaRestroom,
      title: "Accessible Restroom",
      value: "Section B",
      status: "Nearby",
    },
    {
      icon: FaSuitcaseMedical,
      title: "Medical Station",
      value: "North Concourse",
      status: "24/7",
    },
  ];

  return (
    <Card>

      <div className="flex items-center gap-3 mb-8">

        <FaWheelchair
          className="text-cyan-400"
          size={28}
        />

        <div>

          <h2 className="text-2xl font-bold text-white">
            Accessibility Navigator
          </h2>

          <p className="text-slate-400">
            Inclusive navigation for every spectator.
          </p>

        </div>

      </div>

      <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-5">

        <h3 className="text-cyan-300 font-semibold">
          Recommended Accessible Route
        </h3>

        <p className="mt-3 text-xl font-bold text-white">
          {accessibleRoute}
        </p>

      </div>

      <div className="mt-8 space-y-4">

        {facilities.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 p-5"
            >

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-cyan-500/10 p-3">

                  <Icon
                    className="text-cyan-400"
                    size={22}
                  />

                </div>

                <div>

                  <h4 className="font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="text-slate-400">
                    {item.value}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2 text-emerald-400">

                <FaCircleCheck />

                <span>
                  {item.status}
                </span>

              </div>

            </div>
          );
        })}

      </div>

    </Card>
  );
};

export default AccessibilityPanel;