// src/redux/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = import.meta.env.VITE_API_URL;

// Async thunk for login
export const loginUser = createAsyncThunk("auth/loginUser", async ({ username, password }, thunkAPI) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token); // Store token
      return data.token; // Return token
    } else {
      return thunkAPI.rejectWithValue(data); // Reject if login fails
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message); // Reject if network error occurs
  }
});

// Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: localStorage.getItem("token") || null, loading: false, error: null },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token"); // Remove token from localStorage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload; // Save token on successful login
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Handle error
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;