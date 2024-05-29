import Navbar from '../NavBar/NavBar';
import heroSection from '../assets/Italy/henrique-ferreira-RKsLQoSnuTc-unsplash.jpg';
import smallSection from '../assets/all_unesco/31_villa_tivoli.jpg';
import './ALLUNESCO.css';
import ContentBox1 from '../ContentBox/ContentBox1';
import { unescoSlides } from './UnescoSlides';

export default function ALLUNESCO() {

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
            <div className='carousel-caption'>
                <h1 className='carousel-label'>Venice</h1>
                <h3 className='carousel-capt'>The Floating City</h3>
            </div>


            <div className="state-banner">
                <h1>
                Discover Italy's UNESCO World Heritage Sites, where timeless beauty and cultural wonders come together in a journey through history.
                </h1>
            </div>

            <div className='info-section'>
                <div className='info-text'>
                    <h1>Discover Italy's UNESCO World Heritage Sites</h1>
                    <h3>Explore the unparalleled beauty and cultural richness of Italy's UNESCO World Heritage Sites, from the ancient ruins of Rome's Historic Centre to the stunning landscapes of the Dolomites. Each site tells a unique story, offering a captivating journey through Italy's diverse history and heritage. Embark on an unforgettable adventure and experience the timeless wonders that make Italy truly extraordinary.</h3>
                </div>
                <img className='info-pic' src={smallSection} />
            </div>

            <div className="destinations">
                <h3>Unmissable places</h3>
                <h1>Italy's Stunning UNESCO Sites</h1>
            </div>

            <div className="unmissable-sites-content inner-container">
                {
                    unescoSlides.map((data) => (
                        <ContentBox1 contentData={data} />
                    ))
                }
            </div>

            <footer style={{ height: '10vh' }}></footer>
        </>
    );
}