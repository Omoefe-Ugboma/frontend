import TenantPage from "./TenantPage";
import ProductPage from "./ProductPage";
import OrderPage from "./OrderPage";

export default function Dashboard() {
  return (
    <div>
      <h1>Multi-Tenant Marketplace Dashboard</h1>
      <TenantPage />
      <ProductPage />
      <OrderPage />
    </div>
  );
}
