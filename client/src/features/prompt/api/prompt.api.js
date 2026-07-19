import api from "@/lib/axios";

export const getAllPrompts = async (params = {}) => {
  const { data } = await api.get("/prompts", {
    params,
  });

  return data;
};

export const getPromptById = async (id) => {
  const { data } = await api.get(`/prompts/${id}`);

  return data;
};

export const getPrompts = async (params = {}) => {
  const response = await api.get("/prompts", { params });
  return response.data.data.prompts; // or whatever your backend returns
};

export const createPrompt = async (payload) => {
  const { data } = await api.post("/prompts", payload);

  return data;
};

export const updatePrompt = async (id, payload) => {
  const { data } = await api.put(`/prompts/${id}`, payload);

  return data;
};

export const deletePrompt = async (id) => {
  const { data } = await api.delete(`/prompts/${id}`);

  return data;
};

export const archivePrompt = async (id) => {
  const { data } = await api.patch(
    `/prompts/${id}/archive`
  );

  return data;
};

export const favoritePrompt = async (id) => {
  const { data } = await api.patch(
    `/prompts/${id}/favorite`
  );

  return data;
};

export const duplicatePrompt = async (id) => {
  const { data } = await api.post(
    `/prompts/${id}/duplicate`
  );

  return data;
};