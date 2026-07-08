import { FaArrowRight } from "react-icons/fa";

const colors = {
  High: {
    border: "border-red-500/30",
    bg: "bg-red-500/10",
    text: "text-red-400",
  },
  Medium: {
    border: "border-amber-500/30",
    bg: "bg-amber-500/10",
    text: "text-amber-400",
  },
  Low: {
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
  },
};

const RecommendationCard = ({
  title,
  description,
  priority = "Medium",
}) => {
  const style = colors[priority];

  return (
    <div
      className={`rounded-2xl border ${style.border} ${style.bg} p-6 transition hover:-translate-y-1`}
    >
      <div className="flex items-center justify-between">

        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${style.text}`}
        >
          {priority}
        </span>

      </div>

      <p className="mt-4 leading-7 text-slate-300">
        {description}
      </p>

      <button className="mt-6 flex items-center gap-2 text-blue-400 transition hover:gap-3">
        View Details

        <FaArrowRight />
      </button>

    </div>
  );
};

export default RecommendationCard;