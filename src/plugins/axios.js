import axios from "axios";
const lang = localStorage.getItem("locale") || "oz";
console.log(lang, "locale from axios");
const inctance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 1000,
});

inctance.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      lang: lang,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default inctance;
