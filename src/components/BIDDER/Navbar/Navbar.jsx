import "./Navbar.css";
import logo from "../../../assets/logo.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <img src={logo} alt="Hero" className="hero-image" />
        <div className="search-container">
          <input
            type="text"
            placeholder="Search items"
            className="search-input"
          />
        </div>
        <ul>
          <li>Online Auctions</li>
          <li>Live Auctions</li>
          <li className="tenders-login">
            <span>Tenders</span>
            <Link to="./login">
              <button className="bidder-login">
                <div className="login">Log in</div>
              </button>
            </Link>
          </li>
          <li className="contact-register">
            <span>Contact Us</span>
            <Link to="./register">
              <button className="register">Register</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
