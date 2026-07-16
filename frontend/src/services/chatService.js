import api from "./api";

/*
---------------------------------------------------------
ArenaPilot AI Conversation Memory
---------------------------------------------------------
A unique session ID is generated once per browser session
and sent with every request.

The backend uses this ID to remember previous messages.
---------------------------------------------------------
*/

const STORAGE_KEY = "arenaPilotConversationId";

const generateSessionId = () => {
  if (
    typeof crypto !== "undefined" &&
    crypto.randomUUID
  ) {
    return crypto.randomUUID();
  }

  return `session-${Date.now()}-${Math.random()
    .toString(36)
    .substring(2, 10)}`;
};

const getSessionId = () => {
  let id = localStorage.getItem(STORAGE_KEY);

  if (!id) {
    id = generateSessionId();
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
  const sessionId = getSessionId();

  const { data } = await api.post("/chat", {
    sessionId,
    message,
    analysis,
  });

  return {
    success: data.success,
    reply: data.reply,
    reasoning: data.reasoning ?? [],
    sessionId: data.sessionId,
    timestamp: data.timestamp,
  };
};