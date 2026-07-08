import ChatWindow from "./ChatWindow";
import SuggestedPrompts from "./SuggestedPrompts";

const AIAssistantTab = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-3">

      <div className="lg:col-span-2">
        <ChatWindow />
      </div>

      <SuggestedPrompts />

    </div>
  );
};

export default AIAssistantTab;