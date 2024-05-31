import Navbar from '../NavBar/NavBar';
import { allCastlesSlides, castleSlider } from './CastlesSlides';
import ContentBox2 from '../ContentBox/ContentBox2';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import banner from '../assets/banner/quote_banner_2.webp';

export default function ALLCastles() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />

            <div
                className="hero-section"
                style={{
                    backgroundImage: `url(${allCastlesSlides[20].image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            ></div>
            <div className='carousel-caption'>
                <h1 className='carousel-label'>{allCastlesSlides[20].title}</h1>
                <h3 className='carousel-capt'>{allCastlesSlides[20].loc}</h3>
            </div>


            <div className="state-banner" style={{
                backgroundImage: `url(${banner})`
            }}>
                <h1>
                Unveil the secrets of Italy's majestic castles, where every stone tells a story and every tower touches the sky.
                </h1>
            </div>

            <div className='info-section'>
                <div className='info-text'>
                    <h1>Discover Italy's Majestic Castles</h1>
                    <h3>Explore the enchanting world of Italy's castles, from the iconic Castel Sant'Angelo in Rome to the unique Castel del Monte in Apulia. Each castle offers a glimpse into the past, with stunning architecture and fascinating histories that captivate every visitor. Journey through Italy and uncover the timeless beauty of these historic fortresses.</h3>
                </div>
                <img className='info-pic' src={allCastlesSlides[11].image} />
            </div>

            <div className="destinations">
                <h3>Unmissable places</h3>
                <h1>Italy's Majestic Castles</h1>
            </div>

            {/* <div className="unmissable-sites-content inner-container">
                {
                    allCastlesSlides.map((data) => (
                        <ContentBox2 contentData={data} />
                    ))
                }
            </div> */}

            <Carousel activeIndex={index} onSelect={handleSelect} slide={false}>
                {
                    castleSlider.map((slide) => (
                        <Carousel.Item>
                            <div className="unmissable-sites-content inner-container">
                                {
                                    slide.slides.map((data) => (
                                        <ContentBox2 contentData={data} />
                                    ))
                                }
                            </div>
                        </Carousel.Item>
                    ))
                }
            </Carousel>

            <footer style={{ height: '10vh' }}></footer>
        </>
    );
}