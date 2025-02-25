import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/AuthSlice";

export const Dashboard = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {username} = useSelector((state)=> state.auth);

    const handleLogout = ()=> {
        dispatch(logout());
        navigate('/login', {replace : true});
    }

    return (
        <div className="p-5">
            <h1>Welcome, {username}</h1>
            <button onClick={handleLogout} className="bg-red-500 text-white p-2">
                Logout
            </button>
        </div>
    )
}
