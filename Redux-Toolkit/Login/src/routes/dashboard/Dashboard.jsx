import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/AuthSlice";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {

    const {username} = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return(
        <div className="p-5">
            <h1>Welcome, {username.charAt(0).toUpperCase() + username.slice(1)}</h1>
            <button onClick={handleLogout} className="bg-red-500 text-white p-2">
                Logout
            </button>
        </div>
    )
}