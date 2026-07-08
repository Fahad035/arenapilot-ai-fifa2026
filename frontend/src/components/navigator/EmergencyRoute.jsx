import {
  FaTriangleExclamation,
  FaPersonRunning,
  FaShield,
  FaHospital,
  FaArrowRight,
} from "react-icons/fa6";

import Card from "../ui/Card";

const EmergencyRoutes = () => {
  const emergencyRoutes = [
    {
      title: "North Evacuation",
      destination: "Assembly Point A",
      time: "4 min",
      status: "Available",
      icon: FaPersonRunning,
    },
    {
      title: "South Evacuation",
      destination: "Assembly Point B",
      time: "6 min",
      status: "Available",
      icon: FaShield,
    },
    {
      title: "Medical Route",
      destination: "Emergency Medical Center",
      time: "2 min",
      status: "Priority",
      icon: FaHospital,
    },
  ];

  return (
    <Card>

      <div className="flex items-center gap-3 mb-8">

        <FaTriangleExclamation
          className="text-red-400"
          size={28}
        />

        <div>

          <h2 className="text-2xl font-bold text-white">
            Emergency Navigation
          </h2>

          <p className="text-slate-400">
            Verified evacuation and emergency response routes.
          </p>

        </div>

      </div>

      <div className="space-y-5">

        {emergencyRoutes.map((route) => {
          const Icon = route.icon;

          return (

            <div
              key={route.title}
              className="rounded-xl border border-red-500/20 bg-red-500/10 p-5"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-red-500/20 p-3">

                    <Icon
                      className="text-red-400"
                      size={22}
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold text-white">
                      {route.title}
                    </h3>

                    <p className="text-slate-400">
                      {route.destination}
                    </p>

                  </div>

                </div>

                <span className="rounded-full bg-red-500/20 px-3 py-1 text-red-300 text-sm">
                  {route.status}
                </span>

              </div>

              <div className="mt-5 flex items-center gap-3 text-slate-300">

                <FaArrowRight className="text-red-400" />

                Estimated evacuation time

                <strong className="text-white">
                  {route.time}
                </strong>

              </div>

            </div>

          );
        })}

      </div>

      <div className="mt-8 rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-5">

        <h3 className="font-semibold text-yellow-300">
          AI Emergency Recommendation
        </h3>

        <p className="mt-3 leading-7 text-slate-300">
          In case of severe congestion or evacuation, ArenaPilot
          automatically redirects spectators using the safest
          available exit corridors while maintaining emergency
          vehicle access and minimizing bottlenecks.
        </p>

      </div>

    </Card>
  );
};

export default EmergencyRoutes;