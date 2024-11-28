import React from "react";
import "./RolesPermission.css";
import backicon from "../../../assets/Shape/Shape/Status/backicon.svg";
import num1 from "../../../assets/Shape/Shape/Status/num1.svg";
import num22 from "../../../assets/Shape/Shape/Status/num22.svg";
import num3 from "../../../assets/Shape/Shape/Status/num3.svg";
import help from "../../../assets/Shape/Shape/Status/help.svg";

const RolesPermission = ({ openPermission, setPermission }) => {
  return (
    <div>
      <div className="create-new-role">
        <div className="roles-back-icon"></div>
        <div className="img-addrole-text">
          <img
            src={backicon}
            onClick={() => setPermission("ADD ROLE")}
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
          <img src={num3} alt="" />
          <div className="cancel-continue-roles">
            <button className="cancel-roles-btn">Cancel</button>
            <button className="cont-roles-btn">
              <p
                className="cont-roles-text"
                onClick={() => setPermission("DETAILS")}
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
      <div className="set-permission-role">
        <div>
          <p className="set-perm-roles">Set Permissions</p>
          <p className="permission-text">
            Modify what individuals on this role can do
          </p>
        </div>
        <button className="roles-report-manager">
          <p className="report-manager-txt">+ Reporting Manager</p>
          <img src={help} alt="" className="help-permission" />
        </button>
        <div className="line6"></div>
        <div className="admin-permissions">
          <h2 className="admin-access-perm">Admin Acess</h2>
          <div className="admin-perm-direction">
            <div>
              <h6 className="auctionners-tittle">Add Auctioneers</h6>
              <p className="auctionners-text">
                This allows access to create new roles for Auctioneers
              </p>
            </div>
            <div>
              <h6 className="auctionners-tittle">
                Approve Auctioneers level 1
              </h6>
              <p className="auctionners-text">
                This allows access to create new roles for Auctioneers
              </p>
            </div>
          </div>
          <div className="admin-perm-direction">
            <div>
              <h6 className="auctionners-tittle">
                Approve Auctioneers level 2
              </h6>
              <p className="auctionners-text">
                This allows access to create new roles for Auctioneers
              </p>
            </div>
            <div>
              <h6 className="auctionners-tittle">Disable Auctioneers</h6>
              <p className="auctionners-text">
                This allows access to create new roles for Auctioneers
              </p>
            </div>
          </div>
        </div>
        <div className="admin-permissions">
          <h2 className="admin-access-perm">Auctioneers Manager</h2>
          <div className="admin-perm-direction">
            <div>
              <h6 className="auctionners-tittle">Add Auctioneers</h6>
              <p className="auctionners-text">
                This allows access to create new roles for Auctioneers
              </p>
            </div>
            <div>
              <h6 className="auctionners-tittle">
                Approve Auctioneers level 1
              </h6>
              <p className="auctionners-text">
                This allows access to create new roles for Auctioneers
              </p>
            </div>
          </div>
          <div className="admin-perm-direction">
            <div>
              <h6 className="auctionners-tittle">
                Approve Auctioneers level 2
              </h6>
              <p className="auctionners-text">
                This allows access to create new roles for Auctioneers
              </p>
            </div>
            <div>
              <h6 className="auctionners-tittle">Disable Auctioneers</h6>
              <p className="auctionners-text">
                This allows access to create new roles for Auctioneers
              </p>
            </div>
          </div>
        </div>
        <div className="admin-permissions">
          <h2 className="admin-access-perm">Auctions Manager</h2>
          <div className="admin-perm-direction">
            <div>
              <h6 className="auctionners-tittle">Add Auctioneers</h6>
              <p className="auctionners-text">
                This allows access to create new roles for Auctioneers
              </p>
            </div>
            <div>
              <h6 className="auctionners-tittle">
                Approve Auctioneers level 1
              </h6>
              <p className="auctionners-text">
                This allows access to create new roles for Auctioneers
              </p>
            </div>
          </div>
          <div className="admin-perm-direction">
            <div>
              <h6 className="auctionners-tittle">
                Approve Auctioneers level 2
              </h6>
              <p className="auctionners-text">
                This allows access to create new roles for Auctioneers
              </p>
            </div>
            <div>
              <h6 className="auctionners-tittle">Disable Auctioneers</h6>
              <p className="auctionners-text">
                This allows access to create new roles for Auctioneers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesPermission;
