import Card from "./card";
import './style.css'

function Section1(props) {
    return (
        <div className="big-container">
            <h1>{props.title}</h1>
            <div className="container flex">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
}

export default Section1;