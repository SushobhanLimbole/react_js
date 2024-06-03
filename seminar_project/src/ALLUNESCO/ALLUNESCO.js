import heroSection from '../assets/Italy/henrique-ferreira-RKsLQoSnuTc-unsplash.jpg';
import smallSection from '../assets/all_unesco/31_villa_tivoli.jpg';
import './ALLUNESCO.css';
import ContentBox1 from '../ContentBox/ContentBox1';
import { unescoSlider, unescoSlides } from './UnescoSlides';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import banner from '../assets/banner/quote_banner_2.webp';
import Footer from '../Footer/Footer';


export default function ALLUNESCO() {

    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    
    
    useEffect(() => {
        window.scrollTo(0, 0);
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1500); // Adjust breakpoint as needed
        };

        // Initial check on component mount
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>

            <div
                className="hero-section"
                style={{
                    backgroundImage: `url(${heroSection})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div className='carousel-caption'>
                    <h1 className='carousel-label'>Venice</h1>
                    <h3 className='carousel-capt'>The Floating City</h3>
                </div>
            </div>


            <div className="state-banner" style={{
                backgroundImage: `url(${banner})`
            }}>
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

            {
                isMobile ? <div className="unmissable-sites-content inner-container">
                {
                    unescoSlides.map((state) => (
                        <ContentBox1 contentData={state} />
                    ))
                }
            </div> : <Carousel activeIndex={index} onSelect={handleSelect} slide={false}>
                {
                    unescoSlider.map((slide) => (
                        <Carousel.Item>
                            <div className="unmissable-sites-content inner-container">
                                {
                                    slide.slides.map((data) => (
                                        <ContentBox1 contentData={data} />
                                    ))
                                }
                            </div>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
            }

            <Footer />
        </>
    );
}