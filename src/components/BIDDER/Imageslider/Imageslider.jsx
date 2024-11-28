import React, { useState, useEffect } from "react";
import "./ImageSlider.css"; // Assuming you have some CSS for styling
import property1 from "../../../assets/slider/property1.jpg";
import property2 from "../../../assets/slider/property2.jpg";
import property3 from "../../../assets/slider/property3.jpg";
import property4 from "../../../assets/slider/property4.jpg";

const images = [property1, property2, property3, property4];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="slider-bidder">
      <div className="slide-bidder">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slide-image"
          height="500px"
          width="500px"
        />
        <div className="caption">{[currentIndex]}</div>
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
