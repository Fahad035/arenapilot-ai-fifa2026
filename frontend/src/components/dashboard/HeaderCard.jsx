import { memo } from "react";
import { FaBell } from "react-icons/fa";

const HEADER_CARD_THEME = {
  emerald: { border: "border-emerald-500/20", bg: "bg-emerald-500/10", text: "text-emerald-400" },
  cyan: { border: "border-cyan-500/20", bg: "bg-cyan-500/10", text: "text-cyan-400" },
  red: { border: "border-red-500/20", bg: "bg-red-500/10", text: "text-red-400" },
  orange: { border: "border-orange-500/20", bg: "bg-orange-500/10", text: "text-orange-400" },
  yellow: { border: "border-yellow-500/20", bg: "bg-yellow-500/10", text: "text-yellow-400" },
  purple: { border: "border-purple-500/20", bg: "bg-purple-500/10", text: "text-purple-400" },
  blue: { border: "border-blue-500/20", bg: "bg-blue-500/10", text: "text-blue-400" },
  slate: { border: "border-slate-700", bg: "bg-slate-900/70", text: "text-white" },
  green: { border: "border-emerald-500/20", bg: "bg-emerald-500/10", text: "text-emerald-400" },
};

const HeaderCard = memo(function HeaderCard({ card }) {
  const theme = HEADER_CARD_THEME[card.color] ?? HEADER_CARD_THEME.slate;
  const showBellIcon = card.id === "alerts" || card.id === "critical";

  return (
    <div
      className={`min-w-42.5 rounded-2xl border ${theme.border} ${theme.bg} px-3 py-1.5 transition duration-300 hover:scale-[1.02]`}
    >
      <p className="text-xs uppercase tracking-widest text-slate-500">
        {card.title}
      </p>

      <div className="mt-3 flex items-center gap-3">
        {showBellIcon ? <FaBell className={theme.text} /> : null}

        <h3 className={`text-xl font-mono ${theme.text}`}>{card.value}</h3>
      </div>
    </div>
  );
});

export default HeaderCard;
