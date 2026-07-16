import {
  FaRoute,
  FaShieldAlt,
  FaUsers,
  FaAmbulance,
  FaBus,
  FaRobot,
} from "react-icons/fa";

import Card from "../ui/Card";

const prompts = [
  {
    icon: <FaUsers />,
    title: "Crowd Management",
    prompt: "How can we reduce congestion at Gate C?",
  },
  {
    icon: <FaShieldAlt />,
    title: "Emergency",
    prompt: "Generate an emergency evacuation summary.",
  },
  {
    icon: <FaRoute />,
    title: "Navigation",
    prompt: "Recommend the safest spectator route.",
  },
  {
    icon: <FaRobot />,
    title: "AI Summary",
    prompt: "Summarize the current stadium situation.",
  },
  {
    icon: <FaBus />,
    title: "Transport",
    prompt: "Suggest transport alternatives.",
  },
  {
    icon: <FaAmbulance />,
    title: "Medical",
    prompt:
      "Identify the nearest medical assistance point and recommend the quickest route.",
  },
];

const SuggestedPrompts = ({ onPromptSelect }) => {
  return (
    <Card className="h-fit">

      <h2 className="text-xl font-bold text-white">
        Suggested Prompts
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        Click any operational question below to instantly send it to
        ArenaPilot AI.
      </p>

      <div className="mt-6 space-y-4">

        {prompts.map((item) => (

          <button
            key={item.prompt}
            onClick={() => onPromptSelect(item.prompt)}
            className="
              group
              w-full
              rounded-2xl
              border
              border-slate-700
              bg-slate-900
              p-4
              text-left
              transition-all
              duration-300
              hover:border-cyan-500
              hover:bg-slate-800
              hover:-translate-y-1
            "
          >

            <div className="flex items-start gap-4">

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-500/10
                  text-cyan-400
                  transition
                  group-hover:scale-110
                "
              >
                {item.icon}
              </div>

              <div className="flex-1">

                <h3 className="font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-400">
                  {item.prompt}
                </p>

              </div>

            </div>

          </button>

        ))}

      </div>

    </Card>
  );
};

export default SuggestedPrompts;