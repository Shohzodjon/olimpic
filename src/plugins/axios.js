import axios from "axios";

const inctance = axios.create({
  baseURL:import.meta.env.VITE_API_BASE_URL,
  timeout: 1000,
});
export default inctance;
