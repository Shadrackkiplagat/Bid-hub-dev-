import React, { useState } from "react";
import "./Roles.css";
import RolesDescription from "../../../components/SUPER-ADMIN/Roles/RolesDescription";
import Dashboard from "../../Dashboard/dashboard";
import RolesPermission from "../../SUPER-ADMIN/Roles/RolesPermission";
import DetailsReview from "../../SUPER-ADMIN/Roles/DetailsReview";
import AddRole from "../Roles/AddRole";

const Roles = () => {
  const [openPermission, setPermission] = useState("ROLES");
  return (
    <div>
      <Dashboard>
        <div className="cards-section">
          {openPermission === "ROLES" ? (
            <RolesDescription setPermission={setPermission} />
          ) : openPermission === "ADD ROLE" ? (
            <AddRole setPermission={setPermission} />
          ) : openPermission === "PERMISSION" ? (
            <RolesPermission setPermission={setPermission} />
          ) : openPermission === "DETAILS" ? (
            <DetailsReview setPermission={setPermission} />
          ) : (
            <RolesDescription setPermission={setPermission} />
          )}
        </div>
      </Dashboard>
    </div>
  );
};

export default Roles;
