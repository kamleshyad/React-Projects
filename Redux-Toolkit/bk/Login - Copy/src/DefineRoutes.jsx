import { Routes, Route } from "react-router-dom";

import { Login } from "./routes/login/Login";
import { Dashboard } from "./routes/dashboard/Dashboard";
import { PageNotFound } from "./routes/pagenotfound/PageNotFound";

export const DefineRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    )
}
