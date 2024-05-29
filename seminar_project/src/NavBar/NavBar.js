import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/logo2.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <Link to="/">
            <div className="navbar-logo" style={{
                // height: '5.5rem',
                // width: '5.5rem',
                backgroundImage: `url(${logo})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}></div>
            </Link>
            
            <div className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                <div className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </div>
                <div className="nav-item">
                    <Link to="/state" className="nav-link">Where to Go</Link>
                </div>
                <div className="nav-item">
                    <Link to="/unesco" className="nav-link">What to Do</Link>
                </div>
                <div className="nav-item">
                    <Link to="/information" className="nav-link">Information</Link>
                </div>
                <div className="nav-item">
                <span className="material-symbols-outlined nav-link" id='account'>
                    account_circle
                </span>
                </div>
                
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <i className={isOpen ? 'material-icons' : 'material-icons-outlined'}>{isOpen ? 'close' : (<span className="material-symbols-outlined">
                    more_vert
                </span>)}</i>
            </div>

        </nav>

    );
}
