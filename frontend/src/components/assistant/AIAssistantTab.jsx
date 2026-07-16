import { useRef } from "react";

import ChatWindow from "./ChatWindow";
import SuggestedPrompts from "./SuggestedPrompts";

const AIAssistantTab = ({ analysis }) => {
  const chatRef = useRef(null);

  const handlePromptSelect = (prompt) => {
    chatRef.current?.sendPrompt(prompt);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-3">

      <div className="lg:col-span-2">

        <ChatWindow
          ref={chatRef}
          analysis={analysis}
        />

      </div>

      <SuggestedPrompts
        onPromptSelect={handlePromptSelect}
      />

    </div>
  );
};

export default AIAssistantTab;