import React, { useState, useEffect } from 'react';
import ItalyMap from './ItalyMap'; // Import the desktop version component
import ItalyMobileMap from './ItalyMobile'; // Import the mobile version component

function MapSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 980); // Adjust breakpoint as needed
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="map-section inner-container">
      {isMobile ? (
        <ItalyMobileMap /> // Render mobile version on smaller screens
      ) : (
        <ItalyMap /> // Render desktop version on larger screens
      )}
    </div>
  );
}

export default MapSection;
