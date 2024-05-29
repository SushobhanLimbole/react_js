import { useNavigate } from "react-router-dom";
import ContentBox from "../ContentBox/ContentBox";
import { unescoNavContent } from "../Home/nav_content";
import '../Home/Home.css';


export default function UNESCONav() {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/unesco');
    }

    return (
        <div className="unmissable-sites-content inner-container">
            {
                unescoNavContent.map((data) => (
                    <ContentBox contentData={data}/>
                ))
            }
            <button onClick={handleNavigate} className="see-more-button">See More</button>
        </div>
    );
}