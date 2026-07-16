import {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from "react";

import {
  FaPaperPlane,
} from "react-icons/fa";

import Card from "../ui/Card";
import Button from "../ui/Button";

import { sendChatMessage } from "../../services/chatService";

import {
  languageInstructions,
} from "../../constants/chatLanguages";

import TypingIndicator from "./TypingIndicator";
import MessageBubble from "./MessageBubble";
import ChatToolbar from "./ChatToolbar";


const ChatWindow = forwardRef(({ analysis }, ref) => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text:
        "Hello! I'm ArenaPilot AI. Ask me anything about this stadium scenario.",
    },
  ]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const [language, setLanguage] =
    useState("English");

  const bottomRef = useRef(null);


  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);


  const sendMessage = async (
    customQuestion = null
  ) => {
    const question = (
      customQuestion ?? input
    ).trim();

    if (!question || loading) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: question,
      },
    ]);

    if (!customQuestion) {
      setInput("");
    }

    setLoading(true);

    try {
      const finalPrompt = `${languageInstructions[language]}

${question}`;

      const response =
        await sendChatMessage(
          finalPrompt,
          analysis
        );

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            typeof response === "string"
              ? response
              : response?.reply ??
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
    } finally {
      setLoading(false);
    }
  };

  useImperativeHandle(ref, () => ({
    sendPrompt(prompt) {
      sendMessage(prompt);
    },
  }));

  return (
    <Card className="flex h-190 flex-col">

      <ChatToolbar
        language={language}
        setLanguage={setLanguage}
        messages={messages}
      />

      

      <div className="flex-1 space-y-4 overflow-y-auto rounded-xl bg-slate-900 p-5">

        {messages.map((message, index) => (
          <MessageBubble
            key={index}
            message={message}
          />
        ))}

        {loading && <TypingIndicator />}

        <div ref={bottomRef} />

      </div>

      <div className="mt-5 flex gap-3">

        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              !e.shiftKey
            ) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder="Ask ArenaPilot AI..."
          className="flex-1 rounded-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none focus:border-cyan-500"
        />

        <Button
          aria-label="Send Message"
          onClick={sendMessage}
          disabled={loading}
          className="flex items-center gap-2"
        >
          <FaPaperPlane />

          {loading
            ? "Sending..."
            : "Send"}
        </Button>

      </div>

    </Card>
  );
});

ChatWindow.displayName = "ChatWindow";

export default ChatWindow;