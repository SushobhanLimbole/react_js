import Navbar from '../NavBar/NavBar';
import heroSection from '../assets/collo.jpg';
import './StatePage.css';

export default function StatePage() {
    return (
        <>
            <Navbar/>
            <div
                className="hero-section"
                style={{
                    backgroundImage: `url(${heroSection})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            ></div>

            <div className="state-banner">
                <h1>
                    Landscapes that will take your breath away, rich history, and
                    delicious food, your trip to Italy will be nothing short of
                    unforgettable.
                </h1>
            </div>
        </>
    );
}