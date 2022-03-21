import React from 'react';
import '../../../styles/header.css';
// import logo from '../../../images/logo/  ';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="brand"><strong>RenterBD</strong></div>
            <div className="navs">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/rooms">Rooms</Link></li>
                    <li><Link to="/apartments">Apartments</Link></li>
                    <li><Link to="/parkings">Parkings</Link></li>
                </ul>
            </div>
            <div className="nav-btn flex">
                <button class="sign-in">Sign in</button>
                <button class="sign-up" disabled="true">Sign up</button>
            </div>
        </div>
    );
};

export default Navbar;