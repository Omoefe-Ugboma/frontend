import { useState, useContext } from "react";
import authApi from "../api/authApi";
import { AuthContext } from "../context/AuthContext";

export default function AdminLoginPage() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "", tenantIdentifier: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await authApi.login(form);
      login(res.data.token, form.tenantIdentifier);
      setMessage("Login successful!");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Admin Login</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="tenantIdentifier" placeholder="Tenant Identifier" onChange={handleChange} className="border p-2 w-full" />
        <input name="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2 w-full" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Login</button>
      </form>
      {message && <p className="mt-3 text-blue-600">{message}</p>}
    </div>
  );
}
