import { Routes, Route, Navigate } from "react-router-dom";

import { Login } from "./routes/login/Login";
import { Dashboard } from "./routes/dashboard/Dashboard";
import { PageNotFound } from "./routes/pagenotfound/PageNotFound";

export const DefineRoutes = () => {

    const token = localStorage.getItem("token");

    return (
        <Routes>
                <Route path="/login" element={ <Login /> }/>
                <Route path="/" element={<Dashboard />} />
                <Route path="*" element={<PageNotFound />} />
        </Routes>
        
    )
}
