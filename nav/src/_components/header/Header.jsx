import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <h2>Abc</h2>
                </div>
                <nav>
                    <ul className="reset">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">Services</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
