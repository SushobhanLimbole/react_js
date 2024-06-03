import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/logo2.png';
import DropDown from '../DropDown/DropDown';
import close from '../assets/close.png';
import moreVert from '../assets/more_vert.png';
import MobileNavbar from './MobileNavbar';

export default function Navbar() {

    // const [isOpen, setIsOpen] = useState(false);
    // const [drop, setDrop] = useState(false);
    // const [content, setContent] = useState(0);
    // const navigate = useNavigate();

    // const handleLoginButton = () => {
    //     navigate('/user');
    // };

    // const toggleMenu = () => {
    //     setIsOpen(!isOpen);
    // };

    // const handeDropDownWhere = () => {
    //     let change = !drop;
    //     setDrop(change);
    //     setContent(0);
    // }

    // const handeDropDownInfo = () => {
    //     let change = !drop;
    //     setDrop(change);
    //     setContent(1);
    // }

    // return (
    //     <>
    //         <nav className="navbar">
    //             <Link to="/">
    //                 <div className="navbar-logo" style={{
    //                     backgroundImage: `url(${logo})`,
    //                     backgroundPosition: 'center',
    //                     backgroundSize: 'cover',
    //                 }}></div>
    //             </Link>

    //             <div className={isOpen ? 'nav-menu active' : 'nav-menu'}>
    //                 <button className="nav-item nav-link">
    //                     <Link to="/" className="nav-link">Home</Link>
    //                 </button>
    //                 <button onClick={handeDropDownWhere} className="nav-item nav-link">
    //                     Where to Go
    //                 </button>
    //                 <button onClick={handeDropDownInfo} className="nav-item nav-link">
    //                     Information
    //                 </button>
    //                 <button onClick={handleLoginButton} className="nav-item nav-link">
    //                     <span className="material-symbols-outlined nav-link" id='account'>
    //                         account_circle
    //                     </span>
    //                 </button>
    //             </div>
    //             <div className="menu-icon" onClick={toggleMenu}>
    //             <i className={isOpen ? 'material-icons' : 'material-icons-outlined'}>{isOpen ? 'close' : (<span className="material-symbols-outlined">
    //                 more_vert
    //             </span>)}</i>
    //         </div>
    //         </nav>
    //         {
    //             drop ? <DropDown load={content}/> : <></>
    //         }
    //     </>

    //     <>
    //         <nav className="navbar">
    //             <Link to="/">
    //                 <div className="navbar-logo" style={{
    //                     backgroundImage: `url(${logo})`,
    //                     backgroundPosition: 'center',
    //                     backgroundSize: 'cover',
    //                 }}></div>
    //             </Link>

    //             <div className={isOpen ? 'nav-menu active' : 'nav-menu'}>
    //                 <button className="nav-item nav-link">
    //                     <Link to="/" className="nav-link">Home</Link>
    //                 </button>
    //                 <button onClick={handeDropDownWhere} className="nav-item nav-link">
    //                     Where to Go
    //                 </button>
    //                 <button onClick={handeDropDownInfo} className="nav-item nav-link">
    //                     Information
    //                 </button>
    //                 <button onClick={handleLoginButton} className="nav-item nav-link">
    //                     <span className="material-symbols-outlined nav-link" id='account'>
    //                         account_circle
    //                     </span>
    //                 </button>
    //             </div>
    //             <div className="menu-icon" onClick={toggleMenu}>
    //             <i className={isOpen ? 'material-icons' : 'material-icons-outlined'}>
    //                     {isOpen ? 'close' : 'more_vert'}
    //                 </i>
    //             </div>
    //         </nav>
    //         {drop ? <DropDown load={content} /> : <></>}
    //     </>

    // );

    const [isOpen, setIsOpen] = useState(false);
    const [drop, setDrop] = useState(false);
    const [content, setContent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
        };

        // Initial check on component mount
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLoginButton = () => {
        navigate('/user');
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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

    const updateNav = (paraDrop) =>{
        setDrop(paraDrop);
    }

    return (
        <>
            {isMobile ? (
                <MobileNavbar/>
            ) : (
                <nav className="navbar">
                    <Link to="/">
                        <div className="navbar-logo" style={{
                            backgroundImage: `url(${logo})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                        }}></div>
                    </Link>

                    <div className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                        <button className="nav-item nav-link">
                            <Link to="/" className="nav-link">Home</Link>
                        </button>
                        <button onClick={handeDropDownWhere} className="nav-item nav-link">
                            Where to Go
                        </button>
                        <button onClick={handeDropDownInfo} className="nav-item nav-link">
                            Information
                        </button>
                        <button onClick={handleLoginButton} className="nav-item nav-link">
                            <span className="material-symbols-outlined nav-link" id='account'>
                                account_circle
                            </span>
                        </button>
                    </div>
                    <div className="menu-icon" onClick={toggleMenu}>
                        <i className={isOpen ? 'material-icons' : 'material-icons-outlined'}>
                            {isOpen ? 'close' : 'more_vert'}
                        </i>
                    </div>
                </nav>
            )}
            {drop ? <DropDown load={content} drop={updateNav}/> : <></>}
        </>
    );
}
