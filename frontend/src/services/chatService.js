import api from "./api";

export const sendChatMessage = async (
  message,
  analysis
) => {
  const { data } = await api.post("/chat", {
    message,
    analysis,
  });

  return data.reply;
};