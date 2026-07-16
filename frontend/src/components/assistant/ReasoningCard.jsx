import {
  FaBrain,
  FaCheckCircle,
} from "react-icons/fa";

const ReasoningCard = ({
  reasoning = [],
}) => {
  if (
    !Array.isArray(reasoning) ||
    reasoning.length === 0
  ) {
    return null;
  }

  return (
    <div
      className="
        mt-4
        rounded-xl
        border
        border-cyan-500/20
        bg-slate-900/70
        p-4
      "
    >
      <div className="mb-3 flex items-center gap-2">

        <FaBrain className="text-cyan-400" />

        <h3 className="text-sm font-semibold text-cyan-300">
          Why ArenaPilot AI Recommended This
        </h3>

      </div>

      <ul className="space-y-2">

        {reasoning.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3"
          >
            <FaCheckCircle
              className="
                mt-1
                shrink-0
                text-emerald-400
              "
            />

            <span className="text-sm leading-6 text-slate-300">
              {item}
            </span>

          </li>
        ))}

      </ul>

    </div>
  );
};

export default ReasoningCard;