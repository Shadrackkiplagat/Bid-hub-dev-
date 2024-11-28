import React from "react";
import "./EmailUser.css";
import camera from "../../../assets/Shape/Shape/Status/camera.jpg";

const EmailUser = () => {
  return (
    <div className="email-user-box">
      <div>
        <div className="email-img-icon">
          <img src={camera} alt="" className="users-icon-img-email" />
        </div>
        <p className="email-upload">Upload photo</p>
      </div>
      <div className="enter-email">
        <p className="email-staff-number">
          Enter Email<span className="star">*</span>
        </p>
        <input placeholder="Enter Staff Number" className="email-details-box" />
      </div>
      <div className="invitation">
        <p className="email-message">Message</p>
        <input placeholder="Invitation Message" className="email-message-box" />
      </div>
      <button className="email-user-btn004">
        <p className="send-invitation">Send Invitation</p>
      </button>
    </div>
  );
};

export default EmailUser;
