import { useNavigate } from "react-router-dom";
import ContentBox from "../ContentBox/ContentBox";
import { castlesNavContent } from "../Home/nav_content";

export default function CastlesNav() {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/castles');
    }

    return (
        <div className="unmissable-sites-content inner-container">
            {
                castlesNavContent.map((data) => (
                    <ContentBox contentData={data}/>
                ))
            }
            <button onClick={handleNavigate} className="see-more-button">See More</button>
        </div>
    );
}