import React, {useState} from 'react';

function Navbar() {
    const [showAlert, setShowAlert] = useState(true);

    const navLinks = [
        {name: "Home", path: "#home"},
        {name: "Experience", path: "#experience"},
        {name: "Skills", path: "#skills"},
        {name: "Projects", path: "#projects"},
    ];

    return (
        <div className='fixed top-0 left-0 w-full z-40 bg-white'>
            <div className="flex justify-around items-center h-18 text-lg select-none">
                <div
                    onClick={() => window.scrollTo(0, 0)}
                    className='cursor-pointer text-nowrap'
                >
                    Aaron Cayanan
                </div>
                <div className='flex gap-5 hidden md:flex'>
                    {navLinks.map((link) => (
                        <a
                            key={link.path}
                            href={link.path}
                            className="text-gray-700 hover:text-black"
                        >
                            {link.name}
                        </a>
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