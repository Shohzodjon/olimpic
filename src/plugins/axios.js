import axios from "axios";
import { lang } from "@/uitiles/currentLang";
const inctance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 1000,
});

inctance.interceptors.request.use(
  (config) => {
    // ...config.params,
    config.headers["Accept-Language"] = lang;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default inctance;
