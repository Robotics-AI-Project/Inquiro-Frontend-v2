import axios from "axios";
import { env } from "@/env/server.mjs";

const instance = axios.create({
  baseURL: env.BACKEND_URL,
});
