import axios from "axios";
import useAuthStore from "../stores/auth";

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}`;
const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  (req) => {
    const { getToken } = useAuthStore.getState();
    const token = getToken();

    if (!req.headers.Authorization && token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },

  (error) => Promise.reject(error)
);

export default api;
