// import React, { useRef } from 'react';
// import './Carousel.css'; 
// import pic1 from './assets/bg.jpg';
// import pic2 from './assets/collo.jpg';
// import pic3 from './assets/logo.png';
// import pic4 from './assets/logo1.png';

// function Slider() {
//   const slidesContainerRef = useRef(null);
//   const slideRef = useRef(null);

//   const handleNextClick = () => {
//     const slideWidth = slideRef.current.clientWidth;
//     slidesContainerRef.current.scrollLeft += slideWidth;
//   };

//   const handlePrevClick = () => {
//     const slideWidth = slideRef.current.clientWidth;
//     slidesContainerRef.current.scrollLeft -= slideWidth;
//   };

//   const slides = [(<li className="slide" ref={slideRef}></li>),(<li className="slide" ref={slideRef}></li>),(<li className="slide" ref={slideRef}></li>),(<li className="slide" ref={slideRef}></li>),(<li className="slide" ref={slideRef}></li>)]

//   return (
//     <section className="slider-wrapper">
//       <button className="slide-arrow" id="slide-arrow-prev" onClick={handlePrevClick}>
//         &#8249;
//       </button>
//       <button className="slide-arrow" id="slide-arrow-next" onClick={handleNextClick}>
//         &#8250;
//       </button>
//       <ul className="slides-container" id="slides-container" ref={slidesContainerRef}>
//         {/* <li className="slide" ref={slideRef}></li>
//         <li className="slide"></li>
//         <li className="slide"></li>
//         <li className="slide"></li> */}
//         {/* {
//           slides.map((slide) => (
//             slide
//           ))
//         } */}
//         <div className="slide" ref={slideRef}><img src={pic1} alt="pic1" /></div>
//         <div className="slide"><img src={pic2} alt="pic2" /></div>
//         <div className="slide"><img src={pic3} alt="pic3" /></div>
//         <div className="slide"><img src={pic4} alt="pic4" /></div>
//       </ul>
//     </section>
//   );
// }

// export default Slider;

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'; 
import pic1 from './assets/bg.jpg';
import pic2 from './assets/collo.jpg';
import pic3 from './assets/logo.png';
import pic4 from './assets/logo1.png';

function UncontrolledExample() {

  const slides = [pic1,pic2,pic3,pic4];
  return (
    <Carousel >
      {
        slides.map((slide) => (
          <Carousel.Item interval={2000}>
        <div
          style={{
            height: '100vh',
            width: '100%',
            backgroundImage: `url(${slide})`,
            backgroundSize: 'cover'
          }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default UncontrolledExample;
