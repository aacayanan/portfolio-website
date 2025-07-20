import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex justify-center items-center gap-5 h-12 shadow-md'>
        <Link to={"/"}>
            Home
        </Link>
        <Link to={"/experience"}>
            Experience
        </Link>
        <Link to={"/skills"}>
            Skills
        </Link>
        <Link to={"/projects"}>
            Projects
        </Link>
    </div>
  );
}

export default Navbar;
