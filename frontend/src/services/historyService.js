import api from "./api";

export const fetchScenarioHistory = async () => {
  const { data } = await api.get("/history");

  return data?.history ?? [];
};
