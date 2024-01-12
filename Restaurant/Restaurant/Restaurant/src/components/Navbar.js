import React from 'react';
import './Navbar.css'; // Assuming you have a CSS file named Navbar.css
// import logo from './logo.png'; // Assuming you have a logo image in your project
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
const Navbar = () => {
    return (
        <nav className="navbar">
            {/* <img src={logo} alt="Logo" className="navbar__logo" /> */}
            <h1>Restaurant Landing Page</h1>
            <div className="navbar__links">
                <NavLink to={"/"}>Landing</NavLink>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/"}>Gallery</NavLink>
                <NavLink to={"/"}>Shop</NavLink>
                <NavLink to={"/"}>Blog</NavLink>
                <NavLink to={"/"}>About</NavLink>
                <NavLink to={"/"}>Team</NavLink>
                <NavLink to={"/"}>Contact</NavLink>
                <NavLink to={"/"}><FaShoppingCart /></NavLink>
                
            </div>
        </nav>
    );
};

export default Navbar;