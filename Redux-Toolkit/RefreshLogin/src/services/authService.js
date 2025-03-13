// src/services/authService.js
export const API_URL = "https://dummyjson.com/auth/login";

export const login = async (username, password) => {
    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await res.json();
        console.log("API Response:", data); // Debugging

        if (!res.ok || !data.token) {
            throw new Error("Invalid username or password");
        }

        localStorage.setItem("accessToken", data.token);
        return { success: true };
    } catch (error) {
        console.error("Login Error:", error.message);
        return { success: false, message: error.message };
    }
};

export const logout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/login"; // Redirect to login page
};
