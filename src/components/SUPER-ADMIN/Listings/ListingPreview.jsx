import React from "react";
import "./ListingPreview.css";
import backicon from "../../../assets/Shape/Shape/Status/backicon.svg";
import num1 from "../../../assets/Shape/Shape/Status/num1.svg";
import num22 from "../../../assets/Shape/Shape/Status/num22.svg";
import num33 from "../../../assets/Shape/Shape/Status/num33.svg";
import num44 from "../../../assets/Shape/Shape/Status/num44.svg";
const ListingPreview = ({ openAddListings, setOpenAddListings }) => {
  return (
    <div>
      <div className="create-new-list">
        <div
          className="roles-back-icon"
          onClick={() => setOpenAddListings(false)}
        ></div>
        <div className="img-list-text">
          <img src={backicon} alt="" className="list-back-icon5" />
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
            <img src={num44} alt="" className="add-list-num4" />
          </div>
        </div>
        <div className="list-steps">
          <p className="basic-info-list">Basic Info</p>
          <p className="permissions-list">Upload photos</p>
          <p className="details-list">Upload Documents</p>
          <p className="preview-list">Preview</p>
        </div>
      </div>
    </div>
  );
};

export default ListingPreview;
