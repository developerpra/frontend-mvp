export const ENV = import.meta.env.MODE;

export const API_BASE_URLS: Record<string, string> = {
  local: "https://localhost:54805/api/v1",
  development: "https://azapptest.camincargo.com/CaminPolarisMaintenance/api/v1",
  uat: "https://azapptest.camincargo.com/CaminPolarisMaintenance/api/v1",
  staging: "https://azapptest.camincargo.com/CaminPolarisMaintenance/api/v1",
  production: "https://azapptest.camincargo.com/CaminPolarisMaintenance/api/v1",
};

export const BASE_URL = API_BASE_URLS[ENV] || API_BASE_URLS.development;
