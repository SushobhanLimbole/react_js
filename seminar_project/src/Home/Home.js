import "./Home.css";
import heroSection from "../assets/bg.jpg";
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import ContentBox from "../ContentBox/ContentBox";
import ItalyMap from "../ItalyMap";
import content from '../assets/bg.jpg';


export default function Home() {
  return (
    <>
      <NavBar />
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${heroSection})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="quote-banner">
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
        <Link to='/content' className="nav-links"><h2>UNESCO sites</h2><div className="underline"></div></Link>
        <Link className="nav-links"><h2>Castles</h2><div className="underline"></div></Link>
        <Link className="nav-links"><h2>Food and wine</h2><div className="underline"></div></Link>
      </div>
      <div className="unmissable-content inner-container">        
      <ContentBox/>
      <ContentBox/>
      <ContentBox/>
      <ContentBox/>
      <ContentBox/>
      <ContentBox/>
      </div>

      <div class="map-before">
        <h3>ITALY</h3>
        <h1>Discover Italy</h1>
      </div>

      <div className="map-section inner-container">
        <ItalyMap/>
        <div className="map-content">
          <img src={content} />
          <div className="map-content-name">
            <h1>Acosta Valley</h1>
            <p> is a 13th-century citadel and castle situated on a hill in Andria in the Apulia region of southeast Italy. It was built during the 1240s by King Frederick II</p>
          </div>
        </div>
      </div>
      <footer>
        <h1>Footer section</h1>
      </footer>
      <div className="footer-banner"></div>
    </>
  );
}
