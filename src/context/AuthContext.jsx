import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [tenantIdentifier, setTenantIdentifier] = useState(localStorage.getItem("tenant") || null);

  const login = (jwt, tenantId) => {
    localStorage.setItem("token", jwt);
    localStorage.setItem("tenant", tenantId);
    setToken(jwt);
    setTenantIdentifier(tenantId);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tenant");
    setToken(null);
    setTenantIdentifier(null);
  };

  return (
    <AuthContext.Provider value={{ token, tenantIdentifier, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
