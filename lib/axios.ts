import axios from "axios";
import { env } from "@/env/server.mjs";

export const backendClient = axios.create({
  baseURL: env.BACKEND_URL,
});

export const nextAPIClient = axios.create({
  baseURL: window.location.origin,
});

backendClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
