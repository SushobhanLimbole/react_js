import './features.css';
import FeaturesCard from './features_card';
// import image1 from '';

export default function Features() {
    return (
        <div className="features-section">
            <h1>Features</h1>
            <div className="features-innersection">
                <FeaturesCard url='https://assets.winni.in/product/primary/2023/8/88014.jpeg?dpr=2&w=220'/>
                <FeaturesCard url='/src/assets/2.avif'/>
                <FeaturesCard url='/src/assets/3.avif'/>
                <FeaturesCard url='/src/assets/4.jpeg'/>
            </div>
        </div>
    );
}