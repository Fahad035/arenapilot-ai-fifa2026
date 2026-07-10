import Card from "../ui/Card";

const prompts = [
  "How can we reduce congestion at Gate C?",
  "Generate an emergency evacuation summary.",
  "Recommend the safest spectator route.",
  "Summarize the current stadium situation.",
  "Suggest transport alternatives.",
];

const SuggestedPrompts = ({ onPromptSelect }) => {
  return (
    <Card>

      <h2 className="text-xl font-bold text-white">
        Suggested Prompts
      </h2>

      <p className="mt-2 text-sm text-slate-400">
        Ask ArenaPilot AI using predefined operational questions.
      </p>

      <div className="mt-5 space-y-3">

        {prompts.map((prompt) => (

          <button
            key={prompt}
            onClick={() => onPromptSelect?.(prompt)}
            className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-slate-900
              p-4
              text-left
              transition
              hover:border-cyan-500
              hover:bg-slate-800
            "
          >
            {prompt}
          </button>

        ))}

      </div>

    </Card>
  );
};

export default SuggestedPrompts;