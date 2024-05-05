import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import loginimg from '../images/login-bg.png'
import { useEffect, useState } from 'react';
import { addUser, checkUser } from '../firebase';
// import { useHistory } from 'react-router-dom';

export default function LoginPage() {
    console.log('Login Page called');

    const [userName, setUserName] = useState('');
    const navigate = useNavigate();
    
    const handleUserName = (event) => {
        setUserName(event.target.value);
    }

    const handleSubmit = async (event) => {
        console.log('handle submit called');
        event.preventDefault();
        if (userName === '') {
            alert('Please Enter user name');
        } else {
            const userAvail = await checkUser(userName);
            if (userAvail) {
                alert('Logged in Successfully');
                navigate(`/category/${userName}`);
            } else {
                await addUser(userName);
                alert('Logged in Successfully');
                navigate(`/category/${userName}`);
            }
        }
    }

    return (
        <div className='login-page'>
            <div className="left-section">
                <form className='login-container' onSubmit={handleSubmit}>
                    <h2>USER</h2>
                    <h1>LOGIN</h1>
                    <label className='login-input'>Enter user name <br /><input className='custom-input' value={userName} type="text" onChange={handleUserName} /></label>
                    <button type='submit' className='login-button' onClick={handleSubmit}>LOGIN</button>
                </form>
            </div>
            <div className='right-section'>
                <img src={loginimg} alt='login image' />
                <div className='overlay'>
                    <h1>Welcome</h1>
                    <h1>To</h1>
                    <h1>Todo-list</h1>
                </div>
            </div>
        </div>
    );
}