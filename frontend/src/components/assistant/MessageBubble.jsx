import { useState } from "react";

import {
  FaRobot,
  FaUser,
  FaCopy,
  FaVolumeUp,
  FaCheck,
} from "react-icons/fa";

const MessageBubble = ({ message }) => {
  const [copied, setCopied] = useState(false);

  const isAssistant = message.role === "assistant";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSpeak = () => {
    if (!("speechSynthesis" in window)) {
      alert("Speech synthesis is not supported in this browser.");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(
      message.text
    );

    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      className={`flex ${
        isAssistant
          ? "justify-start"
          : "justify-end"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-2xl p-4 ${
          isAssistant
            ? "border border-cyan-500/20 bg-cyan-500/10"
            : "bg-slate-700"
        }`}
      >
        <div className="mb-2 flex items-center justify-between">

          <div className="flex items-center gap-2">

            {isAssistant ? (
              <FaRobot className="text-cyan-400" />
            ) : (
              <FaUser className="text-white" />
            )}

            <span className="text-xs text-slate-400">
              {isAssistant
                ? "ArenaPilot AI"
                : "You"}
            </span>

          </div>

          {isAssistant && (
            <div className="flex items-center gap-2">

              <button
                onClick={handleCopy}
                title="Copy Response"
                className="
                  rounded-lg
                  p-2
                  text-slate-400
                  transition
                  hover:bg-slate-800
                  hover:text-cyan-400
                "
              >
                {copied ? (
                  <FaCheck className="text-emerald-400" />
                ) : (
                  <FaCopy />
                )}
              </button>

              <button
                onClick={handleSpeak}
                title="Read Aloud"
                className="
                  rounded-lg
                  p-2
                  text-slate-400
                  transition
                  hover:bg-slate-800
                  hover:text-cyan-400
                "
              >
                <FaVolumeUp />
              </button>

            </div>
          )}

        </div>

        <p className="whitespace-pre-wrap leading-7 text-slate-200">
          {message.text}
        </p>

        {copied && (
          <p className="mt-3 text-xs text-emerald-400">
            Copied to clipboard
          </p>
        )}

      </div>
    </div>
  );
};

export default MessageBubble;