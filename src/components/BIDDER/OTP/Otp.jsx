import React, { useState } from 'react';
import './Otp.css'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';

const OTP = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
  
    const handleChange = (element, index) => {
      if (!isNaN(element.value)) {
        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);
  
        if (element.nextSibling && element.value) {
          element.nextSibling.focus();
        }
      }
    };
  
    const handleKeyDown = (element, index) => {
      if (element.key === "Backspace" && index > 0 && !otp[index]) {
        element.target.previousSibling.focus();
      }
    };
  
    return (
      <form className="ootp">
        <h3 className='textOtp'>Enter 6-Digit OTP</h3>
        <div className="otp-area">
          {otp.map((data, index) => (
            <input
              type="text"
              maxLength="1"
              key={index}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onFocus={(e) => e.target.select()}
            />
          ))}
        </div>
        <Link to='/Envelope'> <button type="submit" className="buttonOtp">Confirm Account</button></Link>

      </form>
    );
  };
  
  export default OTP;
  
