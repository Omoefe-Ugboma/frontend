import { useState } from "react";
import tenantApi from "../api/tenantApi";

const TenantRegisterPage = () =>{
  const [form, setForm] = useState({
    name: "",
    identifier: "",
    subscriptionPlan: "Free",
    adminEmail: "",
    adminPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await tenantApi.registerTenant(form);
      setMessage(`Tenant ${res.data.name} registered successfully!`);
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Register Tenant</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" placeholder="Company Name" onChange={handleChange} className="border p-2 w-full" />
        <input name="identifier" placeholder="Unique Identifier (e.g. acme)" onChange={handleChange} className="border p-2 w-full" />
        <input name="adminEmail" placeholder="Admin Email" onChange={handleChange} className="border p-2 w-full" />
        <input name="adminPassword" type="password" placeholder="Admin Password" onChange={handleChange} className="border p-2 w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
      </form>
      {message && <p className="mt-3 text-green-600">{message}</p>}
    </div>
  );
}
export default TenantRegisterPage;