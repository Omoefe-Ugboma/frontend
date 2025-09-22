import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";

export default function DashboardPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axiosClient.get("/tenant-data").then((res) => setData(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Tenant Dashboard</h2>
      {data ? (
        <pre className="bg-gray-100 p-4 rounded mt-3">{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
