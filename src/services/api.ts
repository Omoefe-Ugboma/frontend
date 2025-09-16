// src/services/api.ts
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5142/api", // <-- your backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});
