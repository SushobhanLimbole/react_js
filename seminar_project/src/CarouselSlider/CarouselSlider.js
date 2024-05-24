import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselSlider.css'; 
import { slides } from './slides';

export default function CarouselSlider() {

  return (
    <Carousel fade={true}>
      {   
        slides.map((slide) => (
          <Carousel.Item interval={3000}>
        <div
          style={{
            height: '91vh',
            width: '100%',
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition:'center'
          }}
        />
        <Carousel.Caption>
          <h1 className='carousel-label'>{slide.loc_name}</h1>
          <h3 className='carousel-capt'>{slide.caption}</h3>
        </Carousel.Caption>
      </Carousel.Item>
        ))
      }
    </Carousel>
  );
}
