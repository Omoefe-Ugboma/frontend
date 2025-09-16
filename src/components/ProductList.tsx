import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../app/slices/productSlice";
import type { RootState, AppDispatch } from "../app/store";

// Define a Product type
interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ProductList() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector((state: RootState) => state.products);

  useEffect(() => { dispatch(fetchProducts()); }, [dispatch]);

  if (loading) return <p>Loading products...</p>;
  
  // Cast data to Product[] or use type guard
  const products = data as Product[];
  
  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>{p.name} - ${p.price}</li>
      ))}
    </ul>
  );
}