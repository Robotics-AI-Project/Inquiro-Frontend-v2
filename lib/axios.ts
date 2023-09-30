import axios from "axios";
import { env } from "@/env/server.mjs";

const instance = axios.create({
  baseURL: env.BACKEND_URL,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${env.JWT}`;
  return config;
});

export default instance;
