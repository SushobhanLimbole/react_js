import './LoginPage.css';
import loginimg from '../assets/collo.jpg';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/home');
    }

    return (
        <div className="login-page" style={{
            backgroundImage: `url(${loginimg})`,
            backgroundPosition: 'top',
            backgroundSize: 'cover'
        }}>

            <div className="login-outer-container">
                <form className='login-inner-container'>
                    <h1>LOGIN</h1>
                    <input className='input-container' type="text" value='' placeholder="Enter username or email" required/>
                    <input className='input-container' type="password" value='' placeholder="Enter your password" required/>
                    <button className='login-button' onClick={handleSubmit}>LOGIN</button>
                </form>
            </div>
        </div>
    );
}