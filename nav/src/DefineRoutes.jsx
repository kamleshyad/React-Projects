import { Routes, Route } from "react-router-dom";

import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Header } from "./_components/header/Header";
import { Services } from "./routes/Services";
import { ServiceDetail } from "./routes/ServiceDetail";
import { Blog } from "./routes/Blog"; // Blog Listing Page
import { BlogDetail } from "./routes/BlogDetail";

export const DefineRoutes = () => {
    return (
        <>
        <Header/>
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/about" element={ <About /> }/>
            <Route path="/services" element={ <Services /> } />
            <Route path="/services/:id/:name" element={<ServiceDetail />} /> 
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
        </>
    )
}
