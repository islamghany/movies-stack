import { MOVIES_BASE_URL } from "@/constants";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
const axiosInstance = axios.create({
  baseURL: MOVIES_BASE_URL,
});

export const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.get<T>(url, config),
  };
};
export default api(axiosInstance);
