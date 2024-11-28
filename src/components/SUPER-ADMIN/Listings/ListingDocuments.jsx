import React from "react";
import "./ListingDocuments.css";
import backicon from "../../../assets/Shape/Shape/Status/backicon.svg";
import num1 from "../../../assets/Shape/Shape/Status/num1.svg";
import num22 from "../../../assets/Shape/Shape/Status/num22.svg";
import num33 from "../../../assets/Shape/Shape/Status/num33.svg";
import num4 from "../../../assets/Shape/Shape/Status/num4.svg";

const ListingDocuments = ({ openAddListings, setOpenAddListings }) => {
  return (
    <div>
      <div className="create-new-list">
        <div
          className="roles-back-icon"
          onClick={() => setOpenAddListings(false)}
        ></div>
        <div className="img-list-text">
          <img src={"backicon"} alt="" className="list-back-icon5" />
          <p className="add-list-text">Listings</p>
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
            <img src={num33} alt="" className="add-list-num3" />
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
        <div className="cancel-continue-list">
          <button className="cancel-list-btn">Cancel</button>
          <button className="cont-list-btn">
            <p
              className="cont-list-text"
              onClick={() => setOpenAddListings("PREVIEW")}
            >
              Continue
            </p>
          </button>
        </div>
        <div className="list-new-upload">
          <div className="create-title-listing">
            <h2>Create New Post</h2>
          </div>
          <p className="property-title">Add details about property.</p>
          <div className="property-line"></div>
          <div className="plate-number">
            <div className="plate-direction">
              <p className="lr-number">LR Number/Plate Number </p>
              <p className="upload-star">*</p>
            </div>
          </div>
          <div className="plate-number">
            <div className="plate-direction">
              <p className="lr-number">LR Number/Plate Number </p>
              <p className="upload-star">*</p>
            </div>
          </div>
          <div className="plate-number">
            <div className="plate-direction">
              <p className="lr-number">LR Number/Plate Number </p>
              <p className="upload-star">*</p>
            </div>
          </div>
          <div className="plate-number">
            <div className="plate-direction">
              <p className="lr-number">LR Number/Plate Number </p>
              <p className="upload-star">*</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDocuments;
