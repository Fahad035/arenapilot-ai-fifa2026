const severityStyles = {
  Critical:
    "bg-red-500/10 text-red-400 border border-red-500/20",

  High:
    "bg-orange-500/10 text-orange-400 border border-orange-500/20",

  Medium:
    "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",

  Low:
    "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",

  Info:
    "bg-slate-700 text-slate-300 border border-slate-600",
};

const AlertSeverityBadge = ({ severity = "Info" }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
        severityStyles[severity] || severityStyles.Info
      }`}
    >
      {severity}
    </span>
  );
};

export default AlertSeverityBadge;