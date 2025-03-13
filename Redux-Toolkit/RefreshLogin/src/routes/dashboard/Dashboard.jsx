import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/authService";

export const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <button 
                onClick={logout} 
                className="bg-red-500 text-white p-2 rounded hover:bg-red-700 transition"
            >
                Logout
            </button>
        </div>
    );
};
