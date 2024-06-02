import ItalyMap from '../ItalyMap/ItalyMap';
import banner from '../assets/banner/quote_banner_1.webp';
import pic from '../assets/states data/apulia.jpg';
import '../Home/Home.css';
import Footer from '../Footer/Footer';

export default function ItalianRegion() {
    return (
        <>
            <div
                className="hero-section"
                style={{
                    backgroundImage: `url(${pic})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            ></div>
            <div className='carousel-caption'>
                <h1 className='carousel-label'>Italian Region</h1>
            </div>

            <div className="state-banner" style={{
                backgroundImage: `url(${banner})`
            }}>
                <h1>
                    Explore Italy's captivating regions, from Lazio's historic ruins to Emilia-Romagna's culinary delights. Experience diverse beauty and rich traditions, creating unforgettable memories in this enchanting country.
                </h1>
            </div>

            <div className="map-section inner-container">
                <ItalyMap />
            </div>

            <Footer />
        </>
    );
}