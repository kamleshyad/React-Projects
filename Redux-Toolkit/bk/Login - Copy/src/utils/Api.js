const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (credentials) => {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
        });

        // Check for unsuccessful response before parsing the JSON
        if (!response.ok) {
            const errorData = await response.json();  // Parse error data only if not ok
            throw new Error(errorData.message || "Login failed");
        }

        const data = await response.json();  // Only parse if response is ok
        return data;  // Return data (e.g., token or user data)
    } catch (error) {
        console.error("Login Error:", error.message);
        throw error;  // Propagate the error
    }
};
