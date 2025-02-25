import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../features/AuthSlice";

export const Login = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {isToken} = useSelector((state) => state.auth);

    const [userCredentials, setUserCrederntials] = useState({username: '', password: ''});

    /* {Getting value from input} */
    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserCrederntials((preVal) => ({
            ...preVal,
            [name] : value
        }))
    }

    /* {Destructuring userCredentials} */
    const {username, password} = userCredentials;
    
    /* Sending data */
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const trimmedUsername = username.trim().replace(/\s+/g, '');
        const trimmedPassword = password.trim().replace(/\s+/g, '');
    
        if (!trimmedUsername) {
            toast.error("Username cannot be empty!", { position: "top-right", autoClose: 3000 });
            return;
        } 
        if (!trimmedPassword) {
            toast.error("Password cannot be empty!", { position: "top-right", autoClose: 3000 });
            return;
        }
    
        const userCredentials = { username: trimmedUsername, password: trimmedPassword };
    
        try {
            const userData = await dispatch(loginUser(userCredentials)).unwrap();
            if(isToken){
                navigate('/', {replace : true})
            }
        } catch (error) {
            toast.error(error || "Login failed!", { position: "top-right", autoClose: 3000 });
        }
    };
    

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-purple-400">
            <div className="bg-white p-10 rounded-3xl shadow-2xl w-96 transform transition duration-500 hover:scale-105">
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Welcome Back!</h2>
                <p className="text-center text-gray-600 mb-4">Please login to your account</p>
                <p className="text-red-500 text-center"></p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2 font-semibold">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleOnChange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-0 bg-gray-100"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2 font-semibold">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleOnChange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-0 bg-gray-100"
                            placeholder="Enter your password"
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
            <ToastContainer draggable theme="light" />
        </div>
    )
}
