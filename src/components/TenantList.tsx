import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTenants } from "../app/slices/tenantSlice";
import type { RootState, AppDispatch } from "../app/store";
import type { Tenant } from "../types/tenant";

export default function TenantList() {
    const dispatch = useDispatch<AppDispatch>();
    const { data, loading, error } = useSelector((state: RootState) => state.tenants);

    useEffect(() => { 
        dispatch(fetchTenants());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;
    if (!data || data.length === 0) return <p>No tenants found</p>;

    return (
        <ul className="space-y-2">
            {data.map((tenant: Tenant) => (
                <li key={tenant.id} className="p-4 border rounded">
                    <h3 className="font-semibold">{tenant.name}</h3>
                    <p>Email: {tenant.email}</p>
                    <p>Subdomain: {tenant.subdomain}</p>
                    <p>Status: {tenant.isActive ? 'Active' : 'Inactive'}</p>
                    <p>Plan: {tenant.plan}</p>
                </li>
            ))}
        </ul>
    );
}