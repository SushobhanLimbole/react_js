import Navbar from '../NavBar/NavBar';
import heroSection from '../assets/collo.jpg';
import './StatePage.css';
import DestBar from '../DestBar/DestBar';
import ContainerSection from '../ContainerSecttion/ContainerSection';
import ContentBox from '../ContentBox/ContentBox';

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
            <div className='carousel-caption'>
                <h1 className='carousel-label'>Venice</h1>
            </div>

            <div className="state-banner">
                <h1>
                Explore alpine wonders and medieval charm in Italy's smallest region, nestled in the heart of the Alps.
                </h1>
            </div>

            <div className='info-section'>
                <div className='info-text'>
                    <h1>Alpine Charms and Cultural Wonders: Discovering Piedmont</h1>
                    <h3>Piedmont, nestled in northwest Italy, captivates with its blend of Alpine landscapes, historic cities, and culinary delights. Turin, its capital, boasts Baroque architecture and the Egyptian Museum, while the Langhe region offers rolling vineyards producing renowned wines like Barolo. Visitors can explore the royal residences of the House of Savoy, indulge in rich truffles and chocolates in Alba, or ski in the majestic Alps. Piedmont's charm lies in its diverse offerings, from cultural treasures to scenic vistas, promising a memorable Italian experience.</h3>
                </div>
                <img className='info-pic' src={heroSection} />
            </div>

            <div className="destinations">
                <h3>Unmissable places</h3>
                <h1>What to see in Lazia</h1>
            </div>

            <div className="dest-bar inner-container">
                <button className="nav-links"><h2>UNESCO sites</h2><div className="underline"></div></button>
                <button className="nav-links"><h2>Castles</h2><div className="underline"></div></button>
            </div>

            {/* <div className="unmissable-sites-content inner-container">
                {
                    props.data.map((data) => (
                        <ContentBox contentData={data} />
                    ))
                }
            </div> */}

            <footer style={{ height: '10vh' }}></footer>
        </>
    );
}