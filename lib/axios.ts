import axios from "axios";
import { env } from "@/env/server.mjs";
import { getSession } from "next-auth/react";

export const backendClient = axios.create({
  baseURL: env.BACKEND_URL,
});

export const nextAPIClient = axios.create({
  baseURL: window.location.origin,
});

backendClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
