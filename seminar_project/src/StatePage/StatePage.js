import Navbar from '../NavBar/NavBar';
import heroSection from '../assets/collo.jpg';
import './StatePage.css';
import DestBar from '../DestBar/DestBar';
import ContainerSection from '../ContainerSecttion/ContainerSection';

export default function StatePage() {
    
    return (
        <>
            <Navbar />
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

            <div className='info-section'>
                <div className='info-text'>
                    <h1>Explore the Timeless Allure of Lazio</h1>
                    <h3>Step into a realm where the echoes of ancient civilizations resonate alongside the vibrant pulse of contemporary life. Welcome to Lazio, a region nestled in the heart of Italy, where the past and present converge in a mesmerizing fusion of history, culture, and natural beauty. From the storied streets of Rome to the tranquil countryside, Lazio beckons travelers to embark on an unforgettable odyssey through the ages.</h3>
                </div>
                <img className='info-pic' src={heroSection} />
            </div>

            <div className="destinations">
                <h3>Unmissable places</h3>
                <h1>What to see in Lazia</h1>
            </div>

            <DestBar />
            

            <footer style={{ height: '10vh' }}></footer>
        </>
    );
}