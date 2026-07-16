const MAX_HISTORY = 10;

const conversations = new Map();

/**
 * Create a new conversation if it doesn't exist.
 */
export const initializeConversation = (conversationId) => {
  if (!conversationId) return;

  if (!conversations.has(conversationId)) {
    conversations.set(conversationId, []);
  }
};

/**
 * Get conversation history.
 */
export const getConversationHistory = (conversationId) => {
  if (!conversationId) return [];

  return conversations.get(conversationId) ?? [];
};

/**
 * Add a message to conversation history.
 */
export const addConversationMessage = (
  conversationId,
  role,
  text
) => {
  if (!conversationId) return;

  initializeConversation(conversationId);

  const history = conversations.get(conversationId);

  history.push({
    role,
    text,
    timestamp: new Date().toISOString(),
  });

  // Keep only the most recent messages
  if (history.length > MAX_HISTORY) {
    history.splice(0, history.length - MAX_HISTORY);
  }

  conversations.set(conversationId, history);
};

/**
 * Clear a conversation.
 */
export const clearConversation = (conversationId) => {
  if (!conversationId) return;

  conversations.delete(conversationId);
};

/**
 * Check whether a conversation exists.
 */
export const hasConversation = (conversationId) => {
  return conversations.has(conversationId);
};

/**
 * Get all conversation IDs.
 * Useful for debugging/admin tools.
 */
export const getConversationIds = () => {
  return [...conversations.keys()];
};

/**
 * Remove conversations that have been inactive
 * longer than maxAgeMinutes.
 */
export const cleanupExpiredConversations = (
  maxAgeMinutes = 60
) => {
  const now = Date.now();

  for (const [conversationId, history] of conversations.entries()) {
    if (!history.length) {
      conversations.delete(conversationId);
      continue;
    }

    const lastMessage =
      history[history.length - 1];

    const age =
      now - new Date(lastMessage.timestamp).getTime();

    if (age > maxAgeMinutes * 60 * 1000) {
      conversations.delete(conversationId);
    }
  }
};

export default {
  initializeConversation,
  getConversationHistory,
  addConversationMessage,
  clearConversation,
  hasConversation,
  getConversationIds,
  cleanupExpiredConversations,
};