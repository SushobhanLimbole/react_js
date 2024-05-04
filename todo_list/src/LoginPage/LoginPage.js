import { Link } from 'react-router-dom';
import './LoginPage.css';
import loginimg from '../images/photo2.jpg'
import { useState } from 'react';

export default function LoginPage() {

    const [userName , setUserName] = useState('');

    const handleSubmit = (event) => {
        setUserName(event.target.value);
    }

    return (
        <div className="login-page" style={{
            backgroundImage: `url(${loginimg}), linear-gradient(rgba(0,0,0,0.5), rgba(208, 205, 236, 1))`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        >
            <div className="login-container">
                <h1>LOGIN</h1>
                <input value={userName} type="text" placeholder="Enter user name" onChange={handleSubmit}/>
                <Link to='/home'><button>login</button></Link>
            </div>
        </div>
    );
}