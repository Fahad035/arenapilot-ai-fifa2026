import generateChatResponse from "../services/chatService.js";
import {
  getConversation,
  saveConversation,
} from "../utils/conversationStore.js";

export const chatController = async (req, res, next) => {
  try {
    const {
      message,
      analysis,
      conversationId,
    } = req.body;

    // Retrieve previous conversation (if exists)
    const history = getConversation(conversationId);

    // Generate AI response using history
    const reply = await generateChatResponse({
      message,
      analysis,
      history,
    });

    // Save conversation
    saveConversation(
      conversationId,
      "user",
      message
    );

    saveConversation(
      conversationId,
      "assistant",
      reply
    );

    res.json({
      success: true,
      reply,
      conversationId,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    next(error);
  }
};