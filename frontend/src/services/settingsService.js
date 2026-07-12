import api from "./api";

export const fetchSettings = async () => {
  const { data } = await api.get("/settings");
  return data?.settings ?? {};
};

export const saveSettings = async (settings) => {
  const { data } = await api.post("/settings", { settings });
  return data?.settings ?? settings;
};

