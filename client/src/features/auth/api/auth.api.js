import api from "@/lib/axios";

export const register = (data) =>
  api.post("/auth/register", data);

export const login = (data) =>
  api.post("/auth/login", data);

export const forgotPassword = (data) =>
  api.post("/auth/forgot-password", data);

export const resetPassword = (data) =>
  api.post("/auth/reset-password", data);

export const getProfile = () =>
  api.get("/auth/me");

export const logout = () =>
  api.post("/auth/logout");

export const refreshToken = () =>
  api.post("/auth/refresh-token");