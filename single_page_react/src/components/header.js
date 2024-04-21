import { Link } from 'react-router-dom';
import './header.css';
import homeimg from '../assets/contactimg.png';

export default function Header() {
    return (
        <div className="navbar flex">
            <Link to='/'><div className='logo' style={{
                height: '70px',
                width: '70px',
                marginLeft: '20px',
                backgroundImage: `url(${homeimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            </div></Link>
            <div className="inside-container flex">
                <li><Link to='/features'>Features</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/testimonials'>Testimonials</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </div>
        </div>
    );
}