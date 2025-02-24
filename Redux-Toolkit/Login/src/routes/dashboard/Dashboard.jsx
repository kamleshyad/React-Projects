import { useNavigate } from "react-router-dom";

export const Dashboard = () => {

    return (
        <div className="p-5">
            <h1>Welcome,</h1>
            <button className="bg-red-500 text-white p-2">
                Logout
            </button>
        </div>
    )
}
