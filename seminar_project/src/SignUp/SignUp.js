import './SignUp.css';
import loginimg from '../assets/login imgs/signup.jpg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { firebaseAuth } from '../Firebase/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth/web-extension';
import { updateProfile } from 'firebase/auth';

export default function SignUp() {

    const navigate = useNavigate();
    const [userName , setUserName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const handleuserName = (event) => {
        console.log(event.target.value);
        setUserName(event.target.value);
    }

    const handleEmail = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        console.log(event.target.value);
        setPassword(event.target.value);
    }

    const handleSignUp = async (e) => {

        console.log('sign up method called');
        e.preventDefault();
        try {

            if (userName === '') {
                alert('Please enter you username');
            } else {
                const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
                const user = userCredential.user;
                await updateProfile(user, { displayName: userName });
                alert('User created successfully');
                navigate('/');  
            }


        } catch (error) {

            if (error.code === "auth/missing-email") { 
                alert('Please enter your email');
            }

            if (error.code === "auth/invalid-email") { 
                alert('Invalid email');
            }

            if(error.code === 'auth/email-already-in-use'){
                alert('Email already in use');
            }

            if (error.code === 'auth/missing-password') {
                alert('Please enter your password');
            }

            if (error.code === 'auth/weak-password') {
                alert('Password should be atleast of 6 characters');
            }

            console.error(error.code);
        }
        
    };

    return (
        <div className="sign-up-page" style={{
            backgroundImage: `url(${loginimg})`,
            backgroundPosition: 'top',
            backgroundSize: 'cover'
        }}>

            <div className="sign-up-outer-container">
                <form className='sign-up-inner-container'>
                    <h1>Sign Up</h1>
                    <input className='sign-up-input-container' type="text" value={userName} onChange={handleuserName} placeholder="Enter your name" required/>
                    <input className='sign-up-input-container' type="text" value={email} onChange={handleEmail} placeholder="Enter your email" required/>
                    <input className='sign-up-input-container' type="password" value={password} onChange={handlePassword} placeholder="Enter your password" required/>
                    <button className='sign-up-button' onClick={handleSignUp}>Sign Up</button>
                </form>
            </div>
        </div>
    );
}