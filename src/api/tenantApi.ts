import axiosClient from "./axiosClient";

const tenantApi = {
  registerTenant: (data) => axiosClient.post("/tenant/register", data),
};

export default tenantApi;
