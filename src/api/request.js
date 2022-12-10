import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://test.besnikselimi.com/api",
});

Axios.interceptors.request.use(
  async (config) => {
    const id_token = await localStorage.getItem("token");
    config.headers.Accept = "application/json";
    if (id_token) {
      config.headers.Authorization = `Bearer ${id_token}`;
    }
    config.headers["Accept-Language"] = sessionStorage.getItem("lang") ?? "en";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
