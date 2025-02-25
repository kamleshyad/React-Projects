import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loginUser } from "../../features/AuthSlice";

export const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {token} = useSelector((state) => state.auth);
    

    const [userCredentials, setUserCredentials] = useState({username : "", password : ""});

    // Logic for form input data 

    const handleOnchange = (e)=> {
        const name = e.target.name;
        const value = e.target.value;

        setUserCredentials((preVal) => ({
            ...preVal,
            [name] : value,
        }))
    }

    // Destructuring userCredentials

    const {username, password} = userCredentials

    // Logic for submitting form 

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const userData = await dispatch(loginUser(userCredentials)).unwrap();
            if(userData?.token){
                localStorage.setItem('token', userData?.token)
                navigate('/', {replace : true})
            }
    
        } catch (error) {
            console.error("Login Failed:", error);
        }
    };
    

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-purple-400">
            <div className="bg-white p-10 rounded-3xl shadow-2xl w-96 transform transition duration-500 hover:scale-105">
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Welcome Back!</h2>
                <p className="text-center text-gray-600 mb-4">Please login to your account</p>
                <p className="text-red-500 text-center"></p>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2 font-semibold">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleOnchange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-0 bg-gray-100"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2 font-semibold">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleOnchange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-0 bg-gray-100"
                            placeholder="Enter your password"
                            required
                        />
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
