    import { useMemo } from "react";
import {
  FaCircle,
  FaExclamationTriangle,
  FaHeartbeat,
  FaShieldAlt,
  FaCloudSun,
  FaUsers,
} from "react-icons/fa";

const defaultAlerts = [
  {
    text: "Crowd congestion detected near Gate B.",
    color: "text-red-400",
    icon: FaUsers,
  },
  {
    text: "Medical team dispatched to Section D.",
    color: "text-orange-400",
    icon: FaHeartbeat,
  },
  {
    text: "Weather conditions remain stable.",
    color: "text-cyan-400",
    icon: FaCloudSun,
  },
  {
    text: "ArenaPilot AI monitoring all stadium zones.",
    color: "text-emerald-400",
    icon: FaShieldAlt,
  },
  {
    text: "Security patrol increased around VIP entrance.",
    color: "text-yellow-400",
    icon: FaExclamationTriangle,
  },
];

const AlertTicker = ({ analysis }) => {

  const alerts = useMemo(() => {

    if (analysis?.alerts?.length) {
      return analysis.alerts.map((item) => ({
        text: item.title,
        color: "text-cyan-400",
        icon: FaCircle,
      }));
    }

    return defaultAlerts;

  }, [analysis]);

  return (
    <div className="overflow-hidden border-b border-cyan-500/10 bg-slate-900">

      <div className="flex whitespace-nowrap">

        <div className="ticker flex items-center">

          {[...alerts, ...alerts].map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="mx-8 flex items-center gap-3 py-3"
              >

                <Icon className={`${item.color} text-sm`} />

                <span className="text-sm font-medium text-slate-300">

                  {item.text}

                </span>

              </div>

            );

          })}

        </div>

      </div>

    </div>
  );
};

export default AlertTicker;