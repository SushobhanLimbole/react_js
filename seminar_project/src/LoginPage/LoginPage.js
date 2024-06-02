import './LoginPage.css';
import loginimg from '../assets/collo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from '../Firebase/Firebase';

export default function LoginPage() {

    const navigate = useNavigate();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const handleEmail = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        console.log(event.target.value);
        setPassword(event.target.value);
    }

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
          await signInWithEmailAndPassword(firebaseAuth, email, password);
          alert('User logged in sucessfully');
          navigate('/');
        } catch (error) {
          console.error(error);
          alert('Invalid credential');
        }
      };

    return (
        <div className="login-page" style={{
            backgroundImage: `url(${loginimg})`,
            backgroundPosition: 'top',
            backgroundSize: 'cover'
        }}>

            <div className="login-outer-container">
                <form className='login-inner-container'>
                    <h1>LOGIN</h1>
                    <input className='input-container' type="text" value={email} onChange={handleEmail} placeholder="Enter your email" required/>
                    <input className='input-container' type="password" value={password} onChange={handlePassword} placeholder="Enter your password" required/>
                    <div className='route-to-sign-up'><h3>Don't have an account?</h3><Link to={'/signup'}>Sign Up</Link></div>
                    <button className='login-button' onClick={handleSignIn}>LOGIN</button>
                </form>
            </div>
        </div>
    );
}