import React from 'react';
import './Footer.css'
import logo3 from '../../assets/logo3.jpeg'
 
const Footer = () =>{
  return (
    <footer className="footer">
    <div className='bid'>
    <div><img src={logo3} alt="BidHub" className="bidImage" /></div>
    <div className='logoText'><h2><span>AGILE</span><br></br><h5>Bid Hub</h5></h2></div>
    </div>
    <hr className=''/>
    <div className='footerItems'>
  <ul>
    <li className='footerHeader'>Reach Us</li>
    <li>+254758497753</li>
    <li>info@agilebidhub.com</li>
    <li>P.O Box 28245-00100 GPO,<br></br>Nairobi,Kenya.</li>
  </ul>
  <ul>
    <li className='footerHeader'>Company</li>
    <li>About</li>
    <li>Contact</li>
    <li>Blogs</li>
  </ul>
  <ul>
    <li className='footerHeader'>Legal</li>
    <li>Privacy Policy</li>
    <li>Terms & Services</li>
    <li>Terms Of Use</li>
    <li>Refund Policy</li>
  </ul>
  <ul>
    <li className='footerHeader'>Quick Links</li>
    <li>Services</li>
    <li>Downloads</li>
    <li>Forum</li>
  </ul>
  <div className='newsletter'>
   <form className="footerForm">
   <h2>Join our newsletter</h2>
    <input className="finput"type="email" placeholder='Your email address' />
    <button className="fbutton">Subscribe</button>
    <h5>* We'll send you weekly updates for your better tool management</h5>
   </form>
  </div>
    </div>
    </footer>
  );
}
 
export default Footer;
 