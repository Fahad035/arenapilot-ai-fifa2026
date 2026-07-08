import { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";

const ChatWindow = () => {

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! I'm ArenaPilot AI. Ask me about crowd management, accessibility, transport, or stadium operations.",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: input },
      {
        role: "assistant",
        text: "Backend integration will connect Gemini here.",
      },
    ]);

    setInput("");
  };

  return (
    <Card>

      <h2 className="mb-5 text-xl font-bold text-white">
        AI Assistant
      </h2>

      <div className="h-125 overflow-y-auto rounded-xl bg-slate-900 p-5 space-y-4">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`rounded-xl p-4 ${
              msg.role === "assistant"
                ? "bg-cyan-600/20"
                : "bg-slate-700"
            }`}
          >
            {msg.text}
          </div>

        ))}

      </div>

      <div className="mt-5 flex gap-3">

        <input
          className="flex-1 rounded-xl border border-slate-700 bg-slate-900 p-3"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask ArenaPilot..."
        />

        <Button onClick={sendMessage}>
          Send
        </Button>

      </div>

    </Card>
  );
};

export default ChatWindow;