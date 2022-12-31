import Cookie from "@/helpers/cookies";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
    Authorization: "Bearer " + Cookie.get("access_token"),
  },
});

axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
