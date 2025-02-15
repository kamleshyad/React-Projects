const API_URL = import.meta.env.VITE_API_URL;

export const loginUserApi = async (credentials) => {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method : "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
        })

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Invalid credentials");
          }
      
        return await response.json(); // { token, user }

    } catch(error) {
        console.error("Login Error:", error.message);
        throw error; // Propagate error
    }
}