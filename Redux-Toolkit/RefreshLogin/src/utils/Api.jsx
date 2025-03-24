const API_URL = import.meta.env.VITE_API_URL;

export const LoginUserApi = async(userCredentials) => {
    try{
        const res = await fetch(`${API_URL}/auth/login`, {
            method : "POST",
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(userCredentials)
        })
       const data =  await res.json();

        if (!res.ok || data.status === false) {
            throw new Error(data.message || "Login failed");
        }
       return data;
    } catch (error) {
        throw new Error(error.message || "Something went wrong");
    }
}