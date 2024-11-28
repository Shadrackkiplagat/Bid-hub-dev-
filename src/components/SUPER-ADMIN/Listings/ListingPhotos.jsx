import React from "react";
import "./ListingPhotos.css";
import backicon from "../../../assets/Shape/Shape/Status/backicon.svg";
import num1 from "../../../assets/Shape/Shape/Status/num1.svg";
import num22 from "../../../assets/Shape/Shape/Status/num22.svg";
import num3 from "../../../assets/Shape/Shape/Status/num3.svg";
import num4 from "../../../assets/Shape/Shape/Status/num4.svg";
import camera from "../../../assets/Shape/Shape/Status/camera.jpg";

const ListingPhotos = ({ openAddListings, setOpenAddListings }) => {
  return (
    <div>
      <div className="create-new-list">
        <div
          className="roles-back-icon"
          onClick={() => setOpenAddListings(false)}
        ></div>
        <div className="img-list-text">
          <img src={backicon} alt="" className="list-back-icon5" />
          <p className="add-list-text">listings</p>
        </div>
        <h1 className="new-list-create">Create New Listing</h1>
        <div className="add-list-info">
          <div>
            <img src={num1} alt="" className="add-list-num1" />
          </div>
          <div className="addlist-line"></div>
          <div>
            <img src={num22} alt="" className="add-list-num2" />
          </div>
          <div className="add-list-line2"></div>
          <div>
            <img src={num3} alt="" className="add-list-num3" />
          </div>
          <div className="add-list-line3"></div>
          <div>
            <img src={num4} alt="" className="add-list-num4" />
          </div>
        </div>
        <div className="list-steps">
          <p className="basic-info-list">Basic Info</p>
          <p className="permissions-list">Upload photos</p>
          <p className="details-list">Upload Documents</p>
          <p className="preview-list">Preview</p>
        </div>
      </div>
      <div className="list-photos">
        <div className="create-title-listing">
          <h2>Create New Post</h2>
        </div>
        <p className="property-title">Add details about property.</p>
        <div className="property-line"></div>
        <div className="photo-direction">
          <div c lassName=" list-photo">
            <div className="photo-upload">
              <img src={camera} alt="" className="camera-upload" />
              <p className="list-upload-photo"> Upload Photo</p>
            </div>
          </div>
          <div c lassName=" list-photo">
            <div className="photo-upload">
              <img src={camera} alt="" className="camera-upload" />
              <p className="list-upload-photo"> Upload Photo</p>
            </div>
          </div>
          <div c lassName=" list-photo">
            <div className="photo-upload">
              <img src={camera} alt="" className="camera-upload" />
              <p className="list-upload-photo"> Upload Photo</p>
            </div>
          </div>
        </div>
        <div c lassName=" list-photo">
          <div className="photo-upload">
            <img src={camera} alt="" className="camera-upload" />
            <p className="list-upload-photo"> Upload Photo</p>
          </div>
        </div>
        <div className="cancel-continue-list">
          <button className="cancel-list-btn">Cancel</button>
          <button className="cont-list-btn">
            <p
              className="cont-list-text"
              onClick={() => setOpenAddListings("DETAILS")}
            >
              Continue
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingPhotos;
