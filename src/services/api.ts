import axios from "axios";

const api = axios.create({
  baseURL: "https://public.conquer.plus/tech-ecommerce-api",
});

export default api;
