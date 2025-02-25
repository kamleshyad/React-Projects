import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginUserApi } from "../utils/Api";

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials, { rejectWithValue }) => {
        try {
            const data = await LoginUserApi(credentials);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    username: "",
    isToken: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.username = "";
            state.isAuthenticated = false;
            state.token = null;
            state.isLoading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            console.log("action", action.payload)
            state.isToken = action.payload.accessToken;
            state.username = action.payload.username;
            state.isAuthenticated = true;
            state.isLoading = false;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload || "Login failed!";
        });
    },
});

export const { logout } = AuthSlice.actions;
export default AuthSlice.reducer;
