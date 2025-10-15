import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function NavBar() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <button
                className={location.pathname === "/" ? "active" : ""}
                onClick={() => navigate("/")}
                aria-label="Login"
            >&#8592;</button>
            <button
                className={location.pathname === "/profile" ? "active" : ""}
                onClick={() => navigate("/profile")}
                aria-label="Profile"
            >&#9787;</button>
            <button
                className={location.pathname === "/register" ? "active" : ""}
                onClick={() => navigate("/register")}
                aria-label="Register"
            >&#8962;</button>
        </nav>
    );
}
