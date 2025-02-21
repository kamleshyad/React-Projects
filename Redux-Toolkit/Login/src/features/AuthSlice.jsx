import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LoginUserApi } from "../utils/Api";

export const loginUser = createAsyncThunk('auth/loginuser', async(credentials, {rejectWithValue})=> {
    try{
        const data = await LoginUserApi(credentials);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

const initialState = {
    username : '',
    token : null,
    isAuthenticated: false,
    loading : false,
    error : null
}

export const AuthSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        logout : (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.username = '';
            state.error = null;
            localStorage.removeItem("token");
        },
    }, 
    extraReducers : (builder)=> {
        builder.addCase(loginUser.pending, (state)=> {
            state.loading = true,
            state.error = null
        }),
        builder.addCase(loginUser.fulfilled, (state, action)=> {
            console.log("Login Successful! Data received:", action.payload);
            state.loading = false,
            state.username = action.payload.userData.username;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            localStorage.setItem("token", action.payload.token);
        }),
        builder.addCase(loginUser.rejected, (state, action) => {
            console.log("action", action.payload)
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export const {logout} = AuthSlice.actions
export default AuthSlice.reducer;