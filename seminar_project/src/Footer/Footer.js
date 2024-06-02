import { Link } from 'react-router-dom';
import pic from '../assets/states data/apulia.jpg';
import './Footer.css';
import insta from '../assets/social media/insta.png';
import google from '../assets/social media/gg.png';
import X from '../assets/social media/x.jpg';

export default function Footer(params) {
    return (
        <>

            <footer className='footer-section'>

                <div className='footer-inner-section'>

                    <img className='footer-img' src={pic} />

                    <div className='footer-inner-section'>
                        <div className='footer-inner-column'>
                            <h1>Technologies used</h1>
                            <Link to='https://react.dev/'>ReactJs</Link>
                            <Link to='https://firebase.google.com/docs/guides?_gl=1*18dlgik*_up*MQ..&gclid=Cj0KCQjwsPCyBhD4ARIsAPaaRf1u5lQgjt3JKKvW3YfWnVsbfyqdF_vNP_LhgnkEXcEDk2PjDYoz2rkaArf0EALw_wcB&gclsrc=aw.ds'>Firebase/Firestore</Link>
                        </div>
                    </div>

                    <div className='footer-inner-section'>
                        <div className='footer-inner-column'>
                            <h1>Information</h1>
                            <Link to={`/information/${'how-to-travel'}`} state={1}>Travel to Italy</Link>
                            <Link to={`/information/${'currency'}`} state={2}>Currency and Payments</Link>
                            <Link to={`/information/${'phone-&-web'}`} state={3}>Phone & Web</Link>
                        </div>
                    </div>

                    <div className='footer-inner-section'>
                        <div className='footer-inner-column'>
                            <h1>LOGIN</h1>
                            <Link to='/user'>Login/Logout</Link>
                        </div>
                    </div>
                </div>
                <div className='social-media-section'>
                    <h1>Let us keep in touch</h1>
                    <div className='social-media-inner-section'>
                        <div className='social-media-icon' style={{
                            backgroundImage: `url(${google})`
                        }}></div>
                        <div className='social-media-icon' style={{
                            backgroundImage: `url(${insta})`
                        }}></div>
                        <div className='social-media-icon' style={{
                            backgroundImage: `url(${X})`
                        }}></div>
                    </div>
                </div>
            </footer>
        </>
    );
}