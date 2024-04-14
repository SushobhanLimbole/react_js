import './features.css';

export default function FeaturesCard(props) {
    return (
        <img src={props.url} alt='img' className="features-card"></img>
    );
}