import React, { useEffect, useState } from 'react';
import { firebaseAuth } from '../Firebase/Firebase';
import SignOut from '../SignOut/SignOut';
import LoginPage from '../LoginPage/LoginPage';
import img from '../assets/states data/aosta.jpg';
import pic from '../assets/social media/user.png';
import './User.css';

export default function User() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            {user ? (
                <>
                    <div className='user-page'>
                        <div className="left-section">
                            <div className='user-container'>
                                <div className='pic' style={{
                                    backgroundImage: `url(${pic})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}></div>
                                <h2>Welcome,</h2>
                                <h1>{user.displayName}</h1>
                                <h3>{user.email}</h3>
                                <SignOut />
                            </div>
                        </div>
                        <div className='right-section'>
                            <img src={img} alt='login image' />
                            <div className='user-overlay'>
                                <h1>Tourism</h1>
                                <h1>Of</h1>
                                <h1>Italy</h1>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <LoginPage />
                </>
            )}
        </div>
    );
};
