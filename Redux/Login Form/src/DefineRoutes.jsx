import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Home } from "./routes/home/Home";

export const DefineRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}
