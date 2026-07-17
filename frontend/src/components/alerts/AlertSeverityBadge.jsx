import { getSeverityStyle } from "./alertStyles";

const AlertSeverityBadge = ({ severity = "Info" }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
        getSeverityStyle(severity)
      }`}
    >
      {severity}
    </span>
  );
};

export default AlertSeverityBadge;