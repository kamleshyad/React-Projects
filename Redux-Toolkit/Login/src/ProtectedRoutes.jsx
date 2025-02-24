import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoutes = () => {
    const { isToken } = useSelector((state) => state.auth);

    return isToken ? <Outlet /> : <Navigate to="/login" replace />;
};
