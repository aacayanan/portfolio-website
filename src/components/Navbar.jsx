import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useLocation, useNavigate} from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = location.pathname;
    const [showAlert, setShowAlert] = useState(true);

    const navLinks = [
        {name: "Home", path: "/"},
        {name: "Experience", path: "/experience"},
        {name: "Skills", path: "/skills"},
        {name: "Projects", path: "/projects"},
    ];

    return (
        <div>
            <div className="flex justify-around items-center h-18 text-lg select-none">
                <div
                    onClick={() => navigate("/")}
                    className='cursor-pointer text-nowrap'
                >
                    Aaron Cayanan
                </div>
                <div className='flex gap-5 hidden md:flex'>
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
                    className='border-2 border-gray-700 text-lg rounded-md px-2 py-1 hover:bg-gray-700 hover:text-white transition-colors duration-300'
                >
                    Resume
                </button>
            </div>
            {showAlert && (
                <div className='flex justify-between bg-gray-700 text-white p-2 select-none text-xs md:text-sm lg:text-md items-center'>
                    <div className='text-gray-700'>x</div>
                    🚧 This website is still under development! 🚧
                    <button className='cursor-pointer' onClick={() => setShowAlert(false)}>X</button>
                </div>
            )}
        </div>
    );

}

export default Navbar;
