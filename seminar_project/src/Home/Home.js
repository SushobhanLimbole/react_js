import "./Home.css";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import { foodNavContent } from "./nav_content";
import { useState } from "react";
import ContentBox from "../ContentBox/ContentBox";
import UNESCONav from "../NavContent/UNESCONav";
import CastlesNav from "../NavContent/CastlesNav";
import banner from '../assets/banner/quote_banner_1.webp';
import Footer from "../Footer/Footer";
import MapSection from "../ItalyMap/MapSection";


export default function Home() {

  const [content, setContent] = useState(1);

  const changeUNESCO = () => {
    setContent(1);
  }

  const changeCastles = () => {
    setContent(2);
  }

  const changeFood = () => {
    setContent(3);
  }

  const renderContent = () => {
    switch (content) {
      case 1:
        return <UNESCONav />
      case 2:
        return <CastlesNav />;
      case 3:
        return (<div className="unmissable-sites-content inner-container">
          {
            foodNavContent.map((data) => (
              <ContentBox contentData={data} />
            ))
          }
        </div>);
      default:
        return <UNESCONav />;
    }
  };

  return (
    <>
      <CarouselSlider />

      <div className="quote-banner" style={{
        backgroundImage: `url(${banner})`
      }}>
        <h1>
          Landscapes that will take your breath away, rich history, and
          delicious food, your trip to Italy will be nothing short of
          unforgettable.
        </h1>
      </div>

      <div class="destinations">
        <h3>DESTINATIONS</h3>
        <h1>Unmissable places</h1>
      </div>

      <div className="dest-bar inner-container">
        <button onClick={changeUNESCO} className="nav-links"><h2>UNESCO Sites</h2><div className="underline"></div></button>
        <button onClick={changeCastles} className="nav-links"><h2>Castles</h2><div className="underline"></div></button>
        <button onClick={changeFood} className="nav-links"><h2>Food</h2><div className="underline"></div></button>
      </div>

      {
        renderContent()
      }


      <div class="map-before">
        <h3>ITALY</h3>
        <h1>Discover Italy</h1>
      </div>

      {
        <MapSection/>
      }

      <Footer/>
      
    </>
  );
}
