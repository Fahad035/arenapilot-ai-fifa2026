import generateChatResponse from "../services/chatService.js";

export const chatController = async (req, res, next) => {
  try {
    const { message, analysis } = req.body;

    const reply = await generateChatResponse({
      message,
      analysis,
    });

    res.json({
      success: true,
      reply,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    next(err);
  }
};