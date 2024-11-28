import React from "react";
import "./AddRole.css";
import backicon from "../../../assets/Shape/Shape/Status/backicon.svg";
import num1 from "../../../assets/Shape/Shape/Status/num1.svg";
import num2 from "../../../assets/Shape/Shape/Status/num2.svg";
import num3 from "../../../assets/Shape/Shape/Status/num3.svg";
import help from "../../../assets/Shape/Shape/Status/help.svg";
import arrow from "../../../assets/Shape/Shape/Status/arrow.svg";

const AddRole = ({ openPermission, setPermission }) => {
  return (
    <div>
      <div className="create-new-role">
        <div className="roles-back-icon"></div>
        <div className="img-addrole-text">
          <img
            src={backicon}
            onClick={() => setPermission("ROLES")}
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
            <img src={num2} alt="" />
          </div>
          <div className="add-role-line2"></div>
          <img src={num3} alt="" />
          <div className="cancel-continue-roles">
            <button className="cancel-roles-btn">Cancel</button>
            <button className="cont-roles-btn">
              <p
                className="cont-roles-text"
                onClick={() => setPermission("PERMISSION")}
              >
                {" "}
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
      </div>
      <div className="basic-details-row">
        <h1 className="basic-new-role">Create New Role</h1>
        <p className="new-role-details">
          Add basic details about this role you are creating.
          <button className="roles-reporting-manager">
            <p className="reporting-manager-text">
              <b className="plus-sign">+</b> Add Reporting Manager
              <img src={help} alt="" className="help-role-pic" />
            </p>
          </button>
        </p>
        <div className="rmanager-line"></div>
        <div className="title-job">
          <div className="auctioneer-manager-box">
            <p>Title</p>
            <p>Auctioneers Manager</p>
          </div>
          <div className="job-level">
            <p>Job Level</p>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="new-role-description">
          <p className="description-help">
            Description <img src={help} alt="" className="help-role-pic" />
          </p>
          <p>
            Ensure all auction stock is suitably prepared for sale,
            photographed, and displayed on the company website. Manage and
            coordinate the workloads of all yard staff and subcontractors.
            Liaise with the marketing team to ensure all equipment is
            photographed.
          </p>
        </div>
        <div className="add-users-roles">
          <p>
            Add users <img src={help} alt="" className="help-role-pic" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddRole;
