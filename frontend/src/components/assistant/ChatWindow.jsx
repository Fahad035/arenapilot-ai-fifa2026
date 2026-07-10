import { useState } from "react";
import {
  FaRobot,
  FaUser,
  FaPaperPlane,
} from "react-icons/fa";

import Card from "../ui/Card";
import Button from "../ui/Button";

import { sendChatMessage } from "../../services/chatService";

const ChatWindow = ({ analysis }) => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text:
        "Hello! I'm ArenaPilot AI. Ask me anything about this stadium scenario.",
    },
  ]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const question = input;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: question,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      console.log("Chat analysis:", analysis);
      const response = await sendChatMessage(
        question,
        analysis
      );

      // backend returns: { success, reply, timestamp }
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            typeof response === "string"
              ? response
              : response?.reply ||
                "No response received.",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            "Unable to contact ArenaPilot AI.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <Card className="flex h-190 flex-col">

      <h2 className="mb-6 text-2xl font-bold text-white">
        ArenaPilot AI Assistant
      </h2>

      <div className="flex-1 space-y-4 overflow-y-auto rounded-xl bg-slate-900 p-5">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "assistant"
                ? "justify-start"
                : "justify-end"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 ${
                msg.role === "assistant"
                  ? "bg-cyan-500/10 border border-cyan-500/20"
                  : "bg-slate-700"
              }`}
            >
              <div className="mb-2 flex items-center gap-2">

                {msg.role === "assistant" ? (
                  <FaRobot className="text-cyan-400" />
                ) : (
                  <FaUser className="text-white" />
                )}

                <span className="text-xs text-slate-400">
                  {msg.role === "assistant"
                    ? "ArenaPilot AI"
                    : "You"}
                </span>

              </div>

              <p className="whitespace-pre-wrap leading-7 text-slate-200">
                {msg.text}
              </p>

            </div>
          </div>
        ))}

        {loading && (
          <div className="text-sm text-cyan-400">
            ArenaPilot AI is thinking...
          </div>
        )}

      </div>

      <div className="mt-5 flex gap-3">

        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Ask ArenaPilot AI..."
          className="flex-1 rounded-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none focus:border-cyan-500"
        />

        <Button
          onClick={sendMessage}
          disabled={loading}
          className="flex items-center gap-2"
        >
          <FaPaperPlane />

          Send
        </Button>

      </div>

    </Card>
  );
};

export default ChatWindow;