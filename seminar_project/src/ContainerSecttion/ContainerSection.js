import ContentBox from "../ContentBox/ContentBox";
import './ContainerSection.css';
import '../ContentBox/ContentBox.css';

export default function ContainerSection(props) {
    console.log(props.data);
    return (
        <div className="unmissable-sites-content inner-container">
            {
                props.data.map((data) => (
                    <ContentBox contentData={data}/>
                ))
            }
            <button className="see-more-button">See More</button>
        </div>
    );
}