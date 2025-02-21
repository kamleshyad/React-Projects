import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    password: '',
    isAuthenticated: false,
}

export const AuthSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login : (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.isAuthenticated = true
        },
        logout : (state) => {
            state.username = '';
            state.password = '';
            state.isAuthenticated = false
        }
    }
})

export const {login, logout} = AuthSlice.actions;

export default AuthSlice.reducer; 