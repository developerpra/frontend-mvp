import apiClient from "./apiClient";

export const api = {
  async get<T = any>(url: string, config?: Record<string, unknown>): Promise<T> {
    const response = await apiClient.get<T>(url, config);
    return response.data;
  },
  async post<T = any, B = any>(
    url: string,
    body: B,
    config?: Record<string, unknown>
  ): Promise<T> {
    const response = await apiClient.post<T>(url, body, config);
    return response.data;
  },
};

