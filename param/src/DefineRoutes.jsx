import { Routes, Route } from "react-router-dom";

import { Header } from "./_components/patterns/header/Header";
import { Home } from "./routes/Home";
import { Page } from "./routes/Page";
import { Blog } from "./routes/Blog";
import { Services } from './routes/Services';
import { Category } from './routes/Category';
import { ServicesDetail } from "./routes/ServicesDetail";

export const DefineRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/page" element={< Page />} />
                <Route path="/blog" element={< Blog />} />
                <Route path="/services" element={< Services />} />
                <Route path="/category" element={< Category />} />
                <Route path="/services/:id/:name" element={ <ServicesDetail /> } />
            </Routes>
        </>
    )
}
