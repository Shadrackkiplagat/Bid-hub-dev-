import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Assuming you have some CSS for styling
import House1 from '../../assets/House1.jpg';
import House11 from '../../assets/House11.jpg';
import House13 from '../../assets/House13.jpg';
import car1 from '../../assets/car1.jpg'

const images = [
  House1,
  House11,
  House13,
  car1
];

const captions = [
  "3 Bedroom House,Utawala",
  "2 Bedroom Apartment,Ruiru",
  "3 Bedroom house, Kangemi",
  "Suzuki,2015 model"
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds
   
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="slider">
      <div className="slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" height='500px' width='500px'/>
        <div className="caption">{captions[currentIndex]}</div>
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
