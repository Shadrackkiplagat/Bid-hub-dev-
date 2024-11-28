import React from "react";
import "./DetailsReview.css";
import backicon from "../../../assets/Shape/Shape/Status/backicon.svg";
import num1 from "../../../assets/Shape/Shape/Status/num1.svg";
import num22 from "../../../assets/Shape/Shape/Status/num22.svg";
import num33 from "../../../assets/Shape/Shape/Status/num33.svg";
import shaddie from "../../../assets/shaddie.jpg";
import pencil from "../../../assets/pencil.svg";
import sidearrow from "../../../assets/Shape/Shape/Status/sidearrow.svg";

const DetailsReview = () => {
  return (
    <div>
      <div className="create-new-role">
        <div className="roles-back-icon"></div>
        <div className="img-addrole-text">
          <img
            src={backicon}
            onClick={() => setPermission("PERMISSION")}
            alt=""
            className="roles-back-icon5"
          />
          <p className="add-role-text">Roles</p>
        </div>
        <h1 className="new-role-create">Create New Role</h1>
        <div className="add-role-info">
          <div>
            <img src={num1} alt="" className="add-role-num1" />
          </div>
          <div className="addrole-line"></div>
          <div>
            <img src={num22} alt="" />
          </div>
          <div className="add-role-line2"></div>
          <img src={num33} alt="" />
          <div className="cancel-continue-roles">
            <button className="cancel-roles-btn">Cancel</button>
            <button className="cont-roles-btn">
              <p
                className="cont-roles-text"
                onClick={() => setPermission("DETAILS")}
              >
                Continue
              </p>
            </button>
          </div>
        </div>
        <div className="role-steps">
          <p className="basic-info-role">Basic Info</p>
          <p className="permissions-role">Set Permissions</p>
          <p className="details-role">Review Details</p>
        </div>
        <div className="details-info">
          <div className="review-direction">
            <div>
              <h2 className="review-tittle">Review Role Information</h2>
              <p className="review-text">
                Do a final check to make sure everything is correct
              </p>
            </div>
            <div className="admin-review-details">
              <img src={shaddie} alt="" className="shaddie-review" />
              <div className="admin-name-text">
                <p className="admin-review-name">Isaac Kiplagat</p>
                <p className="review-admin">SuperAdmin</p>
              </div>
              <img src={pencil} alt="" className="pencil" />
            </div>
          </div>
          <div className="review-line"></div>
          <div className="flex gap-[20px]">
            <div className="role-direction-details">
              <div className="">
                <div className="title-pencil">
                  <h2 className="role-heading">Review Role Information</h2>
                  <img src={pencil} alt="" className="review-pencil" />
                </div>

                <p className="more-roles-details">
                  Duties include maintaining accurate records and catalogs,
                  managing the advertising and marketing for auctions, working
                  with vendors and clients, training staff, and implementing
                  auction guidelines.
                </p>
              </div>
              <div className="review-line5"></div>
              <div className="more-details-direction">
                <div>
                  <p>Role ID :</p>
                  <p className="role-id-details">RYP 086H</p>
                </div>
                <div>
                  <p>Role</p>
                  <p className="role-id-details">Auctions Manager</p>
                </div>
              </div>
              <div className="review-line6"></div>
              <h2 className="details-review-users">Users:</h2>
              <div>
                <div className="user-details-review">
                  <img src={shaddie} alt="" className="shaddie-pic" />
                  <div>
                    <p className="username-details">Shadrack Kiplagat</p>
                    <p className="useremail-details">shadrackk162@gmail.com</p>
                  </div>
                  <img src={sidearrow} alt="" className="sidearrow-review" />
                </div>
                <div className="review-line5"></div>
                <div className="user-details-review">
                  <img src={shaddie} alt="" className="shaddie-pic" />
                  <div>
                    <p className="username-details">Shadrack Kiplagat</p>
                    <p className="useremail-details">shadrackk162@gmail.com</p>
                  </div>
                  <img src={sidearrow} alt="" className="sidearrow-review" />
                </div>
                <div className="review-line5"></div>
                <div className="user-details-review">
                  <img src={shaddie} alt="" className="shaddie-pic" />
                  <div>
                    <p className="username-details">Shadrack Kiplagat</p>
                    <p className="useremail-details">shadrackk162@gmail.com</p>
                  </div>
                  <img src={sidearrow} alt="" className="sidearrow-review" />
                </div>
                <div className="review-line5"></div>
                <div className="user-details-review">
                  <img src={shaddie} alt="" className="shaddie-pic" />
                  <div>
                    <p className="username-details">Shadrack Kiplagat</p>
                    <p className="useremail-details">shadrackk162@gmail.com</p>
                  </div>
                  <img src={sidearrow} alt="" className="sidearrow-review" />
                </div>
                <div className="review-line5"></div>
              </div>
            </div>
            <div className="may">
              <div className="admin-title-pencil">
                <h2 className="admin-role-heading">Review Role Information</h2>
                <img src={pencil} alt="" className="review-pencil" />
              </div>
              <div className="reviewline7"></div>
              <h2 className="auctioneer-head-details">
                Approve Auctioneers-level 1
              </h2>
              <p className="auctioneer-text-details">
                This allows access to create new roles for auctioneers
              </p>
              <div className="reviewline7"></div>
              <h2 className="auctioneer-head-details">
                Approve Auctioneers-level 1
              </h2>
              <p className="auctioneer-text-details">
                This allows access to create new roles for auctioneers
              </p>
              <div className="reviewline7"></div>
              <h2 className="auctioneer-head-details">
                Approve Auctioneers-level 1
              </h2>
              <p className="auctioneer-text-details">
                This allows access to create new roles for auctioneers
              </p>
              <div className="reviewline7"></div>
              <h2 className="auctioneer-head-details">
                Approve Auctioneers-level 1
              </h2>
              <p className="auctioneer-text-details">
                This allows access to create new roles for auctioneers
              </p>
              <div className="reviewline7"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsReview;
