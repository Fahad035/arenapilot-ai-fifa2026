import generateChatResponse from "../services/chatService.js";

export const chatController = async (req, res, next) => {
  try {
    const {
      message,
      analysis,
      sessionId = "default",
    } = req.body;

    const aiResponse = await generateChatResponse({
      sessionId,
      message,
      analysis,
    });

    res.json({
      success: true,
      reply: aiResponse.reply,
      reasoning: aiResponse.reasoning,
      sessionId,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    next(error);
  }
};