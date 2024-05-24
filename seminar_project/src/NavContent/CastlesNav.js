import ContentBox from "../ContentBox/ContentBox";
import { castlesNavContent } from "../Home/nav_content";

export default function CastlesNav() {
    return (
        <div className="unmissable-sites-content inner-container">
            {
                castlesNavContent.map((data) => (
                    <ContentBox contentData={data}/>
                ))
            }
            <button className="see-more-button">See More</button>
        </div>
    );
}