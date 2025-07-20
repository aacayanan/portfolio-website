import React from 'react';
import {Link} from 'react-router-dom';
import {useLocation} from "react-router-dom";

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
        <div className="flex justify-around items-center h-18 text-lg">
            <div>
                Aaron Cayanan
            </div>
            <div className='flex gap-5'>
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
            <button
                onClick={() => window.open("https://aaroncayanan.com/resume", "_blank")}
                className='border-2 border-gray-700 rounded-md px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors duration-300'
            >
                Resume
            </button>
        </div>
    );

}

export default Navbar;
