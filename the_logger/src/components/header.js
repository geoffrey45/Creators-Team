import { NavLink } from "react-router-dom";
import React from "react";
// import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { IoIosSunny } from "react-icons/io";
function Header()
{
    return (
        <header className="flex flex-row justify-between items-center p-4 bg-gray-800 text-white">
            <div>
                <h1>TechGear</h1>
            </div>
            <ul className="flex flex-row justify-between items-center w-[500px] ">
                <li><Link to="">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>

            </ul>
        </header>

    )
}

export default Header;