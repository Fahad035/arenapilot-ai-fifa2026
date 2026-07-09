const colors = {
  Critical:
    "bg-red-500/10 text-red-400",

  High:
    "bg-orange-500/10 text-orange-400",

  Medium:
    "bg-yellow-500/10 text-yellow-400",

  Moderate:
    "bg-yellow-500/10 text-yellow-400",

  Low:
    "bg-emerald-500/10 text-emerald-400",

  Active:
    "bg-blue-500/10 text-blue-400",
};

const Badge = ({
  children,
  color = "Active",
}) => {
  const badgeColor = colors[color] ?? colors.Active;

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeColor}`}
    >
      {children}
    </span>
  );
};

export default Badge;