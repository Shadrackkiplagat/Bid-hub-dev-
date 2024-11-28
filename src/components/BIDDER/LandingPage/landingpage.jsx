import React, { useState, useEffect } from "react";
import "./ImageSlider.css"; // Assuming you have some CSS for styling
import House1 from "../../../assets/House1.jpg";
import House11 from "../../../assets/House11.jpg";
import House13 from "../../../assets/House13.jpg";
import car1 from "../../../assets/car1.jpg";
import "./Tittle.css";
import "./Items.css";
import house4 from "../../../assets/house4.jpg";
import house5 from "../../../assets/house5.jpg";
import house6 from "../../../assets/house6.jpg";
import car2 from "../.././assets/car2.jpg";
import eye2 from "../../../assets/eye2.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Heading2.css";
import "./Items2.css";
import house14 from "../../../assets/house14.jpg";
import house12 from "../../../assets/house12.jpg";
import house9 from "../../../assets/house9.jpg";
import house13 from "../../../assets/house13.jpg";
import "./Heading3.css";
import "./Items3.css";
import house19 from "../../../assets/house19.jpg";
// import house14 from '../../assets/house14.jpg'
import house15 from "../../assets/house15.jpg";
import house16 from "../../../assets/house16.jpg";
import "./Heading4.css";
import "./Items4.css";
// import house16 from '../../assets/house16.jpg'
import house17 from "../../../assets/house17.jpg";
import house20 from "../../../assets/house20.jpg";
// import house19 from '../../assets/house19.jpg'

const images = [House1, House11, House13, car1];

const captions = [
  "3 Bedroom House,Utawala",
  "2 Bedroom Apartment,Ruiru",
  "3 Bedroom house, Kangemi",
  "subaru forester,2015 model",
];

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="all-content">
      {/* slider section */}
      <div className="slider">
        <div className="slide">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="slide-image"
            height="500px"
            width="500px"
          />
          <div className="caption">{captions[currentIndex]}</div>
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

      {/* // tittle section*/}
      <div>
        <div className="Tittle">
          <h2>Trending Items</h2>
        </div>
      </div>

      {/* Items section */}
      <div className="Items">
        <div className="Item">
          <img src={house4} alt="" />
          <div>
            <p>4 Bedroom Bungalow,own compound,all ensuite</p>
            <p>Kitisuru,Nairobi,Kenya</p>
            <p>Start:3rd oct,2024</p>
            <p>End:5th Oct,2024</p>
            <Link to="/house44">
              {" "}
              <p>
                {" "}
                <button className="btn-trending">
                  <div className="eyeimg">
                    {" "}
                    <img src={eye2} alt="" />
                  </div>{" "}
                  More Details{" "}
                </button>
              </p>
            </Link>
          </div>
        </div>
        <div className="Item">
          <img src={car2} alt="" />
          <div>
            <p>2015 subaru model,sunroof</p>
            <p>Uthiru,Nairobi Kenya</p>
            <p>Start:3rd oct,2024</p>
            <p>End:5th oct,2024</p>
            <p>
              {" "}
              <button className="btn">More Details </button>
            </p>
          </div>
        </div>
        <div className="Item">
          <img src={house5} alt="" />
          <div>
            <p> 3 Bedroom Bungalow,fully furnished</p>
            <p>Thika,Kiambu,Kenya</p>
            <p>Start:3rd oct.2024</p>
            <p>End:5th oct,2024</p>
            <p>
              {" "}
              <button className="btn">More Details </button>
            </p>
          </div>
        </div>
        <div className="Item">
          <img src={house6} alt="" />
          <div>
            <p>2 Bedroom house,own compound,all ensuite</p>
            <p>Kitisuru,Nairobi,Kenya</p>
            <p>Start:3rd Oct,2024</p>
            <p>End:5th oct,2024</p>
            <p>
              {" "}
              <button className="btn">More Details </button>
            </p>
          </div>
        </div>
      </div>
      {/* items 2 section */}
      <div className="Items2">
        <div className="Item">
          <img src={house12} alt="" />
          <div>
            <p> 3 Bedroom Bungalow</p>
            <p>Thika,Kiambu,Kenya</p>
            <p>Start:3rd oct.2024</p>
            <p>End:5th oct,2024</p>
            <p>
              {" "}
              <button className="btn">More Details </button>
            </p>
          </div>
        </div>
        <div className="Item">
          <img src={house13} alt="" />
          <div>
            <p>2 Bedroom house,own compound,all ensuite</p>
            <p>Kitisuru,Nairobi,Kenya</p>
            <p>Start:3rd Oct,2024</p>
            <p>End:5th oct,2024</p>
            <p>
              <p>
                {" "}
                <button className="btn">More Details </button>
              </p>
            </p>
          </div>
        </div>
        <div className="Item">
          <img src={house14} alt="" />
          <div>
            <p> 3 Bedroom Bungalow,fully furnished</p>
            <p>Thika,Kiambu,Kenya</p>
            <p>Start:3rd oct.2024</p>
            <p>End:5th oct,2024</p>
            <p>
              {" "}
              <button className="btn">More Details </button>
            </p>
          </div>
        </div>
        <div className="Item">
          <img src={house9} alt="" />
          <div>
            <p> 3 Bedroom Bungalow,fully furnished</p>
            <p>Thika,Kiambu,Kenya</p>
            <p>Start:3rd oct.2024</p>
            <p>End:5th oct,2024</p>
            <p>
              {" "}
              <button className="btn">More Details </button>
            </p>
          </div>
        </div>
        {/*<div className="Item">
            <img src={house10} alt="" />
        </div>*/}
      </div>
      {/* Heading 3 section */}
      <div className="Heading3">
        <h1>Ending Soon</h1>
      </div>
      {/* items 3 section */}
      <div className="Items3">
        <div className="Item">
          <img src={house13} alt="" />
          <div>
            <p> 3 Bedroom Bungalow,fully furnished</p>
            <p>Thika,Kiambu,Kenya</p>
            <p>Start:3rd oct.2024</p>
            <p>End:5th oct,2024</p>
            <p>
              {" "}
              <button className="btn">More Details </button>
            </p>
          </div>
        </div>
        <div className="Item">
          <img src={house14} alt="" />
          <div>
            <p> 3 Bedroom Bungalow,fully furnished</p>
            <p>Thika,Kiambu,Kenya</p>
            <p>Start:3rd oct.2024</p>
            <p>End:5th oct,2024</p>
            <p>
              {" "}
              <button className="btn">More Details </button>
            </p>
          </div>
        </div>
        <div className="Item">
          <img src={house16} alt="" />
          <div>
            <p> 3 Bedroom Bungalow,fully furnished</p>
            <p>Thika,Kiambu,Kenya</p>
            <p>Start:3rd oct.2024</p>
            <p>End:5th oct,2024</p>
            <p>
              {" "}
              <button className="btn">More Details </button>
            </p>
          </div>
        </div>
        <div className="Item">
          <img src={house15} alt="" />
          <div>
            <p> 3 Bedroom Bungalow,fully furnished</p>
            <p>Thika,Kiambu,Kenya</p>
            <p>Start:3rd oct.2024</p>
            <p>End:5th oct,2024</p>
            <p>
              {" "}
              <button className="btn">More Details </button>
            </p>
          </div>
        </div>
        {/* <div className="Item">
            <img src={car4} alt="" />
        </div>*/}
      </div>
      {/* heading 4 section */}
      <div className="Heading4">
        <h3>Saved for later</h3>
      </div>
      {/* items 4 section */}
      <div className="Items4">
        <div className="Item">
          <img src={house16} alt="" />
          <div>
            <p> 3 Bedroom Bungalow,fully furnished</p>
            <p>Thika,Kiambu,Kenya</p>
            <p>Start:3rd oct.2024</p>
            <p>End:5th oct,2024</p>
            <p>
              {" "}
              <button className="btn">More Details </button>
            </p>
          </div>
        </div>
        <div className="Item">
          <img src={house17} alt="" />
          <div>
            <p> 3 Bedroom Bungalow,fully furnished</p>
            <p>Thika,Kiambu,Kenya</p>
            <p>Start:3rd oct.2024</p>
            <p>End:5th oct,2024</p>
            <p>
              {" "}
              <button className="btn">More Details </button>
            </p>
          </div>
        </div>
        <div className="Item">
          <img src={house20} alt="" />
          <div>
            <p> 3 Bedroom Bungalow,fully furnished</p>
            <p>Thika,Kiambu,Kenya</p>
            <p>Start:3rd oct.2024</p>
            <p>End:5th oct,2024</p>
            <p>
              {" "}
              <button className="btn">More Details </button>
            </p>
          </div>
        </div>
        <div className="Item">
          <img src={house19} alt="" />
          <div>
            <p> 3 Bedroom Bungalow,fully furnished</p>
            <p>Thika,Kiambu,Kenya</p>
            <p>Start:3rd oct.2024</p>
            <p>End:5th oct,2024</p>
            <p>
              {" "}
              <button className="btn">More Details </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
