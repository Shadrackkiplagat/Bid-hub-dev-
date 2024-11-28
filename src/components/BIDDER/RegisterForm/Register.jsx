import React, { useState } from "react";
import "./Register.css";
import OTPNotice from "./Otpnotice";
import Flag from "../../../assets/Shape/Shape/Status/flag.svg";
import DropDown from "../../../assets/Arrow - Down 2.svg";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleAgreeClick = () => {
    setPopupVisible(true); // Show the popup when clicking "I Agree to the User Agreement"
    document.body.style.overflow = "hidden"; // Disable page scrolling
  };
  const closePopup = () => {
    setPopupVisible(false); // Close OTP popup when needed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with: ", { email, password });
    // You can add form validation and authentication logic here
  };

  return (
    <div className="reg-container">
      <form onSubmit={handleSubmit} className="reg-form">
        <h2>Complete Account Setup</h2>
        <div className="input-container">
          <div className="row-items">
            <div className="column-1">
              <div className="inputGroupC">
                <label>First Name</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your First Name"
                />
              </div>
              <div className="inputGroupC">
                <label>Username</label>
                <input
                  type="text"
                  /*value={username}*/
                  placeholder="Your Username"
                  /*onChange={(e) => setusername(e.target.value)}*/
                  // required
                />
              </div>
              <div className="inputGroupC">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  // required
                />
              </div>
              <div className="inputGroupC">
                <label>Company</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your Company (Optional)"
                  // required
                />
              </div>
              <div className="inputGroupC">
                <div className="phone-number">
                  <div className="country-code">
                    <img className="flag" src={Flag} alt="Flag" />
                    <input type="text" placeholder="+254" />
                    <img className="drop-down" src={DropDown} alt="Drop-Down" />
                  </div>
                  <div className="pn-input">
                    <label>Phone Number</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="723456789"
                      // required
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* End of First column items */}
            <div className="column-2">
              <div className="inputGroupC">
                <label>Last Name</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Last Name"
                  // required
                />
              </div>
              <div className="inputGroupC">
                <label>Physical Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Address"
                  // required
                />
              </div>
              {/* End of second column */}
              {/* <div className="inputGroupC">
          <label>Password</label>
          <input
            type="password"
            placeholder='Enter your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // required
          />
        </div> */}
            </div>
          </div>
          {/* Consent Section */}
          <div className="consent">
            <h5>
              Please give your consent for electronic marketing communications.
            </h5>
            <input
              type="radio"
              name="options"
              value="option1"
              // checked={selectedOption === 'option1'}
              // onChange={handleOptionChange}
            />
            Yes, I would like to receive electronic marketing communications
            <br></br>
            <input
              type="radio"
              name="options"
              value="option2"
              // checked={selectedOption === 'option2'}
              // onChange={handleOptionChange}
            />
            No, please do not send any electronic marketing communications
          </div>
          <div className="agreement">
            <h5>
              By Clicking the "I Agree to the User Agreement" button, you are
              bound to the <u>User Agreement.</u>If you disagree with the terms
              and conditions of this User Agreement, you may not complete your
              account registration,gain access, or otherwise use the Sites or te
              Services.{" "}
            </h5>
            <div className="agreement-buttons">
              <button className="disagree">I Disagree </button>
              <button className="agree" onClick={handleAgreeClick}>
                I Agree to the User Agreement
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* OTP Popup */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <OTPNotice /> {/* Render your OTPNotice component */}
            <button onClick={closePopup} className="close-popup">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default RegisterForm;
