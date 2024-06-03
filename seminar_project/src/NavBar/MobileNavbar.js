import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/logo2.png';
import DropDown from '../DropDown/DropDown';
import close from '../assets/close.png';
import moreVert from '../assets/more_vert.png';

export default function MobileNavbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [drop, setDrop] = useState(false);
    const [content, setContent] = useState(0);
    const navigate = useNavigate();

    const handleLoginButton = () => {
        navigate('/user');
    };

    const handeDropDownWhere = () => {
        let change = !drop;
        setDrop(change);
        setContent(0);
    }

    const handeDropDownInfo = () => {
        let change = !drop;
        setDrop(change);
        setContent(1);
    }

    const handleNavDropDown = () => {
        setIsOpen(!isOpen);
    }

    const updateNav = (paraDrop) =>{
        setDrop(paraDrop);
    }

    return (
        <>
            <nav className="navbar">
                <Link to="/">
                    <div className="navbar-logo" style={{
                        backgroundImage: `url(${logo})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}></div>
                </Link>

                <div className={'nav-menu'}>
                    <button className="nav-mob-item nav-mob-link">
                        <Link to="/" className="nav-mob-link">Home</Link>
                    </button>
                    <button onClick={handeDropDownWhere} className="nav-mob-item nav-mob-link">
                        Where to Go
                    </button>
                    <button onClick={handeDropDownInfo} className="nav-mob-item nav-mob-link">
                        Information
                    </button>
                    <button onClick={handleLoginButton} className="nav-mob-item nav-mob-link">
                        <span className="material-symbols-outlined nav-mob-link" id='account'>
                            account_circle
                        </span>
                    </button>
                </div>

                {
                    isOpen ? <div onClick={handleNavDropDown} className="close" style={{
                        backgroundImage: `url(${close})`,
                        backgroundSize: 'cover',
                        height: '2.4rem',
                        width: '2.4rem'
                    }}></div> : <div className="more_vert" onClick={handleNavDropDown} style={{
                        backgroundImage: `url(${moreVert})`,
                        backgroundSize: 'cover',
                        height: '2.4rem',
                        width: '2.4rem'
                    }}></div>
                }

                {
                    isOpen ? <div className={'nav-mob-menu'}>
                        <button className="nav-mob-item nav-mob-link">
                            <Link to="/" className="nav-mob-link">Home</Link>
                        </button>
                        <button onClick={handeDropDownWhere} className="nav-mob-item nav-mob-link">
                            Where to Go
                        </button>
                        <button onClick={handeDropDownInfo} className="nav-mob-item nav-mob-link">
                            Information
                        </button>
                        <button onClick={handleLoginButton} className="nav-mob-item nav-mob-link">
                            <span className="material-symbols-outlined nav-mob-link" id='account'>
                                account_circle
                            </span>
                        </button>
                    </div> : <></>
                }
            </nav>
            {drop ? <DropDown load={content} drop={updateNav}/> : <></>}
        </>

    );
}
