export const SEVERITY_STYLES = {
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

export const STATUS_STYLES = {
  Monitoring: "text-orange-400",
  Investigating: "text-yellow-400",
  Resolved: "text-emerald-400",
  Completed: "text-cyan-400",
};

export const PRIORITY_STYLES = {
  Critical: "text-red-400 bg-red-500/10 border-red-500/20",
  High: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  Medium: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  Low: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
};

export function getSeverityStyle(severity) {
  return SEVERITY_STYLES[severity] || SEVERITY_STYLES.Info;
}

export function getStatusClass(status) {
  return STATUS_STYLES[status] || "";
}

export function getPriorityStyle(priority) {
  return PRIORITY_STYLES[priority] || PRIORITY_STYLES.Low;
}

