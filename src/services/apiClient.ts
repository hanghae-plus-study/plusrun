import axios, { AxiosRequestConfig } from "axios";
import { DB_PUBLIC_KEY } from "../lib/supabase";

type ApiClient = {
  get: <T>(url: string, params?: Record<string, string | number | boolean>, config?: AxiosRequestConfig) => Promise<T>;
  post: <T>(url: string, params?: Record<string, string | number | boolean>, config?: AxiosRequestConfig) => Promise<T>;
  put?: <T>(url: string, data?: Record<string, string | number | boolean>, config?: AxiosRequestConfig) => Promise<T>;
  delete: <T>(url: string, config?: AxiosRequestConfig) => Promise<T>;
};

const baseURL = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    apiKey: DB_PUBLIC_KEY,
  },
});

api.interceptors.request.use((config) => {
  return config;
});
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // TODO : 오류 처리 필요
    return Promise.reject(error);
  }
);
const apiClient: ApiClient = {
  get: (url, params) => api.get(url, { params }),
  post: (url, data) => api.post(url, data),
  delete: (url) => api.delete(url),
};
export default apiClient;
