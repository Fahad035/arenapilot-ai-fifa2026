import {
  FaDownload,
  FaGlobe,
} from "react-icons/fa";

import { languages } from "../../constants/chatLanguages";

const ChatToolbar = ({
  language,
  setLanguage,
  messages,
}) => {
  const handleExport = () => {
    const chatContent = messages
      .map(
        (message) =>
          `${message.role === "assistant"
            ? "ArenaPilot AI"
            : "You"}:\n${message.text}`
      )
      .join("\n\n----------------------------------------\n\n");

    const blob = new Blob([chatContent], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    const date = new Date()
      .toISOString()
      .split("T")[0];

    link.href = url;
    link.download = `ArenaPilotAI_Chat_${date}.txt`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

      {/* Left */}

      <div>

        <h2 className="text-2xl font-bold text-white">
          ArenaPilot AI Assistant
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Ask ArenaPilot AI in your preferred language and export the
          conversation anytime.
        </p>

      </div>

      {/* Right */}

      <div className="flex flex-wrap items-center gap-3">

        <div className="relative">

          <FaGlobe
            className="
              pointer-events-none
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <select
            value={language}
            onChange={(e) =>
              setLanguage(e.target.value)
            }
            className="
              rounded-xl
              border
              border-slate-700
              bg-slate-900
              py-2
              pl-10
              pr-4
              text-white
              outline-none
              transition
              focus:border-cyan-500
            "
          >
            {languages.map((lang) => (
              <option
                key={lang}
                value={lang}
              >
                {lang}
              </option>
            ))}
          </select>

        </div>

        <button
          onClick={handleExport}
          className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-cyan-500/30
            bg-cyan-500/10
            px-4
            py-2
            text-sm
            font-medium
            text-cyan-300
            transition
            hover:border-cyan-400
            hover:bg-cyan-500/20
          "
        >
          <FaDownload />

          Export Chat

        </button>

      </div>

    </div>
  );
};

export default ChatToolbar;