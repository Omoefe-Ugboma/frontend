import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import TenantRegisterPage from "./pages/TenantRegisterPage";
// import TenantRegisterPage from "./pages/TenantRegisterPage";
import AdminLoginPage from "../src/pages/";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<TenantRegisterPage />} />
          <Route path="/login" element={<AdminLoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
