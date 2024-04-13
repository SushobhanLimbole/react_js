import './features.css';
import FeaturesCard from './features_card';

export default function Features() {
    return (
        <div className="features-section">
            <h1>Features</h1>
            <div className="features-innersection">
                <FeaturesCard url='/src/assets/1.jpeg'/>
                <FeaturesCard url='/src/assets/2.avif'/>
                <FeaturesCard url='/src/assets/3.avif'/>
                <FeaturesCard url='/src/assets/4.jpeg'/>
            </div>
        </div>
    );
}