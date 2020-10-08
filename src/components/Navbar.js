import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <Link className="navbar-brand" to="/">
                Nolan Terpstra
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/about"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/contact"
                            className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/projects"
                            className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
                        >
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;