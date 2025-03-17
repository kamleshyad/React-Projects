import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <nav>
                <ul className="reset">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/page">Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category">Category</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
