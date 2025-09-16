import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getOrders = async () => {
  const res = await axios.get(`${API_URL}/api/order`);
  return res.data;
};
