import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserApi } from "../utils/Api";

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials, { rejectWithValue }) => {
    try{
        const data = await loginUserApi(credentials);
        console.log("Data", data)
        return data;
    } catch(error) {
        return rejectWithValue(error.message);
    }
})

const initialState = {
    username : '',
    isAuthenticated: false,
    token : null,
    loading : false,
    error : null
}

export const AuthSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        logout : (state) => {
            state.username = "";
            state.isAuthenticated = false;
            state.token = null;
            localStorage.removeItem("token");
        },
    },
    extraReducers : (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        }),
        builder.addCase(loginUser.fulfilled, (state, action) => {
            console.log("Login Successful! Data received:", action.payload);
            state.loading = false;
            state.username = action.payload.userData.username;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            localStorage.setItem("token", action.payload.token);
        }),
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
    }
})

export const { logout } = AuthSlice.actions;
export default AuthSlice.reducer;