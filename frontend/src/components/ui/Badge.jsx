const colors = {
  High:
    "bg-red-500/10 text-red-400",

  Medium:
    "bg-amber-500/10 text-amber-400",

  Low:
    "bg-emerald-500/10 text-emerald-400",

  Active:
    "bg-blue-500/10 text-blue-400",
};

const Badge = ({
  children,
  color = "Active",
}) => {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${colors[color]}`}
    >
      {children}
    </span>
  );
};

export default Badge;