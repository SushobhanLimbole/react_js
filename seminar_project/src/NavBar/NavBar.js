import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/logo1.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo" style={{
                height: '5.5rem',
                width: '5.5rem',
                marginLeft: '1rem',
                backgroundImage: `url(${logo})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                // backgroundColor:'red'
            }}></div>
            <div className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                <div className="nav-item">
                    <Link to="/home" className="nav-link">Home</Link>
                </div>
                <div className="nav-item">
                    <Link to="/state" className="nav-link">Where to Go</Link>
                </div>
                <div className="nav-item">
                    <Link to="/what-to-do" className="nav-link">What to Do</Link>
                </div>
                <div className="nav-item">
                    <Link to="/information" className="nav-link">Information</Link>
                </div>
                <div className="nav-item">
                <span class="material-symbols-outlined nav-link" id='account'>
                    account_circle
                </span>
                </div>
                
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <i className={isOpen ? 'material-icons' : 'material-icons-outlined'}>{isOpen ? 'close' : (<span class="material-symbols-outlined">
                    more_vert
                </span>)}</i>
            </div>

        </nav>

    );
}
