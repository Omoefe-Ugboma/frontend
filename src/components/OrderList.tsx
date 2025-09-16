import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../app/slices/orderSlice";
import type { RootState, AppDispatch } from "../app/store";

// Define the Order interface
interface Order {
  id: number;
  userId: number;
  orderItems: OrderItem[];
}

// Define the OrderItem interface if needed
interface OrderItem {
  id: number;
  productId: number;
  quantity: number;
}

export default function OrderList() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector((state: RootState) => state.orders);

  useEffect(() => { dispatch(fetchOrders()); }, [dispatch]);

  if (loading) return <p>Loading orders...</p>;
  
  // Cast data to Order[] to fix the type issue
  const orders = data as Order[];
  
  return (
    <ul>
      {orders.map(o => (
        <li key={o.id}>
          Order #{o.id} for User {o.userId} - Items: {o.orderItems.length}
        </li>
      ))}
    </ul>
  );
}