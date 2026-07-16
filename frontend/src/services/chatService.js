import api from "./api";

/*
---------------------------------------------------------
ArenaPilot AI Conversation Memory
---------------------------------------------------------
A unique conversation ID is generated once per browser
session and sent with every chat request.

This allows the backend to remember previous messages
without changing the existing UI logic.
---------------------------------------------------------
*/

const STORAGE_KEY = "arenaPilotConversationId";

const generateConversationId = () => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `conversation-${Date.now()}-${Math.random()
    .toString(36)
    .substring(2, 10)}`;
};

const getConversationId = () => {
  let id = localStorage.getItem(STORAGE_KEY);

  if (!id) {
    id = generateConversationId();
    localStorage.setItem(STORAGE_KEY, id);
  }

  return id;
};

export const resetConversation = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const sendChatMessage = async (
  message,
  analysis
) => {
  const conversationId = getConversationId();

  const { data } = await api.post("/chat", {
    message,
    analysis,
    conversationId,
  });

  return {
    reply: data.reply,
    conversationId: data.conversationId,
    timestamp: data.timestamp,
  };
};