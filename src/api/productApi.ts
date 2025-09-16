import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getProducts = async () => {
  const res = await axios.get(`${API_URL}/api/product`);
  return res.data;
};
