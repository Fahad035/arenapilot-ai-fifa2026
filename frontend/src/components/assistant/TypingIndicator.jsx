import { FaRobot } from "react-icons/fa";

const TypingIndicator = () => {
  return (
    <div className="flex justify-start">

      <div
        className="
          max-w-[80%]
          rounded-2xl
          border
          border-cyan-500/20
          bg-cyan-500/10
          p-4
        "
      >

        <div className="mb-2 flex items-center gap-2">

          <FaRobot className="text-cyan-400" />

          <span className="text-xs text-slate-400">
            ArenaPilot AI
          </span>

        </div>

        <div className="flex items-center gap-2">

          <span className="text-sm text-cyan-300">
            ArenaPilot AI is thinking
          </span>

          <div className="flex gap-1">

            <span
              className="
                h-2
                w-2
                animate-bounce
                rounded-full
                bg-cyan-400
              "
            />

            <span
              className="
                h-2
                w-2
                animate-bounce
                rounded-full
                bg-cyan-400
                [animation-delay:0.15s]
              "
            />

            <span
              className="
                h-2
                w-2
                animate-bounce
                rounded-full
                bg-cyan-400
                [animation-delay:0.3s]
              "
            />

          </div>

        </div>

      </div>

    </div>
  );
};

export default TypingIndicator;