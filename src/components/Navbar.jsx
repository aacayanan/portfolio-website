import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const isActive = location.pathname;
  return (
    <div className='flex justify-center items-center gap-5 h-12 shadow-md'>
        <Link to={"/"} className={`${isActive === "/" ? "text-blue-500" : "text-gray-700"}`}>
            Home
        </Link>
        <Link to={"/experience"} className={`${isActive === "/experience" ? "text-blue-500" : "text-gray-700"}`}>
            Experience
        </Link>
        <Link to={"/skills"} className={`${isActive === "/skills" ? "text-blue-500" : "text-gray-700"}`}>
            Skills
        </Link>
        <Link to={"/projects"} className={`${isActive === "/projects" ? "text-blue-500" : "text-gray-700"}`}>
            Projects
        </Link>
    </div>
  );
}

export default Navbar;
