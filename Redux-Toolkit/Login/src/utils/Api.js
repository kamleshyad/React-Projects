import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const LoginUserApi = async(credentials) => {
    try{
        const response = await axios.post(`${API_URL}/auth/login`, credentials, {
            headers : { 'Content-Type' : 'application/json'},
        })

        return response?.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message)
    }
}   