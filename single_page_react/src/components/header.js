import './header.css';

export default function Header() {
    return (
        <div className="navbar flex">
            <div className="inside-container flex">
                <a href="">Home</a>
                <a href="">Features</a>
                <a href="">Testimonials</a>
                <a href="">Contact</a>
                <a href="">Services</a>
            </div>
        </div>
    );
}