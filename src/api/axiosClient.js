import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5142/api", // backend base URL
});

// Request Interceptor
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  const tenant = localStorage.getItem("tenant");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (tenant) {
    config.headers["X-Tenant-Identifier"] = tenant;
  }

  return config;
});

export default axiosClient;
