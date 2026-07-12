import api from "./api";

export const getLatestLiveSnapshot = async () => {
  const { data } = await api.get("/live/latest");
  return data;
};

