const API_URL = import.meta.env.VITE_API_URL;

export const LoginUserApi = async (credentials) => {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
        });

        const data = await response.json(); 

        if (response.status === 400) {
            throw new Error("Invalid Username and Password"); 
        }

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        return data; 

    } catch (error) {
        throw error;
    }
};