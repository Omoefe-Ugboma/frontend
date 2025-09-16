import CheckoutForm from "./components/CheckoutForm";
import Dashboard from "./pages/Dashboard";

const App =() =>{
  return (
    <div>
      <h1>Multi-Tenant Marketplace - Stripe Test</h1>
      <CheckoutForm />
      <Dashboard />
    </div>
  );
}

export default App;
