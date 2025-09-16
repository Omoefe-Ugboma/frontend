import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; // Type-only import
import axios from "axios";
import type { Tenant } from "../../types/tenant";

// Define the state interface
interface TenantState {
  data: Tenant[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: TenantState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchTenants = createAsyncThunk(
  "tenants/fetch", 
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:5000/api/tenant");
      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch tenants"
      );
    }
  }
);

const tenantSlice = createSlice({
  name: "tenants",
  initialState,
  reducers: {
    // Optional: Add any synchronous reducers you might need
    clearTenants: (state) => {
      state.data = [];
      state.error = null;
    },
    setTenants: (state, action: PayloadAction<Tenant[]>) => {
      state.data = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTenants.pending, (state) => { 
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTenants.fulfilled, (state, action: PayloadAction<Tenant[]>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchTenants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || "Unknown error occurred";
      });
  }
});

// Export the actions
export const { clearTenants, setTenants } = tenantSlice.actions;

export default tenantSlice.reducer;