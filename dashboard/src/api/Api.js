const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (userCredentials) => {
    try{
        const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userCredentials),
        })

        const data = await response.json();

        if(!response.ok){
            throw new Error(data.message)
        }

        return data;
    } catch (error) {
        throw Error((error.message));
    }
}