import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const isActive = location.pathname;

    const navLinks = [
        {name: "Home", path: "/"},
        {name: "Experience", path: "/experience"},
        {name: "Skills", path: "/skills"},
        {name: "Projects", path: "/projects"},
    ];

    return (
        <div className="flex justify-center items-center gap-5 h-12">
            {navLinks.map((link) => (
                <Link
                    key={link.path}
                    to={link.path}
                    className={`${
                        isActive === link.path
                            ? "text-blue-500 underline underline-offset-4"
                            : "text-gray-700 hover:text-black"
                    }`}
                >
                    {link.name}
                </Link>
            ))}
        </div>
    );

}

export default Navbar;
