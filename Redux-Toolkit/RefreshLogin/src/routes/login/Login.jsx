import { useState } from "react";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [userCredentials, setUserCredentials] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const { success, message } = await login(userCredentials.username, userCredentials.password);

        if (!success) {
            setError(message);
        } else {
            navigate("/"); // Redirect to dashboard
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            className="w-full p-2 border rounded"
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            className="w-full p-2 border rounded"
                            onChange={handleChange} 
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white w-full p-2 rounded mt-4">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};
