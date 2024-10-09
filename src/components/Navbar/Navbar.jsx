
import './Navbar.css'
import logo from '../../assets/logo.jpeg'

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
          <span className="login">Log in</span>
        </li>
        <li className="contact-register">
          <span>Contact Us</span>
          <button className="register">Register</button>
        </li>
      </ul>
    </div>
  </div>
  

  )
}

export default Navbar