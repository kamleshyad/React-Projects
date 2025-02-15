import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../../redux/features/AuthSlice";
import { loginUser } from "../../utils/Api";

export const Login = () => {

    const [formData, setFormData] = useState( {username : "", password : "" } );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData((prevData) => ({
            ...prevData,
            [name] : value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userData = await loginUser(formData); // Call API function
            
            if (userData?.token) {
                dispatch(login({ username: formData.username, token: userData.token }));
                localStorage.setItem('token', userData?.token);
                navigate("/");
            } else {
                throw new Error("Invalid credentials");
            }
        } catch (error) {
            console.error("Login failed:", error.message);
            alert("Invalid username or password. Please try again."); // Show error message
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-purple-400">
            <div className="bg-white p-10 rounded-3xl shadow-2xl w-96 transform transition duration-500 hover:scale-105">
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Welcome Back!</h2>
                <p className="text-center text-gray-600 mb-4">Please login to your account</p>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2 font-semibold">Username</label>
                            <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={(e) => handleOnChange(e) }
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-0 bg-gray-100"
                            placeholder="Enter your username"
                            required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2 font-semibold">Password</label>
                            <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={(e) => handleOnChange(e) }
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-0 bg-gray-100"
                            placeholder="Enter your password"
                            required />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition font-bold text-lg">
                            Login
                        </button>
                    </form>
                <p className="text-center text-gray-600 mt-4">
                Don't have an account? <a href="#" className="text-purple-500 font-semibold hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    )
}
