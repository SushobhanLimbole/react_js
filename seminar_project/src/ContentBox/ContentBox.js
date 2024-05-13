import './ContentBox.css';
import content from '../assets/collo.jpg';

export default function ContentBox() {
    return (
        <div className="content">
          <img src={content} />
          <div className="content-name">
            <h1>Castel del Monte</h1>
            <p> is a 13th-century citadel and castle situated on a hill in Andria in the Apulia region of southeast Italy. It was built during the 1240s by King Frederick II</p>
            <h3><span class="material-symbols-outlined location-on">
              location_on
            </span>Lazio,Rome</h3>
          </div>
        </div>
    );
}