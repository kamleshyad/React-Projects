import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ProtectedRoutes } from "./ProtectedRoutes";
import { Login } from "./routes/login/Login";
import { Dashboard } from "./routes/dashboard/Dashboard";
import { PageNotFound } from "./routes/pagenotfound/PageNotFound";

export const DefineRoutes = () => {

    const { isToken } = useSelector((state) => state.auth);

    return (
        <Routes>
                <Route path="/login" element={ isToken ? <Navigate to="/" replace/>: <Login /> }/>
                <Route element={ <ProtectedRoutes />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
        </Routes>
        
    )
}
