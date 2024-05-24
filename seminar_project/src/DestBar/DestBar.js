// import { div } from "react-router-dom";
import './DestBar.css';

export default function DestBar(props) {
    const dest = ['UNESCO Sites','Castles','Food and Wine'];
    return (
        <div className="dest-bar inner-container">
                {
                    dest.map((element) => (
                        <button className="nav-links"><h2>{element}</h2><div className="underline"></div></button>
                    ))
                }
            </div>
    );
}